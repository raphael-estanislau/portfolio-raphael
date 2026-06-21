"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectMockup } from "@/components/ProjectMockup";
import { useLang } from "@/components/LanguageProvider";

export function LazyProjectMockup({
  id,
  caption,
}: {
  id: string;
  caption: string;
}) {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <figure ref={ref} className="mt-6">
      {visible ? (
        <ProjectMockup id={id} />
      ) : (
        <div
          className="flex h-48 items-center justify-center rounded-xl border border-line bg-panel/40"
          aria-hidden
        >
          <span className="font-mono text-xs text-muted">{t.a11y.loadingPreview}</span>
        </div>
      )}
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}
