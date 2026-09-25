import React from "react";
import {
  ClipboardCheck,
  Layers,
  Hammer,
  Key,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Compass,
  Lightbulb,
  Building2,
  Trophy,
  Award
} from "lucide-react";

export default function HowItWorks({ onOpenQuote }) {
  const steps = [
    {
      step: "01",
      title: "On-Site Laser Survey & Soil Strata Analysis",
      icon: Compass,
      description: "Our senior civil engineer visits your site for laser-guided level verification, soil bearing capacity testing, drainage slope review, and feasibility analysis.",
      highlights: ["Complimentary site audit", "Laser gradient 1:100 slope review", "Soil bearing capacity test"]
    },
    {
      step: "02",
      title: "2D/3D CAD Blueprints & Fixed-Price BOQ",
      icon: Layers,
      description: "We prepare comprehensive architectural drawings, structural layouts, and an itemized Bill of Quantities (BOQ) with a 100% price lock.",
      highlights: ["Precision CAD blueprints", "Transparent 0% hidden cost BOQ", "Material sample boards"]
    },
    {
      step: "03",
      title: "Heavy Sub-Base / Foundation RCC Casting",
      icon: Hammer,
      description: "Excavation, pneumatic compaction, Fe-550D rebar cage binding, and monolithic M25/M30/M35 structural concrete casting under full-time PE supervision.",
      highlights: ["Laser-screed subgrade base", "Computerized RMC batching", "IS 456 / IS 1893 compliance"]
    },
    {
      step: "04",
      title: "Multi-Layer Synthetic Coating & Framing",
      icon: Trophy,
      description: "Application of deep bonding primer, silica resurfacer, and 8 ITF acrylic cushion coats, or structural PEB steel truss erection for buildings.",
      highlights: ["8-layer ITF acrylic cushion", "UV-resistant colorfast pigments", "Seismic-rated steel joins"]
    },
    {
      step: "05",
      title: "High-Mast Floodlighting, Fencing & Netting",
      icon: Lightbulb,
      description: "Installation of 300+ Lux anti-glare tournament LED sports lighting, rust-proof hot-dip galvanized cages, high-tenacity perimeter netting, and hardware.",
      highlights: ["Anti-glare tournament LEDs", "30ft heavy tubular cage nets", "Laser regulation line markings"]
    },
    {
      step: "06",
      title: "250-Point QA Audit & Official PE Handover",
      icon: Key,
      description: "Rigorous anti-slip friction verification, laser level checks, deep site cleaning, and official handover with 10-year warranty documentation.",
      highlights: ["250-point quality audit", "10-year structural warranty", "Official PE Handover dossier"]
    }
  ];

  return (
    <section className="section-padding how-it-works-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <ShieldCheck size={15} style={{ color: "#087FEA" }} />
            <span>6-Stage Turnkey Protocol</span>
          </div>
          <h2 className="section-title">
            Our Proven Engineering Framework <br />
            <span className="text-gradient-blue">From Conception to Handover</span>
          </h2>
          <p className="section-subtitle">
            Every sports court, commercial facility, and civil structure by <strong>SB SPORTS & CONSTRUCTION</strong> follows a disciplined 6-stage roadmap for zero surprises and predictable timelines.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="clean-card" style={{ padding: "28px 24px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <span
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      fontFamily: "'Manrope', sans-serif",
                      color: "#087FEA"
                    }}
                  >
                    STAGE {item.step}
                  </span>
                  <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
                    <Icon size={20} />
                  </div>
                </div>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#071A33", marginBottom: "10px", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.55, marginBottom: "18px" }}>
                  {item.description}
                </p>

                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", background: "#F8FAFC", padding: "12px 14px", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
                  {item.highlights.map((bullet, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "#334155" }}>
                      <Check size={14} style={{ color: "#087FEA", flexShrink: 0 }} />
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
          data-aos="fade-up"
          data-aos-duration="750"
          style={{
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            background: "#000000",
            border: "2px solid #087FEA",
            borderRadius: "10px",
            boxShadow: "0 16px 45px rgba(0, 0, 0, 0.95), 0 0 25px rgba(8, 127, 234, 0.25)"
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#3a3636ff", marginBottom: "6px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
              Ready to Start Your Sports Arena or Civil Building Project?
            </h3>
            <p style={{ fontSize: "0.98rem", color: "#161617ff", margin: 0, fontWeight: 500 }}>
              Book your complimentary on-site feasibility inspection with our senior civil engineer today.
            </p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-primary btn-glow" style={{ padding: "14px 28px" }}>
            <Sparkles size={18} />
            <span>Schedule Free Site Survey</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}


