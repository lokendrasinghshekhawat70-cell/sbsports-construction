import React from "react";
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
  MapPin
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Hero({ onOpenQuote, onSelectService }) {
  return (
    <section
      className="hero-section"
      style={{
        padding: "80px 0 100px 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #04101F 0%, #071A33 100%)"
      }}
    >
      {/* Background Image Overlay with Dark Gradient Mask */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.14,
          filter: "contrast(110%) brightness(80%)",
          zIndex: 1
        }}
      />

      {/* Floating Radial Blue Ambient Lights */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "750px",
          height: "480px",
          background: "radial-gradient(circle, rgba(8, 127, 234, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2
        }}
      />

      <div className="container hero-content" style={{ position: "relative", zIndex: 10 }}>
        {/* Top Header Row */}
        <div style={{ textAlign: "center", maxWidth: "960px", margin: "0 auto" }}>
          
          {/* Top Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(8, 127, 234, 0.12)",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              padding: "7px 20px",
              borderRadius: "6px",
              marginBottom: "24px",
              backdropFilter: "blur(10px)"
            }}
          >
            <Trophy size={15} style={{ color: "#19C8F4" }} />
            <span
              style={{
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "#19C8F4",
                fontWeight: 700
              }}
            >
              INDIA'S #1 SYNTHETIC SPORTS COURTS & CONSTRUCTION SPECIALISTS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              margin: "0 0 20px 0",
              lineHeight: 1.15
            }}
          >
            Engineering World-Class <br />
            <span className="text-gradient-blue">Sports Infrastructure & Engineering Excellence</span>
          </h1>

          {/* Description Subtitle */}
          <p
            style={{
              color: "#D9E2EA",
              fontSize: "clamp(1rem, 1.25vw, 1.18rem)",
              lineHeight: 1.65,
              maxWidth: "820px",
              margin: "0 auto 32px auto",
              fontWeight: 400
            }}
          >
            Specialists in ITF/BWF Grade Synthetic Acrylic & PU Sports Surfaces, Box Cricket Turfs, Badminton & Basketball Arenas, Commercial Complexes & Custom Architectural Projects.
          </p>

          {/* 3 Core Specialty Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginBottom: "36px"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "6px",
                background: "rgba(4, 16, 31, 0.8)",
                border: "1px solid rgba(217, 226, 234, 0.15)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#FFFFFF"
              }}
            >
              <Layers size={16} style={{ color: "#19C8F4" }} />
              <span>8-Layer ITF Acrylic Coating</span>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "6px",
                background: "rgba(4, 16, 31, 0.8)",
                border: "1px solid rgba(217, 226, 234, 0.15)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#FFFFFF"
              }}
            >
              <Award size={16} style={{ color: "#087FEA" }} />
              <span>ISO Certified Quality</span>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "6px",
                background: "rgba(4, 16, 31, 0.8)",
                border: "1px solid rgba(217, 226, 234, 0.15)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#FFFFFF"
              }}
            >
              <CheckCircle2 size={16} style={{ color: "#FF8A00" }} />
              <span>Turnkey Construction & Execution</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "50px"
            }}
          >
            <button
              onClick={() => onOpenQuote("Sports Courts & Coating")}
              className="btn btn-primary btn-glow"
              style={{
                padding: "16px 36px",
                fontSize: "1.05rem"
              }}
            >
              <Sparkles size={18} />
              <span>Get Free Estimate & Quote</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:+919636365391"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px 32px",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#FFFFFF",
                background: "rgba(25, 200, 244, 0.1)",
                border: "2px solid #19C8F4",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(25, 200, 244, 0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#19C8F4";
                e.currentTarget.style.color = "#04101F";
                const phoneSpan = e.currentTarget.querySelector('.hero-phone-num');
                if (phoneSpan) phoneSpan.style.color = "#04101F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(25, 200, 244, 0.1)";
                e.currentTarget.style.color = "#FFFFFF";
                const phoneSpan = e.currentTarget.querySelector('.hero-phone-num');
                if (phoneSpan) phoneSpan.style.color = "#19C8F4";
              }}
            >
              <PhoneCall size={20} style={{ color: "#19C8F4" }} />
              <span>
                Call Direct: <strong className="hero-phone-num" style={{ color: "#19C8F4", fontSize: "1.1rem", letterSpacing: "0.02em" }}>+91-9636365391</strong>
              </span>
            </a>
          </div>

          {/* Quick Stat Counter Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                  background: "rgba(8, 127, 234, 0.15)",
                  border: "1px solid rgba(8, 127, 234, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#19C8F4"
                }}
              >
                <Trophy size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#19C8F4", fontFamily: "'Manrope', sans-serif" }}>
                  500+
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 500 }}>
                  Sports Courts Delivered
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "rgba(25, 200, 244, 0.15)",
                  border: "1px solid rgba(25, 200, 244, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#19C8F4"
                }}
              >
                <Layers size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "'Manrope', sans-serif" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 500 }}>
                  ITF / BWF Acrylic Coating
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "6px",
                  background: "rgba(255, 138, 0, 0.15)",
                  border: "1px solid rgba(255, 138, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FF8A00"
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FF8A00", fontFamily: "'Manrope', sans-serif" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 500 }}>
                  Structural Excellence
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
                <div style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 500 }}>
                  On-Site Consultation
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



