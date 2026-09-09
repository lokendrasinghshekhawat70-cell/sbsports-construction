import React, { useState } from "react";
import "./SportsCourts.css";
import {
  Trophy,
  Layers,
  CheckCircle2,
  Zap,
  PhoneCall,
  Mail,
  Building,
  Hammer,
  ChevronRight,
  Sparkles,
  Camera,
  Maximize2,
  Eye,
  X
} from "lucide-react";

import CourtSimulator from "../../components/CourtSimulator";
import CoatingLayersVisualizer from "../../components/CoatingLayersVisualizer";
import GameThoughtsSection from "../../components/GameThoughtsSection";

export default function SportsCourtsPage({ onOpenQuote }) {
  const [activeDirectoryTab, setActiveDirectoryTab] = useState("all");
  const [selectedCourtModal, setSelectedCourtModal] = useState(null);
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState("all");

  // 13 High-Resolution Big Live Photos
  const bigGalleryPhotos = [
    {
      id: "big-complex",
      title: "World-Class Multi-Sport Stadium Complex & 400m Olympic Running Track",
      category: "outdoor",
      categoryName: "Mega Complex",
      image: "/images/sports_arena_complex_big.jpg",
      badge: "Turnkey Mega Arena",
      surface: "Olympic 400m Track, 8-Layer Acrylic Tennis, FIBA Basketball & Box Cricket",
      scale: "15-Acre Master Planned Sports Campus",
      featured: true
    },
    {
      id: "big-cricket",
      title: "High-Mast Floodlit Box Cricket & Futsal Turf Arena (30ft Heavy Cage)",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_box_cricket_turf.jpg",
      badge: "FIFA Standard Turf",
      surface: "50mm Monofilament PE Grass with Silica Sand & Heavy Cage Netting",
      scale: "100ft × 60ft Enclosure • 300+ Lux LED Night Illumination",
      featured: false
    },
    {
      id: "big-track",
      title: "IAAF Certified 8-Lane Polyurethane Synthetic Running Track",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_running_track.jpg",
      badge: "World Athletics Class 1",
      surface: "13mm Full-PUR / Sandwich Polyurethane with EPDM Broadcast Granules",
      scale: "400m Oval • 8 Parallel 1.22m Lanes with Steeplechase Pit",
      featured: false
    },
    {
      id: "big-gym",
      title: "Commercial High-Impact Gym Flooring & Functional Sled Turf Track",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_gym_flooring.jpg",
      badge: "Heavy Gym Grade",
      surface: "15mm–25mm Vulcanized Rubber Shock Tiles & Olympic Drop Platforms",
      scale: "Custom Modular Fitness Arenas (2,000 to 30,000+ sq ft)",
      featured: false
    },
    {
      id: "big-tennis",
      title: "Grand-Slam Standard 8-Layer Synthetic Acrylic Lawn Tennis Court",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_tennis_court.jpg",
      badge: "ITF Pace 3 Certified",
      surface: "8-Layer Acrylic Cushion with Laser-Screed 1:100 Drainage Gradient",
      scale: "78ft × 36ft (Enclosure: 120ft × 60ft)",
      featured: false
    },
    {
      id: "big-squash",
      title: "WSF International Championship Squash Court with Toughened Glass",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_squash_court.jpg",
      badge: "WSF Compliant",
      surface: "Armourcoat Hard Plaster Walls + Sprung European Maple Hardwood",
      scale: "9.75m × 6.4m × 5.64m Regulation Championship Enclosure",
      featured: false
    },
    {
      id: "big-tt",
      title: "Championship Table Tennis Arena & Indoor Pickleball Conversion Hall",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_table_tennis.jpg",
      badge: "ITTF Tournament Spec",
      surface: "25mm Non-Glare Surface + Point-Elastic PVC Sports Mat Underlayment",
      scale: "14.0m × 7.0m Tournament Barrier Enclosure",
      featured: false
    },
    {
      id: "big-basketball",
      title: "FIBA Level 1 Multi-Tone Synthetic Acrylic Basketball Arena",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_basketball_court.jpg",
      badge: "FIBA Regulation",
      surface: "Heavy-Duty Multi-Tone Acrylic / PU Cushion with Break-Away Hoops",
      scale: "28m × 15m Regulation Key & 3-Point Arcs",
      featured: false
    },
    {
      id: "big-badminton",
      title: "BWF Tournament Badminton Hall with Asymmetric LED Luminaires",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_badminton_court.jpg",
      badge: "BWF Grade 1 Spec",
      surface: "Embossed Sand/Lychee Texture PVC Vinyl Matting / Sprung Wood",
      scale: "13.4m × 6.1m (Enclosure: 50ft × 25ft)",
      featured: false
    },
    {
      id: "big-pickleball",
      title: "USAPA Tournament Regulation Outdoor Pickleball Court",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_pickleball_court.jpg",
      badge: "USAPA Certified",
      surface: "5-Layer Textured Acrylic Cushion with Non-Volley Kitchen Zone",
      scale: "44ft × 20ft (Enclosure: 60ft × 30ft)",
      featured: false
    },
    {
      id: "big-training",
      title: "International High-Performance Athlete Training Academy",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_training_academy.jpg",
      badge: "Pro Coaching Camps",
      surface: "Olympic Development Curriculum, Biomechanics & Telemetry Tracking",
      scale: "Year-Round Academy Curriculum & National Clinics",
      featured: false
    },
    {
      id: "big-club",
      title: "Turnkey Sports Club & Multi-Facility Operations Management",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_club_management.jpg",
      badge: "Clubhouse Operations",
      surface: "Cloud Booking Engine, Coaching Deployment & Court Maintenance",
      scale: "End-to-End Multi-Sport Facility Management",
      featured: false
    },
    {
      id: "big-consulting",
      title: "International Sports Business Consultant & Stadium Master Planning",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_business_consulting.jpg",
      badge: "Strategic Advisory",
      surface: "DPR Feasibility, 3D Arena Blueprints, PPP Tenders & ROI Modeling",
      scale: "Institutional Infrastructure Feasibility & Delivery",
      featured: false
    }
  ];

  const filteredBigPhotos = galleryFilter === "all"
    ? bigGalleryPhotos
    : bigGalleryPhotos.filter((p) => p.category === galleryFilter);

  const courtsDirectory = [
    {
      id: "gym-fitness",
      title: "Gym & Fitness Flooring Solutions",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_gym_flooring.jpg",
      surface: "High-Impact Interlocking Rubber & Drop-Zone Flooring",
      certification: "ISO 9001 / Commercial Gym Grade Spec",
      standardSize: "Custom Modular (2,000 sq ft - 30,000+ sq ft)",
      turnaround: "7 - 14 Days",
      warranty: "10-Year Heavy Impact & Anti-Wear Warranty",
      highlights: [
        "15mm–25mm high-density vulcanized rubber shock tiles",
        "Acoustic sub-base decoupling under Olympic free-weight drop zones",
        "Seamless high-traction functional sprint turf track with meter marks",
        "Non-porous, sweat-impermeable, anti-microbial & easy to sanitize"
      ],
      description: "Complete commercial gym and fitness center flooring development. From heavy deadlift drop platforms and anti-vibration sub-bases to functional turf sprint tracks and cardio zone rubberization."
    },
    {
      id: "squash-court",
      title: "Championship Squash Court Construction",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_squash_court.jpg",
      surface: "Armourcoat Hard Plaster + Sprung Maple Hardwood",
      certification: "WSF World Squash Federation Compliant",
      standardSize: "32ft × 21ft × 18.5ft Height (9.75m × 6.4m)",
      turnaround: "25 - 35 Days",
      warranty: "10-Year Wall & Floor Integrity Guarantee",
      highlights: [
        "Resilient high-impact Armourcoat plaster walls with zero hollows",
        "12mm clear toughened glass rear spectator wall with self-closing door",
        "Air-sprung European maple wood sub-floor for joint protection",
        "Precision flush tin sound board and regulation red border markings"
      ],
      description: "International competition squash courts constructed with WSF-accredited Armourcoat impact plaster, toughened safety glass walls, sound boards, and high-shock-absorption sprung wooden flooring."
    },
    {
      id: "table-tennis",
      title: "Table Tennis & Indoor Pickleball Arena",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_table_tennis.jpg",
      surface: "ITTF Pro Polymeric Mat / Sprung Hardwood Sub-base",
      certification: "ITTF & USAPA Certified Standard",
      standardSize: "46ft × 23ft (14m × 7m per tournament enclosure)",
      turnaround: "8 - 14 Days",
      warranty: "8-Year Surface Guarantee",
      highlights: [
        "Heavy-duty 25mm tournament-grade non-glare playing surface",
        "Specialized high-grip embossed PVC vinyl sports floor underlay",
        "Dual convertible indoor pickleball table & roll-out competition court",
        "Asymmetric 500+ Lux glare-free LED arena luminaire array"
      ],
      description: "Tournament-standard indoor table tennis arenas and multi-sport indoor pickleball conversion halls with ITTF approved 25mm top boards, high-traction sports floor underlayment, and referee scoring podiums."
    },
    {
      id: "badminton-arena",
      title: "Indoor Badminton Arena Construction",
      category: "indoor",
      categoryName: "Indoor Game",
      image: "/images/sports_badminton_court.jpg",
      surface: "BWF Grade PVC Synthetic Mat or Teak/Maple Wood",
      certification: "BWF Certified Level 1 Tournament",
      standardSize: "44ft × 20ft (Enclosure: 50ft × 25ft)",
      turnaround: "10 - 15 Days",
      warranty: "8-Year Durability Guarantee",
      highlights: [
        "Anti-slip embossed sand/lychee texture PVC vinyl matting",
        "High-density cellular foam backing for maximum energy absorption",
        "Zero-glare high-bay asymmetric LED lighting positioned above tramlines",
        "Optional sprung timber sub-floor with heavy-duty rubber shock pads"
      ],
      description: "Professional indoor badminton hall setups with world-standard BWF approved vinyl flooring or imported maple hardwood, glare-free luminaire design, and climate-controlled sports infrastructure."
    },
    {
      id: "cricket-turf",
      title: "Box Cricket & Futsal Turf Arena",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_box_cricket_turf.jpg",
      surface: "50mm Monofilament Artificial Grass Turf",
      certification: "FIFA Quality Certified & Box Cricket Spec",
      standardSize: "100ft × 60ft (Custom Cage Sizes: 80ft to 140ft)",
      turnaround: "20 - 28 Days",
      warranty: "7-Year Heavy Foot-Traffic Warranty",
      highlights: [
        "High-density UV-resistant monofilament PE fibers with silica sand infill",
        "Heavy-gauge 30ft tubular steel truss cage structure with rust-proof primer",
        "High-tenacity nylon ball containment netting covering top and sides",
        "High-lux 300+ Lux stadium floodlighting for 24/7 commercial revenue"
      ],
      description: "Turnkey commercial box cricket and futsal turf development including civil base compaction, FIFA-standard artificial grass installation, 360-degree safety netting cages, player dugouts, and floodlighting."
    },
    {
      id: "tennis-court",
      title: "Lawn Tennis Court Construction",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_tennis_court.jpg",
      surface: "8-Layer Synthetic Acrylic Cushion System",
      certification: "ITF Pace 3 / Medium Certified",
      standardSize: "78ft × 36ft (Enclosure: 120ft × 60ft)",
      turnaround: "18 - 25 Days",
      warranty: "10-Year Anti-Delamination Warranty",
      highlights: [
        "True ball rebound and consistent pace classification",
        "Multi-layer shock attenuation protects knee and ankle joints",
        "Non-glare UV resistant acrylic colors in US Open royal blue and green",
        "Laser-screed 1:100 dual-slope gradient for zero rainwater ponding"
      ],
      description: "From earth excavation and PCC/RCC concrete casting to an 8-layer ITF-certified synthetic acrylic coating, our tennis courts deliver grand-slam caliber performance with lifetime structural reliability."
    },
    {
      id: "basketball-court",
      title: "Basketball Court Construction",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_basketball_court.jpg",
      surface: "Heavy-Duty Multi-Tone Acrylic / PU Cushion",
      certification: "FIBA Level 1 Standard Compliant",
      standardSize: "91.86ft × 49.21ft (Enclosure: 100ft × 55ft)",
      turnaround: "15 - 22 Days",
      warranty: "8-Year Surface Guarantee",
      highlights: [
        "Vibrant multi-colored keys, 3-point arcs, and perimeter runoff",
        "High-grip micro-texture prevents slipping during aggressive drives",
        "Heavy-duty in-ground pole systems with tempered glass backboards",
        "Laser-sharp regulation line marking with zero edge bleed"
      ],
      description: "Custom-engineered FIBA regulation basketball courts built with reinforced concrete foundations, heavy impact acrylic coating, break-away hoops, and anti-glare high-mast LED floodlights for night games."
    },
    {
      id: "pickleball-court",
      title: "Outdoor Pickleball Court Construction",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_pickleball_court.jpg",
      surface: "5-Layer Textured Acrylic Cushion Coating",
      certification: "USAPA Tournament Regulation",
      standardSize: "44ft × 20ft (Enclosure: 60ft × 30ft)",
      turnaround: "10 - 14 Days",
      warranty: "7-Year Color Retention Warranty",
      highlights: [
        "Distinct two-tone color contrast for 7ft non-volley kitchen zones",
        "Specially graded silica texture for optimal wiffle-ball bounce and traction",
        "Permanent or semi-permanent tournament-grade steel net posts",
        "Multi-court clustering layouts with interior divider netting"
      ],
      description: "Rapidly build dedicated pickleball courts or convert existing tennis surfaces into high-throughput 2-to-4 court pickleball facilities with vibrant two-tone acrylic surfacing and spectator seating."
    },
    {
      id: "running-track",
      title: "Synthetic Athletic Running Track",
      category: "outdoor",
      categoryName: "Outdoor Game",
      image: "/images/sports_running_track.jpg",
      surface: "IAAF Certified Polyurethane Full-PUR / Sandwich System",
      certification: "World Athletics (IAAF) Class 1 & 2 Standard",
      standardSize: "400m Oval (4 to 8 Lanes, 1.22m lane width)",
      turnaround: "30 - 45 Days",
      warranty: "10-Year Weather & UV Resistance Warranty",
      highlights: [
        "Impermeable multi-layer polyurethane with colored EPDM broadcast granules",
        "Optimum spike resistance, elastic energy return & joint protection",
        "Laser-guided curbing, sub-surface slot drains & steeplechase pit",
        "Precision Olympic regulation lane marking, start staggers & exchange zones"
      ],
      description: "International-standard 400m 8-lane all-weather synthetic running tracks engineered with impermeable polyurethane resin, EPDM rubber granulate broadcast, and precision laser sub-base grading."
    },
    {
      id: "sports-training",
      title: "International Sports Training Programs",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_training_academy.jpg",
      surface: "Multi-Sport Olympic Training Facilities",
      certification: "International High-Performance Coaching Curriculum",
      standardSize: "Year-Round Academy Curriculum & Camps",
      turnaround: "Immediate Enrollment & Seasonal Camps",
      warranty: "Accredited Coaching & Telemetry Tracking",
      highlights: [
        "World-class coaching clinics for tennis, cricket, football, basketball & badminton",
        "Biomechanical video analysis, radar speed tracking, and athlete telemetry",
        "Strength, conditioning, nutrition, and sports physiotherapy integration",
        "International tournament exposure & scholarship placement pathways"
      ],
      description: "Elite athlete development programs bringing international coaching methodologies, sports science telemetry, and high-performance training camps to schools, clubs, and sports complexes."
    },
    {
      id: "club-management",
      title: "Sports Club & Academy Management",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_club_management.jpg",
      surface: "Clubhouse, Court Booking & Facility Operations",
      certification: "Professional Sports Club Management Standards",
      standardSize: "Turnkey Multi-Sport Facility Management",
      turnaround: "Complete Digital & Operational Onboarding in 15 Days",
      warranty: "Audited Financial & Operational Excellence",
      highlights: [
        "End-to-end management of sports clubs, country clubs, and residential arenas",
        "Cloud-based court reservation, membership management & tournament billing software",
        "Staff recruitment, certified coach scheduling, and equipment inventory management",
        "Preventive facility maintenance and surface upkeep ensuring 100% court uptime"
      ],
      description: "Full-scale sports club and academy operations management. We handle facility scheduling, coaching payroll, membership monetisation, turf maintenance, and corporate tournaments."
    },
    {
      id: "business-consultant",
      title: "International Sports Business Consultant",
      category: "services",
      categoryName: "Services",
      image: "/images/sports_business_consulting.jpg",
      surface: "Turnkey Stadium & Sports Arena Master Planning",
      certification: "International Sports Infrastructure Advisory",
      standardSize: "Master Plans, DPR & Financial Feasibility Reports",
      turnaround: "Detailed DPR & Financial Feasibility in 14-21 Days",
      warranty: "Institutional Quality DPR & ROI Assurance",
      highlights: [
        "Financial feasibility analysis and commercial revenue projection for sports venues",
        "Stadium master planning, architectural blueprints, and 3D arena modeling",
        "Public-private partnership (PPP) tender drafting & government project advisory",
        "Sponsorship acquisition, naming rights packaging, and commercial turf ROI optimization"
      ],
      description: "Strategic consulting for sports infrastructure investors, clubs, institutions, and builders. From techno-economic feasibility studies and architectural design to revenue monetization and turnkey project delivery."
    }
  ];

  const servicesList = [
    {
      title: "International Sports Training",
      desc: "High-performance athlete coaching clinics, Olympic-level physical conditioning, biomechanical movement tracking, and elite junior tournament pathways.",
      icon: "🏅"
    },
    {
      title: "Sports Club & Academy Management",
      desc: "Turnkey operations for sports clubs and academies: court scheduling software, coach deployment, membership monetization, and tournament hosting.",
      icon: "🏢"
    },
    {
      title: "International Sports Business Consultant",
      desc: "Feasibility studies, stadium master planning, PPP tenders, commercial turf ROI forecasting, and sports infrastructure financial modeling.",
      icon: "📊"
    },
    {
      title: "IAAF Synthetic Running Track Construction",
      desc: "400m 8-lane polyurethane sandwich running tracks with EPDM broadcast, sub-surface drainage, steeplechase pits, and Olympic lane striping.",
      icon: "🏃"
    },
    {
      title: "Gym & Fitness Flooring Solutions",
      desc: "15mm–25mm heavy-duty vulcanized rubber tiles, Olympic drop zones, acoustic decoupling underlayments, and functional turf sprint lanes.",
      icon: "🏋️"
    },
    {
      title: "8-Layer Synthetic Acrylic Court Coating",
      desc: "ITF-certified 100% pure acrylic cushion systems with SBR crumb rubber shock attenuation, laser 1:100 slope gradient, and UV fade-resistant colorways.",
      icon: "🎨"
    }
  ];

  const filteredCourts = activeDirectoryTab === "all"
    ? courtsDirectory
    : courtsDirectory.filter((c) => c.category === activeDirectoryTab);

  return (
    <div className="sports-courts-page">
      {/* 1. HERO BANNER */}
      <section className="court-hero-banner">
        <div className="container">
          <div className="court-hero-content">
            <div className="badge-court-hero">
              <Trophy size={16} className="text-amber" />
              <span>SB SPORTS INFRASTRUCTURE & ACADEMY SOLUTIONS</span>
            </div>

            <h1 className="court-hero-title">
              SPORTS COURT CONSTRUCTION & SYNTHETIC COATING
            </h1>

            <p className="court-hero-tagline">
              INDOOR & OUTDOOR GAMES • SYNTHETIC RUNNING TRACKS • INTERNATIONAL TRAINING & ACADEMY MANAGEMENT • BUSINESS CONSULTING
            </p>

            <p className="court-hero-desc">
              Building world-class sports arenas and athletic facilities from ground zero. Precision laser-screed sub-bases, ITF/FIBA/BWF/IAAF certified surfaces, box cricket turfs, gym flooring, and turnkey sports academy operations.
            </p>

            {/* Stat Counters */}
            <div className="court-stats-row">
              <div className="stat-pill">
                <span className="stat-value">150+</span>
                <span className="stat-name">Arenas & Projects Built</span>
              </div>
              <div className="stat-pill">
                <span className="stat-value">13+</span>
                <span className="stat-name">Live Photo Showcases</span>
              </div>
              <div className="stat-pill">
                <span className="stat-value">100%</span>
                <span className="stat-name">IAAF, ITF, FIBA Standards</span>
              </div>
              <div className="stat-pill">
                <span className="stat-value">10 Yrs</span>
                <span className="stat-name">Structural Warranty</span>
              </div>
            </div>

            {/* Direct Arena Helpline Bar */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "8px 20px",
                margin: "0 auto 24px auto",
                borderRadius: "0px"
              }}
            >
              <a
                href="tel:+919636365391"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#000000",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textDecoration: "underline"
                }}
              >
                <PhoneCall size={16} />
                <span>Call: +91-9636365391</span>
              </a>
              <span style={{ color: "#000000" }}>•</span>
              <a
                href="mailto:sbsportsandconstruction@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "underline"
                }}
              >
                <Mail size={16} />
                <span>sbsportsandconstruction@gmail.com</span>
              </a>
            </div>

            {/* Hero CTAs */}
            <div className="court-hero-ctas">
              <a href="#big-gallery" className="btn btn-primary btn-hero-cta">
                <Camera size={18} />
                <span>View Big Live Photo Gallery ({bigGalleryPhotos.length})</span>
              </a>
              <a href="#simulator" className="btn btn-secondary btn-hero-cta" style={{ background: "#FFFFFF", color: "#000000", border: "1px solid #000000", fontWeight: 800 }}>
                <Zap size={18} />
                <span>Explore 2D Court Layout Visualizer</span>
              </a>
            </div>

            {/* Big Panoramic Aerial Stadium Banner */}
            <div
              className="panoramic-hero-wrap"
              onClick={() => setSelectedLightboxPhoto(bigGalleryPhotos[0])}
              style={{ cursor: "pointer" }}
              title="Click to view full-screen image"
            >
              <img
                src="/images/sports_arena_complex_big.jpg"
                alt="Mega Sports Arena & Stadium Complex"
                className="panoramic-hero-img"
              />
              <div className="panoramic-overlay">
                <div>
                  <h3 className="panoramic-title">
                    Olympic 400m Running Track, 8-Layer Tennis & Box Cricket Mega Arena Complex
                  </h3>
                  <div className="panoramic-tags">
                    <span className="panoramic-tag">Turnkey Mega Sports Campus</span>
                    <span className="panoramic-tag">IAAF 400m Track</span>
                    <span className="panoramic-tag">ITF Tennis Center</span>
                    <span className="panoramic-tag">FIBA Basketball</span>
                    <span className="panoramic-tag">Box Cricket Turfs</span>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    fontWeight: 800,
                    padding: "8px 16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <Maximize2 size={16} />
                  <span>View Full Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRECISION 2D REGULATION COURT VISUALIZER */}
      <section id="simulator" className="section-court-simulator container">
        <CourtSimulator onOpenQuote={onOpenQuote} />
      </section>

      {/* 3. 8-LAYER SYNTHETIC COATING VISUALIZER */}
      <section className="section-coating-visualizer container">
        <CoatingLayersVisualizer onOpenQuote={onOpenQuote} />
      </section>

      {/* 4. ALL INDOOR & OUTDOOR COURTS DIRECTORY */}
      <section className="section-courts-directory container">
        <div className="section-header-centered">
          <div className="badge-pill">
            <Layers size={16} />
            <span>FULL ARENA & SERVICES PORTFOLIO</span>
          </div>
          <h2 className="section-heading">
            Indoor Games, Outdoor Courts & Sports Services
          </h2>
          <p className="section-subtext">
            Explore regulation dimensions, surface specifications, and turnkey development scopes for gymnasiums, squash courts, table tennis & pickleball, box cricket turfs, lawn tennis, running tracks, and professional sports academy management.
          </p>

          {/* Directory Filter Tabs */}
          <div className="directory-filter-tabs">
            <button
              onClick={() => setActiveDirectoryTab("all")}
              className={`dir-tab-btn ${activeDirectoryTab === "all" ? "active" : ""}`}
            >
              All Offerings ({courtsDirectory.length})
            </button>
            <button
              onClick={() => setActiveDirectoryTab("indoor")}
              className={`dir-tab-btn ${activeDirectoryTab === "indoor" ? "active" : ""}`}
            >
              Indoor Games (Gym, Squash, TT, Badminton)
            </button>
            <button
              onClick={() => setActiveDirectoryTab("outdoor")}
              className={`dir-tab-btn ${activeDirectoryTab === "outdoor" ? "active" : ""}`}
            >
              Outdoor Games (Cricket, Tennis, Basketball, Track)
            </button>
            <button
              onClick={() => setActiveDirectoryTab("services")}
              className={`dir-tab-btn ${activeDirectoryTab === "services" ? "active" : ""}`}
            >
              Services & Academy Management
            </button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="courts-cards-grid">
          {filteredCourts.map((court) => (
            <div key={court.id} className="court-showcase-card">
              <div
                className="court-card-image-wrap"
                onClick={() => setSelectedLightboxPhoto({ image: court.image, title: court.title, surface: court.surface, badge: court.certification })}
                style={{ cursor: "pointer", height: "280px" }}
                title="Click to view large photo"
              >
                <img src={court.image} alt={court.title} className="court-card-img" />
                <span className="card-category-badge">{court.categoryName}</span>
                <span className="card-cert-badge">{court.certification}</span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "#000000",
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <Maximize2 size={12} />
                  <span>Big View</span>
                </span>
              </div>

              <div className="court-card-body">
                <h3 className="court-card-title">{court.title}</h3>
                <p className="court-card-desc">{court.description}</p>

                <div className="court-specs-list">
                  <div className="spec-row">
                    <span className="spec-lbl">Surface:</span>
                    <span className="spec-txt">{court.surface}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-lbl">Play Dimensions:</span>
                    <span className="spec-txt">{court.standardSize}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-lbl">Turnaround:</span>
                    <span className="spec-txt">{court.turnaround}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-lbl">Warranty:</span>
                    <span className="spec-txt text-emerald font-bold">{court.warranty}</span>
                  </div>
                </div>

                <div className="court-highlights-box">
                  <span className="highlights-header">Key Engineering Specs:</span>
                  <ul className="highlights-bullets">
                    {court.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="text-emerald flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="court-card-footer" style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => setSelectedCourtModal(court)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, background: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "8px" }}
                  >
                    <span>Full Specs</span>
                  </button>
                  <a
                    href="tel:+919636365391"
                    className="btn btn-primary btn-sm btn-card-quote"
                    style={{ flex: 1.2, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                  >
                    <PhoneCall size={14} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONSTRUCTION & COATING SERVICES SUITE */}
      <section className="section-services-suite container">
        <div className="section-header-centered">
          <div className="badge-pill">
            <Hammer size={16} />
            <span>END-TO-END CIVIL & COATING</span>
          </div>
          <h2 className="section-heading">
            Comprehensive Sports Construction Services
          </h2>
          <p className="section-subtext">
            Every step is managed in-house by certified civil engineers, master floor coaters, and lighting specialists.
          </p>
        </div>

        <div className="services-suite-grid">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="service-suite-card">
              <span className="service-suite-icon">{srv.icon}</span>
              <h4 className="service-suite-title">{srv.title}</h4>
              <p className="service-suite-desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BEST THOUGHTS & CHAMPION PHILOSOPHY FOR EVERY GAME */}
      <section className="section-game-thoughts container">
        <GameThoughtsSection />
      </section>

      {/* 7. BIG LIVE SPORTS ARENA & PROJECT PHOTOS GALLERY */}
      <section id="big-gallery" className="section-big-gallery container">
        <div className="section-header-centered">
          <div className="badge-pill">
            <Camera size={16} />
            <span>LIVE ARENA GALLERY</span>
          </div>
          <h2 className="section-heading">
            Big Live Photos & Completed Arena Projects
          </h2>
          <p className="section-subtext">
            High-resolution visual showcase of our built sports courts, synthetic tracks, box cricket turfs, commercial gymnasiums, and international sports academies. Click any photo to view full-screen.
          </p>

          {/* Gallery Category Filter */}
          <div className="directory-filter-tabs">
            <button
              onClick={() => setGalleryFilter("all")}
              className={`dir-tab-btn ${galleryFilter === "all" ? "active" : ""}`}
            >
              All Big Photos ({bigGalleryPhotos.length})
            </button>
            <button
              onClick={() => setGalleryFilter("outdoor")}
              className={`dir-tab-btn ${galleryFilter === "outdoor" ? "active" : ""}`}
            >
              Outdoor Arenas & Turfs
            </button>
            <button
              onClick={() => setGalleryFilter("indoor")}
              className={`dir-tab-btn ${galleryFilter === "indoor" ? "active" : ""}`}
            >
              Indoor Halls & Gyms
            </button>
            <button
              onClick={() => setGalleryFilter("services")}
              className={`dir-tab-btn ${galleryFilter === "services" ? "active" : ""}`}
            >
              Academy & Services
            </button>
          </div>
        </div>

        {/* Big Photos Grid */}
        <div className="big-gallery-grid">
          {filteredBigPhotos.map((item) => (
            <div
              key={item.id}
              className={`big-photo-card ${item.featured ? "card-featured" : ""}`}
              onClick={() => setSelectedLightboxPhoto(item)}
            >
              <div className="big-photo-img-wrap">
                <img src={item.image} alt={item.title} className="big-photo-img" />
                <span className="big-photo-badge">{item.badge}</span>
                <span className="big-photo-expand-btn">
                  <Maximize2 size={13} />
                  <span>Click to Expand</span>
                </span>
              </div>

              <div className="big-photo-info">
                <h3 className="big-photo-title">{item.title}</h3>
                <div className="big-photo-specs">
                  <div><strong>Surface:</strong> {item.surface}</div>
                  <div style={{ marginTop: "4px" }}><strong>Scale / Capacity:</strong> {item.scale}</div>
                </div>

                <div className="big-photo-cta-row">
                  <span style={{ fontSize: "0.8rem", color: "#555555", fontWeight: 700 }}>
                    {item.categoryName} • Official SB Sports Build
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLightboxPhoto(item);
                    }}
                    style={{
                      background: "#000000",
                      color: "#FFFFFF",
                      border: "1px solid #000000",
                      padding: "6px 14px",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    <Eye size={13} />
                    <span>View Large Photo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAST CONSULTATION CTA BANNER */}
      <section className="court-cta-banner container">
        <div className="cta-banner-card">
          <div className="cta-banner-text">
            <span className="cta-badge">READY TO BUILD YOUR ARENA?</span>
            <h3 className="cta-title">Turn Your Vacant Plot or Club Into a World-Class Arena</h3>
            <p className="cta-subtitle">
              Get an on-site survey, laser gradient test, and customized synthetic arena proposal. Connect directly via call or email.
            </p>
          </div>
          <div className="cta-banner-btn-wrap" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="tel:+919636365391"
              className="btn btn-secondary btn-lg"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <PhoneCall size={20} />
              <span>+91-9636365391</span>
            </a>

            <a
              href="mailto:sbsportsandconstruction@gmail.com"
              className="btn btn-secondary btn-lg"
              style={{
                background: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>

            <a
              href="tel:+919636365391"
              className="btn btn-primary btn-lg"
              style={{
                background: "#000000",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <PhoneCall size={20} />
              <span>Call For Site Visit</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. DETAILED COURT MODAL POPUP */}
      {selectedCourtModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedCourtModal(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "2px solid #000000",
              maxWidth: "760px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
              position: "relative",
              color: "#000000"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative", height: "300px", borderBottom: "1px solid #000000", background: "#000000" }}>
              <img
                src={selectedCourtModal.image}
                alt={selectedCourtModal.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                onClick={() => setSelectedCourtModal(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  color: "#000000",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: "28px" }}>
              <span style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                color: "#000000",
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "4px 10px",
                textTransform: "uppercase"
              }}>
                {selectedCourtModal.categoryName} • {selectedCourtModal.certification}
              </span>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#000000", margin: "14px 0 8px 0" }}>
                {selectedCourtModal.title}
              </h3>

              <p style={{ fontSize: "0.95rem", color: "#333333", lineHeight: 1.6, marginBottom: "20px" }}>
                {selectedCourtModal.description}
              </p>

              <div style={{
                background: "#FFFFFF",
                border: "1px solid #000000",
                padding: "16px",
                marginBottom: "20px"
              }}>
                <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "#000000", fontWeight: 800, marginBottom: "12px", letterSpacing: "0.04em" }}>
                  Official Architectural & Coating Highlights
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {selectedCourtModal.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#000000" }}>
                      <CheckCircle2 size={16} style={{ color: "#000000", flexShrink: 0, marginTop: "2px" }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="tel:+919636365391"
                  className="btn btn-primary"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "12px 24px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <PhoneCall size={16} />
                  <span>Call: +91-9636365391</span>
                </a>

                <a
                  href="mailto:sbsportsandconstruction@gmail.com"
                  className="btn btn-secondary"
                  style={{
                    background: "#FFFFFF",
                    color: "#000000",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "12px 20px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Mail size={16} />
                  <span>Email Inquiry</span>
                </a>

                <button
                  onClick={() => setSelectedCourtModal(null)}
                  className="btn btn-secondary"
                  style={{
                    background: "#F5F5F5",
                    color: "#000000",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "12px 20px"
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. FULL-SCREEN LIGHTBOX MODAL FOR BIG PHOTOS */}
      {selectedLightboxPhoto && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(6px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px"
          }}
          onClick={() => setSelectedLightboxPhoto(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "2px solid #FFFFFF",
              maxWidth: "1100px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              position: "relative",
              color: "#000000"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLightboxPhoto(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#000000",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            <div style={{ width: "100%", height: "clamp(340px, 60vh, 600px)", background: "#000000", position: "relative" }}>
              <img
                src={selectedLightboxPhoto.image}
                alt={selectedLightboxPhoto.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div style={{ padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ maxWidth: "680px" }}>
                <span style={{
                  background: "#000000",
                  color: "#FFFFFF",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  textTransform: "uppercase"
                }}>
                  {selectedLightboxPhoto.badge || "Live SB Sports Project"}
                </span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 900, margin: "10px 0 6px 0", color: "#000000" }}>
                  {selectedLightboxPhoto.title}
                </h3>
                {selectedLightboxPhoto.surface && (
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#444444" }}>
                    <strong>Surface Specs:</strong> {selectedLightboxPhoto.surface}
                  </p>
                )}
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="tel:+919636365391"
                  className="btn btn-primary"
                  style={{
                    background: "#000000",
                    color: "#FFFFFF",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "10px 20px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <PhoneCall size={16} />
                  <span>Call: +91-9636365391</span>
                </a>

                <button
                  onClick={() => setSelectedLightboxPhoto(null)}
                  className="btn btn-secondary"
                  style={{
                    background: "#FFFFFF",
                    color: "#000000",
                    border: "1px solid #000000",
                    fontWeight: 800,
                    padding: "10px 18px"
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
