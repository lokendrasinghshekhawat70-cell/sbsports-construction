import React, { useState, useEffect } from "react";
import {
  HardHat,
  PhoneCall,
  Building2,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Clock,
  Home,
  Sparkles
} from "lucide-react";
import ManobhavLogo from "./ManobhavLogo";

export default function Navbar({
  currentPage = "home",
  onNavigate,
  onOpenQuote
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "services", name: "Construction Services" },
    { id: "projects", name: "Projects" },
    { id: "guarantees", name: "Guarantees" },
    { id: "reviews", name: "Reviews" },
    { id: "contact", name: "Contact" }
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      
      {/* Main Sticky Navbar */}
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick("home")}
            className="brand-logo"
            title="MANOBHAV CONSTRUCTION Home"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <ManobhavLogo size="sm" showText={true} variant="dark" />
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""} ${link.highlight ? "nav-link-badge" : ""}`}
                >
                  {link.name}
                  {link.highlight && <span className="nav-pulse-dot" />}
                  {isActive && <span className="active-indicator-bar" />}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button
              onClick={() => handleLinkClick("projects")}
              className="btn btn-secondary btn-sm nav-btn-calc"
              title="View Projects"
              style={{ background: "#F1F5F9", color: "#0F172A", border: "1px solid #CBD5E1" }}
            >
              <Building2 size={16} style={{ color: "#0F172A" }} />
              <span>Our Projects</span>
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="btn btn-sm btn-quote-white"
              title="Get Free Quote"
            >
              <span>Get Free Quote</span>
              <ChevronRight size={16} />
            </button>

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
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    className={`mobile-link ${isActive ? "mobile-link-active" : ""}`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className={isActive ? "text-primary" : "text-muted"} />
                  </button>
                );
              })}
              <div className="mobile-drawer-cta">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  <span>Request Free Consultation</span>
                </button>
                <button onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} className="mobile-call-link" style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <HardHat size={16} /> MANOBHAV CONSTRUCTION
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
