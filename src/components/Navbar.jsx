import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sports Infrastructure", path: "/sports-courts" },
    { name: "Civil Construction", path: "/Services" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" }
  ];

  const isLinkActive = (path) => {
    const currentPath = location.pathname.toLowerCase();
    const targetPath = path.toLowerCase();
    if (targetPath === "/") {
      return currentPath === "/" || currentPath === "";
    }
    return currentPath === targetPath;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : "header-transparent"}`}>
      <div className="container nav-wrapper">
        {/* Brand Logo Left */}
        <div className="nav-brand-container">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="brand-logo"
            title="SB SPORTS & CONSTRUCTION"
          >
            <SBLogo size="md" variant="navbar" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                <span>{link.name}</span>
                {active && <span className="active-indicator-bar" />}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Right */}
        <div className="nav-cta-wrapper">
          <Link
            to="/Contact"
            onClick={handleLinkClick}
            className="nav-cta-btn"
          >
            <span>Start Your Project</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} color="#0084FF" /> : <Menu size={22} color="#0B192C" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`mobile-link ${active ? "mobile-link-active" : ""}`}
                  onClick={handleLinkClick}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} color={active ? "#0084FF" : "#888888"} />
                </Link>
              );
            })}
            <div className="mobile-drawer-cta">
              <Link
                to="/Contact"
                className="mobile-cta-btn"
                onClick={handleLinkClick}
              >
                <span>Start Your Project ↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
