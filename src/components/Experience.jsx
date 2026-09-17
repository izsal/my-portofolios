// components/Experience.jsx
import { useState } from "react";
import { TechIcon } from "./TechIcons";

const experiences = [
  {
    company: "PT Multi Karya Solusi",
    location: "Jakarta",
    role: "Frontend Developer",
    period: "Sep 2024 – Present",
    type: "Current",
    tech: ["React Native", "Next.js", "React.js", "ApexCharts", "NextCloud", "Docker"],
    bullets: [
      "Built ITOKIN Quality Control (QC) mobile app from scratch with React Native, streamlining real-time QA workflows.",
      "Developed web dashboard for master Data QC featuring interactive analytics via ApexCharts and React.",
      "Engineered automated social media management web app UI (IRS project) and cloud storage UI for ODC with NextCloud.",
    ],
  },
  {
    company: "PT Guitekno Tresna Telekomunikasi",
    location: "Jakarta",
    role: "Fullstack Developer",
    period: "Sep 2023 – Sep 2024",
    tech: ["Next.js", "React", "Docker Compose", "REST API", "Fullstack"],
    bullets: [
      "Developed & optimized LahTube — a cross-platform Islamic video-sharing and community platform.",
      "Implemented infinite scroll UX, resolved core frontend bottlenecks, and built market administration interface.",
      "Standardized local and team microservice development workflows using Docker Compose.",
    ],
  },
  {
    company: "PT. Tekno Solusi Nusantara",
    location: "Jakarta",
    role: "Backend Developer",
    period: "Sep 2023 – Dec 2023",
    tech: ["Golang", "gRPC", "PostgreSQL", "MySQL", "Redis", "Microservices"],
    bullets: [
      "Engineered secure, high-throughput RESTful APIs using Golang for core enterprise platforms.",
      "Optimized MySQL & PostgreSQL databases, reducing query response times by up to 30% through index tuning.",
      "Integrated microservices architecture connected via gRPC and implemented Redis caching to minimize primary DB load.",
    ],
  },
  {
    company: "PT Visi Multimedia Aditama",
    location: "Yogyakarta",
    role: "Fullstack Developer",
    period: "May 2022 – Aug 2023",
    tech: ["Golang", "REST API", "JavaScript", "Bitbucket", "Admin Tools"],
    bullets: [
      "Architected custom admin tools to elevate site and client data management efficiency.",
      "Developed backend REST APIs in Go to resolve client data integrity and business operations.",
    ],
  },
  {
    company: "RUN System",
    location: "Yogyakarta",
    role: "Backend Developer",
    period: "Mar 2021 – Mar 2022",
    tech: ["PHP", "MVC", "PostgreSQL", "B2B", "System Migration"],
    bullets: [
      "Co-developed Run Market B2B platform (progressed frontend to 80%) and E-Office digital workflow suite.",
      "Led critical system migration (runmarket_migration) with zero data loss and minimal operational downtime.",
    ],
  },
  {
    company: "PT. Sentra Inovasi Solusindo",
    location: "Jakarta",
    role: "Programmer",
    period: "Jun 2019 – Dec 2019",
    tech: ["Golang", "CodeIgniter", "PostgreSQL", "REST API"],
    bullets: [
      "Migrated legacy enterprise applications from CodeIgniter 2 to CodeIgniter 3 backed by PostgreSQL.",
      "Built new RESTful API services in Golang and integrated them into the web platform.",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="experience-brief-section" id="experience" aria-label="Professional Experience">
      <div className="section-header">
        <h2>Work Experience</h2>
        <a
          href="https://www.linkedin.com/in/izsal-qurlinas-afandi-983614165/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          <span>LinkedIn profile</span>
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>

      <div className="experience-list">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className={`exp-card-item ${isExpanded ? "active" : ""}`}
              onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
            >
              <div className="exp-card-header">
                <div className="exp-card-identity">
                  <div className="exp-role-title">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-sep">&middot;</span>
                    <span className="exp-org">{exp.company}</span>
                  </div>
                  <div className="exp-meta-sub">
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="exp-card-meta">
                  <span className="exp-period">{exp.period}</span>
                  <svg
                    className={`exp-expand-chevron ${isExpanded ? "rotated" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Collapsible Accomplishments and Tech Pills */}
              {isExpanded && (
                <div className="exp-card-body">
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  <div className="exp-tech-pills">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        <TechIcon name={t} size={12} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
