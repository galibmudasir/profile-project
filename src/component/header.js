import { ModeSwitcher } from "../index"; // Pastikan jalur ini benar
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [user, setUser] = useState(null);
  // Ganti 'header' dengan 'Header'
  const [collapseMenu, setCollapse] = useState(false); // Ganti string dengan boolean
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setCollapse((prev) => !prev); // Toggle menu
  };
  useEffect(() => {
    const fetchlogin = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          headers: { Authorization: token },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Simpan data user
        } else {
          setUser("null"); // Redirect ke login jika token tidak valid
        }
      } catch (error) {
        setUser("null");
      }
    };

    fetchlogin();
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Scroll lebih dari 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }} // Animasi saat masuk
      initial={{ y: -100, opacity: 0 }} // State awal
      exit={{ y: -100, opacity: 0 }} // Animasi saat keluar
      transition={{ duration: 1 }}
      className={scrolled ? "site-header header-scrolled" : "site-header"}
    >
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React App Galib
          </a>
          <div className="mode-switcher d-block d-md-none">
            <ModeSwitcher model={"mobile"} />
          </div>
          <button
            className={`navbar-toggler ${!collapseMenu ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={collapseMenu}
            aria-label="Toggle navigation"
            onClick={toggleMenu} // Gunakan fungsi toggle
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapseMenu ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/tentang" ? "active" : ""
                  }`}
                  to="/tentang"
                >
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/portofolio" ? "active" : ""
                  }`}
                  to="/portofolio"
                >
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/gallery" ? "active" : ""
                  }`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/kontak" ? "active" : ""
                  }`}
                  to="/kontak"
                >
                  Kontak
                </Link>
              </li>
              {user !== "null" && (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/dashboard" ? "active" : ""
                    }`}
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="mode-switcher d-none d-md-block">
            <ModeSwitcher model={"desktop"} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
