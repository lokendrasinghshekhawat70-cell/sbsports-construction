import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  HardHat,
  PhoneCall,
  Mail,
  Building2,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Clock,
  Home,
  Sparkles
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
    { name: "Sports Courts & Coating", path: "/SportsCourtsAndCoating", highlight: true },
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
      <div
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #000000",
          fontSize: "0.82rem",
          padding: "6px 0",
          color: "#000000"
        }}
      >
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
              href="tel:+919636365391"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#000000",
                fontWeight: 800,
                textDecoration: "none"
              }}
            >
              <PhoneCall size={13} style={{ color: "#000000" }} />
              <span>+91-9636365391</span>
            </a>
            <span style={{ color: "#000000" }}>•</span>
            <a
              href="mailto:sbsportsandconstruction@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#000000",
                fontWeight: 700,
                textDecoration: "none"
              }}
            >
              <Mail size={13} style={{ color: "#000000" }} />
              <span>sbsportsandconstruction@gmail.com</span>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.78rem", fontWeight: 700 }}>
            <span>SPORTS COURTS & SYNTHETIC COATING SPECIALISTS</span>
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
              <SBLogo size="md" />
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
            <a
              href="tel:+919636365391"
              className="btn btn-secondary btn-sm nav-btn-calc"
              title="Call Directly"
              style={{ background: "#FFFFFF", color: "#000000", border: "1px solid #000000", textDecoration: "none" }}
            >
              <PhoneCall size={15} style={{ color: "#000000" }} />
              <span>+91-9636365391</span>
            </a>

            {onOpenQuote ? (
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-sm btn-quote-white"
                title="Get Free Quote"
                style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <Sparkles size={14} />
                <span>Get Quote</span>
              </button>
            ) : (
              <a
                href="mailto:sbsportsandconstruction@gmail.com"
                className="btn btn-sm btn-quote-white"
                title="Email Us"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <Mail size={15} />
                <span>Email Us</span>
              </a>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
                    <ChevronRight size={16} className={active ? "text-primary" : "text-muted"} />
                  </Link>
                );
              })}
              <div className="mobile-drawer-cta">
                <a
                  href="tel:+919636365391"
                  className="mobile-call-link"
                  style={{ textDecoration: "none", background: "#000000", color: "#FFFFFF", border: "1px solid #000000" }}
                >
                  <PhoneCall size={16} /> Call +91-9636365391
                </a>
                <a
                  href="mailto:sbsportsandconstruction@gmail.com"
                  className="mobile-call-link"
                  style={{ textDecoration: "none", background: "#FFFFFF", color: "#000000", border: "1px solid #000000" }}
                >
                  <Mail size={16} /> sbsportsandconstruction@gmail.com
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
