import React from "react";
import "./Guarantees.css";
import { 
  ShieldCheck, 
  DollarSign, 
  Clock, 
  Camera, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  XCircle,
  FileText
} from "lucide-react";

export default function GuaranteesPage({ onOpenQuote }) {
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
    <div className="guarantees-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <HeartHandshake size={14} />
            <span>Contractual Commitments</span>
          </div>
          <h1 className="page-main-title">
            Industry-Leading <span className="text-gradient-amber">Guarantees</span>
          </h1>
          <p className="page-main-subtitle">
            We eliminate the standard risks in construction. Our four legally binding guarantees ensure your budget stays locked, your timeline is strictly honored, and your structure stands for generations.
          </p>
        </div>
      </div>

      <div className="container">
        {/* 4 Cards */}
        <div className="guarantees-grid" style={{ marginBottom: 50 }}>
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

        {/* Comparison Table: Traditional Contractor vs ApexBuild */}
        <div className="comparison-table-card glass-card">
          <div className="comp-header">
            <h3>Why Homeowners & Developers Choose ApexBuild</h3>
            <p>Direct comparison against standard local contracting practices.</p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature / Guarantee</th>
                  <th>Traditional Contractors</th>
                  <th className="highlight-col">ApexBuild Construction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pricing Transparency</strong></td>
                  <td><span className="text-red"><XCircle size={15} /> Frequent change orders & budget spikes (20-40%)</span></td>
                  <td className="highlight-col"><span className="text-green"><CheckCircle2 size={15} /> 100% Fixed-Price Locked in Contract</span></td>
                </tr>
                <tr>
                  <td><strong>Handover Timeline</strong></td>
                  <td><span className="text-red"><XCircle size={15} /> Months of unexplained delays</span></td>
                  <td className="highlight-col"><span className="text-green"><CheckCircle2 size={15} /> Guaranteed Date with Daily Penalty Clause</span></td>
                </tr>
                <tr>
                  <td><strong>Structural Warranty</strong></td>
                  <td><span className="text-red"><XCircle size={15} /> 1 year basic or unwritten</span></td>
                  <td className="highlight-col"><span className="text-green"><CheckCircle2 size={15} /> 10-Year Ironclad Structural PE Warranty</span></td>
                </tr>
                <tr>
                  <td><strong>Daily Site Visibility</strong></td>
                  <td><span className="text-red"><XCircle size={15} /> Must physically visit site to inspect</span></td>
                  <td className="highlight-col"><span className="text-green"><CheckCircle2 size={15} /> Real-Time Client Portal & Daily 4K Photos</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="guarantees-cta-box glass-card">
          <div>
            <h3>Ready for a Risk-Free Building Experience?</h3>
            <p>Schedule your complimentary land audit and receive our complete sample fixed-price contract.</p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-primary btn-glow">
            <span>Book Free Site Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
