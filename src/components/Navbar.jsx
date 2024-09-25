// Component Navbar.js
import Link from "next/link";

const Navbar = () => {
  const handleDownload = () => {
    const googleDriveFileId = "10McMkR3TbjTLGHA51oLwLWKZ5W1qbeHr";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", "file_name"); // Optional: set file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Izsal Portofolio</Link>
      </div>
      <button onClick={handleDownload} className="cta-btn">
        Resume
      </button>
    </div>
  );
};

export default Navbar;
