"use client";

import { useLang } from "@/components/LanguageProvider";

export function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:font-mono focus:text-2xs focus:uppercase focus:tracking-widest2 focus:text-void"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
