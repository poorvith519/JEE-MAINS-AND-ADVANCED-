/**
 * @file Count-up animation hook using requestAnimationFrame.
 * Animates a number from 0 to target with eased timing.
 * Used by StatCard and SimulationTable components.
 */
import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  trigger: boolean,
  duration = 1200,
  decimals = 0
): number {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Number((eased * target).toFixed(decimals)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [trigger, target, duration, decimals]);

  return current;
}
