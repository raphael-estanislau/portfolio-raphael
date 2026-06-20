"use client";

import { useLang } from "@/components/LanguageProvider";

/* ------------------------------------------------------------------ */
/*  Small inline chart helpers (no chart lib — keeps the figure light) */
/* ------------------------------------------------------------------ */

const INK = "#191712";
const ACCENT = "#A03B22";
const ACCENT_SOFT = "#C7613F";
const LINE = "#DAD2C1";
const MUTED = "#9A9384";

function Bars({ values }: { values: number[] }) {
  const max = Math.max(...values);
  return (
    <svg viewBox="0 0 220 64" className="h-16 w-full" preserveAspectRatio="none">
      {values.map((v, i) => {
        const h = (v / max) * 52;
        const w = 220 / values.length;
        const x = i * w + w * 0.18;
        const bw = w * 0.64;
        const last = i === values.length - 1;
        return (
          <rect
            key={i}
            x={x}
            y={60 - h}
            width={bw}
            height={h}
            rx={1.5}
            fill={last ? ACCENT : "#D8CDB8"}
          />
        );
      })}
    </svg>
  );
}

function Spark({ values, fill = false }: { values: number[]; fill?: boolean }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 220;
    const y = 56 - ((v - min) / span) * 48;
    return [x, y] as const;
  });
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 220 60" className="h-14 w-full" preserveAspectRatio="none">
      {fill && (
        <path
          d={`${d} L220,60 L0,60 Z`}
          fill={ACCENT}
          opacity={0.08}
        />
      )}
      <path d={d} fill="none" stroke={ACCENT} strokeWidth={1.6} />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={2.6} fill={ACCENT} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame                                                              */
/* ------------------------------------------------------------------ */

