import React from "react";
import {
  Trophy,
  Home,
  Check,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Clock,
  Building2,
  Layers,
  Award,
  HardHat,
  ChevronRight,
  Flame
} from "lucide-react";

export default function Services({ onSelectService }) {
  const coreDivisions = [
    {
      id: "sports-infrastructure",
      title: "Synthetic Sports Infrastructure & Arena Construction",
      category: "Flagship Division 1 (Integral Spor Caliber)",
      icon: Trophy,
      badge: "ITF, BWF & FIFA Certified",
      image: "/images/sports_arena_complex_big.jpg",
      description: "Complete turnkey engineering of world-class 8-layer ITF cushion acrylic courts, box cricket & futsal turf arenas with 30ft heavy steel cages, BWF indoor badminton halls, FIBA basketball arenas, panoramic padel courts, and IAAF polyurethane running tracks.",
      highlights: [
        "8-Layer ITF Cushion Acrylic Lawn Tennis & Pickleball Courts",
        "FIFA Standard Box Cricket & Futsal Turfs with 300+ Lux High-Masts",
        "BWF Grade 1 Indoor Badminton Halls with PVC Sports Vinyl & Sprung Wood",
        "IAAF Full-PUR & Sandwich Polyurethane Athletic Running Tracks",
        "Panoramic Padel Courts with 12mm Tempered Safety Glass & LED Posts"
      ],
      routeTarget: "/sports-courts"
    },
    {
      id: "civil-construction",
      title: "Turnkey Civil Engineering & Building Construction",
      category: "Flagship Division 2 (MSS Krishna Caliber)",
      icon: Building2,
      badge: "Turnkey EPC & IS 456 Compliant",
      image: "/images/concrete_structure.jpg",
      description: "End-to-end civil contracting from architectural planning, soil testing, and heavy RCC raft foundations to multi-story commercial complexes, industrial PEB steel warehouses, luxury residential villas, and structural retrofitting.",
      highlights: [
        "High-Grade M25/M30/M35 RCC Superstructures & Raft Foundations",
        "Commercial Towers, Retail Plazas & Multi-Level Office Buildings",
        "Industrial Pre-Engineered Buildings (PEB) & Heavy Logistics Warehouses",
        "Luxury Turnkey Residential Villas & Independent Duplex Bungalows",
        "Strict Adherence to IS 456 (Concrete) & IS 1893 (Seismic) Standards"
      ],
      routeTarget: "/Services"
    }
  ];

  const specialtyCards = [
    {
      title: "8-Layer ITF Acrylic Courts",
      desc: "Shock-absorbing cushion layers engineered to protect player knees with true grand-slam ball bounce.",
      icon: Layers,
      image: "/images/sports_tennis_court.jpg",
      badge: "ITF Pace 3"
    },
    {
      title: "Box Cricket & Futsal Turfs",
      desc: "50mm high-density monofilament PE grass with 30ft heavy galvanized steel cages for 24/7 monetization.",
      icon: Trophy,
      image: "/images/sports_box_cricket_turf.jpg",
      badge: "FIFA Standard"
    },
    {
      title: "Commercial RCC Superstructures",
      desc: "Heavy concrete framing, shear walls, post-tensioned slabs, and commercial tower execution.",
      icon: Building2,
      image: "/images/steel_structure.jpg",
      badge: "IS 456 Certified"
    },
    {
      title: "Luxury Turnkey Villas",
      desc: "Custom 2-story luxury residences with timber rafter roofs, architectural dormers, and premium finishes.",
      icon: Home,
      image: "/images/roofing_structure.jpg",
      badge: "Turnkey Handover"
    }
  ];

  return (
    <section id="services" className="section-padding services-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={15} style={{ color: "#087FEA" }} />
            <span>Our 2 Flagship Engineering Divisions</span>
          </div>
          <h2 className="section-title">
            International Sports Infrastructure <br />
            <span className="text-gradient-blue">& Turnkey Civil Construction</span>
          </h2>
          <p className="section-subtitle">
            <strong>SB SPORTS & CONSTRUCTION</strong> unites international sports surface technology (Integral Spor caliber) with heavy civil engineering and building execution (MSS Krishna Construction caliber).
          </p>
        </div>

        {/* 2 Main Flagship Divisions Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px", marginBottom: "48px" }}>
          {coreDivisions.map((division) => {
            const Icon = division.icon;
            return (
              <div key={division.id} className="clean-card" style={{ padding: 0, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid #DCE4EC", borderRadius: "10px" }}>
                {/* Photo Header */}
                <div style={{ width: "100%", height: "250px", overflow: "hidden", position: "relative", background: "#04101F" }}>
                  <img
                    src={division.image}
                    alt={division.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4, 16, 31, 0.1) 0%, rgba(4, 16, 31, 0.85) 100%)" }} />
                  <span className="badge-blue" style={{ position: "absolute", bottom: "16px", left: "16px", background: "#071A33", color: "#2298D8", border: "1px solid rgba(25, 200, 244, 0.4)", fontWeight: 800 }}>
                    <ShieldCheck size={13} /> {division.badge}
                  </span>
                </div>

                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
                      <Icon size={24} style={{ color: "#087FEA" }} />
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#087FEA", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {division.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#071A33", marginBottom: "12px", lineHeight: 1.28 }}>
                    {division.title}
                  </h3>
                  <p style={{ fontSize: "0.94rem", color: "#64748B", lineHeight: 1.6, marginBottom: "24px" }}>
                    {division.description}
                  </p>

                  {/* Highlights checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", background: "#F8FAFC", padding: "18px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#071A33", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Check size={14} style={{ color: "#087FEA" }} /> Core Discipline Scope:
                    </div>
                    {division.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#334155" }}>
                        <Check size={16} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: "auto", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => onSelectService(division.title)}
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      <span>Inquire Specifications</span>
                      <ArrowRight size={16} />
                    </button>

                    <a
                      href="tel:+919636365391"
                      className="call-direct-btn"
                      title="Call Technical Desk"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "6px",
                        background: "#071A33",
                        border: "1px solid #087FEA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none"
                      }}
                    >
                      <PhoneCall size={18} style={{ color: "#2298D8" }} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Quick Specialty Mini Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {specialtyCards.map((spec, i) => {
            const SIcon = spec.icon;
            return (
              <div key={i} className="clean-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ width: "100%", height: "140px", borderRadius: "6px", overflow: "hidden", position: "relative" }}>
                  <img src={spec.image} alt={spec.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "10px", left: "10px", background: "#071A33", color: "#2298D8", fontSize: "0.72rem", fontWeight: 800, padding: "3px 8px", borderRadius: "4px" }}>
                    {spec.badge}
                  </span>
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#071A33", margin: 0 }}>
                  {spec.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                  {spec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
