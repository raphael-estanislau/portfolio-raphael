"use client";

import { useLang } from "@/components/LanguageProvider";
import { SKILLS } from "@/lib/content";

export function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="border-t border-rule bg-paper2/40">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
            {t.about.title}
          </p>
          <div className="mt-6 space-y-6">
            {t.about.body.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-2xl leading-snug text-ink sm:text-[1.7rem]"
                    : "text-lg leading-relaxed text-soft"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="md:border-l md:border-line md:pl-12">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
            {t.about.skillsTitle}
          </p>
          <dl className="mt-7 space-y-6">
            {SKILLS.map((s) => (
              <div
                key={s.group[lang]}
                className="grid grid-cols-[1fr] gap-1 border-b border-line pb-5 last:border-0 sm:grid-cols-[110px_1fr] sm:gap-4"
              >
                <dt className="font-serif text-base italic text-accent">
                  {s.group[lang]}
                </dt>
                <dd className="font-sans text-[13px] leading-relaxed text-soft">
                  {s.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