function Frame({
  tabs,
  active,
  right,
  children,
}: {
  tabs: string[];
  active: number;
  right?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-[0_1px_0_rgba(0,0,0,0.02),0_18px_40px_-24px_rgba(31,28,22,0.35)]">
      {/* app top bar */}
      <div className="flex items-center justify-between border-b border-line bg-paper2/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#D8CDB8]" />
          <span className="h-2 w-2 rounded-full bg-[#D8CDB8]" />
          <span className="h-2 w-2 rounded-full bg-[#D8CDB8]" />
        </div>
        {right && (
          <span className="font-sans text-[10px] uppercase tracking-widest text-muted">
            {right}
          </span>
        )}
      </div>
      {/* tabs */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-line px-4 pt-3">
        {tabs.map((tb, i) => (
          <span
            key={tb}
            className={`pb-2 font-sans text-[11px] ${
              i === active
                ? "border-b-2 border-accent font-medium text-ink"
                : "text-muted"
            }`}
          >
            {tb}
          </span>
        ))}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-paper/40 px-3 py-2.5">
      <p className="font-sans text-[9.5px] uppercase tracking-widest text-muted">
        {label}
      </p>
      <p className="tnum mt-1 font-display text-lg leading-none text-ink">
        {value}
      </p>
      {delta && (
        <p className="tnum mt-1 font-sans text-[10px] text-accent">{delta}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Per-project mockups                                                */
/* ------------------------------------------------------------------ */

function CrmMock() {
  const { lang } = useLang();
  const L = (pt: string, en: string) => (lang === "pt" ? pt : en);
  return (
    <Frame
      right="oriba · haight · shoulder"
      tabs={[
        L("Visão Geral", "Overview"),
        L("Receita", "Revenue"),
        "Email",
        "SMS",
        "Web Push",
        "App Push",
      ]}
      active={1}
    >
      <div className="grid grid-cols-4 gap-2.5">
        <Kpi label={L("Enviados", "Sent")} value="1,84M" />
        <Kpi label={L("Aberturas", "Opens")} value="32,1%" delta="▲ 2,4 pts" />
        <Kpi label="CTOR" value="14,8%" delta="▲ 1,1 pts" />
        <Kpi label={L("Receita GA4", "GA4 revenue")} value="R$ 2,7M" delta="▲ 18%" />
      </div>
      <div className="mt-3 grid grid-cols-[1.5fr_1fr] gap-3">
        <div className="rounded-lg border border-line bg-paper/40 p-3">
          <div className="flex items-center justify-between">
            <p className="font-sans text-[10px] uppercase tracking-widest text-muted">
              {L("Receita por mês · Last Click", "Revenue by month · Last Click")}
            </p>
            <span className="font-sans text-[10px] text-muted">2026</span>
          </div>
          <div className="mt-2">
            <Bars values={[42, 55, 38, 61, 47, 72, 58, 80]} />
          </div>
        </div>
        <div className="rounded-lg border border-line bg-paper/40 p-3">
          <p className="font-sans text-[10px] uppercase tracking-widest text-muted">
            {L("Top campanhas", "Top campaigns")}
          </p>
          <ul className="mt-2 space-y-1.5">
            {[
              ["Black Friday", "R$ 410k"],
              ["Dia das Mães", "R$ 286k"],
              ["Outlet · 30%", "R$ 173k"],
            ].map(([n, v]) => (
              <li
                key={n}
                className="flex items-center justify-between font-sans text-[11px]"
              >
                <span className="text-soft">{n}</span>
                <span className="tnum text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

function OribaMock() {
  const { lang } = useLang();
  const L = (pt: string, en: string) => (lang === "pt" ? pt : en);
  const score = 73;
  return (
    <Frame
      right="meta api · bigquery"
      tabs={[
        L("Pricing", "Pricing"),
        L("Redes Sociais", "Social"),
        L("Ads & Influ.", "Ads & Infl."),
        L("Concorrentes", "Competitors"),
      ]}
      active={1}
    >
      <div className="grid grid-cols-[auto_1fr] gap-3">
        {/* competitiveness gauge */}
        <div className="flex w-32 flex-col items-center justify-center rounded-lg border border-line bg-paper/40 p-3">
          <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
            <circle cx="40" cy="40" r="32" fill="none" stroke={LINE} strokeWidth="7" />
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke={ACCENT}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${(score / 100) * 201} 201`}
            />
          </svg>
          <p className="tnum -mt-12 font-display text-2xl text-ink">{score}</p>
          <p className="mt-9 text-center font-sans text-[9px] uppercase tracking-widest text-muted">
            {L("Score competit.", "Competit. score")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Kpi label={L("Seguidores", "Followers")} value="50,2k" delta="▲ 1,3k / 30d" />
          <Kpi label={L("Engaj. público", "Public engag.")} value="6,4%" />
          <Kpi label="Reels views" value="312k" delta="▲ 24%" />
          <Kpi label="EMV" value="R$ 98k" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_1fr] gap-3">
        <div className="rounded-lg border border-line bg-paper/40 p-3">
          <p className="font-sans text-[10px] uppercase tracking-widest text-muted">
            {L("Seguidores · histórico BQ", "Followers · BQ history")}
          </p>
          <div className="mt-1">
            <Spark values={[40, 41, 41, 43, 44, 46, 47, 49, 50]} fill />
          </div>
        </div>
        <div className="rounded-lg border border-line bg-paper/40 p-3">
          <p className="font-sans text-[10px] uppercase tracking-widest text-muted">
            {L("Concorrentes · NSS", "Competitors · NSS")}
          </p>
          <ul className="mt-2 space-y-1.5">
            {[
              ["ORIBA", "+72", true],
              ["Reserva", "+58", false],
              ["Aramis", "+41", false],
            ].map(([n, v, hl]) => (
              <li
                key={n as string}
                className="flex items-center justify-between font-sans text-[11px]"
              >
                <span className={hl ? "font-medium text-accent" : "text-soft"}>
                  {n}
                </span>
                <span className="tnum text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

function VmMock() {
  const { lang } = useLang();
  const L = (pt: string, en: string) => (lang === "pt" ? pt : en);
  // pins: x%, y%, status color
  const pins: [number, number, string][] = [
    [14, 24, ACCENT],
    [40, 18, "#15803D"],
    [68, 30, "#D97706"],
    [86, 22, "#15803D"],
    [22, 60, "#15803D"],
    [50, 70, ACCENT],
    [78, 64, "#D97706"],
    [34, 86, "#15803D"],
  ];
  return (
    <Frame
      right={L("html · offline", "html · offline")}
      tabs={[
        L("Mapa", "Map"),
        "KPIs",
        L("Ranking", "Ranking"),
        L("Categorias", "Categories"),
        L("Alertas", "Alerts"),
      ]}
      active={0}
    >
      <div className="grid grid-cols-[1.5fr_1fr] gap-3">
        {/* store map */}
        <div className="relative h-[148px] overflow-hidden rounded-lg border border-line bg-paper2/50">
          <div className="absolute inset-3 rounded-md border border-dashed border-line/80" />
          <div className="absolute left-1/2 top-3 bottom-3 w-px bg-line/70" />
          {pins.map(([x, y, c], i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className="block h-3 w-3 rounded-full ring-2 ring-card"
                style={{ background: c }}
              />
            </span>
          ))}
          <span className="absolute bottom-2 left-3 font-sans text-[9px] uppercase tracking-widest text-muted">
            {L("Loja Pinheiros", "Pinheiros store")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 self-start">
          <Kpi label={L("Faturam.", "Revenue")} value="R$ 612k" />
          <Kpi label={L("Preço médio", "Avg price")} value="R$ 389" />
          <Kpi label="SKUs" value="150" />
          <Kpi label={L("Sem giro", "No rotation")} value="11" delta="● 7%" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 rounded-lg border border-line bg-paper/40 px-3 py-2">
        {[
          [L("Alta venda", "High sales"), "#15803D"],
          [L("Atenção", "Watch"), "#D97706"],
          [L("Sem giro", "No rotation"), ACCENT],
        ].map(([t, c]) => (
          <span key={t} className="flex items-center gap-1.5 font-sans text-[10px] text-soft">
            <span className="h-2 w-2 rounded-full" style={{ background: c as string }} />
            {t}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function ProjectMockup({ id }: { id: string }) {
  if (id === "dashboard-crm") return <CrmMock />;
  if (id === "oriba-intelligence") return <OribaMock />;
  return <VmMock />;
}
