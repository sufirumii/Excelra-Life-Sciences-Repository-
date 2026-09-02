"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COURSES } from "@/lib/excelra/data";

export type Role = "learner" | "admin";
export type AppPhase = "login" | "transition" | "app";

export interface CourseProgress {
  done: number[];
  checks: Record<string, boolean>;
  quizScore: number | null;
  completed: boolean;
  points: number;
}

export interface SessionState {
  phase: AppPhase;
  role: Role;
  name: string;
  progress: Record<string, CourseProgress>;
  setPhase: (p: AppPhase) => void;
  login: (role: Role, name: string) => void;
  logout: () => void;
  markModuleDone: (courseId: string, moduleIdx: number) => void;
  setCheck: (courseId: string, checkIdx: number) => void;
  setQuizScore: (courseId: string, score: number) => void;
  completeCourse: (courseId: string, score: number) => void;
  totalPoints: () => number;
  coursesCompleted: () => number;
}

function emptyProgress(): Record<string, CourseProgress> {
  const p: Record<string, CourseProgress> = {};
  COURSES.forEach((c) => {
    p[c.id] = { done: [], checks: {}, quizScore: null, completed: false, points: 0 };
  });
  return p;
}

export const useSession = create<SessionState>()(
  persist(
    (set, get) => ({
      phase: "login",
      role: "learner",
      name: "",
      progress: emptyProgress(),
      setPhase: (phase) => set({ phase }),
      login: (role, name) =>
        set({ phase: "transition", role, name }),
      logout: () => set({ phase: "login", role: "learner", name: "" }),
      markModuleDone: (courseId, moduleIdx) =>
        set((s) => {
          const cp = { ...s.progress[courseId] };
          if (!cp.done.includes(moduleIdx)) {
            cp.done = [...cp.done, moduleIdx];
            cp.points += 5;
          }
          return { progress: { ...s.progress, [courseId]: cp } };
        }),
      setCheck: (courseId, checkIdx) =>
        set((s) => {
          const cp = { ...s.progress[courseId] };
          cp.checks = { ...cp.checks, [String(checkIdx)]: true };
          return { progress: { ...s.progress, [courseId]: cp } };
        }),
      setQuizScore: (courseId, score) =>
        set((s) => {
          const cp = { ...s.progress[courseId] };
          cp.quizScore = score;
          return { progress: { ...s.progress, [courseId]: cp } };
        }),
      completeCourse: (courseId, score) =>
        set((s) => {
          const cp = { ...s.progress[courseId] };
          cp.quizScore = score;
          if (!cp.completed) {
            cp.completed = true;
            cp.points += 30;
          }
          return { progress: { ...s.progress, [courseId]: cp } };
        }),
      totalPoints: () =>
        Object.values(get().progress).reduce((s, c) => s + (c.points || 0), 0),
      coursesCompleted: () =>
        Object.values(get().progress).filter((c) => c.completed).length,
    }),
    {
      name: "excelra_lsr_v2",
      partialize: (s) => ({
        progress: s.progress,
        name: s.name,
        role: s.role,
        // NOTE: phase is intentionally NOT persisted — always start at login
      }),
    }
  )
);
