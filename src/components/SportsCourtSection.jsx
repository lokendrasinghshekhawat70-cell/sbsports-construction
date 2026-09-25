import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import {
  Trophy,
  ArrowRight,
  Play,
  Layers,
  Award,
  Sparkles,
  PhoneCall,
  Mail,
  Camera,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Flame
} from "lucide-react";

export default function SportsCourtSection({ onNavigate, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const handleGoToServices = () => {
    if (onNavigate) {
      onNavigate("courts");
    } else {
      navigate("/sports-courts");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const sportsCatalog = [
    {
      id: "gym-flooring",
      category: "indoor",
      categoryName: "Indoor Game",
      name: "Gym & Fitness Flooring Solutions",
      type: "Vulcanized Rubber Tiles & Olympic Drop Zones",
      image: "/images/sports_gym_flooring.jpg",
      quote: "Heavy drop zones engineered for silence and zero floor damage.",
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
      quote: "Precision rebound from glass wall to championship tin.",
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
        background: "#F4F7FA",
        padding: "90px 0",
        borderTop: "1px solid #DCE4EC",
        borderBottom: "1px solid #DCE4EC",
        position: "relative",
        color: "#071A33"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 40px auto" }}>
          <div className="section-pill">
            <Trophy size={16} style={{ color: "#087FEA" }} />
            <span>SB SPORTS INFRASTRUCTURE & ACADEMY SOLUTIONS</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            World-Class Sports Arenas, <br />
            <span className="text-gradient-blue">Synthetic Courts & Turf Systems</span>
          </h2>

          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150" style={{ maxWidth: "780px", margin: "0 auto 28px auto" }}>
            From gymnasium drop zones, WSF squash courts, and BWF badminton mats to FIFA Box Cricket turfs, ITF lawn tennis arenas, IAAF running tracks, and turnkey sports consulting.
          </p>

          {/* Action CTAs */}
          <div data-aos="fade-up" data-aos-delay="200" style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}>
            <button
              onClick={handleGoToServices}
              className="btn btn-primary"
            >
              <Play size={16} />
              <span>Launch 3D/2D Court Simulator</span>
            </button>

            <button
              onClick={handleGoToServices}
              className="btn btn-secondary"
            >
              <Layers size={16} />
              <span>Explore All Specifications ({sportsCatalog.length})</span>
            </button>
          </div>

          {/* Big Featured Panoramic Arena Showcase */}
          <div
            onClick={handleGoToServices}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="800"
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(280px, 38vw, 440px)",
              overflow: "hidden",
              borderRadius: "8px",
              border: "1px solid #DCE4EC",
              margin: "24px 0 36px 0",
              background: "#FFFFFF",
              cursor: "pointer",
              boxShadow: "0 12px 30px rgba(7, 26, 51, 0.08)"
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
                padding: "28px",
                background: "linear-gradient(180deg, rgba(7, 26, 51, 0) 0%, rgba(7, 26, 51, 0.95) 100%)",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "14px",
                textAlign: "left"
              }}
            >
              <div>
                <span className="badge-blue" style={{ marginBottom: "8px", display: "inline-block", background: "#087FEA", color: "#FFFFFF" }}>
                  Featured Mega Sports Infrastructure
                </span>
                <h3 style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
                  Olympic 400m Running Track, 8-Layer Acrylic Tennis & Multi-Sport Complex
                </h3>
              </div>
              <div
                className="btn btn-secondary btn-sm"
                style={{ background: "#071A33", border: "1px solid #1E293B", color: "#FFFFFF" }}
              >
                <Camera size={16} />
                <span>View Arena Specs</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >
            <button
              onClick={() => setActiveTab("all")}
              style={{
                background: activeTab === "all" ? "#087FEA" : "#FFFFFF",
                color: activeTab === "all" ? "#FFFFFF" : "#071A33",
                border: activeTab === "all" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "10px 22px",
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              All Offerings ({sportsCatalog.length})
            </button>
            <button
              onClick={() => setActiveTab("indoor")}
              style={{
                background: activeTab === "indoor" ? "#087FEA" : "#FFFFFF",
                color: activeTab === "indoor" ? "#FFFFFF" : "#071A33",
                border: activeTab === "indoor" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "10px 22px",
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              Indoor Arenas (Gym, Squash, TT, Badminton)
            </button>
            <button
              onClick={() => setActiveTab("outdoor")}
              style={{
                background: activeTab === "outdoor" ? "#087FEA" : "#FFFFFF",
                color: activeTab === "outdoor" ? "#FFFFFF" : "#071A33",
                border: activeTab === "outdoor" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "10px 22px",
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              Outdoor Courts (Box Cricket, Tennis, Basketball, Track)
            </button>
            <button
              onClick={() => setActiveTab("services")}
              style={{
                background: activeTab === "services" ? "#087FEA" : "#FFFFFF",
                color: activeTab === "services" ? "#FFFFFF" : "#071A33",
                border: activeTab === "services" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "10px 22px",
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              Academy & Management
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "50px"
          }}
        >
          {filteredCatalog.map((court, idx) => (
            <div
              key={court.id}
              className="clean-card"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={(idx % 3) * 120}
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              <div style={{ position: "relative", height: "240px", overflow: "hidden", borderBottom: "1px solid #DCE4EC" }}>
                <img
                  src={court.image}
                  alt={court.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#071A33",
                    color: "#087FEA",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "4px",
                    border: "1px solid rgba(8, 127, 234, 0.3)",
                    textTransform: "uppercase"
                  }}
                >
                  {court.categoryName}
                </span>

                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "#087FEA",
                    color: "#FFFFFF",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "4px"
                  }}
                >
                  {court.badge}
                </span>
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h4 style={{ fontSize: "1.18rem", fontWeight: 800, color: "#071A33", margin: "0 0 6px 0", lineHeight: 1.3 }}>
                  {court.name}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#087FEA", fontWeight: 600, margin: "0 0 14px 0" }}>
                  {court.type}
                </p>

                <div
                  style={{
                    background: "#F4F7FA",
                    border: "1px solid #DCE4EC",
                    borderRadius: "6px",
                    padding: "12px 14px",
                    fontSize: "0.82rem",
                    color: "#64748B",
                    marginBottom: "16px"
                  }}
                >
                  <div><strong style={{ color: "#071A33" }}>Spec:</strong> {court.spec}</div>
                </div>

                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderLeft: "3px solid #087FEA",
                    padding: "10px 14px",
                    borderRadius: "0 6px 6px 0",
                    marginBottom: "20px",
                    flexGrow: 1
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontStyle: "italic",
                      color: "#64748B",
                      margin: 0,
                      lineHeight: 1.4
                    }}
                  >
                    "{court.quote}"
                  </p>
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                  <button
                    onClick={handleGoToServices}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <span>Full Specs</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="tel:+919636365391"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1.2, justifyContent: "center", textDecoration: "none" }}
                  >
                    <PhoneCall size={14} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


