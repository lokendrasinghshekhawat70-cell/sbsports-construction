import React from "react";
import "./Reviews.css";
import {
  Star,
  Quote,
  CheckCircle2,
  Award,
  ShieldCheck,
  Building2,
  ThumbsUp,
  Trophy,
  Home,
  Sparkles
} from "lucide-react";

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "SB SPORTS & CONSTRUCTION transformed our sports club layout into an international tournament grade facility. The 8-layer ITF acrylic tennis court bounce and non-skid color coating are flawless!",
      author: "Metropolitan Sports Club",
      role: "Club Secretary",
      project: "8-Layer ITF Acrylic Tennis Court",
      rating: 5,
      avatarInitials: "MS",
      verified: true,
      city: "Sports Complex",
      date: "August 2026"
    },
    {
      id: 2,
      quote: "Our commercial box cricket arena has been running 18 hours a day with zero turf wear. The 30ft high galvanized steel cage and 300+ Lux LED high-masts were installed with total precision.",
      author: "Commercial Sports Hub",
      role: "Arena Operations Director",
      project: "High-Mast Box Cricket & Futsal Turf",
      rating: 5,
      avatarInitials: "CS",
      verified: true,
      city: "Commercial Sector",
      date: "July 2026"
    },
    {
      id: 3,
      quote: "SB SPORTS & CONSTRUCTION delivered our luxury 2-story family villa on time. Timber rafters, high-pitch roof shingle installation, and masonry were done with absolute craftsmen perfection.",
      author: "Verified Villa Owner",
      role: "Residential Client",
      project: "Turnkey Luxury Villa Construction",
      rating: 5,
      avatarInitials: "VV",
      verified: true,
      city: "Residential Enclave",
      date: "June 2026"
    },
    {
      id: 4,
      quote: "The BWF approved indoor badminton hall vinyl flooring and sprung timber sub-floor framework gave our academy players world-class joint protection and traction during matches.",
      author: "National Sports Academy",
      role: "Head Badminton Coach",
      project: "BWF Indoor Badminton Hall",
      rating: 5,
      avatarInitials: "NA",
      verified: true,
      city: "Sports Academy",
      date: "May 2026"
    }
  ];

  const certifications = [
    { title: "Synthetic Sports Infrastructure", desc: "ITF, BWF & FIFA Certified Court Construction" },
    { title: "Turnkey Residential Construction", desc: "Craftsman Framing, Roofing & Turnkey Handover" },
    { title: "ISO 9001:2015 Civil Standards", desc: "Certified Engineering Audits & Quality Control" },
    { title: "Zero-Puddle Gradient Guarantee", desc: "Laser-Screed Sub-Base Precision Leveling" },
    { title: "On-Site Safety Protocols", desc: "Mandatory Hard Hat & Zero-Accident Compliance" }
  ];

  return (
    <div className="reviews-page-wrapper">
      {/* Page Banner Header */}
      <div className="reviews-hero-banner" data-aos="fade-up">
        <div className="container">
          <div className="reviews-pill-badge" data-aos="fade-down">
            <ThumbsUp size={15} />
            <span>SB SPORTS & CONSTRUCTION VERIFIED REVIEWS</span>
          </div>
          <h1 className="reviews-page-title" data-aos="fade-up" data-aos-delay="100">
            CLIENT VERIFICATIONS <br />
            <span>& AUDITED TESTIMONIALS</span>
          </h1>
          <p className="reviews-page-subtitle" data-aos="fade-up" data-aos-delay="200">
            Read verified reviews from clients who constructed Sports Infrastructure and Turnkey Residential Houses with SB SPORTS & CONSTRUCTION.
          </p>

          {/* Rating Summary Pill */}
          <div className="reviews-rating-pill" data-aos="zoom-in" data-aos-delay="300">
            <div className="reviews-rating-score">4.9</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FF7A00" color="#FF7A00" />
                ))}
              </div>
              <span style={{ fontSize: "0.82rem", color: "#CBD5E1", fontWeight: 700 }}>Based on 500+ Completed Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "60px" }}>
        {/* Testimonials Grid */}
        <div className="reviews-grid-wrap">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="reviews-card"
              data-aos="fade-up"
              data-aos-delay={((idx % 3) + 1) * 100}
            >
              <div>
                <div className="reviews-card-top">
                  <div className="reviews-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#FF7A00" color="#FF7A00" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: "#0084FF", opacity: 0.7 }} />
                </div>

                <p className="reviews-quote-text">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="reviews-tag">
                  <Trophy size={13} style={{ color: "#0084FF" }} />
                  <span>{t.project} • {t.city}</span>
                </div>

                <div className="reviews-author-row">
                  <div className="reviews-avatar">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div className="reviews-author-name">
                      <span>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 size={15} style={{ color: "#0084FF" }} title="Verified Technical Review" />
                      )}
                    </div>
                    <div className="reviews-author-role">{t.role} ({t.date})</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Bar */}
        <div className="reviews-accred-panel" data-aos="fade-up">
          <div className="reviews-accred-head">
            <Award size={24} style={{ color: "#0084FF" }} />
            <span>Licensed & Certified By Leading International Authorities</span>
          </div>
          <div className="reviews-accred-grid">
            {certifications.map((c, idx) => (
              <div key={idx} className="reviews-accred-item">
                <ShieldCheck size={20} />
                <div>
                  <div className="reviews-accred-title">{c.title}</div>
                  <div className="reviews-accred-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
