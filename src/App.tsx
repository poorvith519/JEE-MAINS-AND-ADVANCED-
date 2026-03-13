/**
 * @file App — Root component assembling all 9 sections of the JEE Mission Control dashboard.
 * Imports data from @/data, hooks from @/hooks, and components from @/components.
 * Sections: Hero → Overview → Comparison → Subjects → Verdicts → Schedule → Plan → Simulation → Colleges → Rules
 */
import { useState, useCallback, useEffect } from "react";
import { useInView } from "@/hooks";
import {
  STUDENT,
  STATS,
  SUBJECTS,
  COMPARE_ROWS,
  VERDICTS,
  SCHEDULE,
  MILESTONES,
  SCHEDULE_LEGEND,
  PLAN_PHASES,
  COLLEGES,
  RULES,
} from "@/data";
import {
  CustomCursor,
  ScrollProgressBar,
  Navigation,
  Section,
  StatCard,
  SubjectBar,
  TiltCard,
  VerdictCard,
  ScheduleCard,
  PlanPhaseCard,
  SimulationTable,
  ScoreSliderSimulator,
  CollegeCard,
  RuleTypewriter,
  PercentileJourney,
  RadarChart,
  CompareRow,
  HeroSection,
} from "@/components";

export function App() {
  const [collegeFilter, setCollegeFilter] = useState("All");
  const [ruleTriggers, setRuleTriggers] = useState([false, false, false]);
  const { ref: rulesRef, isVisible: rulesVisible } = useInView({ threshold: 0.2 });

  // Trigger rules typewriter sequentially when section enters viewport
  useEffect(() => {
    if (rulesVisible && !ruleTriggers[0]) {
      setRuleTriggers([true, false, false]);
    }
  }, [rulesVisible, ruleTriggers]);

  const triggerNextRule = useCallback((index: number) => {
    if (index < 2) {
      setRuleTriggers((prev) => {
        const next = [...prev];
        next[index + 1] = true;
        return next;
      });
    }
  }, []);

  const filteredColleges =
    collegeFilter === "All" ? COLLEGES : COLLEGES.filter((c) => c.tier === collegeFilter);

  return (
    <div className="min-h-screen bg-bg-primary">
      <CustomCursor />
      <ScrollProgressBar />
      <Navigation />

      <main className="lg:ml-52">
        {/* ============ HERO ============ */}
        <HeroSection />

        {/* ============ SECTION 01: OVERVIEW ============ */}
        <Section
          id="overview"
          tag="01 — Overview"
          title="Performance at a Glance"
          description="Key metrics from Mock Test 2 compared against the 99th percentile benchmark of 198/300. Every number tells a story."
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix ?? ""}
                color={stat.color}
                delay={i * 80}
                decimals={stat.decimals ?? 0}
                noCountUp={stat.noCountUp ?? false}
              />
            ))}
          </div>

          {/* Percentile Journey */}
          <div className="mt-16">
            <h3 className="font-syne font-bold text-lg text-text-primary mb-2 text-center">
              Percentile Journey
            </h3>
            <p className="font-mono text-xs text-text-muted text-center mb-4">
              From 14%ile (Jan 2025) to 99+%ile target (Apr 2026)
            </p>
            <PercentileJourney />
          </div>
        </Section>

        {/* ============ SECTION 02: MOCK COMPARISON ============ */}
        <Section
          id="comparison"
          tag="02 — Mock Comparison"
          title="MT1 vs MT2 — Side by Side"
          description="A comprehensive comparison of both mock tests. The delta column shows your growth trajectory across every metric."
        >
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-bg-card">
                  <th className="px-4 py-3 font-mono text-xs text-text-muted font-medium">Metric</th>
                  <th className="px-4 py-3 font-mono text-xs text-text-muted font-medium">MT1</th>
                  <th className="px-4 py-3 font-mono text-xs text-text-muted font-medium">MT2</th>
                  <th className="px-4 py-3 font-mono text-xs text-text-muted font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <CompareRow key={row.metric} row={row} index={i} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Radar chart */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-syne font-bold text-lg text-text-primary mb-2">
                Subject Balance Map
              </h3>
              <p className="font-dm text-xs text-text-secondary mb-4">
                Current scores vs 99th percentile target. The outer ring represents your target — the
                inner shape is where you are now.
              </p>
              <div className="flex gap-4 flex-wrap">
                {SUBJECTS.map((s) => (
                  <div key={s.subject} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    <span className="font-mono text-[10px] text-text-muted">
                      {s.subject}: {s.mt2}/100
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <RadarChart />
          </div>
        </Section>

        {/* ============ SECTION 03: SUBJECT BREAKDOWN ============ */}
        <Section
          id="subjects"
          tag="03 — Subject Breakdown"
          title="Deep Dive by Subject"
          description="Each subject tells a different story. Physics is improving, Chemistry is stable, and Mathematics needs urgent intervention."
        >
          {/* Progress bars */}
          <div className="mb-12">
            {SUBJECTS.map((s, i) => (
              <SubjectBar
                key={s.subject}
                subject={s.subject}
                current={s.mt2}
                target99={s.target99}
                max={s.max}
                color={s.color}
                accuracy={s.accuracy}
                delay={i * 120}
              />
            ))}
          </div>

          {/* Subject detail cards with 3D tilt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SUBJECTS.map((s) => (
              <TiltCard key={s.subject} isDanger={s.subject === "Mathematics"} color={s.color}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-syne font-bold text-base" style={{ color: s.color }}>
                      {s.subject}
                    </span>
                    <span className="font-mono text-2xl font-bold text-text-primary">{s.mt2}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-text-muted">MT1 Score</span>
                      <span className="text-text-secondary">{s.mt1}</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-text-muted">Improvement</span>
                      <span className="text-accent-green">+{s.change}</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-text-muted">Accuracy</span>
                      <span className="text-text-primary">{s.accuracy}%</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-text-muted">99th Target</span>
                      <span style={{ color: s.color }}>{s.target99}</span>
                    </div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-text-muted">Gap</span>
                      <span className="text-accent-red">{s.target99 - s.mt2} marks</span>
                    </div>
                  </div>
                  {s.subject === "Mathematics" && (
                    <div className="mt-3 pt-3 border-t border-accent-red/20">
                      <span className="font-mono text-[10px] text-accent-red font-bold">
                        ⚠ CRITICAL — Needs immediate 40+ mark improvement
                      </span>
                    </div>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </Section>

        {/* ============ SECTION 04: VERDICT ANALYSIS ============ */}
        <Section
          id="verdicts"
          tag="04 — Verdict Analysis"
          title="Strengths, Warnings & Danger Zones"
          description="An honest assessment of where you stand. Green = keep doing this. Yellow = needs work. Red = fix this immediately or fail."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VERDICTS.map((v, i) => (
              <VerdictCard key={v.title} verdict={v} delay={i * 60} />
            ))}
          </div>
        </Section>

        {/* ============ SECTION 05: MOCK SCHEDULE ============ */}
        <Section
          id="schedule"
          tag="05 — Test Schedule"
          title="20-Mock Battle Plan"
          description="March 10 to April 1. Alternating morning (9–12) and evening (3–6) sessions. Analysis days built in. No excuses."
        >
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
            {SCHEDULE.map((item, idx) => {
              const row = Math.floor(idx / 4);
              const col = idx % 4;
              const waveDelay = (row + col) * 40;
              return <ScheduleCard key={item.id + idx} item={item} delay={waveDelay} />;
            })}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {SCHEDULE_LEGEND.map((legend) => (
              <div key={legend.label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: legend.color }} />
                <span className="font-mono text-[10px] text-text-muted">{legend.label}</span>
              </div>
            ))}
          </div>

          {/* Milestone targets */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {MILESTONES.map((milestone) => (
              <div key={milestone.mock} className="glow-card p-4 rounded-xl text-center">
                <div className="font-mono text-xs text-text-muted mb-1">
                  {milestone.mock} by {milestone.date}
                </div>
                <div className="font-mono text-2xl font-bold" style={{ color: milestone.color }}>
                  {milestone.target}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ============ SECTION 06: ACTION PLAN ============ */}
        <Section
          id="plan"
          tag="06 — Action Plan"
          title="3-Phase Battle Strategy"
          description="A meticulously designed 19-day plan from March 14 to April 1. Each phase builds on the previous. No shortcuts."
        >
          {PLAN_PHASES.map((phase, i) => (
            <PlanPhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </Section>

        {/* ============ SECTION 07: SCORE SIMULATION ============ */}
        <Section
          id="simulation"
          tag="07 — Score Simulation"
          title="Projected Score Scenarios"
          description="Three scenarios based on effort level. Conservative assumes minimal improvement. Aggressive requires perfect execution of the 3-phase plan."
        >
          <SimulationTable />
          <ScoreSliderSimulator />
        </Section>

        {/* ============ SECTION 08: COLLEGE TARGETS ============ */}
        <Section
          id="colleges"
          tag="08 — College Targets"
          title="Where 198+ Takes You"
          description="Six realistic college targets across IIT, NIT, IIIT, and Private tiers. Filtered by your score projection and state quota."
        >
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "IIT", "NIT", "IIIT", "Private"].map((tier) => (
              <button
                key={tier}
                onClick={() => setCollegeFilter(tier)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-medium transition-all duration-300 ${
                  collegeFilter === tier
                    ? "bg-gold/15 text-gold border border-gold/30"
                    : "bg-bg-card text-text-muted border border-border hover:border-gold/20 hover:text-text-secondary"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {tier}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredColleges.map((college, i) => (
              <CollegeCard key={college.name} college={college} delay={i * 80} />
            ))}
          </div>
        </Section>

        {/* ============ SECTION 09: FINAL RULES ============ */}
        <section id="rules" className="relative py-20 md:py-28 px-5 md:px-10">
          <div className="max-w-6xl mx-auto" ref={rulesRef}>
            <div
              className={`section-tag font-mono text-xs text-accent-red tracking-[0.2em] uppercase mb-3 ${rulesVisible ? "visible" : ""}`}
            >
              09 — Non-Negotiable
            </div>
            <h2
              className={`section-title-reveal font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 ${rulesVisible ? "visible" : ""}`}
            >
              3 Rules. No Exceptions.
            </h2>
            <p
              className={`section-desc-reveal font-dm text-text-secondary text-sm md:text-base max-w-2xl mb-12 ${rulesVisible ? "visible" : ""}`}
            >
              These rules are the difference between NIT Surathkal and no NIT. Memorize them. Follow
              them in every single mock. Break them and you break your chances.
            </p>

            <div className="max-w-2xl">
              {RULES.map((rule, i) => (
                <RuleTypewriter
                  key={rule.id}
                  rule={rule}
                  trigger={ruleTriggers[i]}
                  onDone={() => triggerNextRule(i)}
                />
              ))}
            </div>

            {/* Final verdict */}
            <div
              className={`mt-16 glow-card p-8 md:p-10 rounded-2xl border-gold/20 relative overflow-hidden transition-all duration-700 ${rulesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "2s",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
              <div className="relative z-10">
                <div className="font-mono text-[10px] text-gold tracking-widest mb-4">
                  FINAL VERDICT
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-bold text-text-primary mb-4">
                  The gap is <span className="text-gold">114 marks</span>. The timeline is{" "}
                  <span className="text-gold">19 days</span>.
                </h3>
                <p className="font-dm text-sm text-text-secondary leading-relaxed mb-4">
                  You went from 14%ile to 90.14%ile in one year. You improved 24 marks in 10 days
                  between MT1 and MT2. The trajectory is real. The math says it's possible. But
                  possible ≠ guaranteed.
                </p>
                <p className="font-dm text-sm text-text-secondary leading-relaxed mb-4">
                  198 marks requires you to solve 50+ questions with 80%+ accuracy. That means knowing
                  60% of the syllabus cold, and being smart about the other 40%. No panic. No guessing.
                  No skipping Section B.
                </p>
                <p className="font-syne text-base md:text-lg font-bold text-gold">
                  Execute the plan. Trust the process. See you at NIT-K, Poorvith.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-5 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <div className="font-mono text-[10px] text-text-muted tracking-wider">
              JEE MISSION CONTROL v2.0 — Built for {STUDENT.name}
            </div>
            <div className="font-mono text-[10px] text-text-muted mt-1">
              Target: 99+ Percentile • {STUDENT.exam} • {STUDENT.category} • {STUDENT.state}
            </div>
            <div className="font-mono text-[10px] text-gold/50 mt-3">
              "The only impossible journey is the one you never begin."
            </div>
          </div>
        </footer>

        {/* Mobile nav spacing */}
        <div className="h-16 lg:hidden" />
      </main>
    </div>
  );
}
