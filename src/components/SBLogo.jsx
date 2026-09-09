import React from "react";
import logoImg from "../assets/SB.jpeg";

/**
 * SBLogo: Premium brand logo component using SB.jpeg asset
 * with Royal Blue (#087FEA), Electric Cyan (#19C8F4), and Orange (#FF8A00) accents.
 */
export default function SBLogo({ size = "md", showText = true, className = "", variant = "dark" }) {
  const sizeMap = {
    sm: { iconSize: 36, titleSize: "0.98rem", subSize: "0.55rem", gap: "10px" },
    md: { iconSize: 44, titleSize: "1.18rem", subSize: "0.6rem", gap: "12px" },
    lg: { iconSize: 56, titleSize: "1.5rem", subSize: "0.72rem", gap: "14px" },
    xl: { iconSize: 76, titleSize: "2.0rem", subSize: "0.88rem", gap: "16px" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isLight = variant === "light";

  return (
    <div
      className={`sb-brand-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: currentSize.gap,
        userSelect: "none"
      }}
    >
      {/* Logo Image Frame */}
      <div
        style={{
          position: "relative",
          width: currentSize.iconSize,
          height: currentSize.iconSize,
          borderRadius: "8px",
          overflow: "hidden",
          background: "#FFFFFF",
          border: "2px solid #087FEA",
          boxShadow: "0 4px 14px rgba(8, 127, 234, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          padding: "2px"
        }}
      >
        <img
          src={logoImg}
          alt="SB SPORTS & CONSTRUCTION"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "4px",
            display: "block"
          }}
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, textAlign: "left" }}>
          <span
            style={{
              fontSize: currentSize.titleSize,
              fontWeight: 800,
              letterSpacing: "0.04em",
              fontFamily: "'Manrope', sans-serif",
              color: isLight ? "#FFFFFF" : "#071A33",
              textTransform: "uppercase"
            }}
          >
            SB SPORTS
          </span>
          <span
            style={{
              fontSize: currentSize.subSize,
              fontWeight: 800,
              letterSpacing: "0.16em",
              color: "#087FEA",
              textTransform: "uppercase",
              fontFamily: "'Manrope', sans-serif",
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



