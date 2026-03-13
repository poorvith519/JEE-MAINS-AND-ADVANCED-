/**
 * @file Percentile Journey chart (#6) — Animated bars with SVG connectors.
 * 4 bars grow from scaleY(0) with spring easing. Arrow connectors draw
 * themselves via stroke-dashoffset. Target bar pulses with gold glow.
 */
import { useInView } from "@/hooks";
import { JOURNEY } from "@/data";

export function PercentileJourney() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative flex items-end justify-center gap-6 md:gap-12 h-72 md:h-80 mt-8 mb-4">
      {/* SVG Connectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 320">
        {JOURNEY.slice(0, -1).map((_, i) => {
          const x1 = 100 + i * 200 + 30;
          const x2 = 100 + (i + 1) * 200 - 10;
          const y1 = 300 - (JOURNEY[i].percentile / 100) * 260;
          const y2 = 300 - (JOURNEY[i + 1].percentile / 100) * 260;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={`journey-connector ${isVisible ? "visible" : ""}`}
              stroke="#f0c04044"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          );
        })}
      </svg>

      {JOURNEY.map((point, i) => {
        const height = `${Math.max(15, (point.percentile / 100) * 85)}%`;
        return (
          <div
            key={i}
            className="flex flex-col items-center flex-1 max-w-[120px] relative z-10"
            style={{ height: "100%" }}
          >
            <div className="flex-1 flex items-end w-full">
              <div
                className={`journey-bar w-full rounded-t-lg relative ${isVisible ? "visible" : ""} ${point.isTarget ? "target-pulse" : ""}`}
                style={{
                  height,
                  background: `linear-gradient(to top, ${point.color}22, ${point.color}88)`,
                  border: `1px solid ${point.color}44`,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-sm font-bold whitespace-nowrap"
                  style={{ color: point.color }}
                >
                  {point.score}
                </div>
              </div>
            </div>
            <div className="mt-3 font-mono text-[10px] text-text-muted text-center">{point.label}</div>
          </div>
        );
      })}
    </div>
  );
}
