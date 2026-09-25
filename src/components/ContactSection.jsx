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
  HardHat,
  Sparkles,
  MessageSquare
} from "lucide-react";

export default function ContactSection({ onOpenQuote }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [fastInput, setFastInput] = useState({
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

  const handleFastSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(fastInput.phone)) {
      setPhoneError("Kripya poore 10-digit ka valid mobile number enter karein.");
      return;
    }
    setPhoneError("");
    setInquirySent(true);

    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\n\n` +
      `📌 *NEW SITE INTAKE & ESTIMATE REQUEST*\n` +
      `-----------------------------------\n` +
      `👤 *Name/Org:* ${fastInput.organization || "N/A"}\n` +
      `📞 *Phone:* ${fastInput.phone || "N/A"}\n` +
      `✉️ *Email:* ${fastInput.email || "N/A"}\n` +
      `🏗️ *Discipline:* ${fastInput.service || "N/A"}\n` +
      `📝 *Notes & Specs:* ${fastInput.notes || "N/A"}\n` +
      `-----------------------------------\n` +
      `Please contact for site inspection & quote.`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  const openWhatsApp = () => {
    if (!validatePhone(fastInput.phone)) {
      setPhoneError("Kripya poore 10-digit ka valid mobile number enter karein.");
      return;
    }
    setPhoneError("");
    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\nName/Org: ${fastInput.organization}\nService: ${fastInput.service}\nPhone: ${fastInput.phone}\nNotes: ${fastInput.notes}`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="section-padding contact-section"
      style={{
        background: "#04101F",
        color: "#FFFFFF",
        borderTop: "2px solid #087FEA",
        borderBottom: "2px solid #087FEA",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: "rgba(8, 127, 234, 0.15)", borderColor: "rgba(25, 200, 244, 0.3)" }}>
            <HardHat size={15} style={{ color: "#2298D8" }} />
            <span style={{ color: "#2298D8" }}>SB SPORTS & CONSTRUCTION PLANNING DESK</span>
          </div>
          <h2 className="section-title" style={{ color: "#FFFFFF" }}>
            Submit Your Project Specifications <br />
            <span className="text-gradient-blue">& Request Site Inspection</span>
          </h2>
          <p className="section-subtitle" style={{ color: "#D9E2EA" }}>
            Connect directly with our engineering desk for Sports Arenas, ITF Synthetic Coatings, Box Cricket Turfs, and Turnkey House Construction Projects.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "start" }}>
          {/* Left Column: Technical Desks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Direct Phone Helpline Card */}
            <div
              style={{
                padding: "26px",
                background: "#04101F",
                border: "1px solid rgba(25, 200, 244, 0.25)",
                borderRadius: "10px",
                boxShadow: "0 8px 30px rgba(4, 16, 31, 0.5)"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(8, 127, 234, 0.15)", color: "#2298D8", flexShrink: 0 }}>
                  <PhoneCall size={24} />
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>
                    Direct Call & WhatsApp Hotline
                  </div>
                  <a
                    href="tel:+919636365391"
                    style={{ color: "#2298D8", fontSize: "1.25rem", fontWeight: 800, textDecoration: "none", display: "inline-block" }}
                  >
                    +91-9636365391
                  </a>
                  <div style={{ color: "#94A3B8", fontSize: "0.85rem", marginTop: "4px" }}>
                    Instant consultation for Sports Courts, Turfs & Turnkey Construction
                  </div>
                </div>
              </div>
            </div>

            {/* Official Email Card */}
            <div
              style={{
                padding: "26px",
                background: "#04101F",
                border: "1px solid rgba(25, 200, 244, 0.25)",
                borderRadius: "10px",
                boxShadow: "0 8px 30px rgba(4, 16, 31, 0.5)"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(8, 127, 234, 0.15)", color: "#2298D8", flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>
                    Planning & Tender Submissions
                  </div>
                  <a
                    href="mailto:sbsportsandconstruction@gmail.com"
                    style={{ color: "#D9E2EA", fontSize: "0.98rem", fontWeight: 600, textDecoration: "none", display: "inline-block" }}
                  >
                    sbsportsandconstruction@gmail.com
                  </a>
                  <div style={{ color: "#94A3B8", fontSize: "0.85rem", marginTop: "4px" }}>
                    Send CAD drawings, site dimensions, or blueprint specs
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Standards Card */}
            <div
              style={{
                padding: "26px",
                background: "#04101F",
                border: "1px solid rgba(25, 200, 244, 0.25)",
                borderRadius: "10px",
                boxShadow: "0 8px 30px rgba(4, 16, 31, 0.5)"
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ padding: "12px", borderRadius: "8px", background: "rgba(8, 127, 234, 0.15)", color: "#2298D8", flexShrink: 0 }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.05rem", marginBottom: "4px" }}>
                    ISO Certified Civil Engineering Standards
                  </div>
                  <div style={{ color: "#2298D8", fontSize: "0.9rem", fontWeight: 700 }}>
                    Certified Engineering Audits & Quality Guarantee
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "0.85rem", marginTop: "4px" }}>
                    Full structural audits, laser-screed precision level, and zero-puddle slope gradients.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Requirements Form Card */}
          <div
            style={{
              padding: "36px",
              background: "#04101F",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              borderRadius: "10px",
              boxShadow: "0 12px 40px rgba(4, 16, 31, 0.7)"
            }}
            id="quick-form"
          >
            <div style={{ borderBottom: "1px solid rgba(217, 226, 234, 0.15)", paddingBottom: "18px", marginBottom: "22px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(25, 200, 244, 0.12)",
                  border: "1px solid rgba(25, 200, 244, 0.3)",
                  color: "#2298D8",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  marginBottom: "10px"
                }}
              >
                <Clock size={12} /> FAST SITE INTAKE
              </div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.4rem", margin: "0 0 6px 0" }}>
                Request Consultation & Estimate
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                Submit your site specifications and our senior engineering team will evaluate your requirements.
              </p>
            </div>

            {!inquirySent ? (
              <form onSubmit={handleFastSubmit}>
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                    Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Metro Club / Villa Layout"
                    value={fastInput.organization}
                    onChange={(e) => setFastInput({ ...fastInput, organization: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      background: "#071A33",
                      border: "1px solid rgba(25, 200, 244, 0.3)",
                      borderRadius: "6px",
                      color: "#FFFFFF",
                      fontSize: "0.94rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                      Phone Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Enter 10-Digit Mobile Number"
                      value={fastInput.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                        setFastInput({ ...fastInput, phone: val });
                        if (phoneError) setPhoneError("");
                      }}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "#071A33",
                        border: phoneError ? "1px solid #ff5858ff" : "1px solid rgba(25, 200, 244, 0.3)",
                        borderRadius: "6px",
                        color: "#FFFFFF",
                        fontSize: "0.94rem",
                        outline: "none"
                      }}
                    />
                    {phoneError && (
                      <div style={{ color: "#FF4D4D", fontSize: "0.78rem", marginTop: "4px", fontWeight: 700 }}>
                        {phoneError}
                      </div>
                    )}
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="info@domain.com"
                      value={fastInput.email}
                      onChange={(e) => setFastInput({ ...fastInput, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "#071A33",
                        border: "1px solid rgba(25, 200, 244, 0.3)",
                        borderRadius: "6px",
                        color: "#FFFFFF",
                        fontSize: "0.94rem",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                    Service / Discipline *
                  </label>
                  <select
                    value={fastInput.service}
                    onChange={(e) => setFastInput({ ...fastInput, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      background: "#071A33",
                      border: "1px solid rgba(25, 200, 244, 0.3)",
                      borderRadius: "6px",
                      color: "#FFFFFF",
                      fontSize: "0.94rem",
                      outline: "none"
                    }}
                  >
                    <option value="8-Layer ITF Cushion Tennis Court Construction" style={{ background: "#071A33", color: "#FFFFFF" }}>1. 8-Layer ITF Cushion Lawn Tennis Court Construction</option>
                    <option value="Box Cricket & Futsal Turf Arena (30ft Cage)" style={{ background: "#071A33", color: "#FFFFFF" }}>2. Box Cricket & Futsal Turf Arena (50mm Turf + 30ft Cage)</option>
                    <option value="BWF Grade Indoor Badminton Arena" style={{ background: "#071A33", color: "#FFFFFF" }}>3. BWF Grade Indoor Badminton Arena & Sprung Wood</option>
                    <option value="FIBA Basketball & Multi-Sport Arena" style={{ background: "#071A33", color: "#FFFFFF" }}>4. FIBA Basketball & Multi-Sport Arena</option>
                    <option value="Panoramic Padel & Pickleball Court" style={{ background: "#071A33", color: "#FFFFFF" }}>5. Panoramic Padel & USAPA Pickleball Court</option>
                    <option value="IAAF Synthetic Athletic Running Track" style={{ background: "#071A33", color: "#FFFFFF" }}>6. IAAF Synthetic Athletic Running Track</option>
                    <option value="Turnkey Civil EPC Building Contracting" style={{ background: "#071A33", color: "#FFFFFF" }}>7. Turnkey Civil EPC Building Contracting</option>
                    <option value="Commercial Towers & Corporate Complexes" style={{ background: "#071A33", color: "#FFFFFF" }}>8. Commercial Towers & Corporate Complexes</option>
                    <option value="Industrial PEB Steel Warehouse & Sheds" style={{ background: "#071A33", color: "#FFFFFF" }}>9. Industrial PEB Steel Warehouse & Factory Sheds</option>
                    <option value="Luxury Turnkey Residential Villa Construction" style={{ background: "#071A33", color: "#FFFFFF" }}>10. Luxury Turnkey Residential Villa & Bungalow</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                    Court Dimensions / Site Notes
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Plot dimensions, location, desired timeline..."
                    value={fastInput.notes}
                    onChange={(e) => setFastInput({ ...fastInput, notes: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      background: "#071A33",
                      border: "1px solid rgba(25, 200, 244, 0.3)",
                      borderRadius: "6px",
                      color: "#FFFFFF",
                      fontSize: "0.94rem",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    className="btn btn-orange"
                    style={{ flex: 1, justifyContent: "center", padding: "16px" }}
                  >
                    <Send size={18} />
                    <span>Submit Online Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="btn"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      padding: "16px",
                      background: "rgba(25, 200, 244, 0.12)",
                      border: "1px solid #2298D8",
                      color: "#2298D8"
                    }}
                  >
                    <MessageSquare size={18} />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <CheckCircle2 size={48} style={{ color: "#2298D8", margin: "0 auto 16px auto" }} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
                  Inquiry Successfully Registered
                </h4>
                <p style={{ color: "#94A3B8", fontSize: "0.92rem", lineHeight: 1.5, maxWidth: "400px", margin: "0 auto 20px auto" }}>
                  Thank you! Requirements for <strong>{fastInput.organization}</strong> have been logged. Our engineering desk will contact you via {fastInput.phone || fastInput.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setInquirySent(false);
                    setFastInput({ organization: "", email: "", phone: "", service: "Synthetic Sports Court Construction", notes: "" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    background: "rgba(25, 200, 244, 0.15)",
                    border: "1px solid #2298D8",
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
