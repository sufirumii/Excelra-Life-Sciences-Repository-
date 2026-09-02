"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  CloudRain,
  Waves,
  Trees,
  Wind,
  Radio,
  Moon,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------
   Procedural ASMR sound engine (Web Audio API).
   Generates ambient soundscapes entirely client-side — no external
   audio files required, so it always works offline.
   -------------------------------------------------------------------- */
type SceneId =
  | "rain"
  | "ocean"
  | "forest"
  | "wind"
  | "white"
  | "brown"
  | "night";

interface Scene {
  id: SceneId;
  label: string;
  icon: React.ReactNode;
  color: string;
  blurb: string;
}

const SCENES: Scene[] = [
  { id: "rain", label: "Rain", icon: <CloudRain className="h-5 w-5" />, color: "#60a5fa", blurb: "Steady rainfall on a quiet roof." },
  { id: "ocean", label: "Ocean", icon: <Waves className="h-5 w-5" />, color: "#22d3ee", blurb: "Rolling waves at low tide." },
  { id: "forest", label: "Forest", icon: <Trees className="h-5 w-5" />, color: "#34d399", blurb: "Dappled birdsong & leaf-rustle." },
  { id: "wind", label: "Wind", icon: <Wind className="h-5 w-5" />, color: "#a78bfa", blurb: "Soft wind across open fields." },
  { id: "white", label: "White Noise", icon: <Radio className="h-5 w-5" />, color: "#f0abfc", blurb: "Even broadband hiss for focus." },
  { id: "brown", label: "Brown Noise", icon: <Radio className="h-5 w-5" />, color: "#c4b5fd", blurb: "Deep rumble, calming & low." },
  { id: "night", label: "Night", icon: <Moon className="h-5 w-5" />, color: "#818cf8", blurb: "Crickets under a still moon." },
];

class SoundEngine {
  ctx: AudioContext | null = null;
  master: GainNode | null = null;
  nodes: AudioNode[] = [];
  running = false;

