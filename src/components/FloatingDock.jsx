import React, { useState, useEffect } from "react";
import { Phone, Calculator, MessageSquare, ArrowUp, Sparkles } from "lucide-react";

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
      <div className="floating-dock glass-card">
        <a
          href="tel:+918800570023"
          className="dock-item dock-call"
          title="Direct Call to Managing Director"
        >
          <Phone size={18} />
          <span className="dock-text">Call +91 88005 70023</span>
        </a>

        <div className="dock-sep" />

        <button
          onClick={() => onOpenQuote()}
          className="dock-item dock-quote btn-quote-white"
          title="Request Free Quote"
        >
          <Sparkles size={16} style={{ color: "#0F172A" }} />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
