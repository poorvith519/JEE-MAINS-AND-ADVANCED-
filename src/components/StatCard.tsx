/**
 * @file Stat card component (#5) — Apple Numbers Reveal.
 * Scales from 0.94→1.0 with spring, count-up number animation,
 * accent bar grows from 0%→100%, hover lift with inner glow.
 */
import type { CSSProperties } from "react";
import { useInView, useCountUp } from "@/hooks";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
  delay?: number;
  decimals?: number;
  noCountUp?: boolean;
}

export function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  color,
  delay = 0,
  decimals = 0,
  noCountUp = false,
}: StatCardProps) {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const count = useCountUp(Math.abs(value), isVisible, 1200, decimals);
  const displayed = noCountUp ? value : value < 0 ? -count : count;

  return (
    <div
      ref={ref}
      className={`stat-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      <div className="font-dm text-xs text-text-muted uppercase tracking-wider mb-3">{label}</div>
      <div className="font-mono text-3xl md:text-4xl font-bold" style={{ color }}>
        {prefix}
        {decimals > 0 ? displayed.toFixed(decimals) : displayed}
        <span className="text-lg text-text-muted ml-1">{suffix}</span>
      </div>
      <div
        className="accent-bar"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
      />
    </div>
  );
}
