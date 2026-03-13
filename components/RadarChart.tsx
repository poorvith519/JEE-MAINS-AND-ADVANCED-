/**
 * @file Radar/Spider chart — Physics vs Chemistry vs Mathematics.
 * Shows current scores vs 99th percentile target as overlapping polygons.
 * SVG-based with draw animation on scroll entry.
 */
import { useInView } from "@/hooks";

const RADAR_SUBJECTS = [
  { name: "Physics", score: 34, max: 100, color: "#5ab4f0" },
  { name: "Chemistry", score: 33, max: 100, color: "#4ecb7f" },
  { name: "Mathematics", score: 17, max: 100, color: "#a78bfa" },
];

export function RadarChart() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const r = 80;

  const getPoint = (index: number, value: number, max: number) => {
    const angle = (Math.PI * 2 * index) / 3 - Math.PI / 2;
    const ratio = value / max;
    return {
      x: cx + r * ratio * Math.cos(angle),
      y: cy + r * ratio * Math.sin(angle),
    };
  };

  const currentPoints = RADAR_SUBJECTS.map((s, i) => getPoint(i, s.score, s.max));
  const targetPoints = RADAR_SUBJECTS.map((s, i) => getPoint(i, 65, s.max));
  const currentPath = currentPoints.map((p) => `${p.x},${p.y}`).join(" ");
  const targetPath = targetPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div ref={ref} className="flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid rings */}
        {[0.25, 0.5, 0.75, 1].map((scale) => (
          <polygon
            key={scale}
            points={[0, 1, 2]
              .map((i) => {
                const p = getPoint(i, scale * 100, 100);
                return `${p.x},${p.y}`;
              })
              .join(" ")}
            fill="none"
            stroke="#2a2a3a"
            strokeWidth="0.5"
          />
        ))}

        {/* Axes */}
        {[0, 1, 2].map((i) => {
          const p = getPoint(i, 100, 100);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#2a2a3a" strokeWidth="0.5" />;
        })}

        {/* Target polygon (99th percentile) */}
        <polygon
          points={targetPath}
          fill="rgba(240, 192, 64, 0.05)"
          stroke="#f0c04044"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* Current polygon */}
        <polygon
          points={currentPath}
          className={`radar-line ${isVisible ? "visible" : ""}`}
          fill="rgba(90, 180, 240, 0.08)"
          stroke="#5ab4f0"
          strokeWidth="1.5"
        />

        {/* Data points */}
        {currentPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill={RADAR_SUBJECTS[i].color}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${0.8 + i * 0.1}s`,
            }}
          />
        ))}

        {/* Labels */}
        {RADAR_SUBJECTS.map((s, i) => {
          const p = getPoint(i, 115, 100);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={s.color}
              fontSize="9"
              fontFamily="JetBrains Mono"
            >
              {s.name.slice(0, 4)} {s.score}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
