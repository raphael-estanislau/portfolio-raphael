"use client";

import { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { useLang } from "@/components/LanguageProvider";

export default function Page() {
  const { t } = useLang();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const root = document.body.style;
      root.setProperty("--mx", `${e.clientX}px`);
      root.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* cursor spotlight, subtle depth */}
      <div className="spotlight pointer-events-none fixed inset-0 -z-10 hidden lg:block" />

      <div className="mx-auto min-h-screen max-w-content px-6 py-12 sm:px-10 lg:flex lg:justify-between lg:gap-10 lg:px-16 lg:py-0">
        <Sidebar />

        <main id="content" className="pt-14 lg:w-[54%] lg:py-24">
          <About />
          <Work />
          <Contact />

          <footer className="pb-10 pt-6">
            <p className="font-mono text-xs leading-relaxed text-muted">{t.footer}</p>
          </footer>
        </main>
      </div>
    </>
  );
}
