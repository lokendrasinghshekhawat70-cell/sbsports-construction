import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  Layers, 
  Sun,
  Lightbulb,
  Award
} from "lucide-react";

export default function CourtCostCalculator({ onOpenQuote }) {
  const [sport, setSport] = useState("tennis");
  const [environment, setEnvironment] = useState("outdoor");
  const [surfaceType, setSurfaceType] = useState("acrylic8");
  const [addons, setAddons] = useState({
    floodlights: true,
    fencing: true,
    ballNetting: false,
    logoPaint: true
  });

  const sportSpecs = {
    tennis: {
      name: "Tennis Court",
      areaSqFt: 7200, // 120ft x 60ft enclosure
      areaSqM: 669,
      baseDays: 20,
      baseWarranty: "7 - 10 Years",
      defaultSurface: "8-Layer Synthetic Acrylic Cushion"
    },
    basketball: {
      name: "Basketball Court",
      areaSqFt: 5500, // 100ft x 55ft standard
      areaSqM: 510,
      baseDays: 18,
      baseWarranty: "8 - 10 Years",
      defaultSurface: "8-Layer Multi-Tone Acrylic"
    },
    badminton: {
      name: "Badminton Court",
      areaSqFt: 1250, // per court enclosure
      areaSqM: 116,
      baseDays: 10,
      baseWarranty: "5 - 8 Years",
      defaultSurface: "BWF Grade Synthetic Mat / Maple"
    },
    pickleball: {
      name: "Pickleball Court",
      areaSqFt: 1800, // 60ft x 30ft
      areaSqM: 167,
      baseDays: 12,
      baseWarranty: "7 - 10 Years",
      defaultSurface: "5-Layer Textured Acrylic"
    },
    cricketTurf: {
      name: "Box Cricket & Futsal Turf",
      areaSqFt: 6000, // 100ft x 60ft cage
      areaSqM: 557,
      baseDays: 22,
      baseWarranty: "5 - 7 Years",
      defaultSurface: "50mm Monofilament Grass Turf"
    },
    squash: {
      name: "Squash Court",
      areaSqFt: 850,
      areaSqM: 79,
      baseDays: 25,
      baseWarranty: "10 Years",
      defaultSurface: "Armourcoat Plaster + Maple Wood"
    },
    volleyball: {
      name: "Volleyball Court",
      areaSqFt: 3800,
      areaSqM: 353,
      baseDays: 14,
      baseWarranty: "7 - 9 Years",
      defaultSurface: "Seamless Elastic PU Coating"
    },
    gym: {
      name: "Gym & Fitness Flooring",
      areaSqFt: 4500,
      areaSqM: 418,
      baseDays: 10,
      baseWarranty: "10 Years",
      defaultSurface: "15mm-25mm Vulcanized Rubber Shock Tiles"
    },
    tableTennis: {
      name: "Table Tennis & Pickleball Table",
      areaSqFt: 1100,
      areaSqM: 102,
      baseDays: 8,
      baseWarranty: "8 Years",
      defaultSurface: "ITTF Tournament Mat / Sprung Wood"
    },
    runningTrack: {
      name: "Synthetic Running Track (IAAF)",
      areaSqFt: 48000,
      areaSqM: 4460,
      baseDays: 35,
      baseWarranty: "10 Years",
      defaultSurface: "IAAF Polyurethane Sandwich Running Track"
    }
  };

  const currentSpec = sportSpecs[sport] || sportSpecs.tennis;

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate estimated completion days
  const calculateTimeline = () => {
    let days = currentSpec.baseDays;
    if (addons.floodlights) days += 3;
    if (addons.fencing) days += 4;
    if (addons.ballNetting) days += 2;
    if (environment === "indoor") days += 4;
    return `${days - 3} - ${days + 5} Business Days`;
  };

  const handleRequestQuote = () => {
    const summary = `${currentSpec.name} (${environment.toUpperCase()}) with ${surfaceType.toUpperCase()} surface, ${currentSpec.areaSqFt} sq.ft, LED: ${addons.floodlights ? "Yes" : "No"}, Fencing: ${addons.fencing ? "Yes" : "No"}`;
    onOpenQuote(summary);
  };

  return (
    <div className="court-calculator-container">
      <div className="calc-header">
        <div className="calc-badge">
          <Calculator size={16} />
          <span>INSTANT PROJECT ESTIMATOR</span>
        </div>
        <h3 className="calc-title">Court Dimension & Specifications Estimator</h3>
        <p className="calc-subtitle">
          Configure your indoor or outdoor court layout to estimate total project dimensions, turnaround timeline, and structural scope.
        </p>
      </div>

      <div className="calc-grid">
        {/* Left Side: Configuration Controls */}
        <div className="calc-controls-card">
          {/* Step 1: Sport Selection */}
          <div className="control-group">
            <label className="control-label">1. Select Game / Sport:</label>
            <div className="sport-select-grid">
              {Object.entries(sportSpecs).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setSport(key)}
                  className={`sport-choice-btn ${sport === key ? "active" : ""}`}
                >
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Environment */}
          <div className="control-group">
            <label className="control-label">2. Environment Location:</label>
            <div className="env-toggle-group">
              <button
                onClick={() => setEnvironment("outdoor")}
                className={`env-btn ${environment === "outdoor" ? "active" : ""}`}
              >
                <Sun size={16} />
                <span>Outdoor Weatherproof</span>
              </button>
              <button
                onClick={() => setEnvironment("indoor")}
                className={`env-btn ${environment === "indoor" ? "active" : ""}`}
              >
                <Layers size={16} />
                <span>Indoor Stadium / Hall</span>
              </button>
            </div>
          </div>

          {/* Step 3: Coating / Flooring System */}
          <div className="control-group">
            <label className="control-label">3. Surface Coating & Flooring System:</label>
            <select
              value={surfaceType}
              onChange={(e) => setSurfaceType(e.target.value)}
              className="calc-select-input"
            >
              <option value="acrylic8">8-Layer Synthetic Acrylic Cushion (ITF Medium)</option>
              <option value="acrylic5">5-Layer Standard All-Weather Acrylic System</option>
              <option value="pu-cushion">Seamless Polyurethane (PU) Jointless Flooring</option>
              <option value="maple-wood">Imported European Maple Wood Sprung Floor</option>
              <option value="turf50">50mm FIFA Approved Artificial Grass Turf</option>
              <option value="vinyl-mat">BWF Certified Embossed PVC Sports Mat</option>
            </select>
          </div>

          {/* Step 4: Infrastructure Add-ons */}
          <div className="control-group">
            <label className="control-label">4. Structural Add-ons & Equipment:</label>
            <div className="addons-checkbox-grid">
              <label className={`addon-box ${addons.floodlights ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={addons.floodlights}
                  onChange={() => toggleAddon("floodlights")}
                />
                <span>High-Mast LED Sports Floodlights (200-500 Lux)</span>
              </label>

              <label className={`addon-box ${addons.fencing ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={addons.fencing}
                  onChange={() => toggleAddon("fencing")}
                />
                <span>Chain-Link Fencing (10ft - 15ft Galvanized Mesh)</span>
              </label>

              <label className={`addon-box ${addons.ballNetting ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={addons.ballNetting}
                  onChange={() => toggleAddon("ballNetting")}
                />
                <span>Top Ceiling & Perimeter Ball Containment Netting</span>
              </label>

              <label className={`addon-box ${addons.logoPaint ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={addons.logoPaint}
                  onChange={() => toggleAddon("logoPaint")}
                />
                <span>Custom School / Club Center Court Logo Emblazon</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side: Instant Estimation Output Card */}
        <div className="calc-summary-card">
          <div className="summary-badge-top">
            <Sparkles size={16} />
            <span>CONFIGURED SPECIFICATION</span>
          </div>

          <h4 className="summary-court-name">{currentSpec.name}</h4>
          <span className="summary-env-tag">
            {environment.toUpperCase()} FACILITY • {currentSpec.defaultSurface}
          </span>

          <div className="metrics-display-grid">
            <div className="metric-box highlight">
              <span className="metric-label">Total Facility Footprint</span>
              <span className="metric-value">{currentSpec.areaSqFt.toLocaleString()} <small>SQ. FT.</small></span>
              <span className="metric-sub">approx. {currentSpec.areaSqM} m²</span>
            </div>

            <div className="metric-box">
              <span className="metric-label">Estimated Construction Turnaround</span>
              <span className="metric-value">{calculateTimeline()}</span>
              <span className="metric-sub">From Sub-base to Handover</span>
            </div>

            <div className="metric-box">
              <span className="metric-label">Structural Guarantee</span>
              <span className="metric-value">{currentSpec.baseWarranty}</span>
              <span className="metric-sub">Zero-Cracking & Anti-Peeling</span>
            </div>

            <div className="metric-box">
              <span className="metric-label">Drainage & Slope Precision</span>
              <span className="metric-value">1:100 Gradient</span>
              <span className="metric-sub">Laser-screed zero puddle guarantee</span>
            </div>
          </div>

          {/* Included Deliverables */}
          <div className="deliverables-box">
            <span className="deliverables-title">Standard Execution Includes:</span>
            <ul className="deliverables-list">
              <li><CheckCircle2 size={15} className="text-emerald" /> Laser-level subgrade civil base construction</li>
              <li><CheckCircle2 size={15} className="text-emerald" /> Deep chemical bonding primer & silica resurfacing</li>
              <li><CheckCircle2 size={15} className="text-emerald" /> UV-resistant pure acrylic multi-layer colors</li>
              <li><CheckCircle2 size={15} className="text-emerald" /> Regulation crisp white line markings</li>
              {addons.floodlights && <li><CheckCircle2 size={15} className="text-emerald" /> Anti-glare tournament LED floodlight poles</li>}
              {addons.fencing && <li><CheckCircle2 size={15} className="text-emerald" /> Heavy-gauge rust-resistant perimeter chain link</li>}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={handleRequestQuote}
            className="btn btn-primary btn-calc-submit"
          >
            <span>Get Official Proposal & Price Quote</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
