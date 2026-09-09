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
  Layers,
  Home,
  Building2,
  Tractor
} from "lucide-react";

export default function ProjectsPage({ onBookConsultation }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // STRICTLY projects from the picture:
  const projects = [
    {
      id: "p1",
      title: "Residential House & High-Pitch Roof Construction",
      category: "residential",
      categoryName: "Residential Development",
      location: "Active Site: Residential Sector",
      area: "4,800 sq ft",
      timeline: "7 Months Handover",
      image: "/images/roofing_structure.jpg",
      description: "Working construction photo of a craftsman two-story residential house under construction, with roofers actively installing architectural roof shingles on steep rafters with safety harnesses.",
      architecturalFeatures: [
        "High-pitch architectural shingle roofing system",
        "Two-story residential wooden and masonry construction",
        "Custom dormer window framing and weatherproof cladding",
        "Complete turnkey delivery: brick by brick"
      ],
      clientReview: "SB SPORTS & CONSTRUCTION delivered our dream family residence with unmatched craftsmanship from the timber rafters down to the foundation.",
      clientAuthor: "Homeowner — Residential Development"
    },
    {
      id: "p2",
      title: "Brick-by-Brick Residential Masonry & Load-Bearing Walls",
      category: "residential",
      categoryName: "Residential Development",
      location: "Active Site: Masonry Sector",
      area: "3,600 sq ft",
      timeline: "4 Months Masonry Phase",
      image: "/images/brickwork_structure.jpg",
      description: "Working construction photo of skilled bricklayer masons in hard hats and high-vis vests laying red clay brick and cement mortar for load-bearing structural walls, building dreams brick by brick.",
      architecturalFeatures: [
        "Load-bearing red clay brick and mortar structural masonry",
        "Reinforced lintels, damp-proof courses, and tie beams",
        "Level and plumb alignment verified with precision spirit levels",
        "Building your dreams, brick by brick structural durability"
      ],
      clientReview: "Watching the brick-by-brick craftsmanship rise on our home was incredible. Truly sturdy and authentic workmanship.",
      clientAuthor: "Client — Residential Masonry Home"
    },
    {
      id: "p3",
      title: "Commercial Multi-Story Concrete Superstructure",
      category: "commercial",
      categoryName: "Commercial Projects",
      location: "Active Site: Commercial Zone",
      area: "42,000 sq ft",
      timeline: "14 Months Commercial Build",
      image: "/images/concrete_structure.jpg",
      description: "Working construction photo of a multi-story reinforced concrete commercial building under construction with perimeter safety scaffolding, containment nets, floor slab pouring, and tower crane overhead.",
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
      id: "p4",
      title: "High-Rise Structural Steel Framing & Ironworkers",
      category: "commercial",
      categoryName: "Commercial Projects",
      location: "Active Site: High-Rise Deck",
      area: "Heavy Commercial",
      timeline: "Project Duration",
      image: "/images/steel_structure.jpg",
      description: "Working construction photo of structural ironworkers in safety harnesses bolting heavy steel I-beam columns and girders high up on a multi-story building skeleton frame.",
      architecturalFeatures: [
        "Heavy structural steel I-beam framing and high-strength bolts",
        "Ironworker fall-arrest safety harnesses and tethered rigging",
        "High-altitude precision alignment and torque inspection",
        "Seismic-rated structural steel joints and connection plates"
      ],
      clientReview: "Their structural steel erection team is world-class. The skeleton went up with millimeter precision.",
      clientAuthor: "Lead Commercial Structural Engineer"
    },
    {
      id: "p5",
      title: "Hydraulic Excavator & Infrastructure Earthmoving",
      category: "infrastructure",
      categoryName: "Infrastructure Works",
      location: "Active Site: Groundwork Zone",
      area: "Civil Earthworks",
      timeline: "2 Months Site Prep",
      image: "/images/excavation_structure.jpg",
      description: "Working construction photo of a heavy yellow hydraulic excavator digging foundation trenches in soil, surrounded by stacked red clay bricks, rebar cages, and site engineers surveying levels.",
      architecturalFeatures: [
        "Heavy hydraulic excavator trenching and bulk excavation",
        "Subgrade leveling, compaction, and foundation grading",
        "Structural brick stacks and masonry footing groundwork",
        "Robust civil site preparation and drainage infrastructure"
      ],
      clientReview: "The groundwork and excavation were performed with heavy machinery precision, creating an impenetrable foundation.",
      clientAuthor: "Civil Site Supervisor"
    },
    {
      id: "p6",
      title: "Yellow Tower Crane Hoisting & Upper Deck Operations",
      category: "infrastructure",
      categoryName: "Infrastructure & Heavy Works",
      location: "Active Site: High-Altitude Crane",
      area: "Heavy Lifting",
      timeline: "Continuous Phase",
      image: "/images/crane_structure.jpg",
      description: "Working construction photo of a yellow tower crane hoisting heavy rebar cages and structural materials onto the upper commercial deck with certified rigging.",
      architecturalFeatures: [
        "Tower crane heavy material hoisting and deck placement",
        "Vertical rebar cage and concrete bucket transportation",
        "Certified rigger signals and anti-collision monitoring",
        "Seamless high-altitude coordination with ground operations"
      ],
      clientReview: "Their tower crane operations kept heavy materials moving smoothly to the highest levels without delays.",
      clientAuthor: "Project Operations Director"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page-container">
      {/* Hero Header */}
      <section className="projects-hero-banner" style={{ background: "linear-gradient(180deg, #091932 0%, #0D264F 100%)", padding: "60px 0 40px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero-badge animate-float" style={{ margin: "0 auto 16px auto", background: "#DC2626", color: "#FFF" }}>
            <Sparkles size={16} style={{ color: "#FFFFFF" }} />
            <span>SB SPORTS & CONSTRUCTION</span>
          </div>

          <h1 className="projects-page-title" style={{ color: "#F8FAFC", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900 }}>
            HOUSE & BUILDING CONSTRUCTION
          </h1>

          <p style={{ color: "#FFFFFF", fontSize: "1.2rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", margin: "10px 0 20px 0" }}>
            BUILDING YOUR DREAMS, BRICK BY BRICK
          </p>

          <p className="projects-page-subtitle" style={{ maxWidth: "780px", margin: "0 auto", color: "#333333" }}>
            Showcasing works directly executed by SB SPORTS & CONSTRUCTION: Residential Development, Commercial Projects, and Infrastructure Works.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="projects-tabs-list" style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", padding: "16px 0" }}>
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Works
            </button>
            <button
              className={`filter-btn ${filter === "residential" ? "active" : ""}`}
              onClick={() => setFilter("residential")}
            >
              <Home size={15} /> Residential Development
            </button>
            <button
              className={`filter-btn ${filter === "commercial" ? "active" : ""}`}
              onClick={() => setFilter("commercial")}
            >
              <Building2 size={15} /> Commercial Projects
            </button>
            <button
              className={`filter-btn ${filter === "infrastructure" ? "active" : ""}`}
              onClick={() => setFilter("infrastructure")}
            >
              <Tractor size={15} /> Infrastructure Works
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section className="section-padding projects-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="portfolio-card"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="portfolio-img-box">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="portfolio-img"
                  />
                  <div className="portfolio-overlay">
                    <button
                      className="portfolio-zoom-btn"
                      title="View Construction Details"
                      aria-label={`View details for ${proj.title}`}
                    >
                      <Maximize2 size={20} />
                    </button>
                  </div>
                  <span className="badge-gold portfolio-category-tag">
                    {proj.categoryName}
                  </span>
                </div>

                <div className="portfolio-content">
                  <div className="portfolio-meta">
                    <span className="meta-item">
                      <MapPin size={13} className="text-amber" /> {proj.location}
                    </span>
                    <span className="meta-item">
                      <Calendar size={13} /> {proj.timeline}
                    </span>
                  </div>

                  <h3 className="portfolio-title">{proj.title}</h3>
                  <p className="portfolio-desc">{proj.description}</p>

                  <div className="portfolio-card-footer">
                    <span className="project-area-tag">{proj.area}</span>
                    <button
                      className="view-project-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                    >
                      <span>Inspect Work</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="portfolio-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="modal-hero-img-box">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-hero-img"
              />
              <span className="badge-gold modal-badge">
                {selectedProject.categoryName}
              </span>
            </div>

            <div className="modal-body">
              <div className="modal-meta-row">
                <span className="modal-meta">
                  <MapPin size={14} className="text-amber" /> {selectedProject.location}
                </span>
                <span className="modal-meta">
                  <Building size={14} /> {selectedProject.area}
                </span>
                <span className="modal-meta">
                  <Calendar size={14} /> {selectedProject.timeline}
                </span>
              </div>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>

              <div className="modal-section">
                <h4 className="modal-section-title">Construction Specifications:</h4>
                <div className="modal-features-list">
                  {selectedProject.architecturalFeatures.map((feat, i) => (
                    <div key={i} className="modal-feature-item">
                      <Check size={16} className="text-amber" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-review-box">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                </div>
                <blockquote className="modal-quote">
                  "{selectedProject.clientReview}"
                </blockquote>
                <div className="modal-author">— {selectedProject.clientAuthor}</div>
              </div>

              <div className="modal-actions">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onBookConsultation(title);
                  }}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Inquire for {selectedProject.categoryName}</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
