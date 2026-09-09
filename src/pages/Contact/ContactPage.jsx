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
  Building2,
  FileText,
  Layers,
  HardHat
} from "lucide-react";

export default function ContactPage({ onOpenQuote }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [inputData, setInputData] = useState({
    organization: "",
    email: "",
    service: "Residential Development (House & Roofing)",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="contact-page-wrapper" style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh" }}>
      <div className="page-hero-banner" style={{ background: "#FFFFFF", borderBottom: "2px solid #000000", padding: "48px 0 36px 0", textAlign: "center" }}>
        <div className="container">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #000000",
              background: "#FFFFFF",
              color: "#000000",
              padding: "4px 18px",
              fontWeight: 800,
              fontSize: "0.82rem",
              marginBottom: "12px"
            }}
          >
            <HardHat size={15} />
            <span>SB SPORTS & CONSTRUCTION PLANNING DESK</span>
          </div>
          <h1 className="page-main-title" style={{ color: "#000000", fontWeight: 900, margin: "0 0 10px 0" }}>
            SUBMIT YOUR PROJECT SPECIFICATIONS
          </h1>
          <p className="page-main-subtitle" style={{ color: "#333333", maxWidth: "780px", margin: "0 auto", fontSize: "1rem" }}>
            Reach out directly to the SB SPORTS & CONSTRUCTION team for Sports Courts & Synthetic Coating, House & Building Construction, Commercial High-Rises, and Infrastructure Works. Building your dreams, brick by brick.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px", padding: "0 16px 80px 16px" }}>
        <div className="contact-main-grid">
          {/* Direct Technical Desks Column */}
          <div className="contact-info-cards-col">
            {/* Phone & WhatsApp Helpline */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "24px",
                marginBottom: "20px"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "10px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <PhoneCall size={24} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 900, fontSize: "1rem" }}>Direct Phone & WhatsApp Helpline</div>
                  <a
                    href="tel:+919636365391"
                    style={{ color: "#000000", fontSize: "1.15rem", fontWeight: 900, textDecoration: "underline", display: "inline-block", marginTop: "4px" }}
                  >
                    +91-9636365391
                  </a>
                  <div style={{ color: "#555555", fontSize: "0.82rem", marginTop: "4px" }}>
                    Instant consultation for Sports Courts, Synthetic Coatings & Building Construction
                  </div>
                </div>
              </div>
            </div>

            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "24px",
                marginBottom: "20px"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "10px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 900, fontSize: "1rem" }}>Official Planning & Blueprint Submissions</div>
                  <a
                    href="mailto:sbsportsandconstruction@gmail.com"
                    style={{ color: "#000000", fontSize: "0.95rem", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "4px" }}
                  >
                    sbsportsandconstruction@gmail.com
                  </a>
                  <div style={{ color: "#555555", fontSize: "0.82rem", marginTop: "4px" }}>
                    Send CAD drawings, architectural schematics, or tender documents
                  </div>
                </div>
              </div>
            </div>



            {/* Quality & Civil Licensing Card */}
            <div
              className="contact-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "24px"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "10px", border: "1px solid #000000", background: "#FFFFFF", color: "#000000" }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ color: "#000000", fontWeight: 900, fontSize: "1rem" }}>Civil Engineering Standards</div>
                  <div style={{ color: "#000000", fontSize: "0.92rem", fontWeight: 800, marginTop: "4px" }}>
                    Class-1 Certified Infrastructure
                  </div>
                  <div style={{ color: "#555555", fontSize: "0.82rem", marginTop: "4px" }}>
                    Full Structural Engineering Audits • Laser Screed Quality Verification • 100% Certified Standards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Blueprint Submission Form */}
          <div className="contact-form-col" id="inquiry-form">
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #000000",
                padding: "32px",
                color: "#000000"
              }}
            >
              <div style={{ borderBottom: "1px solid #000000", paddingBottom: "16px", marginBottom: "20px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid #000000",
                    padding: "4px 12px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    marginBottom: "10px"
                  }}
                >
                  <Clock size={13} /> ARCHITECTURAL INTAKE DESK
                </div>
                <h3 style={{ color: "#000000", fontWeight: 900, fontSize: "1.35rem", margin: "0 0 6px 0" }}>
                  Submit Project Requirements
                </h3>
                <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                  Specify your project parameters and blueprint notes for technical engineering evaluation and preliminary timeline scheduling.
                </p>
              </div>

              {!inquirySent ? (
                <form onSubmit={handleSubmit} className="fast-form">
                  <div className="form-field" style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, marginBottom: "6px" }}>
                      Project Scope / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Metro Sports Arena / Residential Villa Layout"
                      className="modal-input"
                      value={inputData.organization}
                      onChange={(e) => setInputData({ ...inputData, organization: e.target.value })}
                      style={{ width: "100%", padding: "12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    />
                  </div>

                  <div className="form-field" style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, marginBottom: "6px" }}>
                      Official Planning Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="planning@organization.com"
                      className="modal-input"
                      value={inputData.email}
                      onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                      style={{ width: "100%", padding: "12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    />
                  </div>

                  <div className="form-field" style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, marginBottom: "6px" }}>
                      Construction Discipline *
                    </label>
                    <select
                      className="modal-input"
                      value={inputData.service}
                      onChange={(e) => setInputData({ ...inputData, service: e.target.value })}
                      style={{ width: "100%", padding: "12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                    >
                      <option value="Residential Development (House & Roofing)">Residential Development (House & Roofing)</option>
                      <option value="Commercial Projects (Multi-Story Concrete & Cranes)">Commercial Projects (Multi-Story Concrete & Cranes)</option>
                      <option value="Sports Court & Synthetic Coating (Acrylic/Turf)">Sports Court & Synthetic Coating (Acrylic/Turf)</option>
                      <option value="Infrastructure Works (Excavation & Foundations)">Infrastructure Works (Excavation & Foundations)</option>
                      <option value="Architectural Blueprints & Structural Engineering">Architectural Blueprints & Structural Engineering</option>
                    </select>
                  </div>

                  <div className="form-field" style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, marginBottom: "6px" }}>
                      Project Details / Plot Specifications
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Plot dimensions, geographic location, structural requirements, target completion date..."
                      className="modal-input modal-textarea"
                      value={inputData.notes}
                      onChange={(e) => setInputData({ ...inputData, notes: e.target.value })}
                      style={{ width: "100%", padding: "12px", background: "#FFFFFF", border: "1px solid #000000", color: "#000000", resize: "vertical" }}
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
                      padding: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    <Send size={16} />
                    <span>Submit Project Requirements</span>
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      fontSize: "0.8rem",
                      color: "#444444",
                      marginTop: "12px"
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: "#000000" }} />
                    <span>Class-1 Civil Construction Standards • Zero spam guarantee</span>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "30px 10px" }}>
                  <CheckCircle2 size={48} style={{ color: "#000000", margin: "0 auto 16px auto" }} />
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#000000", marginBottom: "8px" }}>
                    Project Intake Received
                  </h4>
                  <p style={{ color: "#444444", fontSize: "0.95rem", lineHeight: 1.5, maxWidth: "420px", margin: "0 auto 20px auto" }}>
                    Requirements for <strong>{inputData.organization}</strong> have been cataloged. Our senior engineering staff will review the dossier and respond via {inputData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setInputData({ organization: "", email: "", service: "Residential Development (House & Roofing)", notes: "" });
                    }}
                    className="btn btn-secondary"
                    style={{
                      background: "#FFFFFF",
                      color: "#000000",
                      border: "1px solid #000000",
                      fontWeight: 800,
                      padding: "10px 24px"
                    }}
                  >
                    Submit Another Inquiry
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
