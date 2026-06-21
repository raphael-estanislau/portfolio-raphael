"use client";

import { useLang } from "@/components/LanguageProvider";
import { SKILLS } from "@/lib/content";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 text-lg font-semibold text-lightest lg:hidden">
      <span className="font-mono text-base text-accent">{num}.</span>
      {title}
      <span className="ml-2 h-px flex-1 bg-line" />
    </h2>
  );
}

export function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="scroll-mt-24 py-12 lg:py-24">
      <SectionLabel num={t.sections.about.num} title={t.sections.about.title} />

      <div className="space-y-5 leading-relaxed text-slate">
        {t.about.body.map((para, i) => (
          <p key={i}>
            {para.split(/(Grupo Shoulder|Oriba|Haight|Shoulder|data warehouse|BigQuery|HTML único)/).map((chunk, j) =>
              /^(Grupo Shoulder|Oriba|Haight|Shoulder|data warehouse|BigQuery|HTML único)$/.test(chunk) ? (
                <span key={j} className="font-medium text-light">
                  {chunk}
                </span>
              ) : (
                chunk
              )
            )}
          </p>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {SKILLS.map((s) => (
          <div key={s.group[lang]} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {s.group[lang]}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-light">
                  <span className="text-accent">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
