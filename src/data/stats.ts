/**
 * @file KPI stat card data — 8 key performance indicators from Mock Test 2.
 */
import type { StatItem } from "@/types";

export const STATS: StatItem[] = [
  { label: "MT2 Score", value: 84, suffix: "/300", color: "#f0c040" },
  { label: "Improvement", value: 24, suffix: " marks", prefix: "+", color: "#4ecb7f" },
  { label: "Accuracy", value: 66.67, suffix: "%", color: "#5ab4f0", decimals: 2 },
  { label: "Questions Attempted", value: 33, suffix: "/75", color: "#a78bfa" },
  { label: "Correct Answers", value: 24, suffix: "/33", color: "#4ecb7f" },
  { label: "Wrong Answers", value: 9, suffix: "", color: "#e05a5a" },
  { label: "Negative Marks", value: -12, suffix: "", color: "#e05a5a", noCountUp: true },
  { label: "Target Gap", value: 114, suffix: " marks", color: "#f97316" },
];
