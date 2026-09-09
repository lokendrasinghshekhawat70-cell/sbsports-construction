import React from "react";
import "./Reviews.css";
import {
  Star,
  Quote,
  CheckCircle2,
  Award,
  ShieldCheck,
  Building2,
  ThumbsUp,
  Trophy,
  Home,
  Sparkles
} from "lucide-react";

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "SB SPORTS & CONSTRUCTION transformed our sports club layout into an international tournament grade facility. The 8-layer ITF acrylic tennis court bounce and non-skid color coating are flawless!",
      author: "Metropolitan Sports Club",
      role: "Club Secretary",
      project: "8-Layer ITF Acrylic Tennis Court",
      rating: 5,
      avatarInitials: "MS",
      verified: true,
      city: "Sports Complex",
      date: "August 2026"
    },
    {
      id: 2,
      quote: "Our commercial box cricket arena has been running 18 hours a day with zero turf wear. The 30ft high galvanized steel cage and 300+ Lux LED high-masts were installed with total precision.",
      author: "Commercial Sports Hub",
      role: "Arena Operations Director",
      project: "High-Mast Box Cricket & Futsal Turf",
      rating: 5,
      avatarInitials: "CS",
      verified: true,
      city: "Commercial Sector",
      date: "July 2026"
    },
    {
      id: 3,
      quote: "SB SPORTS & CONSTRUCTION delivered our luxury 2-story family villa on time. Timber rafters, high-pitch roof shingle installation, and masonry were done with absolute craftsmen perfection.",
      author: "Verified Villa Owner",
      role: "Residential Client",
      project: "Turnkey Luxury Villa Construction",
      rating: 5,
      avatarInitials: "VV",
      verified: true,
      city: "Residential Enclave",
      date: "June 2026"
    },
    {
      id: 4,
      quote: "The BWF approved indoor badminton hall vinyl flooring and sprung timber sub-floor framework gave our academy players world-class joint protection and traction during matches.",
      author: "National Sports Academy",
      role: "Head Badminton Coach",
      project: "BWF Indoor Badminton Hall",
      rating: 5,
      avatarInitials: "NA",
      verified: true,
      city: "Sports Academy",
      date: "May 2026"
    }
  ];

  const certifications = [
    { title: "Synthetic Sports Infrastructure", desc: "ITF, BWF & FIFA Certified Court Construction" },
    { title: "Turnkey Residential Construction", desc: "Craftsman Framing, Roofing & Turnkey Handover" },
    { title: "ISO 9001:2015 Civil Standards", desc: "Certified Engineering Audits & Quality Control" },
    { title: "Zero-Puddle Gradient Guarantee", desc: "Laser-Screed Sub-Base Precision Leveling" },
    { title: "On-Site Safety Protocols", desc: "Mandatory Hard Hat & Zero-Accident Compliance" }
  ];

  return (
    <div className="reviews-page-wrapper" style={{ background: "#F4F7FA", color: "#071A33", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Page Banner Header */}
      <div className="page-hero-banner" style={{ background: "linear-gradient(180deg, #04101F 0%, #071A33 100%)", padding: "60px 0 44px 0", textAlign: "center", borderBottom: "1px solid rgba(25, 200, 244, 0.2)" }}>
        <div className="container">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(8, 127, 234, 0.12)",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              color: "#19C8F4",
              padding: "6px 18px",
              fontWeight: 800,
              fontSize: "0.8rem",
              borderRadius: "6px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            <ThumbsUp size={15} />
            <span>SB SPORTS & CONSTRUCTION VERIFIED REVIEWS</span>
          </div>
          <h1 className="page-main-title" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)", margin: "0 0 12px 0", lineHeight: 1.2 }}>
            CLIENT VERIFICATIONS <br />
            <span className="text-gradient-blue">& AUDITED TESTIMONIALS</span>
          </h1>
          <p className="page-main-subtitle" style={{ color: "#D9E2EA", maxWidth: "760px", margin: "0 auto 28px auto", fontSize: "1.02rem", lineHeight: 1.6 }}>
            Read verified reviews from clients who constructed Sports Infrastructure and Turnkey Residential Houses with SB SPORTS & CONSTRUCTION.
          </p>

          {/* Rating Summary Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              background: "#04101F",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              borderRadius: "10px",
              padding: "12px 28px",
              boxShadow: "0 8px 25px rgba(4, 16, 31, 0.5)"
            }}
          >
            <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#19C8F4", fontFamily: "'Manrope', sans-serif" }}>4.9</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FF8A00" color="#FF8A00" />
                ))}
              </div>
              <span style={{ fontSize: "0.82rem", color: "#D9E2EA", fontWeight: 600 }}>Based on 500+ Verified Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "52px" }}>
        {/* Testimonials Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "52px" }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCE4EC",
                borderRadius: "10px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 14px rgba(7, 26, 51, 0.05)",
                transition: "transform 0.3s ease"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#FF8A00" color="#FF8A00" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: "#087FEA", opacity: 0.6 }} />
                </div>

                <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "20px" }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(8, 127, 234, 0.06)",
                    border: "1px solid rgba(8, 127, 234, 0.18)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    marginBottom: "16px",
                    color: "#087FEA"
                  }}
                >
                  <Trophy size={13} style={{ color: "#087FEA" }} />
                  <span>{t.project} • {t.city}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #E2E8F0", paddingTop: "14px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "#071A33",
                      border: "1px solid #087FEA",
                      color: "#19C8F4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.88rem"
                    }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontWeight: 800, color: "#071A33", fontSize: "0.92rem" }}>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 size={15} style={{ color: "#087FEA" }} title="Verified Technical Review" />
                      )}
                    </div>
                    <span style={{ color: "#64748B", fontSize: "0.8rem" }}>{t.role} ({t.date})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Bar */}
        <div
          style={{
            background: "#04101F",
            border: "1px solid rgba(25, 200, 244, 0.3)",
            borderRadius: "12px",
            padding: "32px 40px",
            boxShadow: "0 10px 30px rgba(4, 16, 31, 0.6)",
            color: "#FFFFFF"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "1px solid rgba(217, 226, 234, 0.15)", paddingBottom: "14px" }}>
            <Award size={22} style={{ color: "#19C8F4" }} />
            <span style={{ fontWeight: 800, color: "#FFFFFF", fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Licensed & Certified By Leading International Authorities
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {certifications.map((c, idx) => (
              <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <ShieldCheck size={20} style={{ color: "#19C8F4", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#FFFFFF" }}>{c.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#94A3B8", marginTop: "2px" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
