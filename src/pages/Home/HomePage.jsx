import React from "react";
import "./Home.css";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Guarantees from "../../components/Guarantees";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import ContactSection from "../../components/ContactSection";

export default function HomePage({ 
  onOpenQuote, 
  onSelectService, 
  onNavigate 
}) {
  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <Hero 
        onOpenQuote={onOpenQuote}
        onSelectService={onSelectService}
      />

      {/* Services with Attractive Feature Cards */}
      <Services 
        onSelectService={onSelectService}
      />

      {/* Featured Projects Showcase */}
      <Portfolio 
        onBookConsultation={onSelectService}
      />

      {/* 4 Contractual Guarantees */}
      <Guarantees />

      {/* 4 Simple Steps Framework */}
      <HowItWorks 
        onOpenQuote={onOpenQuote}
      />

      {/* Verified Reviews & Accreditations */}
      <Testimonials />

      {/* Direct Contact & Fast Callback */}
      <ContactSection 
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
}
