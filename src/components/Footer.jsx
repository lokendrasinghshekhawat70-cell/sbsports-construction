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
import SBLogo from "./SBLogo";

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
              <SBLogo size="md" showText={true} variant="dark" />
            </div>

            <p className="footer-bio">
              <strong>HOUSE & BUILDING CONSTRUCTION:</strong> Dedicated to delivering world-class Residential Development, Commercial Projects, and Infrastructure Works. We are committed to building your dreams, brick by brick.
            </p>

            <div style={{ margin: "16px 0", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
              <a
                href="tel:+919636365391"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#000000",
                  fontWeight: 800,
                  textDecoration: "underline"
                }}
              >
                <PhoneCall size={15} />
                <span>+91-9636365391</span>
              </a>
              <a
                href="mailto:sbsportsandconstruction@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#000000",
                  fontWeight: 700,
                  textDecoration: "underline"
                }}
              >
                <Mail size={15} />
                <span>sbsportsandconstruction@gmail.com</span>
              </a>
            </div>

            <div className="footer-license-box">
              <Sparkles size={16} style={{ color: "#000000" }} />
              <span>HOUSE & BUILDING CONSTRUCTION • BRICK BY BRICK</span>
            </div>
          </div>

          {/* Core Construction Pillars strictly from Picture */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Construction Pillars</h4>
            <ul className="footer-links-list">
              <li><a href="#services">House & Building Construction</a></li>
              <li><a href="#services">Sports Court & Synthetic Coating</a></li>
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
              <li><a href="#services">8-Layer Acrylic Sports Courts</a></li>
              <li><a href="#services">Box Cricket & Futsal Turfs</a></li>
              <li><a href="#services">2-Story Residential Homes</a></li>
              <li><a href="#services">Roofing & Timber Framing</a></li>
              <li><a href="#services">Multi-Story Concrete High-Rises</a></li>
              <li><a href="#services">Yellow Tower Crane Operations</a></li>
              <li><a href="#services">Hydraulic Excavator Earthmoving</a></li>
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
                <Check size={15} className="text-primary" />
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

        {/* End of Picture Visual Banner Bars (Faithfully Replicating Banner Base) */}
        <div style={{ margin: "32px 0 24px 0", border: "1px solid #000000", background: "#FFFFFF" }}>
          {/* Ribbon 1 */}
          <div style={{ background: "#000000", padding: "10px 16px", textAlign: "center" }}>
            <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "0.98rem", letterSpacing: "0.06em" }}>HOUSE & BUILDING CONSTRUCTION</span>
          </div>
          {/* Ribbon 2: 3 Pillars Bar */}
          <div style={{ background: "#FFFFFF", padding: "8px 16px", textAlign: "center", borderTop: "1px solid #000000", borderBottom: "1px solid #000000" }}>
            <span style={{ color: "#000000", fontWeight: 800, fontSize: "0.84rem", letterSpacing: "0.06em" }}>
              RESIDENTIAL DEVELOPMENT &bull; COMMERCIAL PROJECTS &bull; INFRASTRUCTURE WORKS
            </span>
          </div>
          {/* Ribbon 3 */}
          <div style={{ background: "#F5F5F5", padding: "10px 16px", textAlign: "center" }}>
            <span style={{ color: "#000000", fontWeight: 900, fontSize: "0.92rem", letterSpacing: "0.08em" }}>
              BUILDING YOUR DREAMS, BRICK BY BRICK
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy">
            © {new Date().getFullYear()} SB SPORTS & CONSTRUCTION. All rights reserved.
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
