"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { Label, Marquee, MixedTitle, Pill } from "@/components/Primitives";
import { CountUp, Reveal } from "@/components/Reveal";
import { ProjectMockup } from "@/components/Mockups";
import { StackStrip } from "@/components/StackStrip";
import { CASES, SIDE_PROJECT } from "@/lib/cases";
import { PRINCIPLE, PROFILE, SKILLS, STATS } from "@/lib/content";

export function Home() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Abertura ─────────────────────────────────────────────────
          A abertura anima na carga, não no scroll: ela já está na tela
          quando a página abre. */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-20 pt-32 text-center sm:px-8">
        <p className="animate-rise font-mono text-2xs uppercase tracking-widest2 text-text3">
          {t.hero.kicker}
        </p>

        <h1 className="animate-rise animate-delay-1 mt-8 font-display text-[3.2rem] leading-[0.95] tracking-tightest text-text sm:text-[5.5rem] lg:text-[6.75rem]">
          {PROFILE.name}
        </h1>

        <p className="animate-rise animate-delay-2 mt-6 text-[1.05rem] text-text sm:text-[1.4rem]">
          {t.hero.roleLead} <span className="serif-em">{t.hero.roleEm}</span>
        </p>

        <p className="animate-rise animate-delay-3 mt-6 max-w-xl text-[0.95rem] leading-relaxed text-text3 sm:text-base">
          {t.hero.lede}
        </p>

        <div className="animate-rise animate-delay-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/projetos">
            <Pill variant="solid">{t.hero.ctaPrimary}</Pill>
          </Link>
          <Link href="/projetos/copiloto-crm">
            <Pill>{t.hero.ctaSecondary}</Pill>
          </Link>
        </div>

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[0.5625rem] uppercase tracking-widest2 text-text4">
            {t.hero.scroll}
          </span>
          <span className="h-8 w-px animate-blink bg-gradient-to-b from-line2 to-transparent" />
        </div>
      </section>

      <Marquee text={t.marquee} />

      {/* ── 01 Projetos ──────────────────────────────────────────── */}
      <section id="projetos" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal className="flex flex-col items-center text-center">
            <Label align="center">
              {t.sections.work.num} · {t.sections.work.label}
            </Label>
            <MixedTitle
              lead={t.sections.work.titleLead}
              em={t.sections.work.titleEm}
              className="mt-5 max-w-3xl text-[1.9rem] sm:text-[2.9rem]"
            />
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-text3">
              {t.sections.work.subtitle}
            </p>
          </Reveal>

          {/* Bento: o caso principal ocupa a linha inteira */}
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {CASES.map((item, i) => (
              <Reveal
                key={item.slug}
                delay={i * 90}
                className={i === 0 ? "lg:col-span-2" : ""}
              >
                <Link
                  href={`/projetos/${item.slug}`}
                  className={`group flex h-full flex-col rounded-2xl border border-line bg-ink p-5 transition-colors hover:border-line2 sm:p-6 ${
                    i === 0 ? "lg:flex-row lg:items-stretch lg:gap-8" : ""
                  }`}
                >
                  <div className={i === 0 ? "lg:w-[46%] lg:shrink-0" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="tnum font-mono text-2xs text-text4">
                        {item.index}
                      </span>
                      <span className="font-mono text-2xs uppercase tracking-widest2 text-text3">
                        {item.kicker[lang]}
                      </span>
                    </div>

                    <h3 className="display mt-4 text-[1.35rem] text-text transition-colors group-hover:text-hint sm:text-[1.6rem]">
                      {item.title[lang]}
                    </h3>

                    <p className="mt-3 text-[0.9rem] leading-relaxed text-text3">
                      {item.oneLine[lang]}
                    </p>

                    <ul className="mt-5 space-y-2 border-l border-line2 pl-4">
                      {item.cardPoints[lang].slice(0, i === 0 ? 3 : 2).map((point, k) => (
                        <li key={k} className="text-[0.82rem] leading-relaxed text-text3">
                          {point}
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

                  <div className={`mt-6 ${i === 0 ? "lg:mt-0 lg:flex-1" : ""}`}>
                    <ProjectMockup slug={item.slug} lang={lang} tall={i === 0} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Projeto complementar */}
          <Reveal className="mt-5">
            <div className="rounded-2xl border border-line bg-ink/60 p-5 sm:p-6">
              <div className="grid gap-5 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10">
                <div>
                  <span className="font-mono text-2xs uppercase tracking-widest2 text-text4">
                    {t.work.alsoTitle}
                  </span>
                  <h3 className="display mt-3 text-[1.15rem] text-text">
                    {SIDE_PROJECT.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-2xs text-text4">
                    {SIDE_PROJECT.status[lang]}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[0.88rem] leading-relaxed text-text2">
                    {SIDE_PROJECT.summary[lang]}
                  </p>
                  <p className="text-[0.88rem] leading-relaxed text-text3">
                    {SIDE_PROJECT.why[lang]}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Números ──────────────────────────────────────────────── */}
      <section className="border-y border-line bg-ink px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-content">
          <Reveal className="flex justify-center">
            <Label align="center">{t.statsLabel}</Label>
          </Reveal>
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label.en} delay={i * 110}>
                <span aria-hidden className="block h-px w-full bg-line2" />
                <dt className="tnum mt-5 font-display text-[3rem] leading-none text-text sm:text-[3.6rem]">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mt-4">
                  <p className="font-mono text-2xs uppercase tracking-widest2 text-text2">
                    {stat.label[lang]}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-text4">
                    {stat.note[lang]}
                  </p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 02 Princípio ─────────────────────────────────────────── */}
      <section id="principio" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal className="flex flex-col items-center text-center">
            <Label align="center">
              {t.sections.principle.num} · {t.sections.principle.label}
            </Label>
            <p className="mt-6 font-mono text-2xs uppercase tracking-widest2 text-text4">
              {PRINCIPLE.kicker[lang]}
            </p>
            <h2 className="mt-4 font-display text-[2.6rem] italic leading-[0.98] tracking-tightest text-text sm:text-[4rem]">
              {PRINCIPLE.title[lang]}
            </h2>
          </Reveal>

          <Reveal
            delay={120}
            className="prose-ed mx-auto mt-10 max-w-2xl text-center text-[0.95rem] leading-relaxed text-text2"
          >
            {PRINCIPLE.body[lang].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {PRINCIPLE.evidence.map((item, i) => (
              <Reveal as="li" key={item.slug} delay={i * 110}>
                <Link
                  href={`/projetos/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-ink p-5 transition-colors hover:border-line2"
                >
                  <p className="font-mono text-2xs uppercase tracking-widest2 text-text2 transition-colors group-hover:text-hint">
                    {item.project}
                  </p>
                  <p className="mt-4 flex-1 text-[0.88rem] leading-relaxed text-text3">
                    {item.text[lang]}
                  </p>
                  <code className="mt-5 block break-all font-mono text-[0.625rem] text-text4">
                    {item.code}
                  </code>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mx-auto mt-10 max-w-2xl border-l border-line2 pl-5">
            <p className="text-[0.92rem] leading-relaxed text-text3">
              {PRINCIPLE.closing[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 Sobre + competências ──────────────────────────────── */}
      <section
        id="sobre"
        className="scroll-mt-24 border-t border-line bg-ink px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
            <Reveal>
              <Label>
                {t.sections.about.num} · {t.sections.about.label}
              </Label>
              <MixedTitle
                lead={t.sections.about.titleLead}
                em={t.sections.about.titleEm}
                className="mt-5 text-[1.9rem] sm:text-[2.4rem]"
              />
              <p className="mt-6 font-mono text-2xs text-text4">
                {PROFILE.jobTitle[lang]}
                <span aria-hidden className="mx-2">
                  ·
                </span>
                {PROFILE.location[lang]}
              </p>
            </Reveal>

            <Reveal
              delay={100}
              className="prose-ed max-w-prose2 text-[0.95rem] leading-relaxed text-text2"
            >
              {t.about.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <div className="mt-20">
            <Reveal>
              <Label>{t.sections.skills.label}</Label>
            </Reveal>
            <dl className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((group, i) => (
                <Reveal key={group.group.en} delay={i * 80}>
                  <dt className="font-mono text-2xs uppercase tracking-widest2 text-text">
                    {group.group[lang]}
                  </dt>
                  <dd className="mt-4">
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item.label}
                          className="text-[0.86rem] leading-snug text-text3"
                        >
                          {item.label}
                          {item.wip ? (
                            <span className="ml-2 whitespace-nowrap rounded-full border border-warn/30 px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-widest2 text-warn">
                              {lang === "pt" ? "em construção" : "in progress"}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </Reveal>
              ))}
            </dl>
            <Reveal className="mt-10 max-w-prose2">
              <p className="font-mono text-2xs leading-relaxed text-text4">
                {t.sections.skills.note}
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <StackStrip />
          </Reveal>
        </div>
      </section>
    </>
  );
}
