"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 py-24"
    >
      <p className="animate-fade-up font-mono text-sm text-accent">
        {t.hero.kicker}
      </p>

      <h1 className="mt-6 animate-fade-up text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
        {PROFILE.name}
      </h1>

      <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-soft sm:text-xl">
        {t.hero.lead}
      </p>

      <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          {t.hero.cta}
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-lg border border-line px-5 py-3 text-sm font-medium text-soft transition-colors hover:border-accent hover:text-white"
        >
          {PROFILE.email}
        </a>
      </div>

      <p className="mt-16 animate-fade-up font-mono text-xs uppercase tracking-widest text-muted">
        {lang === "pt" ? PROFILE.role.pt : PROFILE.role.en}
      </p>
    </section>
  );
}
