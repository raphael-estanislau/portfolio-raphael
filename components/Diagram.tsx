import type { DiagramStep, StepKind } from "@/lib/cases";
import type { Lang } from "@/lib/content";

/**
 * Diagrama de fluxo vertical.
 *
 * A decisão visual que importa: o passo do modelo é invertido, claro sobre
 * escuro. O argumento do primeiro estudo de caso é que o modelo é UM passo
 * cercado de código determinístico, e o diagrama precisa dizer isso antes de
 * qualquer parágrafo.
 */

const KIND_STYLE: Record<StepKind, { box: string; dot: string; tag: string; title: string; body: string }> = {
  input: {
    box: "border-line bg-ink",
    dot: "bg-text4",
    tag: "text-text4",
    title: "text-text",
    body: "text-text3",
  },
  app: {
    box: "border-line border-l-2 border-l-text3 bg-ink",
    dot: "bg-text3",
    tag: "text-text3",
    title: "text-text",
    body: "text-text3",
  },
  guard: {
    box: "border-line border-l-2 border-l-hint bg-ink",
    dot: "bg-hint",
    tag: "text-hint",
    title: "text-text",
    body: "text-text3",
  },
  model: {
    box: "border-text bg-text",
    dot: "bg-void",
    tag: "text-void/55",
    title: "text-void",
    body: "text-void/70",
  },
  output: {
    box: "border-line bg-card2",
    dot: "bg-text4",
    tag: "text-text4",
    title: "text-text",
    body: "text-text3",
  },
};

const KIND_TAG: Record<StepKind, Record<Lang, string>> = {
  input: { pt: "entrada", en: "input" },
  app: { pt: "aplicação", en: "application" },
  guard: { pt: "controle", en: "control" },
  model: { pt: "modelo", en: "model" },
  output: { pt: "saída", en: "output" },
};

export function Diagram({
  steps,
  lang,
  label,
  legend,
}: {
  steps: DiagramStep[];
  lang: Lang;
  label: string;
  legend: { title: string; app: string; model: string; guard: string };
}) {
  return (
    <figure className="not-prose">
      <ol aria-label={label} className="space-y-0">
        {steps.map((step, i) => {
          const style = KIND_STYLE[step.kind];
          const last = i === steps.length - 1;
          return (
            <li key={i}>
              <div className={`rounded-xl border px-4 py-3.5 sm:px-5 ${style.box}`}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    aria-hidden
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
                  />
                  <h4
                    className={`flex-1 text-[0.92rem] font-medium leading-snug ${style.title}`}
                  >
                    {step.label[lang]}
                  </h4>
                  <span
                    className={`font-mono text-2xs uppercase tracking-widest2 ${style.tag}`}
                  >
                    {KIND_TAG[step.kind][lang]}
                  </span>
                </div>
                {step.detail ? (
                  <p
                    className={`mt-2 pl-[1.125rem] text-[0.84rem] leading-relaxed ${style.body}`}
                  >
                    {step.detail[lang]}
                  </p>
                ) : null}
              </div>

              {!last ? (
                <div aria-hidden className="flex h-5 justify-center">
                  <span className="w-px bg-line2" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <figcaption className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 font-mono text-2xs text-text4">
        <span className="uppercase tracking-widest2">{legend.title}</span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2.5 w-0.5 bg-text3" />
          {legend.app}
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2.5 w-0.5 bg-hint" />
          {legend.guard}
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-text" />
          {legend.model}
        </span>
      </figcaption>
    </figure>
  );
}
