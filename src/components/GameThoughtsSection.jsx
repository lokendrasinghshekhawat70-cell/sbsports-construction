import React, { useState } from "react";
import { 
  Quote, 
  Sparkles, 
  Copy, 
  Check, 
  Flame, 
  Heart, 
  Share2, 
  RefreshCw,
  Trophy,
  Zap,
  Target
} from "lucide-react";

export default function GameThoughtsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedQuoteId, setCopiedQuoteId] = useState(null);
  const [dailyQuoteIndex, setDailyQuoteIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const thoughts = [
    {
      id: "basketball-1",
      sport: "Basketball",
      category: "basketball",
      icon: "🏀",
      tagline: "The Poetry of Rhythm & Elevation",
      quote: "The court is a canvas where grit defies gravity. Every dribble is a heartbeat, every pass an unwritten oath of brotherhood, and every jump shot a declaration that the only real boundaries are the ones your mind accepts.",
      lifeLesson: "Life, like basketball, isn't about how high you jump; it's about having the balance and composure to land firmly, reset your stance, and take the next shot with unwavering conviction.",
      author: "Court Philosophy & Champion Creed",
      badge: "Pure Rhythm"
    },
    {
      id: "tennis-1",
      sport: "Tennis",
      category: "tennis",
      icon: "🎾",
      tagline: "Chess at 130 Miles Per Hour",
      quote: "In tennis, every point is a brand-new sunrise. You cannot dictate the wind or your rival's spin, but you have absolute sovereignty over your footwork, your breath, and your courage inside the tempest.",
      lifeLesson: "You cannot change the ball you were served in life; you can only decide the depth, angle, and heart with which you return it.",
      author: "Grand Slam Champion Wisdom",
      badge: "Solitary Mastery"
    },
    {
      id: "badminton-1",
      sport: "Badminton",
      category: "badminton",
      icon: "🏸",
      tagline: "The Lightning Flight of Serenity",
      quote: "Speed without silence is mere commotion; power without precision is blind haste. On the badminton court, triumph belongs to the player whose feet glide like water across silk, yet whose wrist strikes like thunder at the decisive instant.",
      lifeLesson: "Patience and lightning reflexes are not opposites; they are twin wings of the same bird. Absorb the fastest storms with the stillest mind.",
      author: "Racquet Masters' Doctrine",
      badge: "Zen Speed"
    },
    {
      id: "pickleball-1",
      sport: "Pickleball",
      category: "pickleball",
      icon: "🏓",
      tagline: "The Wisdom of the Soft Game",
      quote: "In an impatient world obsessed with brute force, pickleball rewards the gentle dink. Mastery lies not in slamming every ball, but in holding your ground at the kitchen line, resetting the pace, and outlasting chaos with quiet finesse.",
      lifeLesson: "The loudest move rarely wins the war. True strength is knowing when to soften your grip, slow the rally, and wait for the true opening.",
      author: "The Kitchen Line Creed",
      badge: "Tactical Grace"
    },
    {
      id: "cricket-1",
      sport: "Box Cricket & Turf",
      category: "cricket",
      icon: "🏏",
      tagline: "Under the Midnight Floodlights",
      quote: "Enclosed inside the turf cage under blazing floodlights, the world shrinks to 22 yards of pure destiny. Here, every delivery carries a heartbeat, every dive leaves skin on the green, and every boundary echoes long after the lights go down.",
      lifeLesson: "Pressure is merely a spotlight asking who you truly are when everyone is watching. Don't flinch; watch the seam, trust your instincts, and play through the line.",
      author: "Turf Arena Spirit",
      badge: "Unbroken Passion"
    },
    {
      id: "squash-1",
      sport: "Squash",
      category: "squash",
      icon: "⚡",
      tagline: "Four Walls & The Iron Will",
      quote: "Within these four glass-and-plaster walls, there is no place to hide from your own exhaustion. Squash is a furnace that incinerates doubt and tests whether your lungs are forged from iron and your intellect from diamond.",
      lifeLesson: "When life traps you within four tight corners, don't panic. Reclaim the T-position, control the center of your universe, and dictate the tempo.",
      author: "Wall Master Axiom",
      badge: "Pure Endurance"
    },
    {
      id: "volleyball-1",
      sport: "Volleyball",
      category: "volleyball",
      icon: "🏐",
      tagline: "The Sacred Pact of Airborne Trust",
      quote: "No ball touches the wooden floor as long as trust remains in the air. One touch to rescue, one touch to architect, and one thunderous leap to seal the point. You never jump alone when an entire team lifts your wings.",
      lifeLesson: "Individual brilliance can start a rally, but only selfless teamwork can keep the dream from touching the floor.",
      author: "The Spikers' Anthem",
      badge: "Collective Soul"
    },
    {
      id: "gym-1",
      sport: "Gym & Strength Arena",
      category: "gym",
      icon: "🏋️",
      tagline: "The Iron Discipline & The Quiet Grind",
      quote: "The iron never lies to you. You can listen to the noise of the world, or you can step into the chalk and let gravity teach you who you are. Every drop onto the rubber floor is proof of gravity defied, and every rep builds an unbreakable fortress within.",
      lifeLesson: "Real strength isn't announced with words; it is forged through countless silent hours of showing up when no one is watching, loading the bar, and pushing through resistance.",
      author: "The Iron Sanctum Philosophy",
      badge: "Pure Grit"
    },
    {
      id: "tabletennis-1",
      sport: "Table Tennis",
      category: "tabletennis",
      icon: "🏓",
      tagline: "Microsecond Reflexes & Unseen Spin",
      quote: "A millimeter of angle dictates victory or defeat. In table tennis, the ball travels faster than conscious thought; only muscle memory, anticipation, and lightning calm can read the invisible rotations and return chaos with laser precision.",
      lifeLesson: "In life's rapid exchanges, you don't rise to the occasion; you sink to the level of your preparation. Keep your balance low, stay centered, and meet fast challenges with relaxed focus.",
      author: "Table Tennis Master Doctrine",
      badge: "Split-Second Vision"
    },
    {
      id: "track-1",
      sport: "Synthetic Running Track",
      category: "track",
      icon: "🏃",
      tagline: "The 400-Meter Truth & The Open Lane",
      quote: "The red synthetic oval is the ultimate mirror. In lane four, at the 300-meter turn when lactic acid burns and your lungs beg for mercy, that is where character is carved out of thin air. The track rewards only those willing to empty the tank completely.",
      lifeLesson: "Stay in your own lane. You cannot control the pace of the runners ahead or behind you; you can only surrender to your stride and give everything you have until you cross the finish line.",
      author: "Olympic Track Legacy",
      badge: "Unyielding Will"
    },
    {
      id: "academy-1",
      sport: "Sports Academy & Management",
      category: "academy",
      icon: "🏢",
      tagline: "Architects of the Arena & Future Champions",
      quote: "Before an athlete can touch greatness, someone must believe enough to build the court, lay the foundation, and manage the dream. We build the arenas so that raw talent can meet world-class opportunity and conquer the world.",
      lifeLesson: "Great infrastructure is never about concrete or money; it is about building sacred spaces where human beings are inspired to discover the highest version of themselves.",
      author: "Sports Management Creed",
      badge: "Legacy Builders"
    },
    {
      id: "universal-1",
      sport: "The Court of Life",
      category: "universal",
      icon: "🏆",
      tagline: "Why We Build Every Court",
      quote: "We do not merely lay concrete, acrylic resins, and crisp white lines. We build sacred arenas where ordinary human beings step forward, face their limits, bleed away doubt, and discover that they are capable of greatness.",
      lifeLesson: "Champions are not forged on the podium in front of cheering crowds; they are born in the silence of empty courts at 5:00 AM, sweating on synthetic coatings.",
      author: "SB Sports Court Builders Creed",
      badge: "The Builder's Soul"
    }
  ];

  const handleCopy = (quoteObj) => {
    const textToCopy = `"${quoteObj.quote}" — ${quoteObj.sport} (${quoteObj.author})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuoteId(quoteObj.id);
    setTimeout(() => {
      setCopiedQuoteId(null);
    }, 2200);
  };

  const handleRandomizeDailyThought = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setDailyQuoteIndex((prev) => (prev + 1) % thoughts.length);
      setIsSpinning(false);
    }, 350);
  };

  const filteredThoughts = activeCategory === "all" 
    ? thoughts 
    : thoughts.filter((t) => t.category === activeCategory || t.category === "universal");

  const dailyThought = thoughts[dailyQuoteIndex];

  return (
    <div className="game-thoughts-section">
      {/* Header */}
      <div className="thoughts-header">
        <div className="badge-thoughts">
          <Quote size={16} />
          <span>CHAMPION PHILOSOPHY</span>
        </div>
        <h3 className="thoughts-title">
          Best Thoughts & Mindset For Every Game
        </h3>
        <p className="thoughts-subtitle">
          Every sport we build has its own philosophy, its own poetry, and its own timeless life lesson. Explore the champion mindset behind every court.
        </p>
      </div>

      {/* Featured Spotlight: Daily Champion Thought of the Day */}
      <div className="spotlight-thought-card">
        <div className="spotlight-decor-quote">
          <Quote size={80} />
        </div>
        <div className="spotlight-badge-row">
          <span className="spotlight-tag">
            <Flame size={14} style={{ color: "#FFFFFF" }} />
            <span>DAILY CHAMPION THOUGHT</span>
          </span>
          <span className="spotlight-sport">
            {dailyThought.icon} {dailyThought.sport} • {dailyThought.badge}
          </span>
        </div>

        <h4 className="spotlight-headline">{dailyThought.tagline}</h4>
        
        <blockquote className="spotlight-quote-text">
          "{dailyThought.quote}"
        </blockquote>

        <div className="spotlight-life-lesson">
          <div className="lesson-icon-box">
            <Zap size={18} style={{ color: "#000000" }} />
          </div>
          <div>
            <strong className="lesson-label">Life & Mental Blueprint:</strong>
            <p className="lesson-text">{dailyThought.lifeLesson}</p>
          </div>
        </div>

        <div className="spotlight-footer">
          <span className="spotlight-author">— {dailyThought.author}</span>
          <div className="spotlight-actions">
            <button
              onClick={() => handleCopy(dailyThought)}
              className="btn-action-icon"
              title="Copy Thought to Clipboard"
            >
              {copiedQuoteId === dailyThought.id ? (
                <>
                  <Check size={16} style={{ color: "#000000" }} />
                  <span style={{ color: "#000000", fontWeight: 800 }}>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} style={{ color: "#000000" }} />
                  <span>Copy Thought</span>
                </>
              )}
            </button>
            <button
              onClick={handleRandomizeDailyThought}
              className="btn-action-icon"
              title="Next Game Thought"
            >
              <RefreshCw size={16} className={isSpinning ? "animate-spin" : ""} />
              <span>Next Game</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Sport */}
      <div className="thoughts-filter-pills">
        <button
          onClick={() => setActiveCategory("all")}
          className={`thought-filter-btn ${activeCategory === "all" ? "active" : ""}`}
        >
          <span>All Games Thoughts</span>
        </button>
        <button
          onClick={() => setActiveCategory("basketball")}
          className={`thought-filter-btn ${activeCategory === "basketball" ? "active" : ""}`}
        >
          <span>🏀 Basketball</span>
        </button>
        <button
          onClick={() => setActiveCategory("tennis")}
          className={`thought-filter-btn ${activeCategory === "tennis" ? "active" : ""}`}
        >
          <span>🎾 Tennis</span>
        </button>
        <button
          onClick={() => setActiveCategory("badminton")}
          className={`thought-filter-btn ${activeCategory === "badminton" ? "active" : ""}`}
        >
          <span>🏸 Badminton</span>
        </button>
        <button
          onClick={() => setActiveCategory("pickleball")}
          className={`thought-filter-btn ${activeCategory === "pickleball" ? "active" : ""}`}
        >
          <span>🏓 Pickleball</span>
        </button>
        <button
          onClick={() => setActiveCategory("cricket")}
          className={`thought-filter-btn ${activeCategory === "cricket" ? "active" : ""}`}
        >
          <span>🏏 Box Cricket / Turf</span>
        </button>
        <button
          onClick={() => setActiveCategory("squash")}
          className={`thought-filter-btn ${activeCategory === "squash" ? "active" : ""}`}
        >
          <span>⚡ Squash</span>
        </button>
        <button
          onClick={() => setActiveCategory("volleyball")}
          className={`thought-filter-btn ${activeCategory === "volleyball" ? "active" : ""}`}
        >
          <span>🏐 Volleyball</span>
        </button>
      </div>

      {/* Grid of All Thoughts Cards */}
      <div className="thoughts-cards-grid">
        {filteredThoughts.map((item) => {
          const isCopied = copiedQuoteId === item.id;
          return (
            <div key={item.id} className="thought-card">
              <div className="thought-card-top">
                <div className="thought-sport-badge">
                  <span className="thought-emoji">{item.icon}</span>
                  <span className="thought-sport-name">{item.sport}</span>
                </div>
                <span className="thought-badge-pill">{item.badge}</span>
              </div>

              <h4 className="thought-card-tagline">{item.tagline}</h4>

              <div className="thought-quote-body">
                <Quote size={20} className="quote-mark-icon" />
                <p className="thought-card-text">{item.quote}</p>
              </div>

              <div className="thought-card-lesson">
                <div className="lesson-mini-head">
                  <Target size={14} className="text-amber" />
                  <span>The Real Game of Life</span>
                </div>
                <p>{item.lifeLesson}</p>
              </div>

              <div className="thought-card-bottom">
                <span className="thought-credit">{item.author}</span>
                <button
                  onClick={() => handleCopy(item)}
                  className="btn-card-copy"
                  title="Copy this quote"
                >
                  {isCopied ? (
                    <>
                      <Check size={14} className="text-emerald" />
                      <span className="text-emerald">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
