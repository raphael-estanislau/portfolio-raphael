"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24"
    >
      {/* masthead meta line */}
      <div className="flex animate-fade-in flex-wrap items-center justify-between gap-3 border-b border-rule pb-4 font-sans text-[11px] uppercase tracking-widest2 text-muted">
        <span>{t.hero.kicker}</span>
        <span>{PROFILE.location[lang]}</span>
      </div>

      {/* headline */}
      <h1 className="mt-10 font-display text-[15vw] font-medium leading-[0.92] tracking-[-0.02em] text-ink sm:mt-14 sm:text-8xl lg:text-[8.5rem]">
        {t.hero.headline.map((line, i) => (
          <span
            key={i}
            className="block animate-fade-up"
            style={{ animationDelay: `${0.05 + i * 0.08}s` }}
          >
            {i === 1 ? (
              <span className="italic text-accent">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h1>

      {/* lead + role */}
      <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <p
          className="max-w-xl animate-fade-up text-lg leading-relaxed text-soft sm:text-xl"
          style={{ animationDelay: "0.32s" }}
        >
          {t.hero.lead}
        </p>

        <div
          className="animate-fade-up md:justify-self-end md:text-right"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
            {PROFILE.role[lang]}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 border-b-2 border-accent pb-0.5 font-sans text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {t.hero.cta}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 font-sans text-xs text-muted md:justify-end">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </p>
        </div>
      </div>
    </section>
  );
}
