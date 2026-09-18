import type { ReactNode } from "react";

/**
 * Rótulo de seção: régua curta + micro-texto em caixa alta espaçada.
 * É o elemento que dá ritmo sem precisar de caixa, sombra ou gradiente.
 */
export function Label({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <span aria-hidden className="h-px w-8 bg-line2" />
      <span className="font-mono text-2xs uppercase tracking-widest2 text-text3">
        {children}
      </span>
      {align === "center" ? <span aria-hidden className="h-px w-8 bg-line2" /> : null}
    </div>
  );
}

/**
 * Título misto: sans em peso alto + serifa itálica.
 *
 * A palavra em itálico carrega a ideia, não a decoração, e por isso ela vem
 * sempre do conteúdo, nunca de um corte automático da frase.
 */
export function MixedTitle({
  lead,
  em,
  className = "",
  as: Tag = "h2",
}: {
  lead: string;
  em: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={`display text-text ${className}`}>
      {lead} <span className="serif-em">{em}</span>
    </Tag>
  );
}

/** Pílula. Primária é branca sólida; secundária é contorno. */
export function Pill({
  children,
  variant = "ghost",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.86rem] font-medium transition-all";
  const styles =
    variant === "solid"
      ? "bg-text text-void hover:opacity-85"
      : "border border-line2 text-text2 hover:border-text3 hover:text-text";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

/** Chip de estado de dado. Usa a paleta funcional, nunca a decorativa. */
export function StatusChip({
  tone = "ok",
  children,
}: {
  tone?: "ok" | "warn" | "off";
  children: ReactNode;
}) {
  const dot =
    tone === "ok" ? "bg-ok" : tone === "warn" ? "bg-warn" : "bg-text4";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line2 px-3 py-1.5 font-mono text-2xs text-text3">
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

/**
 * Faixa em marquise. O texto é a tese do portfólio, repetida. É a única
 * peça puramente atmosférica do site, então ela carrega conteúdo de verdade.
 */
export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 });
  return (
    <div
      aria-hidden
      className="relative flex w-full overflow-hidden border-y border-line bg-ink py-7 sm:py-9"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {items.map((_, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="font-display text-[1.9rem] italic text-text2/70 sm:text-[2.6rem]">
              {text}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hint/70" />
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {items.map((_, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="font-display text-[1.9rem] italic text-text2/70 sm:text-[2.6rem]">
              {text}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hint/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
