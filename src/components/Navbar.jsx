// components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme state on mount
    const isDarkTheme = document.documentElement.classList.contains("dark");
    setIsDark(isDarkTheme);
  }, []);

  const applyTheme = (nextDark) => {
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (typeof document !== "undefined" && document.startViewTransition) {
      // Direct visual sweep:
      // Dark mode: Malam turun dari Atas ke Bawah (Nightfall)
      // Light mode: Fajar terbit dari Bawah ke Atas (Sunrise)
      document.documentElement.dataset.themeTransition = nextDark ? "down" : "up";

      const transition = document.startViewTransition(() => {
        applyTheme(nextDark);
      });

      transition.finished.finally(() => {
        delete document.documentElement.dataset.themeTransition;
      });
    } else {
      applyTheme(nextDark);
    }
  };

  return (
    <header className="site-nav">
      <div className="site-nav__scrim" aria-hidden="true" />
      <div className="site-nav__primary">
        {/* Custom Monogram Emblem Logo */}
        <Link href="/" className="site-nav__home" aria-label="Izsal Afandi — Home">
          <div className="site-logo-badge">
            <Image
              src="/logo.png"
              alt="Izsal Qurlinas Afandi Emblem Logo"
              width={30}
              height={30}
              priority
              className="site-logo-img"
            />
          </div>
          <span>Izsal Afandi</span>
        </Link>

        {/* Clean In-Flow Horizontal Links */}
        <ul className="site-nav__links">
          <li>
            <a className="site-nav__link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="site-nav__link" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="site-nav__link" href="#skills">
              Tech
            </a>
          </li>
          <li>
            <a className="site-nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Tactile Toolbar Controls */}
        <div className="nav-toolbar">
          <a
            href="mailto:izsalafandi@gmail.com"
            className="nav-toolbar__hire"
            title="Contact directly via email"
          >
            <span>say hi</span>
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
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>

          {/* Tactile Theme Toggle Button */}
          <button
            className="nav-toolbar__icon-control"
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? (
              /* Sun Icon (shown when dark to toggle to light) */
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              /* Moon Icon (shown when light to toggle to dark) */
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
