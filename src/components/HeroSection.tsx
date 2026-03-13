/**
 * @file Hero section (#3) — Full cinematic sequence.
 * Blackout fade → typewriter name → word-by-word headline → gradient zoom → noise.
 * Contains orbital rings, mission badge, score display, and countdown timer.
 */
import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks";
import { STUDENT } from "@/data";
import { CountdownWidget } from "./CountdownWidget";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const nameTw = useTypewriter(STUDENT.name, loaded, 40, 400);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 100);
    const t2 = setTimeout(() => setShowWords(true), 800);
    const t3 = setTimeout(() => setShowStats(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const headline = ["JEE", "Main", "April", "2026"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden"
    >
      {/* Blackout overlay */}
      <div className="hero-blackout" />

      {/* Animated background gradient */}
      <div className="hero-bg-gradient" />

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-gold/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-gold/[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-gold/[0.07] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Mission badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/[0.05] text-gold font-mono text-[10px] tracking-wider mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          MISSION CONTROL — LIVE ANALYSIS
        </div>

        {/* Student name — typewriter */}
        <div className="font-mono text-xs md:text-sm text-text-secondary mb-4 h-6">
          {nameTw.displayed}
          {!nameTw.done && <span className="typewriter-cursor" />}
        </div>

        {/* Headline — word by word reveal */}
        <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          {headline.map((word, i) => (
            <span key={i}>
              <span
                className={`hero-word ${showWords ? "visible" : ""}`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  color: word === "2026" ? "#f0c040" : "#e8e8ed",
                }}
              >
                {word}
              </span>{" "}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="font-dm text-sm md:text-base text-text-secondary mb-2"
          style={{
            opacity: showWords ? 1 : 0,
            transform: showWords ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Mock Test Performance Analysis & Battle Strategy
        </p>
        <p
          className="font-mono text-xs text-text-muted mb-10"
          style={{
            opacity: showWords ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          {STUDENT.category} Category • {STUDENT.state} • {STUDENT.status}
        </p>

        {/* Score display */}
        <div className={`hero-stats-row ${showStats ? "visible" : ""} mb-10`}>
          <div className="inline-flex items-baseline gap-1 mb-4">
            <span className="font-mono text-6xl md:text-8xl font-bold text-gold">84</span>
            <span className="font-mono text-2xl md:text-3xl text-text-muted">/300</span>
          </div>
          <div className="flex items-center justify-center gap-6 font-mono text-xs text-text-secondary">
            <span>MT2 Score</span>
            <span className="text-accent-green">+24 from MT1</span>
            <span>Predicted: 90.83%ile</span>
          </div>
        </div>

        {/* Countdown */}
        <div
          style={{
            opacity: showStats ? 1 : 0,
            transform: showStats ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          <div className="font-mono text-[10px] text-text-muted tracking-widest mb-3">
            TIME REMAINING
          </div>
          <CountdownWidget />
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16"
          style={{
            opacity: showStats ? 0.5 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <div className="w-5 h-8 rounded-full border border-text-muted/30 mx-auto relative">
            <div className="w-1 h-2 rounded-full bg-gold/50 absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
          <div className="font-mono text-[9px] text-text-muted mt-2">SCROLL TO EXPLORE</div>
        </div>
      </div>
    </section>
  );
}
