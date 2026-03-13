/**
 * @file Verdict card component — color-coded risk assessment cards.
 * Variants: strength (green), warning (gold), danger (red).
 * Staggered entrance animation with accent line on left edge.
 */
import { useInView } from "@/hooks";
import type { Verdict } from "@/types";

const VERDICT_COLORS = {
  strength: { border: "#4ecb7f33", bg: "#4ecb7f08", text: "#4ecb7f", label: "STRENGTH" },
  warning: { border: "#f0c04033", bg: "#f0c04008", text: "#f0c040", label: "WARNING" },
  danger: { border: "#e05a5a33", bg: "#e05a5a08", text: "#e05a5a", label: "DANGER" },
};

interface VerdictCardProps {
  verdict: Verdict;
  delay: number;
}

export function VerdictCard({ verdict, delay }: VerdictCardProps) {
  const { ref, isVisible } = useInView({ threshold: 0.15 });
  const c = VERDICT_COLORS[verdict.type];

  return (
    <div
      ref={ref}
      className={`stagger-child glow-card p-5 relative overflow-hidden ${isVisible ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: isVisible ? c.border : undefined,
        background: isVisible ? `linear-gradient(135deg, #15151e, ${c.bg})` : undefined,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded"
          style={{ background: `${c.text}15`, color: c.text }}
        >
          {c.label}
        </span>
        <span className="font-mono text-[10px] text-text-muted">{verdict.metric}</span>
      </div>
      <h3 className="font-syne font-semibold text-sm text-text-primary mb-2">{verdict.title}</h3>
      <p className="font-dm text-xs text-text-secondary leading-relaxed">{verdict.description}</p>
      {/* Accent line */}
      <div
        className="absolute left-0 top-0 w-[3px] h-full rounded-r"
        style={{ background: c.text }}
      />
    </div>
  );
}
