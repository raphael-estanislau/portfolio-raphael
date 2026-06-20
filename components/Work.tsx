"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROJECTS } from "@/lib/content";
import { ProjectMockup } from "@/components/ProjectMockup";

export function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      {/* section head */}
      <div className="flex items-end justify-between border-b border-rule pb-5">
        <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {t.work.title}
        </h2>
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
          {PROJECTS.length.toString().padStart(2, "0")} {lang === "pt" ? "projetos" : "projects"}
        </span>
      </div>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {t.work.subtitle}
      </p>

      <div>
        {PROJECTS.map((p, i) => (
          <article
            key={p.id}
            className="grid gap-x-12 gap-y-8 border-b border-line py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20"
          >
            {/* ---- left: editorial copy ---- */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-accent">{p.index}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
                  {p.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {p.name}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-accent">
                {p.tagline[lang]}
              </p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-widest text-muted">
                {p.context[lang]}
              </p>

              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-soft">
                {p.summary[lang]}
              </p>

              {/* metrics */}
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
                {p.metrics.map((m) => (
                  <div key={m.label[lang]}>
                    <div className="tnum font-display text-3xl leading-none text-ink">
                      {m.value}
                    </div>
                    <div className="mt-1.5 font-sans text-[10px] uppercase tracking-widest text-muted">
                      {m.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- right: figure + details ---- */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <figure>
                <ProjectMockup id={p.id} />
                <figcaption className="mt-3 font-sans text-[10px] uppercase tracking-widest text-muted">
                  {lang === "pt" ? "Fig." : "Fig."} {p.index} — {p.name}
                  <span className="text-line"> · </span>
                  {lang === "pt"
                    ? "representação da interface"
                    : "interface representation"}
                </figcaption>
              </figure>

              {/* highlights */}
              <p className="mt-9 font-sans text-[11px] uppercase tracking-widest2 text-muted">
                {t.work.highlightsLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {p.highlights[lang].map((h, idx) => (
                  <li key={idx} className="flex gap-3 text-[0.95rem] leading-relaxed text-soft">
                    <span className="tnum mt-0.5 font-sans text-xs text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* role + stack */}
              <div className="mt-7 border-t border-line pt-5">
                <p className="font-sans text-[11px] uppercase tracking-widest text-muted">
                  {t.work.roleLabel}
                </p>
                <p className="mt-2 text-[0.95rem] text-soft">{p.role[lang]}</p>

                <p className="mt-5 font-sans text-[11px] uppercase tracking-widest text-muted">
                  {t.work.stackLabel}
                </p>
                <p className="mt-2 font-sans text-[13px] leading-relaxed text-soft">
                  {p.stack.map((s, idx) => (
                    <span key={s}>
                      {s}
                      {idx < p.stack.length - 1 && (
                        <span className="text-line"> · </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
