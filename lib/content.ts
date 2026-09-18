export type Lang = "pt" | "en";

export type Bi = Record<Lang, string>;
export type BiList = Record<Lang, string[]>;

export const PROFILE = {
  name: "Raphael Estanislau",
  email: "raphaelldinizz@icloud.com",
  github: "https://github.com/raphael-estanislau",
  location: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" } as Bi,
  /** Cargo real. O posicionamento do site é a direção; isto aqui é o fato. */
  jobTitle: {
    pt: "Data Science & I.A · Grupo Shoulder",
    en: "Data Science & AI · Grupo Shoulder",
  } as Bi,
};

/**
 * A tese do portfólio.
 *
 * Não é slogan: é a regra que aparece implementada nos três sistemas, com
 * arquivo e comportamento verificáveis em cada um. Está aqui porque é o que
 * separa construir um painel de construir um painel em que dá para confiar.
 */
export const PRINCIPLE = {
  kicker: { pt: "O fio que atravessa os três", en: "The thread across all three" } as Bi,
  title: { pt: "Ausência não é zero", en: "Absence is not zero" } as Bi,
  body: {
    pt: [
      "Zero é uma afirmação. Zero menção diz que ninguém falou da marca. Custo zero diz que a consulta saiu de graça. Quando a fonte não respondeu, as duas frases são falsas, e o painel as escreve com a mesma confiança que usa quando acerta.",
      "Nos três sistemas eu resolvi isso no código. A fonte declara o próprio estado, a métrica sem base devolve nulo, e a tela mostra a lacuna. Quem faz isso no primeiro commit gasta um campo a mais por contrato. Quem tenta acrescentar depois reescreve todas as telas.",
    ],
    en: [
      "Zero is a claim. Zero mentions says nobody talked about the brand. Zero cost says the query was free. When the source did not answer, both sentences are false, and the panel writes them with the same confidence it uses when it is right.",
      "Across the three systems I solved this in code. Each source reports its own state, a metric with no base returns null, and the screen shows the gap. Do it in the first commit and you spend one extra field per contract. Add it later and you rewrite every screen.",
    ],
  } as BiList,
  evidence: [
    {
      project: "Copiloto de CRM",
      slug: "copiloto-crm",
      text: {
        pt: "Fonte indisponível ou pulada pela cota entra no contexto como lacuna declarada, e a instrução ao modelo diz, com essas palavras, que isso nunca significa zero.",
        en: "An unavailable or budget-skipped source enters the context as a declared gap, and the model instruction says, in those words, that this never means zero.",
      } as Bi,
      code: "copilotContextHubService.ts",
    },
    {
      project: "Operação omnichannel",
      slug: "operacao-omnichannel",
      text: {
        pt: "Estimativa de custo ausente é tratada como desconhecida, nunca como custo zero. E a resposta lista os indicadores que a fonte não sustenta, com motivo.",
        en: "A missing cost estimate is treated as unknown, never as zero cost. And the response lists the indicators the source cannot support, with a reason.",
      } as Bi,
      code: "meta.consulta.estimativaIndisponivel",
    },
    {
      project: "Oriba Intelligence",
      slug: "oriba-intelligence",
      text: {
        pt: "O Net Sentiment Score é nulo quando não há menção para calcular. O Buzz aparece como indisponível em Shoulder e Haight em vez de exibir zero menções.",
        en: "Net Sentiment Score is null when there is no mention to compute from. Buzz shows as unavailable for Shoulder and Haight instead of displaying zero mentions.",
      } as Bi,
      code: "DataSourceStatus",
    },
  ],
  closing: {
    pt: "Um backend honesto resolve metade. A outra metade são componentes pequenos e repetitivos que deixam a ressalva barata de exibir. Quanto menos trabalho dá mostrar a lacuna, mais vezes ela aparece onde precisa.",
    en: "An honest backend solves half of it. The other half is small, repetitive components that keep the caveat cheap to display. The less work it takes to show the gap, the more often it lands where it matters.",
  } as Bi,
};

