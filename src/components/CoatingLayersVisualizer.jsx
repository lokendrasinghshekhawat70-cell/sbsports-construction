import React, { useState } from "react";
import { 
  Layers, 
  ChevronRight, 
  Maximize, 
  CheckCircle, 
  Compass,
  FileText
} from "lucide-react";

export default function CoatingLayersVisualizer({ onOpenQuote }) {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(7); 
  const [isExplodedView, setIsExplodedView] = useState(true);

  const layers = [
    {
      id: 1,
      name: "Layer 1: Engineered Sub-Base",
      title: "Laser-Graded PCC / RCC Concrete or Asphalt",
      thickness: "100mm - 150mm",
      category: "Civil Foundation",
      color: "#000000",
      gradient: "#FFFFFF",
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
      color: "#111111",
      gradient: "#F4F4F4",
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
      color: "#222222",
      gradient: "#EEEEEE",
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
      color: "#333333",
      gradient: "#E5E5E5",
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
      color: "#444444",
      gradient: "#DDDDDD",
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
      color: "#555555",
      gradient: "#D4D4D4",
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
      color: "#666666",
      gradient: "#CCCCCC",
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
      color: "#000000",
      gradient: "#000000",
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
    <div className="coating-layers-visualizer">
      {/* Header Bar */}
      <div className="coating-header">
        <div className="badge-coating">
          <Compass size={14} />
          <span>SURFACE ENGINEERING SPECIFICATIONS</span>
        </div>
        <h3 className="coating-title">
          8-Layer Synthetic Sports Court Coating System
        </h3>
        <p className="coating-subtitle">
          Engineered for international tournament performance. Click any layer below to inspect its microscopic composition, shock absorption elasticity, and engineering specifications.
        </p>

        {/* View Toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "18px" }}>
          <button 
            onClick={() => setIsExplodedView(true)}
            style={{
              background: isExplodedView ? "#000000" : "#FFFFFF",
              color: isExplodedView ? "#FFFFFF" : "#000000",
              border: "1px solid #000000",
              padding: "7px 16px",
              borderRadius: "2px",
              fontWeight: 800,
              fontSize: "0.82rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textTransform: "uppercase"
            }}
          >
            <Maximize size={14} />
            <span>3D Exploded Layer Stack</span>
          </button>
          <button 
            onClick={() => setIsExplodedView(false)}
            style={{
              background: !isExplodedView ? "#000000" : "#FFFFFF",
              color: !isExplodedView ? "#FFFFFF" : "#000000",
              border: "1px solid #000000",
              padding: "7px 16px",
              borderRadius: "2px",
              fontWeight: 800,
              fontSize: "0.82rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textTransform: "uppercase"
            }}
          >
            <Layers size={14} />
            <span>Solid Compact Bed</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Cross-Section vs Layer Detail Card */}
      <div className="coating-grid">
        {/* Left Side: 3D Layer Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerIndex(idx)}
                style={{
                  background: isSelected ? "#000000" : layer.gradient,
                  color: isSelected ? "#FFFFFF" : (idx === 7 ? "#FFFFFF" : "#000000"),
                  border: "1px solid #000000",
                  borderRadius: "2px",
                  padding: "14px 18px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.15s ease",
                  transform: isSelected ? "translateX(6px)" : "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontWeight: 900, fontSize: "0.85rem", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid currentColor", borderRadius: "2px" }}>
                    {layer.id}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: "0.9rem" }}>{layer.name}</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em" }}>{layer.thickness}</span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Deep Technical Breakdown Card */}
        <div style={{ background: "#FFFFFF", border: "1px solid #000000", borderRadius: "2px", padding: "24px" }}>
          <div style={{ marginBottom: "20px", borderBottom: "1px solid #000000", paddingBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ background: "#FFFFFF", border: "1px solid #000000", color: "#000000", padding: "2px 8px", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase" }}>
                {currentLayer.category}
              </span>
              <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#000000" }}>Thickness: {currentLayer.thickness}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>{currentLayer.icon}</span>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#000000" }}>{currentLayer.name}</h4>
                <p style={{ fontSize: "0.88rem", color: "#444444", fontWeight: 700 }}>{currentLayer.title}</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#000000", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                Material Composition & Chemistry:
              </span>
              <p style={{ fontSize: "0.88rem", color: "#333333", lineHeight: 1.5 }}>{currentLayer.composition}</p>
            </div>

            <div>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#000000", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                Primary Structural Function:
              </span>
              <p style={{ fontSize: "0.88rem", color: "#333333", lineHeight: 1.5 }}>{currentLayer.purpose}</p>
            </div>

            <div>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#000000", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                Engineering Performance Highlights:
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                {currentLayer.features.map((feat, fidx) => (
                  <li key={fidx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.84rem", color: "#000000" }}>
                    <CheckCircle size={15} style={{ color: "#000000", flexShrink: 0, marginTop: "2px" }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Stats Footnote */}
          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #000000", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.1rem", display: "block" }}>28%</span>
                <span style={{ fontSize: "0.72rem", color: "#555555", textTransform: "uppercase" }}>Shock Attenuation</span>
              </div>
              <div>
                <span style={{ fontWeight: 900, fontSize: "1.1rem", display: "block" }}>100%</span>
                <span style={{ fontSize: "0.72rem", color: "#555555", textTransform: "uppercase" }}>Moisture Lock</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote(`${currentLayer.name} - Sports Court Coating Specifications`)}
              className="btn btn-primary btn-sm"
            >
              <span>Consult Court Engineer</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
