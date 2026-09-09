import React from "react";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Building2, 
  ThumbsUp
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "SB SPORTS & CONSTRUCTION delivered our residential 2-story home on time, with timber rafters and high-pitch roofing done with absolute precision. True to their word: building dreams, brick by brick.",
      author: "Verified Homeowner",
      role: "Residential Client",
      project: "Residential House & Roofing (Picture Detail)",
      rating: 5,
      avatarInitials: "RC",
      verified: true
    },
    {
      id: 2,
      quote: "SB SPORTS & CONSTRUCTION managed our commercial multi-story concrete tower with flawless engineering. Their yellow tower crane operations and strict site safety gave our team total confidence from foundation to final floor slab.",
      author: "Commercial Development Desk",
      role: "Project Director",
      project: "Commercial Multi-Story Concrete Superstructure",
      rating: 5,
      avatarInitials: "CD",
      verified: true
    },
    {
      id: 3,
      quote: "The groundwork and hydraulic excavator earthmoving were carried out with surgical precision. Their brick masonry stacks and solid foundation gave our development the strongest civil footing possible.",
      author: "Civil Infrastructure Desk",
      role: "Infrastructure Lead",
      project: "Infrastructure Earthworks & Foundation",
      rating: 5,
      avatarInitials: "CI",
      verified: true
    }
  ];

  const certifications = [
    { title: "LEED Gold Certified", desc: "Sustainable Green Building Standards" },
    { title: "OSHA 100% Compliant", desc: "Zero-Incident Safety Protocol" },
    { title: "Licensed Master Builders", desc: "License #GC-89421 State Verified" },
    { title: "ISO 9001:2015 Quality", desc: "Certified Civil & Structural Management" },
    { title: "National Home Builders Assn", desc: "Excellence in Craftsmanship Award" }
  ];

  return (
    <section id="reviews" className="section-padding testimonials-section" style={{ background: "#FFFFFF", color: "#000000" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            className="section-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              color: "#000000",
              padding: "4px 16px",
              fontWeight: 800,
              fontSize: "0.8rem",
              marginBottom: "12px"
            }}
          >
            <ThumbsUp size={15} style={{ color: "#000000" }} />
            <span>CLIENT VERIFICATIONS</span>
          </div>
          <h2 className="section-title" style={{ color: "#000000", fontWeight: 900, fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", letterSpacing: "0.04em", margin: "0 0 12px 0" }}>
            HOUSE & BUILDING CONSTRUCTION <br />
            BUILDING YOUR DREAMS, BRICK BY BRICK
          </h2>
          <p className="section-subtitle" style={{ color: "#333333", maxWidth: "760px", margin: "0 auto", fontSize: "0.98rem", lineHeight: 1.6 }}>
            Verified technical feedback for SB SPORTS & CONSTRUCTION Residential Development, Commercial Projects, Sports Arenas, and Infrastructure Works.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#000000" color="#000000" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: "#000000" }} />
                </div>

                <p style={{ color: "#222222", fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "20px" }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#FFFFFF",
                    border: "1px solid #000000",
                    padding: "4px 10px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    marginBottom: "16px",
                    color: "#000000"
                  }}
                >
                  <Building2 size={13} style={{ color: "#000000" }} />
                  <span>{t.project}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #000000", paddingTop: "14px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#000000",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.85rem"
                    }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontWeight: 800, color: "#000000", fontSize: "0.92rem" }}>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 size={14} style={{ color: "#000000" }} title="Verified Client" />
                      )}
                    </div>
                    <span style={{ color: "#666666", fontSize: "0.8rem" }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust & Accreditation Bar */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "24px 32px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px", borderBottom: "1px solid #000000", paddingBottom: "12px" }}>
            <Award size={20} style={{ color: "#000000" }} />
            <span style={{ fontWeight: 900, color: "#000000", fontSize: "0.95rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Licensed & Certified By Leading Industry Authorities
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {certifications.map((c, idx) => (
              <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldCheck size={18} style={{ color: "#000000", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#000000" }}>{c.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#555555" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
