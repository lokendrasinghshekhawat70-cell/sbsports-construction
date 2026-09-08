import React from "react";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from "lucide-react";

export default function Hero({ onOpenQuote, onJumpEstimator }) {
  return (
    <section className="hero-section">
      {/* Background Image Container with Light Gradient Overlay */}
      <div className="hero-bg-container">
        <img 
          src="/images/hero.jpg" 
          alt="Modern Architectural Construction Project" 
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-particles" />
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Main Hero Left Column */}
          <div className="hero-main-col">
            <div className="hero-badge animate-float">
              <Sparkles size={16} />
              <span>Turnkey Construction & Civil Engineering</span>
            </div>

            <h1 className="hero-title">
              We Build Your Vision <br />
              <span className="text-gradient-amber">From Foundation To Handover.</span>
            </h1>

            <p className="hero-description">
              Say goodbye to contractor delays and unexpected costs. We design, permit, and construct residential villas, modern commercial facilities, and architectural renovations with guaranteed timelines, locked-in budgets, and daily digital site reporting.
            </p>

            {/* Action Buttons */}
            <div className="hero-ctas">
              <button 
                onClick={onJumpEstimator} 
                className="btn btn-primary hero-cta-btn"
              >
                <Calculator size={19} />
                <span>Calculate Your Construction Cost</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onOpenQuote()} 
                className="btn btn-secondary hero-cta-btn"
              >
                <Building2 size={19} />
                <span>Book Free Site Inspection</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="hero-checklist">
              <div className="check-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Fixed-Price Contract (No Price Hikes)</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Guaranteed Completion Timeline</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>10-Year Ironclad Structural Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Live Track Card */}
          <div className="hero-cards-col">
            <div className="glass-card hero-feature-card">
              <div className="hero-card-header">
                <div className="status-live-indicator">
                  <span className="pulsing-dot" />
                  <span>28 SITES ACTIVELY UNDER CONSTRUCTION</span>
                </div>
                <span className="badge-gold">ISO 9001 Certified</span>
              </div>

              <div className="hero-stat-highlight">
                <span className="stat-giant">450+</span>
                <span className="stat-label">Homes, Commercial Hubs & Renovations Delivered</span>
              </div>

              {/* Quick Metrics */}
              <div className="hero-mini-grid">
                <div className="stat-card">
                  <div className="feature-icon-wrapper" style={{ width: 44, height: 44, marginBottom: 0 }}>
                    <Building2 size={20} />
                  </div>
                  <div>
                    <div className="stat-number">18+ Yrs</div>
                    <div className="stat-desc">Engineering Experience</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="feature-icon-wrapper" style={{ width: 44, height: 44, marginBottom: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="stat-number">100%</div>
                    <div className="stat-desc">Municipal Approved</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="feature-icon-wrapper" style={{ width: 44, height: 44, marginBottom: 0 }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="stat-number">4.9 ★</div>
                    <div className="stat-desc">520+ Happy Clients</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="feature-icon-wrapper" style={{ width: 44, height: 44, marginBottom: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="stat-number">99.4%</div>
                    <div className="stat-desc">On-Time Delivery Rate</div>
                  </div>
                </div>
              </div>

              {/* Jump to Estimator */}
              <div className="hero-card-footer">
                <span>Want to know how much your build will cost?</span>
                <button onClick={onJumpEstimator} className="quick-jump-link">
                  Open Estimator <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="scroll-indicator" aria-label="Explore construction disciplines">
        <span>Explore All Disciplines</span>
        <ChevronDown size={18} className="scroll-bounce" />
      </a>
    </section>
  );
}
