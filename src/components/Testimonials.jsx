import React from "react";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Building2, 
  ThumbsUp
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "We had heard horror stories from colleagues about contractors hitting them with 30% price spikes and running a year behind. ApexBuild was the total opposite: they delivered our 6,200 sq ft contemporary villa 3 weeks ahead of schedule, and the closing invoice matched our original quote down to the exact dollar.",
      author: "David & Dr. Eleanor Vance",
      role: "Private Homeowners",
      project: "Custom Hillside Cantilevered Villa (6,200 sq ft)",
      rating: 5,
      avatarInitials: "DV",
      verified: true
    },
    {
      id: 2,
      quote: "As institutional real estate developers, timeline certainty is non-negotiable. ApexBuild managed our 58,000 sq ft tech headquarters with flawless site coordination. The live online portal gave our investment committee daily 4K drone progress and concrete cube test certifications in real time.",
      author: "Harrison Sterling",
      role: "Managing Director, Sterling Capital Investments",
      project: "Aura Tech Center & Glass Atrium",
      rating: 5,
      avatarInitials: "HS",
      verified: true
    },
    {
      id: 3,
      quote: "Our penthouse overhaul was complex because of strict HOA noise and dust restrictions. ApexBuild's HEPA isolation protocol was so effective our neighbors never heard a disturbance. The 16-foot waterfall Statuario marble island and fluted oak woodwork are absolute museum-grade craft.",
      author: "Samantha & Brian Cole",
      role: "Luxury Penthouse Owners",
      project: "Full Architectural Penthouse Remodel",
      rating: 5,
      avatarInitials: "SC",
      verified: true
    }
  ];

  const certifications = [
    { title: "LEED Gold Certified", desc: "Sustainable Green Building Standards" },
    { title: "OSHA 100% Compliant", desc: "Zero-Incident Safety Protocol" },
    { title: "Licensed Master Builders", desc: "License #GC-89421 State Verified" },
    { title: "ISO 9001:2015 Quality", desc: "Certified Civil & Structural Management" },
    { title: "National Home Builders Assn", desc: "Excellence in Craftsmanship Award" }
  ];

  return (
    <section id="reviews" className="section-padding testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <ThumbsUp size={15} />
            <span>Client Satisfaction</span>
          </div>
          <h2 className="section-title">
            Trusted By Over 350+ <br />
            <span className="text-gradient-amber">Homeowners & Developers</span>
          </h2>
          <p className="section-subtitle">
            See why 98% of our clients recommend ApexBuild for high-end residential estates, commercial facilities, and architectural renovations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
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
                <span>{t.project}</span>
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
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trust & Accreditation Bar */}
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
    </section>
  );
}
