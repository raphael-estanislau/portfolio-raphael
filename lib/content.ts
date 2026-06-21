export type Lang = "pt" | "en";

type Bi = Record<Lang, string>;
type BiList = Record<Lang, string[]>;

export interface Project {
  id: string;
  index: string;
  year: string;
  name: string;
  tagline: Bi;
  summary: Bi;
  role: Bi;
  context: Bi;
  highlights: BiList;
  stack: string[];
  metrics: { value: string; label: Bi }[];
}

export const PROFILE = {
  name: "Raphael Estanislau",
  email: "raphaelldinizz@icloud.com",
  github: "https://github.com/raphael-estanislau",
  location: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" } as Bi,
  role: {
    pt: "Data Science & I.A · Grupo Shoulder",
    en: "Data Science & AI · Grupo Shoulder",
  } as Bi,
};

export const PROJECTS: Project[] = [
  {
    id: "dashboard-crm",
    index: "01",
    year: "2026",
    name: "Dashboard CRM",
    tagline: {
      pt: "Plataforma multi-marca de performance de CRM",
      en: "Multi-brand CRM performance platform",
    },
    context: {
      pt: "Em produção · Oriba, Haight e Shoulder",
      en: "In production · Oriba, Haight and Shoulder",
    },
    summary: {
      pt: "Aplicação interna que reúne num só lugar a performance das campanhas de CRM das três marcas do grupo em quatro canais: Email, SMS, Web Push e App Push. Os números vêm da Insider e ganham receita atribuída pelo Google Analytics 4. Tem ainda aba dedicada de receita, carrinho abandonado e comportamento de navegação. Os times abrem esse painel toda semana pra montar apresentação.",
      en: "Internal app that brings the three brands' CRM performance into one place across four channels: Email, SMS, Web Push and App Push. The numbers come from Insider and gain revenue attributed through Google Analytics 4. It also has dedicated tabs for revenue, abandoned cart and browsing behavior. The teams open this panel every week to build their reports.",
    },
    role: {
      pt: "Concepção, arquitetura e desenvolvimento. Sozinho, de ponta a ponta.",
      en: "Concept, architecture and development. Solo, end to end.",
    },
    highlights: {
      pt: [
        "Quatro canais (Email, SMS, Web Push, App Push) mais carrinho abandonado, navegação e receita, tudo numa interface multi-marca onde cada marca só enxerga o que é dela",
        "Receita atribuída pelo GA4 com match aproximado entre o nome da campanha e o utm_campaign, contada pelo mês da compra, então uma venda tardia ainda cai na campanha certa",
        "Ingestão dispara e responde na hora: o cron diário roda em segundo plano por 5 a 15 minutos sem estourar o limite de 60s do Railway, com retry em falha de socket e TLS",
        "Oito modelos no Postgres via Prisma, login com JWT por marca e área de admin para reconciliação e backfill histórico",
      ],
      en: [
        "Four channels (Email, SMS, Web Push, App Push) plus abandoned cart, browsing and revenue, all in one multi-brand interface where each brand only sees its own data",
        "Revenue attributed through GA4 with fuzzy matching between campaign name and utm_campaign, counted by purchase month, so a late sale still lands on the right campaign",
        "Ingestion fires and returns instantly: the daily cron runs in the background for 5 to 15 minutes without hitting Railway's 60s limit, with retries on socket and TLS failures",
        "Eight Postgres models through Prisma, per-brand JWT login and an admin area for reconciliation and historical backfill",
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
      "PostgreSQL · Neon",
      "GA4 Data API",
      "Railway",
    ],
    metrics: [
      { value: "4", label: { pt: "canais", en: "channels" } },
      { value: "3", label: { pt: "marcas", en: "brands" } },
      { value: "9", label: { pt: "abas analíticas", en: "analytical tabs" } },
    ],
  },
  {
    id: "oriba-intelligence",
    index: "02",
    year: "2026",
    name: "Oriba Intelligence",
    tagline: {
      pt: "Inteligência competitiva de mercado, social e mídia",
      en: "Competitive intelligence: market, social and media",
    },
    context: {
      pt: "Em produção · Oriba e Shoulder",
      en: "In production · Oriba and Shoulder",
    },
    summary: {
      pt: "Sistema de inteligência competitiva que reúne quatro frentes num painel só: pricing (catálogo Qlik de ~790 mil SKUs), redes sociais próprias (Meta Graph API, com seguidor real e insight de Reels), mídia paga e influenciadores (Meta Marketing API) e concorrência (Buzz Monitor). Um cron diário grava tudo num data warehouse no BigQuery, então o histórico fica confiável. Quando o BigQuery ainda não tem o dado do período, o app volta sozinho pra API ao vivo.",
      en: "Competitive-intelligence system that pulls four fronts into a single panel: pricing (a ~790k-SKU Qlik catalog), owned social (Meta Graph API, with real followers and Reels insights), paid media and influencers (Meta Marketing API) and competitors (Buzz Monitor). A daily cron writes everything into a BigQuery warehouse, so the history stays reliable. When BigQuery doesn't have the period yet, the app falls back to the live API on its own.",
    },
    role: {
      pt: "Concepção e desenvolvimento. Sozinho, de ponta a ponta.",
      en: "Concept and development. Solo, end to end.",
    },
    highlights: {
      pt: [
        "Data warehouse no BigQuery (prt-dados-comercial.oriba_intelligence) populado por cron diário; a leitura histórica tem fallback transparente pras APIs quando falta dado no período",
        "Integração direta com a Meta Graph e Marketing API: seguidor real, insight de Reels, demografia e performance de mídia, justamente os números que o social listening estimava errado",
        "Catálogo Qlik de ~790 mil SKUs processado em streaming, virando métricas próprias: score de competitividade de 0 a 100, elasticidade promocional, índice de pressão competitiva e EMV (valor equivalente em mídia)",
        "Dez abas analíticas, duas marcas, HTML montado em Jinja2 com cache-busting por hash do arquivo; deploy no Render no plano que não tem cold start",
      ],
      en: [
        "BigQuery warehouse (prt-dados-comercial.oriba_intelligence) populated by a daily cron; historical reads fall back transparently to the APIs when a period is missing",
        "Direct integration with the Meta Graph and Marketing API: real followers, Reels insights, demographics and media performance, exactly the numbers social listening was estimating wrong",
        "A ~790k-SKU Qlik catalog processed in streaming, turned into custom metrics: a 0 to 100 competitiveness score, promotional elasticity, competitive-pressure index and EMV (earned media value)",
        "Ten analytical tabs, two brands, HTML assembled with Jinja2 and file-hash cache-busting; deployed on Render's no-cold-start plan",
      ],
    },
    stack: [
      "Python",
      "Flask",
      "Jinja2",
      "JavaScript",
      "Chart.js",
      "BigQuery",
      "Google Cloud Storage",
      "Meta Graph API",
      "Meta Marketing API",
      "Buzz Monitor API",
      "Qlik",
      "Playwright",
      "Render",
    ],
    metrics: [
      { value: "~790k", label: { pt: "SKUs processados", en: "SKUs processed" } },
      { value: "10", label: { pt: "abas analíticas", en: "analytical tabs" } },
      { value: "4", label: { pt: "fontes de dados", en: "data sources" } },
    ],
  },
  {
    id: "vm-pinheiros",
    index: "03",
    year: "2026",
    name: "VM Pinheiros",
    tagline: {
      pt: "Visual Merchandising orientado a dados",
      en: "Data-driven Visual Merchandising",
    },
    context: {
      pt: "Em uso · loja Oriba Pinheiros",
      en: "In use · Oriba Pinheiros store",
    },
    summary: {
      pt: "Painel de Visual Merchandising para a loja de Pinheiros. Pega a planilha mensal de bipagem e devolve um dashboard num único arquivo HTML, sem servidor nenhum, com mapa da loja, ranking de posições, análise por categoria e alerta automático do que precisa girar. A diretoria abre o arquivo e funciona, offline.",
      en: "Visual Merchandising panel for the Pinheiros store. It takes the monthly scanning spreadsheet and returns a dashboard in a single HTML file, no server at all, with a store map, position ranking, category analysis and automatic alerts for what needs to move. Leadership opens the file and it just works, offline.",
    },
    role: {
      pt: "Concepção e desenvolvimento",
      en: "Concept and development",
    },
    highlights: {
      pt: [
        "Saída num único HTML que roda offline, então dá pra mandar pra diretoria sem pedir infra, login ou instalação de nada",
        "Mapa da loja com pin colorido por participação de venda; clicar no pin abre os produtos que mais vendem e os que estão parados naquela posição",
        "Pipeline em Python e Pandas que filtra a planilha, classifica cada móvel, calcula as métricas e injeta o JSON pronto no template",
        "Seis abas com os tokens de design da Oriba aplicados do mesmo jeito em todas",
      ],
      en: [
        "Output in a single HTML that runs offline, so you can send it to leadership without asking for infra, login or installing anything",
        "Store map with pins colored by sales share; clicking a pin opens the best sellers and the stalled items in that spot",
        "A Python and Pandas pipeline that filters the spreadsheet, classifies each fixture, computes the metrics and injects ready JSON into the template",
        "Six tabs with Oriba's design tokens applied the same way across all of them",
      ],
    },
    stack: ["Python", "Pandas", "openpyxl", "HTML", "CSS", "Chart.js"],
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
    group: { pt: "Backend & APIs", en: "Backend & APIs" },
    items: ["Node.js", "Express", "Python", "Flask", "Jinja2", "REST APIs"],
  },
  {
    group: { pt: "Dados & I.A", en: "Data & AI" },
    items: [
      "PostgreSQL",
      "Prisma",
      "BigQuery",
      "Pandas",
      "Google Analytics 4",
      "Meta Graph & Marketing API",
      "Qlik",
      "Social listening",
    ],
  },
  {
    group: { pt: "Infra & Cloud", en: "Infra & Cloud" },
    items: ["Railway", "Render", "Google Cloud Storage", "Neon", "Playwright", "Cron jobs"],
  },
];

export const UI: Record<Lang, {
  sidebar: { tagline: string; intro: string; available: string; nav: { about: string; work: string; contact: string } };
  sections: { about: { num: string; title: string }; work: { num: string; title: string }; contact: { num: string; title: string } };
  about: { body: string[]; skillsIntro: string };
  work: { subtitle: string; roleLabel: string; highlightsLabel: string; stackLabel: string };
  contact: { overline: string; title: string; body: string; cta: string };
  footer: string;
  langToggle: string;
}> = {
  pt: {
    sidebar: {
      tagline: "Transformo dados em decisão.",
      intro:
        "Data Science e IA no Grupo Shoulder. Construo do pipeline de ingestão até o painel que a operação usa, para Oriba, Haight e Shoulder.",
      available: "Três sistemas em produção",
      nav: { about: "Sobre", work: "Projetos", contact: "Contato" },
    },
    sections: {
      about: { num: "01", title: "Sobre mim" },
      work: { num: "02", title: "Projetos" },
      contact: { num: "03", title: "Contato" },
    },
    about: {
      body: [
        "Cuido de Data Science e IA no Grupo Shoulder, para as três marcas: Oriba, Haight e Shoulder. Na prática, eu pego dado de plataforma de campanha, analytics, redes sociais e planilha de loja, que vivem espalhados e em formatos diferentes, e junto num painel que a operação e a diretoria abrem pra decidir.",
        "Gosto de solução que entrega valor sem peso desnecessário. Tanto faz se é um HTML único que roda offline ou uma plataforma multi-marca com data warehouse e ingestão automatizada. O que importa é estar em produção, resolvendo um problema real.",
        "Estas são algumas das ferramentas com que trabalho:",
      ],
      skillsIntro: "Ferramentas que uso no dia a dia:",
    },
    work: {
      subtitle: "Sistemas em produção no Grupo Shoulder. Cada um nasceu de um problema concreto do negócio.",
      roleLabel: "Atuação",
      highlightsLabel: "Por dentro",
      stackLabel: "Stack",
    },
    contact: {
      overline: "03 · E agora?",
      title: "Vamos conversar.",
      body: "Estou aberto a falar sobre dados, IA e produtos internos. Se você quer trocar uma ideia ou tem uma oportunidade, minha caixa de entrada está sempre aberta. Respondo o que chegar.",
      cta: "Falar comigo",
    },
    footer: "Projetado e construído por Raphael Estanislau · Next.js e Tailwind.",
    langToggle: "EN",
  },
  en: {
    sidebar: {
      tagline: "I turn data into decisions.",
      intro:
        "Data Science and AI at Grupo Shoulder. I build from the ingestion pipeline to the panel operations uses, for Oriba, Haight and Shoulder.",
      available: "Three systems in production",
      nav: { about: "About", work: "Work", contact: "Contact" },
    },
    sections: {
      about: { num: "01", title: "About me" },
      work: { num: "02", title: "Work" },
      contact: { num: "03", title: "Contact" },
    },
    about: {
      body: [
        "I handle Data Science and AI at Grupo Shoulder, across the three brands: Oriba, Haight and Shoulder. In practice, I take data from campaign platforms, analytics, social media and store spreadsheets, which live scattered and in different shapes, and pull it into a panel operations and leadership open to decide.",
        "I like solutions that deliver value without unnecessary weight. A single HTML file that runs offline or a multi-brand platform with a data warehouse and automated ingestion, it makes no difference. What matters is that it's in production, solving a real problem.",
        "Here are a few of the tools I work with:",
      ],
      skillsIntro: "Tools I use day to day:",
    },
    work: {
      subtitle: "Production systems at Grupo Shoulder. Each one grew out of a concrete business problem.",
      roleLabel: "Role",
      highlightsLabel: "Under the hood",
      stackLabel: "Stack",
    },
    contact: {
      overline: "03 · What's next?",
      title: "Let's talk.",
      body: "I'm open to talking about data, AI and internal products. If you want to swap ideas or have an opportunity, my inbox is always open. I'll get back to whatever lands there.",
      cta: "Get in touch",
    },
    footer: "Designed and built by Raphael Estanislau · Next.js and Tailwind.",
    langToggle: "PT",
  },
};
