"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/excelra/session";
import { LoginScreen } from "@/components/excelra/LoginScreen";
import { TransitionScreen } from "@/components/excelra/TransitionScreen";
import { AppShell } from "@/components/excelra/AppShell";

export default function Page() {
  const phase = useSession((s) => s.phase);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Wait for the persisted store to rehydrate from localStorage.
    let mounted = true;
    const check = () => {
      const api = (useSession as unknown as {
        persist?: { hasHydrated?: () => boolean };
      }).persist;
      if (api?.hasHydrated?.()) {
        if (mounted) setHydrated(true);
      } else {
        // poll a few times then give up and render anyway
        setTimeout(check, 80);
      }
    };
    check();
    // safety timeout: always render after 600ms
    const t = setTimeout(() => mounted && setHydrated(true), 600);
    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-200 border-t-violet-600" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#8b86a0]">
            Loading…
          </span>
        </div>
      </div>
    );
  }

  if (phase === "login") return <LoginScreen />;
  if (phase === "transition") return <TransitionScreen />;
  return <AppShell />;
}
