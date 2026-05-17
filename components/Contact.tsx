"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {t.contact.title}
      </h2>
      <p className="mt-3 max-w-xl text-muted">{t.contact.body}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${PROFILE.email}`}
          className="group rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/60"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {t.contact.emailLabel}
          </p>
          <p className="mt-2 font-mono text-sm text-soft transition-colors group-hover:text-accent">
            {PROFILE.email}
          </p>
        </a>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/60"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {t.contact.githubLabel}
          </p>
          <p className="mt-2 font-mono text-sm text-soft transition-colors group-hover:text-accent">
            {PROFILE.github.replace("https://", "")}
          </p>
        </a>
      </div>
    </section>
  );
}
