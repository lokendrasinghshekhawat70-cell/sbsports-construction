import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle,
  Send,
  Mail,
  Building,
  ShieldCheck,
  Clock,
  Layers,
  FileText,
  Phone,
  Sparkles
} from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    projectTitle: "",
    email: "",
    phone: "",
    projectType: "Synthetic Sports Court Construction",
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
          ? `Calculated Estimate: ${initialData.estimatedCost} (${initialData.tier}, ${initialData.timeline})`
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
      setPhoneError("Kripya poore 10-digit ka valid mobile number enter karein.");
      return;
    }
    setPhoneError("");
    setIsSubmitted(true);

    const text = encodeURIComponent(
      `Hello SB Sports & Construction!\n\n` +
      `📌 *NEW ESTIMATE & QUOTE REQUEST*\n` +
      `-----------------------------------\n` +
      `👤 *Name/Org:* ${formData.projectTitle || "N/A"}\n` +
      `📞 *Phone:* ${formData.phone || "N/A"}\n` +
      `✉️ *Email:* ${formData.email || "N/A"}\n` +
      `🏗️ *Discipline:* ${formData.projectType || "N/A"}\n` +
      `📝 *Notes & Plot Specs:* ${formData.notes || "N/A"}\n` +
      `-----------------------------------\n` +
      `Please provide engineering estimate & site inspection schedule.`
    );
    window.open(`https://wa.me/919636365391?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(4, 16, 31, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 2500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={handleReset}
    >
      <div
        className="clean-card"
        style={{
          maxWidth: "650px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px",
          background: "#FFFFFF",
          borderColor: "#DCE4EC",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "#F4F7FA",
            border: "1px solid #DCE4EC",
            color: "#071A33",
            width: "36px",
            height: "36px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ borderBottom: "1px solid #DCE4EC", paddingBottom: "18px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(8, 127, 234, 0.1)",
                  border: "1px solid rgba(8, 127, 234, 0.25)",
                  color: "#087FEA",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  marginBottom: "10px"
                }}
              >
                <Clock size={12} /> TECHNICAL PLANNING DESK
              </div>
              <h3 style={{ color: "#071A33", fontWeight: 800, fontSize: "1.4rem", margin: "0 0 6px 0" }}>
                SB SPORTS & CONSTRUCTION Project Consultation
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                Request an official estimate & engineering site audit for Sports Courts, Acrylic Coatings, Commercial Projects, or Luxury Villas.
              </p>
            </div>

            {initialData && initialData.estimatedCost && (
              <div
                style={{
                  background: "rgba(8, 127, 234, 0.1)",
                  border: "1px solid rgba(8, 127, 234, 0.3)",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  marginBottom: "20px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#087FEA"
                }}
              >
                Attached Estimate: {initialData.estimatedCost} • {initialData.sqft} sq ft ({initialData.tier})
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#071A33", marginBottom: "6px" }}>
                    Project Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Metro Sports Club"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#F4F7FA",
                      border: "1px solid #DCE4EC",
                      borderRadius: "6px",
                      color: "#071A33",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#071A33", marginBottom: "6px" }}>
                    Phone Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter 10-Digit Mobile Number"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: val });
                      if (phoneError) setPhoneError("");
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#F4F7FA",
                      border: phoneError ? "1px solid #FF4D4D" : "1px solid #DCE4EC",
                      borderRadius: "6px",
                      color: "#071A33",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                  {phoneError && (
                    <div style={{ color: "#FF4D4D", fontSize: "0.78rem", marginTop: "4px", fontWeight: 700 }}>
                      {phoneError}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#071A33", marginBottom: "6px" }}>
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="planning@org.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#F4F7FA",
                      border: "1px solid #DCE4EC",
                      borderRadius: "6px",
                      color: "#071A33",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#071A33", marginBottom: "6px" }}>
                    Discipline / Category *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#F4F7FA",
                      border: "1px solid #DCE4EC",
                      borderRadius: "6px",
                      color: "#071A33",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  >
                    <option value="Synthetic Sports Court Construction">Synthetic Sports Court Construction (Tennis/Basketball/Badminton)</option>
                    <option value="Box Cricket & Futsal Turf Arena">Box Cricket & Futsal Turf Arena</option>
                    <option value="8-Layer ITF Acrylic Resurfacing">8-Layer ITF Acrylic Resurfacing</option>
                    <option value="Turnkey Residential House Construction">Turnkey Residential House & Villa Construction</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#071A33", marginBottom: "6px" }}>
                  Plot Location, Dimensions & Specific Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Dimensions, court colors, sub-base condition, target completion date..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "#F4F7FA",
                    border: "1px solid #DCE4EC",
                    borderRadius: "6px",
                    color: "#071A33",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              >
                <Sparkles size={16} />
                <span>Submit Blueprint & Estimate Request</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", color: "#64748B", fontSize: "0.78rem", marginTop: "14px" }}>
                <ShieldCheck size={14} style={{ color: "#087FEA" }} />
                <span>ISO 9001:2015 Civil Standards • Confidentiality Assured</span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <CheckCircle size={54} style={{ color: "#087FEA", margin: "0 auto 16px auto" }} />
            <h3 style={{ color: "#071A33", fontWeight: 800, fontSize: "1.5rem", marginBottom: "8px" }}>
              Inquiry Dispatched to Engineering Desk
            </h3>
            <p style={{ color: "#64748B", maxWidth: "480px", margin: "0 auto 24px auto", fontSize: "0.95rem" }}>
              Your dossier for <strong>{formData.projectTitle || "Sports & Construction Facility"}</strong> has been registered with SB SPORTS & CONSTRUCTION.
            </p>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", background: "#087FEA", color: "#FFFFFF" }}
            >
              <span>Return to Website</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
