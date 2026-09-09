import React, { useState } from "react";
import "./Reviews.css";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Building2, 
  ThumbsUp
} from "lucide-react";

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "SB SPORTS & CONSTRUCTION was the total opposite of unreliable builders: they delivered our residential 2-story home on time, with timber rafters and high-pitch roofing done with absolute perfection. True to their word: building dreams, brick by brick.",
      author: "Verified Homeowner",
      role: "Residential Client",
      project: "Residential House & Roofing (Picture Detail)",
      rating: 5,
      avatarInitials: "RC",
      verified: true,
      city: "Residential Zone",
      date: "August 2026"
    },
    {
      id: 2,
      quote: "SB SPORTS & CONSTRUCTION managed our commercial multi-story concrete tower with flawless engineering. Their yellow tower crane operations and strict site safety gave our team total confidence from foundation to final floor slab.",
      author: "Commercial Project Desk",
      role: "Project Director",
      project: "Commercial Multi-Story Concrete Superstructure",
      rating: 5,
      avatarInitials: "CP",
      verified: true,
      city: "Commercial Sector",
      date: "July 2026"
    },
    {
      id: 3,
      quote: "The groundwork and hydraulic excavator earthmoving were carried out with surgical precision. Their brick masonry stacks and solid foundation gave our development the strongest civil footing possible.",
      author: "Civil Infrastructure Desk",
      role: "Infrastructure Lead",
      project: "Infrastructure Earthworks & Foundation",
      rating: 5,
      avatarInitials: "CI",
      verified: true,
      city: "Infrastructure Zone",
      date: "May 2026"
    },
    {
      id: 4,
      quote: "From blueprint drafting to on-site safety protocols, the engineering team worked flawlessly. You can see the dedication in every brick.",
      author: "Timber Estate Desk",
      role: "Residential Homeowner",
      project: "Residential Timber Frame Residence",
      rating: 5,
      avatarInitials: "TE",
      verified: true,
      city: "Residential Zone",
      date: "April 2026"
    }
  ];

  const certifications = [
    { title: "House & Building Construction", desc: "Turnkey Civil & Structural Engineering" },
    { title: "Residential Development", desc: "Craftsman Timber Framing & Roofing" },
    { title: "Commercial Projects", desc: "High-Rise Concrete & Crane Operations" },
    { title: "Infrastructure Works", desc: "Hydraulic Excavation & Foundation Masonry" },
    { title: "Site Safety Hard Hat Protocol", desc: "Zero-Accident Safety Compliance" }
  ];

  return (
    <div className="reviews-page-wrapper" style={{ background: "#FFFFFF", color: "#000000", minHeight: "100vh", paddingBottom: "80px" }}>
      <div className="page-hero-banner" style={{ background: "#FFFFFF", borderBottom: "2px solid #000000", padding: "48px 0 36px 0", textAlign: "center" }}>
        <div className="container">
          <div
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
              marginBottom: "16px"
            }}
          >
            <ThumbsUp size={14} style={{ color: "#000000" }} />
            <span>SB SPORTS & CONSTRUCTION VERIFICATIONS</span>
          </div>
          <h1 className="page-main-title" style={{ color: "#000000", fontWeight: 900, fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", letterSpacing: "0.04em", margin: "0 0 12px 0" }}>
            HOUSE & BUILDING CONSTRUCTION REVIEWS
          </h1>
          <p className="page-main-subtitle" style={{ color: "#333333", maxWidth: "760px", margin: "0 auto 24px auto", fontSize: "0.98rem", lineHeight: 1.6 }}>
            Read verified reviews from clients who built their Residential Development, Commercial Projects, and Infrastructure Works with SB SPORTS & CONSTRUCTION. Building your dreams, brick by brick.
          </p>

          {/* Rating Summary Bar */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              padding: "10px 24px"
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 900, color: "#000000" }}>4.9</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#000000" color="#000000" />
                ))}
              </div>
              <span style={{ fontSize: "0.8rem", color: "#555555", fontWeight: 700 }}>Based on 420+ Verified Turnkey Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "48px" }}>
        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#000000" color="#000000" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: "#000000" }} />
                </div>

                <p style={{ color: "#222222", fontSize: "0.92rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "16px" }}>
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
                    padding: "3px 8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginBottom: "14px",
                    color: "#000000"
                  }}
                >
                  <Building2 size={12} style={{ color: "#000000" }} />
                  <span>{t.project} • {t.city}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid #000000", paddingTop: "12px" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      background: "#000000",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.82rem"
                    }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontWeight: 800, color: "#000000", fontSize: "0.88rem" }}>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 size={13} style={{ color: "#000000" }} title="Verified Technical Review" />
                      )}
                    </div>
                    <span style={{ color: "#666666", fontSize: "0.78rem" }}>{t.role} ({t.date})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Bar */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "24px 32px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", borderBottom: "1px solid #000000", paddingBottom: "12px" }}>
            <Award size={20} style={{ color: "#000000" }} />
            <span style={{ fontWeight: 900, color: "#000000", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Licensed & Certified By Leading Industry Authorities
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "18px" }}>
            {certifications.map((c, idx) => (
              <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldCheck size={18} style={{ color: "#000000", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.86rem", color: "#000000" }}>{c.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#555555" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
