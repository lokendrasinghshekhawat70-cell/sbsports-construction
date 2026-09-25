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
  Clock,
  Building2,
  HardHat,
  Layers
} from "lucide-react";

export default function ProjectsPage({ onBookConsultation }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "p1",
      title: "Championship 8-Layer Synthetic Acrylic Tennis Arena",
      category: "sports",
      categoryName: "Sports Infrastructure",
      location: "Metropolitan Sports Complex",
      area: "14,400 sq ft (2 Courts)",
      timeline: "3 Weeks Handover",
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
      area: "12,000 sq ft (30ft Truss Cage)",
      timeline: "4 Weeks Turnkey",
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
      area: "8,500 sq ft (4 Courts)",
      timeline: "2 Weeks Installation",
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
      location: "Olympic Sports Stadium",
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
      title: "Commercial Multi-Story Concrete Superstructure",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      location: "Commercial Plaza Sector",
      area: "42,000 sq ft Built-Up",
      timeline: "14 Months Commercial Build",
      image: "/images/concrete_structure.jpg",
      description: "Multi-story reinforced concrete commercial building with perimeter safety scaffolding, containment nets, floor slab pouring, and heavy crane operations.",
      architecturalFeatures: [
        "Reinforced concrete columns, shear walls, and floor slabs",
        "Multi-level safety scaffolding and containment netting",
        "Engineered formwork for high-rise commercial strength",
        "Strict site safety and structural load compliance"
      ],
      clientReview: "SB SPORTS & CONSTRUCTION handled the high-rise concrete pours and commercial framework with zero safety incidents.",
      clientAuthor: "Commercial Project Director"
    },
    {
      id: "p6",
      title: "Industrial PEB High-Span Steel Warehouse",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      location: "Logistics Hub & Industrial Park",
      area: "35,000 sq ft Floor Span",
      timeline: "4 Months Handover",
      image: "/images/steel_structure.jpg",
      description: "Heavy structural steel I-beam framing, clear-span portal trusses, overhead crane gantries, and standing-seam insulated roof panels.",
      architecturalFeatures: [
        "Heavy structural steel I-beam framing and high-strength bolts",
        "Clear-span portal truss engineering for maximum storage",
        "Laser-screed Tremix vacuum dewatered concrete flooring",
        "Seismic-rated structural steel joints and connection plates"
      ],
      clientReview: "Their structural steel erection team is world-class. The warehouse skeleton went up with millimeter precision.",
      clientAuthor: "Lead Commercial Structural Engineer"
    },
    {
      id: "p7",
      title: "Turnkey Luxury 2-Story Villa & Roof Framing",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      location: "Green Valley Luxury Enclave",
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
      id: "p8",
      title: "Heavy Excavator Earthmoving & Deep Raft Groundwork",
      category: "civil",
      categoryName: "Turnkey Civil & Structural",
      location: "Infrastructure Development Zone",
      area: "Civil Earthworks & Raft",
      timeline: "2 Months Site Prep",
      image: "/images/excavation_structure.jpg",
      description: "Heavy hydraulic excavator trenching and bulk excavation, subgrade grading, Fe-550D TMT rebar binding, and seismic-resistant raft casting.",
      architecturalFeatures: [
        "Heavy hydraulic excavator trenching and bulk excavation",
        "Subgrade leveling, pneumatic compaction, and foundation grading",
        "Reinforced concrete lintels and damp-proof membrane courses",
        "Robust civil site preparation and stormwater drainage infrastructure"
      ],
      clientReview: "The groundwork and excavation were performed with heavy machinery precision, creating an impenetrable foundation.",
      clientAuthor: "Civil Site Supervisor"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page-wrapper">
      {/* Hero Header Banner */}
      <section className="projects-hero-banner" data-aos="fade-up">
        <div className="container">
          <div className="projects-badge-pill" data-aos="fade-down">
            <Sparkles size={16} />
            <span>SB SPORTS & CONSTRUCTION PORTFOLIO</span>
          </div>

          <h1 className="projects-page-title" data-aos="fade-up" data-aos-delay="100">
            FEATURED ENGINEERING PROJECTS <br />
            <span>& EXECUTED WORKS</span>
          </h1>

          <p className="projects-page-subtitle" data-aos="fade-up" data-aos-delay="200">
            Explore completed Sports Arenas, Synthetic Courts, Box Cricket Turfs, Commercial Complexes, and Turnkey Houses executed by SB SPORTS & CONSTRUCTION.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="projects-tabs-list">
            <button
              className={`projects-filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </button>
            <button
              className={`projects-filter-btn ${filter === "sports" ? "active" : ""}`}
              onClick={() => setFilter("sports")}
            >
              <Trophy size={16} /> Sports Infrastructure
            </button>
            <button
              className={`projects-filter-btn ${filter === "civil" ? "active" : ""}`}
              onClick={() => setFilter("civil")}
            >
              <Building2 size={16} /> Civil & Building Engineering
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-catalog-grid">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="project-catalog-card"
                data-aos="fade-up"
                data-aos-delay={((idx % 3) + 1) * 100}
                onClick={() => setSelectedProject(proj)}
              >
                <div className="project-card-image-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                  />
                  <span className="project-card-badge">
                    {proj.categoryName}
                  </span>
                </div>

                <div className="project-card-body">
                  <div className="project-card-meta">
                    <span>
                      <MapPin size={14} /> {proj.location}
                    </span>
                    <span>
                      <Calendar size={14} /> {proj.timeline}
                    </span>
                  </div>

                  <h3 className="project-card-title">
                    {proj.title}
                  </h3>
                  <p className="project-card-desc">
                    {proj.description}
                  </p>

                  <div className="project-card-footer">
                    <span className="project-area-tag">
                      {proj.area}
                    </span>
                    <button
                      className="project-inspect-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
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
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <div style={{ width: "100%", height: "280px", overflow: "hidden", position: "relative" }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(6, 9, 14, 0.85)", border: "1px solid #0084FF", color: "#0084FF", padding: "6px 14px", fontWeight: 800, fontSize: "0.8rem", borderRadius: "4px" }}>
                {selectedProject.categoryName}
              </span>
            </div>

            <div style={{ padding: "32px" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 900, color: "#FFFFFF", marginBottom: "12px" }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: "#CBD5E1", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "24px" }}>
                {selectedProject.description}
              </p>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "6px", padding: "20px", marginBottom: "24px" }}>
                <h4 style={{ color: "#0084FF", fontWeight: 800, fontSize: "0.9rem", textTransform: "uppercase", marginBottom: "14px", letterSpacing: "0.05em" }}>
                  Engineering Specifications:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedProject.architecturalFeatures.map((feat, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "#D1D5DB" }}>
                      <Check size={16} style={{ color: "#0084FF", flexShrink: 0, marginTop: "2px" }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "rgba(0, 132, 255, 0.06)", border: "1px solid rgba(0, 132, 255, 0.25)", borderRadius: "6px", padding: "20px", marginBottom: "26px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FF7A00" color="#FF7A00" />
                  ))}
                </div>
                <p style={{ color: "#FFFFFF", fontStyle: "italic", fontSize: "0.94rem", margin: "0 0 8px 0" }}>
                  "{selectedProject.clientReview}"
                </p>
                <div style={{ color: "#0084FF", fontWeight: 700, fontSize: "0.85rem" }}>— {selectedProject.clientAuthor}</div>
              </div>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  if (onBookConsultation) {
                    onBookConsultation(title);
                  } else {
                    window.location.href = `/Contact?service=${encodeURIComponent(title)}`;
                  }
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
