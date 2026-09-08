import React, { useState, useEffect } from "react";
import { Phone, Calculator, MessageSquare, ArrowUp, Sparkles } from "lucide-react";

export default function FloatingDock({ onOpenQuote, onJumpEstimator }) {
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
          href="tel:+18005552845" 
          className="dock-item dock-call" 
          title="Direct Call to Site Engineer"
        >
          <Phone size={18} />
          <span className="dock-text">Call (800) 555-BUILD</span>
        </a>

        <div className="dock-sep" />

        <button 
          onClick={onJumpEstimator} 
          className="dock-item dock-calc"
          title="Calculate Project Cost"
        >
          <Calculator size={18} className="text-amber" />
          <span className="dock-text">Cost Calculator</span>
        </button>

        <div className="dock-sep" />

        <button 
          onClick={() => onOpenQuote()} 
          className="dock-item dock-quote btn-primary"
          title="Request Free Quote"
        >
          <Sparkles size={16} />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
