import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Gift,
  Menu,
  Pause,
  PartyPopper,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";
import chaayosFirstDay from "./assets/chaayos-first-day.jpg";
import creamCastle from "./assets/cream-castle.jpg";
import flowerSurprise from "./assets/flower-surprise.jpg";
import officeMomos from "./assets/office-momos.jpg";
import iceCreamDate from "./assets/ice-cream-date.jpg";
import flowerGiftBag from "./assets/flower-gift-bag.jpg";
import perfectInstrumental from "./assets/perfect-instrumental.mp3";
import lastOfficeDay from "./assets/smile.jpg";
import happiestLittleMoment from "./assets/happiest-little-moment.jpg";
import tandooriPaneerPizza from "./assets/tandoori-paneer-pizza.jpg";
import soloGolgappas from "./assets/solo-golgappas.jpg";
import dohfulVisit from "./assets/dohful-visit.jpg";
import dohfulCookies from "./assets/dohful-cookies.jpg";
import firstMaggieGift from "./assets/first-maggie-gift.jpg";

const CONFIG = {
  name: "Drishti",
  birthdayDate: new Date("2026-08-21T00:00:00"),
  heroLine:
    "Today isn't just another day — it's a celebration of the beautiful person you are.",
  message: [
    "From our very first fight the block, unblock, and everything in between to these two beautiful months filled with chaos, laughter, random plans, and countless little moments, I honestly wouldn't trade a single bit of it.",

    "You're that special person who has a way of making ordinary days feel a little more special, and somehow making the difficult ones feel a little lighter just by being around.",

    "From our random conversations and spontaneous plans to all the laughs and little moments we've shared, every bit of it has become a memory I'll always smile about.",

    "I'm genuinely glad that all these moments happened with you, and I'm even more grateful for the person you are.",

    "I hope this birthday brings you closer to everything you're dreaming of and gives you countless reasons to smile. You deserve all the happiness, love, and beautiful things life has to offer.",

    "Happy Birthday Drishti 🧸❤️ Here's to many more laughs, endless conversations, crazy plans, and beautiful memories together.",
  ],
  memories: [
    {
      title: "Our first day at Chaayos",
      caption:
        "Our first time at Chaayos endless conversations, lots of laughter, and trying some of Chaayos special snacks together. A simple little outing that turned into such a lovely memory. ☕❤️",
      img: chaayosFirstDay,
      alt: "Chai and snacks at Chaayos",
    },
    {
      title: "Cream Castle favourites",
      caption:
        "A little Cream Castle treat  because the best conversations always deserve something delicious on the side. 🍪",
      img: creamCastle,
      alt: "Desserts from Cream Castle",
    },
    {
      title: "A flower just for you",
      caption:
        "A tiny handmade flower surprise, carrying a very big reminder: you deserve thoughtful little joys. 🌻",
      img: flowerSurprise,
      alt: "A handmade yellow flower gift",
    },
    {
      title: "The post-office treat",
      caption:
        "That ordinary day after work momos and the unexpected time we got to spend together. Somehow without even realizing it, that little outing turned into a perfect little memory. 🥟🍨❤️",
      img: officeMomos,
      alt: "Momos after office",
    },
    {
      title: "Ice cream was essential",
      caption:
        "Because no after office momos plan is ever truly complete without ending it with ice cream. Obviously. 🍨❤️",
      img: iceCreamDate,
      alt: "Two cups of ice cream",
    },
    {
      title: "The surprise that may never arrive",
      caption:
        "This cute little gift bag is proof that I can plan a surprise pretty well… whether I’ll actually manage to give it to you is still uncertain. 😄🎁",
      img: flowerGiftBag,
      alt: "A colourful floral gift bag",
    },
    {
      title: "Your last day at the office",
      caption:
        "You were so genuinely happy that day and seeing that beautiful smile on your face made me really happy too. A perfect goodbye to one chapter and a lovely beginning to the next. 💗",
      img: lastOfficeDay,
      alt: "A happy farewell celebration on the last day at the office",
    },
    {
      title: "A moment worth replaying",
      caption:
        "One of your favourite things, paired with that beautiful happiness on your face a moment I’ll always want to remember. 💛",
      img: happiestLittleMoment,
      alt: "A close-up of beautifully decorated hands",
    },
    {
      title: "The pizza exception",
      caption:
        "I am not usually a pizza person, but your Indi Tandoori Paneer Pizza was so good it almost changed my mind. Almost. 🍕",
      img: tandooriPaneerPizza,
      alt: "An Indi Tandoori Paneer Pizza",
    },
    {
      title: "The great golgappa heist",
      caption:
        "The day you ate golgappas all by yourself without me — a delicious betrayal I will never forget. Yes, I am still keeping score. 😄",
      img: soloGolgappas,
      alt: "A plate of golgappas",
    },
    {
      title: "The Döhful cookie stop",
      caption:
        "Every now and then, we should go back to Döhful for cookies — because a tiny cookie break is clearly a very serious tradition. 🍪",
      img: dohfulVisit,
      alt: "The Döhful bakery at night",
    },
    {
      title: "Cookies, obviously",
      caption:
        "A little look at the cookie mission: choosing just one was never really going to happen. 🍪",
      img: dohfulCookies,
      alt: "Cookies on display at Döhful",
    },
    {
      title: "The first Maggi gift",
      caption:
        "My very first gift from you was Maggi, and I am keeping it with me forever. Forget expensive gifts — you set the standard with noodles, and honestly, nothing can top that. 🍜🎁",
      img: firstMaggieGift,
      alt: "A first gift of Maggi noodles",
    },
  ],
  wishes: [
    [
      "Happiness",
      "May this year be full of the kind of happiness that sneaks up on you in ordinary moments.",
      "💫",
    ],
    [
      "Dreams",
      "May every goal you're chasing get a little closer, and every plan go your way.",
      "🌙",
    ],
    [
      "Good People",
      "May you always have people around you who see how genuinely special you are.",
      "💕",
    ],
    [
      "Success",
      "May this year bring you all the wins you've worked so hard for.",
      "🌟",
    ],
  ],
};

