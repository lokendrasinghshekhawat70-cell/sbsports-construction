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
      quote: "MANOBHAV CONSTRUCTION was the total opposite of unreliable builders: they delivered our residential 2-story home on time, with timber rafters and high-pitch roofing done with absolute perfection. True to their word: building dreams, brick by brick.",
      author: "David & Dr. Eleanor Vance",
      role: "Homeowners",
      project: "Residential House & Roofing (Picture Detail)",
      rating: 5,
      avatarInitials: "DV",
      verified: true
    },
    {
      id: 2,
      quote: "MANOBHAV CONSTRUCTION managed our commercial multi-story concrete tower with flawless engineering. Their yellow tower crane operations and strict site safety gave our team total confidence from foundation to final floor slab.",
      author: "Harrison Sterling",
      role: "Commercial Project Director",
      project: "Commercial Multi-Story Concrete Superstructure",
      rating: 5,
      avatarInitials: "HS",
      verified: true
    },
    {
      id: 3,
      quote: "The groundwork and hydraulic excavator earthmoving were carried out with surgical precision. Their brick masonry stacks and solid foundation gave our development the strongest civil footing possible.",
      author: "Samantha & Brian Cole",
      role: "Civil Infrastructure Lead",
      project: "Infrastructure Earthworks & Foundation",
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
            HOUSE & BUILDING CONSTRUCTION <br />
            <span className="text-gradient-amber">Building Your Dreams, Brick By Brick</span>
          </h2>
          <p className="section-subtitle">
            See why clients recommend MANOBHAV CONSTRUCTION for Residential Development, Commercial Projects, and Infrastructure Works.
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
