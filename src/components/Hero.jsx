// components/Hero.jsx
import { useState } from "react";
import PixelatedAvatar from "./PixelatedAvatar";

const Hero = () => {
  const [activePersona, setActivePersona] = useState("fullstack");

  const handleDownload = () => {
    const googleDriveFileId = "10McMkR3TbjTLGHA51oLwLWKZ5W1qbeHr";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
    window.open(downloadLink, "_blank");
  };

  return (
    <section className="hero-section">
      <div className="hero-identity-row">
        {/* Authentic Renlenon Pixelated Avatar (Auto-morph & Clickable) */}
        <PixelatedAvatar
          src="/images/profiles.jpeg"
          alt="Izsal Qurlinas Afandi headshot"
          size={74}
        />

        {/* Identity Headings */}
        <div className="hero-nameset">
          <h1>
            Izsal Qurlinas Afandi<span className="dot">.</span>
          </h1>
          <div className="hero-role">Software Engineer • Web &amp; Backend Systems</div>

          {/* Direct Social Links Bar */}
          <div className="hero-socials-bar">
            <a
              href="https://github.com/izsal"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/izsal-qurlinas-afandi-983614165/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/Afandi_Qur"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>

            <a href="mailto:izsalafandi@gmail.com" className="hero-social-link">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dual-Persona Switcher (Ariestwn / Schnee pattern) */}
      <div
        className={`home-personality-switch ${
          activePersona === "systems" ? "switched" : ""
        }`}
        role="group"
        aria-label="Choose a personality focus"
      >
        <span className="home-personality-switch__thumb" aria-hidden="true" />
        <button
          type="button"
          className={activePersona === "fullstack" ? "active" : ""}
          onClick={() => setActivePersona("fullstack")}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <line x1="9" x2="9" y1="21" y2="9" />
          </svg>
          <span>Fullstack &amp; Web</span>
        </button>
        <button
          type="button"
          className={activePersona === "systems" ? "active" : ""}
          onClick={() => setActivePersona("systems")}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          <span>Backend &amp; Systems</span>
        </button>
      </div>

      {/* Dynamic Narrative Bio with Crossfade */}
      <div className="hero-bio-container">
        {activePersona === "fullstack" ? (
          <p key="fullstack">
            I craft high-performance web applications and fluid digital experiences with{" "}
            <b>Next.js, TypeScript, and React</b>. Driven by clean design discipline,
            modular components, and responsive performance from Jakarta, Indonesia.
          </p>
        ) : (
          <p key="systems">
            I architect resilient backend services and high-throughput APIs using{" "}
            <b>Go, Node.js, Express, and Laravel</b>. Specializing in relational databases
            (PostgreSQL/MySQL), RESTful protocols, and containerized deployment with Docker.
          </p>
        )}
      </div>

      {/* Action Launchpad: Resume CTA */}
      <div className="hero-cta-bar">
        <button onClick={handleDownload} className="hero-resume-btn" type="button">
          <span>View Resume</span>
          <svg
            width="12"
            height="12"
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
        </button>

        <a href="#contact" className="hero-contact-btn">
          <span>Get in touch</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
