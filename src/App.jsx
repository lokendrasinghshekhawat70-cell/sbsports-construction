import React, { useState } from "react";
import "./App.css";

// Shared Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";
import QuoteModal from "./components/QuoteModal";

// Modular Page Components (Each Navbar Option has its own folder & details)
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import GuaranteesPage from "./pages/Guarantees/GuaranteesPage";
import ReviewsPage from "./pages/Reviews/ReviewsPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  // Current active page based on navbar selection
  const [currentPage, setCurrentPage] = useState("home");
  
  // Quote Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefillData, setQuotePrefillData] = useState(null);

  // Open modal with specific service or project
  const handleOpenQuoteWithService = (serviceName) => {
    setQuotePrefillData({ projectType: serviceName });
    setIsQuoteModalOpen(true);
  };

  // Open generic modal
  const handleOpenQuoteGeneric = () => {
    setQuotePrefillData(null);
    setIsQuoteModalOpen(true);
  };

  // Render the selected navbar option's page component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "services":
        return (
          <ServicesPage 
            onOpenQuote={handleOpenQuoteWithService} 
          />
        );
      case "projects":
        return (
          <ProjectsPage 
            onBookConsultation={handleOpenQuoteWithService} 
          />
        );
      case "guarantees":
        return (
          <GuaranteesPage 
            onOpenQuote={handleOpenQuoteGeneric} 
          />
        );
      case "reviews":
        return (
          <ReviewsPage />
        );
      case "contact":
        return (
          <ContactPage 
            onOpenQuote={handleOpenQuoteGeneric} 
          />
        );
      case "home":
      default:
        return (
          <HomePage 
            onOpenQuote={handleOpenQuoteGeneric}
            onSelectService={handleOpenQuoteWithService}
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="app-layout">
      {/* Sticky Header with Active Page Navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuote={handleOpenQuoteGeneric}
      />

      {/* Main Content: Rendered from each option's dedicated folder */}
      <main className="main-content-area">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        onOpenQuote={handleOpenQuoteGeneric}
      />

      {/* Floating Quick Action Dock */}
      <FloatingDock 
        onOpenQuote={handleOpenQuoteGeneric}
      />

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