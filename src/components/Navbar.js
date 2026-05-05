import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Resume", path: "/resume" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change or Escape
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const scrollToContact = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="nav-main">
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-mark-wrap">
              <span className="nav-logo-mark">AS</span>
            </div>
            <span>Aryavardhan Singh</span>
          </Link>

          {/* Desktop nav links — only visible on md+ screens */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav-actions">
            <ThemeToggle />
            <Link
              to="/"
              onClick={scrollToContact}
              className="btn-nav-cta"
            >
              Book a Call
            </Link>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer — completely outside the nav element so it's not a flex sibling */}
      {menuOpen && (
        <div className="nav-mobile-drawer">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-mobile-link${location.pathname === link.path ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            className="btn-nav-cta"
            style={{ marginTop: "8px", display: "inline-flex", width: "fit-content" }}
            onClick={(e) => { setMenuOpen(false); scrollToContact(e); }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </>
  );
}

export default NavBar;
