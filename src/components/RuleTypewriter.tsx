/**
 * @file Rule typewriter component (#15) — Terminal-style sequential text reveal.
 * Each rule types out character by character. R1→R2→R3 trigger sequentially.
 * Cursor blinks between rules using CSS animation.
 */
import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks";
import type { Rule } from "@/types";

interface RuleTypewriterProps {
  rule: Rule;
  trigger: boolean;
  onDone: () => void;
}

export function RuleTypewriter({ rule, trigger, onDone }: RuleTypewriterProps) {
  const titleTw = useTypewriter(rule.title, trigger, 25, 300);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (titleTw.done) {
      const t = setTimeout(() => {
        setShowDesc(true);
        setTimeout(onDone, 400);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [titleTw.done, onDone]);

  return (
    <div
      className={`mb-8 transition-opacity duration-500 ${trigger ? "opacity-100" : "opacity-0"}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="rule-tag text-xs px-2.5 py-1 rounded bg-gold/10 text-gold">{rule.id}</span>
        {trigger && !titleTw.done && <span className="typewriter-cursor" />}
      </div>
      <div className="font-mono text-sm md:text-base text-text-primary font-semibold mb-2 min-h-[1.5em]">
        {titleTw.displayed}
        {!titleTw.done && trigger && <span className="typewriter-cursor" />}
      </div>
      <p
        className={`rule-desc-fade font-dm text-xs text-text-secondary leading-relaxed max-w-xl ${showDesc ? "visible" : ""}`}
      >
        {rule.description}
      </p>
    </div>
  );
}
