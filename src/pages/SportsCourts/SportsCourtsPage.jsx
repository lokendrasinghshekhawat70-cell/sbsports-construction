import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SportsCourts.css";

import tennisImg from "../../assets/sports/tennis.jpg";
import basketballImg from "../../assets/sports/basketball.jpg";
import badmintonImg from "../../assets/sports/badminton.jpg";
import pickleballImg from "../../assets/sports/pickleball.jpg";
import futsalImg from "../../assets/sports/futsal.jpg";
import squashImg from "../../assets/sports/squash.jpg";
import volleyballImg from "../../assets/sports/volleyball.jpg";
import gymImg from "../../assets/sports/gym.jpg";
import tableTennisImg from "../../assets/sports/table-tennis.jpg";
import runningTrackImg from "../../assets/sports/running-track.jpg";

const sports = [
  {
    title: "Tennis Court",
    image: tennisImg,
    category: "sports",
    sub: "Professional 8-layer ITF certified acrylic cushion surfacing & tournament fencing.",
  },
  {
    title: "Basketball Court",
    image: basketballImg,
    category: "sports",
    sub: "FIBA standard heavy-duty acrylic, shock absorption and interlocking tile systems.",
  },
  {
    title: "Badminton Court",
    image: badmintonImg,
    category: "sports",
    sub: "BWF certified teakwood sprung & non-slip vinyl shock-absorbent flooring.",
  },
  {
    title: "Pickleball Court",
    image: pickleballImg,
    category: "sports",
    sub: "USAPA standard high-traction hardcourt and premium cushion acrylic systems.",
  },
  {
    title: "Box Cricket & Futsal Turf",
    image: futsalImg,
    category: "sports",
    sub: "50mm FIFA quality monofilament grass, high-impact netting & 30ft caged arenas.",
  },
  {
    title: "Squash Court",
    image: squashImg,
    category: "sports",
    sub: "WSF approved impact-rebound plaster walls and Canadian maple sprung flooring.",
  },
  {
    title: "Volleyball Court",
    image: volleyballImg,
    category: "sports",
    sub: "Indoor/outdoor seamless polyurethane resilient elastic flooring & net fixtures.",
  },
  {
    title: "Gym & Fitness Flooring",
    image: gymImg,
    category: "sports",
    sub: "Commercial grade high-density shock-absorbing acoustic rubber gym tiles & rolls.",
  },
  {
    title: "Table Tennis",
    image: tableTennisImg,
    category: "sports",
    sub: "ITTF approved anti-glare, anti-slip resilient PVC sports matting systems.",
  },
  {
    title: "Synthetic Running Track",
    image: runningTrackImg,
    category: "sports",
    sub: "IAAF/World Athletics certified sandwich & full PU impermeable running tracks.",
  },
];

const coatings = [
  { name: "Tournament Ocean & Forest", inner: "#0066CC", outer: "#003366", lines: "#FFFFFF" },
  { name: "Classic French Terracotta", inner: "#CC4422", outer: "#882211", lines: "#FFFFFF" },
  { name: "Wimbledon Deep Grass", inner: "#1E7E34", outer: "#155724", lines: "#FFFFFF" },
];

