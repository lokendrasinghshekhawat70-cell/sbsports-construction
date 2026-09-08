import React from "react";
import { 
  Home, 
  Building2, 
  Compass, 
  Hammer, 
  Layers, 
  Leaf, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Wrench,
  Sparkles
} from "lucide-react";

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      id: "residential",
      title: "Bespoke Luxury Villas & Private Estates",
      category: "Turnkey Residential",
      icon: Home,
      description: "Complete turnkey design and engineering for architect-designed modern residences, cantilevered contemporary villas, and multi-generational family compounds.",
      highlights: [
        "100% Custom 3D BIM & VR Architectural Plans",
        "Seismic-Resistant Reinforced Concrete Superstructure",
        "Imported Italian Marble & Custom Fluted Millwork",
        "15-Year Comprehensive Structural Warranty"
      ],
      startingFrom: "$145 / sq ft",
      badge: "Turnkey EPC"
    },
    {
      id: "commercial",
      title: "Commercial Campuses & Corporate Hubs",
      category: "Commercial & Mixed-Use",
      icon: Building2,
      description: "Grade-A corporate office towers, tech headquarters, and retail facilities engineered for high foot traffic, acoustic isolation, and LEED Platinum certification.",
      highlights: [
        "Curved Double-Glazed Parametric Curtain Walls",
        "Industrial Central VRF HVAC & Smoke Dampers",
        "LEED Gold / Platinum Net-Zero Energy Compliance",
        "Phased Handover for Fast Tenant Occupancy"
      ],
      startingFrom: "$180 / sq ft",
      badge: "Commercial Grade"
    },
    {
      id: "renovation",
      title: "Full Interior Re-Engineering & Remodeling",
      category: "Renovation & Redesign",
      icon: Hammer,
      description: "High-end structural modifications for penthouses and estates. We remove load-bearing walls, install waterfall marble islands, and integrate smart lighting.",
      highlights: [
        "Non-Load Bearing Wall Demolition & Steel Lintels",
        "Book-Matched Calacatta Marble Waterfall Kitchens",
        "Whole-Home Acoustic Underlay & Concealed Ducts",
        "100% Dust-Free Protocol with HEPA Air Scrubbers"
      ],
      startingFrom: "$95 / sq ft",
      badge: "Fast Turnaround"
    },
    {
      id: "structural",
      title: "Civil Foundations & Geotechnical Engineering",
      category: "Heavy Civil & Foundations",
      icon: Layers,
      description: "Sub-surface soil boring, micropile deep foundations, retaining shoring walls, and licensed Professional Engineer (PE) structural audit stamps.",
      highlights: [
        "Core Soil Drilling & Plate Load Bearing Tests",
        "Deep Bored Micropiles & Post-Tensioned Slabs",
        "Carbon-Fiber Wrapping & Seismic Retrofitting",
        "Licensed Professional Engineer (PE) Stamped Sign-off"
      ],
      startingFrom: "$80 / sq ft",
      badge: "Safety Certified"
    },
    {
      id: "architecture",
      title: "3D BIM Blueprints & Permitting Clearance",
      category: "Design & Municipal Approvals",
      icon: Compass,
      description: "Cinematic 4K photorealistic exterior and interior renders, immersive VR walkthroughs, MEP CAD blueprints, and expedited city council approvals.",
      highlights: [
        "Ultra-HD 4K Renders & Virtual Reality Walkthroughs",
        "Complete Structural, MEP & Plumbing Blueprints",
        "100% Municipal Council Bylaw & Zoning Clearance",
        "Passive Solar & Natural Cross-Ventilation Studies"
      ],
      startingFrom: "Custom Blueprints",
      badge: "3D Visualization"
    },
    {
      id: "green",
      title: "Net-Zero Sustainable & Solar Eco-Building",
      category: "Green Technology",
      icon: Leaf,
      description: "Self-sustaining construction featuring rooftop solar microgrids, rainwater recycling, ultra-high R-value thermal envelope, and low-carbon cement.",
      highlights: [
        "Up to 75% Permanent Reduction in Electric Bills",
        "Integrated Solar Photovoltaic Grid with Battery Storage",
        "Sub-surface Rainwater Filtration & Greywater Systems",
        "Eligible for Federal & State Green Building Rebates"
      ],
      startingFrom: "Eco Spec",
      badge: "Net-Zero Ready"
    }
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Wrench size={15} />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="section-title">
            Engineered For Excellence, <br />
            <span className="text-gradient-amber">Built For Generations</span>
          </h2>
          <p className="section-subtitle">
            Whether you are building your dream family home or scaling a multi-million dollar commercial center, our certified teams deliver turnkey precision from groundbreaking to handover.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="feature-card service-card">
                <div className="service-card-top">
                  <div className="feature-icon-wrapper">
                    <Icon size={26} />
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
                    <span className="pricing-label">Starting From</span>
                    <span className="pricing-value">{service.startingFrom}</span>
                  </div>
                  <button 
                    onClick={() => onSelectService(service.title)}
                    className="service-action-btn"
                    title={`Inquire about ${service.title}`}
                  >
                    <span>Request Service</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
