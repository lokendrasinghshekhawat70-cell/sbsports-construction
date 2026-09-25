import React from "react";
import "../pages/SportsCourts/SportsCourts.css";

import tennisImg from "../assets/sports/tennis.jpg";
import basketballImg from "../assets/sports/basketball.jpg";
import badmintonImg from "../assets/sports/badminton.jpg";
import pickleballImg from "../assets/sports/pickleball.jpg";
import futsalImg from "../assets/sports/futsal.jpg";
import squashImg from "../assets/sports/squash.jpg";
import volleyballImg from "../assets/sports/volleyball.jpg";
import gymImg from "../assets/sports/gym.jpg";
import tableTennisImg from "../assets/sports/table-tennis.jpg";
import runningTrackImg from "../assets/sports/running-track.jpg";

const sports = [
  {
    title: "Tennis Court",
    image: tennisImg,
    sub: "8-Layer ITF Cushion Acrylic Surfacing",
  },
  {
    title: "Basketball Court",
    image: basketballImg,
    sub: "FIBA Standard Acrylic & Interlocking Tiles",
  },
  {
    title: "Badminton Court",
    image: badmintonImg,
    sub: "BWF Grade Wooden & Vinyl Flooring Systems",
  },
  {
    title: "Pickleball Court",
    image: pickleballImg,
    sub: "USAPA Tournament Hardcourt & Cushion Surfaces",
  },
  {
    title: "Box Cricket & Futsal Turf",
    image: futsalImg,
    sub: "50mm FIFA Mono-Filament Grass & 30ft Cages",
  },
  {
    title: "Squash Court",
    image: squashImg,
    sub: "WSF Standard Hardwood & Rebound Plaster Walls",
  },
  {
    title: "Volleyball Court",
    image: volleyballImg,
    sub: "Outdoor PU Cushioned & Hardcourt Flooring",
  },
  {
    title: "Gym & Fitness Flooring",
    image: gymImg,
    sub: "High-Density Shock-Absorbent Rubber Flooring",
  },
  {
    title: "Table Tennis",
    image: tableTennisImg,
    sub: "ITTF Approved Non-Slip Vinyl Matting",
  },
  {
    title: "Synthetic Running Track",
    image: runningTrackImg,
    sub: "IAAF Certified Full PU & Sandwich Tracks",
  },
];

export default function SportsCourts({ onSelectSport }) {
  return (
    <section className="sports-facilities">
      <div className="sports-grid">
        {sports.map((sport) => (
          <article
            className="sport-card"
            key={sport.title}
            onClick={() => onSelectSport && onSelectSport(sport.title)}
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

              <button className="explore-btn">
                Explore Facility
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export { sports };
