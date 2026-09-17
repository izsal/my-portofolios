// components/FeaturedBuild.jsx
import Image from "next/image";
import Link from "next/link";
import { TechIcon } from "./TechIcons";

const FeaturedBuild = () => {
  return (
    <section className="featured-build-wrapper" aria-label="Featured Engineering Project">
      <div className="section-header">
        <h2>Featured Engineering</h2>
      </div>

      <div className="featured-build-card">
        {/* Visual Preview Frame */}
        <div className="featured-visual">
          <Image
            src="/images/projects/Vegeta/Vegeta_01.png"
            alt="Vegeta E-Commerce Fullstack Platform preview"
            className="featured-img"
            width={1200}
            height={600}
            priority
          />
        </div>

        {/* Compact Content Narrative */}
        <div className="featured-content">
          <div className="featured-tagset">
            <span className="featured-badge">Featured Build</span>
            <span className="featured-year">2024 &ndash; 2025</span>
          </div>

          <h3 className="featured-title">Vegeta E-Commerce Platform</h3>
          <p className="featured-desc">
            Production-grade full-stack e-commerce architecture engineered with Next.js,
            TypeScript, and Prisma ORM. Features centralized Redux Toolkit state synchronization,
            relational inventory schema, and high-performance product browsing.
          </p>

          {/* Essential Tech Pills with SVG Icons */}
          <div className="featured-pills">
            <span className="tech-pill">
              <TechIcon name="Next.js" size={13} />
              <span>Next.js</span>
            </span>
            <span className="tech-pill">
              <TechIcon name="TypeScript" size={13} />
              <span>TypeScript</span>
            </span>
            <span className="tech-pill">
              <TechIcon name="Prisma" size={13} />
              <span>Prisma ORM</span>
            </span>
            <span className="tech-pill">
              <TechIcon name="Redux Toolkit" size={13} />
              <span>Redux Toolkit</span>
            </span>
            <span className="tech-pill">
              <TechIcon name="PostgreSQL" size={13} />
              <span>PostgreSQL</span>
            </span>
          </div>

          {/* Action Links */}
          <div className="featured-actions">
            <a
              href="https://github.com/izsal/Vegeta-E-Commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Source</span>
            </a>

            <Link href="/projects/0" className="btn-ghost">
              <span>Architecture &amp; Gallery</span>
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuild;
