"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

/**
 * Faixa de logos da stack.
 *
 * Todos renderizam em monocromático via filtro CSS. Um mosaico de marcas
 * coloridas roubaria a atenção do conteúdo e faria o site parecer catálogo de
 * ferramenta. O que interessa é o sistema, não o crachá de cada dependência.
 */
const STACK = [
  { file: "typescript", name: "TypeScript" },
  { file: "nextjs", name: "Next.js" },
  { file: "react", name: "React" },
  { file: "nodejs", name: "Node.js" },
  { file: "expressjs", name: "Express" },
  { file: "openai", name: "OpenAI" },
  { file: "zod", name: "Zod" },
  { file: "prisma", name: "Prisma" },
  { file: "postgresql", name: "PostgreSQL" },
  { file: "google-cloud", name: "Google Cloud · BigQuery" },
  { file: "python", name: "Python" },
  { file: "flask", name: "Flask" },
  { file: "tailwindcss", name: "Tailwind CSS" },
  { file: "vitest", name: "Vitest" },
  { file: "redis", name: "Redis" },
  { file: "docker", name: "Docker" },
  { file: "railway", name: "Railway" },
  { file: "vercel", name: "Vercel" },
];

export function StackStrip() {
  const { lang } = useLang();

  return (
    <div className="border-t border-line pt-8">
      <p className="font-mono text-2xs uppercase tracking-widest2 text-text4">
        {lang === "pt" ? "Ferramentas no dia a dia" : "Day-to-day tooling"}
      </p>
      <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-6">
        {STACK.map((item) => (
          <li key={item.file} className="flex items-center" title={item.name}>
            <Image
              src={`/logos/${item.file}.svg`}
              alt={item.name}
              width={26}
              height={26}
              className="logo-mono h-[1.375rem] w-auto"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
