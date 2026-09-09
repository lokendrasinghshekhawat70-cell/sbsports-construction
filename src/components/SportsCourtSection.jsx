import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  ArrowRight,
  Play,
  Layers,
  Award,
  Sparkles,
  Quote,
  PhoneCall,
  Mail,
  CheckCircle2,
  ChevronRight,
  Camera,
  Maximize2
} from "lucide-react";

export default function SportsCourtSection({ onNavigate, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("all");

  const sportsCatalog = [
    {
      id: "gym-flooring",
      category: "indoor",
      categoryName: "Indoor Game",
      name: "Gym & Fitness Flooring Solutions",
      type: "Vulcanized Rubber Tiles & Olympic Drop Zones",
      image: "/images/sports_gym_flooring.jpg",
      quote: "Iron meets resilience. Heavy drop zones engineered for silence and zero floor damage.",
      badge: "Commercial Gym Grade",
      spec: "15mm - 25mm High Density SBR / EPDM",
      warranty: "10-Year Anti-Wear"
    },
    {
      id: "squash-court",
      category: "indoor",
      categoryName: "Indoor Game",
      name: "Championship Squash Court",
      type: "WSF Armourcoat Plaster & Sprung Maple",
      image: "/images/sports_squash_court.jpg",
      quote: "Four walls, zero excuses. Precision rebound from glass wall to championship tin.",
      badge: "WSF Standard",
      spec: "9.75m × 6.4m Regulation Playing Area",
      warranty: "10-Year Wall & Floor"
    },
    {
      id: "table-tennis",
      category: "indoor",
      categoryName: "Indoor Game",
      name: "Table Tennis & Indoor Pickleball Table",
      type: "ITTF Tournament Surface & High-Grip Mat",
      image: "/images/sports_table_tennis.jpg",
      quote: "Microsecond spins and lightning reflexes on tournament-grade non-glare arenas.",
      badge: "ITTF Certified",
      spec: "25mm Top Board • Glare-Free LED",
      warranty: "8-Year Surface"
    },
    {
      id: "badminton",
      category: "indoor",
      categoryName: "Indoor Game",
      name: "Indoor Badminton Arena",
      type: "BWF Grade PVC Synthetic Mat & Sprung Wood",
      image: "/images/sports_badminton_court.jpg",
      quote: "Glide like silk across the court, strike like thunder at the decisive smash.",
      badge: "BWF Level 1 Spec",
      spec: "13.4m × 6.1m • Anti-Slip Lychee Texture",
      warranty: "8-Year Guarantee"
    },
    {
      id: "box-cricket",
      category: "outdoor",
      categoryName: "Outdoor Game",
      name: "Box Cricket & Futsal Turf Arena",
      type: "50mm Monofilament Grass & Steel Cage Netting",
      image: "/images/sports_box_cricket_turf.jpg",
      quote: "Under midnight floodlights, boundaries shrink but the hunger to win expands.",
      badge: "FIFA Standard Turf",
      spec: "100ft × 60ft Enclosure • 30ft Truss Cage",
      warranty: "7-Year Foot Traffic"
    },
    {
      id: "tennis",
      category: "outdoor",
      categoryName: "Outdoor Game",
      name: "Championship Lawn Tennis Court",
      type: "8-Layer ITF Certified Acrylic Cushion System",
      image: "/images/sports_tennis_court.jpg",
      quote: "Every baseline bounce is true. Speed is nothing without unyielding traction.",
      badge: "ITF Pace 3 Medium",
      spec: "78ft × 36ft (Enclosure: 120ft × 60ft)",
      warranty: "10-Year Anti-Peel"
    },
    {
      id: "basketball",
      category: "outdoor",
      categoryName: "Outdoor Game",
      name: "High-Grip FIBA Basketball Court",
      type: "Heavy-Duty Multi-Tone Acrylic / PU Cushion",
      image: "/images/sports_basketball_court.jpg",
      quote: "The hardwood roar carried under open skies — shock-absorbed for high-flying drives.",
      badge: "FIBA Regulation",
      spec: "28m × 15m Regulation Key & 3-Pt Arcs",
      warranty: "8-Year Guarantee"
    },
    {
      id: "pickleball",
      category: "outdoor",
      categoryName: "Outdoor Game",
      name: "Outdoor Pro Pickleball Court",
      type: "5-Layer Textured Acrylic Fast Kitchen Zone",
      image: "/images/sports_pickleball_court.jpg",
      quote: "Lightning-fast volleys in the non-volley kitchen zone. Zero skid, total control.",
      badge: "USAPA Tournament",
      spec: "44ft × 20ft (Enclosure: 60ft × 30ft)",
      warranty: "7-Year Color Retention"
    },
    {
      id: "running-track",
      category: "outdoor",
      categoryName: "Outdoor Game",
      name: "Synthetic Athletic Running Track",
      type: "IAAF Certified Polyurethane Full-PUR / Sandwich",
      image: "/images/sports_running_track.jpg",
      quote: "The 400-meter truth. Unyielding energy return beneath every stride and spike.",
      badge: "World Athletics (IAAF)",
      spec: "400m Oval (4 to 8 Lanes, 1.22m Width)",
      warranty: "10-Year Weatherproof"
    },
    {
      id: "sports-training",
      category: "services",
      categoryName: "Services",
      name: "International Sports Training Academy",
      type: "Elite Athlete High-Performance Programs",
      image: "/images/sports_training_academy.jpg",
      quote: "International coaching curriculum, sports telemetry, and Olympic-pathway drills.",
      badge: "Pro Athlete Coaching",
      spec: "Tennis, Cricket, Football & Multi-Sport",
      warranty: "Certified Curriculum"
    },
    {
      id: "club-management",
      category: "services",
      categoryName: "Services",
      name: "Sports Club & Academy Management",
      type: "Turnkey Operations, Booking Software & Coaching",
      image: "/images/sports_club_management.jpg",
      quote: "End-to-end sports facility monetization, tournament operations, and court uptime.",
      badge: "Turnkey Operations",
      spec: "Cloud Reservation & Preventive Maintenance",
      warranty: "Audited Financials"
    },
    {
      id: "business-consulting",
      category: "services",
      categoryName: "Services",
      name: "International Sports Business Consultant",
      type: "Stadium Master Planning & DPR Feasibility",
      image: "/images/sports_business_consulting.jpg",
      quote: "Transform vacant land into high-yield sports infrastructure with proven ROI modeling.",
      badge: "Strategic Advisory",
      spec: "Architectural Blueprints & PPP Tenders",
      warranty: "Institutional DPR"
    }
  ];

  const filteredCatalog = activeTab === "all"
    ? sportsCatalog
    : sportsCatalog.filter((item) => item.category === activeTab);

  return (
    <section
      className="sports-court-home-section"
      style={{
        background: "#FFFFFF",
        padding: "80px 0",
        borderTop: "2px solid #000000",
        borderBottom: "2px solid #000000",
        position: "relative",
        color: "#000000"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 36px auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              color: "#000000",
              padding: "5px 16px",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px"
            }}
          >
            <Trophy size={16} style={{ color: "#000000" }} />
            <span>SB SPORTS INFRASTRUCTURE & ACADEMY SOLUTIONS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              color: "#000000",
              lineHeight: 1.2,
              marginBottom: "14px",
              letterSpacing: "0.02em"
            }}
          >
            SPORTS ARENAS, COURTS & PROFESSIONAL SERVICES
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#333333",
              lineHeight: 1.6,
              margin: "0 auto 24px auto"
            }}
          >
            From gymnasiums, championship squash, and table tennis to outdoor box cricket turfs, lawn tennis, running tracks, international training academies, and turnkey business consulting.
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
            <button
              onClick={() => onNavigate("courts")}
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                fontWeight: 800,
                background: "#000000",
                color: "#FFFFFF",
                border: "1px solid #000000"
              }}
            >
              <Play size={16} />
              <span>Launch 2D Court Simulator</span>
            </button>

            <button
              onClick={() => onNavigate("courts")}
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                fontWeight: 800,
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000"
              }}
            >
              <Layers size={16} />
              <span>Explore All Specifications ({sportsCatalog.length})</span>
            </button>
          </div>

          {/* Big Featured Panoramic Arena Showcase */}
          <div
            onClick={() => onNavigate("courts")}
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(260px, 35vw, 420px)",
              overflow: "hidden",
              border: "2px solid #000000",
              margin: "24px 0 32px 0",
              background: "#000000",
              cursor: "pointer"
            }}
            title="Click to view all sports arenas & courts"
          >
            <img
              src="/images/sports_arena_complex_big.jpg"
              alt="Multi-Sport Arena Mega Complex"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "12px",
                textAlign: "left"
              }}
            >
              <div>
                <span
                  style={{
                    background: "#FFFFFF",
                    color: "#000000",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    border: "1px solid #000000",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: "6px"
                  }}
                >
                  Featured Mega Sports Infrastructure
                </span>
                <h3 style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)", fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
                  Olympic 400m Running Track, 8-Layer Acrylic Tennis & Multi-Sport Complex
                </h3>
              </div>
              <div
                style={{
                  background: "#000000",
                  color: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  padding: "8px 16px",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <Camera size={15} />
                <span>View All Arena Photos</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap"
            }}
          >
            <button
              onClick={() => setActiveTab("all")}
              style={{
                background: activeTab === "all" ? "#000000" : "#FFFFFF",
                color: activeTab === "all" ? "#FFFFFF" : "#000000",
                border: "1px solid #000000",
                padding: "8px 18px",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              All Offerings ({sportsCatalog.length})
            </button>
            <button
              onClick={() => setActiveTab("indoor")}
              style={{
                background: activeTab === "indoor" ? "#000000" : "#FFFFFF",
                color: activeTab === "indoor" ? "#FFFFFF" : "#000000",
                border: "1px solid #000000",
                padding: "8px 18px",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              Indoor Games (Gym, Squash, TT, Badminton)
            </button>
            <button
              onClick={() => setActiveTab("outdoor")}
              style={{
                background: activeTab === "outdoor" ? "#000000" : "#FFFFFF",
                color: activeTab === "outdoor" ? "#FFFFFF" : "#000000",
                border: "1px solid #000000",
                padding: "8px 18px",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              Outdoor Games (Box Cricket, Tennis, Basketball, Track)
            </button>
            <button
              onClick={() => setActiveTab("services")}
              style={{
                background: activeTab === "services" ? "#000000" : "#FFFFFF",
                color: activeTab === "services" ? "#FFFFFF" : "#000000",
                border: "1px solid #000000",
                padding: "8px 18px",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              Services & Academy Management
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}
        >
          {filteredCatalog.map((court) => (
            <div
              key={court.id}
              style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
              className="home-court-card"
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden", borderBottom: "1px solid #000000" }}>
                <img
                  src={court.image}
                  alt={court.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "#FFFFFF",
                    color: "#000000",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    border: "1px solid #000000",
                    textTransform: "uppercase"
                  }}
                >
                  {court.categoryName}
                </span>

                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#000000",
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    border: "1px solid #000000"
                  }}
                >
                  {court.badge}
                </span>
              </div>

              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#000000", margin: "0 0 4px 0" }}>
                  {court.name}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#444444", fontWeight: 700, margin: "0 0 10px 0" }}>
                  {court.type}
                </p>

                <div
                  style={{
                    background: "#F8F8F8",
                    border: "1px solid #E0E0E0",
                    padding: "8px 12px",
                    fontSize: "0.8rem",
                    color: "#222222",
                    marginBottom: "12px"
                  }}
                >
                  <div><strong>Spec:</strong> {court.spec}</div>
                  <div style={{ marginTop: "2px" }}><strong>Warranty:</strong> <span style={{ color: "#059669", fontWeight: 700 }}>{court.warranty}</span></div>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    borderLeft: "3px solid #000000",
                    padding: "8px 12px",
                    marginBottom: "16px",
                    flexGrow: 1
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontStyle: "italic",
                      color: "#333333",
                      margin: 0,
                      lineHeight: 1.4
                    }}
                  >
                    "{court.quote}"
                  </p>
                </div>

                <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                  <button
                    onClick={() => onNavigate("courts")}
                    style={{
                      flex: 1,
                      background: "#FFFFFF",
                      color: "#000000",
                      border: "1px solid #000000",
                      padding: "8px 12px",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px"
                    }}
                  >
                    <span>Full Specs</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="tel:+919636365391"
                    style={{
                      flex: 1.2,
                      background: "#000000",
                      color: "#FFFFFF",
                      border: "1px solid #000000",
                      padding: "8px 12px",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px"
                    }}
                  >
                    <PhoneCall size={14} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "20px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                background: "#000000",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "1.1rem"
              }}
            >
              10Y
            </div>
            <div>
              <strong style={{ color: "#000000", fontSize: "1rem", display: "block" }}>
                10-Year Anti-Peeling & Structural Warranty On All Arenas
              </strong>
              <span style={{ color: "#444444", fontSize: "0.85rem" }}>
                Laser-screed 1:100 slope gradient eliminates standing puddles permanently.
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:+919636365391"
              className="btn btn-secondary btn-sm"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000",
                fontWeight: 800,
                padding: "10px 16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <PhoneCall size={15} />
              <span>+91-9636365391</span>
            </a>

            <a
              href="mailto:sbsportsandconstruction@gmail.com"
              className="btn btn-secondary btn-sm"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000",
                fontWeight: 800,
                padding: "10px 16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Mail size={15} />
              <span>Email Proposal</span>
            </a>

            <Link
              to="/SportsCourtsAndCoating"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn btn-primary btn-sm"
              style={{ fontWeight: 800, padding: "10px 20px", background: "#000000", color: "#FFFFFF", border: "1px solid #000000", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>Explore All Courts & Blueprints</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
