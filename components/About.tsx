"use client";

import { useLang } from "@/components/LanguageProvider";
import { SKILLS } from "@/lib/content";

export function About() {
  const { t, lang } = useLang();

  return (
    <section
      id="about"
      className="border-y border-line bg-panel/40"
    >
      <div className="mx-auto grid max-w-content gap-14 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-5">
            {t.about.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-soft">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {t.about.skillsTitle}
          </p>
          <div className="mt-6 space-y-7">
            {SKILLS.map((s) => (
              <div key={s.group[lang]}>
                <p className="font-mono text-sm text-accent">{s.group[lang]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-panel2 px-3 py-1.5 text-sm text-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
