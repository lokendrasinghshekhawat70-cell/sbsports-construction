import React, { useState } from "react";
import "./Contact.css";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  Building,
  HardHat,
  Sparkles,
  MessageSquare,
  Trophy,
  Home,
  Award
} from "lucide-react";

export default function ContactPage({ onOpenQuote }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [inputData, setInputData] = useState({
    organization: "",
    email: "",
    phone: "",
    service: "Synthetic Sports Court Construction",
    notes: ""
  });

  const validatePhone = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/[^0-9]/g, "");
    if (digitsOnly.length !== 10) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(inputData.phone)) {
      setPhoneError("Kripya poore 10-digit ka valid mobile number enter karein.");
      return;
    }
    setPhoneError("");
    setInquirySent(true);

    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\n\n` +
      `📌 *NEW PROJECT SPECIFICATIONS INQUIRY*\n` +
      `-----------------------------------\n` +
      `👤 *Name/Org:* ${inputData.organization || "N/A"}\n` +
      `📞 *Phone:* ${inputData.phone || "N/A"}\n` +
      `✉️ *Email:* ${inputData.email || "N/A"}\n` +
      `🏗️ *Discipline:* ${inputData.service || "N/A"}\n` +
      `📝 *Notes & Specifications:* ${inputData.notes || "N/A"}\n` +
      `-----------------------------------\n` +
      `Please evaluate specifications and contact for site inspection.`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  const openWhatsApp = () => {
    if (!validatePhone(inputData.phone)) {
      setPhoneError("Kripya poore 10-digit ka valid mobile number enter karein.");
      return;
    }
    setPhoneError("");
    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\nName/Org: ${inputData.organization}\nService: ${inputData.service}\nPhone: ${inputData.phone}\nNotes: ${inputData.notes}`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  return (
    <div className="contact-page-wrapper">
      {/* Top Banner Header */}
      <section className="contact-hero-banner">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="contact-pill-badge">
            <HardHat size={16} style={{ color: "#19C8F4" }} />
            <span>SB SPORTS & CONSTRUCTION PLANNING DESK</span>
          </div>

          <h1 className="contact-hero-title">
            Submit Your Project Specifications <br />
            <span className="text-gradient-blue">& Request Site Inspection</span>
          </h1>

          <p className="contact-hero-subtitle">
            Connect directly with our senior engineering desk for Sports Arenas, 8-Layer ITF Acrylic Surfacing, Box Cricket Turfs, and Turnkey Residential House Construction.
          </p>

          <div className="contact-hero-metrics">
            <div className="metric-chip">
              <PhoneCall size={16} style={{ color: "#19C8F4" }} />
              <span>Direct Hotline: +91-9636365391</span>
            </div>
            <div className="metric-chip">
              <ShieldCheck size={16} style={{ color: "#087FEA" }} />
              <span>ISO Certified Standards</span>
            </div>
            <div className="metric-chip">
              <Clock size={16} style={{ color: "#FF8A00" }} />
              <span>24/7 Technical Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid-layout">
            {/* Left Column: Direct Technical Desks */}
            <div className="contact-desks-col">
              {/* Direct Phone Helpline Card */}
              <div className="contact-desk-card highlight-card">
                <div className="desk-icon-box">
                  <PhoneCall size={26} />
                </div>
                <div className="desk-info">
                  <div className="desk-title">Direct Phone & WhatsApp Hotline</div>
                  <a href="tel:+919636365391" className="desk-phone-link">
                    +91-9636365391
                  </a>
                  <p className="desk-subtext">
                    Instant technical consultation for Sports Courts, Turfs & Turnkey House Construction.
                  </p>
                </div>
              </div>

              {/* Official Email Card */}
              <div className="contact-desk-card">
                <div className="desk-icon-box">
                  <Mail size={26} />
                </div>
                <div className="desk-info">
                  <div className="desk-title">Planning & Tender Submissions</div>
                  <a href="mailto:sbsportsandconstruction@gmail.com" className="desk-email-link">
                    sbsportsandconstruction@gmail.com
                  </a>
                  <p className="desk-subtext">
                    Send CAD drawings, architectural schematics, or site measurement specs.
                  </p>
                </div>
              </div>

              {/* Corporate Office & Regional Desk */}
              <div className="contact-desk-card">
                <div className="desk-icon-box">
                  <MapPin size={26} />
                </div>
                <div className="desk-info">
                  <div className="desk-title">Pan-India Operations & Head Desk</div>
                  <div className="desk-location">
                    SB SPORTS & CONSTRUCTION Campus, Rajasthan, India
                  </div>
                  <p className="desk-subtext">
                    Pan-India execution for Sports Arenas, Turf Complexes & Turnkey Residential Villas.
                  </p>
                </div>
              </div>

              {/* ISO Quality Standards Card */}
              <div className="contact-desk-card">
                <div className="desk-icon-box">
                  <ShieldCheck size={26} />
                </div>
                <div className="desk-info">
                  <div className="desk-title">ISO Certified Civil Engineering Standards</div>
                  <div className="desk-certified">
                    Certified Engineering Audits & Quality Guarantee
                  </div>
                  <p className="desk-subtext">
                    Laser-screed precision level verification, sub-base slope gradient, and structural masonry checks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Project Requirements Form Card */}
            <div className="contact-form-card" id="quick-form">
              <div className="form-card-header">
                <div className="form-intake-badge">
                  <Clock size={13} /> ARCHITECTURAL INTAKE DESK
                </div>
                <h3 className="form-card-title">
                  Submit Project Requirements
                </h3>
                <p className="form-card-subtext">
                  Specify your project parameters and blueprint notes for technical engineering evaluation.
                </p>
              </div>

              {!inquirySent ? (
                <form onSubmit={handleSubmit} className="contact-intake-form">
                  <div className="form-group">
                    <label className="form-label">
                      Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Metro Sports Arena / Residential Villa Layout"
                      className="form-input"
                      value={inputData.organization}
                      onChange={(e) => setInputData({ ...inputData, organization: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">
                        Phone Number (10 Digits) *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Enter 10-Digit Mobile Number"
                        className="form-input"
                        style={{ borderColor: phoneError ? "#FF4D4D" : undefined }}
                        value={inputData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                          setInputData({ ...inputData, phone: val });
                          if (phoneError) setPhoneError("");
                        }}
                      />
                      {phoneError && (
                        <div style={{ color: "#FF4D4D", fontSize: "0.78rem", marginTop: "4px", fontWeight: 700 }}>
                          {phoneError}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="info@domain.com"
                        className="form-input"
                        value={inputData.email}
                        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Construction Discipline *
                    </label>
                    <select
                      className="form-input form-select"
                      value={inputData.service}
                      onChange={(e) => setInputData({ ...inputData, service: e.target.value })}
                    >
                      <option value="Synthetic Sports Court Construction">Synthetic Sports Court Construction (Tennis/Basketball/Badminton)</option>
                      <option value="Box Cricket & Futsal Turf Arena">Box Cricket & Futsal Turf Arena</option>
                      <option value="8-Layer ITF Acrylic Resurfacing">8-Layer ITF Acrylic Resurfacing</option>
                      <option value="Turnkey Residential House Construction">Turnkey Residential House & Villa Construction</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Project Details / Plot Specifications
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Plot dimensions, geographic location, structural requirements..."
                      className="form-input form-textarea"
                      value={inputData.notes}
                      onChange={(e) => setInputData({ ...inputData, notes: e.target.value })}
                    />
                  </div>

                  <div className="form-actions-row">
                    <button
                      type="submit"
                      className="btn btn-orange form-submit-btn"
                    >
                      <Send size={18} />
                      <span>Submit Project Requirements</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="btn form-whatsapp-btn"
                    >
                      <MessageSquare size={18} />
                      <span>Direct WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-success-box">
                  <CheckCircle2 size={52} className="success-icon" />
                  <h4 className="success-title">
                    Specifications Logged Successfully
                  </h4>
                  <p className="success-text">
                    Thank you! Requirements for <strong>{inputData.organization}</strong> have been logged. Our senior engineering desk will contact you via {inputData.phone || inputData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setInputData({ organization: "", email: "", phone: "", service: "Synthetic Sports Court Construction", notes: "" });
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      background: "rgba(25, 200, 244, 0.15)",
                      border: "1px solid #19C8F4",
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    <span>Submit Another Project</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
