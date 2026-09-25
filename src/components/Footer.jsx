import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Layers,
  Building2,
  MessageSquare
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
        {/* Top Dark Feasibility Inspection Action Banner */}
        <div
          className="footer-feasibility-banner"
          data-aos="fade-up"
          data-aos-duration="750"
          style={{
            background: "#000000",
            border: "2px solid #087FEA",
            borderRadius: "12px",
            padding: "36px 40px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.95), 0 0 25px rgba(8, 127, 234, 0.3)"
          }}
        >
          <div className="feasibility-text-wrap">
            <div className="feasibility-pill" style={{ background: "rgba(8, 127, 234, 0.25)", border: "1px solid #2298D8", color: "#2298D8" }}>
              <Sparkles size={14} style={{ color: "#2298D8" }} />
              <span>COMPLIMENTARY ON-SITE FEASIBILITY SURVEY</span>
            </div>
            <h3 className="feasibility-title" style={{ color: "#f2eeeeff", fontSize: "1.45rem", fontWeight: 800, textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}>
              Ready to Start Your Sports Arena or Civil Building Project?
            </h3>
            <p className="feasibility-desc !Stext-black" style={{ color: "#c8cbceff", fontSize: "0.98rem", fontWeight: 500 }}>
              Book your complimentary on-site feasibility inspection with our senior civil engineer today.
            </p>
          </div>

          <div className="feasibility-btn-wrap">
            <button
              onClick={() => onOpenQuote && onOpenQuote()}
              className="btn btn-primary btn-glow"
              style={{ padding: "14px 28px", fontSize: "0.95rem" }}
            >
              <Sparkles size={16} />
              <span>Schedule Free Site Survey</span>
            </button>
            <a
              href="tel:+919636365391"
              className="btn btn-outline-white"
              style={{ padding: "14px 22px", fontSize: "0.95rem" }}
            >
              <PhoneCall size={16} style={{ color: "#2298D8" }} />
              <span>+91-9636365391</span>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div style={{ marginBottom: "20px" }}>
              <SBLogo size="lg" showText={true} variant="light" />
            </div>

            <p className="footer-bio">
              <strong>SB SPORTS & CONSTRUCTION:</strong> India's premier turnkey contractors for ITF & BWF Certified Synthetic Acrylic Sports Courts, Box Cricket & Futsal Turfs, Commercial Complexes, and Civil Structural Engineering.
            </p>

            <div style={{ margin: "18px 0", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <a
                href="tel:+919636365391"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#2298D8",
                  fontWeight: 800,
                  textDecoration: "none"
                }}
              >
                <PhoneCall size={16} style={{ color: "#2298D8" }} />
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
              <a
                href="https://wa.me/919636365391?text=Hello%20SB%20Sports%20%26%20Construction!%20I%20would%20like%20to%20inquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#25D366",
                  fontWeight: 700,
                  textDecoration: "none"
                }}
              >
                <MessageSquare size={16} style={{ color: "#25D366" }} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="footer-license-box">
              <ShieldCheck size={16} style={{ color: "#2298D8" }} />
              <span>ISO 9001:2015 CERTIFIED • TURNKEY INFRASTRUCTURE</span>
            </div>
          </div>

          {/* Sports Courts Categories (Integral Spor Reference) */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Sports Infrastructure</h4>
            <ul className="footer-links-list">
              <li><Link to="/sports-courts" onClick={scrollToTop}>8-Layer ITF Tennis Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>Box Cricket & Futsal Turf (30ft Cage)</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>BWF Synthetic & Sprung Badminton</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>FIBA Acrylic Basketball Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>Panoramic Padel & Pickleball</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>WSF Championship Squash Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>IAAF Polyurethane Running Tracks</Link></li>
            </ul>
          </div>

          {/* Construction Services (MSS Krishna Construction Reference) */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Civil Construction</h4>
            <ul className="footer-links-list">
              <li><Link to="/Services" onClick={scrollToTop}>Turnkey Civil EPC Contracting</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Commercial Towers & Complexes</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Industrial PEB Steel Warehouses</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Luxury Turnkey Villas & Bungalows</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Heavy RCC Raft & Foundations</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Structural Renovation & Jacketing</Link></li>
              <li><Link to="/Projects" onClick={scrollToTop}>Landmark Executed Projects</Link></li>
            </ul>
          </div>

          {/* Consultation & Direct Survey */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Technical Planning Desk</h4>
            <p className="footer-news-desc">
              Subscribe to receive synthetic court CAD specifications, turnkey cost benchmarks, and IS code engineering updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="footer-news-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
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
                <span>Subscription Registered!</span>
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
          <div className="bottom-badges" style={{ display: "flex", gap: "12px", alignItems: "center", color: "#D9E2EA", fontSize: "0.8rem", fontWeight: 700, flexWrap: "wrap" }}>
            <span>ITF CERTIFIED SURFACES</span>
            <span>•</span>
            <span>BWF STANDARD COURTS</span>
            <span>•</span>
            <span>IS 456 & IS 1893 COMPLIANT</span>
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll back to top" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

