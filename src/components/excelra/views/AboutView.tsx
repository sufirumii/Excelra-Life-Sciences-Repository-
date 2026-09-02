"use client";

import { motion } from "framer-motion";
import {
  Network,
  Cpu,
  Database,
  Workflow,
  Layers3,
  Boxes,
  ShieldCheck,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Quote,
  Handshake,
  Users,
  FlaskConical,
  Atom,
  Building2,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";
import { ABOUT_CONTENT as about } from "@/lib/excelra/data";
import { ExcelraLogo } from "@/components/excelra/ExcelraLogo";

const LAYER_ICONS = [
  <Database className="h-4 w-4" key="l0" />,
  <Workflow className="h-4 w-4" key="l1" />,
  <Network className="h-4 w-4" key="l2" />,
  <Cpu className="h-4 w-4" key="l3" />,
  <Layers3 className="h-4 w-4" key="l4" />,
];

/* Real, sourced figures — from Excelra's official company profile & product
   materials (excelra.com). No illustrative / fabricated chart data. */
const FACT_TILES = [
  {
    icon: <FlaskConical className="h-4 w-4" />,
    num: "10.6M+",
    label: "Curated small molecules in GOSTAR™",
    desc: "The world's largest manually curated small-molecule SAR database.",
  },
  {
    icon: <Atom className="h-4 w-4" />,
    num: "35M+",
    label: "SAR data points",
    desc: "Structure–activity relationships ready to train discovery AI/ML models.",
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    num: "45,000+",
    label: "Degraders in GOSTAR™ TPD",
    desc: "Targeted protein degradation data, launched in 2024.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    num: "1000+",
    label: "Domain experts",
    desc: "Chemists, biologists, data scientists and engineers on delivery.",
  },
  {
    icon: <Handshake className="h-4 w-4" />,
    num: "135+",
    label: "Global partners",
    desc: "Biopharma, biotech, agrigenomics and diagnostics companies served.",
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    num: "6",
    label: "Global offices, 3 continents",
    desc: "Hyderabad · Boston · New Jersey · London · Ghent · Utrecht.",
  },
];

export function AboutView({ role }: { role: "learner" | "admin" }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.18),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        {/* ===== HERO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start gap-6 rounded-3xl border border-violet-100 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(124,58,237,0.35)] sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div className="max-w-2xl">
            {/* Embedded wordmark — sits directly on the card, no surrounding box */}
            <ExcelraLogo height={22} className="mb-4" />
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
              About Excelra
            </div>
            <h1
              className="text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-[#1e1b2e] sm:text-[2.6rem]"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              {about.headline}
            </h1>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#5b5570]">
              {about.intro}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50/50 px-3 py-1 font-mono text-[11px] text-violet-700"
                >
                  <MapPin className="h-3 w-3" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid w-full grid-cols-2 gap-3 sm:w-auto sm:grid-cols-1 sm:gap-2"
          >
            {about.stats.slice(0, 4).map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/40 px-4 py-3"
              >
                <div
                  className="text-[1.7rem] font-bold leading-none xl-grad-text"
                  style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                >
                  {s.num}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#8b86a0]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== NARRATIVE ===== */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2
              className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              From raw data to decisions that move research forward.
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-[14.5px] leading-[1.8] text-[#4a4560]"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Pull-quote card — enriched so the height carries real substance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-600 via-violet-500 to-fuchsia-500 p-7 text-white"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-fuchsia-300/20 blur-2xl" />
            <div className="relative">
              <Quote className="h-8 w-8 text-white/70" />
              <p className="mt-4 text-[19px] font-medium leading-snug">
                “You need more than data. That's why data means more to us.”
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/85">
                Founded in 2016 and headquartered in Hyderabad, Excelra has grown
                into a global life-sciences informatics partner — pairing deep
                scientific expertise with AI-ready data platforms so research
                teams move from raw data to confident decisions, faster.
              </p>
            </div>

            <div className="relative mt-6 flex flex-col gap-2.5">
              <MiniFact
                icon={<Handshake className="h-3.5 w-3.5" />}
                text="16 of the top 20 global biopharma companies partner with Excelra"
              />
              <MiniFact
                icon={<Database className="h-3.5 w-3.5" />}
                text="GOSTAR™ — 10.6M+ molecules · 35M+ SAR data points"
              />
              <MiniFact
                icon={<MapPin className="h-3.5 w-3.5" />}
                text="Six offices across the US, Europe and India"
              />
            </div>

            <div className="relative mt-6 flex items-center gap-3 border-t border-white/20 pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-mono text-[11px] font-bold">
                E
              </div>
              <div>
                <div className="text-[13px] font-semibold">Excelra</div>
                <div className="font-mono text-[10px] text-white/70">
                  Life Sciences Informatics
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== VALUES — full-width row so columns stay balanced ===== */}
        <section className="mt-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-violet-100 bg-white p-5"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h4 className="text-[15px] font-semibold text-[#1e1b2e]">
                  {v.title}
                </h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#5b5570]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== EXCELRA AT A GLANCE — real, sourced figures ===== */}
        <section className="mt-16">
          <SectionLabel>Excelra at a glance</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            The numbers behind the science.
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#5b5570]">
            Sourced from Excelra&apos;s official company profile and product
            materials — real figures you can cite to any stakeholder, not
            illustrative placeholders.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Flagship penetration — a real, verifiable ratio */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-600 via-violet-500 to-fuchsia-500 p-6 text-white sm:col-span-2 lg:col-span-3"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                    <BadgeCheck className="h-4 w-4" />
                    Trust marker
                  </div>
                  <div
                    className="mt-2 text-[2rem] font-bold leading-none sm:text-[2.4rem]"
                    style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                  >
                    16 of the top 20
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/85">
                    global biopharma companies choose Excelra as their data
                    partner — a level of top-pharma penetration few data
                    organisations can claim.
                  </p>
                </div>
                <div className="w-full max-w-xs shrink-0">
                  <div className="flex items-end justify-between font-mono text-[10.5px] text-white/80">
                    <span>TOP-20 PHARMA PENETRATION</span>
                    <span className="text-[13px] font-bold text-white">80%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/25">
                    <motion.div
                      className="h-full rounded-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px] text-white/75">
                    <CalendarDays className="h-3 w-3" />
                    Founded 2016 · Hyderabad HQ · ~9 years of scale
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Real fact tiles */}
            {FACT_TILES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="group rounded-2xl border border-violet-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_40px_-22px_rgba(124,58,237,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    {f.icon}
                  </div>
                </div>
                <div
                  className="mt-3 text-[1.65rem] font-bold leading-none text-[#1e1b2e]"
                  style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                >
                  {f.num}
                </div>
                <div className="mt-1.5 text-[13px] font-semibold text-[#3f3a55]">
                  {f.label}
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-[#5b5570]">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-4 font-mono text-[10.5px] text-[#b6b0c8]">
            Source: Excelra official website &amp; product materials
            (excelra.com), 2025.
          </p>
        </section>

        {/* ===== ARCHITECTURE DIAGRAM ===== */}
        <section className="mt-16">
          <SectionLabel>Platform architecture</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            A layered, AI-ready data platform.
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#5b5570]">
            Excelra's platform moves data from raw, fragmented sources through
            harmonization, a knowledge graph, and an AI/ML engine into analytics
            and decision support — without compromising compliance or trust.
          </p>

          <div className="mt-7 flex flex-col gap-2.5">
            {about.architectureLayers.map((layer, i) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 transition hover:border-violet-300"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow"
                  style={{
                    background: `linear-gradient(135deg, hsl(${
                      265 + i * 12
                    } 70% 60%), hsl(${290 + i * 12} 70% 65%))`,
                  }}
                >
                  {LAYER_ICONS[i]}
                </div>
                <div className="flex-1">
                  <div className="text-[14.5px] font-semibold text-[#1e1b2e]">
                    {layer.layer}
                  </div>
                  <div className="text-[12.5px] text-[#5b5570]">{layer.desc}</div>
                </div>
                <div className="hidden font-mono text-[11px] text-[#b6b0c8] sm:block">
                  L{i}
                </div>
                {/* flow connectors */}
                {i < about.architectureLayers.length - 1 && (
                  <div className="absolute -bottom-2.5 left-1/2 h-2.5 w-px -translate-x-1/2 bg-violet-200" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Standards chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8b86a0]">
              Standards we work with:
            </span>
            {about.standards.map((s) => (
              <span
                key={s}
                className="rounded-full border border-violet-200 bg-violet-50/50 px-3 py-1 text-[12px] font-medium text-violet-700"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ===== VALUE CHAIN ===== */}
        <section className="mt-16">
          <SectionLabel>Across the value chain</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            From discovery to post-launch.
          </h2>
          <div className="mt-7 flex gap-3 overflow-x-auto pb-3">
            {about.valueChain.map((v, i) => (
              <motion.div
                key={v.stage}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex shrink-0 items-stretch"
              >
                <div className="w-44 rounded-2xl border border-violet-100 bg-white p-4">
                  <div className="mb-2 font-mono text-[10.5px] text-violet-500">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[14px] font-semibold text-[#1e1b2e]">
                    {v.stage}
                  </div>
                  <div className="mt-1 text-[12px] leading-relaxed text-[#5b5570]">
                    {v.desc}
                  </div>
                </div>
                {i < about.valueChain.length - 1 && (
                  <div className="flex items-center px-1 text-violet-300">
                    <ArrowUpRight className="h-4 w-4 -rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== AI USE CASES ===== */}
        <section className="mt-16">
          <SectionLabel>AI / ML in action</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Where AI meets life-sciences data.
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#5b5570]">
            Excelra weaves AI/ML across its services — from generative chemistry
            and NLP-driven safety intake to predictive data quality and
            LLM-assisted document review — always with a human-in-the-loop for
            validation.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.aiUseCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_22px_45px_-22px_rgba(124,58,237,0.4)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-100/50 blur-2xl transition group-hover:bg-violet-200/60" />
                <div className="relative flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-violet-50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-600">
                    {u.stage}
                  </span>
                </div>
                <h4 className="relative mt-3 text-[15px] font-semibold text-[#1e1b2e]">
                  {u.title}
                </h4>
                <p className="relative mt-1 text-[12.5px] leading-relaxed text-[#5b5570]">
                  {u.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="mt-16">
          <SectionLabel>What we do</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Six service pillars.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {about.services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-white p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Boxes className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1e1b2e]">
                    {s.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#5b5570]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className="mt-16">
          <SectionLabel>Our journey</SectionLabel>
          <h2
            className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#1e1b2e]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Milestones.
          </h2>
          <div className="relative mt-7 pl-4">
            <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-violet-400 via-violet-200 to-transparent" />
            {about.timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative mb-5 pl-6"
              >
                <span className="absolute -left-[18px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-violet-500 shadow" />
                <div className="font-mono text-[12px] font-semibold text-violet-600">
                  {t.year}
                </div>
                <div className="text-[14px] text-[#3f3a55]">{t.event}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CLOSING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/50 p-8 text-center"
        >
          <ExcelraLogo height={28} />
          <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-relaxed text-[#2d2a3e]">
            {about.closingLine}
          </p>
        </motion.div>

        <div className="h-20" />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
        {children}
      </span>
    </div>
  );
}

function MiniFact({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/20">
        {icon}
      </span>
      <span className="text-[12px] font-medium leading-snug">{text}</span>
    </div>
  );
}