const navItems = ["home", "message", "memories", "wishes", "surprise"];
const hearts = ["♡", "♥", "💕", "💗", "💖", "💞", "💓", "♡", "💘", "💝"];
const flowers = ["🌸", "🌷", "🌺", "🌼", "🌹", "🌸", "🌷", "🌺"];
const stars = ["✦", "✧", "✨", "♡", "✦", "✧", "💫", "♡"];

export default function App() {
  const [intro, setIntro] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [typed, setTyped] = useState([]);
  const [giftOpen, setGiftOpen] = useState(false);
  const [finalGiftOpen, setFinalGiftOpen] = useState(false);
  const [cheers, setCheers] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [blowing, setBlowing] = useState(false);
  const [blown, setBlown] = useState(false);
  const [showBirthdayText, setShowBirthdayText] = useState(false);
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [countdown, setCountdown] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    arrived: false,
  });
  const [bursts, setBursts] = useState([]);
  const refs = useRef({});
  const audioRef = useRef(null);

  const startBirthdayTune = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(perfectInstrumental);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    try {
      if (audioRef.current.currentTime < 0.1) audioRef.current.currentTime = 40;
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error("Audio error:", error);
    }
  };

  const stopBirthdayTune = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  useEffect(() => {
    const tick = () => {
      const diff = CONFIG.birthdayDate.getTime() - Date.now();
      if (diff <= 0)
        return setCountdown({ d: 0, h: 0, m: 0, s: 0, arrived: true });
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
        arrived: false,
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (intro !== 2) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        );
      },
      { threshold: 0.3 },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [intro]);

  useEffect(() => {
    if (intro !== 2) return;
    let line = 0;
    let character = 0;
    let stopped = false;
    const timers = [];
    const type = () => {
      if (stopped || line >= CONFIG.message.length) return;
      character += 1;
      setTyped(
        CONFIG.message.map((text, index) => {
          if (index < line) return text;
          if (index === line) return text.slice(0, character);
          return "";
        }),
      );
      if (character >= CONFIG.message[line].length) {
        line += 1;
        character = 0;
        timers.push(setTimeout(type, 220));
      } else timers.push(setTimeout(type, 12));
    };
    timers.push(setTimeout(type, 450));
    return () => {
      stopped = true;
      timers.forEach(clearTimeout);
    };
  }, [intro]);

  useEffect(() => {
    if (intro !== 1) return;
    const move = setTimeout(() => setBlowing(true), 600);
    const blow = setTimeout(() => setBlown(true), 2700);
    const title = setTimeout(() => setShowBirthdayText(true), 4000);
    const enter = setTimeout(() => {
      setIntro(2);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 7300);
    return () => [move, blow, title, enter].forEach(clearTimeout);
  }, [intro]);

  useEffect(() => () => stopBirthdayTune(), []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const startCelebration = () => {
    if (celebrationActive) return;
    setCelebrationActive(true);
    burst("🎉");
    window.setTimeout(() => scrollTo("message"), 1450);
    window.setTimeout(() => setCelebrationActive(false), 2600);
  };

  const toggleMusic = async () => {
    if (playing) stopBirthdayTune();
    else startBirthdayTune();
  };

  const openGift = () => {
    if (giftOpen) return;
    startBirthdayTune();
    setGiftOpen(true);
    setBlowing(false);
    setBlown(false);
    setShowBirthdayText(false);
    setTimeout(() => setIntro(1), 850);
  };

  const burst = (kind = "💗") => {
    const id = Date.now() + Math.random();
    setBursts((items) => [...items, { id, kind }]);
    setTimeout(
      () => setBursts((items) => items.filter((item) => item.id !== id)),
      1200,
    );
  };

  const openFinalGift = () => {
    if (finalGiftOpen) return;
    setFinalGiftOpen(true);
    burst("🎉");
    setTimeout(
      () =>
        document
          .querySelector(".surprise-letter-wrap")
          ?.scrollIntoView({ behavior: "smooth", block: "center" }),
      650,
    );
  };

  const sendCheer = () => {
    setCheers((v) => v + 1);
    burst("💖");
  };

  if (intro === 0) {
    return (
      <div
        className={`surprise-intro ${giftOpen ? "gift-opening" : ""}`}
        onClick={() => !giftOpen && burst("💕")}
      >
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="intro-grid" />
        <div className="intro-petals" aria-hidden="true">
          {[...flowers, ...hearts].map((item, i) => (
            <span key={i} style={{ "--i": i }}>
              {item}
            </span>
          ))}
        </div>
        <div className="intro-stars" aria-hidden="true">
          {stars.map((item, i) => (
            <span key={i} style={{ "--i": i }}>
              {item}
            </span>
          ))}
        </div>
        <div className="intro-content">
          <div className="love-badge">♡ Made with love ♡</div>
          <p className="intro-mini">A tiny magical world made just for you</p>
          <h1 className="surprise-title">
            A Little Surprise
            <br />
            <span>For You ✨</span>
          </h1>
          <button
            className="gift-box-button"
            onClick={(e) => {
              e.stopPropagation();
              openGift();
            }}
            aria-label="Open surprise"
          >
            <div className="gift-box">
              <div className="gift-glow-mini" />
              <div className="gift-lid" />
              <div className="gift-body" />
              <div className="gift-ribbon-v" />
              <div className="gift-ribbon-h" />
              <div className="gift-bow">
                <span />
                <span />
                <b />
              </div>
              <div className="gift-sparkle sparkle-one">✨</div>
              <div className="gift-sparkle sparkle-two">💗</div>
            </div>
          </button>
          <p className="gift-hello">
            <strong>Heyyy, Birthday Girl! 🎀</strong>
            <br />
            <small>Tap the little gift to begin</small>
          </p>
          <div className="tap-hint">
            <span>♡</span> open the magic <span>♡</span>
          </div>
        </div>
      </div>
    );
  }

  if (intro === 1) {
    return (
      <div className="birthday-animation-screen">
        <div className="dreamy-orb orb-a" />
        <div className="dreamy-orb orb-b" />
        <div className="birthday-clouds">
          <span>☁️</span>
          <span>☁️</span>
          <span>☁️</span>
        </div>
        <div className="birthday-hearts">
          {hearts.map((heart, i) => (
            <span key={i} style={{ "--i": i }}>
              {heart}
            </span>
          ))}
        </div>
        <div className="birthday-flowers">
          {flowers.map((flower, i) => (
            <span key={i} style={{ "--i": i }}>
              {flower}
            </span>
          ))}
        </div>
        <div className="birthday-animation-content">
          <p className="birthday-small-title">
            ✨ A special little moment just for you ✨
          </p>
          <div
            className={`birthday-stage ${blowing ? "teddy-moving" : ""} ${blown ? "teddy-blowing" : ""}`}
          >
            {blown && (
              <div className="blow-air">
                <span>💨</span>
                <span>〰️</span>
                <span>〰️</span>
              </div>
            )}
            <div className="birthday-teddy">
              <div className="birthday-ear ear-left" />
              <div className="birthday-ear ear-right" />
              <div className="birthday-teddy-head">
                <div className="birthday-eye eye-left" />
                <div className="birthday-eye eye-right" />
                <div className="birthday-blush blush-left" />
                <div className="birthday-blush blush-right" />
                <div className="birthday-muzzle">
                  <div className="birthday-nose" />
                  <div className="birthday-mouth" />
                </div>
              </div>
              <div className="birthday-teddy-body">
                <div className="birthday-belly">♡</div>
              </div>
              <div className="cake-holding-arm">
                <div className="cake-paw" />
              </div>
              <div className="birthday-teddy-arm" />
              <div className="birthday-foot foot-left" />
              <div className="birthday-foot foot-right" />
              <div className="cake">
                <div className="cake-plate" />
                <div className="cake-bottom">
                  <div className="cake-stripe" />
                </div>
                <div className="cake-top">
                  <div className="cream">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="candle">
                  <div className="candle-stripe" />
                  <div className={`flame ${blown ? "flame-off" : ""}`}>
                    <div className="flame-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`birthday-title ${showBirthdayText ? "birthday-title-visible" : ""}`}
          >
            <div className="title-sparkles">✨ 💕 🌸 💕 ✨</div>
            <h1>
              Happy Birthday
              <br />
              <span className="birthday-name">{CONFIG.name} 🧸</span>
              <span
                className="title-gift"
                aria-label="A gift box opening to reveal a soft toy"
              >
                <span className="title-gift-body" />
                <span className="title-gift-lid" />
                <span className="title-gift-bow">🎀</span>
                <span className="title-gift-toy">🧸</span>
              </span>
            </h1>
            <p>
              May your day be as beautiful,
              <br />
              happy and special as you are. ❤️
            </p>
            <div className="auto-entry-message">
              ✨ Taking you into your little birthday world...
            </div>
          </div>
          {showBirthdayText && (
            <div className="confetti">
              {[...hearts, ...flowers, "🎉", "🎊", "✨"].map((item, i) => (
                <span key={i} style={{ "--i": i }}>
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <main className="bday-root">
      <div className="page-noise" />
      <div className="ambient" aria-hidden="true">
        {[...flowers, ...hearts, ...stars].map((item, i) => (
          <span key={i} style={{ "--i": i }}>
            {item}
          </span>
        ))}
      </div>
      {celebrationActive && (
        <div className="celebration-overlay" aria-hidden="true">
          <div className="celebration-fireworks">
            {[...Array(16)].map((_, i) => (
              <span key={i} style={{ "--i": i }} />
            ))}
          </div>
          <div className="celebration-flowers">
            {["🌸", "🌷", "🌼", "💐", "🌺", "🌸", "🌷", "🌼"].map(
              (flower, i) => (
                <span key={i} style={{ "--i": i }}>
                  {flower}
                </span>
              ),
            )}
          </div>
          <div className="celebration-princess">👸</div>
          <div className="celebration-message">
            <span>✨</span>
            <strong>Let the celebration begin!</strong>
            <small>For the birthday princess</small>
            <span>✨</span>
          </div>
        </div>
      )}
      <div className="floating-teddy-world" aria-hidden="true">
        <div className="teddy-heart-ring">♡ 💗 ♡ 💕 ♡ 💖</div>
        <div className="floating-teddy">
          <div className="ft-ear ft-ear-left" />
          <div className="ft-ear ft-ear-right" />
          <div className="ft-head">
            <div className="ft-eye ft-eye-left" />
            <div className="ft-eye ft-eye-right" />
            <div className="ft-blush ft-blush-left" />
            <div className="ft-blush ft-blush-right" />
            <div className="ft-muzzle">
              <span />
              <b />
            </div>
          </div>
          <div className="ft-body">
            <div className="ft-belly">♡</div>
          </div>
          <div className="ft-arm ft-arm-left" />
          <div className="ft-arm ft-arm-right">
            <span>♡</span>
          </div>
          <div className="ft-foot ft-foot-left" />
          <div className="ft-foot ft-foot-right" />
        </div>
      </div>

      <nav className="navbar">
        <button className="nav-brand" onClick={() => scrollTo("home")}>
          <span>🌸</span> Drishti Birthday <span>💕</span>
        </button>
        <div className="nav-links">
          {navItems.map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id[0].toUpperCase() + id.slice(1)} ♡
            </button>
          ))}
        </div>
      )}

      <section
        id="home"
        ref={(el) => {
          refs.current.home = el;
        }}
        className="hero"
      >
        <div className="hero-bloom bloom-one">🌸</div>
        <div className="hero-bloom bloom-two">🌷</div>
        <div className="hero-bloom bloom-three">🌺</div>
        <div className="hero-card">
          <div className="hero-crown">♡ ✦ ♡ ✦ ♡</div>
          <p className="eyebrow">✨ HAPPY BIRTHDAY ✨</p>
          <h1>{CONFIG.name} 🧸</h1>
          <div className="hero-underline">🌷 💗 🌷</div>
          <p className="hero-to">To someone genuinely wonderful</p>
          <p className="hero-line">{CONFIG.heroLine}</p>
          <p className="celebration-click-hint">
            ✨ Tap the button to unlock a magical birthday surprise ✨
          </p>
          <button className="primary-button" onClick={startCelebration}>
            <Sparkles size={17} /> Start the celebration <span>♡</span>
          </button>
          <div className="hero-scroll-text">scroll down for more magic</div>
          <ChevronDown className="scroll-arrow" size={25} />
        </div>
      </section>

      <section className="countdown-wrap">
        <div className="glass-card">
          <div className="card-corner">🌸</div>
          <p className="section-kicker">🎀 THE CELEBRATION BEGINS IN 🎀</p>
          {countdown.arrived ? (
            <div className="birthday-today">
              <span>🎉</span>
              <h2>Today is your special day!</h2>
              <span>💗</span>
            </div>
          ) : (
            <div className="countdown">
              {[
                [countdown.d, "days"],
                [countdown.h, "hours"],
                [countdown.m, "minutes"],
                [countdown.s, "seconds"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{String(value).padStart(2, "0")}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        id="message"
        ref={(el) => {
          refs.current.message = el;
        }}
        className="message-section"
      >
        <div className="section-flower left">🌸</div>
        <div className="section-flower right">🌷</div>
        <article className="letter">
          <div className="letter-decoration">🌸 ── ♡ ── 🌸</div>
          <p className="section-kicker">💌 A LITTLE MESSAGE FOR YOU</p>
          <h2>For the birthday girl</h2>
          {CONFIG.message.map((_, i) => (
            <p key={i}>
              {typed[i] || ""}
              <span className="typing-cursor">
                {typed[i] && i === typed.findLastIndex(Boolean) ? "|" : ""}
              </span>
            </p>
          ))}
          <div className="letter-end">🌷 ✦ 💗 ✦ 🌷</div>
        </article>
      </section>

      <section
        id="memories"
        ref={(el) => {
          refs.current.memories = el;
        }}
        className="content-section"
      >
        <header>
          <p className="section-kicker">📸 SNAPSHOTS OF US</p>
          <h2>Beautiful memories</h2>
          <p className="section-subtitle">
            Little moments that became big memories. 💕
          </p>
        </header>
        <div className="memory-grid">
          {CONFIG.memories.map((memory, i) => (
            <article className={`memory-card card-${i}`} key={memory.title}>
              <div className="memory-pin">♥</div>
              <div className="memory-image-wrap">
                {memory.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={memory.poster}
                    aria-label={memory.alt}
                  >
                    <source src={memory.video} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                ) : (
                  <img src={memory.img} alt={memory.alt} loading="lazy" />
                )}
              </div>
              <div className="memory-card-content">
                <h3>{memory.title}</h3>
                <p>{memory.caption}</p>
              </div>
              <div className="memory-bottom">🌸 ✦ 🌸</div>
            </article>
          ))}
        </div>
        <div className="timeline">
          <h3>🌷 Our best moments 🌷</h3>
          {[
            "The first memory",
            "The one I'll always remember",
            "The time we couldn't stop laughing",
            "A memory worth keeping",
          ].map((title, i) => (
            <article key={title}>
              <b>{["✨", "🌸", "😂", "🎀"][i]}</b>
              <div>
                <h4>{title}</h4>
                <p>
                  {
                    [
                      "Our very first fight — followed by a dramatic block and unblock.",
                      "The first time I saw you, and knew we would cause good chaos.",
                      "Third Wave coffee hit different. We laughed at everything.",
                      "Every moment I've spent with you has been special to me, and I’ll always want to keep all these beautiful memories close to my heart. ❤️",
                    ][i]
                  }
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="wishes"
        ref={(el) => {
          refs.current.wishes = el;
        }}
        className="content-section wishes"
      >
        <header>
          <p className="section-kicker">💗 THE IMPORTANT STUFF</p>
          <h2>Birthday wishes</h2>
          <p className="section-subtitle">
            Four little wishes for your beautiful year ahead. ✨
          </p>
        </header>
        <div className="wish-grid">
          {CONFIG.wishes.map(([title, text, icon]) => (
            <article key={title}>
              <div className="wish-icon">{icon}</div>
              <div className="wish-heart">♡</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="wish-flower">🌸</span>
            </article>
          ))}
        </div>
      </section>

      <section
        id="surprise"
        ref={(el) => {
          refs.current.surprise = el;
        }}
        className={`final-surprise ${finalGiftOpen ? "surprise-opened" : ""}`}
      >
        <div className="surprise-orb orb-one" />
        <div className="surprise-orb orb-two" />
        <div className="surprise-sparkles">
          {[...stars, ...hearts].map((item, i) => (
            <span key={i} style={{ "--i": i }}>
              {item}
            </span>
          ))}
        </div>
        <header className="surprise-header">
          <p className="section-kicker">🎀 ONE LAST LITTLE THING 🎀</p>
          <h2>
            I saved something <span>special for you ✨</span>
          </h2>
          <p className="surprise-subtitle">
            Because one birthday message could never be enough for someone this
            special.
          </p>
        </header>
        <div className="final-gift-area">
          <div className="gift-glow" />
          <div className="gift-orbit">
            <span>♡</span>
            <span>✨</span>
            <span>💕</span>
            <span>🌸</span>
          </div>
          <button
            className={`final-gift-button ${finalGiftOpen ? "open" : ""}`}
            onClick={openFinalGift}
            aria-label="Open final birthday surprise"
          >
            <div className="final-gift-box">
              <div className="final-ribbon vertical" />
              <div className="final-ribbon horizontal" />
              <div className="final-gift-lid" />
              <div className="final-gift-bow">
                <span />
                <span />
                <b />
              </div>
              <div className="final-gift-shine">✨</div>
            </div>
            {!finalGiftOpen && <Gift size={38} className="final-gift-icon" />}
          </button>
          {!finalGiftOpen && (
            <p className="open-gift-hint">
              <span>♡</span> Tap the gift <span>♡</span>
            </p>
          )}
        </div>
        {finalGiftOpen && (
          <div className="surprise-confetti">
            {[...hearts, ...flowers, "🎉", "🎊", "✨", "⭐"].map((item, i) => (
              <span key={i} style={{ "--i": i }}>
                {item}
              </span>
            ))}
          </div>
        )}
        {finalGiftOpen && (
          <div className="surprise-letter-wrap">
            <article className="surprise-letter">
              <div className="letter-top-decoration">🌸,♡,🌸</div>
              <p className="letter-small">A little letter for you 💌</p>
              <h3>Dear {CONFIG.name},</h3>
              <div className="letter-line" />
              <p>
                If I could wrap up every good memory, every laugh, every silly
                conversation, and every little moment we've shared, I would put
                all of them in this box.
              </p>
              <p>
                These past two months have been full of unexpected chaos, random
                plans, fights, laughs, food, coffee and memories that somehow
                became really special.
              </p>
              <p>
                And honestly, I'm really glad that all those little moments
                happened with you.
              </p>
              <p>
                So on your birthday, I hope you know that you deserve every
                beautiful thing life has waiting for you.
              </p>
              <p className="final-message">
                May you always have a reason to smile. ❤️
              </p>
              <div className="letter-signature">
                With lots of good wishes,
                <strong>Your favourite chaos partner ✨</strong>
              </div>
              <div className="letter-bottom-decoration">🌸 💗 🌸</div>
            </article>
            <div className="tiny-surprise">
              <span>💌</span>
              <div>
                <strong>P.S. One tiny promise...</strong>
                <p>
                  No matter how much life changes, I hope our conversations
                  never lose their warmth, our laughter never feels distant, and
                  you always know that I am cheering for you. ✨
                </p>
              </div>
            </div>
            <button className="surprise-cheer-button" onClick={sendCheer}>
              <PartyPopper size={20} /> Send birthday cheer <span>🎉</span>
            </button>
            {cheers > 0 && (
              <p className="cheer-result">
                {cheers === 1
                  ? "A little birthday magic sent your way! 💕"
                  : `${cheers} birthday cheers sent! 🎉💗`}
              </p>
            )}
          </div>
        )}
      </section>

      <section className="cheer">
        <div className="cheer-decor">🌸 💗 🌷 💕 🌸</div>
        <h2>Send some birthday cheer</h2>
        <p>Because one little celebration is never enough. 🎀</p>
        <button onClick={sendCheer} aria-label="Send birthday cheer">
          <PartyPopper size={38} />
        </button>
        <p className="cheer-count">
          Birthday cheer: <strong>{cheers}</strong>
        </p>
      </section>
      <button
        className="music"
        onClick={toggleMusic}
        aria-label="Toggle birthday vibes"
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}
        <span>{playing ? "Vibes On" : "Birthday Vibes"}</span>
        <i>♡</i>
      </button>
      <footer>
        <div className="footer-flowers">🌸,🌷,🌸</div>
        <Sparkles size={30} />
        <h2>
          Happy Birthday,
          <br />
          Once Again! 🧸 💕
        </h2>
        <p>May your smile stay just as bright as the memories you make.</p>
        <strong>
          Keep smiling. Keep shining.
          <br />
          Keep being you. ✨
        </strong>
      </footer>
      {bursts.length > 0 && (
        <div className="burst-layer" aria-hidden="true">
          {bursts.map((item) => (
            <span key={item.id}>{item.kind}</span>
          ))}
        </div>
      )}
    </main>
  );
}
