import React, { useState } from "react";
import "./ManobhavBanner.css";
import {
  Maximize2,
  CheckCircle2,
  Home,
  Building2,
  Tractor,
  FileText,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function ManobhavBanner({ onSelectPillar, onOpenQuote }) {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // The 4 core picture pillars strictly from the official banner
  const bannerDetails = [
    {
      id: "residential",
      title: "Residential Development",
      subtitle: "House & Villa Construction",
      tag: "Picture Detail: Left & Center",
      badgeColor: "charcoal",
      icon: <Home size={20} />,
      image: "/images/roofing_structure.jpg",
      desc: "Complete house construction, from foundational framing and timber roofing trusses to high-pitch architectural roof shingling shown on site.",
      specs: [
        "Residential 2-Story House Construction",
        "Timber Framing, Studs & Truss Carpentry",
        "High-Pitch Roof Shingling & Cladding",
        "Turnkey Home Building Handover"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Projects",
      subtitle: "Multi-Story Concrete & High-Rises",
      tag: "Picture Detail: Right Side",
      badgeColor: "slate",
      icon: <Building2 size={20} />,
      image: "/images/concrete_structure.jpg",
      desc: "Multi-level commercial buildings engineered with reinforced concrete floor slabs, exterior safety scaffolding, and heavy yellow tower crane operations.",
      specs: [
        "Multi-Story Reinforced Concrete Towers",
        "Yellow Tower Crane Operations",
        "Formwork, Rebar & Safety Netting",
        "High-Rise Commercial Facilities"
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure Works",
      subtitle: "Excavation, Earthmoving & Foundations",
      tag: "Picture Detail: Foreground Ground",
      badgeColor: "grey",
      icon: <Tractor size={20} />,
      image: "/images/excavation_structure.jpg",
      desc: "Heavy hydraulic excavator earthmoving, groundwork preparation, trenching, structural brick stacks, and solid foundation masonry.",
      specs: [
        "Heavy Hydraulic Excavator & Diggers",
        "Foundation Earthmoving & Grading",
        "Brick-by-Brick Foundation Masonry",
        "Site Preparation & Civil Works"
      ]
    },
    {
      id: "blueprints",
      title: "Blueprints & Safety Hard Hat",
      subtitle: "Precision Engineering & Site Safety",
      tag: "Picture Detail: Planning Table",
      badgeColor: "neutral",
      icon: <FileText size={20} />,
      image: "/images/blueprint_structure.jpg",
      desc: "Architectural blueprint schematics and rigorous on-site yellow safety hard hat compliance for zero-compromise precision and worker safety.",
      specs: [
        "Architectural Drawings & Schematics",
        "Mandatory Hard Hat & Safety Protocols",
        "Precision Brick-by-Brick Execution",
        "Engineering Site Supervision"
      ]
    }
  ];

  const handleHotspotClick = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
    if (onSelectPillar) {
      onSelectPillar(id);
    }
  };

  return (
    <div className="manobhav-banner-wrapper">
      {/* Top Controls Bar: Official Banner Identification & Fullscreen Zoom Button */}
      <div className="banner-controls-bar">
        <div className="banner-controls-left">
          <span className="banner-official-tag">
            <Sparkles size={14} style={{ color: "#FFFFFF" }} />
            Official Construction Banner
          </span>
          <span className="banner-tagline-text">
            Authentic MANOBHAV CONSTRUCTION Master Blueprint
          </span>
        </div>

        <button
          onClick={() => setIsZoomOpen(true)}
          className="banner-zoom-btn"
          title="Inspect authentic banner picture in high resolution"
        >
          <Maximize2 size={14} />
          <span>Inspect Full Resolution</span>
        </button>
      </div>

      {/* Main Showcase Frame: The Original Authentic Banner Displayed Front & Center */}
      <div
        className="manobhav-banner-frame"
        onClick={() => setIsZoomOpen(true)}
        title="Click to view high-resolution full screen"
      >
        {/* Silver corner grommets (eyelets) matching the real vinyl construction banner */}
        <div className="grommet grommet-tl" title="Mounting Grommet" />
        <div className="grommet grommet-tr" title="Mounting Grommet" />
        <div className="grommet grommet-bl" title="Mounting Grommet" />
        <div className="grommet grommet-br" title="Mounting Grommet" />

        {/* The Original Authentic Banner Image (High Quality & Responsive) */}
        <img
          src="/images/manobhav_banner.jpg"
          alt="MANOBHAV CONSTRUCTION — Official Picture Banner"
          className="original-banner-img"
        />

        {/* Hover / Click Hint Pill */}
        <div className="banner-click-hint">
          <Maximize2 size={13} />
          <span>Click to Enlarge Full HD</span>
        </div>
      </div>

      {/* Picture Details Breakdown Cards */}
      <div className="banner-details-grid">
        {bannerDetails.map((item) => {
          const isSelected = activeHotspot === item.id;
          return (
            <div
              key={item.id}
              className={`banner-detail-card ${isSelected ? "active" : ""}`}
              onClick={() => handleHotspotClick(item.id)}
            >
              <div className={`card-accent-strip card-strip-${item.badgeColor}`} />

              {/* Working Construction Structure Photo (Compact Architectural Thumbnail) */}
              <div style={{ width: "100%", height: "82px", borderRadius: "6px", overflow: "hidden", marginBottom: "8px", position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <span className="badge-gold" style={{ position: "absolute", bottom: "5px", left: "5px", fontSize: "0.6rem", padding: "1px 6px", background: "rgba(15,23,42,0.9)" }}>
                  Structure Detail
                </span>
              </div>

              <div className="detail-card-header">
                <div className="detail-card-icon">
                  {item.icon}
                </div>
                <div>
                  <h3 className="detail-card-title">{item.title}</h3>
                  <span className="detail-card-badge">{item.tag}</span>
                </div>
              </div>

              <p className="detail-card-desc">{item.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" }}>
                {item.specs.slice(0, 3).map((spec, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.7rem", color: "#475569" }}>
                    <CheckCircle2 size={12} style={{ color: "#0F172A", flexShrink: 0 }} />
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{spec}</span>
                  </div>
                ))}
              </div>

              {onOpenQuote && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuote(item.title);
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.74rem", padding: "5px 10px" }}
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div className="banner-modal-backdrop" onClick={() => setIsZoomOpen(false)}>
          <div className="banner-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="banner-modal-close"
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close Fullscreen View"
            >
              <X size={20} />
            </button>
            <img
              src="/images/manobhav_banner.jpg"
              alt="MANOBHAV CONSTRUCTION Official Banner Full View"
              className="banner-modal-img"
            />
            <div style={{ marginTop: "12px", textAlign: "center" }}>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: 800, margin: "0 0 4px 0" }}>
                MANOBHAV CONSTRUCTION
              </h4>
              <p style={{ color: "#94A3B8", fontSize: "0.85rem", margin: 0 }}>
                HOUSE & BUILDING CONSTRUCTION • BUILDING YOUR DREAMS, BRICK BY BRICK
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
