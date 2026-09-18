import type { Bi, BiList, Lang } from "@/lib/content";

/** Tipo de um passo do diagrama. Distinguir aplicação de modelo é o ponto. */
export type StepKind = "input" | "app" | "guard" | "model" | "output";

export interface DiagramStep {
  kind: StepKind;
  label: Bi;
  detail?: Bi;
}

export interface Decision {
  id: string;
  title: Bi;
  /** Por que a decisão precisou ser tomada. */
  pressure: Bi;
  /** O que foi feito. */
  choice: Bi;
  /** A alternativa descartada, e o motivo. */
  alternative: Bi;
  /** O que a escolha custa ou não resolve. */
  limit: Bi;
  /** Caminho no repositório, para quem quiser conferir. */
  code?: string;
}

export interface Metric {
  value: string;
  label: Bi;
  note?: Bi;
}

export interface EvalCriterion {
  criterion: Bi;
  check: Bi;
}

export interface CaseStudy {
  slug: string;
  index: string;
  year: string;
  name: string;
  /** O que este caso prova. Aparece acima do título. */
  kicker: Bi;
  title: Bi;
  status: Bi;
  /** Uma frase, para o card da home. */
  oneLine: Bi;
  /** Pontos curtos, para o card da home. */
  cardPoints: BiList;
  problem: BiList;
  role: Bi;
  roleDependencies: BiList;
  diagram: DiagramStep[];
  /**
   * Citação do próprio repositório. Estas são transcrições de comentários que
   * já existem no código, então elas ficam como estão: reescrever a citação
   * para ela soar melhor seria falsificar a fonte.
   */
  pullQuote?: { text: Bi; source: string };
  decisions: Decision[];
  evidence: {
    intro: Bi;
    metrics: Metric[];
    notes: BiList;
    caveat: Bi;
  };
  evalPlan?: {
    intro: Bi;
    criteria: EvalCriterion[];
    note: Bi;
  };
  result: {
    done: BiList;
    open: BiList;
    next: Bi;
  };
  stack: string[];
  access: Bi;
}

