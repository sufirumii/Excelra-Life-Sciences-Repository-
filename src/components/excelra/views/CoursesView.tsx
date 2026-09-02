"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  Flame,
  Gauge,
  Info,
  LifeBuoy,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COURSES, ENROLLMENTS, ACCENT_SOFT } from "@/lib/excelra/data";
import { CourseIcon } from "@/components/excelra/CourseIcon";
import type { AccentName } from "@/lib/excelra/data";

/* =====================================================================
   DERIVED BATCH DATA — every stat on the admin dashboard is computed
   from COURSES + ENROLLMENTS. No hardcoded figures.
   ===================================================================== */

interface CourseStat {
  id: string;
  num: string;
  title: string;
  accent: AccentName;
  enrolled: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  avgPct: number;
  hours: number;
  hoursPerLearner: number;
}

const COURSE_STATS: CourseStat[] = COURSES.map((c) => {
  const list = ENROLLMENTS[c.id] ?? [];
  const cap = c.modules.length || 1;
  const completed = list.filter((e) => e.modulesDone >= cap).length;
  const notStarted = list.filter((e) => e.modulesDone <= 0).length;
  const totalMin = list.reduce((s, e) => s + e.timeMin, 0);
  return {
    id: c.id,
    num: c.num,
    title: c.title,
    accent: c.accent,
    enrolled: list.length,
    completed,
    inProgress: list.length - completed - notStarted,
    notStarted,
    avgPct: list.length
      ? list.reduce((s, e) => s + (e.modulesDone / cap) * 100, 0) / list.length
      : 0,
    hours: totalMin / 60,
    hoursPerLearner: list.length ? totalMin / 60 / list.length : 0,
  };
});

interface LearnerCell {
  pct: number;
  modulesDone: number;
  timeMin: number;
}

interface LearnerStat {
  name: string;
  initials: string;
  courseIds: string[];
  modulesDone: number;
  modulesCap: number;
  avgPct: number;
  timeMin: number;
  cells: Record<string, LearnerCell | undefined>;
}

const LEARNER_STATS: LearnerStat[] = (() => {
  const map = new Map<string, LearnerStat>();
  for (const c of COURSES) {
    const cap = c.modules.length || 1;
    for (const e of ENROLLMENTS[c.id] ?? []) {
      let l = map.get(e.name);
      if (!l) {
        l = {
          name: e.name,
          initials: e.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join(""),
          courseIds: [],
          modulesDone: 0,
          modulesCap: 0,
          avgPct: 0,
          timeMin: 0,
          cells: {},
        };
        map.set(e.name, l);
      }
      l.courseIds.push(c.id);
      l.modulesDone += e.modulesDone;
      l.modulesCap += cap;
      l.timeMin += e.timeMin;
      l.cells[c.id] = {
        pct: Math.round((e.modulesDone / cap) * 100),
        modulesDone: e.modulesDone,
        timeMin: e.timeMin,
      };
    }
  }
  const arr = Array.from(map.values());
  for (const l of arr) l.avgPct = l.modulesCap ? (l.modulesDone / l.modulesCap) * 100 : 0;
  return arr.sort(
    (a, b) => b.avgPct - a.avgPct || b.timeMin - a.timeMin || a.name.localeCompare(b.name)
  );
})();

const BATCH = (() => {
  const totalEnrollments = COURSE_STATS.reduce((s, c) => s + c.enrolled, 0);
  const completedEnrollments = COURSE_STATS.reduce((s, c) => s + c.completed, 0);
  const notStartedEnrollments = COURSE_STATS.reduce((s, c) => s + c.notStarted, 0);
  const modulesDone = LEARNER_STATS.reduce((s, l) => s + l.modulesDone, 0);
  const modulesCap = LEARNER_STATS.reduce((s, l) => s + l.modulesCap, 0);
  const totalMin = LEARNER_STATS.reduce((s, l) => s + l.timeMin, 0);
  return {
    learners: LEARNER_STATS.length,
    totalEnrollments,
    completedEnrollments,
    inProgressEnrollments: totalEnrollments - completedEnrollments - notStartedEnrollments,
    notStartedEnrollments,
    overallAvgPct: modulesCap ? (modulesDone / modulesCap) * 100 : 0,
    completedPct: totalEnrollments
      ? Math.round((completedEnrollments / totalEnrollments) * 100)
      : 0,
    totalHours: totalMin / 60,
    hoursPerEnrollment: totalEnrollments ? totalMin / 60 / totalEnrollments : 0,
  };
})();

const SIGNALS = (() => {
  const ranked = COURSE_STATS.filter((c) => c.enrolled > 0);
  return {
    top: [...ranked].sort((a, b) => b.avgPct - a.avgPct)[0],
    low: [...ranked].sort((a, b) => a.avgPct - b.avgPct || b.notStarted - a.notStarted)[0],
    engaged: [...LEARNER_STATS].sort((a, b) => b.timeMin - a.timeMin)[0],
  };
})();

