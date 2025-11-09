// components/Projects.jsx
import Image from "next/image";
import React from "react";
import { projectData } from "./data.js";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>
        PRO<span style={{ color: "#ffcc1a" }}>JECTS</span>
      </h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card transform cursor-pointer hover:scale-105 transition-all duration-200">
            <div className="project-header">
              <i className="fa-regular fa-folder folder-icon"></i>
              <div className="small-icons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
             {project.image && (
               <div
                 style={{
                   position: "relative",
                   width: "100%",
                   height: "200px",
                   marginBottom: "1rem",
                   borderRadius: "5px",
                   overflow: "hidden",
                   backgroundColor: "#2a2b2d",
                 }}
               >
                 <Link href={`/projects/${project.id}`}>
                    <Image
                      src={Array.isArray(project.image) ? project.image[0] : project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "contain", padding: "10px", cursor: "pointer" }}
                    />
                  </Link>
               </div>
             )}

            <div className="project">
              <h3>
                <Link href={`/projects/${project.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {project.title}
                </Link>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
