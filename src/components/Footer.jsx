import React, { useState } from "react";
import "./Footer.css";
import {
  PhoneCall,
  Mail,
  ShieldCheck,
  Check,
  ArrowUp,
  Send,
  Sparkles,
  Trophy,
  Layers
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
            <div style={{ marginBottom: "20px" }}>
              <SBLogo size="lg" showText={true} variant="light" />
            </div>

            <p className="footer-bio">
              <strong>SB SPORTS & CONSTRUCTION:</strong> India's premier specialists in ITF & BWF Certified Synthetic Acrylic Sports Courts, Box Cricket Turfs, Basketball & Badminton Arenas, Commercial Complexes & High-End Construction.
            </p>

            <div style={{ margin: "18px 0", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <a
                href="tel:+919636365391"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#19C8F4",
                  fontWeight: 800,
                  textDecoration: "none"
                }}
              >
                <PhoneCall size={16} style={{ color: "#19C8F4" }} />
                <span>+91-9636365391</span>
              </a>
              <a
                href="mailto:sbsportsandconstruction@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#D9E2EA",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                <Mail size={16} style={{ color: "#087FEA" }} />
                <span>sbsportsandconstruction@gmail.com</span>
              </a>
            </div>

            <div className="footer-license-box">
              <ShieldCheck size={16} style={{ color: "#19C8F4" }} />
              <span>ISO 9001:2015 CERTIFIED • TURNKEY INFRASTRUCTURE</span>
            </div>
          </div>

          {/* Sports Courts Categories */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Sports Surfaces</h4>
            <ul className="footer-links-list">
              <li><a href="/SportsCourtsAndCoating">8-Layer ITF Tennis Courts</a></li>
              <li><a href="/SportsCourtsAndCoating">Box Cricket & Futsal Turf</a></li>
              <li><a href="/SportsCourtsAndCoating">BWF Wooden & Synthetic Badminton</a></li>
              <li><a href="/SportsCourtsAndCoating">FIBA Acrylic Basketball Courts</a></li>
              <li><a href="/SportsCourtsAndCoating">Pickleball Court Systems</a></li>
              <li><a href="/SportsCourtsAndCoating">Volleyball & Squash Arenas</a></li>
              <li><a href="/SportsCourtsAndCoating">Synthetic Running Tracks</a></li>
            </ul>
          </div>

          {/* Construction Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Construction Services</h4>
            <ul className="footer-links-list">
              <li><a href="/Services">Turnkey Commercial Projects</a></li>
              <li><a href="/Services">Luxury Architectural Villas</a></li>
              <li><a href="/Services">Structural Steel Buildings</a></li>
              <li><a href="/Services">Synthetic Acrylic Resurfacing</a></li>
              <li><a href="/Services">Foundation Earthmoving & Civil</a></li>
              <li><a href="/Services">Renovation & Repairs</a></li>
              <li><a href="/Services">Sports Arena Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter & Direct Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Consultation & Updates</h4>
            <p className="footer-news-desc">
              Subscribe to receive synthetic court technical specs, cost estimates, and maintenance guidelines.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="footer-news-form">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  className="news-input"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                />
                <button type="submit" className="news-btn" aria-label="Subscribe to updates">
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="news-success">
                <Check size={16} />
                <span>Subscribed Successfully!</span>
              </div>
            )}

            <div className="footer-fast-actions" style={{ marginTop: "16px" }}>
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-primary btn-sm"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Sparkles size={16} />
                <span>Request Free Site Survey</span>
              </button>
            </div>
          </div>
        </div>

       
        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy" style={{ color: "#94A3B8" }}>
            © {new Date().getFullYear()} SB SPORTS & CONSTRUCTION. All rights reserved.
          </div>
          <div className="bottom-badges" style={{ display: "flex", gap: "12px", alignItems: "center", color: "#D9E2EA", fontSize: "0.8rem", fontWeight: 700 }}>
            <span>ITF CERTIFIED SURFACES</span>
            <span>•</span>
            <span>BWF STANDARD COURTS</span>
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll back to top" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

