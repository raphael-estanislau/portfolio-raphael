"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-base font-medium tracking-tight text-ink"
        >
          Raphael Estanislau
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <div className="hidden items-center gap-6 sm:flex">
            {[
              { href: "#work", label: t.nav.work },
              { href: "#about", label: t.nav.about },
              { href: "#contact", label: t.nav.contact },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-muted">
            <button
              onClick={() => setLang("pt")}
              className={`px-1 transition-colors hover:text-ink ${
                lang === "pt" ? "text-ink" : ""
              }`}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <span aria-hidden className="text-line">
              ·
            </span>
            <button
              onClick={() => setLang("en")}
              className={`px-1 transition-colors hover:text-ink ${
                lang === "en" ? "text-ink" : ""
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
