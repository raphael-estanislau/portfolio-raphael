"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROJECTS } from "@/lib/content";

export function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-24">
      <div className="mb-14">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t.work.title}
        </h2>
        <p className="mt-3 text-muted">{t.work.subtitle}</p>
      </div>

      <div className="space-y-6">
        {PROJECTS.map((p, i) => {
          const accentText = p.accent === "accent" ? "text-accent" : "text-accent2";
          const accentBorder =
            p.accent === "accent" ? "hover:border-accent/60" : "hover:border-accent2/60";
          return (
            <article
              key={p.id}
              className={`group rounded-2xl border border-line bg-panel/60 p-7 transition-colors sm:p-9 ${accentBorder}`}
              style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s both` }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className={`mt-1 font-mono text-sm ${accentText}`}>
                {p.tagline[lang]}
              </p>

              <p className="mt-5 max-w-3xl leading-relaxed text-soft">
                {p.summary[lang]}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-6">
                {p.metrics.map((m) => (
                  <div key={m.label[lang]}>
                    <div className="text-2xl font-semibold text-white">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-xs uppercase tracking-wide text-muted">
                      {m.label[lang]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {t.work.highlightsLabel}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {p.highlights[lang].map((h, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-soft"
                      >
                        <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${p.accent === "accent" ? "bg-accent" : "bg-accent2"}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:w-44 sm:border-l sm:border-line sm:pl-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {t.work.roleLabel}
                  </p>
                  <p className="mt-3 text-sm text-soft">{p.role[lang]}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
                  {t.work.stackLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-xs text-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
