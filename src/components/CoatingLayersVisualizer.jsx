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
      layerColor: "#2563EB",
      composition: "High-grade acrylic binder with micro-pulverized rubber particles for smooth transitions",
      purpose: "Fills the voids of the coarse cushion layer, producing a velvety smooth elastic bed ready for color application.",
      features: [
        "Flawless surface tension and micro-leveling",
        "Jointless monolithic rubber-acrylic composite",
        "Enhances true ball bounce and spin response",
        "Optimized energy return"
      ],
      icon: "✨"
    },
    {
      id: 6,
      name: "Layer 6: Vibrant Color Pre-Coat",
      title: "Deep Pigment Acrylic Texture Undercoat",
      thickness: "150 - 200 Microns",
      category: "Color Base",
      layerColor: "#EA580C",
      composition: "Heavy-bodied pure acrylic emulsion rich in UV-stable inorganic mineral oxides",
      purpose: "Builds deep pigment saturation and uniform friction underlayment that prevents premature color fade.",
      features: [
        "100% pure lightfast pigment technology",
        "UV degradation resistance rating Grade 4+",
        "High resistance to intense tropical heat and sun exposure",
        "Deep, radiant color hue foundation"
      ],
      icon: "🎨"
    },
    {
      id: 7,
      name: "Layer 7: Ultra-Tough Top Wear Finish Coat",
      title: "Anti-Skid, All-Weather Top Wear Surface",
      thickness: "150 - 200 Microns",
      category: "Playing Surface",
      layerColor: "#059669",
      composition: "Fortified pure acrylic copolymer with micro-texture spherical silica particles",
      purpose: "The final playing surface that contacts the athlete's shoes and ball. Delivers certified non-skid traction wet or dry.",
      features: [
        "ITF Pace Rating 3 (Medium) or Custom Pace 4 (Medium-Fast)",
        "Zero-glare matte finish under direct sun & floodlights",
        "High abrasion resistance (Taber Abrasion test certified)",
        "Weatherproof: handles extreme rains, frost, and summer heat"
      ],
      icon: "🏆"
    },
    {
      id: 8,
      name: "Layer 8: Precision Game Line Markings",
      title: "100% Acrylic Polyurethane Regulation Lines",
      thickness: "100 - 150 Microns",
      category: "Regulation Geometry",
      layerColor: "#00C2FF",
      composition: "Non-bleed, heavy-duty pure aliphatic polyurethane and acrylic line markings",
      purpose: "Laser-straight, crisp boundary lines painted according to exact international federation standards (ITF, FIBA, BWF, USAPA).",
      features: [
        "Sharp 50mm laser-masked edges with zero bleed",
        "Anti-glare textured finish for high optical contrast",
        "Permanent adhesion that withstands high foot traffic",
        "Multi-sport overlaid lines (e.g. Tennis + Pickleball combo)"
      ],
      icon: "📐"
    }
  ];

  const currentLayer = layers[selectedLayerIndex];

  return (
    <div
      style={{
        background: "linear-gradient(165deg, #09172A 0%, #050D18 100%)",
        border: "1px solid rgba(0, 174, 239, 0.25)",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 132, 255, 0.1)",
        color: "#FFFFFF",
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
            background: "rgba(0, 174, 239, 0.1)",
            border: "1px solid rgba(0, 174, 239, 0.35)",
            color: "#00C2FF",
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
            color: "#FFFFFF",
            margin: "0 0 10px 0",
            letterSpacing: "-0.02em"
          }}
        >
          8-Layer Synthetic Sports Court Coating System
        </h3>

        <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
          Engineered for international tournament performance. Click any layer below to inspect its microscopic composition, shock absorption elasticity, and engineering specifications.
        </p>

        {/* View Toggle Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
          <button 
            onClick={() => setIsExplodedView(true)}
            style={{
              background: isExplodedView ? "linear-gradient(135deg, #0084FF 0%, #00B4D8 100%)" : "rgba(255, 255, 255, 0.05)",
              color: isExplodedView ? "#FFFFFF" : "#94A3B8",
              border: isExplodedView ? "1px solid #00C2FF" : "1px solid rgba(255, 255, 255, 0.12)",
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
              boxShadow: isExplodedView ? "0 4px 18px rgba(0, 132, 255, 0.4)" : "none"
            }}
          >
            <Maximize size={15} />
            <span>3D Exploded Layer Stack</span>
          </button>

          <button 
            onClick={() => setIsExplodedView(false)}
            style={{
              background: !isExplodedView ? "linear-gradient(135deg, #0084FF 0%, #00B4D8 100%)" : "rgba(255, 255, 255, 0.05)",
              color: !isExplodedView ? "#FFFFFF" : "#94A3B8",
              border: !isExplodedView ? "1px solid #00C2FF" : "1px solid rgba(255, 255, 255, 0.12)",
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
              boxShadow: !isExplodedView ? "0 4px 18px rgba(0, 132, 255, 0.4)" : "none"
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
                    ? "linear-gradient(90deg, rgba(0, 132, 255, 0.28) 0%, rgba(7, 26, 48, 0.95) 100%)" 
                    : "linear-gradient(90deg, #0b1a2e 0%, #071322 100%)",
                  color: isSelected ? "#FFFFFF" : "#CBD5E1",
                  border: isSelected 
                    ? "1.5px solid #0084FF" 
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "10px",
                  padding: "15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isSelected ? "translateX(8px)" : "none",
                  boxShadow: isSelected 
                    ? "0 8px 25px rgba(0, 132, 255, 0.35), inset 0 0 12px rgba(0, 132, 255, 0.2)" 
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
                      background: isSelected ? "#0084FF" : "rgba(255, 255, 255, 0.08)",
                      color: isSelected ? "#FFFFFF" : "#00C2FF",
                      border: isSelected ? "1px solid #00C2FF" : "1px solid rgba(0, 194, 255, 0.25)",
                      borderRadius: "6px"
                    }}
                  >
                    {layer.id}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: "0.95rem", color: isSelected ? "#FFFFFF" : "#E2E8F0" }}>
                    {layer.name}
                  </span>
                </div>

                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.02em",
                    background: "rgba(0, 194, 255, 0.1)",
                    border: "1px solid rgba(0, 194, 255, 0.25)",
                    color: "#00C2FF",
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
            background: "linear-gradient(165deg, #0b1a2e 0%, #061120 100%)",
            border: "1px solid rgba(0, 174, 239, 0.3)",
            borderRadius: "14px",
            padding: "28px",
            boxShadow: "0 15px 45px rgba(0, 0, 0, 0.5)"
          }}
        >
          {/* Card Top Header */}
          <div style={{ marginBottom: "22px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  background: "rgba(0, 132, 255, 0.15)",
                  border: "1px solid rgba(0, 132, 255, 0.4)",
                  color: "#00C2FF",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  borderRadius: "4px",
                  textTransform: "uppercase"
                }}
              >
                {currentLayer.category}
              </span>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#94A3B8" }}>
                Thickness: <strong style={{ color: "#00C2FF" }}>{currentLayer.thickness}</strong>
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "2.4rem", lineHeight: 1 }}>{currentLayer.icon}</span>
              <div>
                <h4 style={{ fontSize: "1.35rem", fontWeight: 900, color: "#FFFFFF", margin: "0 0 4px 0" }}>
                  {currentLayer.name}
                </h4>
                <p style={{ fontSize: "0.92rem", color: "#00C2FF", fontWeight: 700, margin: 0 }}>
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
                  color: "#00C2FF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "6px"
                }}
              >
                Material Composition & Chemistry
              </span>
              <p style={{ fontSize: "0.9rem", color: "#CBD5E1", lineHeight: 1.6, margin: 0 }}>
                {currentLayer.composition}
              </p>
            </div>

            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#00C2FF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "6px"
                }}
              >
                Primary Structural Function
              </span>
              <p style={{ fontSize: "0.9rem", color: "#CBD5E1", lineHeight: 1.6, margin: 0 }}>
                {currentLayer.purpose}
              </p>
            </div>

            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#00C2FF",
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
                  <li key={fidx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#E2E8F0" }}>
                    <CheckCircle2 size={16} style={{ color: "#00C2FF", flexShrink: 0, marginTop: "2px" }} />
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
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px"
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", display: "block", color: "#00C2FF" }}>28%</span>
                <span style={{ fontSize: "0.72rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Shock Attenuation</span>
              </div>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", display: "block", color: "#00C2FF" }}>100%</span>
                <span style={{ fontSize: "0.72rem", color: "#94A3B8", textTransform: "uppercase", fontWeight: 700 }}>Moisture Lock</span>
              </div>
            </div>

            <button
              onClick={() => handleConsultEngineer(`${currentLayer.name} - Sports Court Coating Specifications`)}
              style={{
                background: "linear-gradient(135deg, #0084FF 0%, #00B4D8 100%)",
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
                boxShadow: "0 6px 20px rgba(0, 132, 255, 0.4)",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 132, 255, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 132, 255, 0.4)";
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
