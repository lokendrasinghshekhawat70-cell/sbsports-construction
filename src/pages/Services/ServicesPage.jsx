import React, { useState } from "react";
import "./Services.css";
import { 
  Home, 
  Building2, 
  Tractor, 
  FileText, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck, 
  Layers, 
  Hammer,
  Clock,
  HelpCircle,
  PhoneCall
} from "lucide-react";
import ManobhavBanner from "../../components/ManobhavBanner";

export default function ServicesPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  // STRICTLY only the details present in the picture:
  const services = [
    {
      id: "residential-house",
      title: "Residential House & Home Construction",
      category: "residential",
      categoryName: "Residential Development",
      icon: Home,
      startingPrice: "Turnkey House Spec",
      timeline: "6 - 9 Months",
      warranty: "Brick-by-Brick Warranty",
      image: "/images/roofing_structure.jpg",
      description: "Full residential 2-story home construction featuring high-pitch architectural roof shingles, multiple dormers, premium siding, and craftsmen carpentry shown on the left side of the picture.",
      scope: [
        "Two-story residential custom home building",
        "High-pitch architectural roof shingle installation",
        "Exterior siding, trim, dormers and weatherproofing",
        "Full turnkey residential handover: from foundation to finishing"
      ],
      materials: "Premium Architectural Shingles, Structural Wall Studs, Weather Barrier, Hardwood Trusses",
      faq: "Can you build on our custom plot? Yes, our residential team handles full site preparation, framing, roofing, and turnkey handover."
    },
    {
      id: "timber-framing",
      title: "Timber Framing & Structural Wood Carpentry",
      category: "residential",
      categoryName: "Residential Development",
      icon: Hammer,
      startingPrice: "Framing Spec",
      timeline: "3 - 5 Months",
      warranty: "Structural Wood Warranty",
      image: "/images/timber_structure.jpg",
      description: "Heavy timber structural framing, roof trusses, wall studs, beams, and on-site carpentry executed by skilled workers as displayed in the central building frame.",
      scope: [
        "Complete wood skeleton & timber stud framing",
        "Engineered roof rafters, trusses, and load-bearing framing",
        "Subfloor joist installation and structural shear bracing",
        "On-site master carpentry and timber fitting"
      ],
      materials: "Kiln-Dried Structural Lumber, Heavy-Duty Timber Trusses, Hurricane Ties & Fasteners",
      faq: "Are timber frames structurally durable? Yes, engineered timber frames meet rigorous structural load standards and offer superior thermal efficiency."
    },
    {
      id: "commercial-highrise",
      title: "Commercial Multi-Story Concrete Buildings",
      category: "commercial",
      categoryName: "Commercial Projects",
      icon: Building2,
      startingPrice: "Commercial Grade Spec",
      timeline: "12 - 18 Months",
      warranty: "Commercial Engineering Warranty",
      image: "/images/concrete_structure.jpg",
      description: "Multi-level commercial buildings engineered with reinforced concrete floor slabs, exterior safety scaffolding, protective netting, and modern urban glass facade integration.",
      scope: [
        "Multi-story reinforced concrete cast-in-place columns and slabs",
        "Perimeter scaffolding, safety containment netting & hoist lifts",
        "Commercial floor layout, structural engineering & load calculation",
        "High-rise commercial facilities and corporate urban developments"
      ],
      materials: "High-Strength Ready-Mix Concrete, High-Tensile Steel Rebar, Structural Formwork",
      faq: "How do you manage site safety on tall buildings? We enforce strict perimeter scaffolding, safety netting, and mandatory hard hat compliance at all times."
    },
    {
      id: "crane-operations",
      title: "Tower Crane Operations & Heavy Material Hoisting",
      category: "commercial",
      categoryName: "Commercial Projects",
      icon: Layers,
      startingPrice: "Heavy Crane Spec",
      timeline: "Project Duration",
      warranty: "Rigging Safety Certified",
      image: "/images/crane_structure.jpg",
      description: "Yellow tower crane operations for vertical material transport, structural steel hoisting, concrete bucket placement, and high-altitude assembly shown in the picture skyline.",
      scope: [
        "Heavy-duty yellow tower crane deployment and site positioning",
        "High-altitude concrete and rebar lifting operations",
        "Rigorous crane operator certifications and daily rigging checks",
        "Coordinated commercial building vertical logistics"
      ],
      materials: "Certified Heavy Steel Rigging, High-Capacity Winches, Anti-Collision Systems",
      faq: "Can the tower crane handle heavy concrete pours? Yes, industrial tower cranes handle heavy concrete skips, steel beams, and structural prefabricated elements with precision."
    },
    {
      id: "infrastructure-earthworks",
      title: "Infrastructure Works & Hydraulic Excavation",
      category: "infrastructure",
      categoryName: "Infrastructure Works",
      icon: Tractor,
      startingPrice: "Infrastructure Spec",
      timeline: "1 - 3 Months",
      warranty: "Civil Groundwork Warranty",
      image: "/images/excavation_structure.jpg",
      description: "Heavy yellow hydraulic excavator earthmoving, groundwork leveling, trenching, soil clearing, and civil preparation for heavy foundations as shown on site.",
      scope: [
        "Heavy hydraulic excavator digging, trenching & bulk earthmoving",
        "Site leveling, rough grading, and rubble clearing",
        "Foundation trenching and subgrade compaction",
        "Site civil infrastructure and groundwork drainage"
      ],
      materials: "Engineered Subbase, Crushed Stone Aggregates, Geotextile Fabric, Compaction Soil",
      faq: "What machinery is utilized? Heavy hydraulic tracked excavators, diggers, and compaction equipment for robust subgrade stability."
    },
    {
      id: "blueprints-safety",
      title: "Blueprints & Safety Hard Hat Standards",
      category: "blueprints",
      categoryName: "Blueprints & Safety",
      icon: FileText,
      startingPrice: "Engineering Plan Spec",
      timeline: "Continuous Quality Protocol",
      warranty: "Zero Compromise Standards",
      image: "/images/blueprint_structure.jpg",
      description: "Detailed architectural blueprints rolled out on site, paired with strict yellow safety helmet protocols and brick-by-brick structural foundation engineering.",
      scope: [
        "Detailed architectural blueprints and construction site schematics",
        "Mandatory yellow safety hard hat protocols and PPE enforcement",
        "Brick stacks & brick-by-brick foundation structural masonry",
        "Continuous on-site supervision from blueprint to final handover"
      ],
      materials: "Precision Blueprint Cad Drawings, Certified Safety Hard Hats, Solid Clay Masonry Bricks",
      faq: "Why is the hard hat protocol emphasized? Site safety is our highest priority, ensuring every worker and engineer operates in zero-accident conditions."
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="services-page-container">
      {/* Top Banner Hero */}
      <section className="services-hero-banner" style={{ background: "linear-gradient(180deg, #091932 0%, #0D264F 100%)", padding: "60px 0 40px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero-badge animate-float" style={{ margin: "0 auto 16px auto", background: "#DC2626", color: "#FFF" }}>
            <Sparkles size={16} style={{ color: "#FFFFFF" }} />
            <span>MANOBHAV CONSTRUCTION</span>
          </div>
          
          <h1 className="services-page-title" style={{ color: "#F8FAFC", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900 }}>
            HOUSE & BUILDING CONSTRUCTION
          </h1>

          <p style={{ color: "#FFFFFF", fontSize: "1.2rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", margin: "10px 0 20px 0" }}>
            BUILDING YOUR DREAMS, BRICK BY BRICK
          </p>

          <p className="services-page-subtitle" style={{ maxWidth: "780px", margin: "0 auto", color: "#CBD5E1" }}>
            Every discipline below is directly taken from the official picture details: Residential Development, Commercial Projects, Infrastructure Works, and on-site Blueprint & Hard Hat safety standards.
          </p>

          {/* Picture Banner Mini Preview */}
          <div style={{ maxWidth: "680px", margin: "32px auto 0 auto" }}>
            <ManobhavBanner onOpenQuote={onOpenQuote} />
          </div>
        </div>
      </section>

      {/* Tabs Filter Bar */}
      <div className="services-nav-bar">
        <div className="container">
          <div className="services-tabs-list">
            <button 
              className={`services-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Disciplines
            </button>
            <button 
              className={`services-tab-btn ${activeTab === "residential" ? "active" : ""}`}
              onClick={() => setActiveTab("residential")}
            >
              <Home size={15} /> Residential Development
            </button>
            <button 
              className={`services-tab-btn ${activeTab === "commercial" ? "active" : ""}`}
              onClick={() => setActiveTab("commercial")}
            >
              <Building2 size={15} /> Commercial Projects
            </button>
            <button 
              className={`services-tab-btn ${activeTab === "infrastructure" ? "active" : ""}`}
              onClick={() => setActiveTab("infrastructure")}
            >
              <Tractor size={15} /> Infrastructure Works
            </button>
            <button 
              className={`services-tab-btn ${activeTab === "blueprints" ? "active" : ""}`}
              onClick={() => setActiveTab("blueprints")}
            >
              <FileText size={15} /> Blueprints & Safety
            </button>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <section className="section-padding services-main-content">
        <div className="container">
          <div className="services-deep-grid">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-deep-card" style={{ overflow: "hidden" }}>
                  <div className="deep-card-top-accent" />
                  
                  <div style={{ width: "100%", height: "125px", overflow: "hidden", position: "relative" }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                    <span className="badge-gold" style={{ position: "absolute", bottom: "10px", left: "12px", background: "rgba(15,23,42,0.85)" }}>
                      Active Structure Photo
                    </span>
                  </div>

                  <div className="deep-card-body">
                    <div className="deep-card-header">
                      <div className="deep-icon-box">
                        <Icon size={26} />
                      </div>
                      <span className="badge-gold deep-badge">
                        {service.categoryName}
                      </span>
                    </div>

                    <h2 className="deep-card-title">{service.title}</h2>
                    <p className="deep-card-description">{service.description}</p>

                    {/* Scope Checklist */}
                    <div className="deep-scope-section">
                      <h3 className="deep-section-label">Discipline Scope:</h3>
                      <ul className="deep-scope-list">
                        {service.scope.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} className="text-amber" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div className="deep-specs-row">
                      <div className="deep-spec-item">
                        <span className="spec-label">Timeline</span>
                        <span className="spec-val">{service.timeline}</span>
                      </div>
                      <div className="deep-spec-item">
                        <span className="spec-label">Safety</span>
                        <span className="spec-val">Hard Hat Protocol</span>
                      </div>
                      <div className="deep-spec-item">
                        <span className="spec-label">Standard</span>
                        <span className="spec-val">Brick by Brick</span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="deep-card-actions">
                      <button 
                        onClick={() => onOpenQuote(service.title)}
                        className="btn btn-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        <span>Inquire About {service.categoryName}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
