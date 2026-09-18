"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { Diagram } from "@/components/Diagram";
import { ProjectMockup } from "@/components/Mockups";
import { Label, StatusChip } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { caseNeighbours, getCase } from "@/lib/cases";

function SectionTitle({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="scroll-mt-28">
      <Label>{label}</Label>
    </div>
  );
}

export function CaseView({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const study = getCase(slug);

  if (!study) return null;

  const { prev, next } = caseNeighbours(slug);
  const ui = t.caseUi;

  const toc = [
    { id: "problema", label: ui.problem },
    { id: "atuacao", label: ui.role },
    { id: "arquitetura", label: ui.architecture },
    { id: "decisoes", label: ui.decisions },
    { id: "evidencia", label: ui.evidence },
    ...(study.evalPlan ? [{ id: "avaliacao", label: ui.evalPlan }] : []),
    { id: "resultado", label: ui.result },
  ];

  return (
    <article>
      {/* ── Cabeçalho do caso ────────────────────────────────────── */}
      <header className="border-b border-line px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-content">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-widest2 text-text3 transition-colors hover:text-text"
          >
            <span aria-hidden>←</span>
            {ui.backToIndex}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-start lg:gap-16">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-2xs">
                <span className="tnum text-text4">{study.index}</span>
                <span className="uppercase tracking-widest2 text-text3">
                  {study.kicker[lang]}
                </span>
                <span aria-hidden className="text-text4">
                  ·
                </span>
                <span className="tnum text-text4">{study.year}</span>
              </div>

              <h1 className="display mt-5 max-w-3xl text-[2rem] text-text sm:text-[2.9rem] lg:text-[3.3rem]">
                {study.title[lang]}
              </h1>

              <p className="mt-6 max-w-prose2 text-[1rem] leading-relaxed text-text2">
                {study.oneLine[lang]}
              </p>

              <div className="mt-7">
                <StatusChip tone="ok">{study.status[lang]}</StatusChip>
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:pt-2">
              <ProjectMockup slug={study.slug} lang={lang} />
            </Reveal>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-content gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        {/* ── Corpo ──────────────────────────────────────────────── */}
        <div className="min-w-0 space-y-20">
          {/* Problema */}
          <Reveal as="section">
            <SectionTitle id="problema" label={ui.problem} />
            <div className="prose-ed mt-7 max-w-prose2 text-[0.96rem] leading-relaxed text-text2">
              {study.problem[lang].map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Atuação */}
          <Reveal as="section">
            <SectionTitle id="atuacao" label={ui.role} />
            <p className="mt-7 max-w-prose2 text-[0.96rem] leading-relaxed text-text2">
              {study.role[lang]}
            </p>
            <div className="mt-6 rounded-xl border border-line bg-ink px-5 py-4">
              <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
                {ui.roleDependencies}
              </p>
              <ul className="mt-3 space-y-2.5">
                {study.roleDependencies[lang].map((item, i) => (
                  <li key={i} className="text-[0.88rem] leading-relaxed text-text3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Arquitetura */}
          <Reveal as="section">
            <SectionTitle id="arquitetura" label={ui.architecture} />
            <p className="mt-5 max-w-prose2 text-[0.88rem] leading-relaxed text-text3">
              {ui.architectureNote}
            </p>
            <div className="mt-8">
              <Diagram
                steps={study.diagram}
                lang={lang}
                label={t.a11y.diagramFlow}
                legend={{
                  title: ui.legend,
                  app: ui.legendApp,
                  model: ui.legendModel,
                  guard: ui.legendGuard,
                }}
              />
            </div>

            {study.pullQuote ? (
              <blockquote className="mt-12 border-l border-line2 pl-6">
                {/* Serifa reta, e não itálica: o itálico funciona em três
                    palavras de título e cansa num parágrafo inteiro. */}
                <p className="font-display text-[1.15rem] leading-snug text-text sm:text-[1.35rem]">
                  {study.pullQuote.text[lang]}
                </p>
                <cite className="mt-4 block font-mono text-2xs not-italic text-text4">
                  {study.pullQuote.source}
                </cite>
              </blockquote>
            ) : null}
          </Reveal>

          {/* Decisões */}
          <Reveal as="section">
            <SectionTitle id="decisoes" label={ui.decisions} />
            <p className="mt-5 max-w-prose2 text-[0.88rem] leading-relaxed text-text3">
              {ui.decisionsNote}
            </p>

            <ol className="mt-10 space-y-12">
              {study.decisions.map((decision, i) => (
                <li key={decision.id} className="border-t border-line pt-7">
                  <div className="flex items-baseline gap-3">
                    <span className="tnum font-mono text-2xs text-text4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-[1.25rem] text-text sm:text-[1.45rem]">
                      {decision.title[lang]}
                    </h3>
                  </div>

                  <dl className="mt-6 space-y-4">
                    {(
                      [
                        ["pressure", ui.decisionProblem],
                        ["choice", ui.decisionChoice],
                        ["alternative", ui.decisionAlternative],
                        ["limit", ui.decisionLimit],
                      ] as const
                    ).map(([key, label]) => (
                      <div
                        key={key}
                        className="grid gap-1.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-5"
                      >
                        <dt
                          className={`font-mono text-2xs uppercase tracking-widest2 sm:pt-0.5 ${
                            key === "limit" ? "text-warn" : "text-text4"
                          }`}
                        >
                          {label}
                        </dt>
                        <dd className="max-w-prose2 text-[0.92rem] leading-relaxed text-text2">
                          {decision[key][lang]}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {decision.code ? (
                    <code className="mt-6 block break-all rounded-lg border border-line bg-ink px-3.5 py-2.5 font-mono text-2xs text-text3">
                      {decision.code}
                    </code>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Evidência */}
          <Reveal as="section">
            <SectionTitle id="evidencia" label={ui.evidence} />
            <p className="mt-7 max-w-prose2 text-[0.96rem] leading-relaxed text-text2">
              {study.evidence.intro[lang]}
            </p>

            <dl className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.evidence.metrics.map((metric) => (
                <div
                  key={metric.label.en}
                  className="rounded-xl border border-line bg-ink p-5"
                >
                  <dt className="tnum font-display text-[1.8rem] leading-none text-text">
                    {metric.value}
                  </dt>
                  <dd className="mt-3">
                    <p className="text-[0.84rem] font-medium leading-snug text-text2">
                      {metric.label[lang]}
                    </p>
                    {metric.note ? (
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-text4">
                        {metric.note[lang]}
                      </p>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-9 space-y-3.5">
              {study.evidence.notes[lang].map((note, i) => (
                <li
                  key={i}
                  className="max-w-prose2 border-l border-line2 pl-5 text-[0.9rem] leading-relaxed text-text2"
                >
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-9 max-w-prose2 rounded-xl border border-warn/25 bg-warn/[0.04] px-5 py-4">
              <p className="font-mono text-2xs uppercase tracking-widest2 text-warn">
                {ui.evidenceCaveat}
              </p>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-text2">
                {study.evidence.caveat[lang]}
              </p>
            </div>
          </Reveal>

          {/* Avaliação */}
          {study.evalPlan ? (
            <Reveal as="section">
              <SectionTitle id="avaliacao" label={ui.evalPlan} />
              <p className="mt-7 max-w-prose2 text-[0.96rem] leading-relaxed text-text2">
                {study.evalPlan.intro[lang]}
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-line">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {study.evalPlan.criteria.map((row, i) => (
                      <tr
                        key={row.criterion.en}
                        className={i > 0 ? "border-t border-line" : undefined}
                      >
                        <th
                          scope="row"
                          className="w-[11rem] min-w-[9rem] bg-ink align-top px-4 py-4 font-mono text-2xs font-normal uppercase tracking-widest2 text-text3 sm:w-[13rem] sm:px-5"
                        >
                          {row.criterion[lang]}
                        </th>
                        <td className="px-4 py-4 text-[0.9rem] leading-relaxed text-text2 sm:px-5">
                          {row.check[lang]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 max-w-prose2 text-[0.88rem] leading-relaxed text-text3">
                {study.evalPlan.note[lang]}
              </p>
            </Reveal>
          ) : null}

          {/* Resultado */}
          <Reveal as="section">
            <SectionTitle id="resultado" label={ui.result} />

            <div className="mt-8 grid gap-9 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 font-mono text-2xs uppercase tracking-widest2 text-ok">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
                  {ui.resultDone}
                </p>
                <ul className="mt-5 space-y-3.5">
                  {study.result.done[lang].map((item, i) => (
                    <li key={i} className="text-[0.9rem] leading-relaxed text-text2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 font-mono text-2xs uppercase tracking-widest2 text-warn">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-warn" />
                  {ui.resultOpen}
                </p>
                <ul className="mt-5 space-y-3.5">
                  {study.result.open[lang].map((item, i) => (
                    <li key={i} className="text-[0.9rem] leading-relaxed text-text2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-l border-line2 pl-6">
              <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
                {ui.resultNext}
              </p>
              <p className="mt-3 max-w-prose2 font-display text-[1.2rem] italic leading-snug text-text sm:text-[1.4rem]">
                {study.result.next[lang]}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Coluna lateral ─────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={ui.onThisPage} className="hidden lg:block">
            <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
              {ui.onThisPage}
            </p>
            <ul className="mt-4 space-y-2 border-l border-line pl-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[0.84rem] text-text3 transition-colors hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:mt-10">
            <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
              {ui.stack}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {study.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line2 px-2.5 py-1 font-mono text-2xs text-text3"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-xl border border-line bg-ink px-4 py-4">
            <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
              {ui.access}
            </p>
            <p className="mt-2.5 text-[0.84rem] leading-relaxed text-text3">
              {study.access[lang]}
            </p>
          </div>
        </aside>
      </div>

      {/* ── Navegação entre casos ────────────────────────────────── */}
      <nav className="border-t border-line">
        <div className="mx-auto grid max-w-content sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projetos/${prev.slug}`}
              className="group border-b border-line px-5 py-10 transition-colors hover:bg-ink sm:border-b-0 sm:border-r sm:px-8"
            >
              <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
                <span aria-hidden className="mr-2">
                  ←
                </span>
                {ui.prevCase}
              </p>
              <p className="display mt-3 text-[1.2rem] text-text transition-colors group-hover:text-hint">
                {prev.name}
              </p>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={`/projetos/${next.slug}`}
              className="group px-5 py-10 transition-colors hover:bg-ink sm:px-8 sm:text-right"
            >
              <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
                {ui.nextCase}
                <span aria-hidden className="ml-2">
                  →
                </span>
              </p>
              <p className="display mt-3 text-[1.2rem] text-text transition-colors group-hover:text-hint">
                {next.name}
              </p>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
        </div>
      </nav>
    </article>
  );
}
