// components/Projects.jsx
import Link from "next/link";
import { projectData } from "./data.js";
import { TechIcon } from "./TechIcons";

const Projects = () => {
  return (
    <section className="selected-projects-section" id="projects" aria-label="Selected Works">
      <div className="section-header">
        <h2>Selected Works</h2>
        <span className="header-link">
          <span>Catalog ({projectData.length})</span>
        </span>
      </div>

      <div className="projects-list">
        {projectData.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="project-row"
          >
            <div className="project-title-bar">
              <span className="project-title">
                <span>{project.title}</span>
                <svg
                  className="project-arrow"
                  width="12"
                  height="12"
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
              </span>
            </div>

            <p className="project-desc">{project.description}</p>

            {project.technologies && (
              <div className="project-tech-tags">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="project-tag inline-flex items-center gap-1">
                    <TechIcon name={tech} size={11} />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
