/**
 * @file Core TypeScript type definitions for the JEE Mission Control Dashboard.
 * All interfaces and types used across data, hooks, and components.
 */

/** Student profile information */
export interface Student {
  name: string;
  category: string;
  state: string;
  status: string;
  target: string;
  targetScore: string;
  exam: string;
  examDate: Date;
}

/** A single point on the percentile journey chart */
export interface JourneyPoint {
  label: string;
  percentile: number;
  score: string;
  color: string;
  isTarget?: boolean;
}

/** Subject-wise score breakdown for MT1 vs MT2 */
export interface SubjectScore {
  subject: string;
  mt1: number;
  mt2: number;
  change: number;
  max: number;
  target99: number;
  accuracy: number;
  color: string;
}

/** A single KPI stat card item */
export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  color: string;
  decimals?: number;
  noCountUp?: boolean;
}

/** A single row in the MT1 vs MT2 comparison table */
export interface CompareRow {
  metric: string;
  mt1: string;
  mt2: string;
  change: string;
  positive: boolean;
}

/** Verdict card — strength, warning, or danger classification */
export interface Verdict {
  type: "strength" | "warning" | "danger";
  title: string;
  description: string;
  metric: string;
}

/** A single mock test schedule entry */
export interface MockScheduleItem {
  id: string;
  label: string;
  date: string;
  time: string;
  status: "done" | "active" | "upcoming" | "gap";
}

/** A single task within an action plan phase */
export interface PlanTask {
  title: string;
  description: string;
  subject: string;
  priority: "critical" | "high" | "medium";
}

/** An action plan phase (3 phases total) */
export interface PlanPhase {
  number: number;
  title: string;
  dateRange: string;
  subtitle: string;
  color: string;
  scoreTargets: string;
  tasks: PlanTask[];
}

/** A row in the score simulation projection table */
export interface SimulationRow {
  subject: string;
  current: number;
  conservative: number;
  moderate: number;
  aggressive: number;
  target99: number;
}

/** College target card data */
export interface College {
  name: string;
  tier: string;
  branch: string;
  percentile: string;
  score: string;
  status: "reach" | "target" | "safe" | "backup";
  notes: string;
  color: string;
}

/** A non-negotiable exam rule */
export interface Rule {
  id: string;
  title: string;
  description: string;
}

/** Navigation section descriptor */
export interface NavSection {
  id: string;
  label: string;
}

/** Countdown time remaining */
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Milestone target for the schedule */
export interface Milestone {
  mock: string;
  target: string;
  date: string;
  color: string;
}

/** Legend item for schedule */
export interface LegendItem {
  color: string;
  label: string;
}