export const SKILLS: { group: Bi; items: { label: string; wip?: boolean }[] }[] = [
  {
    group: { pt: "IA aplicada", en: "Applied AI" },
    items: [
      { label: "Integração com modelos de linguagem" },
      { label: "Preparação e roteamento de contexto" },
      { label: "Saídas estruturadas e validação" },
      { label: "Orçamento de custo e cache por chamada" },
      { label: "Base de conhecimento versionada" },
      { label: "Fallback determinístico e indisponibilidade" },
      { label: "Avaliação de qualidade de resposta", wip: true },
    ],
  },
  {
    group: { pt: "Backend & APIs", en: "Backend & APIs" },
    items: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "Express" },
      { label: "Prisma" },
      { label: "Zod" },
      { label: "Python" },
      { label: "Flask" },
      { label: "REST · OpenAPI" },
      { label: "Vitest" },
    ],
  },
  {
    group: { pt: "Engenharia de dados", en: "Data engineering" },
    items: [
      { label: "BigQuery" },
      { label: "PostgreSQL" },
      { label: "Pandas" },
      { label: "Modelagem analítica" },
      { label: "Controle de custo de consulta" },
      { label: "GA4 Data API" },
      { label: "Meta Graph & Marketing API" },
      { label: "Qlik" },
    ],
  },
  {
    group: { pt: "Frontend", en: "Frontend" },
    items: [
      { label: "Next.js" },
      { label: "React" },
      { label: "Tailwind CSS" },
      { label: "Recharts" },
      { label: "Chart.js" },
      { label: "Acessibilidade de leitura de dado" },
    ],
  },
  {
    group: { pt: "Infra & operação", en: "Infra & operations" },
    items: [
      { label: "Railway" },
      { label: "Render" },
      { label: "Vercel" },
      { label: "Google Cloud" },
      { label: "Neon" },
      { label: "Redis · BullMQ" },
      { label: "Cron jobs" },
    ],
  },
];

/**
 * Números da abertura.
 *
 * Nenhum deles é de vaidade: os quatro são verificáveis no código dos sistemas
 * e eu consigo sustentar cada um numa conversa. "Zero dado pessoal enviado ao
 * modelo" é uma decisão de arquitetura, não uma contagem.
 */
export const STATS: { value: string; label: Bi; note: Bi }[] = [
  {
    value: "3",
    label: { pt: "sistemas em produção", en: "systems in production" },
    note: {
      pt: "Três marcas do Grupo Shoulder.",
      en: "Three Grupo Shoulder brands.",
    },
  },
  {
    value: "6",
    label: { pt: "fontes roteadas pelo copiloto", en: "sources routed by the copilot" },
    note: {
      pt: "Selecionadas pela aplicação, nunca pelo modelo.",
      en: "Selected by the application, never by the model.",
    },
  },
  {
    value: "197",
    label: { pt: "testes que não tocam a nuvem", en: "tests that never touch the cloud" },
    note: {
      pt: "Os de integração ficam fora da suíte padrão.",
      en: "Integration tests stay out of the default suite.",
    },
  },
  {
    value: "0",
    label: { pt: "dados pessoais enviados ao modelo", en: "personal records sent to the model" },
    note: {
      pt: "O modelo devolve filtros; a aplicação executa.",
      en: "The model returns filters; the application executes.",
    },
  },
];

export const UI: Record<
  Lang,
  {
    nav: {
      work: string;
      principle: string;
      about: string;
      contact: string;
      home: string;
      sayHi: string;
    };
    hero: {
      kicker: string;
      roleLead: string;
      roleEm: string;
      headline: string;
      lede: string;
      ctaPrimary: string;
      ctaSecondary: string;
      scroll: string;
    };
    marquee: string;
    statsLabel: string;
    sections: {
      work: {
        num: string;
        label: string;
        titleLead: string;
        titleEm: string;
        subtitle: string;
      };
      principle: { num: string; label: string };
      about: { num: string; label: string; titleLead: string; titleEm: string };
      skills: { label: string; note: string };
      contact: {
        num: string;
        label: string;
        kicker: string;
        titleLead: string;
        titleEm: string;
        body: string;
        cta: string;
      };
    };
    about: { body: string[] };
    work: {
      readCase: string;
      alsoTitle: string;
      alsoSubtitle: string;
      indexTitleLead: string;
      indexTitleEm: string;
      indexLede: string;
    };
    caseUi: {
      backToIndex: string;
      onThisPage: string;
      problem: string;
      role: string;
      roleDependencies: string;
      architecture: string;
      architectureNote: string;
      decisions: string;
      decisionsNote: string;
      decisionProblem: string;
      decisionChoice: string;
      decisionAlternative: string;
      decisionLimit: string;
      evidence: string;
      evidenceCaveat: string;
      evalPlan: string;
      result: string;
      resultDone: string;
      resultOpen: string;
      resultNext: string;
      stack: string;
      access: string;
      nextCase: string;
      prevCase: string;
      legend: string;
      legendApp: string;
      legendModel: string;
      legendGuard: string;
    };
    footer: { built: string; source: string; rights: string };
    a11y: {
      skipToContent: string;
      langToggle: string;
      mainNav: string;
      diagramFlow: string;
    };
  }
