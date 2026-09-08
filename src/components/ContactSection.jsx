import React, { useState } from "react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export default function ContactSection({ onOpenQuote }) {
  const [fastFormSent, setFastFormSent] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [fastInput, setFastInput] = useState({ name: "", phone: "", service: "New Home Build" });

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
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <PhoneCall size={15} />
            <span>Direct Engineering Line</span>
          </div>
          <h2 className="section-title">
            Let's Discuss Your <span className="text-gradient-amber">Next Project</span>
          </h2>
          <p className="section-subtitle">
            Have questions about land feasibility, architectural blueprints, or construction budgets? Reach out directly to our engineering desk.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-cards-col">
            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <PhoneCall size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#0F172A", fontWeight: 800 }}>Managing Directors & Hotlines</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#334155", fontSize: "0.85rem", fontWeight: 700 }}>Digvijay Singh Rathore:</span>
                    <a href="tel:+918800570023" className="contact-val highlight-val" style={{ fontSize: "1rem" }}>
                      +91 88005 70023
                    </a>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#334155", fontSize: "0.85rem", fontWeight: 700 }}>Jagdeesh Prashad:</span>
                    <a href="tel:+917224862150" className="contact-val highlight-val" style={{ fontSize: "1rem" }}>
                      +91 72248 62150
                    </a>
                  </div>
                </div>
                <div className="contact-sub" style={{ marginTop: "6px" }}>Direct contact with Company Managing Directors • Mon-Sat 8am-8pm</div>
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
                <div className="contact-sub">Send blueprints or inquiries for review • Building your dreams, brick by brick</div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#0F172A", fontWeight: 800 }}>Headquarters & Office Address</div>
                <div className="contact-val" style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
                  Shop No. 205, RAJ NAGAR, PALASI KAROND, BHOPAL - 462038
                </div>
                <div className="contact-sub" style={{ color: "#64748B", fontWeight: 700, marginTop: "2px" }}>
                  (In front of Truba College) • Bhopal, Madhya Pradesh
                </div>
              </div>
            </div>

            {/* Official GST Registration Card */}
            <div className="contact-card glass-card" style={{ borderColor: "#E2E8F0", background: "#FFFFFF" }}>
              <div className="contact-icon-box" style={{ color: "#0F172A", background: "#F1F5F9" }}>
                <ShieldCheck size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label" style={{ color: "#0F172A", fontWeight: 800 }}>Govt. Tax & Legal Compliance</div>
                <div className="contact-val highlight-val" style={{ fontFamily: "monospace", letterSpacing: "0.08em", fontSize: "1.05rem", color: "#0F172A" }}>
                  GSTIN: 23AABCM8923M1Z5
                </div>
                <div className="contact-sub" style={{ color: "#64748B" }}>
                  GST Number for Manobhav Construction (Madhya Pradesh) • Class-1 Works Contractor • 100% Tax Compliant
                </div>
              </div>
            </div>

            {/* Emergency Service Pill */}
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

          {/* Right Column: Quick Callback Form Card */}
          <div className="contact-form-col">
            <div className="glass-card fast-callback-card">
              <div className="fast-card-header">
                <div className="badge-gold">
                  <Clock size={13} /> 15-Minute Response Time: +91 88005 70023 (Digvijay Singh Rathore)
                </div>
                <h3 className="fast-card-title">Request Immediate Callback</h3>
                <p className="fast-card-desc">
                  Leave your number and Managing Director <strong>Digvijay Singh Rathore (+91 88005 70023)</strong> will call you back within 15 minutes to discuss timeline, preliminary costs, and plot feasibility.
                </p>
              </div>

              {!fastFormSent ? (
                <form onSubmit={handleFastSubmit} className="fast-form">
                  <div className="form-field">
                    <label className="field-label">Your Name</label>
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
                      <option value="New Home Build">New Custom Luxury Home</option>
                      <option value="Commercial Development">Commercial Office / Retail</option>
                      <option value="Whole House Remodel">Complete Home Renovation</option>
                      <option value="Structural & Foundation">Structural & Foundation Works</option>
                      <option value="Architectural Plans">Architectural 3D Plans Only</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: 8 }}>
                    <Send size={16} />
                    <span>Request Callback Now</span>
                  </button>

                  <div className="form-guarantee-note">
                    <ShieldCheck size={14} className="text-green" />
                    <span>No aggressive sales calls. Direct technical consultation.</span>
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
                      setFastInput({ name: "", phone: "", service: "New Home Build" });
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
    </section>
  );
}
