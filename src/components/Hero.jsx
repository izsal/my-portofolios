// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profiles.jpeg"
        className="profile-img"
        width={300}
        height={300}
        alt="Izsal's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Izsal 👋</h1>
        <p>
          I'm a software developer based in Yogyakarta, Indonesia. I specialize
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/Afandi_Qur"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/izsal"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/izsal-qurlinas-afandi-983614165/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
