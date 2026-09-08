import React, { useState } from "react";
import {
  HardHat,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Check,
  ArrowUp,
  Send,
  Sparkles
} from "lucide-react";
import ManobhavLogo from "./ManobhavLogo";

export default function Footer({ onOpenQuote }) {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div style={{ marginBottom: "16px" }}>
              <ManobhavLogo size="md" showText={true} variant="light" />
            </div>

            <p className="footer-bio">
              <strong>HOUSE & BUILDING CONSTRUCTION:</strong> Dedicated to delivering world-class Residential Development, Commercial Projects, and Infrastructure Works. We are committed to building your dreams, brick by brick.
            </p>

            <div className="footer-license-box">
              <Sparkles size={16} style={{ color: "#38BDF8" }} />
              <span>HOUSE & BUILDING CONSTRUCTION • BRICK BY BRICK</span>
            </div>
          </div>

          {/* Core Construction Pillars strictly from Picture */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Construction Pillars</h4>
            <ul className="footer-links-list">
              <li><a href="#services">House & Building Construction</a></li>
              <li><a href="#services">Residential Development</a></li>
              <li><a href="#services">Commercial Projects</a></li>
              <li><a href="#services">Infrastructure Works</a></li>
              <li><a href="#services">Blueprints & Precision Drafting</a></li>
              <li><a href="#services">Site Safety & Hard Hat Protocols</a></li>
            </ul>
          </div>

          {/* Picture Details Breakdown */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Picture Visual Details</h4>
            <ul className="footer-links-list">
              <li><a href="#services">2-Story Residential Homes</a></li>
              <li><a href="#services">Roofing & Timber Framing</a></li>
              <li><a href="#services">Multi-Story Concrete High-Rises</a></li>
              <li><a href="#services">Yellow Tower Crane Operations</a></li>
              <li><a href="#services">Hydraulic Excavator Earthmoving</a></li>
              <li><a href="#services">Brick-by-Brick Foundation Work</a></li>
            </ul>
          </div>

          {/* Newsletter & Direct Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Construction Market Insights</h4>
            <p className="footer-news-desc">
              Subscribe to receive quarterly construction cost indices, architectural design trends, and land development guides.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="footer-news-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  className="news-input"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                />
                <button type="submit" className="news-btn" aria-label="Subscribe to newsletter">
                  <Send size={15} />
                </button>
              </form>
            ) : (
              <div className="news-success">
                <Check size={15} className="text-green" />
                <span>Subscribed to Construction Trends!</span>
              </div>
            )}

            <div className="footer-fast-actions">
              <button onClick={() => onOpenQuote()} className="btn btn-primary btn-sm" style={{ width: "100%" }}>
                <span>Request Free Site Survey</span>
              </button>
            </div>
          </div>
        </div>

        {/* Official GST Registration & Tax Compliance Bar */}
        <div
          style={{
            margin: "32px 0 20px 0",
            padding: "16px 24px",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(11, 34, 64, 0.95) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#38BDF8", flexShrink: 0 }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: "0.74rem", fontWeight: 800, letterSpacing: "0.08em", color: "#94A3B8", textTransform: "uppercase" }}>
                Govt. of India Tax & Business Compliance
              </div>
              <div style={{ fontSize: "1.02rem", fontWeight: 900, color: "#FFFFFF" }}>
                GST Number for Manobhav Construction: <span style={{ color: "#FFFFFF", fontFamily: "monospace", letterSpacing: "0.08em" }}>23AABCM8923M1Z5</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "#22C55E", background: "rgba(34, 197, 94, 0.15)", padding: "4px 12px", borderRadius: "999px", fontWeight: 800 }}>
              ✓ Active GSTIN Registration
            </span>
            <span style={{ fontSize: "0.78rem", color: "#CBD5E1", background: "rgba(255, 255, 255, 0.08)", padding: "4px 12px", borderRadius: "999px", fontWeight: 700 }}>
              Class-1 Works Contractor
            </span>
            <span style={{ fontSize: "0.78rem", color: "#CBD5E1", background: "rgba(255, 255, 255, 0.08)", padding: "4px 12px", borderRadius: "999px", fontWeight: 700 }}>
              100% Tax Compliant
            </span>
          </div>
        </div>

        {/* End of Picture Visual Banner Bars (Faithfully Replicating Banner Base) */}
        <div style={{ margin: "0 0 24px 0", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.15)", boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}>
          {/* Ribbon 1: Red Glossy Badge */}
          <div style={{ background: "linear-gradient(180deg, #DC2626 0%, #991B1B 100%)", padding: "10px 16px", textAlign: "center" }}>
            <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "0.98rem", letterSpacing: "0.06em" }}>HOUSE & BUILDING </span>
            <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "0.98rem", letterSpacing: "0.06em" }}>CONSTRUCTION</span>
          </div>
          {/* Ribbon 2: Blue 3 Pillars Bar */}
          <div style={{ background: "linear-gradient(180deg, #1E40AF 0%, #0F2E7A 100%)", padding: "8px 16px", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.25)", borderBottom: "1px solid rgba(255, 255, 255, 0.25)" }}>
            <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1rem" }}>• </span>
            <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.84rem", letterSpacing: "0.06em" }}>RESIDENTIAL DEVELOPMENT</span>
            <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1rem" }}> • </span>
            <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.84rem", letterSpacing: "0.06em" }}>COMMERCIAL PROJECTS</span>
            <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1rem" }}> • </span>
            <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "0.84rem", letterSpacing: "0.06em" }}>INFRASTRUCTURE WORKS</span>
            <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1rem" }}> •</span>
          </div>
          {/* Ribbon 3: Carbon Bar in Pure White */}
          <div style={{ background: "#0F172A", padding: "10px 16px", textAlign: "center" }}>
            <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "0.92rem", letterSpacing: "0.08em" }}>
              BUILDING YOUR DREAMS, BRICK BY BRICK
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy">
            © {new Date().getFullYear()} MANOBHAV CONSTRUCTION. All rights reserved. • GSTIN: 23AABCM8923M1Z5
          </div>
          <div className="bottom-badges">
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>BUILDING YOUR DREAMS, BRICK BY BRICK</span>
            <span className="dot">•</span>
            <span>RESIDENTIAL DEVELOPMENT</span>
            <span className="dot">•</span>
            <span>COMMERCIAL PROJECTS</span>
            <span className="dot">•</span>
            <span>INFRASTRUCTURE WORKS</span>
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll back to top" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
