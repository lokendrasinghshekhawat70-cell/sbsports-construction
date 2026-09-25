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
      <section className="contact-hero-banner" data-aos="fade-up">
        <div className="container">
          <div className="contact-pill-badge" data-aos="fade-down">
            <HardHat size={16} />
            <span>SB SPORTS & CONSTRUCTION PLANNING DESK</span>
          </div>

          <h1 className="contact-hero-title" data-aos="fade-up" data-aos-delay="100">
            Submit Your Project Specifications <br />
            <span>& Request Site Inspection</span>
          </h1>

          <p className="contact-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Connect directly with our senior engineering desk for Sports Arenas, 8-Layer ITF Acrylic Surfacing, Box Cricket Turfs, and Turnkey Civil & Residential House Construction.
          </p>

          <div className="contact-hero-metrics" data-aos="zoom-in" data-aos-delay="300">
            <div className="metric-chip">
              <PhoneCall size={16} />
              <span>Direct Hotline: +91-9636365391</span>
            </div>
            <div className="metric-chip">
              <ShieldCheck size={16} />
              <span>ISO 9001:2015 Standards</span>
            </div>
            <div className="metric-chip">
              <Clock size={16} />
              <span>24/7 Technical Support</span>
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
              <div className="contact-desk-card" data-aos="fade-right" data-aos-delay="100">
                <div className="desk-card-header">
                  <div className="desk-card-icon">
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <div className="desk-card-title">Direct Phone & WhatsApp Hotline</div>
                    <div className="desk-card-subtitle">Instant Engineering Consultation</div>
                  </div>
                </div>
                <div className="desk-card-info-list">
                  <div className="desk-info-row">
                    <PhoneCall size={16} />
                    <a href="tel:+919636365391">+91-9636365391</a>
                  </div>
                </div>
              </div>

              {/* Official Email Card */}
              <div className="contact-desk-card" data-aos="fade-right" data-aos-delay="200">
                <div className="desk-card-header">
                  <div className="desk-card-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="desk-card-title">Planning & Tender Submissions</div>
                    <div className="desk-card-subtitle">CAD drawings & technical blueprints</div>
                  </div>
                </div>
                <div className="desk-card-info-list">
                  <div className="desk-info-row">
                    <Mail size={16} />
                    <a href="mailto:sbsportsandconstruction@gmail.com">sbsportsandconstruction@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Corporate Office & Regional Desk */}
              <div className="contact-desk-card" data-aos="fade-right" data-aos-delay="300">
                <div className="desk-card-header">
                  <div className="desk-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="desk-card-title">Pan-India Operations & Head Desk</div>
                    <div className="desk-card-subtitle">Rajasthan & National Projects Desk</div>
                  </div>
                </div>
                <div className="desk-card-info-list">
                  <div className="desk-info-row">
                    <MapPin size={16} />
                    <span>SB SPORTS & CONSTRUCTION, Rajasthan, India</span>
                  </div>
                </div>
              </div>

              {/* ISO Quality Standards Card */}
              <div className="contact-desk-card" data-aos="fade-right" data-aos-delay="400">
                <div className="desk-card-header">
                  <div className="desk-card-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="desk-card-title">ISO Certified Civil Engineering Standards</div>
                    <div className="desk-card-subtitle">Audited Quality Guarantee</div>
                  </div>
                </div>
                <div className="desk-card-info-list">
                  <div className="desk-info-row">
                    <CheckCircle2 size={16} />
                    <span>Laser-screed sub-base gradient & IS 456 / IS 1893 compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Requirements Form Card */}
            <div className="contact-form-card" id="quick-form" data-aos="fade-left" data-aos-delay="200">
              <div className="form-header-title">
                Submit Project Requirements
              </div>
              <div className="form-header-desc">
                Specify your project parameters and blueprint notes for technical engineering evaluation.
              </div>

              {!inquirySent ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-field">
                    <label>Name / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Metro Sports Arena / Residential Villa Layout"
                      value={inputData.organization}
                      onChange={(e) => setInputData({ ...inputData, organization: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="form-group-field">
                      <label>Phone Number (10 Digits) *</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-Digit Mobile"
                        value={inputData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                          setInputData({ ...inputData, phone: val });
                          if (phoneError) setPhoneError("");
                        }}
                      />
                      {phoneError && (
                        <div className="form-error-msg">{phoneError}</div>
                      )}
                    </div>
                    <div className="form-group-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="info@domain.com"
                        value={inputData.email}
                        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-field">
                    <label>Construction Discipline *</label>
                    <select
                      value={inputData.service}
                      onChange={(e) => setInputData({ ...inputData, service: e.target.value })}
                    >
                      <option value="8-Layer ITF Cushion Tennis Court Construction">1. 8-Layer ITF Cushion Lawn Tennis Court Construction</option>
                      <option value="Box Cricket & Futsal Turf Arena (30ft Cage)">2. Box Cricket & Futsal Turf Arena (50mm Turf + 30ft Cage)</option>
                      <option value="BWF Grade Indoor Badminton Arena">3. BWF Grade Indoor Badminton Arena & Sprung Wood</option>
                      <option value="FIBA Basketball & Multi-Sport Arena">4. FIBA Basketball & Multi-Sport Arena</option>
                      <option value="Panoramic Padel & Pickleball Court">5. Panoramic Padel & USAPA Pickleball Court</option>
                      <option value="IAAF Synthetic Athletic Running Track">6. IAAF Synthetic Athletic Running Track</option>
                      <option value="Turnkey Civil EPC Building Contracting">7. Turnkey Civil EPC Building Contracting</option>
                      <option value="Commercial Towers & Corporate Complexes">8. Commercial Towers & Corporate Complexes</option>
                      <option value="Industrial PEB Steel Warehouse & Sheds">9. Industrial PEB Steel Warehouse & Factory Sheds</option>
                      <option value="Luxury Turnkey Residential Villa Construction">10. Luxury Turnkey Residential Villa & Bungalow</option>
                    </select>
                  </div>

                  <div className="form-group-field">
                    <label>Project Details / Plot Specifications</label>
                    <textarea
                      rows="3"
                      placeholder="Plot dimensions, geographic location, structural requirements..."
                      value={inputData.notes}
                      onChange={(e) => setInputData({ ...inputData, notes: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                    <button
                      type="submit"
                      className="form-submit-btn"
                      style={{ flex: 1 }}
                    >
                      <Send size={18} />
                      <span>Submit Specifications</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="form-submit-btn"
                      style={{ background: "#25D366", color: "#FFFFFF", flex: 1 }}
                    >
                      <MessageSquare size={18} />
                      <span>Direct WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <CheckCircle2 size={56} style={{ color: "#0084FF", marginBottom: "16px" }} />
                  <h4 style={{ color: "#FFFFFF", fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>
                    Specifications Logged Successfully
                  </h4>
                  <p style={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                    Thank you! Requirements for <strong style={{ color: "#FFFFFF" }}>{inputData.organization}</strong> have been logged. Our senior engineering desk will contact you via {inputData.phone || inputData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setInputData({ organization: "", email: "", phone: "", service: "Synthetic Sports Court Construction", notes: "" });
                    }}
                    className="form-submit-btn"
                    style={{ background: "transparent", border: "1px solid #0084FF", color: "#0084FF" }}
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
