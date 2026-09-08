import React, { useState } from "react";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  UserCheck, 
  Camera, 
  MapPin, 
  Calendar,
  FileCheck,
  Phone,
  ArrowUpRight
} from "lucide-react";

export default function LiveTracker() {
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
    <section id="tracker" className="section-padding tracker-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Clock size={15} />
            <span>Real-Time Client Transparency</span>
          </div>
          <h2 className="section-title">
            Live Project <span className="text-gradient-amber">Progress Tracker</span>
          </h2>
          <p className="section-subtitle">
            Every ApexBuild client receives a private portal to track construction in real-time. Experience how simple tracking milestones, inspection reports, and daily photos really is.
          </p>
        </div>

        {/* Search / Demo Trigger Box */}
        <div className="tracker-search-bar glass-card">
          <form onSubmit={handleSearch} className="tracker-form">
            <div className="tracker-input-wrap">
              <Search size={20} className="tracker-search-icon" />
              <input 
                type="text" 
                value={projectIdInput}
                onChange={(e) => setProjectIdInput(e.target.value)}
                placeholder="Enter Project Tracking ID (e.g. BLD-9042 or COM-3180)..."
                className="tracker-input"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              <span>Track Site</span>
            </button>
          </form>

          {/* Quick Demo Switchers */}
          <div className="demo-track-buttons">
            <span className="demo-track-label">Try Demo Projects:</span>
            <button 
              className={`demo-btn ${searchedId === "BLD-9042" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("BLD-9042"); setSearchedId("BLD-9042"); }}
            >
              Residential Villa (BLD-9042)
            </button>
            <button 
              className={`demo-btn ${searchedId === "COM-3180" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("COM-3180"); setSearchedId("COM-3180"); }}
            >
              Commercial Tower (COM-3180)
            </button>
          </div>
        </div>

        {/* Tracker Dashboard Display Card */}
        <div className="tracker-dashboard glass-card">
          {/* Top Project Meta Header */}
          <div className="tracker-dash-header">
            <div className="tracker-project-info">
              <div className="tracker-status-tag">
                <span className="pulsing-green-dot" /> LIVE SITE STATUS
              </div>
              <h3 className="tracker-project-title">{activeProject.name}</h3>
              <div className="tracker-meta-row">
                <span className="meta-item">
                  <MapPin size={14} className="text-amber" /> {activeProject.location}
                </span>
                <span className="meta-dot">•</span>
                <span className="meta-item">{activeProject.type}</span>
                <span className="meta-dot">•</span>
                <span className="meta-item">ID: <strong className="text-amber">{searchedId}</strong></span>
              </div>
            </div>

            <div className="tracker-progress-dial-box">
              <div className="dial-value">{activeProject.progressPercent}%</div>
              <div className="dial-label">Total Completion</div>
            </div>
          </div>

          {/* Main Progress Bar */}
          <div className="main-progress-container">
            <div className="progress-track-bg">
              <div 
                className="progress-fill-bar" 
                style={{ width: `${activeProject.progressPercent}%` }}
              />
            </div>
            <div className="progress-labels-row">
              <span>Groundbreaking: {activeProject.startDate}</span>
              <span className="text-amber">Guaranteed Handover: {activeProject.estimatedHandover}</span>
            </div>
          </div>

          {/* 3-Column Info Cards Inside Dashboard */}
          <div className="tracker-cards-row">
            {/* Active Milestone Card */}
            <div className="tracker-mini-card">
              <div className="mini-card-icon text-amber">
                <Clock size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">Current Active Phase</div>
                <div className="mini-card-title">{activeProject.currentPhase}</div>
                <div className="mini-card-footer">
                  <span>Next milestone target: <strong>{activeProject.nextDate}</strong></span>
                </div>
              </div>
            </div>

            {/* Quality & Inspection Card */}
            <div className="tracker-mini-card">
              <div className="mini-card-icon text-green">
                <FileCheck size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">Latest Quality Inspection</div>
                <div className="mini-card-title">{activeProject.recentInspection}</div>
                <div className="mini-card-footer">
                  <span className="badge-green">100% Passed</span>
                </div>
              </div>
            </div>

            {/* Dedicated Engineer Card */}
            <div className="tracker-mini-card">
              <div className="mini-card-icon text-cyan">
                <UserCheck size={20} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-subtitle">Lead On-Site Engineer</div>
                <div className="mini-card-title">{activeProject.siteManager}</div>
                <div className="mini-card-footer">
                  <a href={`tel:${activeProject.managerPhone}`} className="engineer-call-btn">
                    <Phone size={12} /> Call Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Milestone Roadmap List */}
          <div className="milestones-roadmap">
            <h4 className="roadmap-title">Construction Phase Breakdown</h4>
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
        </div>
      </div>
    </section>
  );
}
