import React, { useState } from "react";
import "./Projects.css";
import {
  Building,
  MapPin,
  Calendar,
  Maximize2,
  Check,
  ArrowUpRight,
  X,
  Star,
  Sparkles,
  Trophy,
  Home,
  ShieldCheck,
  Clock
} from "lucide-react";

export default function ProjectsPage({ onBookConsultation }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "p1",
      title: "Grand Slam Standard 8-Layer Synthetic Acrylic Tennis Court",
      category: "sports",
      categoryName: "Sports Infrastructure",
      location: "Metropolitan Sports Club",
      area: "78ft × 36ft (Enclosure: 120ft × 60ft)",
      timeline: "12 Days Execution",
      image: "/images/sports_tennis_court.jpg",
      description: "8-layer ITF class 4/5 cushion acrylic court surface with sub-base laser-screed gradient, anti-glare color coating, high-mast LED floodlights, and perimeter fencing.",
      architecturalFeatures: [
        "8-layer ITF cushion acrylic surface system",
        "Sub-base concrete leveling & laser gradient slope",
        "Anti-glare UV-stabilized royal blue & electric cyan topcoat",
        "300+ Lux LED high-mast stadium floodlights"
      ],
      clientReview: "SB SPORTS & CONSTRUCTION transformed our facility into an international tournament grade tennis venue. Flawless surface bounce!",
      clientAuthor: "Secretary — Metropolitan Sports Club"
    },
    {
      id: "p2",
      title: "High-Mast Floodlit Box Cricket & Futsal Turf Arena",
      category: "sports",
      categoryName: "Sports Infrastructure",
      location: "Commercial Sports Hub",
      area: "100ft × 60ft Enclosure (30ft Height)",
      timeline: "14 Days Execution",
      image: "/images/sports_box_cricket_turf.jpg",
      description: "Commercial box cricket arena built with 50mm FIFA standard monofilament PE grass, heavy-duty 30ft steel cage netting, and night illumination.",
      architecturalFeatures: [
        "50mm monofilament non-abrasive PE turf grass",
        "Silica sand & vulcanized rubber granule infill matrix",
        "30ft high hot-dip galvanized steel truss cage",
        "High-density anti-impact perimeter netting"
      ],
      clientReview: "Our box cricket arena is running 18 hours a day with zero turf wear. The netting and steel cage structure are unbreakable.",
      clientAuthor: "Arena Director — Commercial Sports Hub"
    },
    {
      id: "p3",
      title: "BWF Standard Indoor Badminton Arena & Vinyl Floor",
      category: "sports",
      categoryName: "Sports Infrastructure",
      location: "National Sports Academy",
      area: "50ft × 25ft Enclosure",
      timeline: "10 Days Execution",
      image: "/images/sports_badminton_court.jpg",
      description: "Tournament badminton hall with BWF approved lychee-texture anti-slip sports vinyl, sprung timber sub-floor, and asymmetric LED lights.",
      architecturalFeatures: [
        "BWF Level 1 certified 4.5mm lychee-texture vinyl mat",
        "High-density cellular foam backing for shock absorption",
        "Sprung hardwood sub-floor with rubber damping pads",
        "Zero-glare asymmetric LED luminaires over tramlines"
      ],
      clientReview: "Professional feel underfoot! Players have praised the grip and cushion during high-intensity rallies.",
      clientAuthor: "Head Coach — National Badminton Academy"
    },
    {
      id: "p4",
      title: "IAAF Certified 400m Synthetic Athletic Running Track",
      category: "sports",
      categoryName: "Sports Infrastructure",
      location: "Olympic Sports Complex",
      area: "400m Oval (8 Lanes)",
      timeline: "25 Days Execution",
      image: "/images/sports_running_track.jpg",
      description: "13mm IAAF Class 1 full-PUR polyurethane synthetic running track with broadcast EPDM granules, spike resistance, and steeplechase pit.",
      architecturalFeatures: [
        "13mm IAAF full-PUR polyurethane elastomeric system",
        "Cast-in-place UV resistant EPDM rubber granules",
        "Spike-resistant and shock-absorbing energy return surface",
        "Laser-measured 8 parallel 1.22m lane line markings"
      ],
      clientReview: "World Athletics compliant track constructed with precision. The grip and weather durability are outstanding.",
      clientAuthor: "Chief Civil Engineer — Sports Complex"
    },
    {
      id: "p5",
      title: "Turnkey Luxury 2-Story Villa & Roof Construction",
      category: "residential",
      categoryName: "Turnkey Residential",
      location: "Residential Sector",
      area: "4,800 sq ft Built-Up",
      timeline: "7 Months Handover",
      image: "/images/roofing_structure.jpg",
      description: "Custom luxury 2-story house construction featuring architectural roof shingles, engineered dormers, precision masonry, and turnkey craftsmen handover.",
      architecturalFeatures: [
        "End-to-end residential construction from foundation to handover",
        "High-pitch architectural roof shingle installation & weather barrier",
        "Custom exterior siding, trim framing, and dormer carpentry",
        "Complete electrical, plumbing, flooring, and interior turnkey delivery"
      ],
      clientReview: "SB SPORTS & CONSTRUCTION delivered our dream family residence with unmatched craftsmanship from the timber rafters down to the foundation.",
      clientAuthor: "Homeowner — Luxury Villa Project"
    },
    {
      id: "p6",
      title: "Brick-by-Brick Structural Masonry & Load-Bearing Villa",
      category: "residential",
      categoryName: "Turnkey Residential",
      location: "Green Valley Enclave",
      area: "3,600 sq ft Built-Up",
      timeline: "5 Months Handover",
      image: "/images/brickwork_structure.jpg",
      description: "Custom residential villa built with high-density red clay brick masonry, reinforced concrete lintels, damp-proof courses, and craftsmen finishes.",
      architecturalFeatures: [
        "Load-bearing red clay brick and mortar structural masonry",
        "Reinforced lintels, damp-proof courses, and tie beams",
        "Level and plumb alignment verified with spirit levels",
        "Building your dreams, brick by brick structural durability"
      ],
      clientReview: "Watching the brick-by-brick craftsmanship rise on our home was incredible. Truly sturdy and authentic workmanship.",
      clientAuthor: "Client — Green Valley Residence"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page-wrapper" style={{ background: "#F4F7FA", minHeight: "100vh" }}>
      {/* Hero Header Banner */}
      <section className="projects-hero-banner" style={{ background: "linear-gradient(180deg, #04101F 0%, #071A33 100%)", padding: "60px 0 44px 0", borderBottom: "1px solid rgba(25, 200, 244, 0.2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(8, 127, 234, 0.12)",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              color: "#19C8F4",
              padding: "6px 18px",
              fontSize: "0.8rem",
              fontWeight: 800,
              borderRadius: "6px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            <Sparkles size={16} />
            <span>SB SPORTS & CONSTRUCTION PORTFOLIO</span>
          </div>

          <h1 className="projects-page-title" style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, margin: "0 0 12px 0", lineHeight: 1.2 }}>
            FEATURED ENGINEERING PROJECTS <br />
            <span className="text-gradient-blue">& EXECUTED WORKS</span>
          </h1>

          <p className="projects-page-subtitle" style={{ maxWidth: "780px", margin: "0 auto", color: "#D9E2EA", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Explore completed Sports Courts, Synthetic Surfacing, Box Cricket Arenas, and Turnkey Residential Houses executed by SB SPORTS & CONSTRUCTION.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <div className="projects-filter-bar" style={{ background: "#FFFFFF", borderBottom: "1px solid #DCE4EC", sticky: "top", top: "72px", zIndex: 30 }}>
        <div className="container">
          <div className="projects-tabs-list" style={{ display: "flex", justifyContent: "center", gap: "12px", padding: "16px 0", flexWrap: "wrap" }}>
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </button>
            <button
              className={`filter-btn ${filter === "sports" ? "active" : ""}`}
              onClick={() => setFilter("sports")}
            >
              <Trophy size={16} /> 1. Sports Infrastructure
            </button>
            <button
              className={`filter-btn ${filter === "residential" ? "active" : ""}`}
              onClick={() => setFilter("residential")}
            >
              <Home size={16} /> 2. Turnkey Residential Houses
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section-padding projects-grid-section" style={{ padding: "60px 0 80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "28px" }}>
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="clean-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  background: "#FFFFFF",
                  border: "1px solid #DCE4EC",
                  borderRadius: "10px",
                  boxShadow: "0 4px 14px rgba(7, 26, 51, 0.06)",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setSelectedProject(proj)}
              >
                <div style={{ width: "100%", height: "230px", overflow: "hidden", position: "relative", background: "#04101F" }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      background: "#071A33",
                      border: "1px solid rgba(25, 200, 244, 0.3)",
                      color: "#19C8F4",
                      padding: "4px 12px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      borderRadius: "6px",
                      textTransform: "uppercase"
                    }}
                  >
                    {proj.categoryName}
                  </span>
                </div>

                <div style={{ padding: "26px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", gap: "14px", fontSize: "0.82rem", color: "#64748B", marginBottom: "10px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={14} style={{ color: "#087FEA" }} /> {proj.location}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={14} style={{ color: "#19C8F4" }} /> {proj.timeline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#071A33", marginBottom: "10px", lineHeight: 1.3 }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6, marginBottom: "20px" }}>
                    {proj.description}
                  </p>

                  <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #DCE4EC", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#087FEA", background: "rgba(8, 127, 234, 0.08)", padding: "4px 10px", borderRadius: "4px" }}>
                      {proj.area}
                    </span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                      style={{ color: "#071A33", borderColor: "#087FEA" }}
                    >
                      <span>Inspect Project</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(4, 16, 31, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: "#04101F",
              border: "1px solid rgba(25, 200, 244, 0.3)",
              borderRadius: "12px",
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              color: "#FFFFFF",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ width: "100%", height: "260px", overflow: "hidden", position: "relative" }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", bottom: "16px", left: "16px", background: "#071A33", border: "1px solid #19C8F4", color: "#19C8F4", padding: "6px 14px", fontWeight: 800, fontSize: "0.8rem", borderRadius: "6px" }}>
                {selectedProject.categoryName}
              </span>
            </div>

            <div style={{ padding: "32px" }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: "#D9E2EA", fontSize: "0.96rem", lineHeight: 1.6, marginBottom: "24px" }}>
                {selectedProject.description}
              </p>

              <div style={{ background: "#071A33", border: "1px solid rgba(25, 200, 244, 0.2)", borderRadius: "8px", padding: "20px", marginBottom: "24px" }}>
                <h4 style={{ color: "#19C8F4", fontWeight: 800, fontSize: "0.9rem", textTransform: "uppercase", marginBottom: "12px" }}>
                  Engineering Specifications:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedProject.architecturalFeatures.map((feat, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#FFFFFF" }}>
                      <Check size={16} style={{ color: "#19C8F4", flexShrink: 0, marginTop: "2px" }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "rgba(8, 127, 234, 0.1)", border: "1px solid rgba(8, 127, 234, 0.3)", borderRadius: "8px", padding: "20px", marginBottom: "26px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FF8A00" color="#FF8A00" />
                  ))}
                </div>
                <p style={{ color: "#FFFFFF", fontStyle: "italic", fontSize: "0.92rem", margin: "0 0 8px 0" }}>
                  "{selectedProject.clientReview}"
                </p>
                <div style={{ color: "#19C8F4", fontWeight: 700, fontSize: "0.85rem" }}>— {selectedProject.clientAuthor}</div>
              </div>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onBookConsultation(title);
                }}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1rem" }}
              >
                <span>Inquire About {selectedProject.categoryName}</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
