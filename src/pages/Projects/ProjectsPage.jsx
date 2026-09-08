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
  Layers
} from "lucide-react";

export default function ProjectsPage({ onBookConsultation }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "p1",
      title: "The Cascades Glass & Basalt Villa",
      category: "residential",
      categoryName: "Luxury Residential",
      location: "Hillside Ridge Estates, Plot 42",
      area: "7,200 sq ft",
      timeline: "8 Months (Delivered 3 Weeks Early)",
      image: "/images/villa.jpg",
      description: "A cantilevered architectural residence engineered into natural granite topography, featuring floor-to-ceiling Saint-Gobain Low-E acoustic glass, floating post-tensioned concrete balconies, natural teak louvers, and a heated saltwater infinity pool.",
      architecturalFeatures: [
        "Floor-to-ceiling thermal acoustic glass walls",
        "Cantilevered post-tensioned concrete roof slabs",
        "Saltwater infinity pool with perimeter overflow gutter",
        "Integrated Lutron whole-home automation & circadian lighting"
      ],
      clientReview: "ApexBuild completed our custom hillside estate with zero budget variations. Their online live tracker let us follow every milestone while we were living overseas.",
      clientAuthor: "David & Dr. Eleanor Vance — Homeowners"
    },
    {
      id: "p2",
      title: "Aura Tech Center & Glass Atrium",
      category: "commercial",
      categoryName: "Commercial Complex",
      location: "Metro Financial Tech Corridor",
      area: "58,000 sq ft",
      timeline: "14 Months (Guaranteed Milestone Delivery)",
      image: "/images/commercial.jpg",
      description: "A 10-story commercial headquarters featuring double-curved parametric solar-reflective curtain walls, a 5-story central glass atrium with indoor bio-walls, and LEED Platinum net-zero energy design.",
      architecturalFeatures: [
        "Curved parametric double-glazed solar-control facade",
        "Heavy structural steel core with seismic dampening dampers",
        "Rooftop solar microgrid producing 180 kW daily power",
        "Industrial VRF multi-zone HVAC with HEPA-grade air scrubbing"
      ],
      clientReview: "The most disciplined and transparent commercial general contractor we have engaged across seven regional office projects.",
      clientAuthor: "Rachel Sterling — VP of Infrastructure, Aura Global"
    },
    {
      id: "p3",
      title: "The Penthouse Horizon Overhaul",
      category: "renovation",
      categoryName: "Interior Remodeling",
      location: "Grand Central Skyline District",
      area: "3,600 sq ft",
      timeline: "9 Weeks (Dust-Free HEPA Protocol)",
      image: "/images/renovation.jpg",
      description: "Complete structural wall demolition and load redistribution creating an uninterrupted open-concept living space with a 16-foot waterfall Statuario marble island, acoustic European oak fluting, and hidden pocket doors.",
      architecturalFeatures: [
        "Seamless book-matched Italian Statuario marble island",
        "Custom acoustic fluted white-oak wall cladding",
        "Integrated Miele & Sub-Zero smart kitchen appliances",
        "Architectural recessed warm 2700K cove LED lighting"
      ],
      clientReview: "They converted an outdated 1995 floor plan into a world-class architectural masterpiece in under 10 weeks without disturbing a single neighbor.",
      clientAuthor: "Julian & Claire Montgomery — Penthouse Owners"
    },
    {
      id: "p4",
      title: "Metropolitan Sky Residences & Deck",
      category: "commercial",
      categoryName: "High-Rise Engineering",
      location: "Downtown Metropolitan Plaza",
      area: "92,000 sq ft",
      timeline: "18 Months (Phased EPC Delivery)",
      image: "/images/hero.jpg",
      description: "High-rise civil and structural engineering project featuring deep rock-socketed micropile foundations, post-tensioned elevator core shafts, and a cantilevered 360-degree observation deck.",
      architecturalFeatures: [
        "Deep micropile rock-socketed foundation anchoring",
        "Post-tensioned composite concrete and steel decking",
        "High-wind structural aerodynamics & seismic shear walls",
        "Automated fire suppression & dual redundant backup power"
      ],
      clientReview: "Their engineering diligence, daily inspection logs, and zero-accident safety record on this high-rise build were truly best-in-class.",
      clientAuthor: "Vanguard Asset Management & Development Partners"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <div className="projects-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <Building size={14} />
            <span>Masterpiece Portfolio</span>
          </div>
          <h1 className="page-main-title">
            Completed Projects & <span className="text-gradient-amber">Case Studies</span>
          </h1>
          <p className="page-main-subtitle">
            Explore our recently completed custom residences, modern corporate headquarters, and luxury interior transformations.
          </p>

          <div className="portfolio-filters">
            {[
              { id: "all", label: "All Projects" },
              { id: "residential", label: "Luxury Residential" },
              { id: "commercial", label: "Commercial Hubs" },
              { id: "renovation", label: "Renovations" }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-btn ${filter === tab.id ? "filter-btn-active" : ""}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay" />
                <span className="project-badge">{project.categoryName}</span>
                <div className="project-quick-expand">
                  <Maximize2 size={16} />
                  <span>View Details</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-location-row">
                  <MapPin size={13} className="text-amber" />
                  <span>{project.location}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-short-desc">{project.description}</p>

                <div className="project-card-stats">
                  <div className="proj-stat">
                    <span className="stat-p-val">{project.area}</span>
                    <span className="stat-p-label">Built Area</span>
                  </div>
                  <div className="proj-divider" />
                  <div className="proj-stat">
                    <span className="stat-p-val">{project.timeline.split(" ")[0]} {project.timeline.split(" ")[1]}</span>
                    <span className="stat-p-label">Duration</span>
                  </div>
                  <div className="proj-divider" />
                  <div className="proj-stat">
                    <span className="stat-p-val text-green">100% On-Time</span>
                    <span className="stat-p-label">Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-img-banner">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-img-overlay" />
                <div className="modal-badge-float">{selectedProject.categoryName}</div>
              </div>

              <div className="modal-body-content">
                <div className="modal-meta-bar">
                  <span><MapPin size={14} className="text-amber" /> {selectedProject.location}</span>
                  <span><Calendar size={14} className="text-amber" /> {selectedProject.timeline}</span>
                  <span><strong>Area:</strong> {selectedProject.area}</span>
                </div>

                <h3 className="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-project-desc">{selectedProject.description}</p>

                <div className="modal-features-box">
                  <h4>Key Architectural & Engineering Highlights</h4>
                  <div className="modal-features-grid">
                    {selectedProject.architecturalFeatures.map((feat, i) => (
                      <div key={i} className="modal-feat-item">
                        <Check size={14} className="text-amber" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-testimonial-box">
                  <div className="testi-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="testi-quote">"{selectedProject.clientReview}"</p>
                  <div className="testi-author">{selectedProject.clientAuthor}</div>
                </div>

                <div className="modal-action-row">
                  <button 
                    onClick={() => {
                      const proj = selectedProject;
                      setSelectedProject(null);
                      onBookConsultation(proj.title);
                    }}
                    className="btn btn-primary"
                  >
                    <span>Request Similar Project Quote</span>
                    <ArrowUpRight size={17} />
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
