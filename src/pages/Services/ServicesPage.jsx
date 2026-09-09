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
  Award
} from "lucide-react";

import CourtSimulator from "../../components/CourtSimulator";
import CoatingLayersVisualizer from "../../components/CoatingLayersVisualizer";

export default function ServicesPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showSimulator, setShowSimulator] = useState(false);
  const [showLayersVisualizer, setShowLayersVisualizer] = useState(false);

  const services = [
    {
      id: "tennis-court",
      title: "Lawn Tennis Court Construction",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Trophy,
      badge: "ITF Certified Pace 3",
      image: "/images/sports_tennis_court.jpg",
      description: "From earth excavation and concrete sub-base casting to an 8-layer ITF-certified synthetic acrylic coating, delivering grand-slam caliber performance.",
      scope: [
        "8-Layer ITF cushion synthetic acrylic overlay for smooth, resilient bounce",
        "Laser-screed 1:100 dual-slope gradient for zero rainwater ponding",
        "Non-glare UV resistant acrylic colors in US Open royal blue & electric cyan",
        "Multi-layer shock attenuation protecting athlete knee & ankle joints"
      ],
      popular: true
    },
    {
      id: "cricket-turf",
      title: "Box Cricket & Futsal Turf Arena",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Layers,
      badge: "FIFA Standard Turf",
      image: "/images/sports_box_cricket_turf.jpg",
      description: "Turnkey commercial box cricket and futsal turf development including civil base compaction, 50mm artificial grass, steel cage netting, and high-mast lights.",
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
      title: "Indoor Badminton Arena Construction",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Award,
      badge: "BWF Grade 1 Spec",
      image: "/images/sports_badminton_court.jpg",
      description: "Professional indoor badminton hall setups with world-standard BWF approved vinyl flooring, sprung timber sub-floors, and glare-free lighting.",
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
      title: "High-Grip Basketball Court Construction",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Trophy,
      badge: "FIBA Standard",
      image: "/images/sports_basketball_court.jpg",
      description: "Custom-engineered FIBA regulation basketball courts built with reinforced concrete foundations, heavy impact acrylic cushion, and break-away hoops.",
      scope: [
        "Vibrant multi-colored keys, 3-point arcs, and perimeter runoff zones",
        "High-grip micro-texture preventing slipping during aggressive drives",
        "Heavy-duty in-ground pole systems with tempered glass backboards",
        "Laser-sharp regulation line marking with zero edge bleed"
      ],
      popular: false
    },
    {
      id: "pickleball-court",
      title: "Outdoor & Indoor Pickleball Court",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Zap,
      badge: "USAPA Tournament Grade",
      image: "/images/sports_pickleball_court.jpg",
      description: "Dedicated pickleball court construction or tennis conversion with USAPA 5-layer textured acrylic cushion coating and fast non-volley kitchen zones.",
      scope: [
        "Distinct two-tone color contrast for 7ft non-volley kitchen zones",
        "Specially graded silica texture for optimal wiffle-ball bounce & traction",
        "Permanent or semi-permanent tournament-grade steel net posts",
        "Multi-court clustering layouts with interior divider netting"
      ],
      popular: true
    },
    {
      id: "running-track",
      title: "Synthetic Athletic Running Track",
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
      description: "International competition squash courts constructed with WSF-accredited Armourcoat impact plaster, toughened safety glass rear walls, and sprung wooden flooring.",
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
      title: "Gym & Commercial Fitness Flooring",
      category: "sports",
      categoryName: "Sports Infrastructure",
      icon: Layers,
      badge: "Heavy Gym Grade",
      image: "/images/sports_gym_flooring.jpg",
      description: "Complete commercial gym flooring solutions including heavy deadlift drop platforms, anti-vibration sub-bases, and functional turf sprint tracks.",
      scope: [
        "15mm–25mm high-density vulcanized rubber shock tiles",
        "Acoustic sub-base decoupling under Olympic free-weight drop zones",
        "Seamless high-traction functional sprint turf track with meter marks",
        "Non-porous, sweat-impermeable, anti-microbial & easy to sanitize"
      ],
      popular: false
    },
    {
      id: "residential-house-villas",
      title: "Turnkey Residential House & Villa Construction",
      category: "residential",
      categoryName: "Turnkey Residential",
      icon: Home,
      badge: "Full Turnkey Handover",
      image: "/images/roofing_structure.jpg",
      description: "Custom luxury 2-story house construction featuring architectural roof shingles, engineered dormers, precision masonry, and turnkey craftsmen handover.",
      scope: [
        "End-to-end residential construction from foundation excavation to finishing",
        "High-pitch architectural roof shingle installation & weather barrier",
        "Custom exterior siding, trim framing, and dormer carpentry",
        "Electrical, plumbing, flooring, and interior turnkey handover"
      ],
      popular: true
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
            <HardHat size={16} style={{ color: "#19C8F4" }} />
            <span>SB SPORTS & CONSTRUCTION SERVICES DESK</span>
          </div>

          <h1 className="services-hero-title">
            Our Complete Engineering Services <br />
            <span className="text-gradient-blue">Sports Infrastructure & Residential Construction</span>
          </h1>

          <p className="services-hero-subtitle">
            Specialists in ITF, BWF, FIFA & IAAF Certified Synthetic Sports Courts & Arenas alongside Turnkey Luxury Residential House Construction.
          </p>

          <div className="services-hero-metrics">
            <div className="metric-chip">
              <Trophy size={16} style={{ color: "#19C8F4" }} />
              <span>500+ Sports Arenas Completed</span>
            </div>
            <div className="metric-chip">
              <Home size={16} style={{ color: "#087FEA" }} />
              <span>Turnkey Residential Handover</span>
            </div>
            <div className="metric-chip">
              <ShieldCheck size={16} style={{ color: "#FF8A00" }} />
              <span>100% Quality Execution</span>
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
              All Services ({services.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === "sports" ? "active" : ""}`}
              onClick={() => setActiveCategory("sports")}
            >
              <Trophy size={16} /> 1. Sports Courts & Infrastructure
            </button>
            <button
              className={`filter-btn ${activeCategory === "residential" ? "active" : ""}`}
              onClick={() => setActiveCategory("residential")}
            >
              <Home size={16} /> 2. Turnkey Residential Construction
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
              padding: "10px 20px",
              fontSize: "0.88rem",
              fontWeight: 700
            }}
          >
            <Zap size={16} style={{ color: "#19C8F4" }} />
            <span>{showSimulator ? "Close Court Color Simulator" : "Launch 3D Court Color Simulator"}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowLayersVisualizer(!showLayersVisualizer)}
            className="btn"
            style={{
              background: showLayersVisualizer ? "#087FEA" : "rgba(25, 200, 244, 0.15)",
              border: "1px solid #19C8F4",
              color: "#FFFFFF",
              padding: "10px 20px",
              fontSize: "0.88rem",
              fontWeight: 700
            }}
          >
            <Layers size={16} style={{ color: "#19C8F4" }} />
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
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-pro-card">
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
                      <div className="scope-title">Key Service Scope:</div>
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
                        <span>Inquire Spec</span>
                        <ArrowRight size={16} />
                      </button>

                      <a
                        href="tel:+919636365391"
                        className="call-direct-btn"
                        title="Call Engineering Desk"
                      >
                        <PhoneCall size={18} style={{ color: "#19C8F4" }} />
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
                <Sparkles size={15} style={{ color: "#19C8F4" }} />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <h2 className="consultation-title">
                Ready to Start Your Sports Arena or Residential House Construction?
              </h2>
              <p className="consultation-text">
                Speak directly with SB SPORTS & CONSTRUCTION engineers for site inspection, CAD drawings, turf specs, and turnkey estimates.
              </p>
            </div>

            <div className="consultation-actions">
              <button
                onClick={() => onOpenQuote("General Inquiry")}
                className="btn btn-primary btn-glow"
                style={{ padding: "16px 32px", fontSize: "1.05rem" }}
              >
                <span>Request Free Estimate</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="tel:+919636365391"
                className="direct-phone-link"
              >
                <PhoneCall size={18} style={{ color: "#19C8F4" }} />
                <span>Call Hotline: <strong>+91-9636365391</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
