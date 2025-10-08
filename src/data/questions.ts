import { Question, CompanyType } from '../types/game';

export const questionsByCompany: Record<CompanyType, Question[]> = {
  'startup-tech': [
    {
      id: 'tech-1',
      question: 'Sua empresa precisa renovar servidores. A equipe de TI defende migrar para um data center internacional famoso por eficiência energética, mas isso aumentaria a pegada de transporte de dados. Outro grupo sugere contratar uma empresa local, menos eficiente em energia, mas que gera empregos na região. Uma terceira alternativa é migrar parcialmente para nuvem pública, reduzindo hardware próprio, mas aumentando a dependência de gigantes de tecnologia.',
      options: [
        'Contratar o data center internacional mais eficiente, reduzindo emissões diretas.',
        'Optar pelo data center local, fortalecendo economia regional.',
        'Adotar nuvem pública em parte dos processos, equilibrando impacto ambiental e social.'
      ],
      correctAnswer: 2,
      explanation: 'A nuvem pública (parcial) reduz necessidade de hardware físico (menos lixo eletrônico, menos gasto energético) e mantém flexibilidade de gestão. É a opção que equilibra inovação, impacto ambiental e efeitos sociais indiretos.',
      wrongExplanations: [
        'O data center internacional reduz emissões, mas aumenta dependência externa e enfraquece impacto social local.',
        'O data center local fortalece empregos, mas aumenta emissões e reduz eficiência.'
      ]
    },
    {
      id: 'tech-2',
      question: 'Sua startup está crescendo e precisa contratar mais pessoas para o time de desenvolvimento. O RH sugere manter o processo 100% técnico para garantir velocidade. O setor de ESG propõe incluir metas de diversidade no processo seletivo, mesmo que o tempo de contratação aumente. Um investidor alerta que abrir cotas ou metas pode parecer "pouco meritocrático" e gerar conflitos internos. O que você decide?',
      options: [
        'Manter foco técnico para acelerar contratações.',
        'Incluir metas de diversidade no processo, mesmo com mais tempo.',
        'Fazer seleção neutra, mas divulgar que diversidade é um valor da empresa.'
      ],
      correctAnswer: 1,
      explanation: 'Incluir metas promove inovação, justiça social e fortalece a cultura organizacional, mesmo que o processo seja um pouco mais demorado.',
      wrongExplanations: [
        'Foco só técnico mantém viés inconsciente e perpetua desigualdades.',
        'Só divulgar valores sem ação prática gera risco de diversity-washing.'
      ]
    },
    {
      id: 'tech-3',
      question: 'Sua plataforma coleta muitos dados dos usuários para melhorar a experiência. O time de produto quer expandir essa coleta para personalizar anúncios. O jurídico alerta que isso pode causar conflito com novas leis de proteção de dados. Já o time de governança propõe implementar política de consentimento granular (escolha detalhada dos dados que permite a empresa coletar), mesmo que isso reduza a taxa de conversão inicial. O que você decide?',
      options: [
        'Expandir a coleta de dados para gerar mais receita publicitária',
        'Criar política de consentimento granular, priorizando transparência',
        'Manter a coleta atual e esperar a regulamentação apertar para agir'
      ],
      correctAnswer: 1,
      explanation: 'Adotar consentimento granular reduz risco legal, reforça a confiança do usuário e fortalece a imagem ética da empresa, sendo a solução mais alinhada ao ESG na área de tecnologia.',
      wrongExplanations: [
        'Expandir coleta pode gerar problemas legais e reputacionais com os usuários',
        'Esperar a lei apertar é reativo e coloca a empresa em risco'
      ]
    },
    {
      id: 'tech-4',
      question: 'Após uma rodada de investimento, sua startup planeja trocar todo o parque de computadores e equipamentos. A equipe técnica quer comprar os modelos mais modernos. O financeiro propõe vender os antigos para empresas menores. Já o time de sustentabilidade sugere firmar parceria com cooperativas de reciclagem e doar parte dos equipamentos para escolas públicas. O que fazer?',
      options: [
        'Comprar novos e vender os antigos para recuperar parte do investimento',
        'Doar os equipamentos antigos para escolas e reciclar o que for inviável',
        'Atualizar só parte dos equipamentos e usar o restante até o fim da vida útil'
      ],
      correctAnswer: 1,
      explanation: 'Doar gera impacto social direto, reduz lixo eletrônico e fortalece a marca da empresa como inovadora e socialmente responsável, além de cumprir com princípios de economia circular.',
      wrongExplanations: [
        'Vender recupera parte do valor, mas não garante destino ambientalmente correto dos resíduos',
        'Adiar troca economiza, mas pode impactar produtividade e inovação'
      ]
    },
    {
      id: 'tech-5',
      question: 'Sua startup de mobilidade urbana cresceu com um modelo baseado em entregadores autônomos, mas começa a receber críticas por precarização do trabalho. O time jurídico diz que o modelo é legal. O RH propõe criar um fundo interno de apoio para entregadores com acidentes e emergências. Já o time de ESG defende reformular o modelo, oferecendo vínculos opcionais e programas de capacitação. O que você decide?',
      options: [
        'Manter o modelo atual, já que é legal e competitivo',
        'Criar fundo emergencial de apoio aos entregadores',
        'Reformular o modelo e oferecer vínculo opcional com capacitação'
      ],
      correctAnswer: 2,
      explanation: 'Reformular alinha propósito, reduz riscos reputacionais e legais, melhora retenção dos entregadores e reforça compromisso com trabalho digno, sendo uma resposta madura e sustentável a um problema estrutural.',
      wrongExplanations: [
        'Manter o modelo evita custos, mas ignora o impacto social negativo e compromete a reputação',
        'Criar fundo é um paliativo, ajuda pontualmente, mas não resolve a estrutura precária'
      ]
    }
  ],

  'restaurant': [
    {
      id: 'rest-1',
      question: 'Como {company} pode reduzir o desperdício de alimentos?',
      options: [
        'Preparar grandes quantidades sempre',
        'Implementar controle de porções e doações',
        'Jogar sobras no lixo comum',
        'Ignorar a validade dos produtos'
      ],
      correctAnswer: 1,
      explanation: 'Controle de porções evita desperdício e doações ajudam comunidades necessitadas.',
      wrongExplanations: [
        'Grandes quantidades levam ao desperdício',
        'Lixo comum polui o meio ambiente',
        'Produtos vencidos são desperdício e risco à saúde'
      ]
    },
    {
      id: 'rest-2',
      question: 'Qual a melhor prática sustentável para embalagens do {company}?',
      options: [
        'Usar apenas plástico descartável',
        'Embalagens biodegradáveis e reutilizáveis',
        'Aumentar o uso de isopor',
        'Ignorar o tipo de embalagem'
      ],
      correctAnswer: 1,
      explanation: 'Embalagens biodegradáveis se decompõem naturalmente e reutilizáveis reduzem lixo.',
      wrongExplanations: [
        'Plástico descartável polui o ambiente',
        'Isopor demora centenas de anos para se decompor',
        'Embalagens inadequadas prejudicam o meio ambiente'
      ]
    },
    {
      id: 'rest-3',
      question: 'Como {company} pode ser mais eficiente no uso da água?',
      options: [
        'Deixar torneiras abertas',
        'Sistemas de reuso e torneiras automáticas',
        'Usar mangueiras sempre',
        'Ignorar vazamentos'
      ],
      correctAnswer: 1,
      explanation: 'Sistemas de reuso aproveitam água e torneiras automáticas evitam desperdício.',
      wrongExplanations: [
        'Torneiras abertas desperdiçam água',
        'Mangueiras gastam muita água',
        'Vazamentos causam desperdício contínuo'
      ]
    }
  ],

  'school-network': [
    {
      id: 'school-1',
      question: 'Sua rede cresceu e agora há unidades em bairros de renda muito diferente. O conselho sugere padronizar a estrutura de custos para simplificar a gestão. Uma proposta alternativa é criar subsídios cruzados: mensalidades mais altas em áreas ricas para financiar bolsas nas áreas vulneráveis. Já outra parte do time defende buscar patrocínios privados para manter o mesmo preço em todas as unidades. O que você decide?',
      options: [
        'Padronizo custos, garantindo previsibilidade e controle financeiro.',
        'Busco patrocínios externos para manter preços, reduzindo risco de atrito entre famílias.',
        'Implemento subsídio cruzado entre unidades, criando impacto social direto.'
      ],
      correctAnswer: 2,
      explanation: 'Exemplo claro de ESG aplicado ao setor educacional, integrando justiça social à estratégia organizacional ao equilibrar a viabilidade econômica, justiça social e reputação institucional.',
      wrongExplanations: [
        'Embora traga eficiência de gestão, desconsidera a realidade socioeconômica local de cada unidade, não sendo sustentável a longo prazo.',
        'Foca apenas em uma solução instável e dependente de terceiros.'
      ]
    },
    {
      id: 'school-2',
      question: 'Sua rede pretende implantar hortas pedagógicas em todas as unidades. Em bairros mais estruturados, a comunidade se mobilizou rapidamente. Já em regiões vulneráveis, as escolas não têm espaço adequado ou apoio das famílias. O time pedagógico sugere adaptar o projeto para ser 100% virtual nas unidades com restrição. O setor de ESG propõe uma parceria com hortas comunitárias próximas, mesmo com mais esforço logístico. O financeiro propõe suspender o projeto nas unidades com dificuldade. O que você decide?',
      options: [
        'Parceria com hortas comunitárias para garantir equidade na experiência.',
        'Adoto a versão virtual do projeto nas unidades sem espaço físico.',
        'Mantenho apenas onde for viável, para reduzir custos e esforços.'
      ],
      correctAnswer: 0,
      explanation: 'A parceria garante inclusão, engajamento com o território e impacto ambiental e social real, ainda que com mais esforço. Uma solução que fortalece vínculos com a comunidade local e o propósito educacional.',
      wrongExplanations: [
        'Virtualizar pode ser interessante, mas reduz o contato com a natureza, objetivo central do projeto.',
        'Suspender cria desigualdade de acesso a experiências pedagógicas.'
      ]
    },
    {
      id: 'school-3',
      question: 'A rede quer adotar um novo sistema de ensino digital, com plataformas adaptativas e inteligência artificial. Escolas de áreas centrais têm bom acesso à internet e equipamentos. Já as unidades em bairros vulneráveis não têm estrutura suficiente. O time de TI sugere liberar a ferramenta apenas nas unidades mais preparadas. O pedagógico propõe buscar financiamento público para viabilizar a implantação em todas. Já o marketing quer lançar a novidade como diferencial da rede. O que você decide?',
      options: [
        'Implanto apenas onde há estrutura, para começar a colher resultados.',
        'Busco financiamento para garantir equidade de acesso.',
        'Lanço o marketing da inovação, mesmo com implantação parcial.'
      ],
      correctAnswer: 1,
      explanation: 'Buscar financiamento, mesmo que leve mais tempo, garante acesso igualitário à inovação, alinhado à missão educacional e à responsabilidade social da rede.',
      wrongExplanations: [
        'Implantar apenas onde há estrutura aprofunda desigualdades educacionais.',
        'Usar o marketing antes da implantação completa pode gerar críticas de greenwashing digital.'
      ]
    },
    {
      id: 'school-4',
      question: 'Uma pesquisa revela que alunos de bairros periféricos da rede têm desempenho inferior nas avaliações nacionais. A equipe pedagógica sugere reforço escolar com tutoria presencial. O setor de impacto social propõe formar ex-alunos da própria comunidade para serem tutores, promovendo inclusão e referência positiva. Já o financeiro alerta que essa abordagem pode ser mais cara e difícil de escalar. O que fazer?',
      options: [
        'Contrato tutores externos já capacitados para iniciar logo.',
        'Invisto em plataformas online de reforço com inteligência artificial.',
        'Formo ex-alunos como tutores, valorizando a comunidade local.'
      ],
      correctAnswer: 2,
      explanation: 'Formar ex-alunos fortalece o pertencimento, cria modelos positivos, gera renda local e reforça o ciclo de impacto social. É mais desafiador, mas muito mais transformador e sustentável.',
      wrongExplanations: [
        'Tutores externos resolvem rápido, mas não criam vínculo com a comunidade, e aumentam a rotatividade.',
        'Plataformas digitais podem apoiar, mas não substituem o acompanhamento humano necessário em contextos mais vulneráveis.'
      ]
    },
    {
      id: 'school-5',
      question: 'Uma das escolas da rede, em área periférica, foi alvo de críticas por falta de acessibilidade e inclusão de alunos com deficiência. A diretoria local pede mais tempo para adaptação. O setor jurídico alerta para risco de penalização. A equipe de inclusão propõe investir já em formação de educadores, contratação de mediadores e revisão da estrutura. O financeiro sugere priorizar essa escola apenas no próximo ciclo orçamentário. O que você decide?',
      options: [
        'Investir imediatamente em acessibilidade e inclusão.',
        'Priorizar no próximo ciclo, ajustando conforme o orçamento.',
        'Divulgar um plano de médio prazo e treinar os educadores apenas por enquanto.'
      ],
      correctAnswer: 0,
      explanation: 'Investir de forma imediata mostra compromisso ético, legal e institucional com a equidade. Mesmo com impacto financeiro, é uma decisão que reforça a missão da rede e evita consequências maiores no futuro.',
      wrongExplanations: [
        'Adiar compromete direitos fundamentais dos alunos e põe a rede em risco legal e reputacional.',
        'Fazer só um plano sem ação concreta pode parecer insensível ou reativo diante da denúncia.'
      ]
    }
  ],

  'delivery': [
    {
      id: 'delivery-1',
      question: 'Como {company} pode tornar suas entregas mais sustentáveis?',
      options: [
        'Usar apenas veículos a combustão',
        'Bicicletas elétricas e otimização de rotas',
        'Fazer entregas individuais sempre',
        'Ignorar emissões de carbono'
      ],
      correctAnswer: 1,
      explanation: 'Bicicletas elétricas não poluem e rotas otimizadas reduzem distâncias e emissões.',
      wrongExplanations: [
        'Veículos a combustão poluem o ar',
        'Entregas individuais aumentam emissões',
        'Emissões de carbono contribuem para mudanças climáticas'
      ]
    },
    {
      id: 'delivery-2',
      question: 'Qual estratégia de embalagem {company} deve adotar?',
      options: [
        'Usar muitas embalagens plásticas',
        'Embalagens mínimas e eco-friendly',
        'Ignorar proteção dos produtos',
        'Usar apenas isopor'
      ],
      correctAnswer: 1,
      explanation: 'Embalagens mínimas reduzem lixo e materiais eco-friendly se decompõem naturalmente.',
      wrongExplanations: [
        'Excesso de plástico polui o ambiente',
        'Produtos precisam de proteção adequada',
        'Isopor é altamente poluente'
      ]
    },
    {
      id: 'delivery-3',
      question: 'Como {company} pode compensar sua pegada de carbono?',
      options: [
        'Ignorar impacto ambiental',
        'Plantio de árvores e energia renovável',
        'Aumentar uso de combustível',
        'Usar apenas veículos grandes'
      ],
      correctAnswer: 1,
      explanation: 'Árvores absorvem CO2 e energia renovável reduz emissões na operação.',
      wrongExplanations: [
        'Impacto ambiental deve ser considerado',
        'Combustível aumenta emissões',
        'Veículos grandes consomem mais combustível'
      ]
    }
  ],

  'clothing-industry': [
    {
      id: 'clothing-1',
      question: 'Como {company} pode produzir roupas de forma mais sustentável?',
      options: [
        'Usar apenas tecidos sintéticos',
        'Fibras orgânicas e recicladas',
        'Aumentar uso de produtos químicos',
        'Descartar tecidos sobrantes'
      ],
      correctAnswer: 1,
      explanation: 'Fibras orgânicas são cultivadas sem pesticidas e recicladas aproveitam materiais existentes.',
      wrongExplanations: [
        'Tecidos sintéticos derivam de petróleo e poluem',
        'Produtos químicos contaminam água e solo',
        'Descartar tecidos desperdiça recursos'
      ]
    },
    {
      id: 'clothing-2',
      question: 'Qual prática de produção sustentável {company} deve implementar?',
      options: [
        'Produção em massa sem controle',
        'Produção sob demanda e tingimento eco-friendly',
        'Usar muita água sem tratamento',
        'Ignorar condições de trabalho'
      ],
      correctAnswer: 1,
      explanation: 'Produção sob demanda evita desperdício e tingimento eco-friendly reduz poluição da água.',
      wrongExplanations: [
        'Produção em massa gera excesso e desperdício',
        'Água sem tratamento polui rios e oceanos',
        'Condições de trabalho fazem parte da sustentabilidade social'
      ]
    },
    {
      id: 'clothing-3',
      question: 'Como {company} pode reduzir o impacto do transporte?',
      options: [
        'Usar apenas transporte aéreo',
        'Produção local e logística eficiente',
        'Ignorar distâncias de entrega',
        'Usar muitas embalagens'
      ],
      correctAnswer: 1,
      explanation: 'Produção local reduz distâncias e logística eficiente otimiza rotas e cargas.',
      wrongExplanations: [
        'Transporte aéreo tem maior pegada de carbono',
        'Distâncias maiores aumentam emissões',
        'Embalagens excessivas geram mais lixo'
      ]
    }
  ]
};