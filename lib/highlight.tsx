import { HIGHLIGHT_TERMS, type Lang } from "@/lib/content";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightTerms(text: string, lang: Lang) {
  const terms = [...HIGHLIGHT_TERMS[lang]].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");
  const matchers = new Set(terms);

  return text.split(pattern).map((chunk, index) =>
    matchers.has(chunk) ? (
      <span key={index} className="font-medium text-light">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
}
