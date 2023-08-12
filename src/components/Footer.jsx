// Component Footer

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Izsal's Portfolio</p>
        <div className="social-icons p-10">
          <a
            href="https://twitter.com/Afandi_Qur"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/izsal"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/izsal/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
