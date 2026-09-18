import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projetos · Raphael Estanislau",
  description:
    "Estudos de caso de três sistemas em produção: um copiloto de IA sobre dados de CRM, uma plataforma de análise operacional omnichannel e uma plataforma de inteligência de mercado.",
  alternates: { canonical: "/projetos" },
};

export default function Page() {
  return <ProjectsIndex />;
}
