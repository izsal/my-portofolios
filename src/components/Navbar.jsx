// Component Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Izsal Portofolio</Link>
      </div>
      <a href="" className="cta-button">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
