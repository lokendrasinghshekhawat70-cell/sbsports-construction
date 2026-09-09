import React, { useState } from "react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  Building,
  Building2,
  HardHat,
  FileText
} from "lucide-react";

export default function ContactSection({ onOpenQuote }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [fastInput, setFastInput] = useState({
    organization: "",
    email: "",
    service: "Residential Development (House & Roofing)",
    notes: ""
  });

  const handleFastSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <section id="contact" className="section-padding contact-section" style={{ background: "#FFFFFF", color: "#000000" }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #000000",
              background: "#FFFFFF",
              color: "#000000",
              padding: "4px 16px",
              fontWeight: 800,
              fontSize: "0.8rem",
              marginBottom: "12px"
            }}
          >
            <HardHat size={14} style={{ color: "#000000" }} />
            <span>SB SPORTS & CONSTRUCTION PLANNING DESK</span>
          </div>
          <h2 className="section-title" style={{ color: "#000000", fontWeight: 900, fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", letterSpacing: "0.04em", margin: "0 0 10px 0" }}>
            SUBMIT PROJECT REQUIREMENTS
          </h2>
          <p className="section-subtitle" style={{ color: "#333333", maxWidth: "760px", margin: "0 auto", fontSize: "0.98rem", lineHeight: 1.6 }}>
            Connect directly with the SB SPORTS & CONSTRUCTION architectural engineering desk for Sports Arenas, Synthetic Coatings, Residential Development, Commercial Projects, and Infrastructure Works. Building your dreams, brick by brick.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Technical Desks */}
          <div className="contact-info-cards-col">
            {/* Direct Phone Helpline Card */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "20px",
                marginBottom: "16px"
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ padding: "8px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <PhoneCall size={22} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 800, fontSize: "0.95rem" }}>Direct Contact & WhatsApp Helpline</div>
                  <a
                    href="tel:+919636365391"
                    style={{ color: "#000000", fontSize: "1.1rem", fontWeight: 900, textDecoration: "underline", display: "inline-block", marginTop: "2px" }}
                  >
                    +91-9636365391
                  </a>
                  <div style={{ color: "#555555", fontSize: "0.8rem", marginTop: "2px" }}>
                    Instant consultation for Sports Courts, Synthetic Coatings & Construction
                  </div>
                </div>
              </div>
            </div>

            {/* Official Email Card */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "20px",
                marginBottom: "16px"
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ padding: "8px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 800, fontSize: "0.95rem" }}>Official Planning & Tender Submissions</div>
                  <a
                    href="mailto:sbsportsandconstruction@gmail.com"
                    style={{ color: "#000000", fontSize: "0.95rem", fontWeight: 800, textDecoration: "underline", display: "inline-block", marginTop: "2px" }}
                  >
                    sbsportsandconstruction@gmail.com
                  </a>
                  <div style={{ color: "#555555", fontSize: "0.8rem", marginTop: "2px" }}>
                    Send CAD drawings, court specifications, or architectural blueprints
                  </div>
                </div>
              </div>
            </div>

            {/* Project Engineering & Planning Desk */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "20px",
                marginBottom: "16px"
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ padding: "8px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <Building size={22} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 800, fontSize: "0.95rem" }}>Project Engineering & Planning Desk</div>
                  <div style={{ color: "#000000", fontSize: "0.9rem", fontWeight: 700, marginTop: "2px" }}>
                    Online Technical Assessment & Blueprint Reviews
                  </div>
                  <div style={{ color: "#555555", fontSize: "0.8rem", marginTop: "2px" }}>Active Support Desk • Monday through Saturday 8:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>



            {/* Civil Licensing Card */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "20px"
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ padding: "8px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 800, fontSize: "0.95rem" }}>Civil Engineering Standards</div>
                  <div style={{ color: "#000000", fontSize: "0.9rem", fontWeight: 800, marginTop: "2px" }}>
                    Class-1 Certified Infrastructure
                  </div>
                  <div style={{ color: "#555555", fontSize: "0.8rem", marginTop: "2px" }}>
                    Full Structural Engineering Audits • Laser Screed Quality Verification • 100% Certified Standards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Requirements Form Card */}
          <div className="contact-form-col" id="quick-form">
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #000000",
                padding: "28px",
                color: "#000000"
              }}
            >
              <div style={{ borderBottom: "1px solid #000000", paddingBottom: "14px", marginBottom: "18px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid #000000",
                    padding: "3px 10px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    marginBottom: "8px"
                  }}
                >
                  <Clock size={12} /> TECHNICAL BLUEPRINT INTAKE
                </div>
                <h3 style={{ color: "#000000", fontWeight: 900, fontSize: "1.25rem", margin: "0 0 6px 0" }}>
                  Request Project Consultation
                </h3>
                <p style={{ color: "#444444", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>
                  Submit your site specifications and our senior engineering team will evaluate blueprint requirements and feasibility.
                </p>
              </div>

              {!inquirySent ? (
                <form onSubmit={handleFastSubmit} className="fast-form">
                  <div className="form-field" style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px" }}>
                      Project Scope / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Metro Sports Complex / Residential Layout"
                      className="modal-input"
                      value={fastInput.organization}
                      onChange={(e) => setFastInput({ ...fastInput, organization: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    />
                  </div>

                  <div className="form-field" style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px" }}>
                      Official Planning Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="planning@organization.com"
                      className="modal-input"
                      value={fastInput.email}
                      onChange={(e) => setFastInput({ ...fastInput, email: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    />
                  </div>

                  <div className="form-field" style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px" }}>
                      Construction Discipline *
                    </label>
                    <select
                      className="modal-input"
                      value={fastInput.service}
                      onChange={(e) => setFastInput({ ...fastInput, service: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    >
                      <option value="Residential Development (House & Roofing)">Residential Development (House & Roofing)</option>
                      <option value="Commercial Projects (Multi-Story Concrete & Cranes)">Commercial Projects (Multi-Story Concrete & Cranes)</option>
                      <option value="Sports Court & Synthetic Coating (Acrylic/Turf)">Sports Court & Synthetic Coating (Acrylic/Turf)</option>
                      <option value="Infrastructure Works (Excavation & Foundations)">Infrastructure Works (Excavation & Foundations)</option>
                      <option value="Architectural Blueprints & Structural Engineering">Architectural Blueprints & Structural Engineering</option>
                    </select>
                  </div>

                  <div className="form-field" style={{ marginBottom: "18px" }}>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, marginBottom: "4px" }}>
                      Site Location / Engineering Notes
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Plot dimensions, geography, target timeline..."
                      className="modal-input modal-textarea"
                      value={fastInput.notes}
                      onChange={(e) => setFastInput({ ...fastInput, notes: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000", resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      background: "#000000",
                      color: "#FFFFFF",
                      border: "1px solid #000000",
                      fontWeight: 800,
                      padding: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    <Send size={15} />
                    <span>Submit Blueprint & Engineering Inquiry</span>
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      fontSize: "0.78rem",
                      color: "#444444",
                      marginTop: "10px"
                    }}
                  >
                    <ShieldCheck size={13} style={{ color: "#000000" }} />
                    <span>Class-1 Civil Construction Standards • Technical confidentiality assured</span>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "24px 8px" }}>
                  <CheckCircle2 size={42} style={{ color: "#000000", margin: "0 auto 14px auto" }} />
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#000000", marginBottom: "6px" }}>
                    Project Consultation Registered
                  </h4>
                  <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.5, maxWidth: "380px", margin: "0 auto 18px auto" }}>
                    Requirements for <strong>{fastInput.organization}</strong> have been received. Our senior engineering staff will review the dossier and respond via {fastInput.email}.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setFastInput({ organization: "", email: "", service: "Residential Development (House & Roofing)", notes: "" });
                    }}
                    className="btn btn-secondary"
                    style={{
                      background: "#FFFFFF",
                      color: "#000000",
                      border: "1px solid #000000",
                      fontWeight: 800,
                      padding: "8px 20px"
                    }}
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
