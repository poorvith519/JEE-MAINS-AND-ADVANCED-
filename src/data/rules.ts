/**
 * @file 3 Non-Negotiable Exam Rules.
 * These rules must be followed in every single mock test — no exceptions.
 */
import type { Rule } from "@/types";

export const RULES: Rule[] = [
  {
    id: "R1",
    title: "ATTEMPT SECTION B IN EVERY SUBJECT — ALWAYS",
    description:
      "Section B has integer-type questions with no negative marking. Even a rough estimate can net you +4 marks per correct answer. Never leave Section B blank — this is where safe marks live.",
  },
  {
    id: "R2",
    title: "MATHEMATICS FIRST 30 MINUTES — NON-NEGOTIABLE",
    description:
      "Start with Maths. Spend the first 30 minutes only on Maths. Pick the 8–10 easiest questions, solve them cleanly. This breaks the mental block and builds confidence for the rest of the paper.",
  },
  {
    id: "R3",
    title: "70% CONFIDENCE RULE — IF IN DOUBT, SKIP",
    description:
      "Only attempt a question if you're at least 70% sure of the answer. Blind guessing costs you -1 per wrong answer. 5 blind guesses = -5 marks = the difference between NIT and no NIT.",
  },
];
