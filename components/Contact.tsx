"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-28">
      <div className="rounded-2xl border border-line bg-panel/40 p-8 sm:p-10 lg:text-left">
        <p className="font-mono text-sm text-accent">{t.contact.overline}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-lightest sm:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-slate lg:max-w-lg">
          {t.contact.body}
        </p>

        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-10 inline-block rounded-md border border-accent px-7 py-4 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          {t.contact.cta}
        </a>

        <p className="mt-6 font-mono text-xs text-muted">
          {PROFILE.email} · {PROFILE.location[lang]}
        </p>
      </div>
    </section>
  );
}
