import React from "react";

/**
 * SBLogo: Clean black & white architectural & sports line-art logo
 * featuring the iconic SB monogram and bold SB SPORTS & CONSTRUCTION typography.
 */
export default function SBLogo({ size = "md", showText = true, className = "" }) {
  const sizeMap = {
    sm: { iconWidth: 38, iconHeight: 38, titleSize: "1.1rem", subSize: "0.55rem" },
    md: { iconWidth: 50, iconHeight: 50, titleSize: "1.35rem", subSize: "0.65rem" },
    lg: { iconWidth: 70, iconHeight: 70, titleSize: "1.85rem", subSize: "0.8rem" },
    xl: { iconWidth: 96, iconHeight: 96, titleSize: "2.5rem", subSize: "1.05rem" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`sb-brand-logo ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      {/* Clean Architectural Black & White SB Monogram Icon */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Outer Minimalist Black Frame */}
        <rect x="5" y="5" width="110" height="110" rx="10" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
        
        {/* 'S' Stylized Sports Ribbon Line */}
        <path
          d="M48 34 C36 34 30 40 30 48 C30 58 48 60 48 70 C48 78 40 84 30 84"
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* 'B' Stylized Architecture & Pillar Tower */}
        <path
          d="M62 32 L62 86 M62 32 L82 32 C92 32 92 56 62 56 M62 56 L85 56 C96 56 96 86 62 86"
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Diagonal Baseline Architecture & Arena Track Stroke */}
        <line x1="16" y1="100" x2="104" y2="100" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        <circle cx="98" cy="22" r="4" fill="#000000" />
      </svg>

      {/* Brand Text Elements in Pure Black */}
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05, textAlign: "left" }}>
          <span
            style={{
              fontSize: currentSize.titleSize,
              fontWeight: 900,
              letterSpacing: "0.06em",
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              color: "#000000"
            }}
          >
            SB SPORTS
          </span>
          <span
            style={{
              fontSize: currentSize.subSize,
              fontWeight: 800,
              letterSpacing: "0.20em",
              color: "#000000",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginTop: "2px"
            }}
          >
            & CONSTRUCTION
          </span>
        </div>
      )}
    </div>
  );
}

export { SBLogo };
