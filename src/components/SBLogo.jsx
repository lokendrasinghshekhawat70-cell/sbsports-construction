import React from "react";
import logoImg from "../assets/SB.png";

/**
 * SBLogo: Premium brand logo component using new 3D crystal SB emblem
 * Seamless presentation with crisp typography tailored for high-end luxury infrastructure.
 */
export default function SBLogo({ size = "md", showText = true, className = "", variant = "navbar" }) {
  const sizeMap = {
    sm: { iconSize: 38, titleSize: "1.02rem", subSize: "0.58rem", gap: "10px" },
    md: { iconSize: 48, titleSize: "1.24rem", subSize: "0.64rem", gap: "12px" },
    lg: { iconSize: 62, titleSize: "1.58rem", subSize: "0.76rem", gap: "14px" },
    xl: { iconSize: 84, titleSize: "2.15rem", subSize: "0.94rem", gap: "16px" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isDarkBg = variant === "dark";

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
      {/* Logo Image Frame - Clean Seamless Presentation */}
      <div
        style={{
          position: "relative",
          width: currentSize.iconSize,
          height: currentSize.iconSize,
          borderRadius: "8px",
          overflow: "hidden",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}
      >
        <img
          src={logoImg}
          alt="SB SPORTS & CONSTRUCTION"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 2px 8px rgba(0, 132, 255, 0.18))"
          }}
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
          <span
            style={{
              fontSize: currentSize.titleSize,
              fontWeight: 900,
              letterSpacing: "0.06em",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              color: isDarkBg ? "#FFFFFF" : "#0B192C",
              textTransform: "uppercase",
              transition: "color 0.25s ease"
            }}
          >
            SB SPORTS
          </span>
          <span
            style={{
              fontSize: currentSize.subSize,
              fontWeight: 800,
              letterSpacing: "0.20em",
              color: "#0084FF",
              textTransform: "uppercase",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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



