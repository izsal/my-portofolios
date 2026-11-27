// components/Skills.jsx
import { useState } from "react";
import { TechIcon } from "./TechIcons";

const Skills = () => {
  const [viewMode, setViewMode] = useState("marquee"); // "marquee" or "grid"

  // 3-Row continuous marquee sets with authentic icons
  const row1 = [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Golang" },
    { name: "PHP" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "SQL" },
    { name: "Dart" },
    { name: "Bash" },
  ];

  const row2 = [
    { name: "Next.js" },
    { name: "React" },
    { name: "React Native" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Laravel" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Prisma ORM" },
    { name: "Redis" },
  ];

  const row3 = [
    { name: "Tailwind CSS" },
    { name: "Redux Toolkit" },
    { name: "Docker" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "Postman" },
    { name: "RESTful API" },
    { name: "PWA" },
    { name: "NextCloud" },
  ];

  const categories = [
    {
      title: "Languages & Runtimes",
      items: ["TypeScript", "JavaScript", "Golang", "PHP", "SQL", "Bash", "HTML5", "CSS3"],
    },
    {
      title: "Backend Frameworks & APIs",
      items: ["Node.js", "Express.js", "Laravel", "Golang", "RESTful API", "Prisma ORM", "gRPC"],
    },
    {
      title: "Frontend & Mobile",
      items: ["Next.js", "React", "React Native", "Redux Toolkit", "Tailwind CSS", "PWA", "Vue.js", "ApexCharts"],
    },
    {
      title: "Databases, DevOps & Tools",
      items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Git", "GitHub", "GitLab", "Postman", "NextCloud"],
    },
  ];

  return (
    <section className="tech-arsenal-section" id="skills" aria-label="Technical Arsenal">
      <div className="section-header">
        <h2>Technologies</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Mode Toggle Button */}
          <button
            type="button"
            className="mode-toggle-btn"
            onClick={() => setViewMode(viewMode === "marquee" ? "grid" : "marquee")}
            title={viewMode === "marquee" ? "Switch to Grouped Directory Grid" : "Switch to Continuous Marquee"}
            aria-label="Toggle between continuous marquee and grouped list"
          >
            {viewMode === "marquee" ? (
              /* Grid icon */
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            ) : (
              /* Rows / marquee icon */
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="tech-stage-viewport">
        {viewMode === "marquee" ? (
          /* 3-Row Continuous Marquee */
          <div className="tech-marquee-wrapper">
            {/* Row 1: Left */}
            <div className="tech-marquee-viewport">
              <div className="tech-track">
                <div className="tech-track-segment">
                  {row1.map((item, idx) => (
                    <span key={idx} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
                <div className="tech-track-segment" aria-hidden="true">
                  {row1.map((item, idx) => (
                    <span key={`dup-${idx}`} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Right */}
            <div className="tech-marquee-viewport">
              <div className="tech-track reverse">
                <div className="tech-track-segment">
                  {row2.map((item, idx) => (
                    <span key={idx} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
                <div className="tech-track-segment" aria-hidden="true">
                  {row2.map((item, idx) => (
                    <span key={`dup-${idx}`} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3: Left */}
            <div className="tech-marquee-viewport">
              <div className="tech-track">
                <div className="tech-track-segment">
                  {row3.map((item, idx) => (
                    <span key={idx} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
                <div className="tech-track-segment" aria-hidden="true">
                  {row3.map((item, idx) => (
                    <span key={`dup-${idx}`} className="tech-badge-item">
                      <TechIcon name={item.name} size={15} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Grouped Directory Grid View */
          <div className="tech-grouped-wrapper">
            {categories.map((cat, cIdx) => (
              <div key={cIdx} className="tech-grouped-category">
                <div className="tech-grouped-label">{cat.title}</div>
                <div className="tech-grouped-pills">
                  {cat.items.map((item, iIdx) => (
                    <span key={iIdx} className="tech-badge-item">
                      <TechIcon name={item} size={15} />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
