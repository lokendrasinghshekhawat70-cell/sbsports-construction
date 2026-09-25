import React from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  Award,
  ShieldCheck,
  Building2,
  ThumbsUp,
  Sparkles,
  Trophy
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "SB SPORTS & CONSTRUCTION delivered our 8-layer ITF tennis courts with incredible speed. The sub-base leveling and anti-glare acrylic coating give our players a grand slam experience.",
      author: "President — National Sports Club",
      role: "Tournament Sports Client",
      project: "8-Layer ITF Tennis Arena",
      rating: 5,
      avatarInitials: "TC",
      verified: true
    },
    {
      id: 2,
      quote: "Our Box Cricket turf arena was constructed in just 4 weeks. High-density grass, heavy perimeter netting, and LED floodlights have kept the court fully booked every night.",
      author: "Commercial Turf Owner",
      role: "Commercial Client",
      project: "Box Cricket & Futsal Arena",
      rating: 5,
      avatarInitials: "BC",
      verified: true
    },
    {
      id: 3,
      quote: "SB SPORTS & CONSTRUCTION handled our multi-story commercial complex and luxury residential villa. Zero cost overruns, 100% on-time handover, and absolute structural perfection.",
      author: "Real Estate Developer",
      role: "Commercial & Civil Client",
      project: "Commercial Complex & Villa",
      rating: 5,
      avatarInitials: "RD",
      verified: true
    }
  ];

  const certifications = [
    { title: "ITF Certified Court", desc: "International Tennis Federation Standards" },
    { title: "BWF Grade Surfacing", desc: "Badminton World Federation Approved" },
    { title: "ISO 9001:2015 Quality", desc: "Certified Civil & Sports Infrastructure Management" },
    { title: "100% Licensed PE Engineers", desc: "Licensed Structural Engineers & Architects" },
    { title: "Turnkey Project Delivery", desc: "Complete End-to-End Civil & Sports Execution" }
  ];

  return (
    <section id="reviews" className="section-padding testimonials-section" style={{ background: "#F4F7FA", color: "#071A33" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <ThumbsUp size={15} style={{ color: "#087FEA" }} />
            <span>CLIENT VERIFICATIONS & TESTIMONIALS</span>
          </div>
          <h2 className="section-title">
            Trusted by Sports Clubs, Developers <br />
            <span className="text-gradient-blue">& Institutional Clients</span>
          </h2>
          <p className="section-subtitle">
            Verified feedback for SB SPORTS & CONSTRUCTION synthetic court installations, Box Cricket turfs, commercial complexes, and luxury civil developments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "48px" }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="clean-card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#087FEA" color="#087FEA" />
                    ))}
                  </div>
                  <Quote size={28} style={{ color: "rgba(8, 127, 234, 0.2)" }} />
                </div>

                <p style={{ color: "#071A33", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "24px" }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(8, 127, 234, 0.1)",
                    border: "1px solid rgba(8, 127, 234, 0.3)",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    marginBottom: "18px",
                    color: "#087FEA"
                  }}
                >
                  <Building2 size={13} />
                  <span>{t.project}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid #DCE4EC", paddingTop: "16px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "6px",
                      background: "#087FEA",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.9rem"
                    }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontWeight: 800, color: "#071A33", fontSize: "0.95rem" }}>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 size={15} style={{ color: "#087FEA" }} title="Verified Client" />
                      )}
                    </div>
                    <span style={{ color: "#64748B", fontSize: "0.82rem" }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust & Accreditation Bar */}
        <div
          className="clean-card"
          style={{
            padding: "28px 36px",
            background: "#071A33",
            borderColor: "rgba(8, 127, 234, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid rgba(217, 226, 234, 0.15)", paddingBottom: "14px" }}>
            <Award size={22} style={{ color: "#087FEA" }} />
            <span style={{ fontWeight: 800, color: "#372b2bff", fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Licensed & Certified By Global Industry Authorities
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {certifications.map((c, idx) => (
              <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <ShieldCheck size={20} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#3e3636ff" }}>{c.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#424547ff" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


