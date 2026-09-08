import React, { useState } from "react";
import "./Services.css";
import { 
  Home, 
  Building2, 
  Hammer, 
  Layers, 
  Compass, 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  FileText,
  Clock,
  HelpCircle,
  PhoneCall
} from "lucide-react";

export default function ServicesPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  const services = [
    {
      id: "residential",
      title: "Bespoke Luxury Villas & Private Estates",
      category: "residential",
      categoryName: "Residential",
      icon: Home,
      startingPrice: "$145 / sq. ft.",
      timeline: "6 - 9 Months",
      warranty: "15-Year Structural PE Warranty",
      image: "/images/villa.jpg",
      description: "Complete turnkey EPC execution of custom architectural residences, cantilevered contemporary villas, and private multi-acre family compounds tailored to your lifestyle.",
      scope: [
        "Architectural 3D BIM modeling, virtual reality walkthroughs & zoning permits",
        "Geotechnical core drilling, raft footing & Fe-550D earthquake-resistant rebar",
        "Post-tensioned suspended slabs & acoustic soundproof internal masonry",
        "Book-matched Italian Statuario marble, custom walnut millwork & concealed LED coves",
        "Whole-home smart automation, Daikin VRV climate control & low-E acoustic glazing"
      ],
      materials: "TMT Fe-550D Rebar, M35 Certified Ready-Mix Concrete, Saint-Gobain Low-E Double Glazing",
      faq: "How long does a 6,000 sq ft custom residence take? Typically 7 to 8 months from groundbreaking to final white-glove handover."
    },
    {
      id: "commercial",
      title: "Commercial Campuses & Corporate Hubs",
      category: "commercial",
      categoryName: "Commercial",
      icon: Building2,
      startingPrice: "$180 / sq. ft.",
      timeline: "10 - 16 Months",
      warranty: "15-Year Structural Guarantee",
      image: "/images/commercial.jpg",
      description: "State-of-the-art office towers, retail complexes, and commercial innovation hubs engineered for massive foot traffic, acoustic comfort, and stringent safety standards.",
      scope: [
        "Parametric double-curved acoustic glass facade engineering",
        "Deep basement piling, composite steel deck slabs & high-speed elevator cores",
        "Centralized VRF industrial HVAC, smoke extraction & automated dry-pipe fire suppression",
        "LEED Gold / Platinum net-zero building certification compliance",
        "Phased commercial handover enabling early tenant fit-outs and occupancy"
      ],
      materials: "High-Strength Structural Steel (ASTM A992), Saint-Gobain Acoustic Glass, Fire-Retardant Cladding",
      faq: "Can we build in phases while using part of the property? Yes, our phased delivery protocol enables safe early tenant occupancy."
    },
    {
      id: "renovation",
      title: "Full Interior Re-Engineering & Remodeling",
      category: "renovation",
      categoryName: "Renovation",
      icon: Hammer,
      startingPrice: "$95 / sq. ft.",
      timeline: "6 - 12 Weeks",
      warranty: "5-Year Comprehensive Warranty",
      image: "/images/renovation.jpg",
      description: "Reinvent outdated layouts into bright, expansive architectural pavilions featuring Calacatta marble waterfall islands, luxury spa bathrooms, and fluted paneling.",
      scope: [
        "Non-load bearing wall removal and steel beam lintel installation",
        "Custom book-matched Calacatta marble waterfall kitchen islands with integrated induction",
        "Complete plumbing overhaul, copper rewiring and concealed linear HVAC diffuser slots",
        "Acoustic cork underlayment with wide-plank European white oak hardwood",
        "Dust-free isolation protocol with negative air HEPA filtration units"
      ],
      materials: "Calacatta Quartzite, European White Oak, Miele & Sub-Zero Appliance Integration",
      faq: "Will the renovation create dust in the rest of the house? We utilize industrial zip-walls and negative air HEPA filtration systems to ensure a dust-free site."
    },
    {
      id: "structural",
      title: "Civil Foundations & Geotechnical Engineering",
      category: "engineering",
      categoryName: "Civil Engineering",
      icon: Layers,
      startingPrice: "$80 / sq. ft.",
      timeline: "3 - 6 Months",
      warranty: "20-Year Substructure Guarantee",
      image: "/images/hero.jpg",
      description: "Geotechnical foundation engineering, deep micropile drilling, structural load calculations, and licensed Professional Engineer (PE) stamped certifications.",
      scope: [
        "Geotechnical core boring, soil shear testing and seismic zone assessment",
        "Deep bored cast-in-situ concrete piles and reinforced earth retaining walls",
        "Seismic retrofitting, carbon-fiber column wrapping and load redistribution",
        "Licensed Professional Engineer (PE) structural audit stamped drawings",
        "Digital laser-level slab deflection and long-term settlement monitoring"
      ],
      materials: "Micro-fine Cement Grout, High-Grade Epoxy Rebar, Anti-Corrosive Waterproof Membranes",
      faq: "Do you handle city structural permits? Yes, our licensed civil engineers take care of 100% of municipal permit submissions."
    },
    {
      id: "architecture",
      title: "3D BIM Blueprints & Permitting Clearance",
      category: "design",
      categoryName: "3D Blueprints",
      icon: Compass,
      startingPrice: "Custom Blueprints",
      timeline: "3 - 5 Weeks",
      warranty: "100% Code Clearance Guarantee",
      image: "/images/villa.jpg",
      description: "Ultra-photorealistic 4K 3D visualizations, virtual reality walkthroughs, Building Information Modeling (BIM), and municipal approval blueprints.",
      scope: [
        "Conceptual spatial layout, sun trajectory study & airflow simulation",
        "Cinematic 4K exterior and interior architectural CGI renders",
        "Interactive virtual reality 3D walkthrough experience for clients",
        "Full MEP, electrical distribution, structural & plumbing CAD blueprint sets",
        "Municipal zoning bylaw compliance, fire clearance & permit submissions"
      ],
      materials: "Autodesk Revit BIM 3D Models, Lumion 4K Photorealistic Visuals, Civil 3D",
      faq: "Can we modify the 3D design before breaking ground? Yes, we provide unlimited design revisions during the architectural 3D phase."
    },
    {
      id: "green",
      title: "Net-Zero Sustainable & Solar Eco-Building",
      category: "green",
      categoryName: "Eco Building",
      icon: Leaf,
      startingPrice: "Eco Spec",
      timeline: "Standard Build",
      warranty: "15-Year Green Energy Warranty",
      image: "/images/commercial.jpg",
      description: "Energy-efficient construction with integrated solar roofing, rainwater harvesting, ultra-high R-value thermal envelope, and non-toxic low-VOC finishes.",
      scope: [
        "Net-zero solar photovoltaic grid tie-in with commercial battery storage",
        "Underground rainwater filtration & greywater plumbing for landscape irrigation",
        "Triple-glazed argon-filled thermal acoustic window systems",
        "Passive solar ventilation & automated smart climate energy management",
        "Government green energy rebate & tax credit compliance documentation"
      ],
      materials: "Recycled Structural Steel, Low-Carbon Eco-Cement, Zero-VOC Non-Toxic Finishes",
      faq: "How much can green construction reduce utility bills? Up to 75% reduction in monthly electricity, heating, and cooling costs."
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="services-page-wrapper">
      {/* Page Header Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Turnkey Engineering & Contracting</span>
          </div>
          <h1 className="page-main-title">
            Our Construction & Architectural <span className="text-gradient-amber">Services</span>
          </h1>
          <p className="page-main-subtitle">
            Every project is executed under the supervision of licensed civil engineers with fixed-price contracts, 10-year structural warranties, and real-time daily progress tracking.
          </p>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "residential", label: "Luxury Residential" },
              { id: "commercial", label: "Commercial" },
              { id: "renovation", label: "Renovations" },
              { id: "engineering", label: "Civil Engineering" },
              { id: "design", label: "3D Blueprints" }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`srv-tab-btn ${activeTab === tab.id ? "srv-tab-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container srv-cards-container">
        <div className="srv-grid-layout">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="srv-detailed-card glass-card">
                <div className="srv-card-top-row">
                  <div className="srv-icon-badge">
                    <Icon size={26} />
                  </div>
                  <span className="badge-gold">{service.categoryName}</span>
                </div>

                <h3 className="srv-card-title">{service.title}</h3>
                <p className="srv-card-description">{service.description}</p>

                {/* Key Spec Badges */}
                <div className="srv-meta-badges">
                  <div className="srv-meta-pill">
                    <Clock size={13} className="text-amber" />
                    <span>Timeline: <strong>{service.timeline}</strong></span>
                  </div>
                  <div className="srv-meta-pill">
                    <ShieldCheck size={13} className="text-green" />
                    <span>{service.warranty}</span>
                  </div>
                </div>

                {/* Scope Highlights */}
                <div className="srv-scope-box">
                  <div className="srv-scope-label">Key Deliverables Included:</div>
                  <ul className="srv-scope-list">
                    {service.scope.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="text-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="srv-card-bottom">
                  <div className="srv-pricing-info">
                    <span className="srv-pricing-label">Starting Price</span>
                    <span className="srv-pricing-val">{service.startingPrice}</span>
                  </div>
                  <div className="srv-card-actions">
                    <button 
                      onClick={() => onOpenQuote(service.title)}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Banner */}
        <div className="srv-qa-banner glass-card">
          <div className="srv-qa-icon-wrap">
            <ShieldCheck size={36} className="text-amber" />
          </div>
          <div className="srv-qa-content">
            <h3>Licensed General Contractor Guarantee</h3>
            <p>Every single project is managed by certified Professional Engineers (PE) adhering to ISO 9001:2015 quality standards with zero tolerance for material compromise.</p>
          </div>
          <button onClick={() => onOpenQuote("General Inquiry")} className="btn btn-secondary">
            <PhoneCall size={16} />
            <span>Consult an Engineer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
