import React, { useState } from "react";
import { 
  HardHat, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Check, 
  ArrowUp,
  Send
} from "lucide-react";

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
            <div className="brand-logo footer-logo">
              <div className="logo-icon-box">
                <HardHat size={26} className="logo-icon" />
              </div>
              <div className="logo-text-box">
                <span className="brand-name">APEXBUILD</span>
                <span className="brand-sub">CONSTRUCTION & ENGINEERING</span>
              </div>
            </div>

            <p className="footer-bio">
              Setting the benchmark in modern residential estates, commercial infrastructure, and structural engineering. Built with ironclad guarantees, transparent costing, and zero compromises.
            </p>

            <div className="footer-license-box">
              <ShieldCheck size={16} className="text-green" />
              <span>Licensed General Contractor #GC-89421 • Fully Bonded & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Our Services</a></li>
              <li><a href="#estimator">Cost & Timeline Estimator</a></li>
              <li><a href="#tracker">Client Live Project Tracker</a></li>
              <li><a href="#projects">Completed Projects</a></li>
              <li><a href="#guarantees">Contractual Guarantees</a></li>
              <li><a href="#reviews">Verified Reviews</a></li>
              <li><a href="#contact">Contact & Feasibility</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Core Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Luxury Custom Villas</a></li>
              <li><a href="#services">Commercial High-Rises</a></li>
              <li><a href="#services">Full Penthouse Renovation</a></li>
              <li><a href="#services">Civil Foundation Engineering</a></li>
              <li><a href="#services">3D BIM Architectural Design</a></li>
              <li><a href="#services">Net-Zero Green Construction</a></li>
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

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy">
            © {new Date().getFullYear()} ApexBuild Construction & Engineering Group. All rights reserved.
          </div>
          <div className="bottom-badges">
            <span>ISO 9001:2015</span>
            <span className="dot">•</span>
            <span>OSHA Certified</span>
            <span className="dot">•</span>
            <span>LEED Green Builder</span>
          </div>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll back to top" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
