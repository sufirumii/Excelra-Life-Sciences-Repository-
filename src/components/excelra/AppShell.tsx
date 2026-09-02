"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Home, BookOpen, Info, Sparkles, ChevronRight } from "lucide-react";
import { ExcelraLogo } from "./ExcelraLogo";
import { useSession } from "@/lib/excelra/session";
import { HomeView } from "./views/HomeView";
import { CoursesView } from "./views/CoursesView";
import { AboutView } from "./views/AboutView";
import { CourseRelaxer } from "./CourseRelaxer";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type ViewId = "home" | "courses" | "about";

export function AppShell() {
  const role = useSession((s) => s.role);
  const name = useSession((s) => s.name);
  const logout = useSession((s) => s.logout);
  const [view, setView] = useState<ViewId>("home");
  const [relaxerOpen, setRelaxerOpen] = useState(false);

  // Pre-warm the Course Relaxer background so the overlay opens instantly
  // (previously this 5.7K-px image was fetched only when the overlay opened).
  useEffect(() => {
    const img = new Image();
    img.src = "/excelra/main-ui-background.jpg";
  }, []);

  const go = useCallback(
    (v: ViewId) => {
      setView(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const navLinks: {
    id: ViewId | "relaxer";
    label: string;
    icon: React.ReactNode;
    learnerOnly?: boolean;
  }[] = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    {
      id: "courses",
      label: role === "admin" ? "Progress" : "Courses",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "relaxer",
      label: "Course Relaxer",
      icon: <Sparkles className="h-4 w-4" />,
      learnerOnly: true,
    },
    { id: "about", label: "About Excelra", icon: <Info className="h-4 w-4" /> },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaff]">
      {/* ===== STICKY TOP NAV ===== */}
      <header className="sticky top-0 z-40 border-b border-violet-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-6">
            <button
              onClick={() => go("home")}
              className="flex items-center transition hover:opacity-75"
              aria-label="Excelra home"
            >
              <ExcelraLogo height={24} priority />
            </button>
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks
                .filter((l) => !l.learnerOnly || role === "learner")
                .map((l) => {
                  const active =
                    l.id === "relaxer" ? relaxerOpen : view === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => {
                        if (l.id === "relaxer") {
                          setRelaxerOpen(true);
                        } else {
                          go(l.id as ViewId);
                        }
                      }}
                      className={cn(
                        "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors",
                        active
                          ? "bg-violet-100 text-violet-700"
                          : "text-[#5b5570] hover:bg-violet-50 hover:text-violet-700"
                      )}
                    >
                      {l.icon}
                      {l.label}
                    </button>
                  );
                })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/60 px-3 py-1 font-mono text-[11px] text-violet-700 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              {role === "admin" ? "ADMIN" : name || "LEARNER"}
            </span>
            <button
              onClick={() => {
                logout();
                toast("Signed out.");
              }}
              className="flex items-center gap-1.5 rounded-lg border border-violet-200 bg-white px-3 py-2 text-[13px] font-medium text-[#5b5570] transition hover:border-fuchsia-300 hover:text-fuchsia-600"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </div>

        {/* Mobile nav row */}
        <div className="flex items-center gap-1 overflow-x-auto border-t border-violet-100/60 px-3 py-1.5 md:hidden">
          {navLinks
            .filter((l) => !l.learnerOnly || role === "learner")
            .map((l) => {
              const active = l.id === "relaxer" ? relaxerOpen : view === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() =>
                    l.id === "relaxer"
                      ? setRelaxerOpen(true)
                      : go(l.id as ViewId)
                  }
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] font-medium transition-colors",
                    active
                      ? "bg-violet-100 text-violet-700"
                      : "text-[#5b5570] hover:bg-violet-50"
                  )}
                >
                  {l.icon}
                  {l.label}
                </button>
              );
            })}
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {view === "home" && (
              <HomeView role={role} onBrowse={() => go("courses")} />
            )}
            {view === "courses" && <CoursesView role={role} />}
            {view === "about" && <AboutView role={role} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ===== STICKY FOOTER ===== */}
      <footer className="mt-auto border-t border-violet-100 bg-white/70 py-5 text-center font-mono text-[11px] tracking-wider text-[#8b86a0] backdrop-blur">
        EXCELRA LIFE SCIENCES LEARNING REPOSITORY — FRESHER EDITION · INTERNAL USE ·
        CONFIDENTIAL
      </footer>

      {/* ===== COURSE RELAXER OVERLAY (learner) ===== */}
      <AnimatePresence>
        {relaxerOpen && (
          <CourseRelaxer onClose={() => setRelaxerOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageBackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-white px-3.5 py-2 text-[13px] font-medium text-[#5b5570] transition hover:border-violet-400 hover:text-violet-700"
    >
      <ChevronRight className="h-4 w-4 rotate-180" />
      Back to Home
    </button>
  );
}
