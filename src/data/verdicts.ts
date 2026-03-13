/**
 * @file Verdict analysis cards — 3 strengths, 3 warnings, 2 danger zones.
 * Color-coded risk indicators for performance assessment.
 */
import type { Verdict } from "@/types";

export const VERDICTS: Verdict[] = [
  {
    type: "strength",
    title: "Accuracy Improved Significantly",
    description: "Overall accuracy jumped from 58.5% (MT1) to 72.6% (MT2). Better conceptual understanding and reduced guesswork.",
    metric: "+14.1% accuracy",
  },
  {
    type: "strength",
    title: "Physics Score Nearly Doubled",
    description: "Physics improved from 23 to 34 (+47.8%). Strong improvement in Mechanics and Electrostatics sections.",
    metric: "23 → 34 (+47.8%)",
  },
  {
    type: "strength",
    title: "Chemistry Consistency",
    description: "Chemistry accuracy at 75% is the highest across all subjects. Organic chemistry basics are solid.",
    metric: "75% accuracy",
  },
  {
    type: "warning",
    title: "Low Attempt Rate",
    description: "Only 33 out of 75 questions attempted (44%). Need to attempt at least 45–50 questions to break 150+ barrier.",
    metric: "33/75 attempted",
  },
  {
    type: "warning",
    title: "Time Management Issues",
    description: "Spending too much time on Physics (32 min) while rushing Mathematics (38 min for 25 questions). Need better time allocation.",
    metric: "Unbalanced timing",
  },
  {
    type: "warning",
    title: "Negative Marking Awareness",
    description: "9 incorrect answers in MT2 = -9 marks lost. Need to improve elimination technique and reduce blind guessing.",
    metric: "-9 marks lost",
  },
  {
    type: "danger",
    title: "Mathematics is the Bottleneck",
    description: "Maths score: 17/100 (MT2). Only 5 correct out of 25. Calculus and Coordinate Geometry are near-zero. This MUST be fixed — Maths alone can add 40+ marks.",
    metric: "17/100 — Critical",
  },
  {
    type: "danger",
    title: "Too Many Unattempted Questions",
    description: "42 questions left unattempted in MT2. Even with 50% accuracy on 10 more questions, that's +20 marks instantly.",
    metric: "42 unattempted",
  },
];
