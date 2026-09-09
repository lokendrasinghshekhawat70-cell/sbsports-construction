import React from "react";
import { 
  ShieldCheck, 
  DollarSign, 
  Clock, 
  Award, 
  Camera, 
  CheckCircle2, 
  HeartHandshake,
  Sparkles
} from "lucide-react";

export default function Guarantees() {
  const guaranteeCards = [
    {
      id: "fixed-price",
      icon: DollarSign,
      title: "100% Fixed-Price Contract",
      badge: "Zero Budget Surprises",
      tagline: "The line-item quote you approve is the exact final price you pay.",
      description: "Unlike traditional builders who hit clients with unexpected variation orders midway, our contracts lock material and labor costs. If raw steel or cement prices increase during construction, we absorb 100% of the escalation.",
      benefit: "Contractually guaranteed price cap"
    },
    {
      id: "on-time",
      icon: Clock,
      title: "Handover Date In Writing",
      badge: "$500/Day Delay Penalty",
      tagline: "Your keys delivered on time, backed by financial penalties.",
      description: "Across more than 450 delivered projects, 99.4% finished on or ahead of schedule. If we cause any unapproved delay beyond the contractual handover date, we credit you $500 for every single day delayed.",
      benefit: "Enforceable daily delay compensation"
    },
    {
      id: "warranty",
      icon: ShieldCheck,
      title: "15-Year Structural & Waterproofing Warranty",
      badge: "Ironclad Protection",
      tagline: "Built to outlast generations, certified by licensed PE engineers.",
      description: "Every foundation, post-tensioned slab, column, retaining wall, and crystalline waterproofing membrane is protected under our transferable 15-year warranty, backed by certified structural audits.",
      benefit: "100% transferable to future property buyers"
    },
    {
      id: "daily-portal",
      icon: Camera,
      title: "Daily 4K Drone & App Access",
      badge: "Total Site Transparency",
      tagline: "Watch your dream home take shape from anywhere on earth.",
      description: "No need to take time off work or visit dusty job sites. Our supervisors post daily high-resolution 4K photos, material lab test certificates, and drone flyovers directly to your smartphone portal.",
      benefit: "Full digital handover archive & BIM models"
    }
  ];

  return (
    <section id="guarantees" className="section-padding guarantees-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <HeartHandshake size={15} />
            <span>The SB Promise • Brick By Brick</span>
          </div>
          <h2 className="section-title">
            Industry-First Guarantees That <br />
            <span className="text-gradient-amber">Protect Your Investment</span>
          </h2>
          <p className="section-subtitle">
            Building should be exciting, not stressful. We eliminated the four biggest headaches in construction with our legally binding guarantees.
          </p>
        </div>

        {/* Attractive Guarantee Cards Grid */}
        <div className="guarantees-grid">
          {guaranteeCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="guarantee-card glass-card">
                <div className="guarantee-top-row">
                  <div className="feature-icon-wrapper">
                    <Icon size={26} />
                  </div>
                  <span className="badge-gold">
                    <Sparkles size={12} /> {item.badge}
                  </span>
                </div>

                <h3 className="guarantee-title">{item.title}</h3>
                <div className="guarantee-tagline">{item.tagline}</div>
                <p className="guarantee-desc">{item.description}</p>

                <div className="guarantee-benefit-tag">
                  <CheckCircle2 size={16} className="text-green" />
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
