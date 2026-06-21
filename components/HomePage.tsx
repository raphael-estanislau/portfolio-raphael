"use client";

import { Sidebar } from "@/components/Sidebar";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Spotlight } from "@/components/Spotlight";
import { SkipLink } from "@/components/SkipLink";
import { MobileNav } from "@/components/MobileNav";
import { useLang } from "@/components/LanguageProvider";

export function HomePage() {
  const { t } = useLang();

  return (
    <>
      <SkipLink />
      <Spotlight />

      <div className="mx-auto min-h-screen max-w-content px-6 py-12 pb-24 sm:px-10 lg:flex lg:justify-between lg:gap-10 lg:px-16 lg:py-0 lg:pb-0">
        <Sidebar />

        <main id="content" className="pt-14 lg:w-[54%] lg:py-24">
          <About />
          <Work />
          <Contact />

          <footer className="pb-10 pt-6">
            <p className="font-mono text-xs leading-relaxed text-muted">
              {t.footer} · {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      </div>

      <MobileNav />
    </>
  );
}