export default function SportsCourts({ onOpenQuote }) {
  const [selectedCoating, setSelectedCoating] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const handleConsultation = (serviceName = "Sports Arena Construction") => {
    if (onOpenQuote) {
      onOpenQuote(serviceName);
    } else {
      navigate(`/Contact?service=${encodeURIComponent(serviceName)}`);
    }
  };

  const filteredSports = activeTab === "civil"
    ? []
    : sports;

  return (
    <div className="sports-page">

      {/* HERO */}
      <section className="sports-hero" data-aos="fade-up">

        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-down">
            🏆 PREMIUM SPORTS INFRASTRUCTURE
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100">
            World-Class
            <span> Sports Arenas</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            Design, engineering and turnkey development of
            high-performance sports facilities built to
            international standards.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={() => {
                const el = document.getElementById("facilities-grid");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Facilities →
            </button>
            <button
              className="outline-btn"
              onClick={() => handleConsultation("Sports Infrastructure Consultation")}
            >
              Get Consultation
            </button>
          </div>
        </div>

      </section>

      {/* CATEGORY TABS */}
      <section className="category-section" data-aos="fade-up">

        <div className="category-tabs">

          <button
            className={`category ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Engineering
            <small>14</small>
          </button>

          <button
            className={`category ${activeTab === "sports" ? "active" : ""}`}
            onClick={() => setActiveTab("sports")}
          >
            🏆 Sports Arenas & Surfaces
          </button>

          <button
            className={`category ${activeTab === "civil" ? "active" : ""}`}
            onClick={() => navigate("/Services")}
          >
            🏢 Civil & Building Engineering
          </button>

        </div>

      </section>

      {/* INTRO */}
      <section className="content-container" id="facilities-grid">

        <div className="section-heading" data-aos="fade-down">
          <span>OUR SPORTS FACILITIES</span>

          <h2>
            Built for
            <strong> Performance.</strong>
          </h2>

          <p>
            From professional tennis courts to multi-sport
            arenas, we deliver complete sports infrastructure
            solutions from concept to handover.
          </p>
        </div>

        {/* SPORTS GRID */}
        <div className="sports-facilities">
          <div className="sports-grid">

            {filteredSports.map((sport, index) => (
              <article
                className="sport-card"
                key={sport.title}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                onClick={() => handleConsultation(sport.title)}
              >

                {/* GAME IMAGE */}
                <div className="sport-image">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    loading="lazy"
                  />
                  <div className="sport-image-overlay" />
                </div>

                {/* CONTENT */}
                <div className="sport-content">
                  <h3>{sport.title}</h3>

                  <p>
                    {sport.sub || "Professional quality sports infrastructure designed and constructed to high standards."}
                  </p>

                  <button className="explore-btn" type="button">
                    Explore Facility
                    <span>→</span>
                  </button>
                </div>

              </article>
            ))}

          </div>
        </div>

        {/* COATING */}
        <div className="coating-section" data-aos="fade-up">

          <div className="coating-title">
            <span>🎨</span>
            <div>
              <small>SURFACE FINISHES</small>
              <h3>Premium Court Coatings</h3>
            </div>
          </div>

          <div className="coating-options">

            {coatings.map((item, index) => (
              <button
                className={index === selectedCoating ? "selected" : ""}
                key={item.name}
                onClick={() => setSelectedCoating(index)}
              >
                {item.name}
              </button>
            ))}

          </div>

        </div>

        {/* COURT PREVIEW */}
        <div className="court-preview" data-aos="fade-up">

          <div className="preview-header">
            <div>
              <small>TECHNICAL DRAWING</small>
              <h3>ITF Certified Pace 3 Medium ({coatings[selectedCoating].name})</h3>
            </div>

            <span>2D BLUEPRINT</span>
          </div>

          <div className="court-wrapper">

            <div
              className="court"
              style={{
                backgroundColor: coatings[selectedCoating].outer,
                borderColor: coatings[selectedCoating].lines
              }}
            >
              <div
                className="court-inner"
                style={{
                  backgroundColor: coatings[selectedCoating].inner,
                  borderColor: coatings[selectedCoating].lines
                }}
              >
                <div className="court-line center-line" style={{ backgroundColor: coatings[selectedCoating].lines }}></div>

                <div className="court-line service-line top" style={{ backgroundColor: coatings[selectedCoating].lines }}></div>
                <div className="court-line service-line bottom" style={{ backgroundColor: coatings[selectedCoating].lines }}></div>

                <div className="court-line side-left" style={{ backgroundColor: coatings[selectedCoating].lines }}></div>
                <div className="court-line side-right" style={{ backgroundColor: coatings[selectedCoating].lines }}></div>

                <div className="net"></div>
              </div>

              <span className="dimension top-dimension">
                23.77m (78.0ft)
              </span>

              <span className="dimension left-dimension">
                10.97m (36ft)
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="sports-cta" data-aos="fade-up">

        <div>
          <span>READY TO BUILD?</span>

          <h2>
            Let's Build Your
            <strong> Sports Facility.</strong>
          </h2>
        </div>

        <button
          onClick={() => handleConsultation("Start Sports Facility Project")}
        >
          Start Your Project →
        </button>

      </section>

    </div>
  );
}
export { SportsCourts as SportsCourtsPage };
