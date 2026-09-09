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
  const [projectIdInput, setProjectIdInput] = useState("RES-101");
  const [searchedId, setSearchedId] = useState("RES-101");

  const sampleProjects = {
    "RES-101": {
      name: "Residential 2-Story House & Timber Framing",
      type: "Residential Development (Picture Detail)",
      location: "Residential Construction Zone A",
      startDate: "April 10, 2026",
      estimatedHandover: "December 18, 2026",
      progressPercent: 78,
      currentPhase: "Phase 4: Roof Shingles, Timber Framing & Weatherproof Siding",
      siteManager: "Site Engineer — SB SPORTS & CONSTRUCTION",
      managerPhone: "Builder Field Office",
      nextMilestone: "Roof Truss Completion & Interior Carpentry",
      nextDate: "October 02, 2026",
      phases: [
        { name: "Architectural Blueprint Drafting & Safety Compliance", status: "completed", date: "May 04, 2026" },
        { name: "Hydraulic Excavator Earthmoving & Foundation Trenching", status: "completed", date: "June 18, 2026" },
        { name: "Brick-by-Brick Foundation Masonry & Concrete Footings", status: "completed", date: "August 12, 2026" },
        { name: "Timber Framing, Studs, Rafters & Roof Truss Erection", status: "in-progress", date: "In Progress (88%)" },
        { name: "High-Pitch Roof Shingle Installation & Cladding", status: "upcoming", date: "Target: Oct 25" },
        { name: "Turnkey Final Inspection & Homeowner Handover", status: "upcoming", date: "Target: Dec 18" }
      ],
      recentInspection: "Timber Rafter Load Integrity Passed • Hard Hat Safety Protocol 100%",
      image: "/images/timber_structure.jpg"
    },
    "COM-202": {
      name: "Commercial Multi-Story Concrete Tower",
      type: "Commercial Projects (Picture Detail)",
      location: "Commercial Construction Sector",
      startDate: "February 01, 2026",
      estimatedHandover: "January 20, 2027",
      progressPercent: 82,
      currentPhase: "Phase 5: Yellow Tower Crane Operations & Floor Slab Pouring",
      siteManager: "Commercial Project Supervisor — SB SPORTS & CONSTRUCTION",
      managerPhone: "Commercial Field Office",
      nextMilestone: "Upper Concrete Floor Pour & Safety Netting Extension",
      nextDate: "October 10, 2026",
      phases: [
        { name: "Civil Groundwork & Excavator Soil Grading", status: "completed", date: "Mar 10, 2026" },
        { name: "Reinforced Concrete Foundation & Basement Columns", status: "completed", date: "Apr 28, 2026" },
        { name: "Yellow Tower Crane Erection & Rigging Setup", status: "completed", date: "Jul 22, 2026" },
        { name: "Multi-Story Scaffolding & Concrete Floor Slabs", status: "in-progress", date: "In Progress (90%)" },
        { name: "Exterior Curtain Wall & Commercial Facade Integration", status: "in-progress", date: "In Progress (75%)" },
        { name: "Final Structural Load Verification & Commercial Handover", status: "upcoming", date: "Target: Jan 20" }
      ],
      recentInspection: "Tower Crane Rigging Inspection Passed • Reinforced Concrete 40 MPa Verified",
      image: "/images/foundation_structure.jpg"
    },
    "INF-303": {
      name: "Infrastructure Excavation & Masonry Foundations",
      type: "Infrastructure Works (Picture Detail)",
      location: "Civil Infrastructure Zone",
      startDate: "March 15, 2026",
      estimatedHandover: "November 30, 2026",
      progressPercent: 70,
      currentPhase: "Phase 3: Hydraulic Excavator Digging & Brick Stack Laying",
      siteManager: "Civil Works Engineer — SB SPORTS & CONSTRUCTION",
      managerPhone: "Infrastructure Field Office",
      nextMilestone: "Subgrade Compaction & Drainage Trench Completion",
      nextDate: "October 05, 2026",
      phases: [
        { name: "Topographical Survey & Blueprint Earthwork Schematics", status: "completed", date: "Apr 05, 2026" },
        { name: "Hydraulic Excavator Bulk Digging & Rubble Clearing", status: "completed", date: "May 20, 2026" },
        { name: "Brick-by-Brick Foundation Masonry Stacking", status: "in-progress", date: "In Progress (70%)" },
        { name: "Civil Subgrade Compaction & Structural Retaining", status: "upcoming", date: "Target: Oct 30" },
        { name: "Civil Infrastructure Inspection & Handover", status: "upcoming", date: "Target: Nov 30" }
      ],
      recentInspection: "Subgrade Bearing Capacity Test Passed 100%",
      image: "/images/excavation_structure.jpg"
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (projectIdInput.trim()) {
      setSearchedId(projectIdInput.trim().toUpperCase());
    }
  };

  const activeProject = sampleProjects[searchedId] || sampleProjects["RES-101"];

  return (
    <section id="tracker" className="section-padding tracker-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Clock size={15} />
            <span>SB SPORTS & CONSTRUCTION LIVE TRACKER</span>
          </div>
          <h2 className="section-title">
            HOUSE & BUILDING <span className="text-gradient-amber">CONSTRUCTION TRACKER</span>
          </h2>
          <p className="section-subtitle">
            Track real-time progress across Residential Development, Commercial Projects, and Infrastructure Works. Building your dreams, brick by brick.
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
                placeholder="Enter Project ID (e.g. RES-101, COM-202, or INF-303)..."
                className="tracker-input"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              <span>Track Site</span>
            </button>
          </form>

          {/* Quick Demo Switchers */}
          <div className="demo-track-buttons">
            <span className="demo-track-label">Picture Disciplines:</span>
            <button 
              className={`demo-btn ${searchedId === "RES-101" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("RES-101"); setSearchedId("RES-101"); }}
            >
              Residential House (RES-101)
            </button>
            <button 
              className={`demo-btn ${searchedId === "COM-202" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("COM-202"); setSearchedId("COM-202"); }}
            >
              Commercial Tower (COM-202)
            </button>
            <button 
              className={`demo-btn ${searchedId === "INF-303" ? "demo-btn-active" : ""}`}
              onClick={() => { setProjectIdInput("INF-303"); setSearchedId("INF-303"); }}
            >
              Infrastructure Works (INF-303)
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
                  <span className="badge-green">Verified On-Site</span>
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
