import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  PhoneCall,
  Mail,
  ShieldCheck,
  ArrowUp,
  MapPin,
  Sparkles,
  MessageSquare
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid (4 Columns) */}
        <div className="footer-grid">
          {/* Column 1: Sports Infrastructure */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sports Infrastructure</h4>
            <ul className="footer-links-list">
              <li><Link to="/sports-courts" onClick={scrollToTop}>ITF Tennis Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>Box Cricket & Futsal</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>BWF Badminton Arenas</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>FIBA Basketball Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>Pickleball Courts</Link></li>
              <li><Link to="/sports-courts" onClick={scrollToTop}>Synthetic Running Tracks</Link></li>
            </ul>
          </div>

          {/* Column 2: Civil Construction */}
          <div className="footer-col">
            <h4 className="footer-col-title">Civil Construction</h4>
            <ul className="footer-links-list">
              <li><Link to="/Services" onClick={scrollToTop}>RCC Superstructures</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Commercial Complexes</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Industrial PEB Sheds</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Luxury Turnkey Villas</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Heavy Raft Foundations</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Structural Jacketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/Projects" onClick={scrollToTop}>Featured Projects</Link></li>
              <li><Link to="/Services" onClick={scrollToTop}>Civil Construction</Link></li>
              <li><Link to="/Reviews" onClick={scrollToTop}>★ Client Reviews & Ratings</Link></li>
              <li><Link to="/Contact" onClick={scrollToTop}>Contact Us</Link></li>
              <li>
                <button
                  onClick={() => onOpenQuote && onOpenQuote("Turnkey Enquiry")}
                  style={{ color: "#0084FF", fontWeight: 700, padding: 0, textAlign: "left", cursor: "pointer" }}
                >
                  Request Project Estimate ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-contact-info">
              <a href="tel:+919636365391" className="footer-contact-link highlight">
                <PhoneCall size={16} color="#0084FF" />
                <span>+91-9636365391</span>
              </a>
              <a href="mailto:sbsportsandconstruction@gmail.com" className="footer-contact-link">
                <Mail size={16} color="#0084FF" />
                <span>sbsportsandconstruction@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919636365391?text=Hello%20SB%20Sports%20%26%20Construction!%20I%20would%20like%20to%20inquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link whatsapp"
              >
                <MessageSquare size={16} color="#25D366" />
                <span>WhatsApp Business Desk</span>
              </a>
              <div className="footer-address">
                <MapPin size={16} color="#FF7A00" />
                <span>Pan-India Turnkey Execution • Jaipur / Rajasthan Headquarters</span>
              </div>
            </div>

            <div className="footer-iso-badge">
              <ShieldCheck size={16} color="#0084FF" />
              <span>ISO 9001:2015 CERTIFIED CONTRACTOR</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-brand-wrap">
            <SBLogo size="sm" variant="light" />
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} SB SPORTS & CONSTRUCTION. All Rights Reserved. Engineered to International Standards.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
