/**
 * @file Percentile journey milestones — from 14%ile (Jan 2025) to 99+ target (Apr 2026).
 */
import type { JourneyPoint } from "@/types";

export const JOURNEY: JourneyPoint[] = [
  { label: "Jan 2025", percentile: 14, score: "~14%ile", color: "#e05a5a" },
  { label: "Apr 2025", percentile: 67, score: "67%ile", color: "#f97316" },
  { label: "Jan 2026", percentile: 90.14, score: "90.14%ile", color: "#5ab4f0" },
  { label: "Apr 2026", percentile: 99, score: "99+%ile", color: "#f0c040", isTarget: true },
];
