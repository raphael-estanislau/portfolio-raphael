"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

/**
 * Nav flutuante em pílula, fixa no topo e centrada.
 *
 * Ela encolhe ao rolar em vez de sumir: o site tem páginas de caso longas e
 * perder a saída para os projetos no meio de um estudo de caso é pior do que
 * gastar 56 px de topo.
 */
export function Nav() {
  const { t, lang, toggle } = useLang();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = onHome
    ? [
        { href: "#projetos", label: t.nav.work },
        { href: "#principio", label: t.nav.principle },
        { href: "#sobre", label: t.nav.about },
      ]
    : [
        { href: "/", label: t.nav.home },
        { href: "/projetos", label: t.nav.work },
      ];

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-5">
      <nav
        aria-label={t.a11y.mainNav}
        className={`pointer-events-auto flex items-center gap-1 rounded-full border border-line2/70 bg-ink/80 p-1.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        {/* Monograma */}
        <Link
          href="/"
          aria-label={PROFILE.name}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line2 bg-card font-display text-[0.95rem] italic text-text transition-colors hover:border-text3"
        >
          re
        </Link>

        {/* Em telas estreitas a pílula guarda só o primeiro link: com os três,
            ela estoura a largura de 390 px e quebra a linha. */}
        <ul className="flex items-center">
          {links.map((link, i) => (
            <li key={link.href} className={i === 0 ? "" : "hidden sm:block"}>
              <Link
                href={link.href}
                className="block rounded-full px-3 py-1.5 text-[0.82rem] text-text3 transition-colors hover:bg-card2 hover:text-text sm:px-3.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <span aria-hidden className="mx-0.5 h-4 w-px bg-line2" />

        <button
          type="button"
          onClick={toggle}
          aria-label={t.a11y.langToggle}
          className="rounded-full px-2.5 py-1.5 font-mono text-2xs uppercase tracking-widest2 text-text3 transition-colors hover:bg-card2 hover:text-text"
        >
          {lang === "pt" ? "pt" : "en"}
        </button>

        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-1 whitespace-nowrap rounded-full bg-text px-3 py-1.5 text-[0.8rem] font-medium text-void transition-opacity hover:opacity-85 sm:px-3.5 sm:text-[0.82rem]"
        >
          {t.nav.sayHi}
          <span aria-hidden className="text-[0.7rem]">
            ↗
          </span>
        </a>
      </nav>
    </div>
  );
}
