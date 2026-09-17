// components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text selection:bg-blue-500/20">
      <Navbar />
      <main className="main-canvas">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
