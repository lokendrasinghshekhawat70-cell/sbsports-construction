import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  PhoneCall,
  Mail,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Trophy,
  Building2
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sports Infrastructure", path: "/sports-courts", badge: "ITF / BWF" },
    { name: "Civil Construction", path: "/Services", badge: "Turnkey EPC" },
    { name: "Projects Portfolio", path: "/Projects" },
    { name: "Contact Desk", path: "/Contact" }
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
    <>
      {/* Top Engineering & Trust Announcement Bar */}
      <div className="top-trust-bar">
        <div className="container top-trust-inner">
          <div className="top-trust-left">
            <span className="top-badge">
              <ShieldCheck size={13} style={{ color: "#2298D8" }} />
              <span>ISO 9001:2015 CERTIFIED</span>
            </span>
            <span className="top-divider">•</span>
            <span className="top-badge">
              <Trophy size={13} style={{ color: "#D97706" }} />
              <span>ITF, BWF & FIFA GRADE SPORTS ARENAS</span>
            </span>
            <span className="top-divider hidden-mobile">•</span>
            <span className="top-badge hidden-mobile">
              <Building2 size={13} style={{ color: "#087FEA" }} />
              <span>TURNKEY CIVIL & STRUCTURAL CONTRACTORS</span>
            </span>
          </div>

          <div className="top-trust-right">
            <a href="tel:+919636365391" className="top-contact-link highlight-phone">
              <PhoneCall size={13} />
              <span>Helpline: <strong>+91-9636365391</strong></span>
            </a>
            <span className="top-divider">•</span>
            <a href="mailto:sbsportsandconstruction@gmail.com" className="top-contact-link hidden-mobile">
              <Mail size={13} />
              <span>sbsportsandconstruction@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <div className="nav-brand-container">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="brand-logo"
              title="SB SPORTS & CONSTRUCTION — Official Portal"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", textDecoration: "none" }}
            >
              <SBLogo size="md" variant="light" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="nav-item-badge">{link.badge}</span>
                  )}
                  {active && <span className="active-indicator-bar" />}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="nav-mobile-toggle-wrapper">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} style={{ color: "#2298D8" }} /> : <Menu size={20} style={{ color: "#2298D8" }} />}
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
                    key={link.path}
                    to={link.path}
                    className={`mobile-link ${active ? "mobile-link-active" : ""}`}
                    onClick={handleLinkClick}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>{link.name}</span>
                      {link.badge && <span className="nav-item-badge" style={{ fontSize: "0.68rem" }}>{link.badge}</span>}
                    </div>
                    <ChevronRight size={16} className={active ? "text-cyan" : "text-muted"} />
                  </Link>
                );
              })}
              <div className="mobile-drawer-cta">
                <a
                  href="tel:+919636365391"
                  className="mobile-call-link btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <PhoneCall size={16} /> Call Hotline: +91-9636365391
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

