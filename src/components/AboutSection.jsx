import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Trophy,
  ShieldCheck,
  Award,
  CheckCircle2,
  HardHat,
  ArrowRight,
  Sparkles,
  Compass,
  Target,
  Zap,
  Users,
  Clock,
  Layers,
  PhoneCall
} from "lucide-react";

export default function AboutSection({ onOpenQuote }) {
  const pillars = [
    {
      icon: Trophy,
      title: "Sports Infrastructure Leader",
      desc: "Turnkey development of 8-layer ITF acrylic tennis arenas, BWF badminton halls, FIFA Box Cricket turfs, and IAAF synthetic athletic tracks with laser-screed sub-bases."
    },
    {
      icon: Building2,
      title: "Turnkey EPC Civil Engineering",
      desc: "Comprehensive RCC frame construction, heavy raft foundations, multi-story commercial plazas, industrial PEB sheds, and luxury residential villas compliant with IS 456 & IS 1893."
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Quality & Safety",
      desc: "Rigorous ultrasonic concrete core testing, laboratory certified tensile steel reinforcement, and strict adherence to seismic safety standards."
    },
    {
      icon: Clock,
      title: "Zero Delay Handover Guarantee",
      desc: "Predictable milestone scheduling with locked-in fixed-price BOQs, computerized project tracking, and dedicated on-site resident engineers."
    }
  ];

  const stats = [
    { num: "15+", label: "Years of Engineering Excellence" },
    { num: "500+", label: "Sports Arenas & Stadiums Built" },
    { num: "1.5M+", label: "Sq. Ft. Civil Area Handed Over" },
    { num: "100%", label: "Licensed Structural Engineers" }
  ];

  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: "90px 0",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #DCE4EC",
        borderBottom: "1px solid #DCE4EC"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 50px auto" }}>
          <div
            className="section-pill"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            <HardHat size={16} style={{ color: "#087FEA" }} />
            <span>ABOUT SB SPORTS & CONSTRUCTION</span>
          </div>

          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="100"
          >
            Building the Foundation of Champions & <br />
            <span className="text-gradient-blue">Modern Civil Infrastructure</span>
          </h2>

          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="150"
            style={{ maxWidth: "780px", margin: "0 auto" }}
          >
            Inspired by the civil precision of <strong>Krishna Construction</strong> and the international sports facility standards of <strong>Integral Spor®</strong>, SB SPORTS & CONSTRUCTION is India's premier turnkey EPC and sports arena contractor.
          </p>
        </div>

        {/* 2-Column Story & Visual Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "40px",
            alignItems: "center",
            marginBottom: "60px"
          }}
        >
          {/* Left Column: Visual Showcase with Floating Badge */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #DCE4EC",
                boxShadow: "0 14px 35px rgba(7, 26, 51, 0.12)",
                height: "clamp(320px, 40vw, 440px)",
                background: "#04101F",
                position: "relative"
              }}
            >
              <img
                src="/images/sports_arena_complex_big.jpg"
                alt="SB Sports Arena Infrastructure & Civil Construction"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(180deg, rgba(7, 26, 51, 0) 0%, rgba(7, 26, 51, 0.95) 100%)",
                  color: "#FFFFFF"
                }}
              >
                <span
                  style={{
                    background: "#087FEA",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "8px"
                  }}
                >
                  TURNKEY CONTRACTOR
                </span>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                  Olympic Arenas • Civil Complexes • PEB Warehouses
                </h4>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{
                position: "absolute",
                top: "20px",
                right: "-12px",
                background: "#071A33",
                color: "#FFFFFF",
                border: "2px solid #087FEA",
                borderRadius: "8px",
                padding: "16px 20px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                zIndex: 5
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#087FEA", fontFamily: "'Manrope', sans-serif", lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.3, color: "#FFFFFF" }}>
                Years of Turnkey <br /> Engineering Excellence
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Value Pillars */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#087FEA", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "12px" }}>
              <Compass size={18} />
              <span>OUR CORPORATE IDENTITY</span>
            </div>

            <h3 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, color: "#071A33", lineHeight: 1.25, marginBottom: "18px" }}>
              Precision Engineering, From Heavy Sub-Bases to Grand Slam Finishes
            </h3>

            <p style={{ color: "#64748B", fontSize: "0.96rem", lineHeight: 1.65, marginBottom: "20px" }}>
              At <strong>SB SPORTS & CONSTRUCTION</strong>, we bridge the gap between heavy civil structural contracting and certified sports infrastructure. Whether pouring earthquake-resilient M35 concrete foundations for commercial complexes or applying laser-screeded 8-layer ITF acrylic coatings with anti-glare micro-textures, our standard is unconditional engineering excellence.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#071A33" }}>In-House Resident PE Civil Engineers</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#071A33" }}>Certified ITF, BWF & FIFA Formulations</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#071A33" }}>Laser-Screed Sub-Base Drainage (1:100)</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#071A33" }}>100% Fixed-Price Turnkey BOQ</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => onOpenQuote && onOpenQuote("General Feasibility Survey")}
                className="btn btn-primary"
                style={{ padding: "14px 28px" }}
              >
                <Sparkles size={16} />
                <span>Book Site Feasibility Survey</span>
              </button>

              <a
                href="tel:+919636365391"
                className="btn btn-secondary"
                style={{ padding: "14px 24px", textDecoration: "none" }}
              >
                <PhoneCall size={16} />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Strategic Capability Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "50px"
          }}
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="clean-card"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 120}
                style={{
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    background: "#F4F7FA",
                    border: "1px solid #DCE4EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#087FEA",
                    marginBottom: "18px"
                  }}
                >
                  <Icon size={24} />
                </div>

                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#071A33", marginBottom: "10px" }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Stats Metric Row */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            background: "#071A33",
            borderRadius: "10px",
            padding: "36px 30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            border: "1px solid #1E293B",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)"
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#087FEA",
                  fontFamily: "'Manrope', sans-serif",
                  lineHeight: 1.1,
                  marginBottom: "6px"
                }}
              >
                {stat.num}
              </div>
              <div style={{ color: "#D9E2EA", fontSize: "0.85rem", fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
