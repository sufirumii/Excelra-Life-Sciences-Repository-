"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import { COURSES, DOMAIN_EXPLAINERS } from "@/lib/excelra/data";
import { useSession } from "@/lib/excelra/session";
import { CourseIcon } from "@/components/excelra/CourseIcon";
import { ThemeDeepDive } from "@/components/excelra/ThemeDeepDive";
import { useState } from "react";

export function HomeView({
  role,
  onBrowse,
}: {
  role: "learner" | "admin";
  onBrowse: () => void;
}) {
  const name = useSession((s) => s.name);
  const greetName = role === "admin" ? "Admin" : name || "Learner";
  const [deepDiveId, setDeepDiveId] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* soft purple ambient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.16),transparent_70%)]" />

      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20">
        {/* HERO */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Fresher Edition · Learning Repository
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-[#1e1b2e] sm:text-[2.9rem]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Welcome back, <span className="xl-grad-text">{greetName}</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5b5570]"
          >
            This repository turns seven distinct life sciences functions into
            self-paced courses — each covering a different part of the value
            chain, from early drug discovery through post-launch safety and
            digital transformation — so anyone new to the domain can get up to
            speed independently.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <button
              onClick={onBrowse}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_14px_34px_-12px_rgba(124,58,237,0.6)] transition hover:-translate-y-0.5"
            >
              Browse the 7 courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ORIENTATION — condensed, less scrolling */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="mb-6 max-w-2xl">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
              Orientation
            </span>
          </div>
          <h2
            className="text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Get to know the seven themes.
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-[#5b5570]">
            A quick primer on each domain — hover a card for its key fact, or open
            the full induction briefing to go deeper.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <OrientationCard
              key={course.id}
              num={course.num}
              icon={course.icon}
              accent={course.accent}
              title={course.title}
              text={DOMAIN_EXPLAINERS[course.id].text}
              fact={DOMAIN_EXPLAINERS[course.id].fact}
              delay={i * 0.05}
              onOpen={() => setDeepDiveId(course.id)}
            />
          ))}
        </div>
      </section>

      <div className="h-20" />

      {/* ===== THEME DEEP DIVE OVERLAY (learner + admin) ===== */}
      <AnimatePresence>
        {deepDiveId && (
          <ThemeDeepDive
            key={deepDiveId}
            courseId={deepDiveId}
            onClose={() => setDeepDiveId(null)}
            onNavigate={(id) => setDeepDiveId(id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function OrientationCard({
  num,
  icon,
  accent,
  title,
  text,
  fact,
  delay,
  onOpen,
}: {
  num: string;
  icon: string;
  accent: "mint" | "pink" | "violet" | "blue";
  title: string;
  text: string;
  fact: string;
  delay: number;
  onOpen: () => void;
}) {
  const short =
    text.length > 168 ? text.slice(0, 165).trim() + "…" : text;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="group flex cursor-pointer flex-col rounded-2xl border border-violet-100 bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_40px_-22px_rgba(124,58,237,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
    >
      <div className="mb-3 flex items-center justify-between">
        <CourseIcon icon={icon} accent={accent} size={40} />
        <span className="font-mono text-[11px] text-[#b6b0c8]">{num}</span>
      </div>
      <h3
        className="text-[1.05rem] font-semibold text-[#1e1b2e]"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#5b5570]">{short}</p>

      {/* Key fact — always visible on touch/mobile; on desktop it expands on
          hover/focus via the grid-rows trick so card height stays stable. */}
      <div className="mt-3 grid grid-rows-[1fr] overflow-hidden rounded-lg border-l-2 border-violet-400 bg-violet-50/50 transition-all duration-300 lg:grid-rows-[0fr] lg:group-focus-within:grid-rows-[1fr] lg:group-hover:grid-rows-[1fr]">
        <div className="min-h-0">
          <div className="flex items-start gap-2 px-3 py-2">
            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-600" />
            <p className="text-[12.5px] leading-relaxed text-[#3f3a55]">{fact}</p>
          </div>
        </div>
      </div>

      {/* CTA — opens the full induction briefing */}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-[12.5px] font-semibold text-violet-700">
          Know more
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition-colors duration-200 group-hover:bg-violet-600 group-hover:text-white">
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.button>
  );
}
