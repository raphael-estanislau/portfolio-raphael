"use client";

import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";
import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function Sidebar() {
  const { t, lang, setLang } = useLang();
  const active = useActiveSection();

  const navItems: { id: SectionId; label: string }[] = [
    { id: "about", label: t.sidebar.nav.about },
    { id: "work", label: t.sidebar.nav.work },
    { id: "contact", label: t.sidebar.nav.contact },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="animate-fade-up animate-delay-1 mb-6 flex items-center gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-panel2/60 font-mono text-lg font-semibold text-accent"
            aria-hidden
          >
            RE
          </div>
          <p className="font-mono text-sm text-accent">{PROFILE.role[lang]}</p>
        </div>

        <h1 className="animate-fade-up animate-delay-2 text-4xl font-semibold tracking-tight text-lightest sm:text-5xl">
          {PROFILE.name}
        </h1>
        <h2 className="animate-fade-up animate-delay-3 mt-4 max-w-md text-2xl font-medium leading-tight text-light sm:text-3xl">
          {t.sidebar.tagline}
        </h2>
        <p className="animate-fade-up animate-delay-4 mt-5 max-w-sm leading-relaxed text-slate">
          {t.sidebar.intro}
        </p>

        <p className="animate-fade-up animate-delay-5 mt-6 inline-flex items-center gap-2 font-mono text-xs text-slate">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.sidebar.available}
        </p>

        <nav className="mt-14 hidden lg:block" aria-label={t.a11y.pageNav}>
          <ul className="space-y-4">
            {navItems.map((item) => {
              const on = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1"
                    aria-current={on ? "true" : undefined}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        on
                          ? "w-16 bg-accent"
                          : "w-8 bg-line group-hover:w-16 group-hover:bg-light"
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-widest2 transition-colors ${
                        on ? "text-accent" : "text-muted group-hover:text-light"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex items-center justify-between lg:mt-0">
        <div className="flex items-center gap-5 text-slate">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GitHubIcon />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="E-mail"
            className="transition-colors hover:text-accent"
          >
            <MailIcon />
          </a>
        </div>

        <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted">
          <button
            type="button"
            onClick={() => setLang("pt")}
            className={`px-1.5 py-1 transition-colors hover:text-light ${lang === "pt" ? "text-accent" : ""}`}
            aria-pressed={lang === "pt"}
          >
            PT
          </button>
          <span aria-hidden className="text-line">
            /
          </span>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-1.5 py-1 transition-colors hover:text-light ${lang === "en" ? "text-accent" : ""}`}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
