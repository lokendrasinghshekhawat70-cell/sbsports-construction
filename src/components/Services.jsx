import React from "react";
import {
  Trophy,
  Home,
  Check,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Clock
} from "lucide-react";

export default function Services({ onSelectService }) {
  const coreDivisions = [
    {
      id: "sports-infrastructure",
      title: "Synthetic Sports Infrastructure & Arena Construction",
      category: "Flagship Division 1",
      icon: Trophy,
      badge: "ITF & BWF Certified",
      image: "/images/sports_tennis_court.jpg",
      description: "Engineering world-class 8-layer ITF cushion acrylic courts, box cricket turf arenas with 30ft heavy cages, BWF badminton halls, and IAAF polyurethane running tracks.",
      highlights: [
        "8-Layer ITF Cushion Acrylic Court Surfacing",
        "Box Cricket & Futsal Turf Arenas with High-Mast LEDs",
        "BWF Grade Indoor Badminton Halls & Vinyl Arenas",
        "IAAF Certified Polyurethane Running Tracks"
      ]
    },
    {
      id: "residential-construction",
      title: "Turnkey Residential House & Villa Construction",
      category: "Flagship Division 2",
      icon: Home,
      badge: "Turnkey Residential",
      image: "/images/roofing_structure.jpg",
      description: "Custom luxury 2-story house construction featuring architectural roof shingles, engineered dormers, precision masonry, and turnkey craftsmen handover.",
      highlights: [
        "End-to-End Residential Foundation to Finishing Handover",
        "High-Pitch Architectural Roof Shingle & Weather Barrier",
        "Custom Exterior Siding, Trim Framing & Dormer Carpentry",
        "Complete Electrical, Plumbing, Flooring & Interior Works"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding services-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={15} style={{ color: "#087FEA" }} />
            <span>Our 2 Core Engineering Specialties</span>
          </div>
          <h2 className="section-title">
            Sports Infrastructure <br />
            <span className="text-gradient-blue">& Turnkey Residential Construction</span>
          </h2>
          <p className="section-subtitle">
            <strong>SB SPORTS & CONSTRUCTION</strong> specializes in 2 core engineering divisions — delivering international synthetic sports courts & complete turnkey residential home construction.
          </p>
        </div>

        {/* 2 Main Divisions Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {coreDivisions.map((division) => {
            const Icon = division.icon;
            return (
              <div key={division.id} className="clean-card" style={{ padding: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                {/* Photo Header */}
                <div style={{ width: "100%", height: "230px", overflow: "hidden", position: "relative", background: "#04101F" }}>
                  <img
                    src={division.image}
                    alt={division.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <span className="badge-blue" style={{ position: "absolute", bottom: "14px", left: "14px", background: "#071A33", color: "#19C8F4", border: "1px solid rgba(25, 200, 244, 0.3)" }}>
                    <Sparkles size={12} /> {division.badge}
                  </span>
                </div>

                <div style={{ padding: "30px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
                      <Icon size={24} style={{ color: "#087FEA" }} />
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#087FEA", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {division.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#071A33", marginBottom: "12px", lineHeight: 1.3 }}>
                    {division.title}
                  </h3>
                  <p style={{ fontSize: "0.94rem", color: "#64748B", lineHeight: 1.6, marginBottom: "22px" }}>
                    {division.description}
                  </p>

                  {/* Highlights checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "26px", background: "#F8FAFC", padding: "16px", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#071A33", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Core Discipline Scope:
                    </div>
                    {division.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#071A33" }}>
                        <Check size={16} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: "auto", display: "flex", gap: "12px" }}>
                    <button
                      onClick={() => onSelectService(division.title)}
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      <span>Inquire Specification</span>
                      <ArrowRight size={16} />
                    </button>

                    <a
                      href="tel:+919636365391"
                      className="call-direct-btn"
                      title="Call Desk"
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "6px",
                        background: "#071A33",
                        border: "1px solid #087FEA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none"
                      }}
                    >
                      <PhoneCall size={18} style={{ color: "#19C8F4" }} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
