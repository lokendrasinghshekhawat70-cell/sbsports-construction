import React from "react";
import "./Home.css";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import SportsCourtSection from "../../components/SportsCourtSection";
import Portfolio from "../../components/Portfolio";
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

      {/* Sports Courts & Synthetic Coating Showcase */}
      <SportsCourtSection 
        onNavigate={onNavigate}
        onOpenQuote={onOpenQuote}
      />

      {/* Featured Projects Showcase */}
      <Portfolio 
        onBookConsultation={onSelectService}
      />

      {/* 4 Simple Steps Framework */}
      <HowItWorks 
        onOpenQuote={onOpenQuote}
      />

      {/* Direct Contact & Fast Callback */}
      <ContactSection 
        onOpenQuote={onOpenQuote}
      />

      {/* Verified Reviews & Accreditations (Above Footer) */}
      <Testimonials />
    </div>
  );
}
