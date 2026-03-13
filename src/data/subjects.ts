/**
 * @file Subject-wise score breakdown — Physics, Chemistry, Mathematics.
 * Contains MT1, MT2 scores, accuracy, and 99th percentile targets.
 */
import type { SubjectScore } from "@/types";

export const SUBJECTS: SubjectScore[] = [
  { subject: "Physics", mt1: 23, mt2: 34, change: 11, max: 100, target99: 68, accuracy: 71.4, color: "#5ab4f0" },
  { subject: "Chemistry", mt1: 20, mt2: 33, change: 13, max: 100, target99: 65, accuracy: 75.0, color: "#4ecb7f" },
  { subject: "Mathematics", mt1: 13, mt2: 17, change: 4, max: 100, target99: 65, accuracy: 71.4, color: "#a78bfa" },
];
