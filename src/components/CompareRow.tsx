/**
 * @file Comparison table row component (#8) — Data Table Row Scan Effect.
 * Rows slide in from translateX(20px) with staggered 50ms delays.
 * Gold scanline sweeps on hover. Change values flash on first view.
 */
import { useRef, useState, useEffect } from "react";
import type { CompareRow as CompareRowType } from "@/types";

interface CompareRowProps {
  row: CompareRowType;
  index: number;
}

export function CompareRow({ row, index }: CompareRowProps) {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const [isVis, setIsVis] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVis(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <tr
      ref={rowRef}
      className={`data-table-row border-b border-border/30 hover:bg-bg-card-hover ${isVis ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <td className="px-4 py-3 font-syne text-sm text-text-primary font-medium">{row.metric}</td>
      <td className="px-4 py-3 font-mono text-sm text-text-secondary">{row.mt1}</td>
      <td className="px-4 py-3 font-mono text-sm text-text-primary">{row.mt2}</td>
      <td
        className={`px-4 py-3 font-mono text-sm font-bold ${isVis ? "change-flash" : ""}`}
        style={{ color: row.positive ? "#4ecb7f" : "#e05a5a" }}
      >
        {row.change}
      </td>
    </tr>
  );
}
