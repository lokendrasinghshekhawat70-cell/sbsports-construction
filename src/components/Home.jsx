import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  Trophy,
  Building2,
  ShieldCheck,
  Clock,
  Award,
  HardHat,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Layers,
  Check,
  Star,
  Activity,
  Wrench,
  Globe2,
  Headphones,
  Compass,
  FileSpreadsheet
} from "lucide-react";

export default function Home({ onOpenQuote }) {
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      category: "sports",
      categoryName: "Sports Infrastructure",
      title: "Championship 8-Layer Acrylic Tennis Arena",
      location: "Metropolitan Sports Complex",
      status: "Turnkey Completed",
      image: "sports_tennis_court.jpg",
      description: "8-layer ITF cushion acrylic surface system with laser-screed sub-base gradient and high-mast LED floodlights."
    },
    {
      id: 2,
      category: "sports",
      categoryName: "Sports Infrastructure",
      title: "High-Mast Box Cricket & Futsal Turf Arena",
      location: "Commercial Sports Hub",
      status: "Turnkey Completed",
      image: "sports_box_cricket_turf.jpg",
      description: "50mm FIFA standard monofilament turf with 30ft heavy-duty steel truss cage and tournament night illumination."
    },
    {
      id: 3,
      category: "sports",
      categoryName: "Sports Infrastructure",
      title: "BWF Standard Indoor Badminton Pavilion",
      location: "National Sports Academy",
      status: "Certified & Handed Over",
      image: "sports_badminton_court.jpg",
      description: "Sprung hardwood sub-floor with competition-grade anti-slip vinyl court matting and glare-free illumination."
    },
    {
      id: 4,
      category: "civil",
      categoryName: "Civil Construction",
      title: "Multi-Storey Commercial Complex",
      location: "Prime Business District",
      status: "Turnkey EPC Handover",
      image: "commercial.jpg",
      description: "Complete RCC frame structure, high-grade concrete engineering, facade installation, and turnkey interior fit-out."
    },
    {
      id: 5,
      category: "civil",
      categoryName: "Civil Construction",
      title: "Industrial PEB Steel Warehouse Structure",
      location: "Industrial Logistics Zone",
      status: "Heavy PEB Completed",
      image: "steel_structure.jpg",
      description: "Pre-engineered heavy steel trusses, durable industrial flooring with laser screed, and insulated roofing panels."
    },
    {
      id: 6,
      category: "civil",
      categoryName: "Civil Construction",
      title: "Luxury Turnkey Residential Villa",
      location: "Exclusive Residential Enclave",
      status: "Turnkey Handover",
      image: "villa.jpg",
      description: "High-pitch roof shingle framing, RCC raft foundations, architectural masonry, and turnkey luxury handover."
    }
  ];

  const filteredProjects = activeProjectFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeProjectFilter);

  // 10 Sports Facilities as requested
  const sportsFacilities = [
    {
      image: "sports_tennis_court.jpg",
      number: "01",
      title: "Tennis Courts",
      sub: "8-Layer ITF Cushion Acrylic Surfacing",
      link: "/sports-courts"
    },
    {
      image: "sports_box_cricket_turf.jpg",
      number: "02",
      title: "Box Cricket",
      sub: "50mm FIFA Mono-Filament Grass & 30ft Cages",
      link: "/sports-courts"
    },
    {
      image: "sports_arena_complex_big.jpg",
      number: "03",
      title: "Futsal",
      sub: "Synthetic Turf & High-Impact Enclosures",
      link: "/sports-courts"
    },
    {
      image: "sports_badminton_court.jpg",
      number: "04",
      title: "Badminton",
      sub: "BWF Grade Wooden & Vinyl Flooring Systems",
      link: "/sports-courts"
    },
    {
      image: "sports_basketball_court.jpg",
      number: "05",
      title: "Basketball",
      sub: "FIBA Standard Acrylic & Interlocking Tiles",
      link: "/sports-courts"
    },
    {
      image: "sports_pickleball_court.jpg",
      number: "06",
      title: "Pickleball",
      sub: "USAPA Tournament Hardcourt & Cushion Surfaces",
      link: "/sports-courts"
    },
    {
      image: "sports_running_track.jpg",
      number: "07",
      title: "Running Track",
      sub: "IAAF Certified Full PU & Sandwich Synthetic Tracks",
      link: "/sports-courts"
    },
    {
      image: "sports_gym_flooring.jpg",
      number: "08",
      title: "Gym & Fitness Arenas",
      sub: "High-Density Shock-Absorbent Rubber Flooring",
      link: "/sports-courts"
    },
    {
      image: "sports_squash_court.jpg",
      number: "09",
      title: "Squash Courts",
      sub: "WSF Standard Hardwood & Rebound Plaster Walls",
      link: "/sports-courts"
    },
    {
      image: "sports_table_tennis.jpg",
      number: "10",
      title: "Table Tennis",
      sub: "ITTF Approved Non-Slip Vinyl Matting",
      link: "/sports-courts"
    }
  ];

  // 6-Stage Turnkey Process as specified
  const turnkeyStages = [
    {
      num: "01",
      title: "Site Survey & Soil Analysis",
      desc: "Topographical survey, GIS land mapping, sub-soil bearing capacity analysis, and drainage gradient design."
    },
    {
      num: "02",
      title: "CAD Design & BOQ",
      desc: "3D architectural modeling, structural load calculations, and itemized transparent Bill of Quantities (BOQ)."
    },
    {
      num: "03",
      title: "Foundation & RCC",
      desc: "Heavy-duty laser-screed compaction, RCC sub-base construction, waterproof membranes, and perimeter curbing."
    },
    {
      num: "04",
      title: "Synthetic Surface & Framing",
      desc: "Application of ITF 8-layer acrylic cushions, FIFA non-abrasive turf, sprung hardwood, or heavy PEB framing."
    },
    {
      num: "05",
      title: "Lighting, Fencing & Netting",
      desc: "High-mast tournament LED floodlighting (300-500 Lux), heavy galvanized cages, and anti-impact safety netting."
    },
    {
      num: "06",
      title: "QA Audit & Handover",
      desc: "Zero-puddle gradient testing, bounce consistency certification, final client walkthrough, and turnkey warranty handover."
    }
  ];

  // 6 Why Choose Us as requested
  const whyChooseUsData = [
    {
      icon: <Layers size={32} color="#0084FF" />,
      title: "Turnkey Execution",
      desc: "End-to-end single-point responsibility from initial soil testing to final handover, eliminating multi-vendor delays."
    },
    {
      icon: <Award size={32} color="#FF7A00" />,
      title: "Engineering Expertise",
      desc: "15+ years of certified engineering mastery strictly adhering to IS 456 / IS 1893 and international ITF, BWF, and FIFA standards."
    },
    {
      icon: <ShieldCheck size={32} color="#0084FF" />,
      title: "Quality Materials",
      desc: "Only laboratory-tested certified polymers, high-density acrylic resins, hot-dip galvanized steel, and M30+ concrete."
    },
    {
      icon: <HardHat size={32} color="#FF7A00" />,
      title: "Professional Project Management",
      desc: "Dedicated on-site project engineers, daily progress tracking, milestone governance, and zero-defect compliance."
    },
    {
      icon: <Globe2 size={32} color="#0084FF" />,
      title: "Pan-India Execution",
      desc: "Proven nationwide track record delivering prestigious sports complexes, institutional facilities, and commercial hubs."
    },
    {
      icon: <Headphones size={32} color="#FF7A00" />,
      title: "Technical Support",
      desc: "Long-term surface warranty, preventive maintenance protocols, and dedicated 24/7 client engineering assistance."
    }
  ];

  const testimonialsData = [
    {
      initials: "MS",
      name: "Metropolitan Sports Club",
      designation: "Executive Board",
      project: "8-Layer Acrylic Tennis & Badminton Pavilion",
      quote: "SB SPORTS & CONSTRUCTION transformed our facility into an international tournament grade sports complex. The laser sub-base leveling and 8-layer ITF acrylic coating bounce are flawless."
    },
    {
      initials: "CS",
      name: "Commercial Sports Hub",
      designation: "Arena Operations Director",
      project: "Dual Box Cricket & Futsal Turf Arena",
      quote: "Our box cricket facility runs 18 hours daily with zero turf degradation. The 30ft galvanized steel cage and tournament-grade LED high-masts were installed with master-level engineering precision."
    },
    {
      initials: "RC",
      name: "Apex Infrastructure Group",
      designation: "Project Director",
      project: "Turnkey Commercial Complex & PEB",
      quote: "Delivered 65,000 sq. ft. of structural civil construction on time. Transparent itemized BOQ, zero cost overruns, and outstanding structural steel craftsmanship."
    }
  ];

  const trustBadges = [
    { label: "ITF Certified", sub: "8-Layer Cushion Acrylic Surfacing" },
    { label: "BWF Standards", sub: "Sprung Wood & Vinyl Flooring" },
    { label: "ISO 9001:2015", sub: "Audited Quality Management" },
    { label: "IS 456 & IS 1893", sub: "Certified Structural Engineering" }
  ];

  return (
    <main className="sb-home-container">
      {/* 1. FULLSCREEN CINEMATIC HERO (100vh) */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-tag" data-aos="fade-down" data-aos-duration="600">
            PREMIUM SPORTS INFRASTRUCTURE & CIVIL CONSTRUCTION
          </p>

          <h1 data-aos="fade-up" data-aos-duration="750" data-aos-delay="100">
            ENGINEERING
            <span> SPACES.</span>
            <br />
            BUILDING
            <span> CHAMPIONS.</span>
          </h1>

          <p className="hero-description" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
            Turnkey sports infrastructure and high-precision civil engineering built to international standards from blueprint to handover.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-duration="750" data-aos-delay="300">
            <Link to="/Projects" className="btn-primary">
              <span>Explore Our Work</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/Contact" className="btn-outline">
              <span>Get Free Consultation</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll" data-aos="fade-up" data-aos-delay="400">
          <span></span>
          SCROLL TO EXPLORE
        </div>

        <div className="hero-number" data-aos="fade-left" data-aos-delay="400">
          01 / 06
        </div>
      </section>

      {/* 2. ANIMATED STATISTICS */}
      <section className="stats" data-aos="fade-up" data-aos-duration="750">
        <div className="stat" data-aos="fade-up" data-aos-delay="100">
          <strong>500+</strong>
          <span>Sports Arenas & Courts</span>
        </div>

        <div className="stat" data-aos="fade-up" data-aos-delay="200">
          <strong>1.5M+</strong>
          <span>Sq. Ft. Built</span>
        </div>

        <div className="stat" data-aos="fade-up" data-aos-delay="300">
          <strong>100%</strong>
          <span>Quality & Standard Compliance</span>
        </div>

        <div className="stat" data-aos="fade-up" data-aos-delay="400">
          <strong>48 HRS</strong>
          <span>Technical Feasibility Audit</span>
        </div>
      </section>

      {/* 3. PREMIUM ABOUT SECTION (Split Layout) */}
      <section className="about" data-aos="fade-up">
        <div className="about-image" data-aos="fade-right" data-aos-duration="800">
          <img
            src="/images/sports_arena_complex_big.jpg"
            alt="SB Sports & Construction Landmark Infrastructure"
          />

          <div className="image-badge">
            SB SPORTS
            <small>EST. 2005</small>
          </div>
        </div>

        <div className="about-content" data-aos="fade-left" data-aos-duration="800">
          <p className="section-label">
            ABOUT SB SPORTS & CONSTRUCTION
          </p>

          <h2>
            Building the Foundation of Champions &
            <span> Modern Infrastructure</span>
          </h2>

          <p>
            SB SPORTS & CONSTRUCTION is a premier turnkey builder specializing in international tournament sports facilities and comprehensive civil building engineering. With an integrated in-house team of structural engineers, architects, and laser-guided surfacing specialists, we take complete single-point responsibility from initial soil testing to final warranty handover across India.
          </p>

          <div className="about-points">
            <div data-aos="fade-up" data-aos-delay="100">
              <b>01</b>
              <span>Master Engineering & Design</span>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <b>02</b>
              <span>Single-Point Turnkey Execution</span>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <b>03</b>
              <span>Pan-India Certified Delivery</span>
            </div>
          </div>

          <Link to="/Services" className="text-link">
            Discover Our Story & Capabilities ↗
          </Link>
        </div>
      </section>

      {/* 4. TWO MAIN DIVISIONS */}
      <section className="divisions-section" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down">
          <p>CORE ENGINEERING DIVISIONS</p>
          <h2>
            TWO PILLARS OF
            <span> EXCELLENCE.</span>
          </h2>
        </div>

        <div className="divisions-grid">
          {/* Card 1: Sports Infrastructure */}
          <article className="division-card" data-aos="fade-right" data-aos-duration="800">
            <img src="/images/integral_sports_stadium_hero.jpg" alt="Sports Infrastructure" />
            <div className="division-overlay"></div>
            <div className="division-number">01 / DIVISION</div>

            <div className="division-content">
              <span className="division-tag">SPORTS INFRASTRUCTURE</span>
              <h3>World-Class Sports Arenas</h3>

              <ul className="division-items">
                <li>• ITF 8-Layer Acrylic Tennis Courts</li>
                <li>• 50mm FIFA Turf Box Cricket & Futsal</li>
                <li>• BWF Sprung Wood Badminton Pavilions</li>
                <li>• FIBA Standard Basketball Arenas</li>
                <li>• USAPA Tournament Pickleball Courts</li>
                <li>• IAAF Synthetic Athletic Running Tracks</li>
              </ul>

              <Link to="/sports-courts" className="division-btn">
                <span>Explore Sports Infrastructure</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>

          {/* Card 2: Civil Construction */}
          <article className="division-card" data-aos="fade-left" data-aos-duration="800">
            <img src="/images/integral_civil_commercial_hero.jpg" alt="Civil Construction" />
            <div className="division-overlay"></div>
            <div className="division-number">02 / DIVISION</div>

            <div className="division-content">
              <span className="division-tag">CIVIL CONSTRUCTION</span>
              <h3>Turnkey Civil Engineering</h3>

              <ul className="division-items">
                <li>• Turnkey RCC Commercial Buildings</li>
                <li>• Industrial PEB Heavy Steel Warehouses</li>
                <li>• Luxury Turnkey Residential Villas</li>
                <li>• Heavy Raft Foundations & Laser Screed</li>
                <li>• Structural Earthworks & Retaining Walls</li>
                <li>• Complete Architectural EPC Contracting</li>
              </ul>

              <Link to="/Services" className="division-btn">
                <span>Explore Civil Construction</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 5. SPORTS FACILITIES (10 Facilities Grid) */}
      <section className="sports-section" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down" data-aos-duration="700">
          <p>SPECIALIZED ARENAS & COURTS</p>
          <h2>
            SPORTS FACILITIES
            <span> & ARENAS.</span>
          </h2>
        </div>

        <div className="sports-grid-10">
          {sportsFacilities.map((facility, idx) => (
            <article
              className="sport-card"
              key={facility.title}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={(idx % 3) * 100}
            >
              <img src={`/images/${facility.image}`} alt={facility.title} />
              <div className="sport-overlay"></div>
              <div className="sport-number">{facility.number}</div>
              <div className="sport-card-content">
                <p>TURNKEY SPORTS ARENA</p>
                <h3>{facility.title}</h3>
                <small className="sport-subtext">{facility.sub}</small>
                <Link to={facility.link} className="sport-explore-link">
                  Explore Facility ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. TURNKEY EXECUTION PROCESS (6-Stage Timeline) */}
      <section className="process-section" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down">
          <p>OUR TURNKEY ROADMAP</p>
          <h2>
            01 TO 06
            <span> EXECUTION PROCESS.</span>
          </h2>
        </div>

        <div className="process-timeline">
          {turnkeyStages.map((stage, idx) => (
            <div
              key={stage.num}
              className="process-step-card"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="process-step-header">
                <span className="process-num">{stage.num}</span>
                <div className="process-indicator-dot"></div>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LARGE EDITORIAL PROJECT SHOWCASE */}
      <section className="projects" data-aos="fade-up">
        <div className="project-intro" data-aos="fade-down" data-aos-duration="700">
          <p>LANDMARK SHOWCASE</p>
          <h2>
            FROM
            <span> BLUEPRINT</span>
            <br />
            TO REALITY.
          </h2>
        </div>

        {/* Featured Card */}
        <div className="project-feature" data-aos="fade-up" data-aos-duration="800">
          <img src="/images/sports_arena_complex_big.jpg" alt="Multi-Sport Arena & Training Complex" />

          <div className="project-info">
            <small>01 / SPORTS INFRASTRUCTURE</small>
            <h3>
              Multi-Sport Arena & Training Complex
            </h3>
            <p>
              Turnkey sports facility development with multi-tier seating, 8-layer ITF cushion acrylic surfacing, and tournament high-mast illumination.
            </p>
            <Link to="/Projects">
              View Project ↗
            </Link>
          </div>
        </div>

        {/* Filter Portfolio Tabs */}
        <div className="portfolio-filter-section" style={{ padding: "50px 0 0 0", background: "transparent" }}>
          <div className="portfolio-filter-tabs" data-aos="fade-up">
            <button
              type="button"
              className={`filter-btn ${activeProjectFilter === "all" ? "filter-btn-active" : ""}`}
              onClick={() => setActiveProjectFilter("all")}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeProjectFilter === "sports" ? "filter-btn-active" : ""}`}
              onClick={() => setActiveProjectFilter("sports")}
            >
              Sports Infrastructure
            </button>
            <button
              type="button"
              className={`filter-btn ${activeProjectFilter === "civil" ? "filter-btn-active" : ""}`}
              onClick={() => setActiveProjectFilter("civil")}
            >
              Civil Construction
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="portfolio-item-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="portfolio-thumb-wrap">
                  <img src={`/images/${project.image}`} alt={project.title} />
                  <span className="portfolio-badge">{project.categoryName}</span>
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-meta">
                    <span>{project.location}</span>
                    <span>{project.status}</span>
                  </div>
                  <h4>{project.title}</h4>
                  <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.5, margin: "8px 0 16px 0" }}>
                    {project.description}
                  </p>
                  <Link to="/Projects" className="portfolio-view-link">
                    View Project ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US (6 Premium Cards) */}
      <section className="why-us-section" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down">
          <p>ENGINEERING CREDIBILITY</p>
          <h2>
            WHY CHOOSE
            <span> SB SPORTS & CONSTRUCTION.</span>
          </h2>
        </div>

        <div className="why-us-grid">
          {whyChooseUsData.map((item, idx) => (
            <div
              key={item.title}
              className="why-us-card"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="why-us-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="testimonials-section" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down">
          <p>CLIENT REPUTATION</p>
          <h2>
            VERIFIED
            <span> TESTIMONIALS.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.name}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FF7A00" color="#FF7A00" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <h4>{t.name}</h4>
                  <small>{t.designation} • {t.project}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CERTIFICATIONS & TRUST */}
      <section className="trust-strip-section" data-aos="fade-up">
        <div className="trust-grid">
          {trustBadges.map((badge, idx) => (
            <div
              key={badge.label}
              className="trust-item"
              data-aos="zoom-in"
              data-aos-delay={idx * 80}
            >
              <CheckCircle2 size={24} color="#0084FF" />
              <div>
                <strong>{badge.label}</strong>
                <span>{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL HIGH-IMPACT CTA */}
      <section className="final-cta-section" data-aos="fade-up">
        <div className="final-cta-container">
          <p className="final-cta-label">START YOUR TURNKEY PROJECT</p>
          <h2>
            LET'S BUILD SOMETHING
            <span> EXTRAORDINARY.</span>
          </h2>
          <p className="final-cta-desc">
            Partner with SB SPORTS & CONSTRUCTION for international tournament sports arenas and precision-engineered civil infrastructure.
          </p>

          <div className="final-cta-buttons">
            <Link
              to="/Contact"
              className="btn btn-primary"
            >
              <Sparkles size={18} />
              <span>Start Your Project</span>
            </Link>

            <a
              href="tel:+919636365391"
              className="btn btn-outline"
            >
              <PhoneCall size={18} />
              <span>Call Direct: +91-9636365391</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