  ensure() {
    if (!this.ctx) {
      const Ctx =
        (window as unknown as { AudioContext: typeof AudioContext })
          .AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.0;
      this.master.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  private noiseBuffer(seconds = 2): AudioBuffer {
    const ctx = this.ensure();
    const len = ctx.sampleRate * seconds;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  stop() {
    this.nodes.forEach((n) => {
      try {
        (n as AudioScheduledSourceNode).stop?.();
      } catch {
        /* not a source */
      }
      try {
        n.disconnect();
      } catch {
        /* */
      }
    });
    this.nodes = [];
    this.running = false;
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    }
  }

  setVolume(v: number) {
    if (!this.master || !this.ctx) return;
    this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.15);
  }

  play(scene: SceneId) {
    this.stop();
    const ctx = this.ensure();
    if (ctx.state === "suspended") ctx.resume();
    const master = this.master!;
    master.gain.value = master.gain.value || 0.001;

    const makeNoise = (type: "white" | "brown" | "pink") => {
      const src = ctx.createBufferSource();
      const buf = this.noiseBuffer(3);
      if (type !== "white") {
        const d = buf.getChannelData(0);
        let last = 0;
        for (let i = 0; i < d.length; i++) {
          const white = Math.random() * 2 - 1;
          if (type === "brown") {
            last = (last + 0.02 * white) / 1.02;
            d[i] = last * 3.5;
          } else {
            // pink-ish via simple filter
            d[i] = (white + last) / 2;
            last = d[i];
          }
        }
      }
      src.buffer = buf;
      src.loop = true;
      src.start();
      this.nodes.push(src);
      return src;
    };

    if (scene === "rain") {
      const src = makeNoise("white");
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 600;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 4200;
      src.connect(hp).connect(lp).connect(master);
      // gentle amplitude wobble
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.6;
      lfoGain.gain.value = 0.08;
      lfo.connect(lfoGain).connect(master.gain);
      lfo.start();
      this.nodes.push(lfo, lfoGain);
    } else if (scene === "ocean") {
      const src = makeNoise("pink");
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 1100;
      src.connect(lp).connect(master);
      // slow swell
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.12;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.4;
      lfo.connect(lfoGain).connect(lp.frequency);
      lfo.start();
      this.nodes.push(lfo, lfoGain);
    } else if (scene === "forest") {
      const src = makeNoise("pink");
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 2600;
      src.connect(lp).connect(master);
      // bird chirps: short sine blips at random intervals
      const chirp = () => {
        if (!this.running) return;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 1800 + Math.random() * 1400;
        g.gain.value = 0;
        osc.connect(g).connect(master);
        const t = ctx.currentTime;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.05, t + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.start(t);
        osc.stop(t + 0.25);
      };
      const interval = setInterval(chirp, 1400);
      (this as unknown as { _forest?: number })._forest = interval as unknown as number;
    } else if (scene === "wind") {
      const src = makeNoise("brown");
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 420;
      bp.Q.value = 0.6;
      src.connect(bp).connect(master);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.08;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 240;
      lfo.connect(lfoGain).connect(bp.frequency);
      lfo.start();
      this.nodes.push(lfo, lfoGain);
    } else if (scene === "white") {
      const src = makeNoise("white");
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 8000;
      src.connect(lp).connect(master);
    } else if (scene === "brown") {
      const src = makeNoise("brown");
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 500;
      src.connect(lp).connect(master);
    } else if (scene === "night") {
      // cricket base: amplitude-modulated high oscillator
      const src = makeNoise("white");
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 4500;
      bp.Q.value = 12;
      src.connect(bp);
      const g = ctx.createGain();
      g.gain.value = 0.015;
      bp.connect(g).connect(master);
      // pulsing
      const lfo = ctx.createOscillator();
      lfo.type = "square";
      lfo.frequency.value = 5;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.02;
      lfo.connect(lfoGain).connect(g.gain);
      lfo.start();
      this.nodes.push(src, bp, g, lfo, lfoGain);
    }

    this.running = true;
    master.gain.setTargetAtTime(this._vol ?? 0.5, ctx.currentTime, 0.3);
  }

  _vol = 0.5;
  setTargetVolume(v: number) {
    this._vol = v;
  }
}

export function CourseRelaxer({ onClose }: { onClose: () => void }) {
  const [scene, setScene] = useState<SceneId>("rain");
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [bgReady, setBgReady] = useState(false);
  const engineRef = useRef<SoundEngine | null>(null);

  useEffect(() => {
    if (!engineRef.current) engineRef.current = new SoundEngine();
    const e = engineRef.current;
    e.setTargetVolume(volume);
    if (playing) e.setVolume(volume);
    return () => {};
  }, [volume, playing]);

  // Lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      engineRef.current?.stop();
    };
  }, []);

  const togglePlay = useCallback(() => {
    const e = engineRef.current!;
    if (playing) {
      e.stop();
      setPlaying(false);
    } else {
      e.play(scene);
      setPlaying(true);
    }
  }, [playing, scene]);

  const selectScene = useCallback(
    (id: SceneId) => {
      setScene(id);
      if (playing) {
        engineRef.current?.play(id);
      }
    },
    [playing]
  );

  const activeScene = SCENES.find((s) => s.id === scene)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Background — a rich aurora gradient sits UNDERNEATH the photo, so the
          scene always looks finished even for the first paint; the photo
          (preloaded + optimized) fades in on top once decoded. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#3b2d68_0%,#241d43_45%,#171226_100%)]" />
      <img
        src="/excelra/main-ui-background.jpg"
        alt=""
        aria-hidden
        draggable={false}
        onLoad={() => setBgReady(true)}
        onError={() => setBgReady(false)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          bgReady ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/55 via-[#1e1b2e]/45 to-fuchsia-950/55" />
      <div className="absolute inset-0 xl-grid-bg opacity-20" />

      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute left-10 top-20 h-40 w-40 rounded-full bg-violet-400/30 blur-3xl xl-animate-float" />
      <div
        className="pointer-events-none absolute right-16 bottom-24 h-52 w-52 rounded-full bg-fuchsia-400/25 blur-3xl xl-animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between p-5 sm:p-7">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span className="text-[13px] font-medium">Course Relaxer</span>
        </div>
        <button
          onClick={onClose}
          className="group flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[13px] font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/20"
        >
          <X className="h-4 w-4" /> Close
        </button>
      </div>

      {/* Center hero */}
      <div className="relative z-10 flex h-[calc(100%-4rem)] flex-col items-center justify-center px-5 pb-10">
        <motion.div
          key={scene}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 backdrop-blur-md"
            style={{ background: `${activeScene.color}33`, color: activeScene.color }}
          >
            {activeScene.icon}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
            Now playing
          </div>
          <h2
            className="mt-1 text-[2rem] font-semibold text-white sm:text-[2.6rem]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            {activeScene.label}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] text-white/70">
            {activeScene.blurb}
          </p>
        </motion.div>

        {/* Glassmorphism control deck */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 w-full max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-6"
        >
          {/* Scene selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {SCENES.map((s) => {
              const active = s.id === scene;
              return (
                <button
                  key={s.id}
                  onClick={() => selectScene(s.id)}
                  className={cn(
                    "group flex items-center gap-1.5 rounded-full px-3 py-2 text-[12.5px] font-medium transition-all",
                    active
                      ? "text-white shadow-lg"
                      : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/15"
                  )}
                  style={
                    active
                      ? {
                          background: `${s.color}cc`,
                          borderColor: s.color,
                        }
                      : undefined
                  }
                  title={s.blurb}
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Play / pause + volume */}
          <div className="mt-5 flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-violet-700 shadow-lg transition hover:scale-105"
            >
              {playing ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 translate-x-0.5" />
              )}
            </button>
            <div className="flex flex-1 items-center gap-2">
              <Volume2 className="h-4 w-4 shrink-0 text-white/60" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="xl-range"
              />
            </div>
            <span className="w-10 shrink-0 text-right font-mono text-[12px] text-white/70">
              {Math.round(volume * 100)}
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .xl-range {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          width: 100%;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
        }
        .xl-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.15s;
        }
        .xl-range::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .xl-range::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border: none;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
}
