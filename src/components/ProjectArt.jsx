/**
 * Conceptual line illustrations for the project cards — deliberately abstract
 * so none can be mistaken for a product screenshot. Every shape is drawn with
 * the classes in Projects.css (`art__panel`, `art__line`, `art__ink`,
 * `art__soft`), so the drawings follow the theme with no colors of their own.
 */

function Tutor() {
  return (
    <>
      {/* Source document the answer is drawn from */}
      <rect className="art__panel" x="30" y="26" width="46" height="60" rx="5" />
      <path className="art__line" d="M40 40h26M40 50h26M40 60h18M40 70h22" />
      <path className="art__line art__dash" d="M76 56h22" />
      {/* Question, then a grounded answer */}
      <rect className="art__panel" x="140" y="20" width="70" height="20" rx="10" />
      <path className="art__line" d="M152 30h46" />
      <rect className="art__panel art__panel--ink" x="100" y="48" width="96" height="44" rx="10" />
      <path className="art__ink" d="M112 62h70M112 72h58M112 82h40" />
    </>
  )
}

function Dashboard() {
  return (
    <>
      {/* Tasks */}
      <rect className="art__panel art__panel--ink" x="24" y="16" width="92" height="40" rx="6" />
      <rect className="art__ink" x="34" y="26" width="8" height="8" rx="2" />
      <path className="art__ink" d="M36 30l2 2 3-4M48 30h52" />
      <rect className="art__line" x="34" y="40" width="8" height="8" rx="2" />
      <path className="art__line" d="M48 44h40" />
      {/* Calendar */}
      <rect className="art__panel" x="124" y="16" width="92" height="40" rx="6" />
      <path
        className="art__line"
        d="M134 30h72M134 40h72M152 24v26M170 24v26M188 24v26"
      />
      <rect className="art__soft" x="171" y="31" width="16" height="8" rx="1" />
      {/* Groceries */}
      <rect className="art__panel" x="24" y="64" width="60" height="40" rx="6" />
      <path className="art__line" d="M34 76h4M44 76h30M34 86h4M44 86h22M34 96h4M44 96h26" />
      {/* Bills */}
      <rect className="art__panel" x="92" y="64" width="124" height="40" rx="6" />
      <path className="art__line" d="M104 94h100" />
      <path className="art__ink" d="M110 94V82M126 94V76M142 94V86M158 94V72M174 94V80M190 94V84" />
    </>
  )
}

function Route() {
  return (
    <>
      <path
        className="art__line art__dash"
        d="M42 88C70 88 74 40 110 44s40 46 70 40 26-46 26-46"
      />
      <circle className="art__panel art__panel--ink" cx="42" cy="88" r="9" />
      <circle className="art__panel art__panel--ink" cx="122" cy="50" r="9" />
      <circle className="art__panel art__panel--ink" cx="206" cy="38" r="9" />
      <path className="art__ink" d="M42 84v8M119 50h6M206 34v8M202 38h8" />
      {/* Day-by-day list */}
      <rect className="art__panel" x="140" y="76" width="74" height="28" rx="5" />
      <path className="art__line" d="M150 86h16M172 86h32M150 95h16M172 95h24" />
    </>
  )
}

function Score() {
  return (
    <>
      {/* 0–100 gauge */}
      <path className="art__line art__thick" d="M34 90a46 46 0 0 1 92 0" />
      <path className="art__ink art__thick" d="M34 90a46 46 0 0 1 75-36" />
      <path className="art__ink" d="M80 90l18-24" />
      <circle className="art__panel art__panel--ink" cx="80" cy="90" r="4" />
      {/* Spending by category */}
      <path className="art__line" d="M146 96h70" />
      <rect className="art__soft" x="152" y="56" width="12" height="40" rx="2" />
      <rect className="art__soft" x="172" y="40" width="12" height="56" rx="2" />
      <rect className="art__panel art__panel--ink" x="192" y="66" width="12" height="30" rx="2" />
      <path className="art__line" d="M146 28h40M146 36h28" />
    </>
  )
}

function Server() {
  return (
    <>
      {[22, 48, 74].map((y) => (
        <g key={y}>
          <rect className="art__panel" x="34" y={y} width="104" height="20" rx="4" />
          <path className="art__line" d={`M46 ${y + 10}h44`} />
          <circle className="art__soft" cx="118" cy={y + 10} r="3" />
          <circle className="art__soft" cx="128" cy={y + 10} r="3" />
        </g>
      ))}
      {/* Time slot, and the key that expires with it */}
      <circle className="art__panel art__panel--ink" cx="184" cy="46" r="22" />
      <path className="art__ink" d="M184 32v14l10 6" />
      <circle className="art__line" cx="172" cy="94" r="6" />
      <path className="art__line" d="M178 94h30M200 94v6M208 94v6" />
    </>
  )
}

function Vision() {
  return (
    <>
      {/* Photo frame */}
      <rect className="art__panel" x="28" y="16" width="112" height="88" rx="6" />
      <circle className="art__line" cx="84" cy="62" r="28" />
      <circle className="art__soft" cx="84" cy="62" r="18" />
      {/* Detection box and its label */}
      <path className="art__ink" d="M50 34v-6h8M118 34v-6h-8M50 90v6h8M118 90v6h-8" />
      <path className="art__line art__dash" d="M140 40h18" />
      <rect className="art__panel art__panel--ink" x="158" y="28" width="58" height="26" rx="5" />
      <path className="art__ink" d="M168 38h38M168 46h22" />
      <rect className="art__panel" x="158" y="62" width="58" height="18" rx="5" />
      <path className="art__line" d="M168 71h26" />
    </>
  )
}

function Agents() {
  return (
    <>
      <path className="art__line" d="M70 60h36M134 60l26-24M134 60l26 24" />
      <path className="art__line art__dash" d="M186 84c20 0 22-48 0-48" />
      <circle className="art__panel art__panel--ink" cx="56" cy="60" r="14" />
      <circle className="art__panel" cx="120" cy="60" r="14" />
      <circle className="art__panel" cx="172" cy="36" r="14" />
      <circle className="art__panel" cx="172" cy="84" r="14" />
      <path className="art__ink" d="M50 60h12M56 54v12" />
      <path className="art__line" d="M115 60h10M167 36h10M167 84h10" />
    </>
  )
}

const drawings = {
  tutor: Tutor,
  dashboard: Dashboard,
  route: Route,
  score: Score,
  server: Server,
  vision: Vision,
  agents: Agents,
}

export default function ProjectArt({ kind }) {
  const Drawing = drawings[kind]
  if (!Drawing) return null

  return (
    <svg
      className="art"
      viewBox="0 0 240 120"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <Drawing />
    </svg>
  )
}
