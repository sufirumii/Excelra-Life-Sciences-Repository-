"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Lock,
  Award,
  RotateCcw,
  Trophy,
  ArrowRight,
  Download,
  BookOpen,
} from "lucide-react";
import { findCourse, ACCENT_SOFT, type CourseModule, type AccentName } from "@/lib/excelra/data";
import { useSession } from "@/lib/excelra/session";
import { CourseIcon } from "@/components/excelra/CourseIcon";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CoursePlayer({
  courseId,
  onClose,
}: {
  courseId: string;
  onClose: () => void;
}) {
  const course = findCourse(courseId)!;
  const a = ACCENT_SOFT[course.accent];
  const progress = useSession((s) => s.progress[courseId]);
  const markModuleDone = useSession((s) => s.markModuleDone);
  const setCheck = useSession((s) => s.setCheck);
  const completeCourse = useSession((s) => s.completeCourse);

  const [activeIdx, setActiveIdx] = useState(0);
  const [showAssess, setShowAssess] = useState(false);
  const [showCert, setShowCert] = useState(false);

  const moduleDone = (idx: number) => progress.done.includes(idx);
  const completedCount = progress.done.length;
  const pct = Math.round((completedCount / course.modules.length) * 100);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const mod = course.modules[activeIdx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#fbfaff]"
      style={{ ["--ac" as string]: a.hex }}
    >
      {/* Header */}
      <header className="flex items-center gap-4 border-b border-violet-100 bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-lg border border-violet-200 bg-white px-3 py-2 text-[13px] font-medium text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Courses</span>
        </button>
        <div className="flex items-center gap-3">
          <CourseIcon icon={course.icon} accent={course.accent} size={36} />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#8b86a0]">
              {course.num} · {course.modules.length} modules
            </div>
            <h2
              className="text-[16px] font-semibold text-[#1e1b2e] sm:text-[18px]"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              {course.title}
            </h2>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden w-40 sm:block">
            <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-[#8b86a0]">
              <span>{completedCount}/{course.modules.length}</span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-violet-100">
              <motion.div
                className="h-full rounded-full"
                style={{ background: a.hex }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <button
            onClick={() => setShowAssess(true)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3.5 py-2 text-[13px] font-semibold text-white shadow transition hover:-translate-y-0.5"
          >
            <Trophy className="h-4 w-4" />
            <span className="hidden sm:inline">Final assessment</span>
          </button>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-200 text-[#8b86a0] transition hover:border-violet-400 hover:text-violet-700 lg:hidden"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — module list */}
        <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-violet-100 bg-white/60 p-3 md:block">
          <div className="mb-2 px-2 font-mono text-[10px] uppercase tracking-wider text-[#8b86a0]">
            Modules
          </div>
          <div className="flex flex-col gap-1">
            {course.modules.map((m, i) => {
              const done = moduleDone(i);
              const active = i === activeIdx;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[12.5px] transition",
                    active
                      ? "bg-violet-100 font-medium text-violet-700"
                      : "text-[#5b5570] hover:bg-violet-50"
                  )}
                >
                  {done ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-500" />
                  ) : (
                    <Circle className="h-4 w-4 shrink-0 text-violet-200" />
                  )}
                  <span className="truncate">
                    <span className="font-mono text-[10px] text-[#b6b0c8]">
                      {String(i + 1).padStart(2, "0")}{" "}
                    </span>
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <ModuleView
                  mod={mod}
                  accent={course.accent}
                  objectives={activeIdx === 0 ? course.objectives : undefined}
                  checkDone={mod.checkIdx != null ? progress.checks[String(mod.checkIdx)] : undefined}
                  onCheck={() => mod.checkIdx != null && setCheck(courseId, mod.checkIdx)}
                />

                {/* Mark done + nav */}
                <div className="mt-10 flex flex-col items-center gap-3 border-t border-violet-100 pt-6 sm:flex-row sm:justify-between">
                  <button
                    onClick={() => {
                      if (!moduleDone(activeIdx)) {
                        markModuleDone(courseId, activeIdx);
                        toast.success(`Module complete: ${mod.title}`, {
                          description: "+5 points",
                        });
                      }
                    }}
                    disabled={moduleDone(activeIdx)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition",
                      moduleDone(activeIdx)
                        ? "cursor-default bg-emerald-100 text-emerald-600"
                        : "text-white shadow hover:-translate-y-0.5"
                    )}
                    style={
                      moduleDone(activeIdx)
                        ? undefined
                        : { background: `linear-gradient(90deg, ${a.hex}, ${a.soft})` }
                    }
                  >
                    {moduleDone(activeIdx) ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Completed
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Mark module complete
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                      disabled={activeIdx === 0}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-200 text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700 disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="font-mono text-[12px] text-[#8b86a0]">
                      {activeIdx + 1} / {course.modules.length}
                    </span>
                    {activeIdx === course.modules.length - 1 ? (
                      <button
                        onClick={() => setShowAssess(true)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-2 text-[12.5px] font-semibold text-white"
                      >
                        <Trophy className="h-4 w-4" /> Assessment
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          setActiveIdx((i) =>
                            Math.min(course.modules.length - 1, i + 1)
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-200 text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Assessment modal */}
      <AnimatePresence>
        {showAssess && (
          <AssessmentDialog
            courseId={courseId}
            onClose={() => setShowAssess(false)}
            onPass={(score) => {
              completeCourse(courseId, score);
              setShowAssess(false);
              setShowCert(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Certificate */}
      <AnimatePresence>
        {showCert && (
          <CertificateDialog
            courseId={courseId}
            onClose={() => {
              setShowCert(false);
              onClose();
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* =====================================================================
   MODULE RENDERER
   ===================================================================== */
function ModuleView({
  mod,
  accent,
  objectives,
  checkDone,
  onCheck,
}: {
  mod: CourseModule;
  accent: AccentName;
  objectives?: string[];
  checkDone?: boolean;
  onCheck: () => void;
}) {
  const a = ACCENT_SOFT[accent];
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: a.hex }}>
        Module · {mod.kind}
      </div>
      <h1
        className="mt-1 text-[1.9rem] font-semibold leading-tight text-[#1e1b2e]"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        {mod.title}
      </h1>

      {mod.text && (
        <p className="mt-4 text-[15px] leading-[1.8] text-[#3f3a55]">{mod.text}</p>
      )}

      {objectives && (
        <ul className="mt-5 flex flex-col gap-2">
          {objectives.map((o, i) => (
            <li key={i} className="flex gap-2 text-[14px] text-[#4a4560]">
              <span style={{ color: a.hex }}>—</span>
              {o}
            </li>
          ))}
        </ul>
      )}

      {/* process */}
      {mod.kind === "process" && mod.stages && (
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            {mod.stages.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="rounded-lg border px-3 py-2 font-mono text-[12px] font-medium"
                  style={{ borderColor: `${a.hex}40`, background: a.tint, color: a.hex }}
                >
                  {s}
                </span>
                {i < mod.stages!.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-[#b6b0c8]" />
                )}
              </div>
            ))}
          </div>
          {(mod.inputs || mod.outputs) && (
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <IoBox label="Inputs" body={mod.inputs!} accent={a.hex} />
              <IoBox label="Outputs" body={mod.outputs!} accent={a.hex} />
            </div>
          )}
        </div>
      )}

      {/* glossary */}
      {mod.kind === "glossary" && mod.terms && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {mod.terms.map((g, i) => (
            <div key={i} className="rounded-xl border border-violet-100 bg-white p-4">
              <div className="text-[14px] font-semibold text-[#1e1b2e]">{g.t}</div>
              <div className="mt-1 text-[12.5px] leading-relaxed text-[#5b5570]">
                {g.d}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* people */}
      {mod.kind === "people" && mod.roles && (
        <div className="mt-6 flex flex-col gap-2.5">
          {mod.roles.map((r, i) => {
            const initials = r.role
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("");
            return (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-violet-100 bg-white p-3.5"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${a.hex}, ${a.soft})` }}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#1e1b2e]">
                    {r.role}
                  </div>
                  <div className="text-[12px] leading-relaxed text-[#5b5570]">
                    {r.desc}
                  </div>
                </div>
              </div>
            );
          })}
          {mod.consumers && (
            <div
              className="mt-2 rounded-lg border-l-2 bg-violet-50/50 px-4 py-2.5 text-[12.5px] text-[#3f3a55]"
              style={{ borderColor: a.hex }}
            >
              {mod.consumers}
            </div>
          )}
        </div>
      )}

      {/* data */}
      {mod.kind === "data" && (
        <div className="mt-6">
          {(mod.structured || mod.unstructured) && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <IoBox label="Structured Data" body={mod.structured!} accent={a.hex} />
              <IoBox label="Unstructured Data" body={mod.unstructured!} accent={a.hex} />
            </div>
          )}
          {mod.formats && (
            <div className="mt-4">
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-wider text-[#8b86a0]">
                Common file formats
              </div>
              <div className="flex flex-wrap gap-2">
                {mod.formats.map((f, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-violet-200 bg-violet-50/50 px-3 py-1 text-[12px] text-[#3f3a55]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}
          {mod.challenges && (
            <div className="mt-4">
              <div className="mb-2 font-mono text-[11px] font-semibold" style={{ color: a.hex }}>
                Typical data quality challenges
              </div>
              <ul className="flex flex-col gap-1.5">
                {mod.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-[#4a4560]">
                    <span style={{ color: a.hex }}>•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* tags */}
      {mod.kind === "tags" && mod.groups && (
        <div className="mt-6 flex flex-col gap-4">
          {mod.groups.map((g, i) => (
            <div key={i}>
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-wider text-[#8b86a0]">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, j) => (
                  <span
                    key={j}
                    className="rounded-full border px-3 py-1 text-[12px]"
                    style={{ borderColor: `${a.hex}40`, background: a.tint, color: "#3f3a55" }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* points */}
      {mod.kind === "points" && mod.items && (
        <ul className="mt-5 flex flex-col gap-2">
          {mod.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-[14px] text-[#4a4560]">
              <span style={{ color: a.hex }}>—</span>
              {it}
            </li>
          ))}
        </ul>
      )}

      {/* summary */}
      {mod.kind === "summary" && mod.takeaways && (
        <div
          className="mt-6 rounded-xl border p-5"
          style={{ borderColor: `${a.hex}40`, background: a.tint }}
        >
          <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider" style={{ color: a.hex }}>
            Key Takeaways
          </div>
          <ul className="flex flex-col gap-2">
            {mod.takeaways.map((t, i) => (
              <li key={i} className="flex gap-2 text-[14px] text-[#2d2a3e]">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: a.hex }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* references */}
      {mod.kind === "references" && mod.items && (
        <div className="mt-6 rounded-xl border border-violet-100 bg-white p-5">
          <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider" style={{ color: a.hex }}>
            Recommended further reading
          </div>
          <ul className="flex flex-col gap-1.5">
            {mod.items.map((r, i) => (
              <li key={i} className="flex gap-2 text-[13.5px] text-[#3f3a55]">
                <BookOpen className="h-3.5 w-3.5 mt-1 shrink-0 text-[#b6b0c8]" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* knowledge check */}
      {mod.checkIdx != null && (
        <div
          className="mt-7 rounded-2xl border p-5"
          style={{ borderColor: `${a.hex}50`, background: a.tint }}
        >
          <div className="mb-2 font-mono text-[10.5px] uppercase tracking-wider" style={{ color: a.hex }}>
            Knowledge check
          </div>
          <div className="text-[14px] font-medium text-[#1e1b2e]">
            Confirm you've understood this module's key concept to continue.
          </div>
          <button
            onClick={onCheck}
            disabled={checkDone}
            className={cn(
              "mt-3 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition",
              checkDone
                ? "bg-emerald-100 text-emerald-600"
                : "text-white shadow hover:-translate-y-0.5"
            )}
            style={checkDone ? undefined : { background: a.hex }}
          >
            {checkDone ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Understood
              </>
            ) : (
              "Mark as understood"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function IoBox({
  label,
  body,
  accent,
}: {
  label: string;
  body: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-violet-100 bg-white p-4">
      <div
        className="mb-1.5 font-mono text-[10.5px] uppercase tracking-wider"
        style={{ color: accent }}
      >
        {label}
      </div>
      <p className="text-[13px] leading-relaxed text-[#5b5570]">{body}</p>
    </div>
  );
}

/* =====================================================================
   ASSESSMENT DIALOG
   ===================================================================== */
function AssessmentDialog({
  courseId,
  onClose,
  onPass,
}: {
  courseId: string;
  onClose: () => void;
  onPass: (score: number) => void;
}) {
  const course = findCourse(courseId)!;
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(course.quiz.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const allAnswered = answers.every((a) => a !== null);
  const pct = Math.round((score / course.quiz.length) * 100);
  const pass = pct >= 70;

  function submit() {
    let s = 0;
    course.quiz.forEach((q, i) => {
      if (answers[i] === q.a) s++;
    });
    setScore(s);
    setSubmitted(true);
    if (Math.round((s / course.quiz.length) * 100) >= 70) {
      onPass(s);
    } else {
      toast.error("Not yet — 70% needed to pass.");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-[#1e1b2e]/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-violet-100 bg-white p-6 shadow-2xl"
      >
        {!submitted ? (
          <>
            <div className="mb-1 flex items-center justify-between">
              <h3
                className="text-[1.3rem] font-semibold text-[#1e1b2e]"
                style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
              >
                {course.title} — Final Assessment
              </h3>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-100 text-[#8b86a0] hover:text-violet-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mb-5 font-mono text-[11px] text-[#8b86a0]">
              {course.quiz.length} questions · pass with 70% or higher
            </div>
            <div className="flex flex-col gap-5">
              {course.quiz.map((q, qi) => (
                <div key={qi}>
                  <div className="mb-2 font-mono text-[10.5px] uppercase tracking-wider text-violet-600">
                    Question {qi + 1}
                  </div>
                  <div className="mb-2 text-[14.5px] font-medium text-[#1e1b2e]">
                    {q.q}
                  </div>
                  <div className="flex flex-col gap-2">
                    {q.options.map((o, oi) => {
                      const selected = answers[qi] === oi;
                      return (
                        <button
                          key={oi}
                          onClick={() =>
                            setAnswers((arr) => {
                              const n = [...arr];
                              n[qi] = oi;
                              return n;
                            })
                          }
                          className={cn(
                            "rounded-lg border px-3.5 py-2.5 text-left text-[13px] transition",
                            selected
                              ? "border-violet-500 bg-violet-50 text-violet-700"
                              : "border-violet-100 bg-white text-[#4a4560] hover:border-violet-300"
                          )}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="rounded-lg border border-violet-200 px-4 py-2 text-[13px] font-medium text-[#5b5570] hover:border-violet-300"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={!allAnswered}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-40"
              >
                <CheckCircle2 className="h-4 w-4" /> Submit answers
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div
              className={cn(
                "mx-auto flex h-16 w-16 items-center justify-center rounded-full",
                pass ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-500"
              )}
            >
              {pass ? <Award className="h-8 w-8" /> : <RotateCcw className="h-8 w-8" />}
            </div>
            <div
              className="mt-4 text-[3rem] font-bold text-[#1e1b2e]"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              {score} / {course.quiz.length}
            </div>
            <div
              className={cn(
                "mt-1 font-mono text-[13px]",
                pass ? "text-emerald-600" : "text-rose-500"
              )}
            >
              {pass
                ? "✓ Passed — course complete!"
                : "Not yet — 70% needed to pass"}
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <button
                onClick={onClose}
                className="rounded-lg border border-violet-200 px-4 py-2 text-[13px] font-medium text-[#5b5570]"
              >
                Close
              </button>
              {pass ? (
                <button
                  onClick={() => onPass(score)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-[13px] font-semibold text-white"
                >
                  <Award className="h-4 w-4" /> View certificate
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers(new Array(course.quiz.length).fill(null));
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-[13px] font-semibold text-white"
                >
                  <RotateCcw className="h-4 w-4" /> Retake
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* =====================================================================
   CERTIFICATE DIALOG
   ===================================================================== */
function CertificateDialog({
  courseId,
  onClose,
}: {
  courseId: string;
  onClose: () => void;
}) {
  const course = findCourse(courseId)!;
  const name = useSession((s) => s.name) || "Guest Learner";
  const score = useSession((s) => s.progress[courseId].quizScore) ?? 0;
  const a = ACCENT_SOFT[course.accent];
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function download() {
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 620;
    const ctx = canvas.getContext("2d")!;
    // bg
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1000, 620);
    // border
    const grad = ctx.createLinearGradient(0, 0, 1000, 620);
    grad.addColorStop(0, "#7c3aed");
    grad.addColorStop(0.55, "#a78bfa");
    grad.addColorStop(1, "#c4b5fd");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 6;
    ctx.strokeRect(18, 18, 964, 584);
    ctx.strokeStyle = "rgba(124,58,237,0.25)";
    ctx.lineWidth = 1;
    ctx.strokeRect(34, 34, 932, 552);

    ctx.textAlign = "center";
    ctx.fillStyle = "#7c3aed";
    ctx.font = '600 22px "Space Grotesk", sans-serif';
    ctx.fillText("E X C E L R A", 500, 100);
    ctx.fillStyle = "#8b86a0";
    ctx.font = '400 13px "IBM Plex Mono", monospace';
    ctx.fillText(
      "LIFE SCIENCES LEARNING REPOSITORY · FRESHER EDITION",
      500,
      126
    );
    ctx.fillStyle = a.hex;
    ctx.font = '400 15px "IBM Plex Mono", monospace';
    ctx.fillText("CERTIFICATE OF COMPLETION", 500, 210);
    ctx.fillStyle = "#1e1b2e";
    ctx.font = '700 42px "Space Grotesk", sans-serif';
    ctx.fillText(name, 500, 280);
    ctx.fillStyle = "#5b5570";
    ctx.font = '400 16px "IBM Plex Sans", sans-serif';
    ctx.fillText("has successfully completed", 500, 320);
    ctx.fillStyle = a.hex;
    ctx.font = '600 28px "Space Grotesk", sans-serif';
    ctx.fillText(course.title, 500, 365);
    ctx.fillStyle = "#8b86a0";
    ctx.font = '400 14px "IBM Plex Sans", sans-serif';
    ctx.fillText(
      `Score: ${score} / ${course.quiz.length}   ·   Issued ${today}`,
      500,
      400
    );
    ctx.fillStyle = "#b6b0c8";
    ctx.font = '400 12px "IBM Plex Mono", monospace';
    ctx.fillText("Where data means more.", 500, 560);

    const link = document.createElement("a");
    link.download = `excelra-certificate-${course.id}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Certificate downloaded");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-[#1e1b2e]/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-violet-100 px-6 py-4">
          <h3
            className="text-[1.2rem] font-semibold text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Certificate of Completion
          </h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-100 text-[#8b86a0] hover:text-violet-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Certificate visual */}
        <div className="p-6">
          <div
            className="relative mx-auto aspect-[1000/620] w-full max-w-xl overflow-hidden rounded-xl border-[3px]"
            style={{ borderColor: a.hex, background: "#ffffff" }}
          >
            <div className="absolute inset-2 border border-violet-200" />
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <div
                className="text-[13px] font-semibold tracking-[0.3em]"
                style={{ color: a.hex }}
              >
                E X C E L R A
              </div>
              <div className="mt-1 font-mono text-[8px] tracking-wider text-[#8b86a0]">
                LIFE SCIENCES LEARNING REPOSITORY
              </div>
              <div
                className="mt-5 font-mono text-[9px] tracking-[0.2em]"
                style={{ color: a.hex }}
              >
                CERTIFICATE OF COMPLETION
              </div>
              <div
                className="mt-3 text-[26px] font-bold text-[#1e1b2e]"
                style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
              >
                {name}
              </div>
              <div className="mt-1 text-[11px] text-[#5b5570]">
                has successfully completed
              </div>
              <div
                className="mt-2 text-[17px] font-semibold"
                style={{ color: a.hex }}
              >
                {course.title}
              </div>
              <div className="mt-3 font-mono text-[9px] text-[#8b86a0]">
                Score: {score} / {course.quiz.length} · Issued {today}
              </div>
              <div className="absolute bottom-4 left-0 right-0 font-mono text-[8px] text-[#b6b0c8]">
                Where data means more.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 border-t border-violet-100 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-violet-200 px-4 py-2 text-[13px] font-medium text-[#5b5570] hover:border-violet-300"
          >
            Close
          </button>
          <button
            onClick={download}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-[13px] font-semibold text-white"
          >
            <Download className="h-4 w-4" /> Download PNG
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
