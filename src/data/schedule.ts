/**
 * @file 20-mock test schedule — March 10 to April 1, 2026.
 * Alternating morning (9–12) and evening (3–6) sessions with analysis gap days.
 */
import type { MockScheduleItem, Milestone, LegendItem } from "@/types";

export const SCHEDULE: MockScheduleItem[] = [
  { id: "MT01", label: "MT01", date: "Mar 10", time: "Morning 9–12", status: "done" },
  { id: "MT02", label: "MT02", date: "Mar 11", time: "Evening 3–6", status: "done" },
  { id: "MT03", label: "MT03", date: "Mar 12", time: "Morning 9–12", status: "done" },
  { id: "MT04", label: "MT04", date: "Mar 13", time: "Evening 3–6", status: "active" },
  { id: "GAP1", label: "GAP", date: "Mar 14", time: "Analysis Day", status: "gap" },
  { id: "MT05", label: "MT05", date: "Mar 15", time: "Morning 9–12", status: "upcoming" },
  { id: "MT06", label: "MT06", date: "Mar 16", time: "Evening 3–6", status: "upcoming" },
  { id: "MT07", label: "MT07", date: "Mar 17", time: "Morning 9–12", status: "upcoming" },
  { id: "GAP2", label: "GAP", date: "Mar 18", time: "Analysis Day", status: "gap" },
  { id: "MT08", label: "MT08", date: "Mar 19", time: "Morning 9–12", status: "upcoming" },
  { id: "MT09", label: "MT09", date: "Mar 20", time: "Evening 3–6", status: "upcoming" },
  { id: "MT10", label: "MT10", date: "Mar 21", time: "Morning 9–12", status: "upcoming" },
  { id: "MT11", label: "MT11", date: "Mar 22", time: "Evening 3–6", status: "upcoming" },
  { id: "GAP3", label: "GAP", date: "Mar 23", time: "Analysis Day", status: "gap" },
  { id: "MT12", label: "MT12", date: "Mar 24", time: "Morning 9–12", status: "upcoming" },
  { id: "MT13", label: "MT13", date: "Mar 25", time: "Evening 3–6", status: "upcoming" },
  { id: "MT14", label: "MT14", date: "Mar 26", time: "Morning 9–12", status: "upcoming" },
  { id: "MT15", label: "MT15", date: "Mar 27", time: "Evening 3–6", status: "upcoming" },
  { id: "MT16", label: "MT16", date: "Mar 28", time: "Morning 9–12", status: "upcoming" },
  { id: "MT17", label: "MT17", date: "Mar 29", time: "Evening 3–6", status: "upcoming" },
  { id: "MT18", label: "MT18", date: "Mar 30", time: "Morning 9–12", status: "upcoming" },
  { id: "MT19", label: "MT19", date: "Mar 31", time: "Evening 3–6", status: "upcoming" },
  { id: "MT20", label: "MT20", date: "Apr 1", time: "Morning 9–12", status: "upcoming" },
];

export const MILESTONES: Milestone[] = [
  { mock: "MT11", target: "100+", date: "Mar 22", color: "#e05a5a" },
  { mock: "MT15", target: "130+", date: "Mar 27", color: "#f97316" },
  { mock: "MT18", target: "160+", date: "Mar 30", color: "#f0c040" },
  { mock: "MT20", target: "180+", date: "Apr 1", color: "#4ecb7f" },
];

export const SCHEDULE_LEGEND: LegendItem[] = [
  { color: "#4ecb7f", label: "Completed" },
  { color: "#f0c040", label: "Today / Active" },
  { color: "#6b7280", label: "Upcoming" },
  { color: "#f97316", label: "Analysis Day" },
];
