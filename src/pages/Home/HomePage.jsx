import React from "react";
import Home from "../../components/Home";

export default function HomePage({
  onOpenQuote,
  onSelectService,
  onNavigate
}) {
  return (
    <div className="home-page-container">
      <Home onOpenQuote={onOpenQuote} />
    </div>
  );
}
