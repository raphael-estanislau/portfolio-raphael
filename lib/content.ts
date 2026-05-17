export type Lang = "pt" | "en";

type Bi = Record<Lang, string>;
type BiList = Record<Lang, string[]>;

export interface Project {
  id: string;
  year: string;
  name: string;
  tagline: Bi;
  summary: Bi;
  role: Bi;
  highlights: BiList;
  stack: string[];
  metrics: { value: string; label: Bi }[];
  accent: "accent" | "accent2";
}

export const PROFILE = {
  name: "Raphael Estanislau",
  email: "raphaelldinizz@icloud.com",
  github: "https://github.com/raphael-estanislau",
  role: {
    pt: "Data Science & I.A · Grupo Shoulder · Oriba, Shoulder e Hight",
    en: "Data Science & AI · Grupo Shoulder · Oriba, Shoulder and Hight",
  } as Bi,
};

export const PROJECTS: Project[] = [
  {
    id: "dashboard-crm",
    year: "2026",
    name: "Dashboard CRM",
    accent: "accent2",
    tagline: {
      pt: "Plataforma multi-marca de performance de CRM",
      en: "Multi-brand CRM performance platform",
    },
    summary: {
      pt: "Aplicação web interna que centraliza a análise de performance das campanhas de CRM (Email, SMS e Web Push) das marcas Oriba, Hight e Shoulder. Ingere dados da plataforma Insider e os enriquece com receita atribuída via Google Analytics 4, entregando KPIs, séries temporais e comparativos de período em uma única interface.",
      en: "Internal web application that centralizes CRM campaign performance (Email, SMS and Web Push) across the Oriba, Hight and Shoulder brands. It ingests data from the Insider platform and enriches it with revenue attributed via Google Analytics 4, delivering KPIs, time series and period comparisons in a single interface.",
    },
    role: {
      pt: "Concepção, arquitetura e desenvolvimento full-stack",
      en: "Concept, architecture and full-stack development",
    },
    highlights: {
      pt: [
        "Arquitetura multi-marca: a marca é resolvida por requisição (query string ou header), com fallback retrocompatível",
        "Ingestão fire-and-forget com cron diário, usando janela de 7 dias para entregas tardias e 45 dias para atribuição de receita",
        "Matching fuzzy entre campanhas do banco e utm_campaign do GA4, com divisão proporcional de receita em empates N:1",
        "API REST com mais de 30 endpoints (Email, SMS, Web Push, Ingestão, GA4) e schema relacional de 3 modelos",
      ],
      en: [
        "Multi-brand architecture: brand is resolved per request (query string or header) with a backward-compatible fallback",
        "Fire-and-forget ingestion with a daily cron, using a 7-day window for late deliveries and a 45-day window for revenue attribution",
        "Fuzzy matching between database campaigns and GA4 utm_campaign, with proportional revenue split on N:1 ties",
        "REST API with over 30 endpoints (Email, SMS, Web Push, Ingestion, GA4) and a 3-model relational schema",
      ],
    },
    stack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL (Neon)",
      "Railway",
      "Vercel",
      "GA4 Data API",
    ],
    metrics: [
      { value: "3", label: { pt: "marcas", en: "brands" } },
      { value: "3", label: { pt: "canais (Email/SMS/Push)", en: "channels (Email/SMS/Push)" } },
      { value: "30+", label: { pt: "endpoints REST", en: "REST endpoints" } },
    ],
  },
  {
    id: "oriba-intelligence",
    year: "2026",
    name: "Oriba Intelligence",
    accent: "accent",
    tagline: {
      pt: "Inteligência de mercado, social e concorrência",
      en: "Market, social & competitive intelligence",
    },
    summary: {
      pt: "Dashboard que monitora redes sociais, concorrentes, voz do cliente e pricing. Cruza dados de social listening (Buzz Monitor) com o catálogo Qlik de cerca de 790 mil SKUs, acompanhando 9 marcas do varejo de moda e consolidando métricas que a API não entrega de forma confiável por conta própria.",
      en: "Dashboard that monitors social media, competitors, customer voice and pricing. It cross-references social listening data (Buzz Monitor) with a Qlik catalog of around 790k SKUs, tracking 9 fashion-retail brands and consolidating metrics the API does not reliably expose on its own.",
    },
    role: {
      pt: "Concepção e desenvolvimento end-to-end",
      en: "Concept and end-to-end development",
    },
    highlights: {
      pt: [
        "Pipeline de social listening com snapshots diários no Google Cloud Storage para reconstruir o histórico de seguidores que a API não fornece",
        "Estratégia de cumulative max para eliminar perdas espúrias de seguidores causadas por metadados defasados da API",
        "Processamento em streaming de cerca de 790 mil SKUs do Qlik para a aba de pricing",
        "9 abas analíticas (Overview, Mercado, Pricing, Redes Sociais, CX, Voz do Cliente, Produtos, Concorrentes, Editorial) com carregamento lazy",
      ],
      en: [
        "Social-listening pipeline with daily Google Cloud Storage snapshots to rebuild the follower history the API does not provide",
        "Cumulative-max strategy to eliminate spurious follower losses caused by stale API metadata",
        "Streaming processing of around 790k Qlik SKUs for the pricing tab",
        "9 analytical tabs (Overview, Market, Pricing, Social, CX, Customer Voice, Products, Competitors, Editorial) with lazy loading",
      ],
    },
    stack: [
      "Python",
      "Flask",
      "JavaScript",
      "Chart.js",
      "Google Cloud Storage",
      "Render.com",
      "Buzz Monitor API",
      "Qlik",
    ],
    metrics: [
      { value: "9", label: { pt: "marcas monitoradas", en: "brands monitored" } },
      { value: "~790k", label: { pt: "SKUs processados", en: "SKUs processed" } },
      { value: "9", label: { pt: "abas analíticas", en: "analytical tabs" } },
    ],
  },
  {
    id: "vm-pinheiros",
    year: "2026",
    name: "Dashboard VM Pinheiros",
    accent: "accent2",
    tagline: {
      pt: "Visual Merchandising orientado a dados",
      en: "Data-driven Visual Merchandising",
    },
    summary: {
      pt: "Painel interativo de Visual Merchandising para a loja Pinheiros da Oriba. Transforma a planilha mensal de bipagem em um dashboard auto-contido, um único arquivo HTML sem servidor, com mapa da loja, KPIs, ranking de posições, análise de categorias e alertas automáticos de ação.",
      en: "Interactive Visual Merchandising panel for Oriba's Pinheiros store. It turns the monthly scanning spreadsheet into a self-contained dashboard, a single HTML file with no server, including a store map, KPIs, position ranking, category analysis and automated action alerts.",
    },
    role: {
      pt: "Concepção e desenvolvimento",
      en: "Concept and development",
    },
    highlights: {
      pt: [
        "Saída auto-contida: um único HTML que roda offline, distribuível para a diretoria sem nenhuma infraestrutura",
        "Mapa da loja com pins coloridos por participação de venda; o clique abre os top produtos e os itens sem giro",
        "Pipeline em Python e Pandas: filtra, classifica móveis, calcula métricas agregadas e injeta JSON no template",
        "6 abas analíticas com os design tokens da Oriba aplicados de forma consistente",
      ],
      en: [
        "Self-contained output: a single HTML that runs offline, shareable with leadership without any infrastructure",
        "Store map with pins colored by sales share; clicking opens top products and no-rotation items",
        "Python and Pandas pipeline: filters, classifies fixtures, computes aggregate metrics and injects JSON into the template",
        "6 analytical tabs with Oriba design tokens applied consistently",
      ],
    },
    stack: ["Python", "Pandas", "HTML", "CSS", "Chart.js"],
    metrics: [
      { value: "1", label: { pt: "arquivo, zero servidor", en: "file, zero server" } },
      { value: "6", label: { pt: "abas analíticas", en: "analytical tabs" } },
      { value: "150+", label: { pt: "SKUs analisados", en: "SKUs analyzed" } },
    ],
  },
];

