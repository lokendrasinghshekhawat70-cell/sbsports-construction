import React from "react";
import { 
  ClipboardCheck, 
  Layers, 
  Hammer, 
  Key, 
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";

export default function HowItWorks({ onOpenQuote }) {
  const steps = [
    {
      step: "01",
      title: "Complimentary Site Survey & Feasibility Audit",
      icon: ClipboardCheck,
      description: "Our senior civil engineer and architect inspect your land in person. We evaluate soil strata, topography, municipal zoning setbacks, and map your spatial vision.",
      highlights: ["Free engineering site audit", "Topography & soil review", "Zero pressure or obligation"]
    },
    {
      step: "02",
      title: "3D BIM Visualization & Locked-In Quote",
      icon: Layers,
      description: "Experience your project in immersive 4K architectural renders and VR walkthroughs, accompanied by an itemized, 100% fixed-price contract with milestone dates.",
      highlights: ["Immersive 3D/VR walkthrough", "100% fixed-price contract", "Tactile material finish board"]
    },
    {
      step: "03",
      title: "Permitting Clearance & Supervised Build",
      icon: Hammer,
      description: "We handle all municipal approvals and utility sanctions. Construction kicks off under full-time licensed PE supervision with daily 4K app photos and milestone sign-offs.",
      highlights: ["100% city permits managed", "Dedicated on-site PE engineers", "Daily client app updates"]
    },
    {
      step: "04",
      title: "250-Point QA Audit & White-Glove Handover",
      icon: Key,
      description: "Following third-party concrete compression testing, acoustic verification, and deep site cleaning, we deliver your keys with a 15-Year Structural Warranty certificate.",
      highlights: ["250-point QA inspection", "White-glove deep cleaned", "15-Year PE Warranty certificate"]
    }
  ];

  return (
    <section className="section-padding how-it-works-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <ShieldCheck size={15} />
            <span>Simplicity By Design</span>
          </div>
          <h2 className="section-title">
            How We Make Building <br />
            <span className="text-gradient-amber">Completely Stress-Free</span>
          </h2>
          <p className="section-subtitle">
            From initial sketch to moving day, our proven 4-step framework gives you total clarity, predictable timelines, and zero surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="step-card glass-card">
                <div className="step-card-header">
                  <span className="step-number-badge">{item.step}</span>
                  <div className="step-icon-circle">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="step-card-title">{item.title}</h3>
                <p className="step-card-desc">{item.description}</p>

                <div className="step-card-bullets">
                  {item.highlights.map((bullet, i) => (
                    <div key={i} className="step-bullet-item">
                      <Check size={13} className="text-amber" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="step-connector-arrow">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="process-cta-card glass-card">
          <div className="process-cta-content">
            <h3 className="process-cta-title">Ready to Start Your Construction Journey?</h3>
            <p className="process-cta-desc">Book your complimentary site survey with our lead structural engineer today.</p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-primary btn-glow">
            <span>Schedule Free Site Survey</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
