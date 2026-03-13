/**
 * @file 3D Tilt card component (#9) — Apple-style perspective tilt.
 * Tracks cursor position for rotateX/Y (±8°) with radial glow following mouse.
 * Mathematics card variant has persistent red danger pulse.
 */
import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  isDanger?: boolean;
  color?: string;
}

export function TiltCard({
  children,
  className = "",
  isDanger = false,
  color = "#f0c040",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e: ReactMouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -16;
    const rotateY = (x - 0.5) * 16;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const onMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div className={`tilt-card ${className}`}>
      <div
        ref={cardRef}
        className={`tilt-card-inner glow-card p-5 md:p-6 rounded-2xl ${isDanger ? "danger-pulse" : ""}`}
        style={{ transform }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="tilt-glow rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${color}22, transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}
