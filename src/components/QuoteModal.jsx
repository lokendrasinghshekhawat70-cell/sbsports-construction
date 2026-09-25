import React, { useState, useEffect } from "react";
import "./QuoteModal.css";
import {
  X,
  CheckCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  PhoneCall,
  FileSpreadsheet,
  ArrowRight
} from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    projectTitle: "",
    email: "",
    phone: "",
    projectType: "8-Layer ITF Cushion Tennis Court Construction",
    estimatedArea: "3,000 sq ft",
    timelineTarget: "Next 1-3 Months",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        estimatedArea: initialData.sqft ? `${initialData.sqft} sq ft` : prev.estimatedArea,
        notes: initialData.estimatedCost
          ? `Calculated Estimate: ${initialData.estimatedCost} (${initialData.tier || "Standard"}, ${initialData.timeline || "Turnkey"})`
          : prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validatePhone = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/[^0-9]/g, "");
    return digitsOnly.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError("Kripya valid 10-digit mobile number enter karein.");
      return;
    }
    setPhoneError("");
    setIsSubmitted(true);

    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\n\n` +
      `📌 *NEW TURNKEY PROJECT CONSULTATION REQUEST*\n` +
      `-----------------------------------\n` +
      `👤 *Name / Organization:* ${formData.projectTitle || "N/A"}\n` +
      `📞 *Phone Number:* ${formData.phone || "N/A"}\n` +
      `✉️ *Official Email:* ${formData.email || "N/A"}\n` +
      `🏗️ *Discipline:* ${formData.projectType || "N/A"}\n` +
      `📝 *Site Notes & Dimensions:* ${formData.notes || "N/A"}\n` +
      `-----------------------------------\n` +
      `Please provide engineering proposal, BOQ estimate & site audit schedule.`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="quote-modal-overlay" onClick={handleReset}>
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="quote-modal-close"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="quote-modal-header">
              <div className="quote-modal-badge">
                <span className="pulse-dot" />
                <span>OFFICIAL TECHNICAL PLANNING DESK</span>
              </div>

              <h3 className="quote-modal-title">
                SB SPORTS & CONSTRUCTION <span>Project Consultation</span>
              </h3>

              <p className="quote-modal-subtitle">
                Request an official engineering proposal, BOQ estimate & site audit for Sports Arenas, Acrylic Coatings, or Civil Projects.
              </p>
            </div>

            {/* Attached Estimate if passed */}
            {initialData && initialData.estimatedCost && (
              <div className="attached-estimate-pill">
                <FileSpreadsheet size={18} color="#00C2FF" />
                <span>
                  Attached Estimate: <strong>{initialData.estimatedCost}</strong> • {initialData.sqft} sq ft ({initialData.tier})
                </span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                {/* Field 1: Project / Org Name */}
                <div className="quote-field-group">
                  <label className="quote-field-label">
                    <span>Project Name / Organization</span>
                    <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Skyline Sports Complex"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    className="quote-input"
                  />
                </div>

                {/* Field 2: Phone */}
                <div className="quote-field-group">
                  <label className="quote-field-label">
                    <span>Phone Number (10 Digits)</span>
                    <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: val });
                      if (phoneError) setPhoneError("");
                    }}
                    className="quote-input"
                    style={phoneError ? { borderColor: "#FF4D4D" } : {}}
                  />
                  {phoneError && <div className="quote-error-msg">{phoneError}</div>}
                </div>
              </div>

              <div className="quote-form-grid">
                {/* Field 3: Email */}
                <div className="quote-field-group">
                  <label className="quote-field-label">
                    <span>Official Email</span>
                    <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@organisation.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="quote-input"
                  />
                </div>

                {/* Field 4: Discipline Category */}
                <div className="quote-field-group">
                  <label className="quote-field-label">
                    <span>Discipline / Category</span>
                    <span className="required-star">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="quote-select"
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
              </div>

              {/* Field 5: Notes & Dimensions */}
              <div className="quote-field-group" style={{ marginBottom: "20px" }}>
                <label className="quote-field-label">
                  <span>Plot Location, Dimensions & Specific Engineering Notes</span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Plot size (e.g. 120ft × 60ft), court colors, current sub-base condition, target completion date..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="quote-textarea"
                />
              </div>

              {/* Submit CTA */}
              <button type="submit" className="quote-submit-btn">
                <Sparkles size={18} />
                <span>Submit Blueprint & Estimate Request</span>
                <ArrowRight size={18} />
              </button>

              {/* Helpline Quick Option */}
              <div className="quote-helpline-bar">
                <span>Prefer instant call/WhatsApp?</span>
                <a href="tel:+919636365391" title="Direct Phone Hotline">+91 9636365391</a>
              </div>

              {/* Trust Footer */}
              <div className="quote-trust-footer">
                <span>
                  <ShieldCheck size={14} color="#00C2FF" />
                  ISO 9001:2015 Civil Standards
                </span>
                <span>•</span>
                <span>Confidentiality Assured (NDA)</span>
                <span>•</span>
                <span>Fast 24-48h Site Audit</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="quote-success-view">
            <div className="quote-success-icon">
              <CheckCircle size={42} />
            </div>

            <h3 style={{ color: "#FFFFFF", fontWeight: 900, fontSize: "1.7rem", marginBottom: "10px" }}>
              Inquiry Dispatched to Engineering Desk
            </h3>

            <p style={{ color: "#94A3B8", maxWidth: "480px", margin: "0 auto 28px auto", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Your technical dossier for <strong style={{ color: "#00C2FF" }}>{formData.projectTitle || "Sports & Construction Facility"}</strong> has been submitted. Our engineering team is generating your BOQ and feasibility schedule.
            </p>

            <button onClick={handleReset} className="quote-submit-btn" style={{ maxWidth: "260px", margin: "0 auto" }}>
              <span>Return to Website</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