export const CASES: CaseStudy[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "copiloto-crm",
    index: "01",
    year: "2026",
    name: "Copiloto de CRM",
    kicker: { pt: "IA aplicada a produto", en: "AI applied inside a product" },
    title: {
      pt: "Copiloto de IA para análise de CRM multimarcas",
      en: "AI copilot for multi-brand CRM analysis",
    },
    status: {
      pt: "Em produção · Oriba, Haight e Shoulder",
      en: "In production · Oriba, Haight and Shoulder",
    },
    oneLine: {
      pt: "Um copiloto que responde sobre CRM a partir de métricas que a aplicação prepara, devolve resposta em contrato validado e nunca vê um dado pessoal.",
      en: "A copilot that answers CRM questions from metrics the application prepares, returns a validated contract and never sees a single personal record.",
    },
    cardPoints: {
      pt: [
        "O modelo não escolhe tabela nem escreve SQL. Um roteador determinístico seleciona as fontes aprovadas",
        "Cada pergunta tem orçamento de custo. Fonte pulada vira lacuna declarada, nunca zero",
        "Pedido de audiência devolve filtros, não contatos, com prévia e confirmação antes da exportação",
      ],
      en: [
        "The model picks no table and writes no SQL. A deterministic router selects the approved sources",
        "Every question carries a cost budget. A skipped source becomes a declared gap, never a zero",
        "An audience request returns filters instead of contacts, with preview and confirmation before export",
      ],
    },
    problem: {
      pt: [
        "O dashboard de CRM reúne a performance das três marcas do grupo em nove abas: campanhas de e-mail, receita de varejo, base de clientes, e-commerce, carrinho abandonado e navegação. Os times abrem o painel toda semana para montar apresentação. A pergunta que eles têm de verdade não cabe em nenhuma aba isolada: o que aconteceu no período e o que eu faço a respeito.",
        "Debaixo dessa existe outra. O mesmo número muda de nome conforme onde a pessoa olha. O carimbo do ERP chama de ATIVO, o B.I. em Qlik chama de fidelizada, e base ativa é uma terceira coisa, uma régua de doze meses de histórico. Duas pessoas liam o mesmo painel e discordavam sobre o que o número significava.",
        "A saída óbvia era plugar um chat no banco e deixar o modelo consultar. Foi a primeira coisa que eu descartei.",
      ],
      en: [
        "The CRM dashboard gathers all three brands across nine tabs: email campaigns, retail revenue, customer base, e-commerce, abandoned cart and browsing. Teams open it every week to build their decks. The question they actually carry fits in no single tab: what happened this period and what do I do about it.",
        "Underneath that sits another one. The same number changes name depending on where you look. The ERP stamp says ATIVO, the Qlik BI says fidelizada, and base ativa is a third thing, a twelve-month history rule. Two people read the same panel and disagreed about what the number meant.",
        "The obvious move was to wire a chat to the database and let the model query it. That was the first thing I ruled out.",
      ],
    },
    role: {
      pt: "Concepção, arquitetura e desenvolvimento, sozinho, de ponta a ponta: ingestão, modelagem, API, frontend e a camada de IA.",
      en: "Concept, architecture and development, solo, end to end: ingestion, modeling, API, frontend and the AI layer.",
    },
    roleDependencies: {
      pt: [
        "As definições de negócio do glossário vieram do time de CRM e do B.I. Eu conferi cada uma contra a fonte antes de colocar no prompt.",
        "Os dados de origem pertencem às plataformas da empresa: Insider, GA4, ERP e o BigQuery corporativo. Eu respondo pelo que a aplicação faz com eles, não pelas fontes.",
      ],
      en: [
        "The glossary's business definitions came from the CRM and BI teams. I checked each one against the source before putting it in the prompt.",
        "Source data belongs to company platforms: Insider, GA4, the ERP and the corporate BigQuery. I answer for what the application does with it, not for the sources.",
      ],
    },
    diagram: [
      {
        kind: "input",
        label: { pt: "Pergunta + marca + período + aba", en: "Question + brand + period + tab" },
        detail: {
          pt: "O recorte da tela viaja junto com a pergunta. Histórico limitado a oito mensagens.",
          en: "The screen's current slice travels with the question. History capped at eight messages.",
        },
      },
      {
        kind: "guard",
        label: { pt: "Roteador determinístico de escopo", en: "Deterministic scope router" },
        detail: {
          pt: "A aba ativa e o vocabulário da pergunta selecionam as fontes. O modelo não participa desta etapa.",
          en: "The active tab and the question's vocabulary select the sources. The model takes no part here.",
        },
      },
      {
        kind: "app",
        label: { pt: "Provedores aprovados, com orçamento", en: "Approved providers, under budget" },
        detail: {
          pt: "Tela, e-mail, receita, base CRM, e-commerce e audiência. Cada um com consulta própria, projeção explícita de colunas e custo declarado.",
          en: "Screen, email, revenue, CRM base, e-commerce and audience. Each with its own query, explicit column projection and a declared cost.",
        },
      },
      {
        kind: "app",
        label: {
          pt: "Contexto agregado + glossário versionado",
          en: "Aggregated context + versioned glossary",
        },
        detail: {
          pt: "Métricas já somadas e as definições do negócio, versionadas no mesmo commit do código que as implementa.",
          en: "Pre-aggregated metrics plus the business definitions, versioned in the same commit as the code that implements them.",
        },
      },
      {
        kind: "model",
        label: { pt: "Modelo de linguagem", en: "Language model" },
        detail: {
          pt: "Responses API com json_schema strict, teto de saída, timeout de 30 s e registro de tokens por chamada.",
          en: "Responses API with strict json_schema, an output ceiling, a 30 s timeout and per-call token logging.",
        },
      },
      {
        kind: "guard",
        label: { pt: "Reparo e validação", en: "Repair and validation" },
        detail: {
          pt: "Segunda tentativa em json_object, normalização do formato frouxo e o Zod como porta final. Resposta fora do contrato não chega à tela.",
          en: "A json_object retry, normalization of loose output and Zod as the final gate. Output that breaks the contract never reaches the screen.",
        },
      },
      {
        kind: "output",
        label: {
          pt: "Resposta, evidências e plano de audiência",
          en: "Answer, evidence and audience plan",
        },
        detail: {
          pt: "O plano são filtros, nunca contatos. A interface mostra de quais fontes a resposta veio e em que estado cada uma estava.",
          en: "The plan is filters, never contacts. The interface shows which sources fed the answer and the state each one was in.",
        },
      },
    ],
    pullQuote: {
      text: {
        pt: "Isto não é fine-tuning. Fine-tuning ensina estilo, não fato: um modelo ajustado continua inventando número quando não sabe, e cada mudança de regra exigiria retreinar. O que resolve é o modelo ler as regras a cada pergunta, versionadas junto do código que as implementa, assim regra e implementação mudam no mesmo commit e nunca divergem em silêncio.",
        en: "This is not fine-tuning. Fine-tuning teaches style, not fact: a tuned model still invents numbers when it does not know, and every rule change would mean retraining. What works is the model reading the rules on every question, versioned alongside the code that implements them, so rule and implementation change in the same commit and never silently diverge.",
      },
      source: "backend/src/services/crmKnowledgeBase.ts",
    },
    decisions: [
      {
        id: "roteador",
        title: { pt: "O modelo não escolhe a fonte", en: "The model does not choose the source" },
        pressure: {
          pt: "Uma pergunta de CRM pode precisar de campanha de e-mail, faturamento de varejo, base de clientes ou e-commerce. Alguém tem que decidir o que ler antes de a pergunta chegar ao modelo.",
          en: "A CRM question might need email campaigns, retail revenue, the customer base or e-commerce. Something has to decide what to read before the question reaches the model.",
        },
        choice: {
          pt: "Escrevi um roteador determinístico no servidor. A aba ativa e o vocabulário da pergunta selecionam um conjunto de provedores aprovados. Cada provedor tem consulta própria, projeção explícita de colunas e custo declarado. O modelo recebe o resultado e não recebe a chave do armário.",
          en: "I wrote a deterministic router on the server. The active tab and the question's vocabulary select a set of approved providers. Each has its own query, explicit column projection and declared cost. The model gets the result and never the key to the cabinet.",
        },
        alternative: {
          pt: "Dar ferramentas ao modelo e deixar ele consultar, via tool calling ou texto-para-SQL. Descartei por dois motivos: coloca nome de tabela e SQL sobre dado de produção na mão do modelo, e torna o custo de uma pergunta imprevisível. A mesma pergunta, feita duas vezes, pode ler volumes muito diferentes.",
          en: "Give the model tools and let it query, through tool calling or text-to-SQL. I rejected it for two reasons: it hands table names and SQL over production data to the model, and it makes the cost of a question unpredictable. The same question, asked twice, can read wildly different volumes.",
        },
        limit: {
          pt: "O roteador é expressão regular mais aba ativa. Pergunta com vocabulário fora do mapeado perde a fonte certa e responde só com o que a tela já tinha. Ele cresce por manutenção, e por isso o roteamento tem bateria de testes própria, incluindo o caso que separa pedido de audiência de pergunta sobre a base inteira.",
          en: "The router is regex plus active tab. A question whose vocabulary is not mapped loses the right source and answers only from what the screen already had. It grows by maintenance, which is why routing has its own test suite, including the case that separates an audience request from a question about the whole base.",
        },
        code: "backend/src/services/copilotContextHubService.ts · resolveCopilotScopes",
      },
      {
        id: "orcamento",
        title: { pt: "Orçamento de custo por pergunta", en: "A cost budget per question" },
        pressure: {
          pt: "Ler faturamento de varejo e e-commerce no BigQuery na mesma pergunta custa caro, e quem digita a pergunta não enxerga esse custo.",
          en: "Reading retail revenue and e-commerce from BigQuery in one question costs real money, and whoever types the question cannot see that cost.",
        },
        choice: {
          pt: "Cada escopo declara um custo e a pergunta tem um teto. Bloco que a tela já carregou volta a ser usado com custo zero. Há cache de trinta minutos com chave versionada e coalescência: perguntas simultâneas equivalentes compartilham uma consulta em vez de disparar várias.",
          en: "Each scope declares a cost and the question has a ceiling. A block the screen already loaded gets reused at zero cost. There is a thirty-minute cache with a versioned key and coalescing: equivalent concurrent questions share one query instead of firing several.",
        },
        alternative: {
          pt: "Carregar tudo sempre, ou não limitar. O primeiro paga scan que ninguém pediu em toda pergunta. O segundo deixa uma pergunta mal formulada custar mais que um dia inteiro de uso normal.",
          en: "Always load everything, or set no limit. The first pays for a scan nobody asked for on every question. The second lets one badly framed question cost more than a full day of normal use.",
        },
        limit: {
          pt: "O teto vale por pergunta, não por usuário nem por dia. Duas fontes caras na mesma pergunta significam uma pulada, e a resposta precisa dizer isso. Fonte pulada é ausência de dado, nunca zero. A interface mostra esse estado para quem perguntou, com o rótulo de que a cota foi preservada.",
          en: "The ceiling applies per question, not per user or per day. Two expensive sources in one question means one gets skipped, and the answer has to say so. A skipped source is missing data, never zero. The interface surfaces that state to whoever asked, labelled as quota preserved.",
        },
        code: "backend/src/services/copilotContextHubService.ts · buildCopilotContext",
      },
      {
        id: "contrato",
        title: { pt: "Saída é contrato, não texto", en: "Output is a contract, not prose" },
        pressure: {
          pt: "Resposta em prosa livre não dá para validar. Resposta estruturada inválida quebra a tela. Eu precisava das duas coisas: formato garantido e conteúdo dentro de limites.",
          en: "Free prose cannot be validated. Invalid structured output breaks the screen. I needed both: a guaranteed shape and content within limits.",
        },
        choice: {
          pt: "json_schema strict na chamada. Diante de um 400, uma segunda tentativa em json_object. Depois uma normalização que repara o formato frouxo: evidência que voltou como objeto vira texto, coleções são cortadas no limite, plano fora do contrato vira nulo. O Zod fica como porta final. São duas camadas independentes porque o strict do structured output não aceita maxLength em string, então o limite de tamanho só existe no prompt e no Zod.",
          en: "Strict json_schema on the call. On a 400, a json_object retry. Then a normalization pass that repairs loose output: evidence that came back as an object becomes text, collections get trimmed to their cap, an off-contract plan becomes null. Zod sits as the final gate. Two independent layers, because structured output's strict mode does not accept maxLength on strings, so the length limit only lives in the prompt and in Zod.",
        },
        alternative: {
          pt: "Confiar só no structured output. Em 02/09/2026 isso me custou uma análise inteira. O Zod recusou um Radar válido porque o terceiro caveat tinha 230 caracteres num teto de 220. Nenhum erro apareceu na tela. O painel caiu no fallback determinístico e serviu uma leitura pobre onde havia uma boa.",
          en: "Trust structured output alone. On 2026-09-02 that cost me an entire analysis. Zod rejected a valid Radar because the third caveat ran 230 characters against a 220 cap. No error showed on screen. The panel dropped to the deterministic fallback and served a poor reading where a good one existed.",
        },
        limit: {
          pt: "Validador rígido demais vira indisponibilidade silenciosa, que dá mais trabalho de achar do que erro visível. Subi o teto, levei a restrição também para o prompt, que é onde ela se cumpre, e passei a tratar queda para o fallback como sintoma a investigar. Medir a frequência dessa queda continua na lista.",
          en: "An over-strict validator turns into a silent outage, which takes longer to find than a visible error. I raised the cap, moved the constraint into the prompt too, where it actually holds, and started treating a drop to the fallback as a symptom to investigate. Measuring how often that drop happens is still on the list.",
        },
        code: "backend/src/services/aiCopilotService.ts · normalizeCopilotOutput",
      },
      {
        id: "audiencia",
        title: {
          pt: "O modelo planeja, a aplicação executa",
          en: "The model plans, the application executes",
        },
        pressure: {
          pt: "O time pede base de contatos para disparo. Um modelo com acesso a contatos é um vazamento esperando a hora.",
          en: "The team asks for a contact list to send to. A model with access to contacts is a leak waiting for its moment.",
        },
        choice: {
          pt: "Quando o pedido é de audiência, o modelo devolve um plano de filtros: segmento, UF, score mínimo, limite, período e preset de exportação. Nada além disso. Nenhum dado pessoal entra no contexto. A aplicação calcula a prévia a partir do plano, exige confirmação explícita e restringe a exportação a administradores. O canal é e-mail, que exige opt-in e endereço válido.",
          en: "When the ask is for an audience, the model returns a plan of filters: segment, state, minimum score, limit, period and export preset. Nothing else. No personal data enters the context. The application computes the preview from that plan, requires explicit confirmation and restricts export to admins. The channel is email, which requires opt-in and a valid address.",
        },
        alternative: {
          pt: "Deixar o modelo montar a lista. Além de colocar dado pessoal no contexto, transformaria uma alucinação de filtro em disparo real para gente de verdade.",
          en: "Let the model assemble the list. On top of putting personal data in the context, it would turn a hallucinated filter into a real send to real people.",
        },
        limit: {
          pt: "Só e-mail funciona nesta etapa. Para outros canais o copiloto explica a limitação em vez de improvisar. E há um detalhe que o modelo erra com frequência suficiente para eu não confiar: quando a pergunta diz semana, a aplicação sobrescreve as datas do plano. Período pesa demais para ficar por conta de interpretação.",
          en: "Only email works at this stage. For other channels the copilot explains the limitation instead of improvising. And one detail the model gets wrong often enough that I do not trust it: when the question says week, the application overwrites the plan's dates. A date range carries too much weight to leave to interpretation.",
        },
        code: "backend/src/services/aiCopilotService.ts · askCopilot",
      },
    ],
    evidence: {
      intro: {
        pt: "O que existe hoje é verificação de comportamento e rastreabilidade. O que ainda não existe está logo abaixo, escrito com todas as letras.",
        en: "What exists today is behavioral verification and traceability. What does not exist yet sits right below, spelled out.",
      },
      metrics: [
        {
          value: "2",
          label: { pt: "camadas de validação independentes", en: "independent validation layers" },
          note: {
            pt: "Contrato na chamada e Zod no servidor. Cada uma pega um tipo diferente de falha.",
            en: "A contract on the call and Zod on the server. Each catches a different kind of failure.",
          },
        },
        {
          value: "6",
          label: { pt: "fontes de contexto roteáveis", en: "routable context sources" },
          note: {
            pt: "Tela, e-mail, receita, base CRM, e-commerce e audiência, com estado próprio em cada resposta.",
            en: "Screen, email, revenue, CRM base, e-commerce and audience, each with its own state on every answer.",
          },
        },
        {
          value: "30 s",
          label: { pt: "timeout por chamada", en: "timeout per call" },
          note: {
            pt: "Com teto de tokens de saída e consumo registrado por operação identificada.",
            en: "With an output token ceiling and consumption logged per identified operation.",
          },
        },
      ],
      notes: {
        pt: [
          "O roteador de escopo e a normalização de saída têm testes de unidade, incluindo os casos que já falharam na prática: pedido de base exportável que não pode carregar a base CRM inteira, evidência que volta como objeto em vez de texto, e resposta longa do assistente que voltava no histórico e derrubava a pergunta seguinte.",
          "Cada chamada registra modelo, tokens de entrada e de saída, com a operação identificada por marca e aba. É o que me deixa responder quanto custa uma pergunta em vez de estimar.",
          "A procedência aparece para quem perguntou. Cada resposta mostra de quais fontes ela veio e se cada uma foi consultada agora, veio do cache, já estava na tela ou foi pulada para preservar a cota.",
          "Quando a chamada falha, o Radar não some. Ele cai num fallback determinístico, marcado como tal na resposta, com as métricas consolidadas do período.",
        ],
        en: [
          "The scope router and output normalization have unit tests, including the cases that already failed in practice: an exportable-list request that must not load the entire CRM base, evidence returning as an object instead of text, and a long assistant reply that came back in history and broke the next question.",
          "Every call logs model, input and output tokens, with the operation identified by brand and tab. That is what lets me answer what a question costs instead of estimating it.",
          "Provenance shows up for whoever asked. Each answer lists which sources fed it and whether each was queried now, served from cache, already on screen or skipped to preserve quota.",
          "When the call fails the Radar does not vanish. It drops to a deterministic fallback, marked as such in the response, carrying the period's consolidated metrics.",
        ],
      },
      caveat: {
        pt: "Não existe ainda avaliação sistemática da qualidade das respostas. Testar que o JSON é válido cobre o formato e não cobre a análise, e eu não vou apresentar um como se fosse o outro.",
        en: "There is no systematic evaluation of answer quality yet. Testing that the JSON is valid covers the shape and not the analysis, and I will not present one as the other.",
      },
    },
    evalPlan: {
      intro: {
        pt: "É o próximo trabalho. Um conjunto pequeno de perguntas reais de CRM, revisadas por quem conhece as regras, medido nestes critérios:",
        en: "This is the next piece of work. A small set of real CRM questions, reviewed by people who know the rules, measured against these criteria:",
      },
      criteria: [
        {
          criterion: { pt: "Fidelidade aos números", en: "Fidelity to the numbers" },
          check: {
            pt: "A resposta usou os valores que estavam no contexto, sem inventar e sem arredondar para o que soa melhor?",
            en: "Did the answer use the values actually in the context, without inventing and without rounding toward what sounds better?",
          },
        },
        {
          criterion: { pt: "Marca e período", en: "Brand and period" },
          check: {
            pt: "Respondeu sobre o recorte pedido, ou escorregou para outra marca ou outro intervalo?",
            en: "Did it answer about the requested slice, or slide into another brand or another range?",
          },
        },
        {
          criterion: { pt: "Dado insuficiente", en: "Insufficient data" },
          check: {
            pt: "Com uma fonte indisponível ou pulada, reconheceu a lacuna ou concluiu mesmo assim?",
            en: "With a source unavailable or skipped, did it acknowledge the gap or conclude anyway?",
          },
        },
        {
          criterion: { pt: "Evidência", en: "Evidence" },
          check: {
            pt: "A conclusão se sustenta no dado citado, ou a evidência ficou decorativa?",
            en: "Does the conclusion hold up on the cited data, or is the evidence decorative?",
          },
        },
        {
          criterion: { pt: "Injeção pelo contexto", en: "Injection through context" },
          check: {
            pt: "Instrução maliciosa dentro de um campo de dado muda a resposta? Pedir no prompt que o modelo ignore instruções do contexto não prova, sozinho, que a proteção funciona.",
            en: "Does a malicious instruction inside a data field change the answer? Asking the model in the prompt to ignore instructions in the context does not, on its own, prove the protection works.",
          },
        },
        {
          criterion: { pt: "Custo e latência", en: "Cost and latency" },
          check: {
            pt: "Quanto consumiu e quanto demorou, por tipo de pergunta, e com que frequência a resposta cai no fallback determinístico.",
            en: "How much it consumed and how long it took, by question type, and how often the answer drops to the deterministic fallback.",
          },
        },
      ],
      note: {
        pt: "Perguntas ambíguas entram no conjunto de propósito, e dados com instrução embutida também. Só depois disso eu escreveria um número de acerto aqui.",
        en: "Ambiguous questions go into the set on purpose, and so does data with embedded instructions. Only after that would I write an accuracy number here.",
      },
    },
    result: {
      done: {
        pt: [
          "Copiloto e Radar em produção para Oriba, Haight e Shoulder, sobre nove abas analíticas.",
          "Exportação de audiência com prévia, confirmação explícita e restrição a administradores.",
          "Glossário de negócio versionado, com regra de manutenção: nada entra sem estar implementado no painel ou conferido contra a fonte.",
        ],
        en: [
          "Copilot and Radar in production for Oriba, Haight and Shoulder, across nine analytical tabs.",
          "Audience export with preview, explicit confirmation and admin-only access.",
          "A versioned business glossary with a maintenance rule: nothing enters unless it is implemented in the panel or checked against the source.",
        ],
      },
      open: {
        pt: [
          "A avaliação descrita acima, que é a lacuna real deste projeto hoje.",
          "Medir a taxa de queda para o fallback determinístico e tratar isso como indicador.",
          "Ampliar o vocabulário do roteador, que hoje cresce só por manutenção manual.",
        ],
        en: [
          "The evaluation described above, the real gap in this project today.",
          "Measuring how often answers drop to the deterministic fallback and treating that as an indicator.",
          "Widening the router's vocabulary, which today only grows through manual maintenance.",
        ],
      },
      next: {
        pt: "O próximo problema é a avaliação. Enquanto eu não medir a qualidade das respostas, o que eu tenho é uma integração bem construída sem prova de que ela acerta.",
        en: "The next problem is evaluation. Until I measure answer quality, what I have is a well-built integration with no proof that it gets things right.",
      },
    },
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI Responses API",
      "Zod",
      "Prisma",
      "PostgreSQL · Neon",
      "BigQuery",
      "Next.js",
      "Tailwind CSS",
      "Vitest",
      "Railway",
    ],
    access: {
      pt: "Sistema interno do Grupo Shoulder. O código é privado e nenhum dado de cliente aparece aqui. Consigo percorrer a arquitetura e o comportamento numa conversa, com dado sintético.",
      en: "Internal Grupo Shoulder system. The code is private and no customer data appears here. I can walk through the architecture and behavior in a conversation, using synthetic data.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "operacao-omnichannel",
    index: "02",
    year: "2026",
    name: "Operação omnichannel",
    kicker: { pt: "Engenharia de produto e dados", en: "Product and data engineering" },
    title: {
      pt: "Plataforma de análise operacional omnichannel",
      en: "Omnichannel operations analytics platform",
    },
    status: { pt: "Etapa de homologação · três marcas", en: "Staging · three brands" },
    oneLine: {
      pt: "Análise de pedidos roteados a lojas, recusas e pendências, com custo de consulta sob controle e um simulador de meta que faz uma leitura e aceita interação infinita.",
      en: "Analysis of store-routed orders, refusals and pending items, with query cost under control and a goal simulator that reads once and takes infinite interaction.",
    },
    cardPoints: {
      pt: [
        "Medições reais de latência e bytes em três camadas de cache, reproduzíveis por comando",
        "Dez requisições simultâneas idênticas geraram um job no BigQuery, não dez",
        "A linha não é um pedido. Somar a listagem superestima a receita em cerca de 11%",
      ],
      en: [
        "Real latency and byte measurements across three cache layers, reproducible by command",
        "Ten identical concurrent requests produced one BigQuery job, not ten",
        "A row is not an order. Summing the listing overstates revenue by about 11%",
      ],
    },
    problem: {
      pt: [
        "O time de CX acompanha pedidos que as lojas das três marcas atendem: quanto tempo a loja leva para reagir, quantos pedidos ela recusa e por quê, e o que fica pendente. Essa leitura saía de consulta ad hoc e planilha, então cada pessoa chegava a um número diferente.",
        "E existia uma pergunta que ninguém conseguia responder. A meta de SLA mudou em 2026. A Shoulder ganhou 3 h ao lado de 2 h 30 e 3 h 30, a Haight saiu de 5 h para 3 h. Quem decidiu não tinha como prever o efeito antes de aplicar. O resultado aparecia depois, nunca antes.",
        "Junto disso vieram três armadilhas na fonte que fazem qualquer leitura ingênua produzir número errado com cara de número certo.",
      ],
      en: [
        "The CX team tracks orders that stores across the three brands fulfil: how long a store takes to react, how many orders it refuses and why, and what stays pending. That reading came out of ad hoc queries and spreadsheets, so every person arrived at a different number.",
        "And one question had no answer at all. The SLA target changed in 2026. Shoulder gained a 3 h tier alongside 2 h 30 and 3 h 30, Haight moved from 5 h to 3 h. Whoever decided had no way to predict the effect before applying it. The outcome showed up afterwards, never before.",
        "On top of that came three traps in the source data that make any naive reading produce a wrong number wearing the face of a right one.",
      ],
    },
    role: {
      pt: "Descoberta dos dados, modelagem das métricas, API, controles de custo e segurança, e as telas. Sozinho.",
      en: "Data discovery, metric modeling, the API, cost and security controls, and the screens. Solo.",
    },
    roleDependencies: {
      pt: [
        "As regras operacionais e o que conta como recusa vieram do time de CX. Elas estão documentadas com as pendências numeradas, incluindo as que ainda não foram homologadas.",
        "Outra área mantém o dataset de origem. Eu documentei a granularidade e a qualidade observada, sem alterar a fonte.",
      ],
      en: [
        "Operational rules and what counts as a refusal came from the CX team. They sit documented with numbered open items, including the ones not yet signed off.",
        "Another team maintains the source dataset. I documented its granularity and observed quality without changing the source.",
      ],
    },
    diagram: [
      {
        kind: "input",
        label: { pt: "Filtro: marcas, período, agrupamento", en: "Filter: brands, period, grouping" },
      },
      {
        kind: "guard",
        label: { pt: "Validação e lista permitida", en: "Validation and allowlist" },
        detail: {
          pt: "Valores de filtro viajam como parâmetros do BigQuery. Nome de tabela, coluna e direção de ordenação vêm só de listas do servidor: o cliente escolhe um código e o servidor traduz. Não existe rota de SQL livre nem de escrita.",
          en: "Filter values travel as BigQuery parameters. Table, column and sort direction come only from server-side lists: the client picks a code and the server translates. There is no free-SQL route and no write route.",
        },
      },
      {
        kind: "guard",
        label: { pt: "Dry run e teto de bytes", en: "Dry run and byte ceiling" },
        detail: {
          pt: "Estimativa antes de cada consulta. O teto é maximumBytesBilled: o BigQuery recusa o job antes de processar. Estimativa ausente é desconhecida, nunca custo zero.",
          en: "An estimate before every query. The ceiling is maximumBytesBilled: BigQuery refuses the job before processing. A missing estimate is unknown, never zero cost.",
        },
      },
      {
        kind: "app",
        label: { pt: "Cache com coalescência", en: "Cache with coalescing" },
        detail: {
          pt: "Chave por endpoint, filtros normalizados e escopo de acesso. Erro nunca entra como sucesso, e requisições equivalentes simultâneas compartilham um único job.",
          en: "Keyed by endpoint, normalized filters and access scope. An error never lands as a success, and equivalent concurrent requests share a single job.",
        },
      },
      {
        kind: "app",
        label: { pt: "Agregação no BigQuery", en: "Aggregation in BigQuery" },
        detail: {
          pt: "A API entrega resultado pronto para a tela e nunca baixa registro para somar em memória.",
          en: "The API returns screen-ready results and never downloads rows to sum in memory.",
        },
      },
      {
        kind: "output",
        label: { pt: "Resposta com data e meta", en: "Response with data and meta" },
        detail: {
          pt: "O meta declara período, frescor, resultado de cache, estimativa de consulta e os indicadores que a fonte não sustenta, com motivo.",
          en: "The meta declares period, freshness, cache result, query estimate and the indicators the source cannot support, each with a reason.",
        },
      },
      {
        kind: "output",
        label: { pt: "Tela com componentes de honestidade", en: "Screen with honesty components" },
        detail: {
          pt: "Valor ausente aparece como travessão com o motivo no título, não como zero. Período parcial e sobreposição de população têm aviso próprio.",
          en: "A missing value renders as an em dash with its reason in the title, not as a zero. Partial periods and overlapping populations get their own notice.",
        },
      },
    ],
    pullQuote: {
      text: {
        pt: "Este arquivo existe porque o backend foi construído para não mentir: devolve nulo em vez de zero, declara indicador indisponível, avisa quando populações se sobrepõem. Nada disso serve se a tela achatar tudo em zero ou omitir a ressalva. São componentes pequenos e repetitivos de propósito: quanto mais barato for exibir a ressalva, maior a chance de ela aparecer onde precisa.",
        en: "This file exists because the backend was built not to lie: it returns null instead of zero, declares an indicator unavailable, warns when populations overlap. None of that helps if the screen flattens everything into zero or drops the caveat. These components are small and repetitive on purpose: the cheaper the caveat is to display, the likelier it shows up where it is needed.",
      },
      source: "frontend/components/ui/Honestidade.tsx",
    },
    decisions: [
      {
        id: "linha-pedido",
        title: { pt: "A linha não é um pedido", en: "A row is not an order" },
        pressure: {
          pt: "Cada linha da fonte é uma linha do pedido roteada a uma loja. A leitura óbvia, somar a coluna de receita da listagem, dá errado sem levantar suspeita.",
          en: "Each source row is one order line routed to one store. The obvious reading, summing the listing's revenue column, goes wrong without raising suspicion.",
        },
        choice: {
          pt: "Separei a listagem paginada, que serve para investigar caso a caso, do endpoint de resumo, que soma e deduplica. E a chave de negócio virou marca mais pedido, no lugar do identificador do pedido sozinho.",
          en: "I separated the paginated listing, which exists to investigate case by case, from the summary endpoint, which sums and deduplicates. And the business key became brand plus order instead of the order identifier alone.",
        },
        alternative: {
          pt: "Confiar no identificador do pedido, que é o que qualquer um faria. Medi 2.868 casos de colisão de ID entre marcas: dois pedidos diferentes, de marcas diferentes, com o mesmo número.",
          en: "Trust the order identifier, which is what anyone would do. I measured 2,868 ID collisions across brands: two different orders, different brands, same number.",
        },
        limit: {
          pt: "Somar receita direto da listagem superestima o total em cerca de 11%. Escrevi isso no README do repositório, no README do backend e no OpenAPI, em três lugares, porque é o erro mais fácil de cometer aqui e o mais difícil de perceber depois. As categorias de resultado também se sobrepõem: no prazo mais atrasado mais sem resultado não bate com o total, e nenhum gráfico da tela exige que somem 100%.",
          en: "Summing revenue straight from the listing overstates the total by about 11%. I wrote that in the repo README, the backend README and the OpenAPI, in three places, because it is the easiest mistake to make here and the hardest to notice later. Result categories also overlap: on-time plus late plus no-result does not match the total, and no chart on screen requires them to sum to 100%.",
        },
        code: "docs/metricas.md · docs/data-discovery.md",
      },
      {
        id: "simulador",
        title: { pt: "Uma leitura, interação infinita", en: "One read, infinite interaction" },
        pressure: {
          pt: "A pergunta é real e nunca teve resposta: e se a meta fosse outra? Um simulador só vale alguma coisa se a pessoa puder mexer, comparar, voltar atrás e levar o resultado para a reunião.",
          en: "The question is real and never had an answer: what if the target were different? A simulator is only worth anything if a person can drag it, compare, go back and take the result into a meeting.",
        },
        choice: {
          pt: "A aba faz uma consulta ao BigQuery e recebe o histograma do tempo de reação por loja. Todo o resto, cada arrasto do controle e cada loja recalculada, é soma acumulada sobre os baldes, no navegador.",
          en: "The tab makes one BigQuery query and receives the per-store reaction-time histogram. Everything after that, every slider drag and every recalculated store, is a cumulative sum over the buckets, in the browser.",
        },
        alternative: {
          pt: "Uma consulta por ajuste do controle. Transformaria exploração em custo e latência, e o resultado previsível é que ninguém exploraria: a pessoa mexeria duas vezes e desistiria.",
          en: "One query per slider adjustment. It would turn exploration into cost and latency, and the predictable result is that nobody explores: two drags and they give up.",
        },
        limit: {
          pt: "O passo do controle tem que ser a largura do balde. Com a meta caindo no meio de um balde, a conta precisaria repartir por interpolação e o número viraria estimativa. E há um limite maior: isto é análise sobre o histórico. O simulador diz quantos pedidos teriam ficado dentro de outra meta. Ele não diz como as lojas mudariam de comportamento depois de uma meta nova, e eu não apresento isso como modelo preditivo.",
          en: "The slider step has to equal the bucket width. With the target landing mid-bucket, the math would have to split the bucket by interpolation and the number would turn into an estimate. And there is a larger limit: this is analysis over history. The simulator says how many orders would have fallen inside a different target. It does not say how stores would change behavior under a new one, and I do not present it as a predictive model.",
        },
        code: "frontend/components/ui/DistribuicaoReacao.tsx · aderenciaSob",
      },
      {
        id: "custo-erro",
        title: {
          pt: "Custo e erro são controle, não consequência",
          en: "Cost and failure are controls, not consequences",
        },
        pressure: {
          pt: "Um cliente BigQuery mal configurado aceita o job e devolve zero linha em silêncio: sem erro, sem exceção, e passando pelo typecheck. Aconteceu durante o desenvolvimento deste projeto.",
          en: "A misconfigured BigQuery client accepts the job and returns zero rows silently: no error, no exception, and it passes typecheck. That happened while I was building this.",
        },
        choice: {
          pt: "Escrevi um comando de diagnóstico com oito verificações em ordem de dependência, para que não funciona nunca seja um erro genérico. A oitava compara consulta parametrizada com literal e exige que casem as mesmas linhas, que é a que pega essa falha. Ele fica no caminho da instalação, antes do primeiro start.",
          en: "I wrote a diagnostic command with eight checks in dependency order, so that it doesn't work is never a generic error. The eighth compares a parameterized query against a literal one and requires the same rows to match, which is the one that catches that failure. It sits in the install path, before the first start.",
        },
        alternative: {
          pt: "Descobrir em produção, com um painel mostrando zero e alguém concluindo que a operação parou.",
          en: "Find out in production, with a panel showing zero and someone concluding operations had stopped.",
        },
        limit: {
          pt: "O diagnóstico só ajuda quem roda, por isso ele está no caminho de instalação em vez de num script solto. Os testes de integração ficam fora da suíte padrão: uma suíte que consulta a nuvem a cada execução vira gasto recorrente e passa a falhar por rede em vez de por código. O preço dessa escolha é que a suíte rápida não prova conexão. Quem prova é o diagnóstico e a comparação com SQL de referência.",
          en: "The diagnostic only helps whoever runs it, which is why it lives in the install path rather than in some loose script. Integration tests stay out of the default suite: a suite that hits the cloud on every run becomes recurring spend and starts failing over the network instead of over code. The price of that choice is that the fast suite does not prove connectivity. The diagnostic and the reference-SQL comparison do.",
        },
        code: "backend · npm run bq:doctor",
      },
    ],
    evidence: {
      intro: {
        pt: "Medições executadas em 2026-09-16, Node 26.3.0, uma instância local. Reproduzíveis com um comando do repositório.",
        en: "Measurements taken on 2026-09-16, Node 26.3.0, one local instance. Reproducible with a single command from the repository.",
      },
      metrics: [
        {
          value: "1.443–3.526 ms",
          label: { pt: "primeira consulta, tudo frio", en: "first query, everything cold" },
          note: { pt: "87–90 MiB lidos.", en: "87–90 MiB read." },
        },
        {
          value: "818–1.335 ms",
          label: { pt: "cache do próprio BigQuery", en: "BigQuery's own cache" },
          note: { pt: "0 MiB faturados.", en: "0 MiB billed." },
        },
        {
          value: "0,004–0,018 ms",
          label: { pt: "cache da aplicação", en: "application cache" },
          note: {
            pt: "0 bytes. É a camada que faz a tela parecer instantânea.",
            en: "0 bytes. This is the layer that makes the screen feel instant.",
          },
        },
        {
          value: "1 job",
          label: {
            pt: "para 10 requisições simultâneas idênticas",
            en: "for 10 identical concurrent requests",
          },
          note: {
            pt: "Nove coalescidas, 771 ms no total. Sem isso, dez cards abrindo juntos pagariam dez vezes pelo mesmo scan.",
            en: "Nine coalesced, 771 ms total. Without it, ten cards opening together would pay ten times for the same scan.",
          },
        },
        {
          value: "197",
          label: { pt: "testes que não tocam a nuvem", en: "tests that never touch the cloud" },
          note: {
            pt: "Validação, cache, agregação, SQL e contrato HTTP.",
            en: "Validation, cache, aggregation, SQL and the HTTP contract.",
          },
        },
        {
          value: "19",
          label: { pt: "testes de integração, opt-in", en: "integration tests, opt-in" },
          note: {
            pt: "Contra o BigQuery real, fora da suíte padrão.",
            en: "Against real BigQuery, outside the default suite.",
          },
        },
      ],
      notes: {
        pt: [
          "Um comando separado compara a resposta da API com SQL de referência independente, escrito para rodar direto no console. É a checagem que pega divergência de regra em vez de bug de código.",
          "Erro nunca fica guardado como sucesso no cache. Cachear uma falha transformaria um erro de um segundo num erro de dois minutos.",
          "Os logs não registram query string, valores de filtro nem segredos. O campo de regional contém nome de pessoa, e o log de acesso omite os filtros por causa disso.",
        ],
        en: [
          "A separate command compares the API's response against independent reference SQL, written to run straight in the console. That is the check that catches a rule divergence instead of a code bug.",
          "An error never sits in the cache as a success. Caching a failure would turn a one-second error into a two-minute one.",
          "Logs record no query string, no filter values and no secrets. The regional field contains people's names, and the access log omits filters because of that.",
        ],
      },
      caveat: {
        pt: "Números medidos nesta máquina, nesta data. Eles não valem como promessa de desempenho em outro ambiente.",
        en: "Numbers measured on this machine, on this date. They do not hold as a performance promise for another environment.",
      },
    },
    result: {
      done: {
        pt: [
          "Quatorze rotas de leitura sob contrato OpenAPI completo, cobrindo operação, recusas, pendências e duas listagens paginadas.",
          "Telas de desempenho, recusas, pendências, reoferta e simulação de meta, com filtro global de marca e período.",
          "Três armadilhas da fonte documentadas e neutralizadas em código, não só em nota de rodapé.",
        ],
        en: [
          "Fourteen read routes under a complete OpenAPI contract, covering operations, refusals, pending items and two paginated listings.",
          "Screens for performance, refusals, pending items, re-offer and goal simulation, with a global brand and period filter.",
          "Three source traps documented and neutralized in code, not only in a footnote.",
        ],
      },
      open: {
        pt: [
          "A etapa atual é localhost. O processo recusa subir em host não-local ou em produção sem autenticação configurada, e essa trava é intencional.",
          "O cache é por instância, sem Redis. Subir uma segunda instância cria dois caches independentes, e o TTL vira o limite de divergência entre elas.",
          "As tabelas somam cerca de 186 MB e não têm particionamento nem clustering. Deixei assim: o scan completo da maior cabe no teto configurado, e particionar traria ganho irrelevante com custo de manutenção real. A revisão fica marcada para quando a base crescer uma ordem de magnitude.",
        ],
        en: [
          "The current stage is localhost. The process refuses to start on a non-local host or in production without authentication configured, and that lock is intentional.",
          "The cache is per instance, no Redis. A second instance creates two independent caches, and the TTL becomes the divergence window between them.",
          "The tables total about 186 MB and have no partitioning or clustering. I left it that way: a full scan of the largest one fits under the configured ceiling, and partitioning would bring irrelevant gain at real maintenance cost. The review is flagged for when the base grows an order of magnitude.",
        ],
      },
      next: {
        pt: "Autenticação e publicação para o time de CX, que é o passo que tira isto do meu localhost e coloca na mão deles.",
        en: "Authentication and rollout to the CX team, the step that takes this off my localhost and puts it in their hands.",
      },
    },
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "BigQuery",
      "OpenAPI",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vitest",
      "Docker",
    ],
    access: {
      pt: "Sistema interno do Grupo Shoulder, em etapa de homologação. O código é privado. Consigo apresentar a documentação de métricas e o contrato OpenAPI numa conversa.",
      en: "Internal Grupo Shoulder system, in staging. The code is private. I can walk through the metrics documentation and the OpenAPI contract in a conversation.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "oriba-intelligence",
    index: "03",
    year: "2026",
    name: "Oriba Intelligence",
    kicker: {
      pt: "Integração e evolução de arquitetura",
      en: "Integration and architectural evolution",
    },
    title: {
      pt: "Oriba Intelligence: mercado, preços e redes sociais",
      en: "Oriba Intelligence: market, pricing and social",
    },
    status: { pt: "Em produção · migração em andamento", en: "In production · migration in progress" },
    oneLine: {
      pt: "Quatro fontes de mercado num produto só, e uma migração progressiva que roda ao lado do legado em vez de substituir tudo num dia.",
      en: "Four market sources in one product, and a progressive migration running beside the legacy system instead of replacing everything overnight.",
    },
    cardPoints: {
      pt: [
        "Catálogo de cerca de 790 mil SKUs lido em streaming, com desconto medido contra o preço máximo de 90 dias",
        "Plataforma nova em Next.js, Express e BigQuery convivendo com o legado em Flask",
        "Cada fonte reporta o próprio estado e o frescor. Métrica sem base devolve nulo, não zero",
      ],
      en: [
        "A ~790k-SKU catalog read in streaming, with discount measured against the 90-day maximum price",
        "A new Next.js, Express and BigQuery platform coexisting with the Flask legacy",
        "Each source reports its own state and freshness. A metric with no base returns null, not zero",
      ],
    },
    problem: {
      pt: [
        "Inteligência de mercado para moda vem de lugares que não conversam: catálogo de preço dos concorrentes, redes sociais próprias, mídia paga e influenciadores, e menções nas redes. Cada um tem sua API, seu vocabulário e sua noção de atualização.",
        "Havia um problema específico de confiança. O social listening estimava números que as APIs da própria plataforma entregam exatos: seguidor real, insight de Reels, demografia. A estimativa errava e ninguém sabia o tamanho do erro.",
        "E havia um sistema em Flask já em uso, funcionando. Reescrever tudo e trocar num dia troca um risco conhecido por um desconhecido.",
      ],
      en: [
        "Market intelligence for fashion comes from places that do not talk to each other: competitor price catalogs, owned social, paid media and influencers, and social mentions. Each has its own API, its own vocabulary and its own idea of freshness.",
        "There was a specific trust problem. Social listening estimated numbers the platform's own APIs deliver exactly: real followers, Reels insights, demographics. The estimate was wrong and nobody knew by how much.",
        "And there was a Flask system already in use, working. Rewriting everything and switching in one day trades a known risk for an unknown one.",
      ],
    },
    role: {
      pt: "Concepção, integrações, modelagem analítica e desenvolvimento das duas gerações do produto: o legado em Flask e a plataforma nova.",
      en: "Concept, integrations, analytical modeling and development of both product generations: the Flask legacy and the new platform.",
    },
    roleDependencies: {
      pt: [
        "A ingestão da Meta e a administração de usuários ainda dependem do legado e de tabelas escritas por outro projeto meu, o dashboard de CRM. Isso está no repositório como decisão em aberto.",
        "O acesso ao catálogo de mercado vem de uma ferramenta contratada. Eu integro e trato o dado, sem coletar.",
      ],
      en: [
        "Meta ingestion and user administration still depend on the legacy system and on tables written by another project of mine, the CRM dashboard. That sits in the repo as an open decision.",
        "Market catalog access comes from a contracted tool. I integrate and process the data without collecting it.",
      ],
    },
    diagram: [
      {
        kind: "input",
        label: {
          pt: "Qlik, Meta Graph e Marketing, Buzz Monitor",
          en: "Qlik, Meta Graph and Marketing, Buzz Monitor",
        },
        detail: {
          pt: "Catálogo de mercado, redes próprias, mídia paga e menções. Quatro APIs, quatro vocabulários.",
          en: "Market catalog, owned social, paid media and mentions. Four APIs, four vocabularies.",
        },
      },
      {
        kind: "app",
        label: { pt: "Ingestão fora do processo da API", en: "Ingestion outside the API process" },
        detail: {
          pt: "Separação escolhida para que uma ingestão lenta nunca segure um request de tela.",
          en: "A separation chosen so a slow ingestion never holds up a screen request.",
        },
      },
      {
        kind: "app",
        label: { pt: "Warehouse no BigQuery", en: "BigQuery warehouse" },
        detail: {
          pt: "A aplicação lê da cópia com nomes padronizados, não da origem legada que o app antigo ainda usa.",
          en: "The application reads from the standardized-name copy, not from the legacy origin the old app still uses.",
        },
      },
      {
        kind: "guard",
        label: {
          pt: "Repositórios: a fronteira de vocabulário",
          en: "Repositories: the vocabulary boundary",
        },
        detail: {
          pt: "Aqui Qtde_Alcance_Social vira reach e Griffe_Social vira brand. Nada acima desta camada conhece nome de coluna do warehouse.",
          en: "Here Qtde_Alcance_Social becomes reach and Griffe_Social becomes brand. Nothing above this layer knows a warehouse column name.",
        },
      },
      {
        kind: "guard",
        label: { pt: "Estado por fonte", en: "Per-source state" },
        detail: {
          pt: "Saudável, degradada ou indisponível, com o frescor em minutos. Contratos Zod compartilhados entre frente e backend.",
          en: "Healthy, degraded or unavailable, with freshness in minutes. Zod contracts shared between frontend and backend.",
        },
      },
      {
        kind: "output",
        label: {
          pt: "Telas com filtro global de marca e período",
          en: "Screens with a global brand and period filter",
        },
        detail: {
          pt: "O recorte fica preservado entre as páginas, para a pessoa não perder o contexto ao navegar.",
          en: "The slice stays preserved across pages, so nobody loses context while navigating.",
        },
      },
    ],
    decisions: [
      {
        id: "migracao",
        title: { pt: "Migrar sem desligar", en: "Migrate without switching off" },
        pressure: {
          pt: "O sistema em Flask está em uso e resolve o problema hoje. Uma reescrita que exige data de corte coloca todo o valor existente em risco por um ganho que ninguém provou ainda.",
          en: "The Flask system is in use and solves the problem today. A rewrite that demands a cutover date puts all existing value at risk for a gain nobody has proven yet.",
        },
        choice: {
          pt: "Montei uma plataforma nova em monorepo, com web em Next.js, API em Express, worker separado e contratos Zod compartilhados entre os três, rodando ao lado do legado. A API só lê o warehouse e o worker escreve. Cada tela migra quando a tela nova fica pronta, sem esperar a reescrita inteira.",
          en: "I built a new platform as a monorepo, with Next.js web, Express API, a separate worker and Zod contracts shared across all three, running beside the legacy. The API only reads the warehouse and the worker writes. Each screen migrates when that screen is ready, without waiting for the whole rewrite.",
        },
        alternative: {
          pt: "Big bang, ou ficar no Flask. O primeiro troca risco conhecido por desconhecido. O segundo mantém HTML montado em template e um acoplamento que já estava cobrando caro.",
          en: "Big bang, or stay on Flask. The first trades a known risk for an unknown one. The second keeps template-assembled HTML and a coupling that was already charging rent.",
        },
        limit: {
          pt: "A migração não terminou, e o repositório diz isso na primeira tela. Três telas leem dado real. Performance e Concorrentes faltam, e o que falta são contrato, repositório e tela, porque a fonte já está no warehouse. O worker existe sem produtor de fila, então nunca roda: as tabelas que a plataforma lê já são escritas por outro projeto. A decisão registrada é, na letra, antes de desenvolvê-lo, decida se ele deve existir. Prefiro deixar uma pergunta em aberto no README a construir uma fila sem produtor para a arquitetura parecer completa.",
          en: "The migration is not finished, and the repo says so on the first screen. Three screens read real data. Performance and Competitors are missing, and what is missing is contract, repository and screen, because the source already sits in the warehouse. The worker exists with no queue producer, so it never runs: the tables the platform reads are already written by another project. The recorded decision reads, word for word, before building it, decide whether it should exist. I would rather leave an open question in the README than build a queue with no producer so the architecture looks complete.",
        },
        code: "README.md · HANDOFF.md",
      },
      {
        id: "desconto",
        title: {
          pt: "Desconto real, não desconto anunciado",
          en: "Real discount, not advertised discount",
        },
        pressure: {
          pt: "Um catálogo de mercado mostra preço de e preço por. O preço de pode ter subido dias antes da promoção, e aí o desconto anunciado mede comunicação em vez de preço.",
          en: "A market catalog shows a was price and a now price. The was price may have risen days before the promotion, and then the advertised discount measures messaging instead of price.",
        },
        choice: {
          pt: "O pipeline rastreia o preço máximo de cada SKU numa janela de 90 dias e calcula o desconto contra ele, no lugar do rótulo. Ele também acompanha variação de 24 h e guarda a primeira captura de cada SKU, para eu saber desde quando cada item está sob observação.",
          en: "The pipeline tracks each SKU's maximum price over a 90-day window and computes the discount against that instead of the label. It also tracks 24 h variation and records each SKU's first capture, so I know since when each item has been under observation.",
        },
        alternative: {
          pt: "Usar o percentual que o site declara. Seria mais simples, e mediria a estratégia de comunicação do concorrente no lugar do preço dele.",
          en: "Use the percentage the site declares. Simpler, and it would measure the competitor's messaging strategy instead of their price.",
        },
        limit: {
          pt: "O catálogo é lido em streaming, com acumuladores, sem guardar todas as linhas na memória. São cerca de 790 mil SKUs, e essa é a razão da escolha. O custo é que a passada calcula o que foi previsto: métrica nova exige reprocessar em vez de consultar. E a janela de 90 dias é uma escolha minha. Um item lançado há uma semana tem base curta para comparação.",
          en: "The catalog is read in streaming, with accumulators, without holding every row in memory. That is around 790k SKUs, and it is the reason for the choice. The cost is that a pass computes what was planned for: a new metric means reprocessing rather than querying. And the 90-day window is my choice. An item launched a week ago has a short baseline to compare against.",
        },
        code: "qlik_api.py",
      },
      {
        id: "heuristica",
        title: {
          pt: "Índice próprio é heurística, e eu digo isso",
          en: "A custom index is a heuristic, and I say so",
        },
        pressure: {
          pt: "Score de competitividade, elasticidade promocional e pressão competitiva são números que eu defini. Nenhum deles vem de uma norma do setor.",
          en: "Competitiveness score, promotional elasticity and competitive pressure are numbers I defined. None comes from an industry standard.",
        },
        choice: {
          pt: "Cada um tem fórmula explícita no código e aparece como leitura comparativa entre marcas. O score de competitividade combina percentual de itens em promoção com peso 0,4 e desconto médio normalizado com peso 0,6.",
          en: "Each has an explicit formula in the code and shows up as a comparative reading across brands. The competitiveness score combines the share of items on promotion at weight 0.4 with normalized average discount at weight 0.6.",
        },
        alternative: {
          pt: "Apresentar como modelo. Não há treino, não há validação, não há erro medido. Chamar isso de modelo cairia na primeira pergunta técnica.",
          en: "Present it as a model. There is no training, no validation, no measured error. Calling it a model would collapse at the first technical question.",
        },
        limit: {
          pt: "Eles servem para ordenar e acompanhar tendência entre marcas, com o mesmo método aplicado a todas. Não servem para prever, e os pesos são escolha minha. Quem discordar dos pesos discorda do índice inteiro, e essa crítica é legítima.",
          en: "They serve to rank and track trends across brands, with the same method applied to all. They do not serve to predict, and the weights are my choice. Anyone who disagrees with the weights disagrees with the whole index, and that criticism is fair.",
        },
      },
      {
        id: "estado-fonte",
        title: {
          pt: "Fonte sem dado aparece como indisponível",
          en: "A source with no data shows as unavailable",
        },
        pressure: {
          pt: "O Buzz Monitor só tem dado da Oriba. Mostrar zero menção para Shoulder e Haight afirmaria que ninguém falou dessas marcas no período.",
          en: "Buzz Monitor only has Oriba data. Showing zero mentions for Shoulder and Haight would assert that nobody talked about those brands in the period.",
        },
        choice: {
          pt: "Cada fonte reporta o próprio estado, saudável, degradada ou indisponível, com o frescor em minutos, e isso atravessa o contrato até a tela. O Net Sentiment Score fica nulo quando não há menção para calcular, porque zero afirmaria sentimento neutro.",
          en: "Each source reports its own state, healthy, degraded or unavailable, with freshness in minutes, and that travels through the contract to the screen. Net Sentiment Score stays null when there is no mention to compute from, because zero would assert neutral sentiment.",
        },
        alternative: {
          pt: "Coalescer para zero. É o comportamento padrão de quase toda serialização, e é o jeito mais silencioso de mentir num painel.",
          en: "Coalesce to zero. It is the default behavior of nearly every serialization path, and the quietest way to lie in a dashboard.",
        },
        limit: {
          pt: "Custa um campo a mais em cada contrato e um componente a mais em cada tela. Saiu barato porque entrou desde o começo. Refazer isso num sistema pronto dá um trabalho enorme.",
          en: "It costs one extra field in every contract and one extra component on every screen. It came cheap because it went in from the start. Retrofitting it into a finished system takes enormous work.",
        },
        code: "apps/api/src/modules/social · DataSourceStatus",
      },
    ],
    evidence: {
      intro: {
        pt: "Aqui a evidência é de integração e de estado, não de desempenho, e essa diferença é escolhida.",
        en: "Here the evidence covers integration and state rather than performance, and that difference is a choice.",
      },
      metrics: [
        {
          value: "~790 mil",
          label: { pt: "SKUs processados em streaming", en: "SKUs processed in streaming" },
          note: {
            pt: "Com acumuladores, sem guardar todas as linhas na memória.",
            en: "With accumulators, without holding every row in memory.",
          },
        },
        {
          value: "4",
          label: { pt: "fontes integradas", en: "integrated sources" },
          note: {
            pt: "Catálogo de mercado, Meta Graph, Meta Marketing e Buzz Monitor.",
            en: "Market catalog, Meta Graph, Meta Marketing and Buzz Monitor.",
          },
        },
        {
          value: "3 de 5",
          label: {
            pt: "telas migradas para a plataforma nova",
            en: "screens migrated to the new platform",
          },
          note: {
            pt: "Visão geral, Meta e Buzz Monitor lendo dado real. Faltam Performance e Concorrentes.",
            en: "Overview, Meta and Buzz Monitor reading real data. Performance and Competitors remain.",
          },
        },
      ],
      notes: {
        pt: [
          "As integrações diretas com a Meta trocaram estimativa por número exato onde o social listening errava: seguidor real, insight de Reels e demografia.",
          "Autenticação: senha só como hash bcrypt, cookie HttpOnly com token aleatório, e o banco guarda apenas o hash desse token. Cada usuário tem lista explícita de marcas liberadas. A própria API recusa o bypass de desenvolvimento em produção.",
          "O cookie de sessão continua first-party porque o navegador fala só com o mesmo domínio da aplicação e o Next.js encaminha para a API. Foi decisão de arquitetura, não efeito colateral.",
        ],
        en: [
          "Direct Meta integrations traded estimates for exact numbers where social listening went wrong: real followers, Reels insights and demographics.",
          "Authentication: passwords only as bcrypt hashes, an HttpOnly cookie carrying a random token, and the database storing only that token's hash. Each user has an explicit list of permitted brands. The API itself refuses the development bypass in production.",
          "The session cookie stays first-party because the browser talks only to the application's own domain and Next.js forwards to the API. That was an architecture decision, not a side effect.",
        ],
      },
      caveat: {
        pt: "Não medi latência nem custo de consulta nesta plataforma como medi na de operação omnichannel. É a dívida mais evidente deste projeto e eu não a escondo atrás das outras métricas.",
        en: "I have not measured latency or query cost on this platform the way I did on the omnichannel operations one. It is this project's most obvious debt and I am not hiding it behind the other metrics.",
      },
    },
    result: {
      done: {
        pt: [
          "Legado em Flask em produção, com dez abas analíticas e duas marcas, atendendo o time hoje.",
          "Plataforma nova em produção com login, permissões por marca, contratos compartilhados e três telas sobre dado real do warehouse.",
          "Separação entre API e worker estabelecida, para que ingestão e leitura nunca disputem o mesmo processo.",
        ],
        en: [
          "The Flask legacy in production, with ten analytical tabs and two brands, serving the team today.",
          "The new platform in production with login, per-brand permissions, shared contracts and three screens over real warehouse data.",
          "API and worker separated, so ingestion and reads never contend for the same process.",
        ],
      },
      open: {
        pt: [
          "Performance e Concorrentes: contrato, repositório e tela. A fonte já está no warehouse.",
          "A decisão sobre o worker, que hoje não tem produtor de fila porque outro projeto já escreve as tabelas que esta plataforma lê.",
          "Ingestão da Meta e administração de usuários ainda no legado.",
        ],
        en: [
          "Performance and Competitors: contract, repository and screen. The source already sits in the warehouse.",
          "The worker decision, which today has no queue producer because another project already writes the tables this platform reads.",
          "Meta ingestion and user administration still on the legacy system.",
        ],
      },
      next: {
        pt: "Fechar as duas telas que faltam e então decidir o worker com dado em mãos, em vez de construir por simetria de arquitetura.",
        en: "Close the two remaining screens and then decide the worker with data in hand, instead of building it for architectural symmetry.",
      },
    },
    stack: [
      "TypeScript",
      "Next.js",
      "Express",
      "Zod",
      "PostgreSQL",
      "Prisma",
      "BigQuery",
      "Redis · BullMQ",
      "Python",
      "Flask",
      "Meta Graph API",
      "Meta Marketing API",
      "Railway",
      "Render",
    ],
    access: {
      pt: "Sistema interno do Grupo Shoulder. Consigo percorrer a arquitetura, a documentação da migração e o comportamento das telas numa conversa.",
      en: "Internal Grupo Shoulder system. I can walk through the architecture, the migration documentation and the screens' behavior in a conversation.",
    },
  },
];

