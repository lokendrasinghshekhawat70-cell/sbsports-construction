import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Moon,
  Ruler,
  CheckCircle2,
  ChevronRight,
  Palette
} from "lucide-react";

export default function CourtSimulator({ onOpenQuote }) {
  const [selectedSport, setSelectedSport] = useState("tennis");
  const [isNightMode, setIsNightMode] = useState(false);
  const [showDimensions, setShowDimensions] = useState(true);
  const [colorTheme, setColorTheme] = useState("tournament"); // "tournament", "forest", "clay"
  const navigate = useNavigate();

  const handleOpenQuoteSafe = (quoteTitle) => {
    if (typeof onOpenQuote === "function") {
      onOpenQuote(quoteTitle);
    } else {
      navigate(`/Contact?service=${encodeURIComponent(quoteTitle)}`);
    }
  };

  const sports = [
    {
      id: "tennis",
      name: "Tennis Court",
      icon: "🎾",
      standardSize: "23.77m × 10.97m (78ft × 36ft)",
      overallSize: "36.57m × 18.29m (120ft × 60ft)",
      coatingLayers: "8-Layer Acrylic Cushion System",
      standards: "ITF Certified Pace 3 Medium",
      governingBody: "International Tennis Federation (ITF)",
      description: "Championship regulation 8-layer synthetic acrylic cushion court with laser-graded sub-base, dual-tone textured colorways, and crisp anti-glare boundary lines.",
      specDetails: [
        { label: "Singles Court", value: "23.77m × 8.23m (78ft × 27ft)" },
        { label: "Doubles Court", value: "23.77m × 10.97m (78ft × 36ft)" },
        { label: "Net Height", value: "0.914m (36in) Center • 1.07m (42in) Posts" },
        { label: "Slope Gradient", value: "1:100 (1%) Transverse Runoff" }
      ],
      themes: {
        tournament: {
          name: "Tournament Ocean & Forest",
          inner: "#0284c7",
          outer: "#15803d",
          lines: "#ffffff",
          net: "#0f172a",
          border: "#000000"
        },
        clay: {
          name: "Classic French Terracotta",
          inner: "#c2410c",
          outer: "#9a3412",
          lines: "#ffffff",
          net: "#0f172a",
          border: "#000000"
        },
        forest: {
          name: "Wimbledon Deep Grass",
          inner: "#15803d",
          outer: "#14532d",
          lines: "#ffffff",
          net: "#0f172a",
          border: "#000000"
        }
      }
    },
    {
      id: "basketball",
      name: "Basketball Court",
      icon: "🏀",
      standardSize: "28.0m × 15.0m (91.86ft × 49.21ft)",
      overallSize: "32.0m × 19.0m (105ft × 62ft)",
      coatingLayers: "8-Layer Multi-Tone Acrylic / PU",
      standards: "FIBA Standard Level 1 Compliant",
      governingBody: "International Basketball Federation (FIBA)",
      description: "Professional multi-tone synthetic basketball arena with shock-absorbing SBR crumb rubber underlayment, high-grip acrylic topcoat, and FIBA regulation key dimensions.",
      specDetails: [
        { label: "Court Playing Area", value: "28.0m × 15.0m (91.86ft × 49.21ft)" },
        { label: "3-Point Arc Radius", value: "6.75m (22.15ft) from basket" },
        { label: "Free-Throw Key", value: "5.8m × 4.9m Rectangle" },
        { label: "Rim Height", value: "3.05m (10.0ft) Regulation" }
      ],
      themes: {
        tournament: {
          name: "FIBA Terracotta & Maple Key",
          inner: "#c2410c",
          key: "#087FEA",
          outer: "#1e3a8a",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Emerald Arena & Sand Key",
          inner: "#047857",
          key: "#087FEA",
          outer: "#064e3b",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Urban Slate & Amber Key",
          inner: "#334155",
          key: "#b45309",
          outer: "#0f172a",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "badminton",
      name: "Badminton Court",
      icon: "🏸",
      standardSize: "13.40m × 6.10m (44ft × 20ft)",
      overallSize: "16.00m × 8.50m (52.5ft × 28ft)",
      coatingLayers: "4.5mm BWF Vinyl Mat / Polyurethane",
      standards: "BWF Grade 1 Tournament Approved",
      governingBody: "Badminton World Federation (BWF)",
      description: "World-class tournament badminton arena featuring point-elastic polyurethane cushioning or heavy-duty embossed BWF vinyl matting for maximum knee joint protection.",
      specDetails: [
        { label: "Doubles Playing Court", value: "13.40m × 6.10m (44ft × 20ft)" },
        { label: "Singles Playing Court", value: "13.40m × 5.18m (44ft × 17ft)" },
        { label: "Short Service Line", value: "1.98m (6.5ft) from net" },
        { label: "Net Height", value: "1.55m (5.1ft) at posts" }
      ],
      themes: {
        tournament: {
          name: "BWF Emerald Green",
          inner: "#047857",
          outer: "#065f46",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Classic Championship Navy",
          inner: "#0369a1",
          outer: "#0c4a6e",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Natural Mint & Pine",
          inner: "#059669",
          outer: "#064e3b",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "pickleball",
      name: "Pickleball Court",
      icon: "🏓",
      standardSize: "13.41m × 6.10m (44ft × 20ft)",
      overallSize: "18.29m × 9.14m (60ft × 30ft)",
      coatingLayers: "5-Layer Textured Acrylic Cushion",
      standards: "USA Pickleball Tournament Spec",
      governingBody: "USA Pickleball Association (USAPA)",
      description: "High-traction non-slip acrylic surface with distinctive contrasting Non-Volley Kitchen Zone (7ft) engineered for rapid firefight volleys and soft dinking.",
      specDetails: [
        { label: "Total Playing Area", value: "13.41m × 6.10m (44ft × 20ft)" },
        { label: "Non-Volley Kitchen Zone", value: "2.13m (7.0ft) both sides of net" },
        { label: "Service Court Area", value: "4.57m × 3.05m (15ft × 10ft)" },
        { label: "Net Height", value: "0.86m (34in) center • 0.91m (36in) posts" }
      ],
      themes: {
        tournament: {
          name: "Pacific Blue & Olive Kitchen",
          inner: "#0284c7",
          kitchen: "#4d7c0f",
          outer: "#1e3a8a",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Meadow Green & Forest Kitchen",
          inner: "#15803d",
          kitchen: "#166534",
          outer: "#14532d",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Terracotta & Forest Kitchen",
          inner: "#c2410c",
          kitchen: "#15803d",
          outer: "#78350f",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "cricketTurf",
      name: "Box Cricket & Futsal Turf",
      icon: "🏏",
      standardSize: "30m × 15m to 40m × 20m",
      overallSize: "Custom Cage Footprint (100ft × 50ft)",
      coatingLayers: "50mm Monofilament Grass Turf + EPDM Infill",
      standards: "FIFA Grade & Box Cricket Certified",
      governingBody: "World Cricket / Indoor Sports Standard",
      description: "Heavy-duty 50mm diamond-spine monofilament artificial turf with dual-tone lush mowing stripes, high-density silica/rubber infill, and perimeter nylon containment netting.",
      specDetails: [
        { label: "Pitch Length", value: "20.12m (22 Yards) Regulation" },
        { label: "Batting Crease", value: "1.22m (4ft) from popping crease" },
        { label: "Containment Netting", value: "12mm High-Tenacity Braided Nylon" },
        { label: "Turf Pile Height", value: "50mm UV-Stabilized Monofilament" }
      ],
      themes: {
        tournament: {
          name: "Natural Meadow Grass Turf",
          stripe1: "#16a34a",
          stripe2: "#15803d",
          pitch: "#fef3c7",
          outer: "#14532d",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Deep Emerald Forest Turf",
          stripe1: "#15803d",
          stripe2: "#166534",
          pitch: "#fef3c7",
          outer: "#0f391f",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Summer Golden Meadow Turf",
          stripe1: "#65a30d",
          stripe2: "#4d7c0f",
          pitch: "#fef3c7",
          outer: "#365314",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "squash",
      name: "Squash Court",
      icon: "⚡",
      standardSize: "9.75m × 6.40m (32ft × 21ft)",
      overallSize: "Clear Height: 5.64m (18.5ft)",
      coatingLayers: "Armourcoat Impact Plaster + Sprung Maple",
      standards: "WSF Accredited Specifications",
      governingBody: "World Squash Federation (WSF)",
      description: "Indoor championship squash facility featuring high-impact acoustic plaster front wall, 12mm toughened spectator glass back wall, and natural European maple sprung timber floor.",
      specDetails: [
        { label: "Court Length", value: "9.75m (32ft) Inside Clear" },
        { label: "Court Width", value: "6.40m (21ft) Inside Clear" },
        { label: "Front Wall Out Line", value: "4.57m (15ft) above floor" },
        { label: "Tin Soundboard", value: "0.48m (19in) Height Flush" }
      ],
      themes: {
        tournament: {
          name: "Natural European Maple Hardwood",
          floor: "#fde68a",
          woodAccent: "#087FEA",
          lines: "#dc2626",
          tin: "#b91c1c",
          walls: "#f8fafc",
          border: "#000000"
        },
        forest: {
          name: "Scandinavian Light Ash Floor",
          floor: "#fef3c7",
          woodAccent: "#b45309",
          lines: "#dc2626",
          tin: "#991b1b",
          walls: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Warm Birchwood Floor",
          floor: "#fed7aa",
          woodAccent: "#c2410c",
          lines: "#dc2626",
          tin: "#9a3412",
          walls: "#f1f5f9",
          border: "#000000"
        }
      }
    },
    {
      id: "volleyball",
      name: "Volleyball Court",
      icon: "🏐",
      standardSize: "18.0m × 9.0m (59ft × 29.5ft)",
      overallSize: "24.0m × 15.0m (79ft × 49ft)",
      coatingLayers: "Seamless Elastic Polyurethane (PU)",
      standards: "FIVB Competition Standard",
      governingBody: "Fédération Internationale de Volleyball (FIVB)",
      description: "Olympic specification indoor/outdoor volleyball court with contrasting front and back zones, 3-meter attack line, and resilient shock absorption.",
      specDetails: [
        { label: "Playing Court", value: "18.0m × 9.0m (59ft × 29.5ft)" },
        { label: "Free Zone Surrounds", value: "Min 3.0m all boundaries" },
        { label: "Attack Line (Front Zone)", value: "3.0m from centerline" },
        { label: "Net Height", value: "2.43m Men • 2.24m Women" }
      ],
      themes: {
        tournament: {
          name: "Olympic Amber & Cobalt Blue",
          inner: "#ea580c",
          outer: "#1d4ed8",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Emerald Green & Sky Blue",
          inner: "#059669",
          outer: "#0284c7",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Terracotta & Navy",
          inner: "#c2410c",
          outer: "#1e3a8a",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "gym",
      name: "Gym & Fitness Flooring",
      icon: "🏋️",
      standardSize: "Custom Modular (2,000 - 30,000 sq.ft)",
      overallSize: "Olympic Drop Zones & Sprint Turf",
      coatingLayers: "15mm - 25mm High Density Vulcanized Rubber",
      standards: "ISO 9001 / Commercial Gym Spec",
      governingBody: "Commercial Fitness Infrastructure Standards",
      description: "Heavy-duty commercial gym facility layout with 25mm acoustic deadening Olympic drop platforms, modular interlocking tile grids, and a 20-meter high-density sprint sled track.",
      specDetails: [
        { label: "Olympic Drop Zones", value: "25mm Vulcanized Rubber Shock Tiles" },
        { label: "Sprint Sled Track", value: "2.0m × 20.0m Monofilament Turf Lane" },
        { label: "Interlocking Floor", value: "15mm High-Density EPDM Fleck" },
        { label: "Acoustic Attenuation", value: "28dB Impact Sound Reduction" }
      ],
      themes: {
        tournament: {
          name: "Matte Charcoal & Turf Green",
          inner: "#1e293b",
          outer: "#0f172a",
          turf: "#15803d",
          accent: "#f59e0b",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Deep Slate & Forest Turf",
          inner: "#334155",
          outer: "#1e293b",
          turf: "#047857",
          accent: "#10b981",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Industrial Graphite & Terracotta",
          inner: "#27272a",
          outer: "#18181b",
          turf: "#c2410c",
          accent: "#ea580c",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    },
    {
      id: "tableTennis",
      name: "Table Tennis & Pickleball Table",
      icon: "🏓",
      standardSize: "2.74m × 1.525m (9ft × 5ft Table)",
      overallSize: "14.0m × 7.0m Enclosure (46ft × 23ft)",
      coatingLayers: "ITTF Tournament PVC Sports Mat (4.5mm - 6.0mm)",
      standards: "ITTF Certified Tournament Standard",
      governingBody: "International Table Tennis Federation (ITTF)",
      description: "Official ITTF championship table tennis arena blueprint featuring 25mm tournament table, surround barrier enclosures, umpire stand, and non-glare high-grip flooring.",
      specDetails: [
        { label: "Table Surface", value: "2.74m × 1.525m (9ft × 5ft) • 76cm Height" },
        { label: "Net Height", value: "15.25cm (6 inches) with 15.25cm Overhang" },
        { label: "Enclosure Area", value: "14.0m × 7.0m (Championship Min)" },
        { label: "Floor Surface", value: "ITTF Red / Blue Point-Elastic Mat" }
      ],
      themes: {
        tournament: {
          name: "ITTF Royal Blue & Maroon Floor",
          inner: "#831843",
          outer: "#4c0519",
          table: "#1d4ed8",
          lines: "#ffffff",
          net: "#000000",
          border: "#000000"
        },
        forest: {
          name: "Emerald Arena & Forest Table",
          inner: "#065f46",
          outer: "#064e3b",
          table: "#047857",
          lines: "#ffffff",
          net: "#000000",
          border: "#000000"
        },
        clay: {
          name: "Championship Terracotta Floor",
          inner: "#9a3412",
          outer: "#7c2d12",
          table: "#0284c7",
          lines: "#ffffff",
          net: "#000000",
          border: "#000000"
        }
      }
    },
    {
      id: "runningTrack",
      name: "Synthetic Running Track",
      icon: "🏃",
      standardSize: "400m Oval (8 Regulation Lanes)",
      overallSize: "180m × 100m Stadium Footprint",
      coatingLayers: "13mm IAAF Polyurethane Sandwich Track",
      standards: "World Athletics (IAAF) Class 1 Standard",
      governingBody: "World Athletics (IAAF)",
      description: "Olympic 400-meter all-weather synthetic running track blueprint with 8 regulation 1.22m lanes, curved radius geometry, 100m straightaway finish zone, and inner athletic field.",
      specDetails: [
        { label: "Track Standard Length", value: "400.0m Lane 1 Measurement Line" },
        { label: "Lane Width", value: "1.22m (± 0.01m) Regulation Width" },
        { label: "Number of Lanes", value: "8 Parallel Standard Lanes" },
        { label: "Curb Radius", value: "36.50m Standard Oval Radius" }
      ],
      themes: {
        tournament: {
          name: "Olympic Terracotta Red",
          inner: "#15803d",
          outer: "#1e293b",
          track: "#b91c1c",
          lines: "#ffffff",
          border: "#000000"
        },
        forest: {
          name: "Championship Blue Track",
          inner: "#166534",
          outer: "#0f172a",
          track: "#1d4ed8",
          lines: "#ffffff",
          border: "#000000"
        },
        clay: {
          name: "Monochrome Graphite Track",
          inner: "#14532d",
          outer: "#18181b",
          track: "#475569",
          lines: "#ffffff",
          border: "#000000"
        }
      }
    }
  ];

  const currentSport = sports.find((s) => s.id === selectedSport) || sports[0];
  const activePalette = currentSport.themes[colorTheme] || currentSport.themes.tournament;

  // Render 2D Precision SVG Plan Diagram for each sport
  const renderCourtSvg = () => {
    switch (selectedSport) {
      case "tennis":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Runoff Surround */}
            <rect x="20" y="20" width="960" height="560" fill={activePalette.outer} rx="4" />

            {/* Inner Court Boundary (Doubles: 23.77m x 10.97m) */}
            <rect x="160" y="90" width="680" height="420" fill={activePalette.inner} />

            {/* Doubles Sidelines & Baselines */}
            <rect
              x="160"
              y="90"
              width="680"
              height="420"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Singles Sidelines (8.23m width) */}
            <line x1="160" y1="140" x2="840" y2="140" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="160" y1="460" x2="840" y2="460" stroke={activePalette.lines} strokeWidth="3" />

            {/* Service Lines (6.40m from net each side) */}
            <line x1="310" y1="140" x2="310" y2="460" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="690" y1="140" x2="690" y2="460" stroke={activePalette.lines} strokeWidth="3" />

            {/* Center Service Line */}
            <line x1="310" y1="300" x2="690" y2="300" stroke={activePalette.lines} strokeWidth="3" />

            {/* Center Marks on Baselines */}
            <line x1="160" y1="300" x2="175" y2="300" stroke={activePalette.lines} strokeWidth="4" />
            <line x1="825" y1="300" x2="840" y2="300" stroke={activePalette.lines} strokeWidth="4" />

            {/* Center Net Line & Net Band */}
            <line x1="500" y1="70" x2="500" y2="530" stroke="#000000" strokeWidth="6" strokeDasharray="3 3" />
            <line x1="500" y1="70" x2="500" y2="530" stroke="#ffffff" strokeWidth="2" />

            {/* Net Posts */}
            <circle cx="500" cy="70" r="7" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="530" r="7" fill="#000000" stroke="#ffffff" strokeWidth="2" />

            {/* Dimension Callouts Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                {/* Total Length Callout */}
                <line x1="160" y1="60" x2="840" y2="60" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="440" y="48" width="120" height="22" fill="#000000" rx="2" />
                <text x="500" y="63">23.77m (78.0ft)</text>

                {/* Doubles Width Callout */}
                <line x1="865" y1="90" x2="865" y2="510" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="875" y="288" width="105" height="22" fill="#000000" rx="2" />
                <text x="927" y="303">10.97m (36ft)</text>

                {/* Singles Width Callout */}
                <line x1="135" y1="140" x2="135" y2="460" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="70" y="288" width="100" height="22" fill="#000000" rx="2" />
                <text x="120" y="303">8.23m (27ft)</text>

                {/* Service Box Length */}
                <rect x="365" y="210" width="70" height="18" fill="#000000" opacity="0.8" rx="2" />
                <text x="400" y="223">6.40m</text>
              </g>
            )}
          </svg>
        );

      case "basketball":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Perimeter Runoff */}
            <rect x="20" y="20" width="960" height="560" fill={activePalette.outer} rx="4" />

            {/* Main Court Playing Surface (28m x 15m) */}
            <rect x="120" y="70" width="760" height="460" fill={activePalette.inner} />

            {/* Boundary Lines */}
            <rect
              x="120"
              y="70"
              width="760"
              height="460"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Half-Court Division Line */}
            <line x1="500" y1="70" x2="500" y2="530" stroke={activePalette.lines} strokeWidth="4" />

            {/* Center Circle (Radius 1.8m) */}
            <circle cx="500" cy="300" r="60" fill="none" stroke={activePalette.lines} strokeWidth="4" />

            {/* Left Key Free-Throw Area */}
            <rect x="120" y="210" width="160" height="180" fill={activePalette.key} />
            <rect x="120" y="210" width="160" height="180" fill="none" stroke={activePalette.lines} strokeWidth="3" />
            <circle cx="280" cy="300" r="60" fill="none" stroke={activePalette.lines} strokeWidth="3" strokeDasharray="6 4" />
            <path d="M 280,240 A 60,60 0 0,1 280,360" fill="none" stroke={activePalette.lines} strokeWidth="3" />

            {/* Left 3-Point Arc (6.75m radius) */}
            <path
              d="M 120,110 L 170,110 A 210,210 0 0,1 170,490 L 120,490"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Left Backboard & Rim */}
            <line x1="150" y1="260" x2="150" y2="340" stroke="#ffffff" strokeWidth="6" />
            <circle cx="165" cy="300" r="12" fill="none" stroke="#ea580c" strokeWidth="4" />

            {/* Right Key Free-Throw Area */}
            <rect x="720" y="210" width="160" height="180" fill={activePalette.key} />
            <rect x="720" y="210" width="160" height="180" fill="none" stroke={activePalette.lines} strokeWidth="3" />
            <circle cx="720" cy="300" r="60" fill="none" stroke={activePalette.lines} strokeWidth="3" strokeDasharray="6 4" />
            <path d="M 720,240 A 60,60 0 0,0 720,360" fill="none" stroke={activePalette.lines} strokeWidth="3" />

            {/* Right 3-Point Arc */}
            <path
              d="M 880,110 L 830,110 A 210,210 0 0,0 830,490 L 880,490"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Right Backboard & Rim */}
            <line x1="850" y1="260" x2="850" y2="340" stroke="#ffffff" strokeWidth="6" />
            <circle cx="835" cy="300" r="12" fill="none" stroke="#ea580c" strokeWidth="4" />

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="120" y1="45" x2="880" y2="45" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="430" y="32" width="140" height="22" fill="#000000" rx="2" />
                <text x="500" y="47">28.0m (91.86ft)</text>

                <line x1="905" y1="70" x2="905" y2="530" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="915" y="288" width="120" height="22" fill="#000000" rx="2" />
                <text x="975" y="303">15.0m (49.2ft)</text>

                <rect x="235" y="140" width="90" height="18" fill="#000000" rx="2" />
                <text x="280" y="153">3PT: 6.75m</text>
              </g>
            )}
          </svg>
        );

      case "badminton":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Surround */}
            <rect x="40" y="30" width="920" height="540" fill={activePalette.outer} rx="4" />

            {/* Badminton Court Surface (13.4m x 6.1m) */}
            <rect x="140" y="80" width="720" height="440" fill={activePalette.inner} />

            {/* Doubles Outer Boundary */}
            <rect
              x="140"
              y="80"
              width="720"
              height="440"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Singles Sidelines */}
            <line x1="140" y1="125" x2="860" y2="125" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="140" y1="475" x2="860" y2="475" stroke={activePalette.lines} strokeWidth="3" />

            {/* Long Service Lines for Doubles (0.76m inside back boundary) */}
            <line x1="190" y1="80" x2="190" y2="520" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="810" y1="80" x2="810" y2="520" stroke={activePalette.lines} strokeWidth="3" />

            {/* Short Service Lines (1.98m from net) */}
            <line x1="390" y1="80" x2="390" y2="520" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="610" y1="80" x2="610" y2="520" stroke={activePalette.lines} strokeWidth="3" />

            {/* Center Service Line */}
            <line x1="140" y1="300" x2="390" y2="300" stroke={activePalette.lines} strokeWidth="3" />
            <line x1="610" y1="300" x2="860" y2="300" stroke={activePalette.lines} strokeWidth="3" />

            {/* Center Net */}
            <line x1="500" y1="60" x2="500" y2="540" stroke="#000000" strokeWidth="6" strokeDasharray="3 3" />
            <line x1="500" y1="60" x2="500" y2="540" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="60" r="6" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="540" r="6" fill="#000000" stroke="#ffffff" strokeWidth="2" />

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="140" y1="55" x2="860" y2="55" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="430" y="42" width="140" height="22" fill="#000000" rx="2" />
                <text x="500" y="57">13.40m (44.0ft)</text>

                <line x1="885" y1="80" x2="885" y2="520" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="895" y="288" width="110" height="22" fill="#000000" rx="2" />
                <text x="950" y="303">6.10m (20.0ft)</text>

                <rect x="420" y="195" width="80" height="18" fill="#000000" rx="2" />
                <text x="460" y="208">Net: 1.55m</text>
              </g>
            )}
          </svg>
        );

      case "pickleball":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Surround */}
            <rect x="30" y="30" width="940" height="540" fill={activePalette.outer} rx="4" />

            {/* Main Court Playing Surface (13.41m x 6.1m) */}
            <rect x="140" y="90" width="720" height="420" fill={activePalette.inner} />

            {/* Kitchen Non-Volley Zone (7ft both sides of net) */}
            <rect x="400" y="90" width="200" height="420" fill={activePalette.kitchen || "#4d7c0f"} />

            {/* Court Boundary Lines */}
            <rect
              x="140"
              y="90"
              width="720"
              height="420"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Kitchen Lines (7ft from net each side) */}
            <line x1="400" y1="90" x2="400" y2="510" stroke={activePalette.lines} strokeWidth="4" />
            <line x1="600" y1="90" x2="600" y2="510" stroke={activePalette.lines} strokeWidth="4" />

            {/* Center Service Line (Outside Kitchen only) */}
            <line x1="140" y1="300" x2="400" y2="300" stroke={activePalette.lines} strokeWidth="4" />
            <line x1="600" y1="300" x2="860" y2="300" stroke={activePalette.lines} strokeWidth="4" />

            {/* Center Net */}
            <line x1="500" y1="70" x2="500" y2="530" stroke="#000000" strokeWidth="6" strokeDasharray="3 3" />
            <line x1="500" y1="70" x2="500" y2="530" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="70" r="6" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="530" r="6" fill="#000000" stroke="#ffffff" strokeWidth="2" />

            {/* Kitchen Zone Label */}
            <text x="500" y="295" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="0.1em">
              NON-VOLLEY KITCHEN ZONE (7 FT)
            </text>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="140" y1="65" x2="860" y2="65" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="430" y="52" width="140" height="22" fill="#000000" rx="2" />
                <text x="500" y="67">13.41m (44.0ft)</text>

                <line x1="885" y1="90" x2="885" y2="510" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="895" y="288" width="110" height="22" fill="#000000" rx="2" />
                <text x="950" y="303">6.10m (20.0ft)</text>
              </g>
            )}
          </svg>
        );

      case "cricketTurf":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Cage Surround */}
            <rect x="30" y="30" width="940" height="540" fill={activePalette.outer} rx="4" />

            {/* Alternating Grass Mowing Stripes */}
            {[...Array(12)].map((_, i) => (
              <rect
                key={i}
                x={70 + i * 72}
                y={60}
                width="72"
                height="480"
                fill={i % 2 === 0 ? activePalette.stripe1 : activePalette.stripe2}
              />
            ))}

            {/* Perimeter Cage Boundary Wire */}
            <rect
              x="70"
              y="60"
              width="864"
              height="480"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray="8 6"
            />

            {/* Central Batting Pitch (Natural Matting) */}
            <rect x="260" y="240" width="480" height="120" fill={activePalette.pitch} rx="2" />
            <rect x="260" y="240" width="480" height="120" fill="none" stroke="#000000" strokeWidth="2" />

            {/* Bowling Crease & Popping Crease (Left End) */}
            <line x1="300" y1="230" x2="300" y2="370" stroke="#dc2626" strokeWidth="3" />
            <line x1="330" y1="240" x2="330" y2="360" stroke="#ffffff" strokeWidth="3" />
            {/* Stumps (Left) */}
            <circle cx="300" cy="285" r="4" fill="#000000" />
            <circle cx="300" cy="300" r="4" fill="#000000" />
            <circle cx="300" cy="315" r="4" fill="#000000" />

            {/* Bowling Crease & Popping Crease (Right End) */}
            <line x1="700" y1="230" x2="700" y2="370" stroke="#dc2626" strokeWidth="3" />
            <line x1="670" y1="240" x2="670" y2="360" stroke="#ffffff" strokeWidth="3" />
            {/* Stumps (Right) */}
            <circle cx="700" cy="285" r="4" fill="#000000" />
            <circle cx="700" cy="300" r="4" fill="#000000" />
            <circle cx="700" cy="315" r="4" fill="#000000" />

            {/* Pitch Text Label */}
            <text x="500" y="305" fill="#451a03" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.1em">
              REGULATION 22-YARD SYNTHETIC TURF PITCH (20.12M)
            </text>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="70" y1="45" x2="934" y2="45" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="420" y="32" width="160" height="22" fill="#000000" rx="2" />
                <text x="500" y="47">35m - 40m Cage Length</text>

                <line x1="950" y1="60" x2="950" y2="540" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="915" y="288" width="130" height="22" fill="#000000" rx="2" />
                <text x="980" y="303">18m - 20m Width</text>
              </g>
            )}
          </svg>
        );

      case "squash":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Wall Surrounds */}
            <rect x="100" y="40" width="800" height="520" fill={activePalette.walls || "#f8fafc"} />
            <rect x="100" y="40" width="800" height="520" fill="none" stroke="#000000" strokeWidth="4" />

            {/* Sprung European Maple Floor */}
            <rect x="120" y="60" width="760" height="480" fill={activePalette.floor} />

            {/* Floor Plank Lines */}
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1={120}
                y1={60 + i * 30}
                x2={880}
                y2={60 + i * 30}
                stroke={activePalette.woodAccent}
                strokeWidth="1"
                opacity="0.35"
              />
            ))}

            {/* Front Wall Flush Acoustic Tin */}
            <rect x="120" y="60" width="760" height="30" fill={activePalette.tin} />
            <text x="500" y="80" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">
              FRONT WALL FLUSH SOUNDBOARD / TIN (0.48M)
            </text>

            {/* Short Line (5.44m from front wall) */}
            <line x1="120" y1="360" x2="880" y2="360" stroke={activePalette.lines} strokeWidth="4" />

            {/* Half Court Line (from short line to back wall) */}
            <line x1="500" y1="360" x2="500" y2="540" stroke={activePalette.lines} strokeWidth="4" />

            {/* Left Service Box */}
            <rect x="120" y="360" width="130" height="110" fill="none" stroke={activePalette.lines} strokeWidth="4" />

            {/* Right Service Box */}
            <rect x="750" y="360" width="130" height="110" fill="none" stroke={activePalette.lines} strokeWidth="4" />

            {/* Transparent Back Glass Wall */}
            <line x1="120" y1="540" x2="880" y2="540" stroke="#0284c7" strokeWidth="8" strokeOpacity="0.8" />
            <text x="500" y="555" fill="#0369a1" fontSize="11" fontWeight="800" textAnchor="middle">
              12MM CLEAR TOUGHENED GLASS SPECTATOR WALL & DOOR
            </text>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#000000" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="120" y1="35" x2="880" y2="35" stroke="#000000" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="440" y="22" width="120" height="22" fill="#000000" rx="2" />
                <text x="500" y="37" fill="#ffffff">9.75m (32.0ft)</text>

                <line x1="905" y1="60" x2="905" y2="540" stroke="#000000" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="915" y="288" width="115" height="22" fill="#000000" rx="2" />
                <text x="972" y="303" fill="#ffffff">6.40m (21.0ft)</text>
              </g>
            )}
          </svg>
        );

      case "volleyball":
      default:
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Free Zone Surrounds */}
            <rect x="30" y="30" width="940" height="540" fill={activePalette.outer} rx="4" />

            {/* Playing Court (18m x 9m) */}
            <rect x="140" y="110" width="720" height="380" fill={activePalette.inner} />

            {/* Boundary Lines */}
            <rect
              x="140"
              y="110"
              width="720"
              height="380"
              fill="none"
              stroke={activePalette.lines}
              strokeWidth="4"
            />

            {/* Attack Lines (3m from net) */}
            <line x1="380" y1="110" x2="380" y2="490" stroke={activePalette.lines} strokeWidth="4" />
            <line x1="620" y1="110" x2="620" y2="490" stroke={activePalette.lines} strokeWidth="4" />

            {/* Centerline & Net */}
            <line x1="500" y1="90" x2="500" y2="510" stroke="#000000" strokeWidth="6" strokeDasharray="3 3" />
            <line x1="500" y1="90" x2="500" y2="510" stroke="#ffffff" strokeWidth="2" />
            <circle cx="500" cy="90" r="7" fill="#dc2626" />
            <circle cx="500" cy="510" r="7" fill="#dc2626" />

            {/* Attack Line Labels */}
            <text x="380" y="100" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">
              ATTACK LINE (3M)
            </text>
            <text x="620" y="100" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">
              ATTACK LINE (3M)
            </text>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="140" y1="75" x2="860" y2="75" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="430" y="62" width="140" height="22" fill="#000000" rx="2" />
                <text x="500" y="77">18.0m (59.0ft)</text>

                <line x1="885" y1="110" x2="885" y2="490" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="895" y="288" width="110" height="22" fill="#000000" rx="2" />
                <text x="950" y="303">9.0m (29.5ft)</text>
              </g>
            )}
          </svg>
        );

      case "gym":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Gym Floor */}
            <rect x="20" y="20" width="960" height="560" fill={activePalette.outer} rx="6" />
            
            {/* Main Rubber Workout Floor */}
            <rect x="40" y="40" width="920" height="520" fill={activePalette.inner} rx="4" stroke="#000000" strokeWidth="2" />

            {/* Functional Sprint Turf Track (Top Lane: 20m x 2m) */}
            <rect x="60" y="60" width="880" height="100" fill={activePalette.turf || "#15803d"} rx="3" stroke="#ffffff" strokeWidth="2" />
            <line x1="60" y1="110" x2="940" y2="110" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 4" />
            {[100, 240, 380, 520, 660, 800].map((mx, idx) => (
              <g key={idx}>
                <line x1={mx} y1="60" x2={mx} y2="160" stroke="#ffffff" strokeWidth="2" />
                <text x={mx + 6} y="80" fill="#ffffff" fontSize="10" fontWeight="900">{idx * 5}M</text>
              </g>
            ))}
            <text x="500" y="145" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.1em">
              FUNCTIONAL SPRINT & SLED TURF TRACK (20M)
            </text>

            {/* Olympic Deadlift Drop Platform 1 */}
            <rect x="80" y="200" width="240" height="150" fill="#0f172a" stroke="#ffffff" strokeWidth="2" rx="4" />
            <rect x="130" y="200" width="140" height="150" fill="#087FEA" opacity="0.85" stroke="#ffffff" strokeWidth="1" />
            <text x="200" y="275" fill="#000000" fontSize="11" fontWeight="900" textAnchor="middle">WOOD CORE LIFTING ZONE</text>
            <rect x="85" y="205" width="40" height="140" fill="#1e293b" />
            <rect x="275" y="205" width="40" height="140" fill="#1e293b" />
            <text x="105" y="280" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" transform="rotate(-90 105 280)">DROP RUBBER</text>
            <text x="295" y="280" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" transform="rotate(90 295 280)">DROP RUBBER</text>
            <line x1="120" y1="275" x2="280" y2="275" stroke="#e2e8f0" strokeWidth="4" />
            <circle cx="120" cy="275" r="14" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <circle cx="280" cy="275" r="14" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />

            {/* Olympic Deadlift Drop Platform 2 */}
            <rect x="360" y="200" width="240" height="150" fill="#0f172a" stroke="#ffffff" strokeWidth="2" rx="4" />
            <rect x="410" y="200" width="140" height="150" fill="#087FEA" opacity="0.85" stroke="#ffffff" strokeWidth="1" />
            <text x="480" y="275" fill="#000000" fontSize="11" fontWeight="900" textAnchor="middle">WOOD CORE LIFTING ZONE</text>
            <rect x="365" y="205" width="40" height="140" fill="#1e293b" />
            <rect x="555" y="205" width="40" height="140" fill="#1e293b" />
            <text x="385" y="280" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" transform="rotate(-90 385 280)">DROP RUBBER</text>
            <text x="575" y="280" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" transform="rotate(90 575 280)">DROP RUBBER</text>
            <line x1="400" y1="275" x2="560" y2="275" stroke="#e2e8f0" strokeWidth="4" />
            <circle cx="400" cy="275" r="14" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
            <circle cx="560" cy="275" r="14" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />

            {/* Dumbbell & Free-Weight Area (Right Zone) */}
            <rect x="640" y="200" width="300" height="330" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" rx="4" />
            <text x="790" y="230" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle">
              DUMBBELL & BENCH ZONE (15mm RUBBER)
            </text>
            {[260, 320, 380, 440, 500].map((ry, i) => (
              <g key={i}>
                <rect x="660" y={ry} width="260" height="16" fill="#3f3f46" stroke="#71717a" strokeWidth="1" rx="2" />
                {[680, 710, 740, 770, 800, 830, 860, 890].map((bx, j) => (
                  <circle key={j} cx={bx} cy={ry + 8} r="5" fill="#f59e0b" />
                ))}
              </g>
            ))}

            {/* Functional Stretch & Agility Zone (Bottom Left) */}
            <rect x="80" y="380" width="520" height="150" fill="#1e293b" stroke="#ffffff" strokeWidth="1.5" rx="4" />
            <text x="340" y="415" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle">
              FUNCTIONAL AGILITY & KETTLEBELL ZONE
            </text>
            <rect x="120" y="440" width="440" height="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
            {[160, 200, 240, 280, 320, 360, 400, 440, 480, 520].map((lx, k) => (
              <line key={k} x1={lx} y1="440" x2={lx} y2="490" stroke="#f59e0b" strokeWidth="2" />
            ))}

            {/* Dimension Callouts */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="60" y1="50" x2="940" y2="50" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="420" y="37" width="160" height="22" fill="#000000" rx="2" />
                <text x="500" y="52">20.0m Sprint Track</text>

                <line x1="970" y1="60" x2="970" y2="540" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="890" y="285" width="115" height="22" fill="#000000" rx="2" />
                <text x="947" y="300">Custom Layout</text>
              </g>
            )}
          </svg>
        );

      case "tableTennis":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Tournament Hall Surrounds */}
            <rect x="20" y="20" width="960" height="560" fill={activePalette.outer} rx="6" />

            {/* Enclosure Surrounds (ITTF 14m x 7m) */}
            <rect x="100" y="60" width="800" height="480" fill={activePalette.inner} stroke="#ffffff" strokeWidth="2" />

            {/* Perimeter Surround Barrier Boards */}
            <rect x="96" y="56" width="808" height="488" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="40 4" />
            <text x="500" y="48" fill="#f59e0b" fontSize="10" fontWeight="900" textAnchor="middle">
              ITTF CHAMPIONSHIP SURROUND BARRIERS (14.0M × 7.0M)
            </text>

            {/* ITTF Regulation Table (2.74m x 1.525m scaled up for visual clarity) */}
            <rect x="300" y="160" width="400" height="280" fill={activePalette.table || "#1d4ed8"} stroke="#ffffff" strokeWidth="3" rx="2" />

            {/* Table White Boundary Line (20mm) */}
            <rect x="300" y="160" width="400" height="280" fill="none" stroke="#ffffff" strokeWidth="3" />

            {/* Center Longitudinal Line for Doubles */}
            <line x1="300" y1="300" x2="700" y2="300" stroke="#ffffff" strokeWidth="2" />

            {/* Net & Posts */}
            <line x1="500" y1="140" x2="500" y2="460" stroke="#000000" strokeWidth="6" />
            <line x1="500" y1="140" x2="500" y2="460" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="500" cy="140" r="6" fill="#f59e0b" />
            <circle cx="500" cy="460" r="6" fill="#f59e0b" />

            {/* Umpire Table & Stand */}
            <rect x="450" y="490" width="100" height="35" fill="#1e293b" stroke="#ffffff" strokeWidth="1.5" rx="2" />
            <text x="500" y="512" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle">UMPIRE TABLE</text>

            {/* Player Service & Rally Zones */}
            <text x="200" y="305" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">PLAYER 1 ZONE</text>
            <text x="800" y="305" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">PLAYER 2 ZONE</text>

            {/* Conversion Option Badge */}
            <rect x="350" y="80" width="300" height="24" fill="#000000" rx="3" stroke="#ffffff" strokeWidth="1" />
            <text x="500" y="96" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle">
              CONVERTIBLE INDOOR PICKLEBALL TABLE & MAT READY
            </text>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="300" y1="145" x2="700" y2="145" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="430" y="132" width="140" height="22" fill="#000000" rx="2" />
                <text x="500" y="147">2.74m (9.0ft)</text>

                <line x1="720" y1="160" x2="720" y2="440" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="730" y="288" width="125" height="22" fill="#000000" rx="2" />
                <text x="792" y="303">1.525m (5.0ft)</text>
              </g>
            )}
          </svg>
        );

      case "runningTrack":
        return (
          <svg
            viewBox="0 0 1000 600"
            className="court-svg-canvas"
            style={{ width: "100%", height: "auto", maxHeight: "480px", display: "block" }}
          >
            {/* Outer Stadium Ground */}
            <rect x="20" y="20" width="960" height="560" fill={activePalette.outer} rx="8" />

            {/* Track Oval Background (8 Lanes Polyurethane) */}
            <rect x="60" y="60" width="880" height="480" rx="240" fill={activePalette.track || "#b91c1c"} stroke="#ffffff" strokeWidth="2" />

            {/* Inner Infield Natural Grass Field */}
            <rect x="260" y="160" width="480" height="280" rx="140" fill={activePalette.inner || "#15803d"} stroke="#ffffff" strokeWidth="3" />

            {/* Football / Pitch Markings on Infield */}
            <rect x="330" y="200" width="340" height="200" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            <line x1="500" y1="200" x2="500" y2="400" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            <circle cx="500" cy="300" r="40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            <circle cx="500" cy="300" r="3" fill="#ffffff" />
            <text x="500" y="325" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">INFIELD MULTI-SPORT TURF</text>

            {/* 8 Running Track Lanes */}
            {[25, 50, 75, 100, 125, 150, 175].map((offset, i) => (
              <rect
                key={i}
                x={60 + offset}
                y={60 + offset}
                width={880 - offset * 2}
                height={480 - offset * 2}
                rx={240 - offset}
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.85"
              />
            ))}

            {/* 100m Straightaway Finish Line */}
            <line x1="300" y1="480" x2="300" y2="540" stroke="#ffffff" strokeWidth="5" />
            <line x1="300" y1="480" x2="300" y2="540" stroke="#000000" strokeWidth="2" strokeDasharray="3 3" />
            <text x="300" y="555" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle">FINISH LINE</text>

            {/* Staggered Start Marks */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((lane) => {
              const startX = 650 + lane * 18;
              const startY = 480 + lane * 7.5;
              return (
                <line
                  key={lane}
                  x1={startX}
                  y1={startY}
                  x2={startX}
                  y2={startY + 7}
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                />
              );
            })}
            <text x="710" y="555" fill="#f59e0b" fontSize="9" fontWeight="800" textAnchor="middle">400M STAGGERED STARTS</text>

            {/* Lane 1 to 8 Numbers */}
            <g fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle">
              <text x="280" y="490">8</text>
              <text x="280" y="500">7</text>
              <text x="280" y="510">6</text>
              <text x="280" y="520">5</text>
              <text x="280" y="528">4</text>
              <text x="280" y="534">3</text>
              <text x="280" y="538">2</text>
              <text x="280" y="542">1</text>
            </g>

            {/* Dimensions Overlay */}
            {showDimensions && (
              <g className="dim-callouts" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                <line x1="60" y1="45" x2="940" y2="45" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="400" y="32" width="200" height="22" fill="#000000" rx="2" />
                <text x="500" y="47">IAAF 400.0m Regulation Oval</text>

                <line x1="970" y1="60" x2="970" y2="540" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="880" y="285" width="130" height="22" fill="#000000" rx="2" />
                <text x="945" y="300">8 Lanes × 1.22m</text>
              </g>
            )}
          </svg>
        );
    }
  };

  return (
    <div
      className="court-simulator-container"
      style={{
        background: "#FFFFFF",
        border: "2px solid #000000",
        padding: "32px",
        color: "#000000"
      }}
    >
      {/* Header & Description */}
      <div
        className="sim-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "24px",
          paddingBottom: "20px",
          borderBottom: "1px solid #000000"
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              color: "#000000",
              padding: "4px 14px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px"
            }}
          >
            <Ruler size={15} style={{ color: "#000000" }} />
            <span>2D ARCHITECTURAL COURT BLUEPRINT & SPECIFICATIONS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
              fontWeight: 900,
              color: "#000000",
              lineHeight: 1.2,
              margin: "0 0 8px 0"
            }}
          >
            Precision Regulation Court Layout Visualizer
          </h2>

          <p style={{ color: "#333333", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
            {currentSport.description}
          </p>
        </div>

        {/* Global Controls: Dimension Toggle & Night Lighting */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => setShowDimensions(!showDimensions)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: showDimensions ? "#000000" : "#FFFFFF",
              color: showDimensions ? "#FFFFFF" : "#000000",
              border: "1px solid #000000",
              padding: "8px 16px",
              fontSize: "0.84rem",
              fontWeight: 800,
              cursor: "pointer"
            }}
            title="Toggle Regulation Dimensions"
          >
            <Ruler size={16} />
            <span>{showDimensions ? "Hide Dimensions" : "Show Dimensions"}</span>
          </button>

          <button
            onClick={() => setIsNightMode(!isNightMode)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: isNightMode ? "#000000" : "#FFFFFF",
              color: isNightMode ? "#FFFFFF" : "#000000",
              border: "1px solid #000000",
              padding: "8px 16px",
              fontSize: "0.84rem",
              fontWeight: 800,
              cursor: "pointer"
            }}
            title="Toggle Night Stadium Lighting"
          >
            {isNightMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{isNightMode ? "Daylight View" : "Night Floodlights"}</span>
          </button>
        </div>
      </div>

      {/* Sports Selection Tabs */}
      <div
        className="sim-sports-tabs"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
          paddingBottom: "16px",
          borderBottom: "1px solid #000000"
        }}
      >
        {sports.map((sp) => {
          const isActive = selectedSport === sp.id;
          return (
            <button
              key={sp.id}
              onClick={() => setSelectedSport(sp.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: isActive ? "#000000" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#000000",
                border: "1px solid #000000",
                padding: "8px 16px",
                fontSize: "0.85rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              <span>{sp.icon}</span>
              <span>{sp.name}</span>
            </button>
          );
        })}
      </div>

      {/* Natural Colorway Theme Selector */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          background: "#FFFFFF",
          border: "1px solid #000000",
          padding: "10px 18px",
          marginBottom: "16px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Palette size={16} style={{ color: "#000000" }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#000000" }}>
            NATURAL COATING PALETTES:
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {Object.keys(currentSport.themes).map((themeKey) => {
            const themeObj = currentSport.themes[themeKey];
            const isSelected = colorTheme === themeKey;
            return (
              <button
                key={themeKey}
                onClick={() => setColorTheme(themeKey)}
                style={{
                  background: isSelected ? "#000000" : "#FFFFFF",
                  color: isSelected ? "#FFFFFF" : "#000000",
                  border: "1px solid #000000",
                  padding: "5px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>{themeObj.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 2D Court Stage */}
      <div
        style={{
          background: isNightMode ? "#090d16" : "#FFFFFF",
          border: "2px solid #000000",
          padding: "20px",
          marginBottom: "24px",
          position: "relative",
          transition: "background 0.3s ease"
        }}
      >
        {/* Status Tag */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "14px",
            zIndex: 10,
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "4px 12px",
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#000000"
          }}
        >
          {currentSport.standards} • 2D Blueprint Plan
        </div>

        {/* SVG Drawing */}
        {renderCourtSvg()}
      </div>

      {/* Specifications Grid & Engineering Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "24px"
        }}
      >
        {/* Footprint Box */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "16px"
          }}
        >
          <div style={{ fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", color: "#555555", marginBottom: "4px" }}>
            Playing Arena Footprint
          </div>
          <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#000000" }}>
            {currentSport.standardSize}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#444444", marginTop: "2px" }}>
            Total with Runoffs: {currentSport.overallSize}
          </div>
        </div>

        {/* Coating System Box */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "16px"
          }}
        >
          <div style={{ fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", color: "#555555", marginBottom: "4px" }}>
            Synthetic Surface Specification
          </div>
          <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#000000" }}>
            {currentSport.coatingLayers}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#444444", marginTop: "2px" }}>
            Certified by {currentSport.governingBody}
          </div>
        </div>

        {/* Drainage & Slope */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #000000",
            padding: "16px"
          }}
        >
          <div style={{ fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", color: "#555555", marginBottom: "4px" }}>
            Gradient & Sub-Base Precision
          </div>
          <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#000000" }}>
            1:100 Laser Slope (1%)
          </div>
          <div style={{ fontSize: "0.8rem", color: "#444444", marginTop: "2px" }}>
            Zero standing puddles • Rapid rainwater runoff
          </div>
        </div>
      </div>

      {/* Regulatory Details & Quote Action */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #000000",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}
      >
        <div>
          <strong style={{ display: "block", fontSize: "0.95rem", color: "#000000", marginBottom: "4px" }}>
            Regulatory Specs for {currentSport.name}:
          </strong>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "0.82rem", color: "#333333" }}>
            {currentSport.specDetails.map((s, idx) => (
              <span key={idx} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle2 size={13} style={{ color: "#15803d" }} />
                <strong>{s.label}:</strong> {s.value}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleOpenQuoteSafe(`${currentSport.name} - Formal Specification & Quote`)}
          className="btn btn-primary"
          style={{
            background: "#0084FF",
            color: "#FFFFFF",
            border: "none",
            fontWeight: 800,
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 15px rgba(0, 132, 255, 0.4)"
          }}
        >
          <span>Request Detailed Specification</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
