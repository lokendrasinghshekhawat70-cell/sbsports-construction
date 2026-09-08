import React, { useState } from "react";
import "./LiveTracker.css";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  FileCheck, 
  MapPin, 
  Phone, 
  Camera, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Calendar
} from "lucide-react";

export default function LiveTrackerPage() {
  const [projectIdInput, setProjectIdInput] = useState("BLD-9042");
  const [searchedId, setSearchedId] = useState("BLD-9042");

  const sampleProjects = {
    "BLD-9042": {
      name: "The Highland Glass & Basalt Residence",
      type: "Custom Cantilevered Villa (5,800 sq ft)",
      location: "Hillside Ridge Estates, Plot 42",
      startDate: "April 10, 2026",
      estimatedHandover: "December 18, 2026",
      progressPercent: 76,
      currentPhase: "Phase 4: MEP Rough-in, Acoustic Insulation & Low-E Facade",
      siteManager: "Eng. Julian Becker, Lead PE",
      managerPhone: "+1 (800) 555-2845",
      nextMilestone: "Italian Marble Delivery & Solar Inverter Commissioning",
      nextDate: "October 02, 2026",
      phases: [
        { name: "BIM Architectural Design, Geotechnical Soil & Permits", status: "completed", date: "May 04, 2026" },
        { name: "Site Excavation, Micropile Piling & M35 Raft Slab", status: "completed", date: "June 18, 2026" },
        { name: "Reinforced Superstructure & Post-Tensioned Slabs", status: "completed", date: "August 12, 2026" },
        { name: "MEP Conduits, Daikin VRV HVAC & Thermal Envelope", status: "in-progress", date: "In Progress (88%)" },
        { name: "Statuario Marble Flooring & Custom Walnut Millwork", status: "upcoming", date: "Target: Oct 25" },
        { name: "250-Point QA Audit, Municipal Clearance & Handover", status: "upcoming", date: "Target: Dec 18" }
      ],
      recentInspection: "Concrete Core Compression 42 MPa Passed • City Structural Sign-off Approved",
      image: "/images/villa.jpg"
    },
    "COM-3180": {
      name: "Zenith Horizon Commercial Headquarters",
      type: "Commercial Corporate Tower & Atrium (48,000 sq ft)",
      location: "Central Financial District, Sector 12",
      startDate: "February 01, 2026",
      estimatedHandover: "January 20, 2027",
      progressPercent: 84,
      currentPhase: "Phase 5: Double-Glazed Curtain Wall & Acoustic Ceilings",
      siteManager: "Eng. Sarah Jenkins, LEED AP",
      managerPhone: "+1 (800) 555-2845",
      nextMilestone: "Elevator Core Commissioning & Lobby Granite",
      nextDate: "October 10, 2026",
      phases: [
        { name: "Municipal Approvals & Environmental Impact Assessment", status: "completed", date: "Mar 10, 2026" },
        { name: "Deep Bored Basements & Raft Foundation Concrete", status: "completed", date: "Apr 28, 2026" },
        { name: "Composite Structural Steel Framing (14 Levels)", status: "completed", date: "Jul 22, 2026" },
        { name: "Parametric Solar-Reflective Double Curtain Wall", status: "in-progress", date: "In Progress (90%)" },
        { name: "Central Industrial VRF Chillers & High-Speed Elevators", status: "in-progress", date: "In Progress (82%)" },
        { name: "LEED Platinum Final Certification & Handover", status: "upcoming", date: "Target: Jan 20" }
      ],
      recentInspection: "Acoustic Attenuation & Smoke Management System Passed 100%",
      image: "/images/commercial.jpg"
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (projectIdInput.trim()) {
      setSearchedId(projectIdInput.trim().toUpperCase());
    }
  };

  const activeProject = sampleProjects[searchedId] || sampleProjects["BLD-9042"];

  return (
    <div className="tracker-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <Clock size={14} />
            <span>Client Transparency Portal</span>
          </div>
          <h1 className="page-main-title">
            Real-Time Site <span className="text-gradient-amber">Progress Tracker</span>
          </h1>
          <p className="page-main-subtitle">
            Every ApexBuild client gets an exclusive project code to monitor construction phases, daily site inspection logs, supervisor contacts, and photos from anywhere in the world.
          </p>

          {/* Quick Demo Switchers */}
          <div className="tracker-demo-pills">
            <span className="demo-pill-label">Try Sample Project IDs:</span>
            <button 
              className={`demo-btn ${searchedId === "BLD-9042" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("BLD-9042"); setSearchedId("BLD-9042"); }}
            >
              Villa Estate (BLD-9042)
            </button>
            <button 
              className={`demo-btn ${searchedId === "COM-3180" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("COM-3180"); setSearchedId("COM-3180"); }}
            >
              Commercial Tower (COM-3180)
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search Bar Card */}
        <div className="tracker-search-bar glass-card">
          <form onSubmit={handleSearch} className="tracker-form" style={{ maxWidth: "100%" }}>
            <div className="tracker-input-wrap">
              <Search size={20} className="tracker-search-icon" />
              <input 
                type="text" 
                value={projectIdInput}
                onChange={(e) => setProjectIdInput(e.target.value)}
                placeholder="Enter Your Project Code (e.g. BLD-9042 or COM-3180)..."
                className="tracker-input"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              <span>Track Project</span>
            </button>
          </form>
        </div>

        {/* Dashboard Card */}
        <div className="tracker-dashboard glass-card">
          <div className="tracker-dash-header">
            <div className="tracker-project-info">
              <div className="tracker-status-tag">
                <span className="pulsing-green-dot" /> LIVE SITE MONITORING ACTIVE
              </div>
              <h2 className="tracker-project-title">{activeProject.name}</h2>
              <div className="tracker-meta-row">
                <span className="meta-item"><MapPin size={14} className="text-amber" /> {activeProject.location}</span>
                <span className="meta-dot">•</span>
                <span className="meta-item">{activeProject.type}</span>
                <span className="meta-dot">•</span>
                <span className="meta-item">Project Code: <strong className="text-amber">{searchedId}</strong></span>
              </div>
            </div>

            <div className="tracker-progress-dial-box">
              <div className="dial-value">{activeProject.progressPercent}%</div>
              <div className="dial-label">Total Completion</div>
            </div>
          </div>

          <div className="main-progress-container">
            <div className="progress-track-bg">
              <div 
                className="progress-fill-bar" 
                style={{ width: `${activeProject.progressPercent}%` }}
              />
            </div>
            <div className="progress-labels-row">
              <span>Groundbreaking: <strong>{activeProject.startDate}</strong></span>
              <span className="text-amber">Guaranteed Handover: <strong>{activeProject.estimatedHandover}</strong></span>
            </div>
          </div>

          <div className="tracker-cards-row">
            <div className="tracker-mini-card">
              <div className="mini-card-icon text-amber">
                <Clock size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">Active Milestone</div>
                <div className="mini-card-title">{activeProject.currentPhase}</div>
                <div className="mini-card-footer">Next inspection: <strong>{activeProject.nextDate}</strong></div>
              </div>
            </div>

            <div className="tracker-mini-card">
              <div className="mini-card-icon text-green">
                <FileCheck size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">QA & Code Inspection</div>
                <div className="mini-card-title">{activeProject.recentInspection}</div>
                <div className="mini-card-footer"><span className="badge-green">100% Passed</span></div>
              </div>
            </div>

            <div className="tracker-mini-card">
              <div className="mini-card-icon text-cyan">
                <UserCheck size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">On-Site Project Lead</div>
                <div className="mini-card-title">{activeProject.siteManager}</div>
                <div className="mini-card-footer">
                  <a href={`tel:${activeProject.managerPhone}`} className="engineer-call-btn">
                    <Phone size={12} /> Call Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Roadmap */}
          <div className="milestones-roadmap">
            <h3 className="roadmap-title">Construction Milestone Checklist</h3>
            <div className="roadmap-grid">
              {activeProject.phases.map((phase, idx) => {
                const isDone = phase.status === "completed";
                const isCurrent = phase.status === "in-progress";

                return (
                  <div 
                    key={idx} 
                    className={`roadmap-step-card ${isDone ? "step-done" : ""} ${isCurrent ? "step-active" : ""}`}
                  >
                    <div className="step-badge-col">
                      {isDone ? (
                        <CheckCircle2 size={20} className="step-check-icon text-green" />
                      ) : isCurrent ? (
                        <div className="step-active-dot" />
                      ) : (
                        <div className="step-pending-dot">{idx + 1}</div>
                      )}
                    </div>
                    <div className="step-content-col">
                      <div className="step-name">{phase.name}</div>
                      <div className="step-date">{phase.date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Daily Photos Preview (Added Detail) */}
          <div className="tracker-photos-box">
            <h4 className="photos-title">
              <Camera size={18} className="text-amber" />
              <span>Latest 4K Daily Inspection Photography</span>
            </h4>
            <div className="photos-grid-preview">
              <div className="photo-card-item">
                <img src={activeProject.image} alt="Site Inspection Photo" />
                <div className="photo-caption">Recent Structural Core Progress • Stamped Sept 04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
