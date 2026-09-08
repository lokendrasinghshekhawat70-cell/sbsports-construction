import React, { useState } from "react";
import { 
  Calculator, 
  Check, 
  Calendar, 
  DollarSign, 
  ArrowRight,
  Shield,
  Info
} from "lucide-react";

export default function CostEstimator({ onBookWithEstimate }) {
  const [currency, setCurrency] = useState("USD"); // "USD" or "INR"
  const [sqft, setSqft] = useState(2800);
  const [tier, setTier] = useState("premium");
  const [addons, setAddons] = useState({
    solar: false,
    smartHome: true,
    landscaping: true,
    fastTrack: false
  });

  const selectedType = {
    title: "House & Building Construction",
    basePerSqft: currency === "USD" ? 145 : 2900,
    description: "Complete turnkey house & building construction, brick by brick."
  };

  const qualityTiers = [
    {
      id: "standard",
      title: "Standard Commercial Grade",
      multiplier: 1.0,
      tag: "Durable & Engineered",
      specs: ["Certified Fe-550D TMT rebar & M30 concrete", "Vitrified porcelain tile flooring", "Modular acoustic interior fixtures", "Concealed fire-rated copper wiring"]
    },
    {
      id: "premium",
      title: "Executive Signature Turnkey",
      multiplier: 1.35,
      tag: "Most Popular Spec",
      specs: ["Imported Italian Statuario marble floors", "Saint-Gobain acoustic double-glazed glass", "Grohe / Kohler concealed wall sanitaryware", "Architectural 2700K recessed LED cove channels"]
    },
    {
      id: "luxury",
      title: "Architectural Haute Bespoke",
      multiplier: 1.8,
      tag: "Ultra Luxury Elite",
      specs: ["Imported natural quartzite ventilated facade", "Cantilevered post-tensioned glass balustrades", "Whole-home Lutron smart climate & lighting", "Custom walnut millwork & acoustic fluting"]
    }
  ];

  const addonOptions = [
    { id: "solar", label: "Solar Microgrid & Battery Storage", percent: 0.06, icon: "☀️" },
    { id: "smartHome", label: "Whole-Home Lutron Automation & CCTV", percent: 0.05, icon: "📱" },
    { id: "landscaping", label: "Architectural Landscaping & Infinity Patio", percent: 0.07, icon: "🌿" },
    { id: "fastTrack", label: "Double-Shift Expedited Completion", percent: 0.08, icon: "⚡" }
  ];

  const toggleAddon = (id) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculations
  const selectedTier = qualityTiers.find((t) => t.id === tier) || qualityTiers[1];

  const baseCost = selectedType.basePerSqft * sqft * selectedTier.multiplier;
  
  // Add-on percentage
  let addonMultiplier = 1;
  addonOptions.forEach((item) => {
    if (addons[item.id]) {
      addonMultiplier += item.percent;
    }
  });

  const totalEstimatedCost = Math.round(baseCost * addonMultiplier);
  const lowRange = Math.round(totalEstimatedCost * 0.95);
  const highRange = Math.round(totalEstimatedCost * 1.08);

  // Timeline estimation in months
  let baseMonths = 5;
  if (sqft > 2000) baseMonths = 7;
  if (sqft > 4000) baseMonths = 10;
  if (sqft > 8000) baseMonths = 14;
  if (addons.fastTrack) baseMonths = Math.max(2, Math.round(baseMonths * 0.75));

  const formatMoney = (amount) => {
    if (currency === "USD") {
      return "$" + amount.toLocaleString("en-US");
    } else {
      return "₹" + amount.toLocaleString("en-IN");
    }
  };

  const handleBookNow = () => {
    onBookWithEstimate({
      projectType: selectedType.title,
      sqft: sqft,
      tier: selectedTier.title,
      estimatedCost: `${formatMoney(lowRange)} - ${formatMoney(highRange)}`,
      timeline: `${baseMonths} - ${baseMonths + 2} Months`,
      addons: Object.keys(addons).filter((k) => addons[k])
    });
  };

  return (
    <section id="estimator" className="section-padding estimator-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Calculator size={15} />
            <span>MANOBHAV CONSTRUCTION ESTIMATOR</span>
          </div>
          <h2 className="section-title">
            HOUSE & BUILDING <span className="text-gradient-amber">CONSTRUCTION ESTIMATOR</span>
          </h2>
          <p className="section-subtitle">
            Calculate your turnkey budget for Residential Development, Commercial Projects, and Infrastructure Works. Building your dreams, brick by brick.
          </p>

          {/* Currency Switcher */}
          <div className="currency-pill-wrap">
            <span className="currency-label">Select Currency:</span>
            <div className="currency-switch">
              <button 
                className={`curr-btn ${currency === "USD" ? "curr-active" : ""}`}
                onClick={() => setCurrency("USD")}
              >
                USD ($)
              </button>
              <button 
                className={`curr-btn ${currency === "INR" ? "curr-active" : ""}`}
                onClick={() => setCurrency("INR")}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Estimator Board */}
        <div className="estimator-grid">
          {/* Left Column: Selectors & Inputs */}
          <div className="estimator-controls-card glass-card">
            {/* Step 1: Square Footage Slider */}
            <div className="estimator-group">
              <div className="estimator-label-row">
                <label className="estimator-label">
                  <span className="step-num">1</span>
                  <span>Estimated Total Built-Up Area</span>
                </label>
                <div className="sqft-display">
                  <span className="sqft-number">{sqft.toLocaleString()}</span>
                  <span className="sqft-unit">sq. ft.</span>
                </div>
              </div>

              <input
                type="range"
                min="600"
                max="12000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="custom-range-slider"
              />

              {/* Preset Chips */}
              <div className="sqft-presets">
                {[1200, 2400, 3600, 5000, 8500].map((val) => (
                  <button
                    key={val}
                    className={`preset-chip ${sqft === val ? "preset-chip-active" : ""}`}
                    onClick={() => setSqft(val)}
                  >
                    {val.toLocaleString()} sq ft
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality Tier Cards */}
            <div className="estimator-group">
              <label className="estimator-label">
                <span className="step-num">2</span>
                <span>Choose Material & Finish Specification</span>
              </label>
              <div className="tier-cards-grid">
                {qualityTiers.map((qTier) => {
                  const isSelected = tier === qTier.id;
                  return (
                    <div
                      key={qTier.id}
                      className={`tier-card ${isSelected ? "tier-card-active" : ""}`}
                      onClick={() => setTier(qTier.id)}
                    >
                      <div className="tier-header">
                        <div className="tier-title">{qTier.title}</div>
                        <span className="tier-badge">{qTier.tag}</span>
                      </div>
                      <ul className="tier-specs-list">
                        {qTier.specs.map((item, idx) => (
                          <li key={idx}>
                            <Check size={13} className="text-amber" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="tier-radio">
                        <div className={`radio-dot ${isSelected ? "radio-dot-checked" : ""}`} />
                        <span>{isSelected ? "Selected Spec" : "Select"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="estimator-group" style={{ marginBottom: 0 }}>
              <label className="estimator-label">
                <span className="step-num">3</span>
                <span>Select High-Value Enhancements</span>
              </label>
              <div className="addon-pills-grid">
                {addonOptions.map((addon) => {
                  const isChecked = addons[addon.id];
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      className={`addon-pill ${isChecked ? "addon-pill-active" : ""}`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <span className="addon-icon">{addon.icon}</span>
                      <span className="addon-label">{addon.label}</span>
                      <span className="addon-percent">+{Math.round(addon.percent * 100)}%</span>
                      <div className={`addon-box ${isChecked ? "addon-box-active" : ""}`}>
                        {isChecked && <Check size={12} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="estimator-summary-col">
            <div className="glass-card summary-card sticky-card">
              <div className="summary-header" style={{ justifyContent: "flex-end" }}>
                <div className="fixed-price-badge">
                  <Shield size={14} /> Fixed Price Lock
                </div>
              </div>

              {/* Big Price Display */}
              <div className="price-display-box">
                <div className="price-label">Estimated Investment Range</div>
                <div className="price-range">
                  <span className="price-val">{formatMoney(lowRange)}</span>
                  <span className="price-sep">to</span>
                  <span className="price-val-high">{formatMoney(highRange)}</span>
                </div>
                <div className="price-unit">
                  Approx. {formatMoney(Math.round(totalEstimatedCost / sqft))} per sq. ft. turnkey cost
                </div>
              </div>

              {/* Key Specs Breakdown */}
              <div className="summary-specs-list">
                <div className="summary-spec-row">
                  <span className="spec-name">Project Scope</span>
                  <span className="spec-val">{selectedType.title}</span>
                </div>
                <div className="summary-spec-row">
                  <span className="spec-name">Total Floor Area</span>
                  <span className="spec-val">{sqft.toLocaleString()} sq ft</span>
                </div>
                <div className="summary-spec-row">
                  <span className="spec-name">Selected Specification</span>
                  <span className="spec-val text-amber">{selectedTier.title}</span>
                </div>
                <div className="summary-spec-row">
                  <span className="spec-name">Estimated Completion</span>
                  <span className="spec-val spec-val-time">
                    <Calendar size={14} /> {baseMonths} – {baseMonths + 2} Months
                  </span>
                </div>
              </div>

              {/* Cost Allocation Visual Bar */}
              <div className="cost-allocation-box">
                <div className="allocation-header">
                  <span>Transparent Cost Allocation</span>
                </div>
                <div className="allocation-multi-bar">
                  <div className="bar-seg seg-struct" style={{ width: "45%" }} title="Structure & Foundation: 45%" />
                  <div className="bar-seg seg-finish" style={{ width: "35%" }} title="Finishes & Millwork: 35%" />
                  <div className="bar-seg seg-mep" style={{ width: "20%" }} title="MEP & Smart Grid: 20%" />
                </div>
                <div className="allocation-legend">
                  <span className="leg-item"><span className="dot dot-struct" /> Structure 45%</span>
                  <span className="leg-item"><span className="dot dot-finish" /> Finishes 35%</span>
                  <span className="leg-item"><span className="dot dot-mep" /> MEP & Grid 20%</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="summary-actions">
                <button 
                  onClick={handleBookNow} 
                  className="btn btn-primary btn-glow"
                  style={{ width: "100%" }}
                >
                  <span>Lock in this Estimate & Book Site Visit</span>
                  <ArrowRight size={17} />
                </button>
                <div className="disclaimer-text">
                  <Info size={13} />
                  <span>Includes labor, certified engineering oversight, permits & 10-Yr warranty.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
