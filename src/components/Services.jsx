import React from "react";
import {
  Home,
  Building2,
  Tractor,
  FileText,
  HardHat,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Hammer
} from "lucide-react";

export default function Services({ onSelectService }) {
  // STRICTLY only the details present in the picture:
  const servicesList = [
    {
      id: "residential-house",
      title: "Residential Development & House Construction",
      category: "Picture Detail: Left Side",
      icon: Home,
      description: "Complete house construction featuring high-pitch architectural roof shingles, multiple dormer windows, exterior siding, and custom residential finishes as shown on site.",
      highlights: [
        "Two-Story Residential Home Construction",
        "High-Pitch Roof Shingle Installation & Siding",
        "Turnkey Residential Development from Ground Up",
        "Building Your Dreams, Brick by Brick"
      ],
      startingFrom: "Residential Spec",
      badge: "Picture Detail",
      image: "/images/roofing_structure.jpg"
    },
    {
      id: "timber-framing",
      title: "Timber Framing & Structural Woodwork",
      category: "Picture Detail: Center Frame",
      icon: Hammer,
      description: "Heavy timber structural framing, roof trusses, wall studs, beams, and on-site carpentry executed by skilled workers as displayed in the central building frame.",
      highlights: [
        "Complete Wood Skeleton & Timber Wall Studs",
        "Roof Rafters, Trusses & Structural Load Paths",
        "Precision Carpentry & Structural Framing Integrity",
        "Certified Safe Framing Construction"
      ],
      startingFrom: "Framing Spec",
      badge: "Picture Detail",
      image: "/images/timber_structure.jpg"
    },
    {
      id: "commercial-highrise",
      title: "Commercial Projects & Multi-Story Buildings",
      category: "Picture Detail: Right Side",
      icon: Building2,
      description: "Reinforced concrete commercial high-rises engineered with heavy floor slabs, exterior safety scaffolding, protective netting, and modern urban glass facade integration.",
      highlights: [
        "Multi-Story Reinforced Concrete Superstructures",
        "Exterior Construction Scaffolding & Safety Netting",
        "Commercial Grade Floor Slabs & Column Pouring",
        "High-Rise Commercial Facilities & Urban Towers"
      ],
      startingFrom: "Commercial Grade",
      badge: "Picture Detail",
      image: "/images/concrete_structure.jpg"
    },
    {
      id: "crane-operations",
      title: "Tower Crane & Heavy Structural Lifting",
      category: "Picture Detail: Sky Crane",
      icon: Layers,
      description: "Industrial yellow tower crane operations for vertical material transport, structural steel hoisting, and high-altitude commercial building assembly.",
      highlights: [
        "Heavy-Duty Yellow Tower Crane Deployment",
        "Vertical Steel & Concrete Material Hoisting",
        "High-Altitude Rigging & Rigorous Safety Protocols",
        "Precision Commercial Lifting Operations"
      ],
      startingFrom: "Heavy Lifting",
      badge: "Picture Detail",
      image: "/images/crane_structure.jpg"
    },
    {
      id: "infrastructure-earthworks",
      title: "Infrastructure Works & Hydraulic Excavation",
      category: "Picture Detail: Midground Machinery",
      icon: Tractor,
      description: "Heavy yellow hydraulic excavator earthmoving, groundwork leveling, trenching, soil clearing, and civil preparation for heavy foundations.",
      highlights: [
        "Hydraulic Excavator & Earthmoving Operations",
        "Site Grading, Deep Trenching & Soil Preparation",
        "Foundation Excavation & Subgrade Compaction",
        "Heavy Civil Infrastructure Development"
      ],
      startingFrom: "Infrastructure Spec",
      badge: "Picture Detail",
      image: "/images/excavation_structure.jpg"
    },
    {
      id: "blueprints-safety",
      title: "Blueprints & Safety Hard Hat Standards",
      category: "Picture Detail: Foreground Planning Table",
      icon: FileText,
      description: "Detailed architectural blueprints rolled out on site, paired with strict yellow safety helmet protocols and brick-by-brick structural foundation engineering.",
      highlights: [
        "Precision Architectural Blueprints & Drafting",
        "Mandatory Yellow Hard Hat & Site Safety Protocols",
        "Brick Stacks & Solid Structural Masonry",
        "Flawless Execution from Plan to Handover"
      ],
      startingFrom: "Blueprint Spec",
      badge: "Picture Detail",
      image: "/images/blueprint_structure.jpg"
    }
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: "center" }}>
          <div className="section-pill" style={{ margin: "0 auto 12px auto" }}>
            <Sparkles size={15} style={{ color: "#0F172A" }} />
            <span>Picture Construction Disciplines</span>
          </div>
          <h2 className="section-title">
            HOUSE & BUILDING CONSTRUCTION <br />
            <span className="text-gradient-amber">Building Your Dreams, Brick By Brick</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "760px", margin: "0 auto" }}>
            Every discipline below is directly derived from the official <strong>SB SPORTS & CONSTRUCTION</strong> portfolio: Residential Development, Commercial Projects, Infrastructure Works, and precision Blueprint & Safety Standards.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="feature-card service-card" style={{ overflow: "hidden", padding: 0 }}>
                {/* Working Construction Structure Photo */}
                <div style={{ width: "100%", height: "180px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <span className="badge-gold" style={{ position: "absolute", bottom: "10px", left: "12px", background: "rgba(15,23,42,0.85)" }}>
                    <Sparkles size={11} /> Active Structure
                  </span>
                </div>

                <div style={{ padding: "20px" }}>
                  <div className="service-card-top">
                    <div className="feature-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    {service.badge && (
                      <span className="badge-gold service-badge">
                        <Sparkles size={12} /> {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="service-category">{service.category}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  {/* Highlights list */}
                  <div className="service-highlights">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="service-highlight-item">
                        <Check size={14} className="text-amber" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="service-card-footer">
                    <div className="service-pricing">
                      <span className="pricing-label">Scope</span>
                      <span className="pricing-value" style={{ fontSize: "0.88rem" }}>{service.startingFrom}</span>
                    </div>
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="service-action-btn"
                      title={`Inquire about ${service.title}`}
                    >
                      <span>Inquire Discipline</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
