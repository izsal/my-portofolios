// components/Footer.jsx
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (wordmarkRef.current) {
      observer.observe(wordmarkRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="home-footer-awwwards" id="site-footer">
      <div className="footer-meta-container">
        <div className="footer-meta-bar">
          <div className="footer-meta-left">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Jakarta, ID</span>
            <span>&middot;</span>
            <span>&copy; 2026</span>
          </div>

          <div className="footer-meta-right">
            <a
              href="https://github.com/izsal"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <span>GitHub</span>
              <svg
                width="10"
                height="10"
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
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/izsal-qurlinas-afandi-983614165/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <span>LinkedIn</span>
              <svg
                width="10"
                height="10"
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
        </div>
      </div>

      {/* Grand Horizon Stage: Monumental Typography Wordmark */}
      <div className="wordmark-horizon-viewport" aria-hidden="true">
        <div
          ref={wordmarkRef}
          className={`wordmark-cluster ${isVisible ? "visible" : ""}`}
        >
          <span>I</span>
          <span>Z</span>
          <span>S</span>
          <span>A</span>
          <span>L</span>
        </div>
        <div className="fullbleed-frosted-veil" />
      </div>
    </footer>
  );
};

export default Footer;
