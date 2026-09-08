import React, { useState, useEffect } from "react";
import { 
  HardHat, 
  PhoneCall, 
  Calculator, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Clock,
  Home
} from "lucide-react";

export default function Navbar({ 
  currentPage = "home", 
  onNavigate, 
  onOpenQuote, 
  onJumpEstimator 
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
    { id: "services", name: "Services" },
    { id: "estimator", name: "Cost Estimator", highlight: true },
    { id: "tracker", name: "Live Tracker" },
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
      {/* Top Utility Bar for Transparency & Trust */}
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-banner-left">
            <span className="top-tag">
              <ShieldCheck size={14} className="text-amber" /> 
              Licensed General Contractor #GC-89421
            </span>
            <span className="divider-dot">•</span>
            <span className="top-tag">
              <Clock size={14} className="text-green" /> 
              99.4% On-Time Completion Guarantee
            </span>
          </div>
          <div className="top-banner-right">
            <a href="tel:+18005552845" className="top-phone">
              <PhoneCall size={13} />
              <span>24/7 Builder Hotline: <strong>(800) 555-BUILD</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick("home")} 
            className="brand-logo"
            title="ApexBuild Home"
          >
            <div className="logo-icon-box">
              <HardHat size={26} className="logo-icon" />
            </div>
            <div className="logo-text-box">
              <span className="brand-name">APEXBUILD</span>
              <span className="brand-sub">CONSTRUCTION & ENGINEERING</span>
            </div>
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
              onClick={() => handleLinkClick("estimator")} 
              className="btn btn-secondary btn-sm nav-btn-calc"
              title="Calculate estimated construction cost"
            >
              <Calculator size={16} className="text-amber" />
              <span>Cost Calculator</span>
            </button>

            <button 
              onClick={() => onOpenQuote()} 
              className="btn btn-primary btn-sm btn-glow"
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
                    <ChevronRight size={16} className={isActive ? "text-amber" : "text-muted"} />
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
                <a href="tel:+18005552845" className="mobile-call-link">
                  <PhoneCall size={16} /> Call (800) 555-BUILD
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
