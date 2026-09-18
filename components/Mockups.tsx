import type { Lang } from "@/lib/content";

/**
 * Mockups dos três produtos.
 *
 * TODOS OS NÚMEROS AQUI SÃO FICTÍCIOS. Os sistemas reais são internos do Grupo
 * Shoulder e carregam faturamento, nome de loja e nome de pessoa. O layout é o
 * do produto, e o dado não. Cada mockup declara isso na legenda. Essa
 * declaração vale como sinal: quem contrata quer ver critério com dado de
 * terceiro, não uma captura de tela com receita real.
 */

const FICTION: Record<Lang, string> = {
  pt: "Dados fictícios · layout do produto real",
  en: "Fictional data · real product layout",
};

function Frame({
  children,
  lang,
  tall = false,
}: {
  children: React.ReactNode;
  lang: Lang;
  tall?: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      <div
        aria-hidden
        className={`relative flex-1 overflow-hidden rounded-xl border border-line bg-[#0E1117] ${
          tall ? "min-h-[19rem]" : "min-h-[13rem]"
        }`}
      >
        {children}
      </div>
      <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-widest2 text-text4">
        {FICTION[lang]}
      </p>
    </div>
  );
}

/* ── 01 · Copiloto de CRM ─────────────────────────────────────────────────
   O ponto da peça é a procedência: a resposta mostra de onde cada bloco veio
   e qual fonte foi pulada. É o que diferencia um chat de um copiloto. */
export function CopilotMockup({ lang }: { lang: Lang }) {
  const chips =
    lang === "pt"
      ? [
          { label: "Campanhas de e-mail", state: "consultado agora", tone: "ok" },
          { label: "Base CRM", state: "cache seguro", tone: "hint" },
          { label: "Contexto da tela", state: "já estava na tela", tone: "off" },
          { label: "Faturamento", state: "preservou a cota", tone: "warn" },
        ]
      : [
          { label: "Email campaigns", state: "queried now", tone: "ok" },
          { label: "CRM base", state: "safe cache", tone: "hint" },
          { label: "Screen context", state: "already loaded", tone: "off" },
          { label: "Retail revenue", state: "quota preserved", tone: "warn" },
        ];

  const toneClass: Record<string, string> = {
    ok: "border-ok/30 text-ok",
    hint: "border-hint/30 text-hint",
    off: "border-line2 text-text3",
    warn: "border-warn/30 text-warn",
  };

  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      {/* Pergunta */}
      <div className="self-end rounded-xl rounded-br-sm bg-card2 px-3.5 py-2 text-[0.72rem] text-text2">
        {lang === "pt"
          ? "Como foi o e-mail da Oriba neste mês?"
          : "How did Oriba's email do this month?"}
      </div>

      {/* Resposta */}
      <div className="rounded-xl rounded-bl-sm border border-line bg-card px-3.5 py-3">
        <p className="text-[0.72rem] leading-relaxed text-text2">
          {lang === "pt"
            ? "A receita atribuída subiu 14% contra o mês anterior, puxada por duas campanhas de reativação. A taxa de clique caiu 0,4 p.p."
            : "Attributed revenue rose 14% against last month, driven by two reactivation campaigns. Click rate fell 0.4 pp."}
        </p>

        <div className="mt-3 space-y-1.5 border-l border-line2 pl-3">
          {(lang === "pt"
            ? ["Receita atribuída · R$ 412,8 mil · +14,0%", "CTR · 2,1% · −0,4 p.p."]
            : ["Attributed revenue · R$ 412.8k · +14.0%", "CTR · 2.1% · −0.4 pp"]
          ).map((line) => (
            <p key={line} className="tnum font-mono text-[0.625rem] text-text3">
              {line}
            </p>
          ))}
        </div>

        <p className="mt-3 text-[0.66rem] leading-relaxed text-warn">
          {lang === "pt"
            ? "Faturamento de varejo não entrou nesta resposta. Isso é ausência de dado, não zero."
            : "Retail revenue did not enter this answer. That is missing data, not zero."}
        </p>
      </div>

      {/* Procedência */}
      <div className="mt-auto flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className={`rounded-full border px-2 py-1 font-mono text-[0.5625rem] ${toneClass[chip.tone]}`}
          >
            {chip.label} · {chip.state}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 02 · Operação omnichannel ────────────────────────────────────────────
   KPIs com variação, o medidor de tempo de reação contra a meta e a barra de
   distribuição cujas categorias NÃO somam 100% de propósito. */
export function OperationsMockup({ lang }: { lang: Lang }) {
  const kpis =
    lang === "pt"
      ? [
          { label: "Pedidos", value: "6.240", delta: "+8,1%", up: true },
          { label: "Dentro do SLA", value: "74,6%", delta: "+2,3 p.p.", up: true },
          { label: "Em atraso", value: "1.517", delta: "−6,4%", up: false },
        ]
      : [
          { label: "Orders", value: "6,240", delta: "+8.1%", up: true },
          { label: "Within SLA", value: "74.6%", delta: "+2.3 pp", up: true },
          { label: "Late", value: "1,517", delta: "−6.4%", up: false },
        ];

  const dist = [
    { w: "44%", cls: "bg-ok/70" },
    { w: "24%", cls: "bg-alert/70" },
    { w: "17%", cls: "bg-warn/70" },
    { w: "15%", cls: "bg-text4" },
  ];

  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.5625rem] uppercase tracking-widest2 text-text4">
          {lang === "pt" ? "Desempenho de loja" : "Store performance"}
        </p>
        <p className="tnum font-mono text-[0.5625rem] text-text4">
          412 ms · 0 KiB · cache hit
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-line bg-card p-2.5">
            <p className="font-mono text-[0.5625rem] uppercase tracking-wider text-text4">
              {kpi.label}
            </p>
            <p className="tnum mt-1 text-[1.05rem] font-medium text-text">{kpi.value}</p>
            <p
              className={`tnum mt-0.5 font-mono text-[0.5625rem] ${
                kpi.up ? "text-ok" : "text-alert"
              }`}
            >
              {kpi.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Medidor de tempo de reação */}
      <div className="rounded-lg border border-line bg-card p-3">
        <p className="font-mono text-[0.5625rem] uppercase tracking-wider text-text4">
          {lang === "pt" ? "Tempo de reação × meta" : "Reaction time vs target"}
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="tnum font-mono text-[1.15rem] text-text">02:41:07</span>
          <span className="tnum font-mono text-[0.625rem] text-text4">
            {lang === "pt" ? "meta 03:00:00" : "target 03:00:00"}
          </span>
          <span className="tnum ml-auto rounded-full bg-ok/10 px-2 py-0.5 font-mono text-[0.625rem] text-ok">
            89,4%
          </span>
        </div>
        <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-line">
          <div className="h-full w-[89%] rounded-full bg-ok/70" />
        </div>
      </div>

      {/* Distribuição: as categorias se sobrepõem, e a legenda diz isso */}
      <div className="mt-auto">
        <div className="flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full">
          {dist.map((seg, i) => (
            <span key={i} className={`${seg.cls} block`} style={{ width: seg.w }} />
          ))}
        </div>
        <p className="mt-2 font-mono text-[0.5625rem] leading-relaxed text-text4">
          {lang === "pt"
            ? "As categorias se sobrepõem: elas não somam 100%."
            : "Categories overlap: they do not sum to 100%."}
        </p>
      </div>
    </div>
  );
}

