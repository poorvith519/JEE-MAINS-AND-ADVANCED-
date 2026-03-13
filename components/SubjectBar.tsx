/**
 * @file Subject progress bar component (#7) — Liquid Fill Effect.
 * Bar fills grow with spring overshoot, shimmer sweep after fill.
 * Includes 99th percentile target marker and gap indicator.
 */
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import { useInView, useCountUp } from "@/hooks";

interface SubjectBarProps {
  subject: string;
  current: number;
  target99: number;
  max: number;
  color: string;
  delay?: number;
  accuracy: number;
}

export function SubjectBar({
  subject,
  current,
  target99,
  max,
  color,
  delay = 0,
  accuracy,
}: SubjectBarProps) {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const [shimmer, setShimmer] = useState(false);
  const count = useCountUp(current, isVisible, 1200);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setShimmer(true), 1200 + delay);
      return () => clearTimeout(t);
    }
  }, [isVisible, delay]);

  const fillPercent = (current / max) * 100;
  const targetPercent = (target99 / max) * 100;

  return (
    <div ref={ref} className="mb-8" style={{ transitionDelay: `${delay}ms` } as CSSProperties}>
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="font-syne font-semibold text-base text-text-primary">{subject}</span>
          <span className="font-mono text-xs text-text-muted ml-3">Accuracy: {accuracy}%</span>
        </div>
        <div className="font-mono text-2xl font-bold" style={{ color }}>
          {count}
          <span className="text-sm text-text-muted">/{max}</span>
        </div>
      </div>
      <div className="score-bar-container">
        <div
          className={`score-bar-fill ${shimmer ? "shimmer" : ""}`}
          style={{
            width: isVisible ? `${fillPercent}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            transitionDelay: `${delay}ms`,
          }}
        />
        {/* 99th percentile target marker */}
        <div
          className="absolute top-0 h-full w-px"
          style={{
            left: `${targetPercent}%`,
            background: `${color}44`,
            borderRight: `1px dashed ${color}66`,
          }}
        >
          <div
            className="absolute -top-5 -translate-x-1/2 font-mono text-[9px] whitespace-nowrap"
            style={{ color: `${color}99` }}
          >
            99th: {target99}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[10px] text-text-muted">
          Gap to 99th: {target99 - current} marks
        </span>
        <span className="font-mono text-[10px]" style={{ color: `${color}99` }}>
          Target: {target99}
        </span>
      </div>
    </div>
  );
}
