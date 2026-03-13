/**
 * @file Active section tracker — observes which section is currently in viewport.
 * Used to highlight the correct nav item in sidebar and mobile nav.
 */
import { useState, useEffect } from "react";
import { SECTIONS } from "@/data";

export function useActiveSection(): string {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
