import React, { useState } from "react";
import "./Services.css";
import {
  Trophy,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  HardHat,
  Layers,
  Zap,
  Award,
  Building2,
  Ruler,
  Clock,
  Compass
} from "lucide-react";

import CourtSimulator from "../../components/CourtSimulator";
import CoatingLayersVisualizer from "../../components/CoatingLayersVisualizer";

export default function ServicesPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showSimulator, setShowSimulator] = useState(false);
  const [showLayersVisualizer, setShowLayersVisualizer] = useState(false);

  const services = [
    // Sports Infrastructure (Integral Spor Reference)
    {
      id: "tennis-court",
      title: "8-Layer ITF Cushion Acrylic Lawn Tennis Court",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Trophy,
      badge: "ITF Pace 3 / 4 Certified",
      image: "/images/sports_tennis_court.jpg",
      description: "From earth excavation and concrete sub-base laser screeding to 8-layer ITF-certified synthetic acrylic coating, delivering grand-slam ball bounce and shock attenuation.",
      scope: [
        "8-Layer ITF cushion synthetic acrylic overlay for smooth, resilient bounce",
        "Laser-screed 1:100 dual-slope gradient for zero rainwater ponding",
        "Non-glare UV resistant acrylic colors in US Open royal blue & tournament green",
        "Heavy shock attenuation protecting athlete knee & ankle joints"
      ],
      popular: true
    },
    {
      id: "cricket-turf",
      title: "Box Cricket & Futsal Turf Arena (30ft Heavy Cage)",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Layers,
      badge: "FIFA Standard Turf",
      image: "/images/sports_box_cricket_turf.jpg",
      description: "Turnkey commercial box cricket and futsal turf development including civil base compaction, 50mm artificial grass, rust-proof steel cage netting, and 300+ Lux floodlighting.",
      scope: [
        "50mm FIFA standard monofilament PE grass with silica sand infill",
        "Heavy-gauge 30ft tubular steel truss cage structure with rust-proof coating",
        "High-tenacity nylon ball containment netting covering top and perimeter",
        "High-lux 300+ Lux stadium floodlighting for 24/7 commercial revenue"
      ],
      popular: true
    },
    {
      id: "badminton-arena",
      title: "BWF Standard Indoor Badminton Arena & Sprung Wood",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Award,
      badge: "BWF Level 1 Spec",
      image: "/images/sports_badminton_court.jpg",
      description: "Professional indoor badminton hall setups with world-standard BWF approved vinyl flooring, sprung timber sub-floors, and indirect glare-free LED lighting.",
      scope: [
        "Anti-slip embossed sand/lychee texture BWF PVC vinyl matting",
        "High-density cellular foam backing for maximum energy absorption",
        "Zero-glare high-bay asymmetric LED lighting positioned over tramlines",
        "Optional sprung timber sub-floor with heavy-duty rubber shock pads"
      ],
      popular: false
    },
    {
      id: "basketball-court",
      title: "FIBA Regulation Multi-Tone Basketball Arena",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Trophy,
      badge: "FIBA Standard",
      image: "/images/sports_basketball_court.jpg",
      description: "Custom-engineered FIBA regulation basketball courts built with reinforced concrete foundations, heavy impact acrylic cushion, and cantilevered tempered glass hoops.",
      scope: [
        "Vibrant multi-colored keys, 3-point arcs, and perimeter runoff zones",
        "High-grip micro-texture preventing slipping during aggressive drives",
        "Heavy-duty in-ground pole systems with tempered glass backboards",
        "Laser-sharp regulation line marking with zero edge bleed"
      ],
      popular: false
    },
    {
      id: "padel-pickleball-court",
      title: "Panoramic Padel & USAPA Pickleball Courts",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Zap,
      badge: "Panoramic Glass & USAPA",
      image: "/images/sports_pickleball_court.jpg",
      description: "State-of-the-art panoramic padel courts with 12mm structural glass, texturized monofilament turf, and tournament pickleball courts with fast non-volley kitchen zones.",
      scope: [
        "12mm tempered safety glass walls and galvanized steel columns",
        "High-traction textured acrylic surface for USAPA pickleball",
        "Custom LED tournament floodlights mounted on integrated corner masts",
        "Multi-court clustering layouts with interior divider netting"
      ],
      popular: true
    },
    {
      id: "running-track",
      title: "IAAF Certified Full-PUR Synthetic Athletic Running Track",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Award,
      badge: "World Athletics (IAAF)",
      image: "/images/sports_running_track.jpg",
      description: "Full-PUR and Sandwich polyurethane synthetic track surfaces engineered for high energy return, spike resistance, and World Athletics compliance.",
      scope: [
        "13mm IAAF Class 1 full-PUR or sandwich polyurethane system",
        "Cast-in-place UV resistant EPDM rubber broadcast granules",
        "Spike-resistant and shock-absorbing energy return surface",
        "Laser-guided curbing, slot drains & steeplechase pit integration"
      ],
      popular: false
    },
    {
      id: "squash-court",
      title: "WSF International Championship Squash Court",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: ShieldCheck,
      badge: "WSF Compliant",
      image: "/images/sports_squash_court.jpg",
      description: "International competition squash courts constructed with WSF-accredited Armourcoat impact plaster, toughened safety glass rear walls, and air-sprung maple timber flooring.",
      scope: [
        "Resilient high-impact Armourcoat plaster walls with zero hollows",
        "12mm clear toughened glass rear spectator wall with self-closing door",
        "Air-sprung European maple wood sub-floor for joint protection",
        "Precision flush tin sound board and regulation red border markings"
      ],
      popular: false
    },
    {
      id: "gym-flooring",
      title: "Commercial Gym & Crossfit EPDM Flooring",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Layers,
      badge: "Heavy Gym Grade",
      image: "/images/sports_gym_flooring.jpg",
      description: "Complete commercial gym flooring solutions including 25mm heavy deadlift drop platforms, anti-vibration acoustic sub-bases, and functional turf sprint tracks.",
      scope: [
        "15mm–25mm high-density vulcanized rubber shock tiles",
        "Acoustic sub-base decoupling under Olympic free-weight drop zones",
        "Seamless high-traction functional sprint turf track with meter marks",
        "Non-porous, sweat-impermeable, anti-microbial & easy to sanitize"
      ],
      popular: false
    },

    // Civil Construction & Structural Engineering (MSS Krishna Construction Reference)
    {
      id: "turnkey-civil-contracting",
      title: "Turnkey Civil Engineering & EPC Building Contracting",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: Building2,
      badge: "Full Turnkey EPC",
      image: "/images/concrete_structure.jpg",
      description: "Complete end-to-end building contracts covering land survey, architectural layout, structural drawings, deep excavation, RCC superstructure, MEP, and handover.",
      scope: [
        "Comprehensive architectural blueprints, CAD planning & 3D elevations",
        "Deep foundation casting, pile foundation & reinforced raft construction",
        "Complete structural RCC columns, beams, shear walls & slab casting",
        "Turnkey electrical, plumbing, masonry, plastering & finishing handover"
      ],
      popular: true
    },
    {
      id: "commercial-towers",
      title: "Commercial Towers, Corporate Complexes & Retail Plazas",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: Building2,
      badge: "Commercial Grade",
      image: "/images/commercial.jpg",
      description: "Execution of high-load commercial complexes, office towers, and shopping centers with multi-level basement parking, glass facade framing, and heavy safety scaffolding.",
      scope: [
        "Multi-story reinforced concrete structural framing and post-tensioned slabs",
        "Structural glazing, spider glass facade & thermal curtain walls",
        "High-capacity MEP ducting, fire safety systems & passenger lift shafts",
        "Zero-accident site safety culture with certified PE engineers"
      ],
      popular: true
    },
    {
      id: "industrial-peb-sheds",
      title: "Industrial Pre-Engineered Buildings (PEB) & Warehouses",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: HardHat,
      badge: "Industrial Steel",
      image: "/images/steel_structure.jpg",
      description: "High-span steel portal frames, logistics warehouses, factory sheds, and heavy manufacturing facilities engineered for overhead crane gantries and thermal insulation.",
      scope: [
        "Heavy structural steel I-beam framing with high-tensile bolted connections",
        "Clear-span portal truss designs maximizing interior floor storage",
        "Galvanized standing-seam sandwich panel roofing with PUF insulation",
        "Heavy-duty laser-screed Tremix vacuum dewatered concrete flooring"
      ],
      popular: false
    },
    {
      id: "luxury-villas",
      title: "Luxury Residential Villas & Independent Duplex Bungalows",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: Home,
      badge: "Bespoke Luxury",
      image: "/images/roofing_structure.jpg",
      description: "Bespoke luxury villa construction featuring architectural timber roof framing, shingle weather barriers, engineered dormers, Italian marble, and premium turnkey finishes.",
      scope: [
        "Custom luxury residential construction from foundation to final key handover",
        "High-pitch architectural roof shingles with breathable weather barrier",
        "Custom exterior elevations, dormer carpentry & stone cladding",
        "Complete interior woodwork, Italian flooring, and smart home automation"
      ],
      popular: true
    },
    {
      id: "foundation-earthmoving",
      title: "Heavy Foundation Earthmoving & Raft Civil Engineering",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: HardHat,
      badge: "IS 456 / IS 1893",
      image: "/images/foundation_structure.jpg",
      description: "Heavy civil earthworks, soil stabilization, deep trenching with hydraulic excavators, rebar binding, and seismic-resistant foundation casting.",
      scope: [
        "Bulk earth excavation, subgrade grading & pneumatic roller compaction",
        "Heavy rebar cage fabrication conforming to IS 1786 Fe-550D TMT standards",
        "Monolithic M30/M35 grade RMC concrete pours with computerized batching",
        "Sub-base anti-termite treatment, damp-proof membrane & soil testing"
      ],
      popular: false
    },
    {
      id: "renovation-retrofitting",
      title: "Structural Renovation, Retrofitting & Infrastructure",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      icon: Compass,
      badge: "Structural Rehabilitation",
      image: "/images/renovation.jpg",
      description: "Engineered building rehabilitation, structural column jacketing, carbon fiber wrapping, perimeter boundary infrastructure, and civil drainage networks.",
      scope: [
        "Structural load recalculation and column/beam RCC jacketing",
        "Chemical pressure grouting and advanced structural waterproofing",
        "Perimeter compound wall construction and stormwater drainage culverts",
        "Aesthetic facade rejuvenation and modernization"
      ],
      popular: false
    }
  ];

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="services-page-wrapper">
      {/* Hero Banner Section */}
      <section className="services-hero-banner">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="services-pill-badge">
            <HardHat size={16} style={{ color: "#2298D8" }} />
            <span>SB SPORTS & CONSTRUCTION TECHNICAL SERVICES CATALOG</span>
          </div>

          <h1 className="services-hero-title">
            Engineering & Construction Services <br />
            <span className="text-gradient-blue">Sports Arenas & Turnkey Civil Contracting</span>
          </h1>

          <p className="services-hero-subtitle">
            Pan-India specialists in ITF, BWF, FIFA & IAAF Certified Synthetic Sports Arenas alongside Turnkey Commercial Buildings, PEB Warehouses, and Luxury Residential Construction.
          </p>

          <div className="services-hero-metrics">
            <div className="metric-chip">
              <Trophy size={16} style={{ color: "#2298D8" }} />
              <span>500+ Sports Arenas Delivered</span>
            </div>
            <div className="metric-chip">
              <Building2 size={16} style={{ color: "#087FEA" }} />
              <span>1.5M+ Sq. Ft. Civil Execution</span>
            </div>
            <div className="metric-chip">
              <ShieldCheck size={16} style={{ color: "#D97706" }} />
              <span>ISO 9001:2015 Quality Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation Bar */}
      <div className="services-filter-nav">
        <div className="container">
          <div className="filter-tabs-wrapper">
            <button
              className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Engineering Disciplines ({services.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === "sports" ? "active" : ""}`}
              onClick={() => setActiveCategory("sports")}
            >
              <Trophy size={16} /> 1. Sports Arenas & Surfaces (Integral Spor Caliber)
            </button>
            <button
              className={`filter-btn ${activeCategory === "civil" ? "active" : ""}`}
              onClick={() => setActiveCategory("civil")}
            >
              <Building2 size={16} /> 2. Civil & Building Engineering (MSS Krishna Caliber)
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Tools Control Bar */}
      <div style={{ background: "#04101F", padding: "16px 0", borderBottom: "1px solid rgba(25, 200, 244, 0.2)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setShowSimulator(!showSimulator)}
            className="btn"
            style={{
              background: showSimulator ? "#087FEA" : "rgba(8, 127, 234, 0.15)",
              border: "1px solid #087FEA",
              color: "#FFFFFF",
              padding: "10px 22px",
              fontSize: "0.88rem",
              fontWeight: 700,
              borderRadius: "6px"
            }}
          >
            <Zap size={16} style={{ color: "#2298D8" }} />
            <span>{showSimulator ? "Close 3D Court Color Simulator" : "Launch 3D Court Color Simulator"}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowLayersVisualizer(!showLayersVisualizer)}
            className="btn"
            style={{
              background: showLayersVisualizer ? "#087FEA" : "rgba(25, 200, 244, 0.15)",
              border: "1px solid #2298D8",
              color: "#FFFFFF",
              padding: "10px 22px",
              fontSize: "0.88rem",
              fontWeight: 700,
              borderRadius: "6px"
            }}
          >
            <Layers size={16} style={{ color: "#2298D8" }} />
            <span>{showLayersVisualizer ? "Close 8-Layer Tech Visualizer" : "View 8-Layer Acrylic Coating Visualizer"}</span>
          </button>
        </div>
      </div>

      {/* Render Court Simulator if Toggled */}
      {showSimulator && (
        <div className="container" style={{ marginTop: "30px" }}>
          <CourtSimulator />
        </div>
      )}

      {/* Render Coating Layers Visualizer if Toggled */}
      {showLayersVisualizer && (
        <div className="container" style={{ marginTop: "30px" }}>
          <CoatingLayersVisualizer />
        </div>
      )}

      {/* Main Services Grid */}
      <section className="section-padding services-main-section">
        <div className="container">
          <div className="services-cards-grid">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-pro-card"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={(idx % 3) * 120}
                >
                  {/* Image Header with Badge */}
                  <div className="card-image-wrap">
                    <img src={service.image} alt={service.title} className="card-image" />
                    <span className="card-top-badge">{service.badge}</span>
                    {service.popular && (
                      <span className="card-popular-pill">
                        <Sparkles size={13} /> Popular Service
                      </span>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="card-body">
                    <div className="card-header-row">
                      <div className="icon-badge">
                        <Icon size={24} style={{ color: "#087FEA" }} />
                      </div>
                      <span className="category-tag">{service.categoryName}</span>
                    </div>

                    <h2 className="card-title">{service.title}</h2>
                    <p className="card-description">{service.description}</p>

                    {/* Scope Checklist */}
                    <div className="scope-box">
                      <div className="scope-title">Key Engineering Scope:</div>
                      <ul className="scope-list">
                        {service.scope.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={15} style={{ color: "#087FEA", flexShrink: 0, marginTop: "2px" }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions-row">
                      <button
                        onClick={() => onOpenQuote(service.title)}
                        className="btn btn-primary"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        <span>Inquire Specification</span>
                        <ArrowRight size={16} />
                      </button>

                      <a
                        href="tel:+919636365391"
                        className="call-direct-btn"
                        title="Call Engineering Desk"
                      >
                        <PhoneCall size={18} style={{ color: "#2298D8" }} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Consultation Callout Banner */}
      <section className="consultation-callout-section">
        <div className="container">
          <div className="consultation-banner-box">
            <div className="consultation-content">
              <div className="consultation-pill">
                <Sparkles size={15} style={{ color: "#2298D8" }} />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <h2 className="consultation-title">
                Ready to Start Your Sports Arena or Civil Building Project?
              </h2>
              <p className="consultation-text">
                Speak directly with SB SPORTS & CONSTRUCTION senior structural engineers for on-site feasibility inspection, CAD blueprints, and locked-in BOQ estimates.
              </p>
            </div>

            <div className="consultation-actions">
              <button
                onClick={() => onOpenQuote("General Technical Inquiry")}
                className="btn btn-primary btn-glow"
                style={{ padding: "16px 32px", fontSize: "1.05rem" }}
              >
                <span>Request Free Turnkey Estimate</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="tel:+919636365391"
                className="direct-phone-link"
              >
                <PhoneCall size={18} style={{ color: "#2298D8" }} />
                <span>Call Hotline: <strong>+91-9636365391</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
