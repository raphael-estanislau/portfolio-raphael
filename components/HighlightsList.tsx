"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";

export function HighlightsList({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > 2;
  const visible = expanded || !hasMore ? items : items.slice(0, 2);

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{label}</p>
      <ul className="mt-3 grid gap-2.5 lg:grid-cols-2 lg:gap-x-8">
        {visible.map((h, idx) => (
          <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate">
            <span className="mt-0.5 font-mono text-xs text-accent" aria-hidden>
              ▹
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 font-mono text-xs text-accent transition-colors hover:text-accentSoft"
          aria-expanded={expanded}
        >
          {expanded ? t.work.showLess : t.work.showMore}
        </button>
      )}
    </div>
  );
}
