import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseView } from "@/components/CaseView";
import { CASES, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return CASES.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCase(params.slug);
  if (!study) return {};

  return {
    title: `${study.title.pt} · Raphael Estanislau`,
    description: study.oneLine.pt,
    alternates: { canonical: `/projetos/${study.slug}` },
    openGraph: {
      title: study.title.pt,
      description: study.oneLine.pt,
      type: "article",
      url: `/projetos/${study.slug}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!getCase(params.slug)) notFound();
  return <CaseView slug={params.slug} />;
}