> = {
  pt: {
    nav: {
      work: "Projetos",
      principle: "Princípio",
      about: "Sobre",
      contact: "Contato",
      home: "Início",
      sayHi: "Falar comigo",
    },
    hero: {
      kicker: "Portfólio '26",
      roleLead: "Software, dados e",
      roleEm: "IA aplicada",
      headline:
        "Construo aplicações que conectam dados, APIs e modelos de linguagem a problemas reais de negócio.",
      lede: "Três sistemas em produção no Grupo Shoulder: um copiloto de IA sobre dados de CRM, uma plataforma de análise operacional omnichannel e uma plataforma de inteligência de mercado. Eu defino o problema, construo e mantenho.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Conhecer o copiloto de CRM",
      scroll: "Role",
    },
    marquee: "Ausência não é zero",
    statsLabel: "Em números",
    sections: {
      work: {
        num: "01",
        label: "Projetos",
        titleLead: "Três sistemas, três tipos de",
        titleEm: "evidência",
        subtitle:
          "Cada um está aqui por um motivo diferente: IA aplicada dentro de um produto, engenharia de produto e dados, e integração com evolução de arquitetura.",
      },
      principle: { num: "02", label: "Princípio" },
      about: { num: "03", label: "Sobre", titleLead: "Como eu", titleEm: "trabalho" },
      skills: {
        label: "Competências",
        note: "Marquei como em construção o que ainda não tem rotina executada nem resultado documentado.",
      },
      contact: {
        num: "04",
        label: "Contato",
        kicker: "Tem um projeto em mente?",
        titleLead: "Vamos",
        titleEm: "conversar",
        body: "Construo aplicações que usam modelos de linguagem com contexto controlado, saída validada e custo previsível. Se você quer discutir alguma dessas partes, ou apontar onde eu errei, me escreve.",
        cta: "Falar comigo",
      },
    },
    about: {
      body: [
        "Cuido de Data Science e IA no Grupo Shoulder, para Oriba, Haight e Shoulder. O dado que eu uso vive espalhado em plataforma de campanha, analytics, ERP, redes sociais, catálogo de mercado e planilha de loja. Eu junto isso numa aplicação que a operação e a diretoria abrem para decidir.",
        "Nos últimos meses parei de tratar o modelo de linguagem como ferramenta de escrever código e passei a tratar como componente de produto. Isso muda o que você precisa construir em volta dele: seleção de contexto, contrato de resposta, validação, orçamento de custo, procedência visível e um caminho de degradação para quando a chamada falha.",
        "Uso Claude, Codex e Kiro no desenvolvimento e não escondo isso. Eu respondo pela arquitetura, pela revisão e pelo que entra em produção. Numa conversa técnica eu explico por que o sistema ficou desse jeito e que riscos ele ainda carrega.",
      ],
    },
    work: {
      readCase: "Ler o estudo de caso",
      alsoTitle: "Projeto complementar",
      alsoSubtitle: "Menor em escopo, mas continua em uso.",
      indexTitleLead: "Três sistemas em",
      indexTitleEm: "produção",
      indexLede:
        "Sistemas em produção no Grupo Shoulder. Cada estudo de caso traz o problema, as decisões que não aparecem na tela, a evidência que dá para reproduzir e o que ainda está em aberto.",
    },
    caseUi: {
      backToIndex: "Todos os projetos",
      onThisPage: "Nesta página",
      problem: "Problema e contexto",
      role: "Minha atuação",
      roleDependencies: "O que dependia de outras pessoas ou sistemas",
      architecture: "Arquitetura",
      architectureNote: "O caminho de uma requisição, do pedido à tela.",
      decisions: "Decisões",
      decisionsNote:
        "Cada decisão traz a alternativa que descartei e o que ela custa. Decisão sem custo declarado costuma ser decisão que ninguém tomou.",
      decisionProblem: "A pressão",
      decisionChoice: "O que fiz",
      decisionAlternative: "O que descartei",
      decisionLimit: "O que isso custa",
      evidence: "Evidência",
      evidenceCaveat: "Ressalva",
      evalPlan: "Em construção: como vou avaliar",
      result: "Resultado e evolução",
      resultDone: "Em produção",
      resultOpen: "Em aberto",
      resultNext: "Próximo problema",
      stack: "Stack",
      access: "Acesso",
      nextCase: "Próximo caso",
      prevCase: "Caso anterior",
      legend: "Legenda",
      legendApp: "código da aplicação",
      legendModel: "modelo de linguagem",
      legendGuard: "validação e controle",
    },
    footer: {
      built: "Projetado e construído por Raphael Estanislau · Next.js e Tailwind",
      source: "Código no GitHub",
      rights: "São Paulo, Brasil",
    },
    a11y: {
      skipToContent: "Pular para o conteúdo",
      langToggle: "Alternar idioma",
      mainNav: "Navegação principal",
      diagramFlow: "Diagrama de fluxo da arquitetura",
    },
  },
  en: {
    nav: {
      work: "Work",
      principle: "Principle",
      about: "About",
      contact: "Contact",
      home: "Home",
      sayHi: "Say hi",
    },
    hero: {
      kicker: "Portfolio '26",
      roleLead: "Software, data and",
      roleEm: "applied AI",
      headline:
        "I build applications that connect data, APIs and language models to real business problems.",
      lede: "Three systems in production at Grupo Shoulder: an AI copilot over CRM data, an omnichannel operations analytics platform, and a market intelligence platform. I frame the problem, build it and keep it running.",
      ctaPrimary: "See the work",
      ctaSecondary: "Read the CRM copilot case",
      scroll: "Scroll",
    },
    marquee: "Absence is not zero",
    statsLabel: "In numbers",
    sections: {
      work: {
        num: "01",
        label: "Work",
        titleLead: "Three systems, three kinds of",
        titleEm: "evidence",
        subtitle:
          "Each one is here for a different reason: AI applied inside a product, product and data engineering, and integration with architectural evolution.",
      },
      principle: { num: "02", label: "Principle" },
      about: { num: "03", label: "About", titleLead: "How I", titleEm: "work" },
      skills: {
        label: "Skills",
        note: "I marked as in progress whatever has no executed routine and no documented results yet.",
      },
      contact: {
        num: "04",
        label: "Contact",
        kicker: "Have a project in mind?",
        titleLead: "Let's",
        titleEm: "talk",
        body: "I build applications that use language models with controlled context, validated output and predictable cost. If you want to dig into any of those parts, or point out where I got something wrong, write to me.",
        cta: "Get in touch",
      },
    },
    about: {
      body: [
        "I handle Data Science and AI at Grupo Shoulder, across Oriba, Haight and Shoulder. The data I work with lives scattered across campaign platforms, analytics, the ERP, social media, market catalogs and store spreadsheets. I pull it into an application operations and leadership open to decide.",
        "Over the last months I stopped treating the language model as a tool for writing code and started treating it as a product component. That changes what you have to build around it: context selection, a response contract, validation, a cost budget, visible provenance and a degradation path for when the call fails.",
        "I use Claude, Codex and Kiro while developing and I do not hide it. I answer for the architecture, the review and what ships. In a technical conversation I explain why the system came out this way and which risks it still carries.",
      ],
    },
    work: {
      readCase: "Read the case study",
      alsoTitle: "Supporting project",
      alsoSubtitle: "Smaller in scope, still in use.",
      indexTitleLead: "Three systems in",
      indexTitleEm: "production",
      indexLede:
        "Systems in production at Grupo Shoulder. Each case study covers the problem, the decisions that never show up on screen, evidence you can reproduce, and what is still open.",
    },
    caseUi: {
      backToIndex: "All projects",
      onThisPage: "On this page",
      problem: "Problem and context",
      role: "My role",
      roleDependencies: "What depended on other people or systems",
      architecture: "Architecture",
      architectureNote: "The path of one request, from the ask to the screen.",
      decisions: "Decisions",
      decisionsNote:
        "Each decision carries the alternative I rejected and what it costs. A decision with no stated cost is usually one nobody took.",
      decisionProblem: "The pressure",
      decisionChoice: "What I did",
      decisionAlternative: "What I rejected",
      decisionLimit: "What it costs",
      evidence: "Evidence",
      evidenceCaveat: "Caveat",
      evalPlan: "In progress: how I will evaluate it",
      result: "Result and evolution",
      resultDone: "In production",
      resultOpen: "Open",
      resultNext: "Next problem",
      stack: "Stack",
      access: "Access",
      nextCase: "Next case",
      prevCase: "Previous case",
      legend: "Legend",
      legendApp: "application code",
      legendModel: "language model",
      legendGuard: "validation and control",
    },
    footer: {
      built: "Designed and built by Raphael Estanislau · Next.js and Tailwind",
      source: "Source on GitHub",
      rights: "São Paulo, Brazil",
    },
    a11y: {
      skipToContent: "Skip to content",
      langToggle: "Toggle language",
      mainNav: "Main navigation",
      diagramFlow: "Architecture flow diagram",
    },
  },
};
