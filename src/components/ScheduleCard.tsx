/**
 * @file Schedule card component (#11) — Wave entrance animation.
 * Done cards glow green, active card pulses gold, gap cards shake on entry.
 * Diagonal wave pattern delay: (row + col) * 40ms.
 */
import { useInView } from "@/hooks";
import type { MockScheduleItem } from "@/types";

interface ScheduleCardProps {
  item: MockScheduleItem;
  delay: number;
}

const STATUS_STYLES: Record<string, string> = {
  done: "border-accent-green/30",
  active: "border-gold/40",
  upcoming: "border-border",
  gap: "border-accent-orange/20",
};

export function ScheduleCard({ item, delay }: ScheduleCardProps) {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`schedule-card ${item.status} glow-card p-3 rounded-xl ${STATUS_STYLES[item.status]} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className={`font-mono text-xs font-bold ${
            item.status === "done"
              ? "text-accent-green"
              : item.status === "active"
                ? "text-gold"
                : item.status === "gap"
                  ? "text-accent-orange"
                  : "text-text-muted"
          }`}
        >
          {item.label}
        </span>
        {item.status === "done" && <span className="text-accent-green text-[10px]">✓</span>}
        {item.status === "active" && <span className="text-gold text-[10px] animate-pulse">●</span>}
      </div>
      <div className="font-mono text-[10px] text-text-muted">{item.date}</div>
      <div className="font-dm text-[9px] text-text-muted mt-0.5">{item.time}</div>
    </div>
  );
}
