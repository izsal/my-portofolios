// pages/projects/[id].js
import { useRouter } from "next/router";
import { useState } from "react";
import { projectData } from "../../components/data.js";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { TechIcon } from "../../components/TechIcons";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by id
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-semibold mb-2">Project not found</h2>
        <Link href="/" className="text-sm text-text-muted hover:underline">
          &larr; Back to home
        </Link>
      </div>
    );
  }

  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Head>
        <title>{project.title} — Izsal Afandi</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="pt-6 pb-16">
        {/* Back Navigation Bar */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="header-link inline-flex items-center gap-1 text-sm font-medium"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to catalog</span>
          </Link>
        </div>

        {/* Project Card Container */}
        <article className="featured-build-card">
          {/* Image Showcase Frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "360px",
              backgroundColor: "var(--bg-subtle)",
              borderBottom: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: "contain", padding: "16px" }}
              priority
            />

            {/* Navigation Arrows for Gallery */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  type="button"
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  &#8249;
                </button>

                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  &#8250;
                </button>

                {/* Counter */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    color: "#ffffff",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {hasMultipleImages && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                padding: "12px 20px",
                borderBottom: "1px solid var(--border)",
                overflowX: "auto",
                backgroundColor: "var(--bg-subtle)",
              }}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  type="button"
                  style={{
                    position: "relative",
                    width: "56px",
                    height: "42px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    border:
                      currentImageIndex === idx
                        ? "2px solid #3b82f6"
                        : "1px solid var(--border)",
                    opacity: currentImageIndex === idx ? 1 : 0.6,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Content Body */}
          <div style={{ padding: "1.75rem 1.5rem" }}>
            <h1
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies && (
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontSize: "0.76rem",
                    fontFamily: "var(--font-geist-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--text-faint)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Technologies Stack
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      <TechIcon name={tech} size={13} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository</span>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <span>Live Preview</span>
                  <svg
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
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProjectDetail;
