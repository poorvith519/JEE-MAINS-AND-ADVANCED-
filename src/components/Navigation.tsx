/**
 * @file Navigation component — Side nav (desktop) + Bottom nav (mobile).
 * Features sliding gold pill indicator (#19) and page transition flash.
 */
import { useState, useCallback } from "react";
import { SECTIONS, STUDENT } from "@/data";
import { useActiveSection } from "@/hooks";

export function Navigation() {
  const active = useActiveSection();
  const activeIndex = SECTIONS.findIndex((s) => s.id === active);
  const [flash, setFlash] = useState(false);

  const handleNav = useCallback((id: string) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="desktop-nav fixed left-0 top-0 h-full w-52 bg-bg-secondary/80 backdrop-blur-xl border-r border-border z-[100] flex flex-col">
        <div className="px-5 py-6 border-b border-border">
          <div className="font-syne font-bold text-sm text-gold tracking-wider">JEE MISSION</div>
          <div className="font-mono text-[10px] text-text-muted mt-0.5">CONTROL v2.0</div>
        </div>
        <div className="flex-1 py-4 relative">
          <div
            className="nav-indicator"
            style={{ top: `${16 + activeIndex * 40}px` }}
          />
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`nav-link w-full text-left px-5 py-2 text-sm font-dm flex items-center gap-3 ${
                active === s.id ? "active text-gold" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span className="font-mono text-[10px] text-text-muted w-4">
                {SECTIONS.indexOf(s).toString().padStart(2, "0")}
              </span>
              {s.label}
            </button>
          ))}
        </div>
        <div className="px-5 py-4 border-t border-border">
          <div className="font-mono text-[10px] text-text-muted">{STUDENT.name}</div>
          <div className="font-mono text-[10px] text-gold">
            {STUDENT.category} • {STUDENT.state}
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav fixed bottom-0 left-0 right-0 bg-bg-secondary/90 backdrop-blur-xl border-t border-border z-[100] flex overflow-x-auto">
        {SECTIONS.slice(0, 6).map((s) => (
          <button
            key={s.id}
            onClick={() => handleNav(s.id)}
            className={`flex-1 min-w-[60px] py-3 text-center text-[10px] font-mono transition-colors duration-300 ${
              active === s.id ? "text-gold" : "text-text-muted"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Flash overlay for page transitions */}
      {flash && <div className="fixed inset-0 z-[90] pointer-events-none page-flash" />}
    </>
  );
}
