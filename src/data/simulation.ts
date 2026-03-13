/**
 * @file Score simulation projection data — 3 scenarios (Conservative, Moderate, Aggressive).
 * Current: 84/300 → Target: 198/300 (99th percentile).
 */
import type { SimulationRow } from "@/types";

export const SIMULATION: SimulationRow[] = [
  { subject: "Physics", current: 34, conservative: 50, moderate: 62, aggressive: 72, target99: 68 },
  { subject: "Chemistry", current: 33, conservative: 48, moderate: 58, aggressive: 68, target99: 65 },
  { subject: "Mathematics", current: 17, conservative: 32, moderate: 45, aggressive: 58, target99: 65 },
  { subject: "Total", current: 84, conservative: 130, moderate: 165, aggressive: 198, target99: 198 },
];
