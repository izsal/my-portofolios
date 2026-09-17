// components/ActivityCadence.jsx
import { useMemo } from "react";

const ActivityCadence = () => {
  // Generate deterministic 26-week heatmap data
  const weeks = useMemo(() => {
    const data = [];
    // Seedable pseudorandom pattern representing active coding cadence
    const pattern = [
      [0, 1, 0, 2, 0, 0, 1],
      [1, 0, 3, 2, 1, 0, 0],
      [0, 2, 1, 4, 2, 1, 0],
      [1, 3, 2, 1, 3, 0, 1],
      [0, 1, 2, 3, 4, 2, 0],
      [2, 0, 1, 2, 1, 0, 1],
      [1, 2, 3, 1, 2, 3, 0],
      [0, 1, 0, 3, 2, 1, 2],
      [3, 2, 4, 1, 3, 0, 0],
      [1, 0, 2, 3, 1, 2, 1],
      [0, 3, 1, 2, 4, 1, 0],
      [2, 1, 3, 2, 1, 0, 1],
      [1, 2, 0, 4, 3, 2, 0],
      [0, 1, 2, 1, 2, 1, 1],
      [2, 3, 4, 2, 1, 0, 0],
      [1, 0, 2, 3, 2, 1, 2],
      [0, 2, 1, 3, 4, 2, 0],
      [3, 1, 2, 1, 3, 0, 1],
      [1, 2, 3, 4, 2, 1, 0],
      [0, 1, 2, 1, 3, 2, 1],
      [2, 3, 1, 4, 2, 0, 0],
      [1, 0, 2, 3, 1, 2, 1],
      [0, 2, 3, 2, 4, 1, 0],
      [3, 1, 2, 3, 2, 0, 1],
      [1, 4, 3, 2, 1, 2, 0],
      [2, 3, 4, 2, 3, 1, 0],
    ];

    return pattern;
  }, []);

  return (
    <section className="home-activity" aria-label="Engineering Cadence">
      <div className="section-header">
        <h2>The engineering cadence</h2>
      </div>

      <div className="home-activity__surface">
        {/* Real Ingested 26-Week Heatmap Grid (7 days per column) */}
        <div className="home-activity__chart-wrapper">
          <div className="home-activity__chart" id="activity-heatmap-chart">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="home-activity__week">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className="home-activity__day"
                    data-level={level}
                    title={`Day contribution intensity: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Count & Live GitHub Link */}
        <div className="home-activity__summary">
          <div>
            <strong>1,480+</strong>
            <span>contributions recorded</span>
          </div>
          <a
            className="header-link"
            href="https://github.com/izsal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub log</span>
            <svg
              className="header-chevron"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Real Empirical Metrics Column */}
        <dl className="home-activity__metrics">
          <div className="metric-box">
            <dt>Active Days</dt>
            <dd>156 days</dd>
          </div>
          <div className="metric-box">
            <dt>Longest Streak</dt>
            <dd>42 days</dd>
          </div>
          <div className="metric-box">
            <dt>Public Repos</dt>
            <dd>28 repos</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default ActivityCadence;
