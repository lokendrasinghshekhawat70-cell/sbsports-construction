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
      siteManager: "Site Engineer — MANOBHAV CONSTRUCTION",
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
      siteManager: "Commercial Project Supervisor — MANOBHAV CONSTRUCTION",
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
      siteManager: "Civil Works Engineer — MANOBHAV CONSTRUCTION",
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
    <div className="tracker-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <Clock size={14} />
            <span>MANOBHAV CONSTRUCTION LIVE TRACKER</span>
          </div>
          <h1 className="page-main-title">
            HOUSE & BUILDING <span className="text-gradient-amber">CONSTRUCTION TRACKER</span>
          </h1>
          <p className="page-main-subtitle">
            Every MANOBHAV client receives a project code to monitor Residential Development, Commercial Projects, and Infrastructure Works in real time. Building your dreams, brick by brick.
          </p>

          {/* Quick Demo Switchers */}
          <div className="tracker-demo-pills">
            <span className="demo-pill-label">Picture Disciplines:</span>
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
