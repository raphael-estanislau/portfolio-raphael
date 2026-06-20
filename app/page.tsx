"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { useLang } from "@/components/LanguageProvider";
import { PROFILE } from "@/lib/content";

export default function Page() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-10 font-sans text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {PROFILE.name}
          </span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
