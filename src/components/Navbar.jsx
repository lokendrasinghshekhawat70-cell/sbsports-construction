import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  PhoneCall,
  Mail,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Navbar({
  onOpenQuote
}) {
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
    { name: "Services", path: "/Services" },
    { name: "Projects", path: "/Projects" },
    { name: "Reviews", path: "/Reviews" },
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
    <>
      {/* Top Contact & Trust Bar */}
      <div className="top-trust-bar">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:sbsportsandconstruction@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#D9E2EA",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <Mail size={13} style={{ color: "#19C8F4" }} />
              <span>sbsportsandconstruction@gmail.com</span>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.78rem", fontWeight: 700, color: "#94A3B8" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#19C8F4" }}>
              <PhoneCall   size={14} /> +91-9636365391
            </span>
            
            </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <div>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="brand-logo"
              title="SB SPORTS & CONSTRUCTION Home"
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
                  className={`nav-link ${active ? "nav-link-active" : ""} ${link.highlight ? "nav-link-badge" : ""}`}
                >
                  {link.name}
                  {link.highlight && <span className="nav-pulse-dot" />}
                  {active && <span className="active-indicator-bar" />}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            {onOpenQuote ? (
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-primary btn-sm desktop-only-btn"
                title="Get Free Quote"
                style={{ cursor: "pointer", borderRadius: "6px" }}
              >
                <Sparkles size={14} />
                <span>Get Instant Quote</span>
              </button>
            ) : (
              <a
                href="mailto:sbsportsandconstruction@gmail.com"
                className="btn btn-primary btn-sm desktop-only-btn"
                title="Email Us"
                style={{ borderRadius: "6px" }}
              >
                <Mail size={14} />
                <span>Email Us</span>
              </a>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} style={{ color: "#19C8F4" }} /> : <Menu size={20} style={{ color: "#19C8F4" }} />}
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
                    <span>{link.name}</span>
                    <ChevronRight size={16} className={active ? "text-amber" : "text-muted"} />
                  </Link>
                );
              })}
              <div className="mobile-drawer-cta">
                <a
                  href="mailto:sbsportsandconstruction@gmail.com"
                  className="mobile-call-link btn-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <Mail size={16} /> Email Direct
                </a>
                {onOpenQuote && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="btn btn-primary"
                    style={{ width: "100%", marginTop: "6px" }}
                  >
                    Request Free Consultation
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

