import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Layers, 
  ChevronRight, 
  Maximize, 
  CheckCircle2, 
  Compass,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function CoatingLayersVisualizer({ onOpenQuote }) {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(6); 
  const [isExplodedView, setIsExplodedView] = useState(true);
  const navigate = useNavigate();

  const handleConsultEngineer = (specTitle) => {
    if (typeof onOpenQuote === "function") {
      onOpenQuote(specTitle);
    } else {
      navigate(`/Contact?service=${encodeURIComponent(specTitle)}`);
    }
  };

  const layers = [
    {
      id: 1,
      name: "Layer 1: Engineered Sub-Base",
      title: "Laser-Graded PCC / RCC Concrete or Asphalt",
      thickness: "100mm - 150mm",
      category: "Civil Foundation",
      layerColor: "#1E293B",
      composition: "Grade M-25 / M-30 Reinforced Concrete or Dense Bituminous Macadam (DBM)",
      purpose: "Structural load-bearing foundation with precision laser screed 1:100 slope gradient for zero-puddle rainwater drainage.",
      features: [
        "Vapor barrier damp-proof membrane (DPM) underneath",
        "Saw-cut expansion joints sealed with polyurethane sealant",
        "Laser-calibrated 1:100 water runoff gradient",
        "28-day cured moisture test passed (<3% moisture)"
      ],
      icon: "🏗️"
    },
    {
      id: 2,
      name: "Layer 2: Deep Primer & Moisture Barrier",
      title: "100% Acrylic / Epoxy Bonding Agent",
      thickness: "75 - 100 Microns",
      category: "Chemical Bonding",
      layerColor: "#0284C7",
      composition: "Low-viscosity penetrating polyamide epoxy primer or acrylic emulsion polymer",
      purpose: "Deeply penetrates concrete capillaries to seal porosity and create an unbreakable mechanical lock with synthetic coats.",
      features: [
        "Eliminates vapor pressure delamination & bubbling",
        "Tensile bond strength exceeding 2.5 MPa",
        "Prevents efflorescence and chemical alkali attack",
        "Fast-curing moisture barrier"
      ],
      icon: "💧"
    },
    {
      id: 3,
      name: "Layer 3: Acrylic Resurfacer",
      title: "Heavy-Duty Resurfacer + Graded Silica Sand",
      thickness: "250 - 350 Microns",
      category: "Leveling Base",
      layerColor: "#0F766E",
      composition: "100% acrylic concentrate blended with 60-80 mesh washed angular silica sand",
      purpose: "Fills microscopic concrete depressions, creates uniform planar leveling, and provides high sheer resistance.",
      features: [
        "Uniform texture eliminates ball-skid dead spots",
        "High tensile resilience and flexural strength",
        "Impervious water-resistant matrix",
        "Flawless surface planar smoothness"
      ],
      icon: "🛡️"
    },
    {
      id: 4,
      name: "Layer 4: Coarse Rubber Cushion Base",
      title: "Heavy Shock-Absorption SBR Cushion Coat",
      thickness: "500 - 750 Microns",
      category: "Cushion Comfort",
      layerColor: "#7C3AED",
      composition: "Specially formulated acrylic resin infused with coarse SBR elastomeric rubber granules",
      purpose: "Delivers maximum impact shock attenuation (up to 28% force reduction) to protect players' knees, ankles, and joints.",
      features: [
        "Reduces athlete fatigue and lumbar spine stress",
        "Non-degrading synthetic rubber crumb suspension",
        "Consistent rebound velocity matching tournament specs",
        "Superior dynamic elasticity and comfort"
      ],
      icon: "⚡"
    },
    {
      id: 5,
      name: "Layer 5: Fine Rubber Cushion Intermediate",
      title: "Micro-Grain Cushion Elastic Rebound Coat",
      thickness: "300 - 450 Microns",
      category: "Cushion Refinement",
      layerColor: "#4338CA",
      composition: "Fine-mesh cellular EPDM / SBR micro-granules embedded in high-grade acrylic binder",
      purpose: "Fills voids between coarse cushion granules to ensure true ball bounce and uniform kinetic response across the entire court.",
      features: [
        "Ultra-smooth cushioning transition",
        "Eliminates cushion layer micro-voids",
        "Guarantees true coefficient of restitution (COR)",
        "Extended court elasticity lifespan (10+ years)"
      ],
      icon: "🎾"
    },
    {
      id: 6,
      name: "Layer 6: Intermediate Acrylic Color Base",
      title: "Intense Pigmented Heavy-Wear Matrix",
      thickness: "200 - 250 Microns",
      category: "Color & Traction",
      layerColor: "#2563EB",
      composition: "Pure acrylic resin loaded with light-fast, UV-stable mineral pigments and fine silica",
      purpose: "Provides the primary deep color saturation, sets the baseline court pace rating (CPR), and locks cushion layers.",
      features: [
        "Rich color depth resistant to sun bleaching",
        "Controlled surface friction for optimal slide/grip",
        "High abrasion and scuff resistance",
        "Hydrophobic water-shedding surface"
      ],
      icon: "🎨"
    },
    {
      id: 7,
      name: "Layer 7: Ultra-Tuff UV Top Wear Coat",
      title: "Tournament-Grade Acrylic UV Anti-Glare Surface",
      thickness: "150 - 200 Microns",
      category: "Play Surface",
      layerColor: "#0284C7",
      composition: "Cross-linking acrylic polymer matrix with micro-texture friction modifiers and UV inhibitors",
      purpose: "The final playing surface engineered for ITF Medium-Fast pace, glare-free night visibility, and extreme weather resilience.",
      features: [
        "ITF Speed Classification Certified (Pace Category 3 & 4)",
        "Anti-glare micro-texture under high-mast LED lights",
        "100% UV, ozone, and acid-rain resistant",
        "Guaranteed uniform ball bounce angle"
      ],
      icon: "🏆"
    },
    {
      id: 8,
      name: "Layer 8: Laser Line Markings",
      title: "100% Acrylic Anti-Skid Tournament Line Paint",
      thickness: "50 - 80 Microns",
      category: "Precision Lines",
      layerColor: "#FFFFFF",
      composition: "Heavy-bodied pure acrylic white elastomeric paint with microscopic anti-skid texturing",
      purpose: "Razor-sharp, glare-free, non-skid court boundaries applied using laser alignment meeting ITF / BWF / FIBA regulations.",
      features: [
        "Identical friction coefficient to court surface (no slipping on lines)",
        "Zero-bleed razor-sharp edge masking",
        "High-contrast optical brilliance under floodlights",
        "Permanent chemical bond preventing line peeling"
      ],
      icon: "📏"
    }
  ];

  const currentLayer = layers[selectedLayerIndex];

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 10px 35px rgba(0, 0, 0, 0.05)",
        color: "#0F172A",
        marginTop: "20px",
        marginBottom: "35px"
      }}
    >
      {/* Header Bar */}
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 30px auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0, 132, 255, 0.08)",
            border: "1px solid rgba(0, 132, 255, 0.25)",
            color: "#0084FF",
            padding: "6px 16px",
            borderRadius: "30px",
            fontSize: "0.78rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "12px"
          }}
        >
          <Compass size={14} />
          <span>SURFACE ENGINEERING SPECIFICATIONS</span>
        </div>

        <h3
          style={{
            fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
            fontWeight: 900,
            color: "#0F172A",
            margin: "0 0 10px 0",
            letterSpacing: "-0.02em"
          }}
        >
          8-Layer Synthetic Sports Court Coating System
        </h3>

        <p style={{ color: "#475569", fontSize: "0.95rem", lineLine: 1.6, margin: 0 }}>
          Engineered for international tournament performance. Click any layer below to inspect its microscopic composition, shock absorption elasticity, and engineering specifications.
        </p>

        {/* View Toggle Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
          <button 
            onClick={() => setIsExplodedView(true)}
            style={{
              background: isExplodedView ? "#0084FF" : "#F8FAFC",
              color: isExplodedView ? "#FFFFFF" : "#334155",
              border: isExplodedView ? "1px solid #0084FF" : "1px solid #CBD5E1",
              padding: "9px 20px",
              borderRadius: "8px",
              fontWeight: 800,
              fontSize: "0.84rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "uppercase",
              transition: "all 0.25s ease",
              boxShadow: isExplodedView ? "0 4px 15px rgba(0, 132, 255, 0.3)" : "none"
            }}
          >
            <Maximize size={15} />
            <span>3D Exploded Layer Stack</span>
          </button>

          <button 
            onClick={() => setIsExplodedView(false)}
            style={{
              background: !isExplodedView ? "#0084FF" : "#F8FAFC",
              color: !isExplodedView ? "#FFFFFF" : "#334155",
              border: !isExplodedView ? "1px solid #0084FF" : "1px solid #CBD5E1",
              padding: "9px 20px",
              borderRadius: "8px",
              fontWeight: 800,
              fontSize: "0.84rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "uppercase",
              transition: "all 0.25s ease",
              boxShadow: !isExplodedView ? "0 4px 15px rgba(0, 132, 255, 0.3)" : "none"
            }}
          >
            <Layers size={15} />
            <span>Solid Compact Bed</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Cross-Section vs Layer Detail Card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "start"
        }}
      >
        {/* Left Side: 8-Layer Interactive Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: isExplodedView ? "10px" : "3px" }}>
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerIndex(idx)}
                style={{
                  background: isSelected 
                    ? "rgba(0, 132, 255, 0.08)" 
                    : "#F8FAFC",
                  color: isSelected ? "#0084FF" : "#334155",
                  border: isSelected 
                    ? "1.5px solid #0084FF" 
                    : "1px solid #E2E8F0",
                  borderRadius: "10px",
                  padding: "15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isSelected ? "translateX(8px)" : "none",
                  boxShadow: isSelected 
                    ? "0 4px 15px rgba(0, 132, 255, 0.15)" 
                    : "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "0.85rem",
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isSelected ? "#0084FF" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#0084FF",
                      border: "1px solid #0084FF",
                      borderRadius: "6px"
                    }}
                  >
                    {layer.id}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: "0.95rem", color: isSelected ? "#0084FF" : "#0F172A" }}>
                    {layer.name}
                  </span>
                </div>

                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.02em",
                    background: "rgba(0, 132, 255, 0.08)",
                    border: "1px solid rgba(0, 132, 255, 0.2)",
                    color: "#0084FF",
                    padding: "3px 10px",
                    borderRadius: "4px"
                  }}
                >
                  {layer.thickness}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Deep Technical Breakdown Card */}
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "28px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)"
          }}
        >
          {/* Card Top Header */}
          <div style={{ marginBottom: "22px", borderBottom: "1px solid #E2E8F0", paddingBottom: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  background: "rgba(0, 132, 255, 0.08)",
                  border: "1px solid rgba(0, 132, 255, 0.25)",
                  color: "#0084FF",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  borderRadius: "4px",
                  textTransform: "uppercase"
                }}
              >
                {currentLayer.category}
              </span>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#64748B" }}>
                Thickness: <strong style={{ color: "#0084FF" }}>{currentLayer.thickness}</strong>
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "2.4rem", lineHeight: 1 }}>{currentLayer.icon}</span>
              <div>
                <h4 style={{ fontSize: "1.35rem", fontWeight: 900, color: "#0F172A", margin: "0 0 4px 0" }}>
                  {currentLayer.name}
                </h4>
                <p style={{ fontSize: "0.92rem", color: "#0084FF", fontWeight: 700, margin: 0 }}>
                  {currentLayer.title}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#0084FF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "6px"
                }}
              >
                Material Composition & Chemistry
              </span>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                {currentLayer.composition}
              </p>
            </div>

            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#0084FF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "6px"
                }}
              >
                Primary Structural Function
              </span>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                {currentLayer.purpose}
              </p>
            </div>

            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#0084FF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "10px"
                }}
              >
                Engineering Performance Highlights
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {currentLayer.features.map((feat, fidx) => (
                  <li key={fidx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#334155" }}>
                    <CheckCircle2 size={16} style={{ color: "#0084FF", flexShrink: 0, marginTop: "2px" }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Stats Footnote & CTA */}
          <div
            style={{
              marginTop: "26px",
              paddingTop: "20px",
              borderTop: "1px solid #E2E8F0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px"
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", display: "block", color: "#0084FF" }}>28%</span>
                <span style={{ fontSize: "0.72rem", color: "#64748B", textTransform: "uppercase", fontWeight: 700 }}>Shock Attenuation</span>
              </div>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", display: "block", color: "#0084FF" }}>100%</span>
                <span style={{ fontSize: "0.72rem", color: "#64748B", textTransform: "uppercase", fontWeight: 700 }}>Moisture Lock</span>
              </div>
            </div>

            <button
              onClick={() => handleConsultEngineer(`${currentLayer.name} - Sports Court Coating Specifications`)}
              style={{
                background: "#0084FF",
                color: "#FFFFFF",
                border: "none",
                fontWeight: 900,
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.9rem",
                boxShadow: "0 4px 15px rgba(0, 132, 255, 0.3)",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 132, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 132, 255, 0.3)";
              }}
            >
              <span>Consult Court Engineer</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