/* Chart datasets */
const COMPLETION_DATA = [...COURSE_STATS]
  .sort((a, b) => b.num.localeCompare(a.num))
  .map((c) => ({ ...c, label: `${c.num} · ${c.title}`, avg: Math.round(c.avgPct * 10) / 10 }));

const HOURS_DATA = COURSE_STATS.map((c) => ({
  num: c.num,
  title: c.title,
  hours: Math.round(c.hours * 10) / 10,
  perLearner: Math.round(c.hoursPerLearner * 10) / 10,
}));

const MOMENTUM_DATA = LEARNER_STATS.map((l) => ({
  name: l.name,
  avgPct: Math.round(l.avgPct * 10) / 10,
  hours: Math.round((l.timeMin / 60) * 10) / 10,
  courses: l.courseIds.length,
}));

const STATUS_DATA = [
  { name: "Completed", value: BATCH.completedEnrollments, color: "#10b981" },
  { name: "In progress", value: BATCH.inProgressEnrollments, color: "#7c3aed" },
  { name: "Not started", value: BATCH.notStartedEnrollments, color: "#c4b5fd" },
].filter((d) => d.value > 0);

/* Shared style tokens */
const DISPLAY = { fontFamily: "var(--font-display), system-ui, sans-serif" } as const;
const ICON_VIOLET =
  "bg-violet-50 text-violet-500 group-hover:bg-violet-600 group-hover:text-white";
const ICON_EMERALD =
  "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white";
const ICON_FUCHSIA =
  "bg-fuchsia-50 text-fuchsia-500 group-hover:bg-fuchsia-500 group-hover:text-white";
const ICON_AMBER = "bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white";

/* =====================================================================
   ROOT VIEW
   ===================================================================== */

export function CoursesView({
  role,
}: {
  role: "learner" | "admin";
}) {
  const [batchCourse, setBatchCourse] = useState<string | null>(null);
  const isAdmin = role === "admin";

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.14),transparent_70%)]" />
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        {isAdmin ? <AdminHeader /> : <LearnerHeader />}

        {isAdmin && <AdminDashboard />}

        {/* Function cards grid */}
        <div className={isAdmin ? "mt-12" : "mt-8"}>
          {isAdmin && (
            <SectionHead
              label="Functions"
              title="Open a function for per-learner detail."
            />
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <CourseCard
                key={course.id}
                num={course.num}
                icon={course.icon}
                accent={course.accent}
                title={course.title}
                tagline={course.tagline}
                moduleCount={course.modules.length}
                delay={i * 0.04}
                ctaLabel={isAdmin ? "View batch progress" : "View course"}
                onClick={() =>
                  isAdmin
                    ? setBatchCourse(course.id)
                    : toast(
                        "Course content is owned by its function team — it will be published here soon.",
                        { description: `${course.num} · ${course.title}` }
                      )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Batch progress dialog (admin) */}
      <AnimatePresence>
        {batchCourse && (
          <BatchProgressDialog
            courseId={batchCourse}
            onClose={() => setBatchCourse(null)}
          />
        )}
      </AnimatePresence>

      <div className="h-24" />
    </div>
  );
}

/* =====================================================================
   HEADERS
   ===================================================================== */

function LearnerHeader() {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
          The repository
        </span>
      </div>
      <h1
        className="text-[2rem] font-semibold leading-tight text-[#1e1b2e] sm:text-[2.4rem]"
        style={DISPLAY}
      >
        Seven functions, end to end.
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5b5570]">
        Each course covers the same ground: why the function exists, its
        end-to-end process, key terms, stakeholders, standards, technology,
        current challenges, and where AI fits in. Pick a topic and go.
      </p>
    </>
  );
}

function AdminHeader() {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
          The repository
        </span>
      </div>
      <h1
        className="text-[2rem] font-semibold leading-tight text-[#1e1b2e] sm:text-[2.4rem]"
        style={DISPLAY}
      >
        Batch progress, at a glance.
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5b5570]">
        Nine learners across seven functions — completion, engagement and
        momentum for the current batch. Open any function for its per-learner
        detail.
      </p>
      <div className="mt-4 inline-flex max-w-2xl items-start gap-2 rounded-lg border border-violet-200 bg-violet-50/60 px-3 py-2 text-[12.5px] leading-relaxed text-violet-700">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>
          <strong>Illustrative demo data.</strong> Every figure on this page is
          computed from the demo batch and shown for demonstration purposes —
          not production reporting.
        </span>
      </div>
    </>
  );
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-5"
    >
      <div className="flex items-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-600">
          {label}
        </span>
      </div>
      <h2
        className="mt-2 text-[1.45rem] font-semibold leading-tight text-[#1e1b2e]"
        style={DISPLAY}
      >
        {title}
      </h2>
    </motion.div>
  );
}

