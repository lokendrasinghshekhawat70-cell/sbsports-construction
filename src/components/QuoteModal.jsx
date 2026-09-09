import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle,
  Send,
  Mail,
  Building,
  ShieldCheck,
  Check,
  Clock,
  Layers,
  FileText
} from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    projectTitle: "",
    email: "",
    projectType: "Residential Development (House & Roofing)",
    estimatedArea: "2,500 sq ft",
    timelineTarget: "Next 1-3 Months",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div
        className="quote-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          border: "2px solid #000000",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          color: "#000000"
        }}
      >
        <button
          className="modal-close-btn"
          onClick={handleReset}
          aria-label="Close dialog"
          style={{ color: "#000000", border: "1px solid #000000", background: "#FFFFFF" }}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-top-header" style={{ borderBottom: "1px solid #000000", paddingBottom: "16px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid #000000",
                  padding: "4px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                  background: "#FFFFFF",
                  color: "#000000"
                }}
              >
                <Clock size={13} style={{ color: "#000000" }} /> TECHNICAL PLANNING DESK
              </div>
              <h3 className="quote-modal-title" style={{ color: "#000000", fontWeight: 900 }}>
                SB SPORTS & CONSTRUCTION Project Inquiry
              </h3>
              <p className="quote-modal-sub" style={{ color: "#333333" }}>
                Official Blueprint & Engineering Review: Residential Development, Commercial Projects, Sports Arenas, and Infrastructure Works.
              </p>
            </div>

            {initialData && initialData.estimatedCost && (
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  padding: "8px 14px",
                  marginBottom: "16px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#000000"
                }}
              >
                Attached Estimate: {initialData.estimatedCost} • {initialData.sqft} sq ft ({initialData.tier})
              </div>
            )}

            <form onSubmit={handleSubmit} className="quote-modal-form">
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label" style={{ color: "#000000", fontWeight: 700 }}>
                    <FileText size={14} style={{ color: "#000000" }} /> Project Scope / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 5-Acre Residential Layout / Commercial High-Rise"
                    className="modal-input"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label" style={{ color: "#000000", fontWeight: 700 }}>
                    <Mail size={14} style={{ color: "#000000" }} /> Official Planning Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="planning@organization.com"
                    className="modal-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label" style={{ color: "#000000", fontWeight: 700 }}>
                    <Building size={14} style={{ color: "#000000" }} /> Construction Discipline *
                  </label>
                  <select
                    className="modal-input"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                  >
                    <option value="Residential Development (House & Roofing)">Residential Development (House & Roofing)</option>
                    <option value="Commercial Projects (Multi-Story & Cranes)">Commercial Projects (Multi-Story & Cranes)</option>
                    <option value="Sports Court & Synthetic Coating (Acrylic/Turf)">Sports Court & Synthetic Coating (Acrylic/Turf)</option>
                    <option value="Infrastructure Works (Excavation & Foundations)">Infrastructure Works (Excavation & Foundations)</option>
                    <option value="Architectural Blueprints & Structural Engineering">Architectural Blueprints & Structural Engineering</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="field-label" style={{ color: "#000000", fontWeight: 700 }}>
                    <Layers size={14} style={{ color: "#000000" }} /> Groundbreaking Timeline
                  </label>
                  <select
                    className="modal-input"
                    value={formData.timelineTarget}
                    onChange={(e) => setFormData({ ...formData, timelineTarget: e.target.value })}
                    style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                  >
                    <option value="Immediate (Ready for Excavation)">Immediate (Ready for Excavation)</option>
                    <option value="Next 1-3 Months">Next 1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Planning & Feasibility Phase">Planning & Feasibility Phase</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label" style={{ color: "#000000", fontWeight: 700 }}>
                  Site Location, Plot Dimensions & Engineering Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Share site details: plot dimensions, municipal zone, architectural specifics..."
                  className="modal-input modal-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000" }}
                />
              </div>

              <div className="modal-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    background: "#000000",
                    color: "#FFFFFF",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "14px 20px"
                  }}
                >
                  <Send size={16} />
                  <span>Submit Blueprint & Engineering Inquiry</span>
                </button>
              </div>

              <div
                className="modal-privacy-note"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  color: "#333333",
                  fontSize: "0.8rem",
                  marginTop: "12px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck size={14} style={{ color: "#000000" }} />
                  <span>Class-1 Civil Construction Standards • Institutional Confidentiality</span>
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#000000" }}>
                  Direct Helpline: <a href="tel:+919636365391" style={{ color: "#000000", textDecoration: "underline" }}>+91-9636365391</a> • <a href="mailto:sbsportsandconstruction@gmail.com" style={{ color: "#000000", textDecoration: "underline" }}>sbsportsandconstruction@gmail.com</a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-screen" style={{ textAlign: "center", padding: "20px 0" }}>
            <div className="success-icon-wrap" style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <CheckCircle size={52} style={{ color: "#000000" }} />
            </div>
            <h3 className="success-title" style={{ color: "#000000", fontWeight: 900, fontSize: "1.4rem" }}>
              Inquiry Dispatched to Engineering Desk
            </h3>
            <p className="success-desc" style={{ color: "#333333", maxWidth: "480px", margin: "0 auto 20px auto" }}>
              Your technical dossier for <strong>{formData.projectTitle || "Site Development"}</strong> has been registered with SB SPORTS & CONSTRUCTION.
            </p>

            <div
              className="success-ticket-box"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "16px",
                margin: "0 auto 24px auto",
                maxWidth: "460px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E5E5E5", paddingBottom: "6px" }}>
                <span style={{ color: "#555555" }}>Inquiry Reference:</span>
                <strong style={{ color: "#000000" }}>#SB-{Math.floor(1000 + Math.random() * 9000)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E5E5E5", paddingBottom: "6px" }}>
                <span style={{ color: "#555555" }}>Construction Discipline:</span>
                <span style={{ color: "#000000", fontWeight: 700 }}>{formData.projectType}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E5E5E5", paddingBottom: "6px" }}>
                <span style={{ color: "#555555" }}>Official Planning Email:</span>
                <span style={{ color: "#000000", fontWeight: 700 }}>{formData.email}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#555555" }}>Review Status:</span>
                <span style={{ color: "#000000", fontWeight: 800 }}>Assigned to Senior Structural Engineer</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{
                width: "100%",
                background: "#000000",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontWeight: 800,
                padding: "12px 20px"
              }}
            >
              <span>Done & Return to Blueprints</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
