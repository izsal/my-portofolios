// components/ActivityCadence.jsx
const FALLBACK = {
  total: null,
  activeDays: null,
  longestStreak: null,
  publicRepos: null,
  weeks: [],
  monthLabels: [],
};

const formatNumber = (value) =>
  typeof value === "number" ? value.toLocaleString("en-US") : "—";

const ActivityCadence = ({ activity }) => {
  const { total, activeDays, longestStreak, publicRepos, weeks, monthLabels } =
    activity ?? FALLBACK;

  return (
    <section className="home-activity" aria-label="Engineering Cadence">
      <div className="home-activity__card">
        {/* Left: 53-week contribution heatmap */}
        <div className="home-activity__chart-wrapper">
          <div
            className="home-activity__chart"
            id="activity-heatmap-chart"
            role="img"
            aria-label={`${formatNumber(total)} GitHub contributions in the last 22 weeks`}
          >
            {weeks.length > 0 ? (
              <>
                <div className="home-activity__months" aria-hidden="true">
                  {monthLabels.map((label, index) =>
                    label ? (
                      <span
                        key={index}
                        className="home-activity__month"
                        style={{
                          left: `${(index / weeks.length) * 100}%`,
                        }}
                      >
                        {label}
                      </span>
                    ) : null
                  )}
                </div>

                <div className="home-activity__weeks">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="home-activity__week">
                      {week.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          className="home-activity__day"
                          data-level={day ? day.level : 0}
                          title={
                            day
                              ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                              : undefined
                          }
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="home-activity__empty">
                Contribution data is unavailable right now.
              </p>
            )}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="home-activity__divider" aria-hidden="true" />

        {/* Right: Metrics & stats panel */}
        <div className="home-activity__stats-panel">
          <div className="home-activity__stats-header">
            <div className="home-activity__stat-big">
              <span className="home-activity__count">{formatNumber(total)}</span>
              <span className="home-activity__sub">contributions · 22 weeks</span>
            </div>
            <a
              href="https://github.com/izsal"
              target="_blank"
              rel="noopener noreferrer"
              className="home-activity__log-link"
              title="View GitHub contribution profile"
            >
              <span>GitHub log</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>

          <div className="home-activity__stats-sep" aria-hidden="true" />

          <div className="home-activity__stats-list">
            <div className="home-activity__stat-row">
              <span className="stat-label">Active days</span>
              <span className="stat-val">
                {activeDays === null ? "—" : `${formatNumber(activeDays)} days`}
              </span>
            </div>
            <div className="home-activity__stat-row">
              <span className="stat-label">Longest streak</span>
              <span className="stat-val">
                {longestStreak === null
                  ? "—"
                  : `${formatNumber(longestStreak)} days`}
              </span>
            </div>
            <div className="home-activity__stat-row">
              <span className="stat-label">Public repos</span>
              <span className="stat-val">
                {publicRepos === null ? "—" : `${formatNumber(publicRepos)} repos`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCadence;
