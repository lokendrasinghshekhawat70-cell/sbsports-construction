import React from "react";
import {
  Building2,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Home,
  Tractor,
  HardHat,
  PhoneCall,
  Mail,
  MapPin
} from "lucide-react";
import SBLogo from "./SBLogo";

export default function Hero({ onOpenQuote, onSelectService }) {
  return (
    <section className="hero-section" style={{ padding: "32px 0 45px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container hero-content" style={{ position: "relative", zIndex: 10 }}>
        {/* Top Header Row with Official Title & Slogan */}
        <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto 20px auto" }}>
          {/* Badge: HOUSE & BUILDING in Black/White */}
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              padding: "6px 18px",
              borderRadius: "0px",
              marginBottom: "16px"
            }}
          >
            <Sparkles size={15} style={{ color: "#000000" }} />
            <span style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.82rem", color: "#000000", fontWeight: 800 }}>
              HOUSE & BUILDING CONSTRUCTION
            </span>
          </div>

          {/* Authentic SB Brand Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <SBLogo size="lg" showText={true} variant="dark" />
          </div>

          {/* Official Slogan */}
          <h1
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#000000",
              margin: "0 0 14px 0",
              lineHeight: 1.2
            }}
          >
            BUILDING YOUR DREAMS, BRICK BY BRICK
          </h1>

          {/* 3 Pillars Bar in Crisp White & Black Lines */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px 14px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              padding: "8px 22px",
              margin: "0 auto 16px auto",
              width: "fit-content"
            }}
          >
            <span style={{ color: "#000000", fontSize: "1rem" }}>•</span>
            <span style={{ color: "#000000", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              RESIDENTIAL DEVELOPMENT
            </span>
            <span style={{ color: "#000000", fontSize: "1rem" }}>•</span>
            <span style={{ color: "#000000", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              COMMERCIAL PROJECTS
            </span>
            <span style={{ color: "#000000", fontSize: "1rem" }}>•</span>
            <span style={{ color: "#000000", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              INFRASTRUCTURE WORKS
            </span>
            <span style={{ color: "#000000", fontSize: "1rem" }}>•</span>
          </div>

          {/* Verified Architectural Standards Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              padding: "10px 24px",
              margin: "0 auto 16px auto",
              maxWidth: "860px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <HardHat size={16} style={{ color: "#000000" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#000000", letterSpacing: "0.04em" }}>
                ARCHITECTURAL CIVIL DISCIPLINE
              </span>
            </div>
            <span style={{ color: "#000000" }}>•</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Building2 size={16} style={{ color: "#000000" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#000000", letterSpacing: "0.04em" }}>
                RESIDENTIAL • COMMERCIAL • SPORTS
              </span>
            </div>
          </div>

          {/* Direct Contact Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px 20px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              padding: "8px 24px",
              margin: "0 auto 16px auto",
              width: "fit-content"
            }}
          >
            <a
              href="tel:+919636365391"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#000000",
                fontSize: "0.85rem",
                fontWeight: 800,
                textDecoration: "underline"
              }}
            >
              <PhoneCall size={15} style={{ color: "#000000" }} />
              <span>Call / WhatsApp: +91-9636365391</span>
            </a>
            <span style={{ color: "#000000" }}>•</span>
            <a
              href="mailto:sbsportsandconstruction@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#000000",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "underline"
              }}
            >
              <Mail size={15} style={{ color: "#000000" }} />
              <span>sbsportsandconstruction@gmail.com</span>
            </a>
          </div>

          {/* Short Bio */}
          <p style={{ color: "#333333", fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "780px", margin: "0 auto 24px auto" }}>
            From residential timber house framing and architectural roofing to multi-story commercial towers, tower cranes, hydraulic excavation, and precision blueprint execution.
          </p>

          {/* Quick Action CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <button
              onClick={() => onOpenQuote("House & Building Construction")}
              className="btn btn-primary"
              style={{
                background: "#000000",
                color: "#FFFFFF",
                fontWeight: 800,
                border: "1px solid #000000",
                padding: "12px 24px",
                borderRadius: "0px"
              }}
            >
              <HardHat size={18} />
              <span>Book Site Consultation</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#services"
              className="btn btn-secondary"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                fontWeight: 800,
                border: "1px solid #000000",
                padding: "12px 24px",
                borderRadius: "0px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none"
              }}
            >
              <Building2 size={18} style={{ color: "#000000" }} />
              <span>View Construction Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

