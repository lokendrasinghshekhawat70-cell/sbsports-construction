import React, { useState, useEffect } from "react";
import { Phone, Mail, Sparkles } from "lucide-react";

export default function FloatingDock({ onOpenQuote }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="floating-dock-container">
      <div
        className="floating-dock"
        style={{
          background: "#FFFFFF",
          border: "2px solid #000000",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 14px",
          borderRadius: "0px"
        }}
      >
        <a
          href="tel:+919636365391"
          className="dock-item"
          title="Call Directly"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#000000",
            fontWeight: 800,
            fontSize: "0.85rem",
            textDecoration: "none",
            padding: "6px 10px",
            border: "1px solid #000000",
            background: "#FFFFFF"
          }}
        >
          <Phone size={15} />
          <span>+91-9636365391</span>
        </a>

        <a
          href="mailto:sbsportsandconstruction@gmail.com"
          className="dock-item"
          title="Send Email"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#000000",
            fontWeight: 800,
            fontSize: "0.85rem",
            textDecoration: "none",
            padding: "6px 10px",
            border: "1px solid #000000",
            background: "#FFFFFF"
          }}
        >
          <Mail size={15} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
