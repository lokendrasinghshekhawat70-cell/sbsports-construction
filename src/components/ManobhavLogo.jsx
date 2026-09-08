import React from "react";

/**
 * ManobhavLogo: Vector recreation of the authentic MANOBHAV CONSTRUCTION logo
 * featuring the orange commercial building, blue high-rise tower, red-roofed house,
 * dynamic red/gold arched swoosh, and 3D gold typography.
 */
export default function ManobhavLogo({ size = "md", showText = true, className = "", variant = "dark" }) {
  const sizeMap = {
    sm: { iconWidth: 42, iconHeight: 42, titleSize: "1.15rem", subSize: "0.6rem" },
    md: { iconWidth: 56, iconHeight: 56, titleSize: "1.5rem", subSize: "0.75rem" },
    lg: { iconWidth: 78, iconHeight: 78, titleSize: "2.1rem", subSize: "0.95rem" },
    xl: { iconWidth: 110, iconHeight: 110, titleSize: "3rem", subSize: "1.3rem" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`manobhav-brand-logo ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
      {/* Authentic Vector Logo Icon */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: variant === "light" ? "drop-shadow(0 4px 10px rgba(0,0,0,0.35))" : "drop-shadow(0 2px 6px rgba(0,0,0,0.12))", flexShrink: 0 }}
      >
        <defs>
          {/* Orange Building Gradient */}
          <linearGradient id="mbOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#E05300" />
          </linearGradient>

          {/* Blue High-Rise Gradient */}
          <linearGradient id="mbBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0F3B82" />
          </linearGradient>

          {/* Red Roof Gradient */}
          <linearGradient id="mbRedRoof" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>

          {/* Red Curved Swoosh Gradient */}
          <linearGradient id="mbRedSwoosh" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FF2A2A" />
            <stop offset="40%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>

          {/* Silver/White Accent Ribbon Gradient */}
          <linearGradient id="mbGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* House Wall Gradient */}
          <linearGradient id="mbHousWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* --- Background Blue Slanted High-Rise --- */}
        <path
          d="M68 20 L108 34 L108 92 L68 92 Z"
          fill="url(#mbBlueGrad)"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Blue Building Angled Top Cap */}
        <polygon points="68,20 88,14 108,34 88,38" fill="#60A5FA" opacity="0.6" />
        {/* Blue Building Vertical Accent Line */}
        <line x1="88" y1="36" x2="88" y2="92" stroke="#93C5FD" strokeWidth="2.5" opacity="0.8" />

        {/* --- Left Orange Tower (with grid windows) --- */}
        <path
          d="M24 38 L68 22 L68 96 L24 96 Z"
          fill="url(#mbOrangeGrad)"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Windows matrix on Orange Building */}
        <g fill="#1E293B">
          {/* Row 1 */}
          <rect x="33" y="44" width="7" height="9" rx="1" />
          <rect x="45" y="40" width="7" height="9" rx="1" />
          <rect x="56" y="36" width="7" height="9" rx="1" />
          {/* Row 2 */}
          <rect x="33" y="59" width="7" height="9" rx="1" />
          <rect x="45" y="55" width="7" height="9" rx="1" />
          <rect x="56" y="51" width="7" height="9" rx="1" />
          {/* Row 3 */}
          <rect x="33" y="74" width="7" height="9" rx="1" />
          <rect x="45" y="70" width="7" height="9" rx="1" />
          <rect x="56" y="66" width="7" height="9" rx="1" />
        </g>

        {/* --- Front Residential House --- */}
        {/* House Body */}
        <polygon points="56,76 96,76 96,104 56,104" fill="url(#mbHousWall)" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Blue House Door */}
        <rect x="70" y="86" width="12" height="18" fill="#1D4ED8" rx="1" />
        {/* Red Pitched Roof */}
        <polygon
          points="50,77 76,50 102,77"
          fill="url(#mbRedRoof)"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* --- Dynamic Red & Gold Curved Swoosh --- */}
        {/* Gold Under-glow Curve */}
        <path
          d="M10 104 C40 86 98 84 132 108 C98 94 42 98 10 104 Z"
          fill="url(#mbGoldRibbon)"
        />
        {/* Main 3D Glossy Red Swoosh */}
        <path
          d="M8 101 C42 80 102 81 134 104 C100 89 44 91 8 101 Z"
          fill="url(#mbRedSwoosh)"
        />
        {/* Gloss highlight on swoosh */}
        <path
          d="M12 99 C44 83 95 83 126 100 C96 88 46 89 12 99 Z"
          fill="#FFFFFF"
          opacity="0.5"
        />
      </svg>

      {/* Brand Text Elements */}
      {showText && (
        <div className="manobhav-brand-text" style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
          <span
            className={variant === "light" ? "brand-name-white" : "brand-name-dark"}
            style={{
              fontSize: currentSize.titleSize,
              fontWeight: 900,
              letterSpacing: "0.04em",
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              color: variant === "light" ? "#FFFFFF" : "#0F172A",
              filter: variant === "light" ? "drop-shadow(0 2px 6px rgba(0,0,0,0.9))" : "none"
            }}
          >
            MANOBHAV
          </span>
          <span
            className="brand-sub-accent"
            style={{
              fontSize: currentSize.subSize,
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "#EA580C",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: variant === "light" ? "0 2px 4px rgba(0,0,0,0.9)" : "none"
            }}
          >
            CONSTRUCTION
          </span>
        </div>
      )}
    </div>
  );
}