/* =====================================================================
   ADMIN DASHBOARD
   ===================================================================== */

function AdminDashboard() {
  return (
    <div className="mt-10">
      {/* KPI band */}
      <SectionHead label="Batch overview" title="The batch in six numbers." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <KpiTile
          icon={Users}
          label="Unique learners"
          value={String(BATCH.learners)}
          sub={`${COURSES.length} functions in the repository`}
          iconCls={ICON_VIOLET}
          delay={0}
        />
        <KpiTile
          icon={BookOpen}
          label="Total enrollments"
          value={String(BATCH.totalEnrollments)}
          sub="learner × function pairs"
          iconCls={ICON_VIOLET}
          delay={0.05}
        />
        <KpiTile
          icon={Gauge}
          label="Avg. completion"
          value={`${Math.round(BATCH.overallAvgPct)}%`}
          sub="mean across all enrollments"
          iconCls={ICON_VIOLET}
          delay={0.1}
        />
        <KpiTile
          icon={CheckCircle2}
          label="Fully completed"
          value={String(BATCH.completedEnrollments)}
          sub={`${BATCH.completedPct}% of all enrollments`}
          iconCls={ICON_EMERALD}
          delay={0.15}
        />
        <KpiTile
          icon={Clock}
          label="Time logged"
          value={`${BATCH.totalHours.toFixed(1)}h`}
          sub={`≈ ${BATCH.hoursPerEnrollment.toFixed(1)}h per enrollment`}
          iconCls={ICON_FUCHSIA}
          delay={0.2}
        />
        <KpiTile
          icon={AlertTriangle}
          label="Not started"
          value={String(BATCH.notStartedEnrollments)}
          sub="at-risk · needs a nudge"
          iconCls={ICON_AMBER}
          delay={0.25}
        />
      </div>

      {/* Chart row 1 — completion by function + status mix */}
      <div className="mt-12">
        <SectionHead
          label="Completion & engagement"
          title="How far along is each function?"
        />
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <CompletionCard />
          <DonutCard />
        </div>
      </div>

      {/* Chart row 2 — time invested + learner momentum */}
      <div className="mt-12">
        <SectionHead label="Time & momentum" title="Where the hours go." />
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <HoursCard />
          <MomentumCard />
        </div>
      </div>

      {/* Learner × course heatmap */}
      <div className="mt-12">
        <SectionHead
          label="Learner × function matrix"
          title="Every learner, every function."
        />
        <HeatmapCard />
      </div>

      {/* Insights strip */}
      <div className="mt-12">
        <SectionHead label="Signals" title="What stands out." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InsightCard
            icon={Trophy}
            label="Top function"
            value={`${Math.round(SIGNALS.top.avgPct)}%`}
            desc={`${SIGNALS.top.title} leads the batch — ${SIGNALS.top.enrolled} enrolled, ${SIGNALS.top.completed} already completed.`}
            iconCls={ICON_VIOLET}
            delay={0}
          />
          <InsightCard
            icon={LifeBuoy}
            label="Needs attention"
            value={`${Math.round(SIGNALS.low.avgPct)}%`}
            desc={`${SIGNALS.low.title} sits lowest on completion${
              SIGNALS.low.notStarted
                ? ` — ${SIGNALS.low.notStarted} learner${
                    SIGNALS.low.notStarted > 1 ? "s" : ""
                  } yet to start`
                : ""
            }.`}
            iconCls={ICON_AMBER}
            delay={0.06}
          />
          <InsightCard
            icon={Flame}
            label="Most engaged learner"
            value={`${(SIGNALS.engaged.timeMin / 60).toFixed(1)}h`}
            desc={`${SIGNALS.engaged.name} logged the most time — ${
              SIGNALS.engaged.courseIds.length
            } function${SIGNALS.engaged.courseIds.length > 1 ? "s" : ""}, ${
              SIGNALS.engaged.modulesDone
            }/${SIGNALS.engaged.modulesCap} modules done.`}
            iconCls={ICON_FUCHSIA}
            delay={0.12}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- KPI tiles ---------- */

function KpiTile({
  icon: Icon,
  label,
  value,
  sub,
  iconCls,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
  iconCls: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
      className="group rounded-2xl border border-violet-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_40px_-18px_rgba(124,58,237,0.45)]"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#8b86a0]">
          {label}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${iconCls}`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
      </div>
      <div
        className="mt-2.5 text-[1.65rem] font-bold leading-none text-[#1e1b2e]"
        style={DISPLAY}
      >
        {value}
      </div>
      <div className="mt-1.5 text-[11px] leading-snug text-[#8b86a0]">{sub}</div>
    </motion.div>
  );
}

/* ---------- Chart card shell ---------- */

function ChartCard({
  title,
  sub,
  delay = 0,
  children,
}: {
  title: string;
  sub?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className="overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-[0_18px_44px_-30px_rgba(124,58,237,0.35)] sm:p-6"
    >
      <h3 className="text-[15.5px] font-semibold text-[#1e1b2e]" style={DISPLAY}>
        {title}
      </h3>
      {sub && (
        <p className="mt-0.5 text-[12px] leading-relaxed text-[#8b86a0]">{sub}</p>
      )}
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}

function ChartTipShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-violet-100 bg-white px-3 py-2 text-[12.5px] shadow-lg">
      {children}
    </div>
  );
}

/* ---------- Chart 1a — completion by function ---------- */

function CompletionCard() {
  return (
    <ChartCard
      title="Completion by function"
      sub="Average completion across enrolled learners · 01–07, top to bottom"
      delay={0.05}
    >
      <ResponsiveContainer width="100%" height={264}>
        <BarChart
          data={COMPLETION_DATA}
          layout="vertical"
          margin={{ top: 4, right: 42, left: 0, bottom: 0 }}
          barCategoryGap="26%"
        >
          <defs>
            <linearGradient id="gradCompletion" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} stroke="#efebf9" />
          <XAxis
            type="number"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 10, fill: "#8b86a0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="label"
            width={170}
            tick={{ fontSize: 11, fill: "#5b5570" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(124,58,237,0.05)" }}
            content={<CompletionTip />}
          />
          <Bar
            dataKey="avg"
            fill="url(#gradCompletion)"
            radius={[0, 6, 6, 0]}
            barSize={14}
          >
            <LabelList
              dataKey="avg"
              position="right"
              formatter={(v: number) => `${v}%`}
              style={{ fontSize: 10, fill: "#8b86a0", fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function CompletionTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload?: (typeof COMPLETION_DATA)[number] }[];
}) {
  if (!active || !payload?.length || !payload[0]?.payload) return null;
  const d = payload[0].payload;
  return (
    <ChartTipShell>
      <div className="font-semibold text-[#1e1b2e]">
        {d.num} · {d.title}
      </div>
      <div className="mt-0.5 font-semibold text-violet-700">
        {d.avg}% avg completion
      </div>
      <div className="text-[11.5px] text-[#8b86a0]">
        {d.enrolled} enrolled · {d.completed} completed
      </div>
    </ChartTipShell>
  );
}

/* ---------- Chart 1b — enrollment status mix (donut) ---------- */

interface ActiveSliceProps {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
}

function renderActiveSlice(props: unknown) {
  const p = props as ActiveSliceProps;
  return (
    <Sector
      cx={p.cx}
      cy={p.cy}
      innerRadius={p.innerRadius}
      outerRadius={(p.outerRadius ?? 88) + 7}
      startAngle={p.startAngle}
      endAngle={p.endAngle}
      fill={p.fill}
      cornerRadius={6}
    />
  );
}

function DonutCard() {
  const [active, setActive] = useState(-1);
  const total = BATCH.totalEnrollments;
  return (
    <ChartCard
      title="Enrollment status mix"
      sub="Completed, in-progress and not-started enrollments across the batch"
      delay={0.12}
    >
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-4">
        <div className="relative w-full shrink-0 sm:w-[52%]">
          <ResponsiveContainer width="100%" height={216}>
            <PieChart>
              <Pie
                data={STATUS_DATA}
                dataKey="value"
                nameKey="name"
                innerRadius={62}
                outerRadius={88}
                paddingAngle={3}
                cornerRadius={6}
                stroke="none"
                activeIndex={active >= 0 ? active : undefined}
                activeShape={renderActiveSlice}
                onMouseEnter={(_, index) => setActive(index)}
                onMouseLeave={() => setActive(-1)}
              >
                {STATUS_DATA.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip content={<StatusTip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="text-[1.55rem] font-bold leading-none text-[#1e1b2e]"
              style={DISPLAY}
            >
              {total}
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8b86a0]">
              enrollments
            </div>
          </div>
        </div>
        <div className="w-full space-y-1.5">
          {STATUS_DATA.map((d, i) => (
            <button
              key={d.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
              className={`flex min-h-[40px] w-full items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors ${
                active === i
                  ? "border-violet-200 bg-violet-50/60"
                  : "border-transparent hover:border-violet-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: d.color }}
                />
                <span className="text-[13px] font-medium text-[#1e1b2e]">
                  {d.name}
                </span>
              </span>
              <span className="font-mono text-[11px] text-[#5b5570]">
                {d.value}
                <span className="text-[#b6b0c8]">
                  {" "}
                  · {Math.round((d.value / total) * 100)}%
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

function StatusTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload?: { name: string; value: number; color: string } }[];
}) {
  if (!active || !payload?.length || !payload[0]?.payload) return null;
  const d = payload[0].payload;
  return (
    <ChartTipShell>
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: d.color }}
        />
        <span className="font-semibold text-[#1e1b2e]">{d.name}</span>
      </div>
      <div className="mt-0.5 text-[#5b5570]">
        {d.value} enrollment{d.value === 1 ? "" : "s"} ·{" "}
        {Math.round((d.value / BATCH.totalEnrollments) * 100)}%
      </div>
    </ChartTipShell>
  );
}

