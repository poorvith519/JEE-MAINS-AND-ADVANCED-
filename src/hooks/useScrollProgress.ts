/**
 * @file Scroll progress hook — tracks page scroll position as 0-to-1 ratio.
 * Also tracks whether user is actively scrolling for opacity state.
 */
import { useState, useEffect, useRef } from "react";

export function useScrollProgress(): { progress: number; scrolling: boolean } {
  const [progress, setProgress] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
      setScrolling(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setScrolling(false), 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, scrolling };
}
