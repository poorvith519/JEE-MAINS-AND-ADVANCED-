/**
 * @file Custom gold cursor with lerp smoothing (#18).
 * 10px gold dot follows mouse with 60ms lag. Expands to 40px on interactive elements.
 * Compresses on click. Hidden on mobile (< 768px).
 */
import { useRef, useState, useEffect } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const expanded = useRef(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = el?.closest(
        "a, button, .glow-card, .stat-card, .tilt-card, .college-card, .schedule-card, .nav-link, [role='button']"
      );
      if (isInteractive && !expanded.current) {
        expanded.current = true;
        setIsExpanded(true);
      } else if (!isInteractive && expanded.current) {
        expanded.current = false;
        setIsExpanded(false);
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);
      if (cursorRef.current) {
        const size = expanded.current ? 20 : 5;
        cursorRef.current.style.transform = `translate3d(${pos.current.x - size}px, ${pos.current.y - size}px, 0) ${isClicking ? "scale(0.6)" : "scale(1)"}`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [isClicking]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isExpanded ? "expanded" : ""} ${isClicking ? "clicking" : ""}`}
    />
  );
}