/* ── 03 · Oriba Intelligence ──────────────────────────────────────────────
   Estado por fonte e a métrica que vira travessão em vez de zero. */
export function IntelligenceMockup({ lang }: { lang: Lang }) {
  const sources =
    lang === "pt"
      ? [
          { name: "Meta Graph", state: "saudável", fresh: "há 12 min", tone: "ok" },
          { name: "Catálogo de mercado", state: "saudável", fresh: "há 3 h", tone: "ok" },
          { name: "Mídia paga", state: "degradada", fresh: "há 26 h", tone: "warn" },
          { name: "Buzz Monitor", state: "indisponível", fresh: "sem dado", tone: "off" },
        ]
      : [
          { name: "Meta Graph", state: "healthy", fresh: "12 min ago", tone: "ok" },
          { name: "Market catalog", state: "healthy", fresh: "3 h ago", tone: "ok" },
          { name: "Paid media", state: "degraded", fresh: "26 h ago", tone: "warn" },
          { name: "Buzz Monitor", state: "unavailable", fresh: "no data", tone: "off" },
        ];

  const dotTone: Record<string, string> = {
    ok: "bg-ok",
    warn: "bg-warn",
    off: "bg-text4",
  };
  const textTone: Record<string, string> = {
    ok: "text-ok",
    warn: "text-warn",
    off: "text-text4",
  };

  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      <p className="font-mono text-[0.5625rem] uppercase tracking-widest2 text-text4">
        {lang === "pt" ? "Estado das fontes" : "Source state"}
      </p>

      <ul className="space-y-1.5">
        {sources.map((source) => (
          <li
            key={source.name}
            className="flex items-center gap-2.5 rounded-lg border border-line bg-card px-2.5 py-2"
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotTone[source.tone]}`}
            />
            <span className="flex-1 truncate text-[0.7rem] text-text2">{source.name}</span>
            <span className={`font-mono text-[0.5625rem] ${textTone[source.tone]}`}>
              {source.state}
            </span>
            <span className="tnum w-16 shrink-0 text-right font-mono text-[0.5625rem] text-text4">
              {source.fresh}
            </span>
          </li>
        ))}
      </ul>

      {/* A métrica sem base */}
      <div className="mt-auto grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-line bg-card p-2.5">
          <p className="font-mono text-[0.5625rem] uppercase tracking-wider text-text4">
            {lang === "pt" ? "Desconto real" : "Real discount"}
          </p>
          <p className="tnum mt-1 text-[1.05rem] font-medium text-text">31,4%</p>
          <p className="mt-0.5 font-mono text-[0.5625rem] text-text4">
            {lang === "pt" ? "contra máx. 90 d" : "vs 90-day max"}
          </p>
        </div>
        <div className="rounded-lg border border-warn/25 bg-card p-2.5">
          <p className="font-mono text-[0.5625rem] uppercase tracking-wider text-text4">
            Net sentiment
          </p>
          <p className="mt-1 text-[1.05rem] font-medium text-text4">—</p>
          <p className="mt-0.5 font-mono text-[0.5625rem] text-warn">
            {lang === "pt" ? "sem menção · não é zero" : "no mentions · not zero"}
          </p>
        </div>
      </div>
    </div>
  );
}

const MOCKUPS: Record<string, (props: { lang: Lang }) => JSX.Element> = {
  "copiloto-crm": CopilotMockup,
  "operacao-omnichannel": OperationsMockup,
  "oriba-intelligence": IntelligenceMockup,
};

export function ProjectMockup({
  slug,
  lang,
  tall = false,
}: {
  slug: string;
  lang: Lang;
  tall?: boolean;
}) {
  const Component = MOCKUPS[slug];
  if (!Component) return null;
  return (
    <Frame lang={lang} tall={tall}>
      <Component lang={lang} />
    </Frame>
  );
}
