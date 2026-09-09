import React, { useState } from "react";
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
  Home,
  Building2,
  Tractor,
  Trophy
} from "lucide-react";

export default function Portfolio({ onBookConsultation }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "p1",
      title: "Championship 8-Layer Acrylic Tennis Arena",
      category: "sports",
      categoryName: "Sports Court",
      location: "Active Facility: Tournament Club",
      area: "14,400 sq ft",
      timeline: "3 Weeks Handover",
      image: "/images/sports_tennis_court.jpg",
      description: "Championship 8-layer ITF certified acrylic cushion court installation with non-glare surface technology, laser-screed sub-base, and LED tournament lighting.",
      architecturalFeatures: [
        "8-layer ITF medium pace cushion acrylic coating",
        "Sub-base concrete leveling with 1:100 drainage slope",
        "UV resistant color pigments (Royal Blue & Tournament Green)",
        "10-year anti-peeling warranty certificate"
      ],
      clientReview: "SB SPORTS delivered our tournament tennis courts on schedule with flawless ball rebound precision.",
      clientAuthor: "Club President — Sports Infrastructure"
    },
    {
      id: "p2",
      title: "Multi-Court Box Cricket Turf Arena",
      category: "sports",
      categoryName: "Sports Court",
      location: "Active Facility: Commercial Turf Arena",
      area: "12,000 sq ft",
      timeline: "4 Weeks Turnkey",
      image: "/images/sports_box_cricket_turf.jpg",
      quote: "High-density 50mm monofilament grass turf with heavy steel frame netting.",
      description: "Commercial Box Cricket arena construction featuring FIFA grade artificial grass turf, shock pad underlayment, and perimeter steel truss cage with 30ft high netting.",
      architecturalFeatures: [
        "50mm monofilament non-abrasive synthetic grass turf",
        "Perimeter steel truss cage structure with heavy netting",
        "High-lumen LED floodlighting for 24/7 gameplay",
        "Commercial monetization software setup"
      ],
      clientReview: "Our Box Cricket turf generates peak revenue every evening. SB Sports built the entire structure seamlessly.",
      clientAuthor: "Arena Owner — Commercial Turf"
    },
    {
      id: "p3",
      title: "Indoor BWF Synthetic Badminton Complex",
      category: "sports",
      categoryName: "Sports Court",
      location: "Active Facility: Indoor Sports Club",
      area: "8,500 sq ft",
      timeline: "2 Weeks Installation",
      image: "/images/sports_badminton_court.jpg",
      description: "BWF Level 1 approved indoor badminton court complex with 4.5mm lychee-textured PVC anti-slip synthetic mats and sprung wooden sub-floor cushion.",
      architecturalFeatures: [
        "BWF Level 1 certified PVC synthetic court mats",
        "Sprung wooden sub-floor shock absorption layer",
        "Anti-glare indirect LED lighting fixtures",
        "8-year surface warranty"
      ],
      clientReview: "The anti-slip mat feel and shock absorption are unmatched. Players love competing here.",
      clientAuthor: "Badminton Academy Director"
    },
    {
      id: "p4",
      title: "Commercial Multi-Story Concrete Superstructure",
      category: "commercial",
      categoryName: "Commercial Civil",
      location: "Active Site: Commercial Zone",
      area: "42,000 sq ft",
      timeline: "14 Months Commercial Build",
      image: "/images/concrete_structure.jpg",
      description: "Multi-story reinforced concrete commercial building under construction with perimeter safety scaffolding, containment nets, floor slab pouring, and crane operations.",
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
      id: "p5",
      title: "High-Rise Structural Steel Framing & Ironworkers",
      category: "commercial",
      categoryName: "Commercial Civil",
      location: "Active Site: High-Rise Deck",
      area: "Heavy Steel",
      timeline: "Steel Framing Phase",
      image: "/images/steel_structure.jpg",
      description: "Structural ironworkers in safety harnesses bolting heavy steel I-beam columns and girders high up on a multi-story building skeleton frame.",
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
      id: "p6",
      title: "Hydraulic Excavator & Infrastructure Earthmoving",
      category: "infrastructure",
      categoryName: "Infrastructure",
      location: "Active Site: Groundwork Zone",
      area: "Civil Earthworks",
      timeline: "2 Months Site Prep",
      image: "/images/excavation_structure.jpg",
      description: "Heavy yellow hydraulic excavator digging foundation trenches in soil, surrounded by rebar cages and site engineers surveying levels.",
      architecturalFeatures: [
        "Heavy hydraulic excavator trenching and bulk excavation",
        "Subgrade leveling, compaction, and foundation grading",
        "Structural brick stacks and masonry footing groundwork",
        "Robust civil site preparation and drainage infrastructure"
      ],
      clientReview: "The groundwork and excavation were performed with heavy machinery precision, creating an impenetrable foundation.",
      clientAuthor: "Civil Site Supervisor"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding portfolio-section" style={{ background: "#F4F7FA" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={15} style={{ color: "#087FEA" }} />
            <span>Featured Execution Portfolio</span>
          </div>
          <h2 className="section-title">
            Our Landmark Projects <br />
            <span className="text-gradient-blue">& Engineered Facilities</span>
          </h2>
          <p className="section-subtitle">
            Explore world-class synthetic sports courts, Box Cricket turfs, commercial complexes, and infrastructure works built by <strong>SB SPORTS & CONSTRUCTION</strong>.
          </p>

          {/* Filter Bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "28px" }}>
            <button 
              style={{
                background: filter === "all" ? "#087FEA" : "#FFFFFF",
                color: filter === "all" ? "#FFFFFF" : "#071A33",
                border: filter === "all" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </button>
            <button 
              style={{
                background: filter === "sports" ? "#087FEA" : "#FFFFFF",
                color: filter === "sports" ? "#FFFFFF" : "#071A33",
                border: filter === "sports" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.25s ease"
              }}
              onClick={() => setFilter("sports")}
            >
              <Trophy size={14} /> Sports Courts & Turfs
            </button>
            <button 
              style={{
                background: filter === "commercial" ? "#087FEA" : "#FFFFFF",
                color: filter === "commercial" ? "#FFFFFF" : "#071A33",
                border: filter === "commercial" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.25s ease"
              }}
              onClick={() => setFilter("commercial")}
            >
              <Building2 size={14} /> Commercial Buildings
            </button>
            <button 
              style={{
                background: filter === "infrastructure" ? "#087FEA" : "#FFFFFF",
                color: filter === "infrastructure" ? "#FFFFFF" : "#071A33",
                border: filter === "infrastructure" ? "1px solid #087FEA" : "1px solid #DCE4EC",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "6px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.25s ease"
              }}
              onClick={() => setFilter("infrastructure")}
            >
              <Tractor size={14} /> Infrastructure
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="clean-card project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-image-wrap">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-image"
                />
                <span className="project-badge">
                  {proj.categoryName}
                </span>
              </div>

              <div className="project-content">
                <div style={{ display: "flex", gap: "16px", fontSize: "0.8rem", color: "#64748B", marginBottom: "10px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={13} style={{ color: "#087FEA" }} /> {proj.location}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={13} /> {proj.timeline}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.18rem", fontWeight: 800, color: "#071A33", marginBottom: "8px", lineHeight: 1.3 }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.5, marginBottom: "18px" }}>
                  {proj.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #DCE4EC", paddingTop: "14px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#087FEA", background: "rgba(8, 127, 234, 0.1)", padding: "4px 12px", borderRadius: "4px" }}>
                    {proj.area}
                  </span>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                  >
                    <span>Inspect Specs</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(4, 16, 31, 0.75)",
            backdropFilter: "blur(12px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="clean-card"
            style={{
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              background: "#FFFFFF",
              borderColor: "#DCE4EC",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#F4F7FA",
                border: "1px solid #DCE4EC",
                color: "#071A33",
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }} 
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div style={{ width: "100%", height: "240px", borderRadius: "6px", overflow: "hidden", marginBottom: "20px", position: "relative" }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className="badge-blue" style={{ position: "absolute", bottom: "14px", left: "14px", background: "#071A33", color: "#19C8F4" }}>
                {selectedProject.categoryName}
              </span>
            </div>

            <div>
              <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", color: "#087FEA", marginBottom: "10px", flexWrap: "wrap" }}>
                <span><MapPin size={14} /> {selectedProject.location}</span>
                <span><Building size={14} /> {selectedProject.area}</span>
                <span><Calendar size={14} /> {selectedProject.timeline}</span>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#071A33", marginBottom: "12px" }}>
                {selectedProject.title}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.6, marginBottom: "24px" }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: "24px" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#071A33", marginBottom: "12px" }}>
                  Key Engineering Specifications:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedProject.architecturalFeatures.map((feat, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "#071A33" }}>
                      <Check size={16} style={{ color: "#087FEA", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "rgba(8, 127, 234, 0.05)", border: "1px solid rgba(8, 127, 234, 0.2)", padding: "18px", borderRadius: "6px", marginBottom: "24px" }}>
                <div style={{ display: "flex", gap: "4px", color: "#087FEA", marginBottom: "8px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#087FEA" />
                  ))}
                </div>
                <p style={{ fontStyle: "italic", color: "#071A33", fontSize: "0.92rem", margin: "0 0 6px 0" }}>
                  "{selectedProject.clientReview}"
                </p>
                <div style={{ fontSize: "0.8rem", color: "#087FEA", fontWeight: 700 }}>
                  — {selectedProject.clientAuthor}
                </div>
              </div>

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
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


