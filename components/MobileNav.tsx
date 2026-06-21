"use client";

import { useLang } from "@/components/LanguageProvider";
import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";

export function MobileNav() {
  const { t } = useLang();
  const active = useActiveSection();

  const navItems: { id: SectionId; label: string }[] = [
    { id: "about", label: t.sidebar.nav.about },
    { id: "work", label: t.sidebar.nav.work },
    { id: "contact", label: t.sidebar.nav.contact },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-navy/95 backdrop-blur-md lg:hidden"
      aria-label={t.a11y.mobileNav}
    >
      <ul className="mx-auto flex max-w-content items-stretch justify-around px-2 py-2">
        {navItems.map((item) => {
          const on = active === item.id;
          return (
            <li key={item.id} className="flex-1">
              <a
                href={`#${item.id}`}
                className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  on ? "text-accent" : "text-muted hover:text-light"
                }`}
                aria-current={on ? "true" : undefined}
              >
                <span
                  className={`h-0.5 w-6 rounded-full transition-colors ${
                    on ? "bg-accent" : "bg-transparent"
                  }`}
                  aria-hidden
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
