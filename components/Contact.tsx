"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24 sm:py-32">
      <p className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
        {t.contact.kicker}
      </p>

      <h2 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-7xl">
        {t.contact.title}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {t.contact.body}
      </p>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        <a
          href={`mailto:${PROFILE.email}`}
          className="group flex items-center justify-between bg-card px-6 py-7 transition-colors hover:bg-paper2/60"
        >
          <span>
            <span className="block font-sans text-[10px] uppercase tracking-widest2 text-muted">
              {t.contact.emailLabel}
            </span>
            <span className="mt-1.5 block font-serif text-lg text-ink group-hover:text-accent">
              {PROFILE.email}
            </span>
          </span>
          <span className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </a>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between bg-card px-6 py-7 transition-colors hover:bg-paper2/60"
        >
          <span>
            <span className="block font-sans text-[10px] uppercase tracking-widest2 text-muted">
              {t.contact.githubLabel}
            </span>
            <span className="mt-1.5 block font-serif text-lg text-ink group-hover:text-accent">
              {PROFILE.github.replace("https://", "")}
            </span>
          </span>
          <span className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
            ↗
          </span>
        </a>
      </div>

      <p className="mt-8 font-sans text-xs text-muted">{PROFILE.location[lang]}</p>
    </section>
  );
}
