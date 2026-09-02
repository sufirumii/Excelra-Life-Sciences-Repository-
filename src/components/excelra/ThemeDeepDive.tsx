"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";
import { COURSES } from "@/lib/excelra/data";
import { THEME_DEEP_DIVES } from "@/lib/excelra/theme-deepdives";
import { ExcelraLogo } from "@/components/excelra/ExcelraLogo";
import { CourseIcon } from "@/components/excelra/CourseIcon";

/* --------------------------------------------------------------------
   ThemeDeepDive — a full-screen "induction briefing" reading UI for one
   Orientation theme. Opened from HomeView for both learner and admin.
   -------------------------------------------------------------------- */

const DISPLAY_FONT = { fontFamily: "var(--font-display), system-ui, sans-serif" };

export function ThemeDeepDive({
  courseId,
  onClose,
  onNavigate,
}: {
  courseId: string;
  onClose: () => void;
  onNavigate: (courseId: string) => void;
}) {
  const dive = THEME_DEEP_DIVES[courseId];
  const course = COURSES.find((c) => c.id === courseId);
  const idx = COURSES.findIndex((c) => c.id === courseId);
  const prevCourse = idx > 0 ? COURSES[idx - 1] : null;
  const nextCourse = idx >= 0 && idx < COURSES.length - 1 ? COURSES[idx + 1] : null;

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll while the overlay is open (same pattern as CourseRelaxer)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC closes; reset the overlay's own scroll when switching themes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [courseId, onClose]);

  if (!dive || !course) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-white"
      role="dialog"
      aria-modal="true"
      aria-label={`Induction briefing — Theme ${course.num}: ${course.title}`}
    >
      {/* Own scroll container */}
      <div ref={scrollRef} tabIndex={-1} className="h-full overflow-y-auto outline-none">
        {/* ===== STICKY TOP BAR ===== */}
        <div className="sticky top-0 z-20 border-b border-[#ece8f7] bg-white/85 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={onClose}
                aria-label="Back to Home"
                className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-white px-2.5 py-1.5 text-[12.5px] font-medium text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </button>
              <div className="hidden min-w-0 items-center gap-2 md:flex">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
                  Theme {course.num}
                </span>
                <span className="truncate text-[13px] font-medium text-[#1e1b2e]">
                  {course.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/60 px-3 py-1 font-mono text-[11px] text-violet-700 sm:inline-flex">
                <Clock className="h-3.5 w-3.5" />
                {dive.readMinutes} min read
              </span>
              <button
                onClick={() => prevCourse && onNavigate(prevCourse.id)}
                disabled={!prevCourse}
                aria-label={prevCourse ? `Previous theme: ${prevCourse.title}` : "No previous theme"}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200 bg-white text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-violet-200 disabled:hover:text-[#5b5570]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => nextCourse && onNavigate(nextCourse.id)}
                disabled={!nextCourse}
                aria-label={nextCourse ? `Next theme: ${nextCourse.title}` : "No next theme"}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200 bg-white text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-violet-200 disabled:hover:text-[#5b5570]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== HERO ===== */}
        <div className="relative h-[46vh] min-h-[340px] w-full overflow-hidden sm:h-[52vh]">
          <img
            src={dive.heroImage}
            alt={dive.heroCaption}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b2e]/90 via-[#1e1b2e]/40 to-violet-900/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto w-full max-w-6xl px-5 pb-9 sm:px-8 sm:pb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                Theme {course.num} · Induction Briefing
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="mt-3 max-w-3xl text-[1.9rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.7rem]"
                style={DISPLAY_FONT}
              >
                {dive.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-white/85 sm:text-[15.5px]"
              >
                {dive.standfirst}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.32 }}
                className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/65"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {dive.readMinutes} min read
                </span>
                <span aria-hidden>·</span>
                <span>{course.modules.length} modules</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero caption / credit */}
        <div className="mx-auto max-w-3xl px-5 pt-3 sm:px-8">
          <p className="text-[13px] leading-relaxed text-[#5b5570]">{dive.heroCaption}</p>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#8b86a0]">
            {dive.heroCredit}
          </p>
        </div>

        {/* ===== CONTENT COLUMN ===== */}
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-10 sm:px-8">
          {/* 1 — The big picture */}
          <Section id="dd-big-picture" index={1} title="The big picture">
            {dive.intro.map((p, i) =>
              i === 0 ? (
                <p
                  key={i}
                  className="text-[17px] font-medium leading-[1.75] text-[#2a2440]"
                >
                  {p}
                </p>
              ) : (
                <p key={i} className="mt-4 text-[15px] leading-[1.8] text-[#3f3a55]">
                  {p}
                </p>
              )
            )}
          </Section>

          {/* 2 — Why it matters */}
          <Section id="dd-why" index={2} title="Why it matters">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {dive.whyMatters.map((w, i) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-violet-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_16px_36px_-20px_rgba(124,58,237,0.4)]"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-violet-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[14.5px] font-semibold leading-snug text-[#1e1b2e]">
                    {w.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#5b5570]">{w.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 3 — How it works, end to end */}
          <Section id="dd-how" index={3} title="How it works, end to end">
            <ol className="relative space-y-7">
              <span
                aria-hidden
                className="absolute bottom-3 left-[15px] top-3 w-px bg-[#ece8f7]"
              />
              {dive.stages.map((s, i) => (
                <li key={s.name} className="relative flex gap-4">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 font-mono text-[11px] font-semibold text-white shadow-[0_0_0_4px_rgba(124,58,237,0.12)]">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[14.5px] font-semibold text-[#1e1b2e]">{s.name}</h3>
                    <p className="mt-1 text-[13.5px] leading-[1.7] text-[#5b5570]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[12.5px] italic leading-relaxed text-[#8b86a0]">
              {dive.stagesNote}
            </p>
          </Section>

          {/* Inline figure */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="mt-12 overflow-hidden rounded-2xl border border-[#ece8f7] bg-white shadow-[0_10px_30px_-18px_rgba(76,29,149,0.25)]"
          >
            <div className="group overflow-hidden">
              <img
                src={dive.inlineImage.src}
                alt={dive.inlineImage.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="border-t border-[#ece8f7] px-4 py-3.5 sm:px-5">
              <p className="text-[13px] leading-relaxed text-[#5b5570]">
                {dive.inlineImage.caption}
              </p>
              <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#8b86a0]">
                {dive.inlineImage.credit}
              </p>
            </figcaption>
          </motion.figure>

          {/* 4 — Key terms */}
          <Section id="dd-terms" index={4} title="Key terms" className="mt-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dive.terms.map((term) => (
                <div
                  key={term.t}
                  className="rounded-xl border border-violet-100/80 bg-white p-4 transition-colors duration-200 hover:bg-violet-50/40"
                >
                  <h3 className="text-[14px] font-semibold text-violet-700">{term.t}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#5b5570]">{term.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 5 — The people behind it */}
          <Section id="dd-people" index={5} title="The people behind it" className="mt-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dive.people.map((person) => (
                <div
                  key={person.role}
                  className="rounded-xl border border-violet-100/80 bg-white p-4 transition-colors duration-200 hover:bg-violet-50/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                      <Users className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#1e1b2e]">{person.role}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#5b5570]">
                        {person.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 6 — Standards & technologies */}
          <Section id="dd-standards" index={6} title="Standards & technologies" className="mt-12">
            <div className="divide-y divide-[#ece8f7] overflow-hidden rounded-2xl border border-violet-100 bg-white">
              {dive.standards.map((std) => (
                <div
                  key={std.name}
                  className="flex flex-col gap-1.5 px-4 py-3.5 transition-colors duration-200 hover:bg-violet-50/30 sm:flex-row sm:items-start sm:gap-4 sm:px-5"
                >
                  <span className="w-fit shrink-0 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-[12px] font-semibold leading-relaxed text-violet-700 sm:max-w-[220px]">
                    {std.name}
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-[#5b5570]">{std.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 7 & 8 — Current challenges + Where AI fits in (two-column) */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Section id="dd-challenges" index={7} title="Current challenges">
              <ol className="space-y-3.5">
                {dive.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.12em] text-violet-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13.5px] leading-[1.7] text-[#5b5570]">{c}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="dd-ai" index={8} title="Where AI fits in">
              <div className="rounded-xl border border-fuchsia-100 bg-gradient-to-br from-violet-50/80 to-fuchsia-50/40 p-4">
                <ul className="space-y-3.5">
                  {dive.ai.map((a, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fuchsia-500" />
                      <p className="text-[13.5px] leading-[1.7] text-[#3f3a55]">{a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          </div>

          {/* Key fact banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-6 text-white shadow-[0_22px_50px_-22px_rgba(124,58,237,0.6)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Lightbulb className="h-5 w-5" />
              </span>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                  Key fact
                </div>
                <p className="mt-1.5 text-[17px] font-semibold leading-[1.55]">{dive.fact}</p>
              </div>
            </div>
          </motion.div>

          {/* 9 — Where Excelra fits in */}
          <Section id="dd-excelra" index={9} title="Where Excelra fits in" className="mt-12">
            <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/70 to-white p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <ExcelraLogo height={20} />
                <span aria-hidden className="h-px flex-1 bg-violet-100" />
              </div>
              <p className="mt-3.5 text-[14.5px] leading-[1.8] text-[#3f3a55]">{dive.excelra}</p>
            </div>
          </Section>

          {/* 10 — Explore further */}
          <Section id="dd-sources" index={10} title="Explore further" className="mt-12">
            <ul className="divide-y divide-[#ece8f7] overflow-hidden rounded-2xl border border-violet-100 bg-white">
              {dive.sources.map((src, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between gap-3 px-4 py-3.5 text-[13.5px] leading-relaxed text-[#3f3a55] transition-colors duration-200 hover:bg-violet-50/40 sm:px-5"
                >
                  <span>{src}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </li>
              ))}
            </ul>
          </Section>

          {/* ===== BOTTOM PREV / NEXT ===== */}
          <nav aria-label="Theme navigation" className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {prevCourse ? (
              <button
                onClick={() => onNavigate(prevCourse.id)}
                className="group flex items-center gap-3 rounded-2xl border border-violet-100 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_16px_36px_-20px_rgba(124,58,237,0.4)]"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 text-violet-500 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
                    Previous · Theme {prevCourse.num}
                  </span>
                  <span className="mt-0.5 block truncate text-[14px] font-semibold text-[#1e1b2e]">
                    {prevCourse.title}
                  </span>
                </span>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
            {nextCourse ? (
              <button
                onClick={() => onNavigate(nextCourse.id)}
                className="group flex items-center justify-end gap-3 rounded-2xl border border-violet-100 bg-white p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_16px_36px_-20px_rgba(124,58,237,0.4)]"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
                    Next · Theme {nextCourse.num}
                  </span>
                  <span className="mt-0.5 block truncate text-[14px] font-semibold text-[#1e1b2e]">
                    {nextCourse.title}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-violet-500 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
          </nav>

          {/* Course tile + end mark */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#ece8f7] pt-8">
            <div className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-white px-4 py-3">
              <CourseIcon icon={course.icon} accent={course.accent} size={36} />
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-violet-600">
                  Theme {course.num}
                </div>
                <div className="text-[13.5px] font-semibold text-[#1e1b2e]">{course.title}</div>
              </div>
            </div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#8b86a0]">
              End of briefing · Excelra Learning Repository
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------------
   Section — editorial section wrapper: mono-label + hairline pattern
   above a display-font heading, with a whileInView entrance.
   -------------------------------------------------------------------- */
function Section({
  id,
  index,
  title,
  className,
  children,
}: {
  id: string;
  index: number;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      aria-labelledby={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      <div className="flex items-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
          Section {String(index).padStart(2, "0")}
        </span>
      </div>
      <h2
        id={id}
        className="mt-2 text-[1.3rem] font-semibold tracking-tight text-[#1e1b2e]"
        style={DISPLAY_FONT}
      >
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}
