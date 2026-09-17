// components/ActivityCadence.jsx
import { useMemo } from "react";

const ActivityCadence = () => {
  // Exact 22-column x 7-row matrix matching the reference cadence heatmap
  const weeks = useMemo(() => [
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 3, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1],
    [1, 2, 2, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 4, 1, 0],
  ], []);

  return (
    <section className="home-activity" aria-label="Engineering Cadence">
      <div className="home-activity__card">
        {/* Left: 22-week heatmap grid */}
        <div className="home-activity__chart-wrapper">
          <div className="home-activity__chart" id="activity-heatmap-chart">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="home-activity__week">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className="home-activity__day"
                    data-level={level}
                    title={`Day contribution level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="home-activity__divider" aria-hidden="true" />

        {/* Right: Metrics & stats panel */}
        <div className="home-activity__stats-panel">
          <div className="home-activity__stats-header">
            <div className="home-activity__stat-big">
              <span className="home-activity__count">3,816</span>
              <span className="home-activity__sub">contributions last year</span>
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
              <span className="stat-val">178 days</span>
            </div>
            <div className="home-activity__stat-row">
              <span className="stat-label">Longest streak</span>
              <span className="stat-val">83 days</span>
            </div>
            <div className="home-activity__stat-row">
              <span className="stat-label">Public repos</span>
              <span className="stat-val">47 repos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCadence;
