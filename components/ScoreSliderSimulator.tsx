/**
 * @file Interactive Score Simulator — drag sliders per subject to project percentile.
 * Shows projected total, estimated percentile, and gap to 99th in real-time.
 */
import { useState } from "react";
import { useInView } from "@/hooks";
import { SUBJECTS } from "@/data";

export function ScoreSliderSimulator() {
  const { ref, isVisible } = useInView({ threshold: 0.15 });
  const [scores, setScores] = useState({ Physics: 34, Chemistry: 33, Mathematics: 17 });
  const total = scores.Physics + scores.Chemistry + scores.Mathematics;

  const getPercentile = (score: number): string => {
    if (score >= 250) return "99.8+";
    if (score >= 198) return "99.0+";
    if (score >= 165) return "97.5+";
    if (score >= 130) return "93.0+";
    if (score >= 100) return "85.0+";
    if (score >= 84) return "75.0+";
    return `${Math.max(40, Math.min(74, 40 + (score / 84) * 34)).toFixed(1)}`;
  };

  return (
    <div
      ref={ref}
      className={`stagger-child glow-card p-6 md:p-8 rounded-2xl mt-8 ${isVisible ? "visible" : ""}`}
    >
      <h3 className="font-syne font-bold text-lg text-text-primary mb-1">
        Interactive Score Simulator
      </h3>
      <p className="font-dm text-xs text-text-secondary mb-6">
        Drag sliders to project your score and estimated percentile
      </p>

      {Object.entries(scores).map(([subj, val]) => {
        const subjData = SUBJECTS.find((s) => s.subject === subj);
        const color = subjData?.color ?? "#f0c040";
        return (
          <div key={subj} className="mb-5">
            <div className="flex justify-between mb-1.5">
              <span className="font-syne text-sm text-text-primary">{subj}</span>
              <span className="font-mono text-sm font-bold" style={{ color }}>
                {val}/100
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={val}
              onChange={(e) => setScores({ ...scores, [subj]: parseInt(e.target.value) })}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(90deg, ${color} ${val}%, #2a2a3a ${val}%)`,
                accentColor: color,
              }}
            />
            <div className="flex justify-between mt-0.5">
              <span className="font-mono text-[9px] text-text-muted">Current: {subjData?.mt2}</span>
              <span className="font-mono text-[9px]" style={{ color: `${color}99` }}>
                99th: {subjData?.target99}
              </span>
            </div>
          </div>
        );
      })}

      <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="font-mono text-xs text-text-muted">Projected Total</div>
          <div className="font-mono text-4xl font-bold text-gold">
            {total}
            <span className="text-lg text-text-muted">/300</span>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="font-mono text-xs text-text-muted">Estimated Percentile</div>
          <div
            className="font-mono text-4xl font-bold"
            style={{
              color: total >= 198 ? "#4ecb7f" : total >= 130 ? "#f0c040" : "#e05a5a",
            }}
          >
            {getPercentile(total)}
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="font-mono text-xs text-text-muted">Gap to 99th</div>
          <div
            className="font-mono text-2xl font-bold"
            style={{
              color: total >= 198 ? "#4ecb7f" : "#e05a5a",
            }}
          >
            {total >= 198 ? "✓ Target Met" : `${198 - total} marks`}
          </div>
        </div>
      </div>
    </div>
  );
}