/* ---------- Chart 2a — time invested per function ---------- */

function HoursCard() {
  return (
    <ChartCard
      title="Time invested per function"
      sub="Total hours logged by the batch, per function"
      delay={0.05}
    >
      <ResponsiveContainer width="100%" height={238}>
        <BarChart data={HOURS_DATA} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#efebf9" />
          <XAxis
            dataKey="num"
            tick={{ fontSize: 10.5, fill: "#8b86a0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            width={38}
            tickFormatter={(v: number) => `${v}h`}
            tick={{ fontSize: 10, fill: "#8b86a0" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ stroke: "#d6ccf5", strokeWidth: 1, strokeDasharray: "4 4" }}
            content={<HoursTip />}
          />
          <Bar
            dataKey="hours"
            fill="url(#gradHours)"
            radius={[6, 6, 0, 0]}
            barSize={30}
          >
            <LabelList
              dataKey="hours"
              position="top"
              formatter={(v: number) => `${v}h`}
              style={{ fontSize: 10, fill: "#8b86a0", fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-3 flex flex-wrap gap-x-3.5 gap-y-1 border-t border-violet-50 pt-3">
        {COURSE_STATS.map((c) => (
          <span key={c.id} className="font-mono text-[9.5px] text-[#8b86a0]">
            <span className="font-bold text-violet-600">{c.num}</span> {c.title}
          </span>
        ))}
      </div>
    </ChartCard>
  );
}

function HoursTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload?: (typeof HOURS_DATA)[number] }[];
}) {
  if (!active || !payload?.length || !payload[0]?.payload) return null;
  const d = payload[0].payload;
  return (
    <ChartTipShell>
      <div className="font-semibold text-[#1e1b2e]">
        {d.num} · {d.title}
      </div>
      <div className="mt-0.5 font-semibold text-violet-700">{d.hours}h logged</div>
      <div className="text-[11.5px] text-[#8b86a0]">
        ≈ {d.perLearner}h per enrolled learner
      </div>
    </ChartTipShell>
  );
}

/* ---------- Chart 2b — learner momentum ---------- */

function MomentumCard() {
  return (
    <ChartCard
      title="Learner momentum"
      sub="Per-learner average completion across every enrolled function, sorted descending"
      delay={0.12}
    >
      <ResponsiveContainer width="100%" height={264}>
        <AreaChart data={MOMENTUM_DATA} margin={{ top: 10, right: 12, left: 0, bottom: 4 }}>
          <defs>
            <linearGradient id="gradMomentum" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.26} />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#efebf9" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-34}
            textAnchor="end"
            height={58}
            tick={{ fontSize: 10, fill: "#5b5570" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            width={38}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 10, fill: "#8b86a0" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ stroke: "#d6ccf5", strokeWidth: 1, strokeDasharray: "4 4" }}
            content={<MomentumTip />}
          />
          <Area
            type="monotone"
            dataKey="avgPct"
            stroke="#7c3aed"
            strokeWidth={2.5}
            fill="url(#gradMomentum)"
            dot={{ r: 3.5, fill: "#ffffff", stroke: "#7c3aed", strokeWidth: 2 }}
            activeDot={{ r: 5.5, fill: "#d946ef", stroke: "#ffffff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function MomentumTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload?: (typeof MOMENTUM_DATA)[number] }[];
}) {
  if (!active || !payload?.length || !payload[0]?.payload) return null;
  const d = payload[0].payload;
  return (
    <ChartTipShell>
      <div className="font-semibold text-[#1e1b2e]">{d.name}</div>
      <div className="mt-0.5 font-semibold text-violet-700">
        {d.avgPct}% avg completion
      </div>
      <div className="text-[11.5px] text-[#8b86a0]">
        {d.hours}h logged · {d.courses} function{d.courses === 1 ? "" : "s"}
      </div>
    </ChartTipShell>
  );
}

/* ---------- Learner × course heatmap ---------- */

interface HeatTip {
  x: number;
  top: number;
  bottom: number;
  below: boolean;
  learner: string;
  course: string;
  enrolled: boolean;
  modulesDone: number;
  cap: number;
  timeMin: number;
  pct: number;
}

const HEAT_COLS = "minmax(208px, 1.5fr) repeat(7, minmax(56px, 1fr))";

function HeatmapCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<HeatTip | null>(null);

  const showTip = (
    e: React.MouseEvent<HTMLDivElement>,
    learner: LearnerStat,
    courseId: string
  ) => {
    const card = cardRef.current;
    const course = COURSES.find((c) => c.id === courseId);
    if (!card || !course) return;
    const cell = e.currentTarget.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    const info = learner.cells[courseId];
    const x = Math.min(
      Math.max(cell.left - cr.left + cell.width / 2, 128),
      Math.max(cr.width - 128, 128)
    );
    const top = cell.top - cr.top;
    setTip({
      x,
      top,
      bottom: cell.bottom - cr.top,
      below: top < 140,
      learner: learner.name,
      course: `${course.num} · ${course.title}`,
      enrolled: Boolean(info),
      modulesDone: info?.modulesDone ?? 0,
      cap: course.modules.length,
      timeMin: info?.timeMin ?? 0,
      pct: info?.pct ?? 0,
    });
  };

  return (
    <ChartCard
      title="Learner × function matrix"
      sub="Completion per learner and function — darker means further along. Hover any cell for detail."
    >
      <div ref={cardRef} className="relative">
        <div className="overflow-x-auto pb-1" onScroll={() => setTip(null)}>
          <div className="min-w-[820px]" onMouseLeave={() => setTip(null)}>
            {/* column headers */}
            <div
              className="grid items-end gap-1.5 pb-2"
              style={{ gridTemplateColumns: HEAT_COLS }}
            >
              <div className="sticky left-0 z-[1] bg-white pb-1 pr-3 font-mono text-[9.5px] uppercase tracking-wider text-[#b6b0c8]">
                Learner · by progress
              </div>
              {COURSES.map((c) => (
                <div key={c.id} className="px-0.5 text-center" title={c.title}>
                  <div className="font-mono text-[10px] font-bold leading-none text-violet-600">
                    {c.num}
                  </div>
                  <div className="mt-1 text-[9px] leading-[1.25] text-[#8b86a0]">
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
            {/* learner rows */}
            <div className="flex flex-col gap-1.5">
              {LEARNER_STATS.map((l) => (
                <div
                  key={l.name}
                  className="group/row grid items-center gap-1.5 rounded-xl transition-colors duration-150 hover:bg-[#faf9ff]"
                  style={{ gridTemplateColumns: HEAT_COLS }}
                >
                  <div className="sticky left-0 z-[1] flex items-center gap-2.5 rounded-xl bg-white py-1 pr-3 transition-colors duration-150 group-hover/row:bg-[#faf9ff]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-400 font-mono text-[10px] font-bold text-white">
                      {l.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[13px] font-semibold leading-tight text-[#1e1b2e]">
                        {l.name}
                      </div>
                      <div className="mt-0.5 font-mono text-[9.5px] text-[#8b86a0]">
                        {l.courseIds.length} fn · {l.modulesDone}/{l.modulesCap} mod ·{" "}
                        {(l.timeMin / 60).toFixed(1)}h
                      </div>
                    </div>
                  </div>
                  {COURSES.map((c) => {
                    const info = l.cells[c.id];
                    const pct = info?.pct ?? -1;
                    const alpha = info ? 0.08 + 0.85 * (pct / 100) : 0;
                    return (
                      <div
                        key={c.id}
                        onMouseEnter={(e) => showTip(e, l, c.id)}
                        className={`relative flex h-11 cursor-default items-center justify-center rounded-lg text-[10px] font-semibold transition-all duration-150 hover:z-10 hover:scale-[1.05] hover:ring-2 hover:ring-violet-300 ${
                          info ? "" : "bg-[#f5f3fa] text-[#c9c3dd]"
                        }`}
                        style={
                          info
                            ? {
                                background: `rgba(124,58,237,${alpha.toFixed(3)})`,
                                color: pct >= 60 ? "#ffffff" : "#4c3a80",
                              }
                            : undefined
                        }
                      >
                        {info ? (pct >= 30 ? `${pct}%` : "") : "–"}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* floating cell tooltip */}
        {tip && (
          <div
            className="pointer-events-none absolute z-20 w-max"
            style={{
              left: tip.x,
              top: tip.below ? tip.bottom : tip.top,
              transform: tip.below
                ? "translate(-50%, 10px)"
                : "translate(-50%, calc(-100% - 10px))",
            }}
          >
            <div className="rounded-xl border border-violet-100 bg-white px-3 py-2 text-[12px] shadow-lg">
              <div className="font-semibold text-[#1e1b2e]">{tip.learner}</div>
              <div className="mt-0.5 font-medium text-violet-700">{tip.course}</div>
              {tip.enrolled ? (
                <div className="mt-0.5 text-[11px] text-[#8b86a0]">
                  {tip.pct}% · {tip.modulesDone}/{tip.cap} modules · {tip.timeMin} min
                  logged
                </div>
              ) : (
                <div className="mt-0.5 text-[11px] text-[#8b86a0]">
                  Not enrolled in the demo batch.
                </div>
              )}
            </div>
          </div>
        )}

        {/* legend */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9.5px] text-[#8b86a0]">0%</span>
            <span
              className="h-2 w-28 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(124,58,237,0.08), rgba(124,58,237,0.93))",
              }}
            />
            <span className="font-mono text-[9.5px] text-[#8b86a0]">100%</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] text-[#8b86a0]">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#f5f3fa] text-[10px] text-[#c9c3dd]">
              –
            </span>
            not enrolled
          </span>
        </div>
      </div>
    </ChartCard>
  );
}

/* ---------- Insights strip ---------- */

function InsightCard({
  icon: Icon,
  label,
  value,
  desc,
  iconCls,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  desc: string;
  iconCls: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
      className="group rounded-2xl border border-violet-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_40px_-18px_rgba(124,58,237,0.45)]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#8b86a0]">
          {label}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${iconCls}`}
        >
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-3 text-[1.9rem] font-bold leading-none text-[#1e1b2e]" style={DISPLAY}>
        {value}
      </div>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5b5570]">{desc}</p>
    </motion.div>
  );
}

/* =====================================================================
   COURSE CARD — unchanged design (glow blob + hover lift)
   ===================================================================== */

function CourseCard({
  num,
  icon,
  accent,
  title,
  tagline,
  moduleCount,
  delay,
  ctaLabel,
  onClick,
}: {
  num: string;
  icon: string;
  accent: AccentName;
  title: string;
  tagline: string;
  moduleCount: number;
  delay: number;
  ctaLabel: string;
  onClick: () => void;
}) {
  const a = ACCENT_SOFT[accent];
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className="group relative flex flex-col gap-3.5 overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(124,58,237,0.4)]"
      style={{ ["--ac" as string]: a.hex }}
    >
      {/* glow blob */}
      <span
        className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
        style={{ background: a.hex }}
      />
      <div className="relative flex items-center justify-between">
        <CourseIcon icon={icon} accent={accent} size={46} />
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#b6b0c8]">
          {num} · {moduleCount} MODULES
        </span>
      </div>
      <h3
        className="relative text-[1.18rem] font-semibold leading-snug text-[#1e1b2e]"
        style={DISPLAY}
      >
        {title}
      </h3>
      <p className="relative text-[13.5px] leading-relaxed text-[#5b5570]">
        {tagline}
      </p>
      <div className="relative mt-1 flex items-center gap-3 font-mono text-[10.5px] text-[#8b86a0]">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> 30–45 MIN
        </span>
      </div>
      <div
        className="relative mt-2 flex items-center justify-between text-[13px] font-semibold transition-colors"
        style={{ color: a.hex }}
      >
        <span>{ctaLabel}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-50 transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.button>
  );
}

/* =====================================================================
   BATCH PROGRESS DIALOG (admin) — enhanced with a progress-distribution
   bar and per-learner 12-segment module ticks
   ===================================================================== */

function BatchProgressDialog({
  courseId,
  onClose,
}: {
  courseId: string;
  onClose: () => void;
}) {
  const course = COURSES.find((c) => c.id === courseId)!;
  const enrolled = ENROLLMENTS[courseId] || [];
  const total = course.modules.length;
  const avg = enrolled.length
    ? Math.round(
        (enrolled.reduce((s, e) => s + e.modulesDone / total, 0) / enrolled.length) * 100
      )
    : 0;
  const completedCount = enrolled.filter((e) => e.modulesDone >= total).length;
  const inProgress = enrolled.filter(
    (e) => e.modulesDone > 0 && e.modulesDone < total
  ).length;
  const notStarted = enrolled.filter((e) => e.modulesDone <= 0).length;

  const buckets = [
    {
      label: "0%",
      color: "#c4b5fd",
      count: enrolled.filter((e) => e.modulesDone <= 0).length,
    },
    {
      label: "1–49%",
      color: "#a78bfa",
      count: enrolled.filter((e) => {
        const p = (e.modulesDone / total) * 100;
        return p > 0 && p < 50;
      }).length,
    },
    {
      label: "50–99%",
      color: "#7c3aed",
      count: enrolled.filter((e) => {
        const p = (e.modulesDone / total) * 100;
        return p >= 50 && p < 100;
      }).length,
    },
    { label: "100%", color: "#10b981", count: completedCount },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-[#1e1b2e]/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_30px_80px_-30px_rgba(30,27,46,0.5)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-violet-100 bg-gradient-to-r from-violet-50/60 to-white px-6 py-5">
          <div className="flex items-center gap-3">
            <CourseIcon icon={course.icon} accent={course.accent} size={42} />
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-violet-600">
                {course.num} · Batch progress
              </div>
              <h2 className="text-[1.3rem] font-semibold text-[#1e1b2e]" style={DISPLAY}>
                {course.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-100 text-[#8b86a0] transition hover:border-violet-300 hover:text-violet-700"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 gap-px border-b border-violet-100 bg-violet-100/50 sm:grid-cols-4">
          <MiniStat icon={<Users className="h-3.5 w-3.5" />} num={enrolled.length} lab="Enrolled" />
          <MiniStat icon={<BarChart3 className="h-3.5 w-3.5" />} num={`${avg}%`} lab="Avg. completion" />
          <MiniStat icon={<CheckCircle2 className="h-3.5 w-3.5" />} num={completedCount} lab="Completed" />
          <MiniStat icon={<Clock className="h-3.5 w-3.5" />} num={inProgress + notStarted} lab="Active / not started" />
        </div>

        {/* Progress distribution */}
        {enrolled.length > 0 && (
          <div className="border-b border-violet-100 px-6 py-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8b86a0]">
                Progress distribution
              </span>
              <span className="font-mono text-[10px] text-[#b6b0c8]">
                {enrolled.length} learners
              </span>
            </div>
            <div className="flex h-2.5 w-full gap-px overflow-hidden rounded-full bg-violet-50">
              {buckets
                .filter((b) => b.count > 0)
                .map((b) => (
                  <motion.span
                    key={b.label}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="h-full origin-left"
                    style={{
                      width: `${(b.count / enrolled.length) * 100}%`,
                      background: b.color,
                    }}
                  />
                ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
              {buckets.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#5b5570]"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: b.color }} />
                  {b.label} · {b.count}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Learner rows */}
        <div className="max-h-[46vh] overflow-y-auto px-6 py-5">
          {enrolled.length === 0 && (
            <div className="py-8 text-center text-[13px] text-[#8b86a0]">
              No learners enrolled in this course yet.
            </div>
          )}
          <div className="flex flex-col gap-3">
            {enrolled.map((e, idx) => {
              const pct = Math.round((e.modulesDone / total) * 100);
              const status =
                e.modulesDone >= total
                  ? { label: "Completed", cls: "bg-emerald-100 text-emerald-700" }
                  : e.modulesDone <= 0
                  ? { label: "Not started", cls: "bg-violet-100 text-[#8b86a0]" }
                  : { label: "In progress", cls: "bg-violet-100 text-violet-700" };
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2.5 rounded-xl border border-violet-100 bg-white p-4 transition-colors duration-150 hover:border-violet-200 hover:bg-violet-50/40 sm:flex-row sm:items-center sm:gap-4"
                >
                  <div className="flex items-center gap-3 sm:w-52 sm:shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-400 font-mono text-[11px] font-bold text-white">
                      {e.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#1e1b2e]">
                        {e.name}
                      </div>
                      <div className="font-mono text-[10.5px] text-[#8b86a0]">
                        {e.modulesDone}/{total} modules · {e.timeMin}m
                      </div>
                    </div>
                  </div>
                  {/* 12-segment module ticks */}
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex flex-1 gap-[3px]">
                      {Array.from({ length: total }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scaleY: 0.4 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          transition={{ duration: 0.25, delay: 0.15 + i * 0.025 }}
                          className={`h-2.5 flex-1 rounded-full ${
                            i < e.modulesDone
                              ? "bg-gradient-to-r from-violet-500 to-fuchsia-400"
                              : "bg-violet-100"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="w-10 text-right font-mono text-[11px] font-semibold text-violet-700">
                      {pct}%
                    </span>
                  </div>
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-medium ${status.cls}`}
                  >
                    {status.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-5 font-mono text-[10.5px] text-[#b6b0c8]">
            Note: all figures are illustrative demo data for the batch, shown for
            demonstration purposes.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MiniStat({
  icon,
  num,
  lab,
}: {
  icon: React.ReactNode;
  num: string | number;
  lab: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-white px-5 py-4">
      <div className="flex items-center gap-1.5 text-violet-400">{icon}</div>
      <div className="text-[1.5rem] font-bold leading-none text-[#1e1b2e]" style={DISPLAY}>
        {num}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-[#8b86a0]">
        {lab}
      </div>
    </div>
  );
}
