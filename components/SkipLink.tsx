"use client";

import { useLang } from "@/components/LanguageProvider";

export function SkipLink() {
  const { t } = useLang();

  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-accent focus:bg-panel focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