/** Projeto complementar. Não é estudo de caso, e o site não finge que é. */
export const SIDE_PROJECT = {
  name: "VM Pinheiros",
  year: "2026",
  title: {
    pt: "Visual Merchandising orientado a dados",
    en: "Data-driven visual merchandising",
  } as Bi,
  status: { pt: "Em uso · loja Oriba Pinheiros", en: "In use · Oriba Pinheiros store" } as Bi,
  summary: {
    pt: "Pega a planilha mensal de bipagem e devolve um dashboard num único arquivo HTML, sem servidor, com mapa da loja, ranking de posições e alerta do que precisa girar. A diretoria abre o arquivo e funciona, offline.",
    en: "Takes the monthly scanning spreadsheet and returns a dashboard in a single HTML file, no server, with a store map, position ranking and alerts for what needs to move. Leadership opens the file and it works, offline.",
  } as Bi,
  why: {
    pt: "Está aqui como contraponto. Nem todo problema pede plataforma, e este pedia um arquivo que roda sem infra, sem login e sem depender de ninguém.",
    en: "It is here as a counterpoint. Not every problem calls for a platform, and this one called for a file that runs with no infra, no login and no dependency on anyone.",
  } as Bi,
  stack: ["Python", "Pandas", "openpyxl", "HTML", "Chart.js"],
};

export function getCase(slug: string) {
  return CASES.find((item) => item.slug === slug);
}

export function caseNeighbours(slug: string) {
  const i = CASES.findIndex((item) => item.slug === slug);
  return {
    prev: i > 0 ? CASES[i - 1] : null,
    next: i >= 0 && i < CASES.length - 1 ? CASES[i + 1] : null,
  };
}

export type { Lang };
