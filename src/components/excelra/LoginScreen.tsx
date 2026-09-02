"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, GraduationCap, Loader2 } from "lucide-react";
import { ExcelraLogo } from "./ExcelraLogo";
import { useSession } from "@/lib/excelra/session";
import { toast } from "sonner";

type Step = "role" | "learner" | "admin";

const ADMIN_USER = "shiv.subramanian@excelra.com";
const ADMIN_PASS = "123456";

export function LoginScreen() {
  const login = useSession((s) => s.login);
  const [step, setStep] = useState<Step>("role");
  const [learnerName, setLearnerName] = useState("");
  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function submitLearner() {
    if (!learnerName.trim()) {
      setError("Please enter your name to continue.");
      return;
    }
    setError("");
    setBusy(true);
    setTimeout(() => {
      login("learner", learnerName.trim());
      toast.success(`Welcome, ${learnerName.trim().split(" ")[0]}!`);
    }, 450);
  }

  function submitAdmin() {
    if (adminUser.trim() !== ADMIN_USER || adminPass !== ADMIN_PASS) {
      setError("Incorrect username or password.");
      return;
    }
    setError("");
    setBusy(true);
    setTimeout(() => {
      login("admin", "Admin");
      toast.success("Signed in as Admin");
    }, 450);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* ============ DIAGONAL DNA BACKGROUND (unboxed, top-left → bottom-right) ============ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Ambient lilac glow + faint grid behind the helix */}
        <div className="absolute inset-0 xl-grid-bg opacity-50" />
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-48 right-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.28),transparent_60%)] blur-2xl" />

        {/* The DNA helix itself — no card, no frame: it floats freely across the
            whole screen on the diagonal, entering at the top-left corner and
            exiting at the bottom-right corner. */}
        <div
          className="absolute left-1/2 top-1/2 w-[150vmax] -translate-x-1/2 -translate-y-1/2 rotate-45"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <img
            src="/excelra/dna-diagonal.png"
            alt=""
            className="block w-full select-none"
            style={{
              filter:
                "drop-shadow(0 24px 70px rgba(124, 58, 237, 0.22)) blur(0.5px)",
              opacity: 0.9,
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* ============ CONTENT — login card pushed to the LEFT ============ */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:justify-start lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="xl-card mx-auto w-full max-w-[450px] overflow-hidden rounded-[26px] border-[1.5px] border-violet-100 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.35)] lg:mx-0"
        >
          {/* Logo strip — transparent logo sits directly on the pure-white card */}
          <div className="flex items-center justify-center border-b border-violet-100/70 bg-gradient-to-b from-white to-violet-50/40 px-8 py-7">
            <ExcelraLogo height={34} priority />
          </div>

          <div className="px-8 py-9 sm:px-10">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-violet-600">
              Life Sciences Learning Repository · Fresher Edition
            </div>
            <h1
              className="text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-[#1e1b2e]"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              Where data means{" "}
              <span className="xl-grad-text">more.</span>
            </h1>

            <AnimatePresence mode="wait">
              {step === "role" && (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-9 grid grid-cols-2 gap-3"
                >
                  <RoleButton
                    icon={<GraduationCap className="h-6 w-6" />}
                    label="Learner"
                    sub="Take the courses"
                    accent="violet"
                    onClick={() => {
                      setStep("learner");
                      setError("");
                    }}
                  />
                  <RoleButton
                    icon={<ShieldCheck className="h-6 w-6" />}
                    label="Admin"
                    sub="View batch progress"
                    accent="pink"
                    onClick={() => {
                      setStep("admin");
                      setError("");
                    }}
                  />
                </motion.div>
              )}

              {step === "learner" && (
                <motion.div
                  key="learner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <BackButton onClick={() => setStep("role")} />
                  <FieldLabel>Your name</FieldLabel>
                  <input
                    type="text"
                    autoFocus
                    value={learnerName}
                    onChange={(e) => setLearnerName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitLearner()}
                    placeholder="e.g. Ananya Rao"
                    className="xl-input"
                  />
                  {error && <ErrorNote>{error}</ErrorNote>}
                  <PrimaryButton
                    onClick={submitLearner}
                    busy={busy}
                    className="mt-1 w-full"
                  >
                    Continue as Learner <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                </motion.div>
              )}

              {step === "admin" && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <BackButton onClick={() => setStep("role")} />
                  <FieldLabel>Username</FieldLabel>
                  <input
                    type="text"
                    autoFocus
                    value={adminUser}
                    onChange={(e) => setAdminUser(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitAdmin()}
                    placeholder="username@excelra.com"
                    className="xl-input"
                  />
                  <FieldLabel className="mt-3">Password</FieldLabel>
                  <input
                    type="password"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitAdmin()}
                    placeholder="••••••"
                    className="xl-input"
                  />
                  {error && <ErrorNote>{error}</ErrorNote>}
                  <PrimaryButton
                    onClick={submitAdmin}
                    busy={busy}
                    className="mt-1 w-full"
                  >
                    Sign in as Admin <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <p className="mt-3 text-center text-[11px] text-[#8b86a0]">
                    Demo credentials:{" "}
                    <span className="font-mono text-violet-600">
                      {ADMIN_USER}
                    </span>{" "}
                    ·{" "}
                    <span className="font-mono text-violet-600">{ADMIN_PASS}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 text-center font-mono text-[10px] tracking-wider text-[#8b86a0]">
        EXCELRA LIFE SCIENCES LEARNING REPOSITORY — FRESHER EDITION · INTERNAL USE ·
        CONFIDENTIAL
      </div>

      {/* Local design tokens for inputs/buttons */}
      <style jsx global>{`
        .xl-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid #ece8f7;
          background: #fbfaff;
          color: #1e1b2e;
          font-size: 15px;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .xl-input::placeholder {
          color: #b6b0c8;
        }
        .xl-input:focus {
          outline: none;
          border-color: #a78bfa;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.16);
        }
      `}</style>
    </div>
  );
}

function RoleButton({
  icon,
  label,
  sub,
  accent,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  accent: "violet" | "pink";
  onClick: () => void;
}) {
  const ring =
    accent === "violet"
      ? "hover:border-violet-400 hover:bg-violet-50/60"
      : "hover:border-fuchsia-400 hover:bg-fuchsia-50/60";
  const iconBg =
    accent === "violet"
      ? "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white"
      : "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white";
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-2 rounded-2xl border-[1.5px] border-[#ece8f7] bg-white px-4 py-5 transition-all duration-200 hover:-translate-y-0.5 ${ring}`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${iconBg}`}
      >
        {icon}
      </span>
      <span className="text-[15px] font-semibold text-[#1e1b2e]">{label}</span>
      <span className="font-mono text-[10px] text-[#8b86a0]">{sub}</span>
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 flex items-center gap-1 text-[13px] text-[#8b86a0] transition-colors hover:text-violet-600"
    >
      <ArrowLeft className="h-3.5 w-3.5" /> Back
    </button>
  );
}

function FieldLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      className={`mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[#8b86a0] ${className}`}
    >
      {children}
    </label>
  );
}

function ErrorNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 mt-1 text-[13px] font-medium text-rose-500">{children}</div>
  );
}

function PrimaryButton({
  children,
  onClick,
  busy,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  busy?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={busy}
      className={`group relative mt-4 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500 px-5 py-3 text-[15px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(124,58,237,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(124,58,237,0.7)] disabled:opacity-70 ${className}`}
    >
      {busy ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <span className="flex items-center gap-2">{children}</span>
      )}
    </button>
  );
}
