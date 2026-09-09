import React from "react";
import { 
  ClipboardCheck, 
  Layers, 
  Hammer, 
  Key, 
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles
} from "lucide-react";

export default function HowItWorks({ onOpenQuote }) {
  const steps = [
    {
      step: "01",
      title: "Complimentary Site Survey & Feasibility Audit",
      icon: ClipboardCheck,
      description: "Our senior civil engineer inspects your site. We evaluate soil strata, sub-base laser gradient, court dimensions, municipal zoning, and map your vision.",
      highlights: ["Free engineering site audit", "Laser gradient & soil review", "Zero pressure or obligation"]
    },
    {
      step: "02",
      title: "CAD Blueprints & Locked-In Contract",
      icon: Layers,
      description: "Experience your project in detailed 2D/3D CAD blueprints, accompanied by an itemized, 100% fixed-price contract with milestone completion dates.",
      highlights: ["Precision CAD blueprints", "100% fixed-price contract", "Material sample board"]
    },
    {
      step: "03",
      title: "Sub-Base Pouring & Multi-Layer Coating",
      icon: Hammer,
      description: "Construction kicks off under full-time PE supervision. Sub-base concrete is poured, followed by primer, resurfacer, and 8 ITF acrylic cushion layers.",
      highlights: ["Laser-screed sub-base", "ITF acrylic coating application", "Daily progress photo updates"]
    },
    {
      step: "04",
      title: "250-Point QA Audit & Official Handover",
      icon: Key,
      description: "Following anti-slip friction verification, line-marking inspection, and deep cleaning, we hand over your arena with an official PE Handover dossier.",
      highlights: ["250-point QA inspection", "Deep site cleaning", "Official PE Handover dossier"]
    }
  ];

  return (
    <section className="section-padding how-it-works-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <ShieldCheck size={15} style={{ color: "#087FEA" }} />
            <span>4-Step Execution Protocol</span>
          </div>
          <h2 className="section-title">
            How We Make Building <br />
            <span className="text-gradient-blue">Completely Stress-Free</span>
          </h2>
          <p className="section-subtitle">
            From initial site survey to official handover, our proven framework gives you total clarity, predictable timelines, and zero surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="clean-card" style={{ padding: "32px 24px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      fontFamily: "'Manrope', sans-serif",
                      color: "#087FEA"
                    }}
                  >
                    {item.step}
                  </span>
                  <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
                    <Icon size={22} />
                  </div>
                </div>

                <h3 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#071A33", marginBottom: "12px", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.6, marginBottom: "20px" }}>
                  {item.description}
                </p>

                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {item.highlights.map((bullet, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "#071A33" }}>
                      <Check size={14} style={{ color: "#087FEA" }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div
          className="clean-card"
          style={{
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            background: "#FFFFFF",
            borderColor: "#DCE4EC"
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#071A33", marginBottom: "6px" }}>
              Ready to Start Your Sports Arena or Building Project?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#64748B", margin: 0 }}>
              Book your complimentary site survey with our lead structural engineer today.
            </p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-primary btn-glow">
            <Sparkles size={18} />
            <span>Schedule Free Site Survey</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}


