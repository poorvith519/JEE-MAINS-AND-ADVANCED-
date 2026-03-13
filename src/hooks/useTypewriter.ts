/**
 * @file Typewriter effect hook — reveals text character by character.
 * Used in the Hero section (student name) and Rules section (R1/R2/R3).
 */
import { useState, useEffect } from "react";

export function useTypewriter(
  text: string,
  trigger: boolean,
  speed = 40,
  startDelay = 0
): { displayed: string; done: boolean } {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const delayTimeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delayTimeout);
  }, [trigger, startDelay]);

  useEffect(() => {
    if (!started || index >= text.length) return;
    const timeout = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(timeout);
  }, [started, index, text.length, speed]);

  return { displayed: text.slice(0, index), done: index >= text.length };
}
