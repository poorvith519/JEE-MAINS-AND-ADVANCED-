/**
 * @file 3-Phase Action Plan — Foundation Repair → Acceleration → Exam Simulation.
 * Dates: March 14 to April 1, 2026.
 */
import type { PlanPhase } from "@/types";

export const PLAN_PHASES: PlanPhase[] = [
  {
    number: 1,
    title: "FOUNDATION REPAIR",
    dateRange: "Mar 14 – Mar 20",
    subtitle: "Plug critical gaps in all 3 subjects. Focus on high-weightage chapters.",
    color: "#e05a5a",
    scoreTargets: "MT11: 100+",
    tasks: [
      {
        title: "Physics: Mechanics Deep Dive",
        description: "Revise NLM, Work-Energy-Power, Rotational Motion. Solve 30 problems/day from DC Pandey. Focus on FBD accuracy.",
        subject: "Physics",
        priority: "critical",
      },
      {
        title: "Chemistry: Organic Reaction Mechanisms",
        description: "Complete GOC, Hydrocarbons, Haloalkanes. Memorize named reactions. 20 problems/day from MS Chouhan.",
        subject: "Chemistry",
        priority: "critical",
      },
      {
        title: "Mathematics: Calculus Foundations",
        description: "Limits, Continuity, Differentiability — concept clarity. Solve 25 problems from Cengage. No skipping graphs.",
        subject: "Mathematics",
        priority: "critical",
      },
      {
        title: "Daily Error Log",
        description: "Maintain a mistake journal. Write down every wrong answer with the correct approach. Review before sleeping.",
        subject: "All",
        priority: "high",
      },
    ],
  },
  {
    number: 2,
    title: "ACCELERATION MODE",
    dateRange: "Mar 21 – Mar 28",
    subtitle: "Increase speed, accuracy, and attempt rate. Target 40+ questions attempted.",
    color: "#f0c040",
    scoreTargets: "MT15: 130+ / MT18: 160+",
    tasks: [
      {
        title: "Physics: Electrostatics + Current Electricity",
        description: "Master Coulomb's law, Gauss theorem, circuit problems. Time each problem — target under 3 min/question.",
        subject: "Physics",
        priority: "critical",
      },
      {
        title: "Chemistry: Physical Chemistry Numericals",
        description: "Mole concept, Thermodynamics, Equilibrium. Focus on calculation speed. Use shortcuts for common conversions.",
        subject: "Chemistry",
        priority: "critical",
      },
      {
        title: "Mathematics: Coordinate Geometry + Algebra",
        description: "Straight lines, circles, parabola. Quadratic equations, sequences. 30 problems/day minimum.",
        subject: "Mathematics",
        priority: "high",
      },
      {
        title: "Full Mock Every Alternate Day",
        description: "Take a full 3-hour mock on alternate days. Analyze for 2 hours after each mock. Track improvement curve.",
        subject: "All",
        priority: "critical",
      },
      {
        title: "Weak Chapter Elimination",
        description: "Identify bottom 3 chapters per subject from mock analysis. Dedicate 2 hours daily to weakest topics.",
        subject: "All",
        priority: "high",
      },
    ],
  },
  {
    number: 3,
    title: "EXAM SIMULATION",
    dateRange: "Mar 29 – Apr 1",
    subtitle: "Full exam conditions. No new topics. Only revision, mocks, and mental prep.",
    color: "#4ecb7f",
    scoreTargets: "MT20: 180+",
    tasks: [
      {
        title: "2 Full Mocks Under Exam Conditions",
        description: "Simulate exact JEE timing (9 AM – 12 PM). No phone, no breaks. Use OMR sheet if possible. Target 150+ score.",
        subject: "All",
        priority: "critical",
      },
      {
        title: "Formula Sheet Review",
        description: "Review all formula sheets — Physics (50 formulas), Chemistry (reactions + periodic trends), Math (identities + theorems).",
        subject: "All",
        priority: "high",
      },
      {
        title: "Mental Conditioning",
        description: "Visualization exercises. Plan exam strategy: which subject first, time per section, when to skip. Get 8 hours of sleep.",
        subject: "All",
        priority: "high",
      },
      {
        title: "Logistics Check",
        description: "Confirm exam center, admit card print, travel plan, stationery kit. Zero surprises on exam day.",
        subject: "All",
        priority: "medium",
      },
    ],
  },
];
