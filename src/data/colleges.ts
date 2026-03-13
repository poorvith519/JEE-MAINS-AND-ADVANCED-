/**
 * @file College target cards — 6 institutions across IIT, NIT, IIIT, and Private tiers.
 * Filtered by score projection and state quota eligibility.
 */
import type { College } from "@/types";

export const COLLEGES: College[] = [
  {
    name: "IIT Bombay",
    tier: "IIT",
    branch: "CS / Electrical",
    percentile: "99.8+",
    score: "250+",
    status: "reach",
    notes: "Dream target. Requires 99.8+ percentile. Current gap is massive but not impossible with 40-point jump trajectory.",
    color: "#f0c040",
  },
  {
    name: "IIT Delhi",
    tier: "IIT",
    branch: "CS / Mathematics & Computing",
    percentile: "99.7+",
    score: "240+",
    status: "reach",
    notes: "Top 500 rank needed. Focus on maximizing Maths score — Delhi weighs Maths heavily for CS.",
    color: "#f0c040",
  },
  {
    name: "NIT Karnataka (Surathkal)",
    tier: "NIT",
    branch: "CS / IT / ECE",
    percentile: "99.0+",
    score: "198+",
    status: "target",
    notes: "Home state advantage with Karnataka quota. 99th percentile = realistic with strong Phase 2–3 execution.",
    color: "#5ab4f0",
  },
  {
    name: "NIT Trichy",
    tier: "NIT",
    branch: "CS / ECE",
    percentile: "98.5+",
    score: "185+",
    status: "target",
    notes: "Strong CS program. Achievable with moderate improvement trajectory (165+ score).",
    color: "#5ab4f0",
  },
  {
    name: "IIIT Hyderabad",
    tier: "IIIT",
    branch: "CS / CLD",
    percentile: "98.0+",
    score: "180+",
    status: "safe",
    notes: "Separate entrance (UGEE) also available. Strong placement record. Safe target with conservative score projection.",
    color: "#a78bfa",
  },
  {
    name: "BITS Pilani",
    tier: "Private",
    branch: "CS / ECE / EEE",
    percentile: "BITSAT 300+",
    score: "BITSAT",
    status: "backup",
    notes: "Separate exam (BITSAT). Excellent backup option. Start BITSAT prep parallel after JEE Main if needed.",
    color: "#4ecb7f",
  },
];
