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
  MapPin
} from "lucide-react";
import ManobhavLogo from "./ManobhavLogo";
import ManobhavBanner from "./ManobhavBanner";

export default function Hero({ onOpenQuote, onSelectService }) {
  return (
    <section className="hero-section" style={{ padding: "28px 0 45px 0", background: "#FFFFFF", position: "relative" }}>
      {/* Background Accent Grid / Subtle Architectural Clean Light Gradient */}
      <div className="hero-bg-container">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 60%, #F1F5F9 100%)",
            opacity: 1
          }}
        />
        <div className="hero-bg-particles" />
      </div>

      <div className="container hero-content" style={{ position: "relative", zIndex: 10 }}>
        {/* Top Header Row with Official Title & Slogan */}
        <div style={{ textAlign: "center", maxWidth: "980px", margin: "0 auto 20px auto" }}>
          {/* Badge: HOUSE & BUILDING in White, CONSTRUCTION in White */}
          <div
            className="hero-badge animate-float"
            style={{
              display: "inline-flex",
              background: "#0F172A",
              border: "1px solid #334155",
              padding: "5px 16px",
              borderRadius: "999px",
              marginBottom: "12px",
              boxShadow: "0 4px 15px rgba(15, 23, 42, 0.15)"
            }}
          >
            <Sparkles size={15} style={{ color: "#FFFFFF" }} />
            <span style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.82rem" }}>
              <span style={{ color: "#FFFFFF", fontWeight: 900 }}>HOUSE & BUILDING </span>
              <span style={{ color: "#FFFFFF", fontWeight: 900 }}>CONSTRUCTION</span>
            </span>
          </div>

          {/* Details from the Start of the Image: Authentic Brand Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <ManobhavLogo size="lg" showText={true} variant="dark" />
          </div>

          {/* Details from the End of the Image: Official Slogan in Pure Crisp Dark Charcoal */}
          <h1
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0F172A",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.06))",
              margin: "0 0 12px 0",
              lineHeight: 1.15
            }}
          >
            BUILDING YOUR DREAMS, BRICK BY BRICK
          </h1>

          {/* Details from the End of the Image: Royal Blue 3 Pillars Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px 14px",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "999px",
              padding: "8px 22px",
              margin: "0 auto 16px auto",
              width: "fit-content",
              boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)"
            }}
          >
            <span style={{ color: "#94A3B8", fontSize: "1.2rem" }}>•</span>
            <span style={{ color: "#0F172A", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              RESIDENTIAL DEVELOPMENT
            </span>
            <span style={{ color: "#94A3B8", fontSize: "1.2rem" }}>•</span>
            <span style={{ color: "#0F172A", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              COMMERCIAL PROJECTS
            </span>
            <span style={{ color: "#94A3B8", fontSize: "1.2rem" }}>•</span>
            <span style={{ color: "#0F172A", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              INFRASTRUCTURE WORKS
            </span>
            <span style={{ color: "#94A3B8", fontSize: "1.2rem" }}>•</span>
          </div>

          {/* Official Managing Directors & Direct Phone Numbers at Top */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px 28px",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "10px 24px",
              margin: "0 auto 16px auto",
              maxWidth: "860px",
              boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F172A" }}>
                <HardHat size={18} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.08em", color: "#64748B", textTransform: "uppercase" }}>Company Leadership</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#0F172A" }}>Managing Directors</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "32px", background: "#E2E8F0" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A" }}>
                <PhoneCall size={14} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#475569" }}>Digvijay Singh Rathore</div>
                <a href="tel:+918800570023" style={{ fontSize: "0.98rem", fontWeight: 900, color: "#0F172A", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.02em" }}>
                  +91 88005 70023
                </a>
              </div>
            </div>

            <div style={{ width: "1px", height: "32px", background: "#E2E8F0" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A" }}>
                <PhoneCall size={14} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#475569" }}>Jagdeesh Prashad</div>
                <a href="tel:+917224862150" style={{ fontSize: "0.98rem", fontWeight: 900, color: "#0F172A", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.02em" }}>
                  +91 72248 62150
                </a>
              </div>
            </div>
          </div>

          {/* Official GST Number for Manobhav Construction & Address */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px 14px",
              background: "#FFFFFF",
              border: "1px solid #CBD5E1",
              borderRadius: "999px",
              padding: "6px 20px",
              margin: "0 auto 20px auto",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              width: "fit-content"
            }}
          >
            <ShieldCheck size={16} style={{ color: "#0F172A" }} />
            <span style={{ color: "#475569", fontSize: "0.82rem", fontWeight: 700 }}>
              GSTIN:
            </span>
            <span style={{ color: "#0F172A", fontSize: "0.92rem", fontWeight: 900, letterSpacing: "0.08em", fontFamily: "monospace" }}>
              23AABCM8923M1Z5
            </span>
            <span style={{ color: "#CBD5E1" }}>•</span>
            <span style={{ color: "#475569", fontSize: "0.78rem" }}>
              <MapPin size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "3px", color: "#64748B" }} />
              Shop No. 205, Raj Nagar, Palasi Karond, Bhopal - 462038 (In front of Truba College)
            </span>
          </div>

          {/* Short Bio strictly based on picture */}
          <p style={{ color: "#475569", fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "780px", margin: "0 auto 24px auto" }}>
            From residential timber house framing and architectural roofing to multi-story commercial towers, tower cranes, hydraulic excavation, and precision blueprint execution.
          </p>

          {/* Quick Action CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <button
              onClick={() => onOpenQuote("House & Building Construction")}
              className="btn btn-primary"
              style={{
                background: "#0F172A",
                color: "#FFFFFF",
                fontWeight: 800,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.2)"
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
                color: "#0F172A",
                fontWeight: 700,
                border: "1px solid #CBD5E1",
                padding: "12px 24px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)"
              }}
            >
              <Building2 size={18} style={{ color: "#0F172A" }} />
              <span>View Construction Services</span>
            </a>
          </div>
        </div>

        {/* The Authentic Picture Banner Presentation Component */}
        <div style={{ marginTop: "16px" }}>
          <ManobhavBanner
            onSelectPillar={(pillarId) => {
              if (onSelectService) onSelectService(pillarId);
            }}
            onOpenQuote={onOpenQuote}
          />
        </div>
      </div>
    </section>
  );
}

