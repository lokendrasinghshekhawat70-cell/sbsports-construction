import React, { useState } from "react";
import "./Contact.css";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Building
} from "lucide-react";

export default function ContactPage({ onOpenQuote }) {
  const [fastFormSent, setFastFormSent] = useState(false);
  const [fastInput, setFastInput] = useState({ name: "", phone: "", service: "New Custom Luxury Home", notes: "" });

  const handleFastSubmit = (e) => {
    e.preventDefault();
    setFastFormSent(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <PhoneCall size={14} />
            <span>Direct Engineering Desk</span>
          </div>
          <h1 className="page-main-title">
            Contact & Free <span className="text-gradient-amber">Site Feasibility</span>
          </h1>
          <p className="page-main-subtitle">
            Speak directly with our senior civil engineering team to review land feasibility, zoning bylaws, architectural plans, or project budget ranges.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-main-grid">
          {/* Direct Hotlines Column */}
          <div className="contact-info-cards-col">
            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <PhoneCall size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Direct Phone & WhatsApp Hotline</div>
                <a href="tel:+18005552845" className="contact-val highlight-val">
                  (800) 555-BUILD • (800) 555-2845
                </a>
                <div className="contact-sub">Direct line to Senior Civil Estimators • Mon-Sat 8am-7pm</div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Blueprints & CAD Submission Desk</div>
                <a href="mailto:blueprints@apexbuild.com" className="contact-val">
                  blueprints@apexbuild.com
                </a>
                <div className="contact-sub">Send CAD/PDF drawings for guaranteed 24-hr engineering review</div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">National Headquarters & Design Center</div>
                <div className="contact-val">450 Grand Architectural Blvd, Suite 800</div>
                <div className="contact-sub">Civil Engineering Lab & Tactile Material Studio</div>
              </div>
            </div>

            {/* Emergency Service Banner */}
            <div className="emergency-banner glass-card">
              <div className="emergency-icon-wrap">
                <AlertTriangle size={22} className="text-amber" />
              </div>
              <div className="emergency-info">
                <strong>Emergency Civil & Structural Response</strong>
                <span>Urgent foundation shifting, severe settlement, or storm remediation?</span>
              </div>
              <a href="tel:+18005552845" className="btn btn-primary btn-sm">
                Call 24/7 Hotline
              </a>
            </div>
          </div>

          {/* Quick Consultation Request Form */}
          <div className="contact-form-col">
            <div className="glass-card fast-callback-card">
              <div className="fast-card-header">
                <div className="badge-gold">
                  <Clock size={13} /> Guaranteed 15-Minute Response
                </div>
                <h3 className="fast-card-title">Request Immediate Callback</h3>
                <p className="fast-card-desc">
                  Leave your contact details and our lead estimator will call you right back with preliminary cost ranges and scheduling.
                </p>
              </div>

              {!fastFormSent ? (
                <form onSubmit={handleFastSubmit} className="fast-form">
                  <div className="form-field">
                    <label className="field-label">Your Full Name</label>
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
                    <label className="field-label">Phone Number (Required for Callback)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="modal-input"
                      value={fastInput.phone}
                      onChange={(e) => setFastInput({ ...fastInput, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">What are you planning?</label>
                    <select
                      className="modal-input"
                      value={fastInput.service}
                      onChange={(e) => setFastInput({ ...fastInput, service: e.target.value })}
                    >
                      <option value="New Custom Luxury Home">New Custom Luxury Home</option>
                      <option value="Commercial Development">Commercial Development / Office</option>
                      <option value="Whole House Remodel">Complete Home Renovation</option>
                      <option value="Structural & Foundation">Structural & Foundation Works</option>
                      <option value="Architectural Plans">Architectural 3D Plans Only</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="field-label">Project Details / Location Notes</label>
                    <textarea
                      rows="3"
                      placeholder="Plot size, city location, target timeline..."
                      className="modal-input modal-textarea"
                      value={fastInput.notes}
                      onChange={(e) => setFastInput({ ...fastInput, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: 8 }}>
                    <Send size={16} />
                    <span>Request Callback Now</span>
                  </button>

                  <div className="form-guarantee-note">
                    <ShieldCheck size={14} className="text-green" />
                    <span>Direct technical consultation with zero spam or sales pressure.</span>
                  </div>
                </form>
              ) : (
                <div className="fast-form-success">
                  <CheckCircle2 size={46} className="text-green" />
                  <h4>Callback Request Received!</h4>
                  <p>
                    Thank you, <strong>{fastInput.name}</strong>. Our lead site estimator is reviewing your request and will call <strong>{fastInput.phone}</strong> shortly.
                  </p>
                  <button 
                    onClick={() => setFastFormSent(false)} 
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
    </div>
  );
}
