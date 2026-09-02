"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useSession } from "@/lib/excelra/session";

const BOOT_SEQUENCE = [
  "Initializing learning repository…",
  "Authenticating session credentials…",
  "Loading course catalogue (7 modules)…",
  "Calibrating data-integrity services…",
  "Welcome aboard.",
];

export function TransitionScreen() {
  const setPhase = useSession((s) => s.setPhase);
  const [step, setStep] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    // ~5 seconds of boot statements, then hand off to the main UI.
    const per = 950; // ms per statement
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_SEQUENCE.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), per * (i + 1)));
    });
    const handoff = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        setPhase("app");
      }
    }, per * BOOT_SEQUENCE.length + 500);
    timers.push(handoff);
    return () => timers.forEach(clearTimeout);
  }, [setPhase]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Light purple touches — soft lilac glows + faint grid, nothing boxed */}
      <div className="pointer-events-none absolute inset-0 xl-grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.2),transparent_60%)] blur-2xl" />

      {/* Single-axis layout: statements (left) · logo (right), vertically aligned */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-12 px-8 py-16 sm:px-12 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        {/* LEFT — system loading statements, plain black text, no container */}
        <div className="w-full max-w-xl">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-violet-600">
            System Boot
          </div>
          <h1
            className="text-[2rem] font-semibold leading-tight text-[#1e1b2e] sm:text-[2.35rem]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Securing your{" "}
            <span className="xl-grad-text">session.</span>
          </h1>

          <div className="mt-9 flex flex-col gap-3.5">
            {BOOT_SEQUENCE.map((line, i) => {
              const state =
                i < step ? "done" : i === step ? "active" : "pending";
              return <BootLine key={i} line={line} state={state} />;
            })}
          </div>

          {/* progress bar */}
          <div className="mt-9 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-violet-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
              initial={{ width: "0%" }}
              animate={{
                width: `${Math.min(100, (step / BOOT_SEQUENCE.length) * 100)}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#8b86a0]">
            {Math.min(100, Math.round((step / BOOT_SEQUENCE.length) * 100))}% ·
            please wait
          </div>
        </div>

        {/* RIGHT — the helix visual that already lived on this screen, kept
            small and completely clean: nothing written above or below it. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="hidden items-center justify-center lg:flex"
        >
          <div className="relative flex items-center justify-center">
            {/* soft lilac halo directly behind the visual */}
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18),transparent_65%)] blur-2xl" />
            <img
              src="/excelra/login-background.webp"
              alt="DNA sequencing visual"
              className="relative w-44 select-none rounded-full shadow-[0_24px_60px_-24px_rgba(124,58,237,0.45)]"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile: the same small helix visual, nothing written below it */}
      <div className="pointer-events-none absolute bottom-5 left-0 right-0 z-10 flex justify-center lg:hidden">
        <img
          src="/excelra/login-background.webp"
          alt="DNA sequencing visual"
          className="w-14 select-none rounded-full shadow-[0_12px_28px_-12px_rgba(124,58,237,0.45)]"
          draggable={false}
        />
      </div>
    </div>
  );
}

function BootLine({
  line,
  state,
}: {
  line: string;
  state: "pending" | "active" | "done";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-3 font-mono text-[13.5px] ${
        state === "pending" ? "text-black/35" : "text-black"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          state === "done"
            ? "bg-violet-600 text-white"
            : state === "active"
            ? "bg-violet-100 text-violet-600"
            : "bg-violet-50 text-violet-300"
        }`}
      >
        {state === "done" ? (
          <Check className="h-3 w-3" />
        ) : state === "active" ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        )}
      </span>
      <span>{line}</span>
    </motion.div>
  );
}
