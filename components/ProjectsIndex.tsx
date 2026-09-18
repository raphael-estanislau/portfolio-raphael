"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { ProjectMockup } from "@/components/Mockups";
import { Label, MixedTitle } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { CASES, SIDE_PROJECT } from "@/lib/cases";

export function ProjectsIndex() {
  const { t, lang } = useLang();

  return (
    <div className="px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-content">
        <Reveal className="flex flex-col items-center text-center">
          <Label align="center">{t.sections.work.label}</Label>
          <MixedTitle
            as="h1"
            lead={t.work.indexTitleLead}
            em={t.work.indexTitleEm}
            className="mt-6 text-[2rem] sm:text-[3rem]"
          />
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-text3">
            {t.work.indexLede}
          </p>
        </Reveal>

        <ul className="mt-16 space-y-5">
          {CASES.map((item, i) => (
            <Reveal as="li" key={item.slug} delay={i * 90}>
              <Link
                href={`/projetos/${item.slug}`}
                className="group grid gap-6 rounded-2xl border border-line bg-ink p-5 transition-colors hover:border-line2 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-10"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-2xs">
                    <span className="tnum text-text4">{item.index}</span>
                    <span className="uppercase tracking-widest2 text-text3">
                      {item.kicker[lang]}
                    </span>
                    <span aria-hidden className="text-text4">
                      ·
                    </span>
                    <span className="text-text4">{item.status[lang]}</span>
                  </div>

                  <h2 className="display mt-4 text-[1.4rem] text-text transition-colors group-hover:text-hint sm:text-[1.7rem]">
                    {item.title[lang]}
                  </h2>

                  <p className="mt-3 max-w-prose2 text-[0.92rem] leading-relaxed text-text2">
                    {item.oneLine[lang]}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 7).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line2 px-2.5 py-1 font-mono text-2xs text-text4"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-widest2 text-text2 transition-colors group-hover:text-hint">
                    {t.work.readCase}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </div>

                <div>
                  <ProjectMockup slug={item.slug} lang={lang} />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <Label>{t.work.alsoTitle}</Label>
          <p className="mt-4 font-mono text-2xs text-text4">{t.work.alsoSubtitle}</p>

          <div className="mt-6 grid gap-6 rounded-2xl border border-line bg-ink p-5 sm:p-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10">
            <div>
              <h3 className="display text-[1.2rem] text-text">{SIDE_PROJECT.name}</h3>
              <p className="mt-2 text-[0.88rem] text-text3">{SIDE_PROJECT.title[lang]}</p>
              <p className="mt-2.5 font-mono text-2xs text-text4">
                {SIDE_PROJECT.status[lang]}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {SIDE_PROJECT.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line2 px-2.5 py-1 font-mono text-2xs text-text4"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3.5">
              <p className="text-[0.9rem] leading-relaxed text-text2">
                {SIDE_PROJECT.summary[lang]}
              </p>
              <p className="text-[0.9rem] leading-relaxed text-text3">
                {SIDE_PROJECT.why[lang]}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
