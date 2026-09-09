import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Shared Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";
import QuoteModal from "./components/QuoteModal";

// Modular Page Components (Each Navbar Option has its own folder & details)
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import SportsCourtsPage from "./pages/SportsCourts/SportsCourtsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

import ReviewsPage from "./pages/Reviews/ReviewsPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefillData, setQuotePrefillData] = useState(null);

  const handleOpenQuoteWithService = (serviceName) => {
    setQuotePrefillData({ projectType: serviceName });
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteGeneric = () => {
    setQuotePrefillData(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="app-layout">
      <Navbar onOpenQuote={handleOpenQuoteGeneric} />

      <main className="main-content-area">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuoteGeneric} onSelectService={handleOpenQuoteWithService} />} />

          {/* Sports Courts & Synthetic Coating (Integrated into Services) */}
          <Route path="/SportsCourtsAndCoating" element={<ServicesPage onOpenQuote={handleOpenQuoteWithService} />} />
          <Route path="/sports-courts" element={<ServicesPage onOpenQuote={handleOpenQuoteWithService} />} />

          {/* Construction Services */}
          <Route path="/Services" element={<ServicesPage onOpenQuote={handleOpenQuoteWithService} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuoteWithService} />} />

          {/* Projects */}
          <Route path="/Projects" element={<ProjectsPage onBookConsultation={handleOpenQuoteWithService} />} />
          <Route path="/projects" element={<ProjectsPage onBookConsultation={handleOpenQuoteWithService} />} />

          

          {/* Reviews */}
          <Route path="/Reviews" element={<ReviewsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* Contact */}
          <Route path="/Contact" element={<ContactPage onOpenQuote={handleOpenQuoteGeneric} />} />
          <Route path="/contact" element={<ContactPage onOpenQuote={handleOpenQuoteGeneric} />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage onOpenQuote={handleOpenQuoteGeneric} onSelectService={handleOpenQuoteWithService} />} />
        </Routes>
      </main>

      <Footer onOpenQuote={handleOpenQuoteGeneric} />

      {/* Floating Quick Action Dock */}
      <FloatingDock onOpenQuote={handleOpenQuoteGeneric} />

      {/* Quote & Free Consultation Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={quotePrefillData}
      />
    </div>
  );
}

export default App;