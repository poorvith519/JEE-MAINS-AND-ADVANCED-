/**
 * @file Scroll progress indicator (#16).
 * Thin gold line fixed at viewport top, grows from 0% to 100% width as user scrolls.
 * Opacity: 0.7 at rest, 1.0 while actively scrolling.
 */
import { useScrollProgress } from "@/hooks";

export function ScrollProgressBar() {
  const { progress, scrolling } = useScrollProgress();

  return (
    <div
      className={`scroll-progress ${scrolling ? "scrolling" : ""}`}
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
