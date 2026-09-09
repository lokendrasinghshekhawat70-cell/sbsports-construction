import React from "react";
import { 
  ShieldCheck, 
  DollarSign, 
  Clock, 
  Camera, 
  CheckCircle2, 
  HeartHandshake,
  Sparkles,
  Trophy
} from "lucide-react";

export default function Guarantees() {
  const guaranteeCards = [
    {
      id: "fixed-price",
      icon: DollarSign,
      title: "100% Fixed-Price Contract",
      badge: "Zero Budget Surprises",
      tagline: "The line-item quote you approve is the exact final price you pay.",
      description: "Unlike traditional builders who hit clients with unexpected variation orders midway, our contracts lock material and labor costs. If raw steel or acrylic chemical costs increase, we absorb 100% of the escalation.",
      benefit: "Contractually guaranteed price cap"
    },
    {
      id: "on-time",
      icon: Clock,
      title: "Handover Date In Writing",
      badge: "Delay Guarantee Penalty",
      tagline: "Your arena or building delivered on time, backed by financial penalties.",
      description: "Across more than 500 delivered projects, 99.6% finished on or ahead of schedule. If we cause any unapproved delay beyond the contractual handover date, we credit you daily compensation.",
      benefit: "Enforceable daily delay compensation"
    },
    {
      id: "warranty",
      icon: ShieldCheck,
      title: "10-Year Structural & Acrylic Surface Warranty",
      badge: "Ironclad Protection",
      tagline: "Built to outlast generations, certified by licensed PE engineers.",
      description: "Every foundation, post-tensioned slab, 8-layer ITF acrylic coating, and crystalline waterproofing membrane is protected under our transferable 10-year warranty, backed by certified structural audits.",
      benefit: "100% transferable to future property buyers"
    },
    {
      id: "daily-portal",
      icon: Camera,
      title: "Daily Site Progress Updates & Live Tracking",
      badge: "Total Transparency",
      tagline: "Watch your court or building take shape from anywhere on earth.",
      description: "No need to take time off work or visit dusty job sites. Our supervisors send daily high-resolution photos, material lab test certificates, and drone flyovers directly to your phone.",
      benefit: "Full digital handover archive & CAD models"
    }
  ];

  return (
    <section id="guarantees" className="section-padding guarantees-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <HeartHandshake size={15} style={{ color: "#087FEA" }} />
            <span>The SB Contractual Guarantee</span>
          </div>
          <h2 className="section-title">
            Industry-First Guarantees That <br />
            <span className="text-gradient-blue">Protect Your Investment</span>
          </h2>
          <p className="section-subtitle">
            Construction should be seamless and reassuring. We eliminate risks with legally binding performance and warranty guarantees.
          </p>
        </div>

        {/* Guarantee Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px"
          }}
        >
          {guaranteeCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="clean-card" style={{ padding: "32px 28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
                    <Icon size={24} />
                  </div>
                  <span className="badge-blue" style={{ background: "#071A33", color: "#19C8F4", border: "1px solid rgba(25, 200, 244, 0.3)" }}>
                    <Sparkles size={12} /> {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#071A33", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#087FEA", marginBottom: "12px" }}>
                  {item.tagline}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6, marginBottom: "24px" }}>
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(8, 127, 234, 0.1)",
                    border: "1px solid rgba(8, 127, 234, 0.3)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    color: "#087FEA"
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>{item.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


