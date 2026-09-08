import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle, 
  Send, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  Building, 
  ShieldCheck,
  Check,
  Clock
} from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Custom Luxury Villa",
    estimatedArea: "2,500 sq ft",
    timelineTarget: "Next 1-3 Months",
    address: "",
    notes: "",
    preferredDate: ""
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
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="quote-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close dialog">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-top-header">
              <div className="badge-gold">
                <ShieldCheck size={13} /> 100% Free & No Obligation
              </div>
              <h3 className="quote-modal-title">Book Free Site Survey & Consultation</h3>
              <p className="quote-modal-sub">
                Speak directly with a licensed civil engineer. We'll review your plot, discuss design plans, and prepare a fixed-price proposal.
              </p>
            </div>

            {initialData && initialData.estimatedCost && (
              <div className="quote-prefill-badge">
                <span className="text-amber">Attached Estimate:</span> {initialData.estimatedCost} • {initialData.sqft} sq ft ({initialData.tier})
              </div>
            )}

            <form onSubmit={handleSubmit} className="quote-modal-form">
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">
                    <User size={14} className="text-amber" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="modal-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <Phone size={14} className="text-amber" /> Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 (555) 019-2834"
                    className="modal-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">
                    <Mail size={14} className="text-amber" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="modal-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <Building size={14} className="text-amber" /> Project Type
                  </label>
                  <select
                    className="modal-input"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="Custom Luxury Villa">Custom Luxury Villa</option>
                    <option value="Commercial Complex">Commercial Complex / Office</option>
                    <option value="Interior Renovation">Full Interior Renovation</option>
                    <option value="Structural & Foundation">Structural & Foundation Works</option>
                    <option value="Architectural Design">Architectural & 3D Planning</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">
                    <Calendar size={14} className="text-amber" /> Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    className="modal-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <Clock size={14} className="text-amber" /> Target Groundbreaking
                  </label>
                  <select
                    className="modal-input"
                    value={formData.timelineTarget}
                    onChange={(e) => setFormData({ ...formData, timelineTarget: e.target.value })}
                  >
                    <option value="Immediately (Within 30 Days)">Immediately (Within 30 Days)</option>
                    <option value="Next 1-3 Months">Next 1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Just Researching Costs">Just Researching Costs</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Project Details / Site Location</label>
                <textarea
                  rows="3"
                  placeholder="Share any details: site plot size, municipal jurisdiction, specific design ideas..."
                  className="modal-input modal-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="modal-submit-row">
                <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%" }}>
                  <Send size={16} />
                  <span>Submit & Request Site Consultation</span>
                </button>
              </div>

              <div className="modal-privacy-note">
                <ShieldCheck size={14} className="text-green" />
                <span>Your information is 100% confidential. No spam, guaranteed.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-screen">
            <div className="success-icon-wrap">
              <CheckCircle size={52} className="text-green" />
            </div>
            <h3 className="success-title">Consultation Request Confirmed!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name || "valued client"}</strong>. Your project inquiry has been assigned to our senior civil engineering team.
            </p>

            <div className="success-ticket-box">
              <div className="ticket-row">
                <span>Inquiry Reference:</span>
                <strong className="text-amber">#APX-{Math.floor(1000 + Math.random() * 9000)}</strong>
              </div>
              <div className="ticket-row">
                <span>Project Scope:</span>
                <span>{formData.projectType}</span>
              </div>
              <div className="ticket-row">
                <span>Direct Callback To:</span>
                <span>{formData.phone}</span>
              </div>
              <div className="ticket-row">
                <span>Estimated Response Time:</span>
                <span className="text-green">Within 15 Minutes (Business Hours)</span>
              </div>
            </div>

            <button onClick={handleReset} className="btn btn-primary" style={{ width: "100%" }}>
              <span>Done & Return to Website</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
