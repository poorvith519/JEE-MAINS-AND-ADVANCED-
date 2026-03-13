/**
 * @file Action Plan Phase accordion component (#12).
 * Clickable header expands/collapses body with spring physics.
 * Inner tasks stagger in with 60ms delay. Chevron rotates on toggle.
 */
import { useState, useEffect } from "react";
import { useInView } from "@/hooks";
import type { PlanPhase } from "@/types";

interface PlanPhaseCardProps {
  phase: PlanPhase;
  index: number;
}

export function PlanPhaseCard({ phase, index }: PlanPhaseCardProps) {
  const [open, setOpen] = useState(index === 0);
  const [itemsVisible, setItemsVisible] = useState(false);
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setItemsVisible(true), 200);
      return () => clearTimeout(t);
    } else {
      setItemsVisible(false);
    }
  }, [open]);

  return (
    <div
      ref={ref}
      className={`stagger-child glow-card rounded-2xl overflow-hidden mb-4 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
        role="button"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0"
          style={{ background: `${phase.color}15`, color: phase.color }}
        >
          {phase.number.toString().padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-syne font-bold text-sm md:text-base text-text-primary">
            {phase.title}
          </div>
          <div className="font-mono text-[10px] text-text-muted mt-0.5">
            {phase.dateRange} • {phase.scoreTargets}
          </div>
        </div>
        <svg
          className={`accordion-icon w-5 h-5 text-text-muted shrink-0 ${open ? "open" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={`accordion-body ${open ? "open" : ""}`}>
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50 pt-4">
          <p className="font-dm text-xs text-text-secondary mb-5">{phase.subtitle}</p>
          <div className="space-y-3">
            {phase.tasks.map((task, i) => (
              <div
                key={i}
                className={`plan-item flex gap-3 p-3 rounded-xl bg-bg-primary/50 ${itemsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{
                    background:
                      task.priority === "critical"
                        ? "#e05a5a"
                        : task.priority === "high"
                          ? "#f0c040"
                          : "#5ab4f0",
                  }}
                />
                <div>
                  <div className="font-syne font-semibold text-xs text-text-primary flex items-center gap-2">
                    {task.title}
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-bg-elevated text-text-muted">
                      {task.subject}
                    </span>
                  </div>
                  <div className="font-dm text-[11px] text-text-secondary mt-1 leading-relaxed">
                    {task.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
