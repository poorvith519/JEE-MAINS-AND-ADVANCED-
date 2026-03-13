/**
 * @file College target card component (#14) — Flip Entrance.
 * Cards enter with rotateY(8°)→0 spring animation, staggered 80ms apart.
 * Hover triggers border glow and radial bloom from top-left corner.
 */
import { useInView } from "@/hooks";
import type { College } from "@/types";

const STATUS_COLORS = {
  reach: { bg: "#e05a5a15", text: "#e05a5a", label: "REACH" },
  target: { bg: "#f0c04015", text: "#f0c040", label: "TARGET" },
  safe: { bg: "#4ecb7f15", text: "#4ecb7f", label: "SAFE" },
  backup: { bg: "#5ab4f015", text: "#5ab4f0", label: "BACKUP" },
};

interface CollegeCardProps {
  college: College;
  delay: number;
}

export function CollegeCard({ college, delay }: CollegeCardProps) {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const s = STATUS_COLORS[college.status];

  return (
    <div
      ref={ref}
      className={`college-card glow-card p-5 rounded-2xl relative overflow-hidden ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="radial-bloom"
        style={{ background: `radial-gradient(circle, ${college.color}, transparent)` }}
      />
      <div className="flex items-start justify-between mb-3">
        <div>
          <div
            className="font-mono text-[10px] px-2 py-0.5 rounded inline-block mb-2"
            style={{ background: `${college.color}15`, color: college.color }}
          >
            {college.tier}
          </div>
          <h3 className="font-syne font-bold text-base text-text-primary">{college.name}</h3>
        </div>
        <span
          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded"
          style={{ background: s.bg, color: s.text }}
        >
          {s.label}
        </span>
      </div>
      <div className="font-dm text-xs text-text-secondary mb-1">{college.branch}</div>
      <div className="flex gap-4 mt-3 mb-3">
        <div>
          <div className="font-mono text-[9px] text-text-muted uppercase">Percentile</div>
          <div className="font-mono text-sm font-bold" style={{ color: college.color }}>
            {college.percentile}
          </div>
        </div>
        <div>
          <div className="font-mono text-[9px] text-text-muted uppercase">Score</div>
          <div className="font-mono text-sm font-bold text-text-primary">{college.score}</div>
        </div>
      </div>
      <p className="font-dm text-[11px] text-text-muted leading-relaxed">{college.notes}</p>
    </div>
  );
}
