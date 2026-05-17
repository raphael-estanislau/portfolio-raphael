"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export function Nav() {
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-tight text-white">
          {PROFILE.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <nav className="flex items-center gap-1 text-sm">
          <a
            href="#work"
            className="rounded-md px-3 py-2 text-muted transition-colors hover:text-white"
          >
            {t.nav.work}
          </a>
          <a
            href="#about"
            className="rounded-md px-3 py-2 text-muted transition-colors hover:text-white"
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="rounded-md px-3 py-2 text-muted transition-colors hover:text-white"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="ml-2 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-soft transition-colors hover:border-accent hover:text-accent"
          >
            {t.langToggle}
          </button>
        </nav>
      </div>
    </header>
  );
}
