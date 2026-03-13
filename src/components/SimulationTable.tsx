/**
 * @file Score Simulation table component (#13) — Cell Highlight Sequence.
 * Column-by-column cell highlight on scroll entry. Total row gets gold flash.
 * Gap-to-99th counter animates from 0 to 126.
 */
import { useState, useEffect } from "react";
import { useInView, useCountUp } from "@/hooks";
import { SIMULATION } from "@/data";

const HEADERS = ["Subject", "Current", "Conservative", "Moderate", "Aggressive", "99th Target"];

export function SimulationTable() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const [highlightCol, setHighlightCol] = useState(-1);
  const gapCount = useCountUp(126, isVisible, 1500);

  useEffect(() => {
    if (!isVisible) return;
    const cols = [0, 1, 2, 3, 4];
    let i = 0;
    const interval = setInterval(() => {
      if (i < cols.length) {
        setHighlightCol(cols[i]);
        i++;
      } else {
        clearInterval(interval);
        setHighlightCol(-1);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={ref} className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-bg-card">
            {HEADERS.map((h, i) => (
              <th
                key={h}
                className={`sim-cell px-4 py-3 font-mono text-xs text-text-muted font-medium ${highlightCol === i ? "highlight" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SIMULATION.map((row, ri) => (
            <tr
              key={row.subject}
              className={`border-b border-border/50 ${ri === SIMULATION.length - 1 ? "font-bold" : ""}`}
            >
              <td
                className={`sim-cell px-4 py-3 font-syne text-sm text-text-primary ${highlightCol === 0 ? "highlight" : ""} ${ri === SIMULATION.length - 1 && highlightCol === 0 ? "gold-flash" : ""}`}
              >
                {row.subject}
              </td>
              {[row.current, row.conservative, row.moderate, row.aggressive, row.target99].map(
                (val, ci) => (
                  <td
                    key={ci}
                    className={`sim-cell px-4 py-3 font-mono text-sm ${highlightCol === ci + 1 ? "highlight" : ""} ${ri === SIMULATION.length - 1 && highlightCol === ci + 1 ? "gold-flash" : ""}`}
                    style={{
                      color:
                        ci === 0
                          ? "#e05a5a"
                          : ci === 1
                            ? "#f97316"
                            : ci === 2
                              ? "#f0c040"
                              : ci === 3
                                ? "#4ecb7f"
                                : "#5ab4f0",
                    }}
                  >
                    {val}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-4 py-3 bg-bg-card border-t border-border flex justify-between items-center">
        <span className="font-mono text-xs text-text-muted">Gap to 99th Percentile</span>
        <span className="font-mono text-lg font-bold text-gold">+{gapCount} marks needed</span>
      </div>
    </div>
  );
}
