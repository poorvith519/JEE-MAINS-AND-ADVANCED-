/**
 * @file Section wrapper component — handles scroll-triggered reveals (#4).
 * Each section starts invisible and reveals with staggered tag → title → description → content.
 */
import type { ReactNode } from "react";
import { useInView } from "@/hooks";

interface SectionProps {
  id: string;
  tag: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, tag, title, description, children, className = "" }: SectionProps) {
  const { ref, isVisible } = useInView({ threshold: 0.08 });
  const v = isVisible ? "visible" : "";

  return (
    <section id={id} ref={ref} className={`relative py-20 md:py-28 px-5 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`section-tag font-mono text-xs text-gold tracking-[0.2em] uppercase mb-3 ${v}`}>
          {tag}
        </div>
        <h2 className={`section-title-reveal font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 ${v}`}>
          {title}
        </h2>
        {description && (
          <p className={`section-desc-reveal font-dm text-text-secondary text-sm md:text-base max-w-2xl mb-12 ${v}`}>
            {description}
          </p>
        )}
        <div className={`section-reveal ${v}`}>{children}</div>
      </div>
    </section>
  );
}
