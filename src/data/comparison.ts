/**
 * @file MT1 vs MT2 comparison table data — 10 metrics side by side.
 */
import type { CompareRow } from "@/types";

export const COMPARE_ROWS: CompareRow[] = [
  { metric: "Total Score", mt1: "60/300", mt2: "84/300", change: "+24", positive: true },
  { metric: "Predicted %ile", mt1: "61.07", mt2: "90.83", change: "+29.76", positive: true },
  { metric: "Attempted", mt1: "29/75", mt2: "33/75", change: "+4", positive: true },
  { metric: "Correct", mt1: "17", mt2: "24", change: "+7", positive: true },
  { metric: "Incorrect", mt1: "12", mt2: "9", change: "-3", positive: true },
  { metric: "Accuracy", mt1: "58.6%", mt2: "72.7%", change: "+14.1%", positive: true },
  { metric: "Physics", mt1: "23", mt2: "34", change: "+11", positive: true },
  { metric: "Chemistry", mt1: "20", mt2: "33", change: "+13", positive: true },
  { metric: "Mathematics", mt1: "13", mt2: "17", change: "+4", positive: true },
  { metric: "Negative Marks", mt1: "-20", mt2: "-12", change: "+8", positive: true },
];
