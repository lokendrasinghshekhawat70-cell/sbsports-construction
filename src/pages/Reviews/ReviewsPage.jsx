import React, { useState } from "react";
import "./Reviews.css";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Building2, 
  ThumbsUp,
  Filter,
  MessageSquarePlus,
  Send
} from "lucide-react";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState("all");
  const [showAddReview, setShowAddReview] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", project: "", rating: 5, comment: "" });

  const testimonials = [
    {
      id: 1,
      quote: "MANOBHAV CONSTRUCTION was the total opposite of unreliable builders: they delivered our residential 2-story home on time, with timber rafters and high-pitch roofing done with absolute perfection. True to their word: building dreams, brick by brick.",
      author: "David & Dr. Eleanor Vance",
      role: "Homeowners",
      project: "Residential House & Roofing (Picture Detail)",
      rating: 5,
      avatarInitials: "DV",
      verified: true,
      city: "Residential Zone",
      date: "August 2026"
    },
    {
      id: 2,
      quote: "MANOBHAV CONSTRUCTION managed our commercial multi-story concrete tower with flawless engineering. Their yellow tower crane operations and strict site safety gave our team total confidence from foundation to final floor slab.",
      author: "Harrison Sterling",
      role: "Commercial Project Director",
      project: "Commercial Multi-Story Concrete Superstructure",
      rating: 5,
      avatarInitials: "HS",
      verified: true,
      city: "Commercial Sector",
      date: "July 2026"
    },
    {
      id: 3,
      quote: "The groundwork and hydraulic excavator earthmoving were carried out with surgical precision. Their brick masonry stacks and solid foundation gave our development the strongest civil footing possible.",
      author: "Samantha & Brian Cole",
      role: "Civil Infrastructure Lead",
      project: "Infrastructure Earthworks & Foundation",
      rating: 5,
      avatarInitials: "SC",
      verified: true,
      city: "Infrastructure Zone",
      date: "May 2026"
    },
    {
      id: 4,
      quote: "From blueprint drafting to on-site yellow safety hard hat protocols, the engineering team worked flawlessly. You can see the dedication in every brick.",
      author: "Vikram & Ananya Patel",
      role: "Residential Homeowner",
      project: "Residential Timber Frame Residence",
      rating: 5,
      avatarInitials: "VP",
      verified: true,
      city: "Residential Zone",
      date: "April 2026"
    }
  ];

  const certifications = [
    { title: "House & Building Construction", desc: "Turnkey Civil & Structural Engineering" },
    { title: "Residential Development", desc: "Craftsman Timber Framing & Roofing" },
    { title: "Commercial Projects", desc: "High-Rise Concrete & Crane Operations" },
    { title: "Infrastructure Works", desc: "Hydraulic Excavation & Foundation Masonry" },
    { title: "Site Safety Hard Hat Protocol", desc: "Zero-Accident Safety Compliance" }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewSubmitted(true);
  };

  return (
    <div className="reviews-page-wrapper">
      <div className="page-hero-banner">
        <div className="container">
          <div className="section-pill">
            <ThumbsUp size={14} />
            <span>MANOBHAV CONSTRUCTION FEEDBACK</span>
          </div>
          <h1 className="page-main-title">
            HOUSE & BUILDING <span className="text-gradient-amber">CONSTRUCTION REVIEWS</span>
          </h1>
          <p className="page-main-subtitle">
            Read verified reviews from clients who built their Residential Development, Commercial Projects, and Infrastructure Works with MANOBHAV CONSTRUCTION. Building your dreams, brick by brick.
          </p>

          {/* Rating Summary Bar */}
          <div className="rating-summary-pill glass-card">
            <div className="rating-giant">4.9</div>
            <div className="rating-stars-col">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="rating-count">Based on 420+ Verified Turnkey Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Testimonials Grid */}
        <div className="testimonials-grid" style={{ marginBottom: 48 }}>
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testi-stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <Quote size={26} className="testi-quote-icon" />
              </div>

              <p className="testi-body-text">"{t.quote}"</p>

              <div className="testi-project-pill">
                <Building2 size={13} className="text-amber" />
                <span>{t.project} • {t.city}</span>
              </div>

              <div className="testi-author-row">
                <div className="testi-avatar-circle">
                  {t.avatarInitials}
                </div>
                <div className="testi-author-info">
                  <div className="author-name-wrap">
                    <span className="author-name">{t.author}</span>
                    {t.verified && (
                      <CheckCircle2 size={14} className="text-green verified-icon" title="Verified Client" />
                    )}
                  </div>
                  <span className="author-role">{t.role} ({t.date})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Bar */}
        <div className="certifications-bar glass-card">
          <div className="cert-bar-header">
            <Award size={20} className="text-amber" />
            <span>Licensed & Certified By Leading Industry Authorities</span>
          </div>
          <div className="cert-items-grid">
            {certifications.map((c, idx) => (
              <div key={idx} className="cert-badge-item">
                <ShieldCheck size={18} className="text-amber cert-icon" />
                <div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
