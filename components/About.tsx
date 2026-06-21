"use client";

import { useLang } from "@/components/LanguageProvider";
import { SKILLS } from "@/lib/content";
import { highlightTerms } from "@/lib/highlight";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="scroll-mt-24 py-12 lg:py-24">
      <SectionLabel num={t.sections.about.num} title={t.sections.about.title} />

      <div className="space-y-5 leading-relaxed text-slate">
        {t.about.body.map((para, i) => (
          <p key={i}>{highlightTerms(para, lang)}</p>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {t.about.skillsIntro}
        </p>
        {SKILLS.map((s) => (
          <div key={s.group[lang]} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {s.group[lang]}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-light">
                  <span className="text-accent" aria-hidden>
                    ▹
                  </span>
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
