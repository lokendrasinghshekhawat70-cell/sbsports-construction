import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Mail,
  Trophy,
  Layers,
  CheckCircle2,
  MapPin,
  Flame,
  HardHat,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Hero({ onOpenQuote, onSelectService }) {
  const [activeHeroTab, setActiveHeroTab] = useState("sports"); // "sports" or "civil"

  return (
    <section
      className="hero-section"
      style={{
        padding: "70px 0 90px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #04101F 0%, #071A33 100%)"
      }}
    >
      {/* Background Image Overlay with High Visibility & Dark Gradient Mask */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: activeHeroTab === "sports"
            ? "url('/images/integral_sports_stadium_hero.jpg')"
            : "url('/images/integral_civil_commercial_hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.52,
          filter: "contrast(115%) brightness(90%) saturate(120%)",
          transition: "all 0.6s ease",
          zIndex: 1
        }}
      />

      {/* Cinematic Vignette Overlay to ensure text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(4, 16, 31, 0.68) 0%, rgba(7, 26, 51, 0.82) 100%)",
          zIndex: 2
        }}
      />

      {/* Floating Radial Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "850px",
          height: "520px",
          background: "radial-gradient(circle, rgba(8, 127, 234, 0.22) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2
        }}
      />

      <div className="container hero-content" style={{ position: "relative", zIndex: 10 }}>
        {/* Top Header Row */}
        <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto" }}>

          {/* Top Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#071A33",
              border: "1px solid #1E293B",
              padding: "7px 22px",
              borderRadius: "6px",
              marginBottom: "22px",
              color: "#FFFFFF",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)"
            }}
          >
            <ShieldCheck size={16} style={{ color: "#087FEA" }} />
            <span
              style={{
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "#FFFFFF",
                fontWeight: 800
              }}
            >
              PAN-INDIA TURNKEY SPORTS ARENA & CIVIL CONSTRUCTION CONTRACTORS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.3rem, 4.6vw, 3.9rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              margin: "0 0 18px 0",
              lineHeight: 1.15
            }}
          >
            Engineering World-Class <br />
            <span className="text-gradient-blue">Sports Arenas & Turnkey Civil Construction</span>
          </h1>

          {/* Dual Pillar Interactive Switcher */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(4, 16, 31, 0.85)",
              border: "1px solid rgba(8, 127, 234, 0.3)",
              borderRadius: "8px",
              padding: "5px",
              gap: "6px",
              margin: "0 auto 28px auto",
              maxWidth: "100%"
            }}
          >
            <button
              type="button"
              onClick={() => setActiveHeroTab("sports")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "0.88rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.25s ease",
                border: "none",
                background: activeHeroTab === "sports" ? "#087FEA" : "transparent",
                color: activeHeroTab === "sports" ? "#FFFFFF" : "#94A3B8",
                boxShadow: activeHeroTab === "sports" ? "0 4px 14px rgba(8, 127, 234, 0.4)" : "none"
              }}
            >
              <Trophy size={16} style={{ color: activeHeroTab === "sports" ? "#FFFFFF" : "#087FEA" }} />
              <span>1. Sports Arena Infrastructure (Integral Spor Caliber)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveHeroTab("civil")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "0.88rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.25s ease",
                border: "none",
                background: activeHeroTab === "civil" ? "#087FEA" : "transparent",
                color: activeHeroTab === "civil" ? "#FFFFFF" : "#94A3B8",
                boxShadow: activeHeroTab === "civil" ? "0 4px 14px rgba(8, 127, 234, 0.4)" : "none"
              }}
            >
              <Building2 size={16} style={{ color: activeHeroTab === "civil" ? "#FFFFFF" : "#087FEA" }} />
              <span>2. Civil & Building Engineering (MSS Krishna Caliber)</span>
            </button>
          </div>

          {/* Description Subtitle based on selected tab */}
          <p
            style={{
              color: "#D9E2EA",
              fontSize: "clamp(1rem, 1.25vw, 1.16rem)",
              lineHeight: 1.65,
              maxWidth: "840px",
              margin: "0 auto 30px auto",
              fontWeight: 400
            }}
          >
            {activeHeroTab === "sports" ? (
              <>
                Turnkey development of <strong>ITF 8-Layer Acrylic Cushion Courts</strong>, FIFA standard <strong>Box Cricket & Futsal Turfs</strong>, BWF Indoor Badminton Arenas, FIBA Basketball Courts, Panoramic Padel Courts, and IAAF Synthetic Running Tracks.
              </>
            ) : (
              <>
                End-to-end <strong>EPC Civil Engineering & Structural Contracting</strong> for Multi-Story Commercial Complexes, Industrial PEB Warehouses, Heavy RCC Foundations (IS 456 / IS 1893), Luxury Residential Villas, and Infrastructure Earthworks.
              </>
            )}
          </p>

          {/* Dynamic 4 Specialty Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "36px"
            }}
          >
            {activeHeroTab === "sports" ? (
              <>
                <div className="hero-pill-item">
                  <Layers size={15} style={{ color: "#087FEA" }} />
                  <span>8-Layer ITF Cushion Acrylic Surfacing</span>
                </div>
                <div className="hero-pill-item">
                  <Trophy size={15} style={{ color: "#087FEA" }} />
                  <span>50mm FIFA Standard Grass & 30ft Cage Turfs</span>
                </div>
                <div className="hero-pill-item">
                  <Award size={15} style={{ color: "#10B981" }} />
                  <span>BWF Badminton & FIBA Basketball Specs</span>
                </div>
                <div className="hero-pill-item">
                  <ShieldCheck size={15} style={{ color: "#087FEA" }} />
                  <span>10-Year Anti-Peeling Structural Guarantee</span>
                </div>
              </>
            ) : (
              <>
                <div className="hero-pill-item">
                  <Building2 size={15} style={{ color: "#087FEA" }} />
                  <span>RCC Superstructures & Heavy Raft Foundations</span>
                </div>
                <div className="hero-pill-item">
                  <HardHat size={15} style={{ color: "#087FEA" }} />
                  <span>Commercial Complexes & Industrial PEB Sheds</span>
                </div>
                <div className="hero-pill-item">
                  <Award size={15} style={{ color: "#10B981" }} />
                  <span>IS 456 / IS 1893 Seismic Engineering</span>
                </div>
                <div className="hero-pill-item">
                  <CheckCircle2 size={15} style={{ color: "#087FEA" }} />
                  <span>100% Fixed-Price BOQ & On-Time Handover</span>
                </div>
              </>
            )}
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "46px"
            }}
          >
            <button
              onClick={() => onOpenQuote(activeHeroTab === "sports" ? "Sports Arena & Synthetic Courts" : "Turnkey Civil Construction")}
              className="btn btn-primary btn-glow"
              style={{
                padding: "16px 36px",
                fontSize: "1.05rem"
              }}
            >
              <Sparkles size={18} />
              <span>Request Free Turnkey Estimate</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:+919636365391"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px 30px",
                fontSize: "1.02rem",
                fontWeight: 700,
                color: "#FFFFFF",
                background: "#071A33",
                border: "2px solid #087FEA",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#087FEA";
                e.currentTarget.style.color = "#FFFFFF";
                const phoneSpan = e.currentTarget.querySelector('.hero-phone-num');
                if (phoneSpan) phoneSpan.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#071A33";
                e.currentTarget.style.color = "#FFFFFF";
                const phoneSpan = e.currentTarget.querySelector('.hero-phone-num');
                if (phoneSpan) phoneSpan.style.color = "#FFFFFF";
              }}
            >
              <PhoneCall size={20} style={{ color: "#087FEA" }} />
              <span>
                Call Direct: <strong className="hero-phone-num" style={{ color: "#FFFFFF", fontSize: "1.08rem", letterSpacing: "0.02em" }}>+91-9636365391</strong>
              </span>
            </a>
          </div>

          {/* High-Resolution Hero Visual Showcase Card */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(260px, 34vw, 430px)",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #1E293B",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)",
              margin: "0 0 36px 0",
              background: "#04101F"
            }}
          >
            <img
              src={
                activeHeroTab === "sports"
                  ? "/images/integral_sports_stadium_hero.jpg"
                  : "/images/integral_civil_commercial_hero.jpg"
              }
              alt={activeHeroTab === "sports" ? "Olympic Sports Arena Stadium" : "Turnkey Commercial Civil Engineering Project"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 28px",
                background: "linear-gradient(180deg, rgba(4, 16, 31, 0) 0%, rgba(4, 16, 31, 0.95) 100%)",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "14px",
                textAlign: "left"
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#087FEA",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    textTransform: "uppercase"
                  }}
                >
                  {activeHeroTab === "sports" ? "Featured: Olympic Sports Stadium & Arenas" : "Featured: High-Rise RCC & Industrial PEB Engineering"}
                </span>
                <h3 style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                  {activeHeroTab === "sports"
                    ? "Turnkey 8-Layer ITF Acrylic Courts, FIFA Turf & 400m Olympic Track"
                    : "High-Strength RCC Framing, Post-Tensioned Slabs & Industrial PEB Structures"}
                </h3>
              </div>
              <button
                onClick={() => onOpenQuote(activeHeroTab === "sports" ? "Sports Arena Project" : "Civil Construction Project")}
                className="btn btn-secondary btn-sm"
                style={{
                  background: "rgba(4, 16, 31, 0.8)",
                  border: "1px solid #1E293B",
                  color: "#FFFFFF",
                  backdropFilter: "blur(8px)"
                }}
              >
                <span>View Engineering Specs</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Quick Stat Counter Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "16px",
              marginTop: "20px"
            }}
          >
            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "#04101F",
                  border: "1px solid #1E293B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#087FEA"
                }}
              >
                <Trophy size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "'Manrope', sans-serif" }}>
                  500+
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600 }}>
                  Sports Arenas & Courts Built
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "rgba(8, 127, 234, 0.15)",
                  border: "1px solid rgba(8, 127, 234, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#087FEA"
                }}
              >
                <Building2 size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "'Manrope', sans-serif" }}>
                  1.5M+
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600 }}>
                  Sq. Ft. Built-Up Area Handed Over
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "rgba(8, 127, 234, 0.15)",
                  border: "1px solid rgba(8, 127, 234, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#087FEA"
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#087FEA", fontFamily: "'Manrope', sans-serif" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600 }}>
                  ISO & Standard IS Compliance
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "rgba(8, 127, 234, 0.15)",
                  border: "1px solid rgba(8, 127, 234, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#087FEA"
                }}
              >
                <Clock size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "'Manrope', sans-serif" }}>
                  48 Hours
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600 }}>
                  On-Site Technical Feasibility Audit
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



