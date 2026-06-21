"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROJECTS } from "@/lib/content";
import { ProjectMockup } from "@/components/ProjectMockup";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="mb-3 flex items-center gap-3 text-lg font-semibold text-lightest lg:hidden">
      <span className="font-mono text-base text-accent">{num}.</span>
      {title}
      <span className="ml-2 h-px flex-1 bg-line" />
    </h2>
  );
}

export function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="scroll-mt-24 py-12 lg:py-24">
      <SectionLabel num={t.sections.work.num} title={t.sections.work.title} />
      <p className="mb-10 max-w-xl leading-relaxed text-slate">{t.work.subtitle}</p>

      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="group rounded-2xl border border-line bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel sm:p-7"
          >
            {/* header */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-sm text-accent">{p.index}.</span>
              <h3 className="text-xl font-semibold tracking-tight text-lightest transition-colors group-hover:text-accent sm:text-2xl">
                {p.name}
              </h3>
              <span className="ml-auto font-mono text-xs text-muted">{p.year}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-accent/90">{p.tagline[lang]}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
              {p.context[lang]}
            </p>

            {/* summary */}
            <p className="mt-5 max-w-2xl leading-relaxed text-slate">{p.summary[lang]}</p>

            {/* mockup, full width so the dashboard can breathe */}
            <figure className="mt-6">
              <ProjectMockup id={p.id} />
            </figure>

            {/* metrics */}
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {p.metrics.map((m) => (
                <div key={m.label[lang]}>
                  <div className="tnum text-2xl font-semibold text-lightest">{m.value}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {m.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* highlights */}
            <p className="mt-7 font-mono text-[11px] uppercase tracking-widest2 text-muted">
              {t.work.highlightsLabel}
            </p>
            <ul className="mt-3 grid gap-2.5 lg:grid-cols-2 lg:gap-x-8">
              {p.highlights[lang].map((h, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate">
                  <span className="mt-0.5 font-mono text-xs text-accent">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* footer: role + stack */}
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-sm text-slate">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {t.work.roleLabel}:{" "}
                </span>
                {p.role[lang]}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="font-mono text-xs text-light/80">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