export const SKILLS: { group: Bi; items: string[] }[] = [
  {
    group: { pt: "Frontend", en: "Frontend" },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Chart.js"],
  },
  {
    group: { pt: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs"],
  },
  {
    group: { pt: "Dados & I.A", en: "Data & AI" },
    items: ["PostgreSQL", "Prisma", "Pandas", "Google Analytics 4", "Qlik", "Social listening"],
  },
  {
    group: { pt: "Infra & Cloud", en: "Infra & Cloud" },
    items: ["Vercel", "Railway", "Render", "Google Cloud Storage", "Neon", "Cron jobs"],
  },
];

export const UI: Record<Lang, {
  nav: { work: string; about: string; contact: string };
  hero: { kicker: string; lead: string; cta: string };
  about: { title: string; body: string[]; skillsTitle: string };
  work: { title: string; subtitle: string; roleLabel: string; highlightsLabel: string; stackLabel: string };
  contact: { title: string; body: string; emailLabel: string; githubLabel: string };
  footer: string;
  langToggle: string;
}> = {
  pt: {
    nav: { work: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      kicker: "Data Science & Inteligência Artificial",
      lead:
        "Crio soluções de dados e IA de ponta a ponta no Grupo Shoulder, atendendo Oriba, Shoulder e Hight. Cuido de tudo, do pipeline de ingestão até a interface que o time usa para decidir.",
      cta: "Ver projetos",
    },
    about: {
      title: "Sobre",
      body: [
        "No Grupo Shoulder trabalho com Data Science e IA atendendo as três marcas do grupo: Oriba, Shoulder e Hight. Pego dados espalhados em plataformas de campanha, analytics, social listening e planilhas de loja e transformo isso em painéis que a operação e a diretoria usam de verdade para decidir.",
        "Gosto de soluções que entregam valor sem peso desnecessário, de um único HTML auto-contido a uma plataforma multi-marca com ingestão automatizada. Cada projeto abaixo está em produção, resolvendo um problema real do negócio.",
      ],
      skillsTitle: "Stack & competências",
    },
    work: {
      title: "Projetos",
      subtitle: "Sistemas em produção, construídos para uso real no Grupo Shoulder.",
      roleLabel: "Atuação",
      highlightsLabel: "Destaques técnicos",
      stackLabel: "Stack",
    },
    contact: {
      title: "Contato",
      body: "Aberto a conversar sobre dados, IA e produtos internos.",
      emailLabel: "E-mail",
      githubLabel: "GitHub",
    },
    footer: "Construído com Next.js e Tailwind. Deploy na Vercel.",
    langToggle: "EN",
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      kicker: "Data Science & Artificial Intelligence",
      lead:
        "I build end-to-end data and AI solutions at Grupo Shoulder, serving Oriba, Shoulder and Hight. I own it all, from the ingestion pipeline to the interface the team uses to decide.",
      cta: "View work",
    },
    about: {
      title: "About",
      body: [
        "At Grupo Shoulder I work with Data Science and AI across the group's three brands: Oriba, Shoulder and Hight. I take data scattered across campaign platforms, analytics, social listening and store spreadsheets and turn it into dashboards that operations and leadership actually use to decide.",
        "I favor solutions that deliver value without unnecessary weight, from a single self-contained HTML file to a multi-brand platform with automated ingestion. Every project below is in production, solving a real business problem.",
      ],
      skillsTitle: "Stack & skills",
    },
    work: {
      title: "Work",
      subtitle: "Production systems, built for real use at Grupo Shoulder.",
      roleLabel: "Role",
      highlightsLabel: "Technical highlights",
      stackLabel: "Stack",
    },
    contact: {
      title: "Contact",
      body: "Open to talking about data, AI and internal products.",
      emailLabel: "Email",
      githubLabel: "GitHub",
    },
    footer: "Built with Next.js and Tailwind. Deployed on Vercel.",
    langToggle: "PT",
  },
};
