"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROJECTS, PROFILE } from "@/lib/content";
import { SectionLabel } from "@/components/SectionLabel";
import { LazyProjectMockup } from "@/components/LazyProjectMockup";
import { HighlightsList } from "@/components/HighlightsList";

function ProjectLinks({
  links,
  projectName,
}: {
  links: NonNullable<(typeof PROJECTS)[number]["links"]>;
  projectName: string;
}) {
  const { t, lang } = useLang();

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-accent/50 px-3 py-1 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
        >
          Demo
        </a>
      )}
      {links.repo && (
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-xs text-light transition-colors hover:border-accent/40 hover:text-accent"
        >
          GitHub
        </a>
      )}
      {!links.demo && !links.repo && (
        <a
          href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`${t.work.requestDemo}: ${projectName}`)}`}
          className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-xs text-light transition-colors hover:border-accent/40 hover:text-accent"
        >
          {t.work.requestDemo}
        </a>
      )}
      {links.note && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {links.note[lang]}
        </span>
      )}
    </div>
  );
}

export function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="scroll-mt-24 py-12 lg:py-24">
      <SectionLabel
        num={t.sections.work.num}
        title={t.sections.work.title}
        className="mb-3"
      />
      <p className="mb-10 max-w-xl leading-relaxed text-slate">{t.work.subtitle}</p>

      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-line bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panel sm:p-7"
          >
            <span
              className="pointer-events-none absolute -right-2 -top-4 font-mono text-8xl font-bold text-line/40 select-none sm:text-9xl"
              aria-hidden
            >
              {p.index}
            </span>

            <div className="relative">
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

              {p.links && <ProjectLinks links={p.links} projectName={p.name} />}

              <p className="mt-5 max-w-2xl leading-relaxed text-slate">{p.summary[lang]}</p>

              <LazyProjectMockup id={p.id} caption={p.mockupCaption[lang]} />

              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-b border-line/60 pb-6">
                {p.metrics.map((m) => (
                  <div key={m.label[lang]}>
                    <div className="tnum text-2xl font-semibold text-lightest">{m.value}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      {m.label[lang]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <HighlightsList items={p.highlights[lang]} label={t.work.highlightsLabel} />
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-slate">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {t.work.roleLabel}:{" "}
                  </span>
                  {p.role[lang]}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {t.work.stackLabel}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-panel2/50 px-2.5 py-1 font-mono text-[11px] text-light/90"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
