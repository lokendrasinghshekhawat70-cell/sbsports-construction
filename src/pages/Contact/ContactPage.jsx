import React, { useState } from "react";
import "./Contact.css";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Building
} from "lucide-react";

export default function ContactPage({ onOpenQuote }) {
  const [fastFormSent, setFastFormSent] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [fastInput, setFastInput] = useState({ name: "", phone: "", service: "New Custom Luxury Home", notes: "" });

  const handleFastSubmit = (e) => {
    e.preventDefault();
    const cleanDigits = fastInput.phone.replace(/\D/g, "");
    if (cleanDigits.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number (0-9 only).");
      return;
    }
    setPhoneError("");
    setFastFormSent(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <PhoneCall size={14} />
            <span>MANOBHAV CONSTRUCTION DESK</span>
          </div>
          <h1 className="page-main-title">
            HOUSE & BUILDING <span className="text-gradient-amber">CONSTRUCTION CONTACT</span>
          </h1>
          <p className="page-main-subtitle">
            Connect directly with the MANOBHAV CONSTRUCTION team for Residential Development, Commercial Projects, and Infrastructure Works. Building your dreams, brick by brick.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-main-grid">
          {/* Direct Hotlines Column */}
          <div className="contact-info-cards-col">
            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <PhoneCall size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#FFFFFF", fontWeight: 800 }}>Managing Directors & Direct Contact</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#CBD5E1", fontSize: "0.85rem", fontWeight: 700 }}>Digvijay Singh Rathore:</span>
                    <a href="tel:+918800570023" className="contact-val highlight-val" style={{ fontSize: "1rem" }}>
                      +91 88005 70023
                    </a>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#CBD5E1", fontSize: "0.85rem", fontWeight: 700 }}>Jagdeesh Prashad:</span>
                    <a href="tel:+917224862150" className="contact-val highlight-val" style={{ fontSize: "1rem" }}>
                      +91 72248 62150
                    </a>
                  </div>
                </div>
                <div className="contact-sub" style={{ marginTop: "6px" }}>Direct line to Company Managing Directors • Mon-Sat 8am-8pm</div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Blueprints & Project Planning Desk</div>
                <a href="mailto:contact@manobhavconstruction.com" className="contact-val">
                  contact@manobhavconstruction.com
                </a>
                <div className="contact-sub">Send blueprints or site inquiries for review • Brick by brick</div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#FFFFFF", fontWeight: 800 }}>Office & Headquarters</div>
                <div className="contact-val" style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
                  Shop No. 205, RAJ NAGAR, PALASI KAROND, BHOPAL - 462038
                </div>
                <div className="contact-sub" style={{ color: "#CBD5E1", fontWeight: 700, marginTop: "2px" }}>
                  (In front of Truba College) • Bhopal, Madhya Pradesh
                </div>
              </div>
            </div>

            {/* Official GST Registration Card */}
            <div className="contact-card glass-card" style={{ borderColor: "rgba(255, 255, 255, 0.15)", background: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(11, 34, 64, 0.92) 100%)" }}>
              <div className="contact-icon-box" style={{ color: "#FFFFFF", background: "rgba(255, 255, 255, 0.1)" }}>
                <ShieldCheck size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#FFFFFF", fontWeight: 800 }}>Govt. Tax & Legal Compliance</div>
                <div className="contact-val highlight-val" style={{ fontFamily: "monospace", letterSpacing: "0.08em", fontSize: "1.05rem", color: "#FFFFFF" }}>
                  GSTIN: 23AABCM8923M1Z5
                </div>
                <div className="contact-sub">
                  GST Number for Manobhav Construction (Madhya Pradesh) • Class-1 Works Contractor • 100% Tax Compliant
                </div>
              </div>
            </div>

            {/* Emergency Service Banner */}
            <div className="emergency-banner glass-card">
              <div className="emergency-icon-wrap">
                <AlertTriangle size={22} className="text-amber" />
              </div>
              <div className="emergency-info">
                <strong>Emergency Civil & Structural Response</strong>
                <span>Urgent foundation shifting, severe settlement, or storm remediation?</span>
              </div>
              <a href="tel:+918800570023" className="btn btn-primary btn-sm">
                Call Direct Line
              </a>
            </div>
          </div>

          {/* Quick Consultation Request Form */}
          <div className="contact-form-col">
            <div className="glass-card fast-callback-card">
              <div className="fast-card-header">
                <div className="badge-gold">
                  <Clock size={13} /> Guaranteed 15-Minute Response: +91 88005 70023 (Digvijay Singh Rathore)
                </div>
                <h3 className="fast-card-title">Request Immediate Callback</h3>
                <p className="fast-card-desc">
                  Leave your contact details and Managing Director <strong>Digvijay Singh Rathore (+91 88005 70023)</strong> will call you right back within 15 minutes with preliminary cost ranges and scheduling.
                </p>
              </div>

              {!fastFormSent ? (
                <form onSubmit={handleFastSubmit} className="fast-form">
                  <div className="form-field">
                    <label className="field-label">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Miller"
                      className="modal-input"
                      value={fastInput.name}
                      onChange={(e) => setFastInput({ ...fastInput, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Mobile Number (10 Digits Only) *</label>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      minLength={10}
                      placeholder="10-digit mobile number (e.g. 8800570023)"
                      className={`modal-input ${phoneError ? "input-error" : ""}`}
                      value={fastInput.phone}
                      onChange={(e) => {
                        const cleanDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFastInput({ ...fastInput, phone: cleanDigits });
                        if (phoneError && cleanDigits.length === 10) {
                          setPhoneError("");
                        }
                      }}
                      onBlur={() => {
                        if (fastInput.phone && fastInput.phone.length !== 10) {
                          setPhoneError("Mobile number must be exactly 10 digits (0-9 only).");
                        } else {
                          setPhoneError("");
                        }
                      }}
                    />
                    {phoneError && <span className="field-error-msg">{phoneError}</span>}
                  </div>

                  <div className="form-field">
                    <label className="field-label">What are you planning?</label>
                    <select
                      className="modal-input"
                      value={fastInput.service}
                      onChange={(e) => setFastInput({ ...fastInput, service: e.target.value })}
                    >
                      <option value="Residential Development (House & Roofing)">Residential Development (House & Roofing)</option>
                      <option value="Timber Framing & Structural Wood">Timber Framing & Structural Wood</option>
                      <option value="Commercial Projects (Multi-Story & Crane)">Commercial Projects (Multi-Story & Crane)</option>
                      <option value="Infrastructure Works (Excavation & Foundations)">Infrastructure Works (Excavation & Foundations)</option>
                      <option value="Architectural Blueprints & Site Planning">Architectural Blueprints & Site Planning</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">Project Details / Location Notes</label>
                    <textarea
                      rows="3"
                      placeholder="Plot size, city location, target timeline..."
                      className="modal-input modal-textarea"
                      value={fastInput.notes}
                      onChange={(e) => setFastInput({ ...fastInput, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: 8 }}>
                    <Send size={16} />
                    <span>Request Callback Now</span>
                  </button>

                  <div className="form-guarantee-note">
                    <ShieldCheck size={14} className="text-green" />
                    <span>Direct technical consultation with zero spam or sales pressure.</span>
                  </div>
                </form>
              ) : (
                <div className="fast-form-success">
                  <CheckCircle2 size={46} className="text-green" />
                  <h4>Callback Request Received!</h4>
                  <p>
                    Thank you, <strong>{fastInput.name}</strong>. Managing Director <strong>Digvijay Singh Rathore (+91 88005 70023)</strong> is reviewing your request and will call <strong>+91 {fastInput.phone}</strong> within 15 minutes.
                  </p>
                  <button 
                    onClick={() => {
                      setFastFormSent(false);
                      setPhoneError("");
                      setFastInput({ name: "", phone: "", service: "Residential Development (House & Roofing)", notes: "" });
                    }} 
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: 16 }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
