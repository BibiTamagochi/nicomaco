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
      question: 'Seu restaurante começa a enfrentar críticas por desperdício excessivo, especialmente de alimentos que sobram no fim do dia. O chef propõe usar essas sobras para criar um "prato do dia sustentável", com comunicação sobre reaproveitamento. O setor de qualidade alerta para riscos sanitários e defende um cardápio fixo mais enxuto, com controle de porções. Já o financeiro sugere firmar parcerias com ONGs para doação do excedente. Qual caminho você escolhe?',
      options: [
        'Apoiar a criação de um "prato sustentável" com sobras, comunicando a ação aos clientes.',
        'Reduzir o cardápio e controlar melhor a produção para minimizar sobras.',
        'Estabelecer parcerias com ONGs e doar alimentos excedentes regularmente.'
      ],
      correctAnswer: 1,
      explanation: 'Essa medida atua na causa do problema, reduzindo desperdício desde a origem. É uma ação preventiva, que melhora a eficiência operacional e reduz custos.',
      wrongExplanations: [
        'Já reutilizar sobras em pratos pode comprometer a segurança alimentar e a imagem do restaurante, mesmo com boa comunicação.',
        'A doação (ONGs) é importante, mas lida com o sintoma, não com a causa, e exige cuidados legais e logísticos.'
      ]
    },
    {
      id: 'rest-2',
      question: 'A conta de energia elétrica do restaurante subiu 25% nos últimos seis meses. O setor de operações sugere trocar todo o sistema de iluminação e climatização por modelos de alta eficiência. O financeiro recomenda adotar um sistema inteligente de monitoramento do consumo, para entender onde estão os maiores desperdícios. Já o RH propõe campanhas internas para conscientizar a equipe sobre o uso responsável da energia. Qual estratégia adotar?',
      options: [
        'Iniciar campanhas internas para engajar a equipe e mudar comportamentos.',
        'Trocar equipamentos por modelos mais eficientes, começando pelos maiores consumidores.',
        'Implantar sistema de monitoramento inteligente para mapear os principais pontos de consumo.'
      ],
      correctAnswer: 2,
      explanation: 'Sem entender onde está o maior consumo, qualquer mudança corre o risco de ser mal direcionada. Por isso, o monitoramento gera dados concretos para decisões mais eficazes.',
      wrongExplanations: [
        'Campanhas de conscientização têm impacto limitado sem mudanças estruturais ou dados que mostrem onde agir.',
        'Trocar equipamentos pode ser bom, mas sem diagnóstico pode gerar investimentos mal planejados.'
      ]
    },
    {
      id: 'rest-3',
      question: 'O delivery do restaurante disparou, mas o uso de embalagens plásticas gerou críticas de clientes nas redes. O marketing quer substituir por embalagens biodegradáveis personalizadas com a marca. O financeiro alerta que isso aumentaria os custos em 20%. O gerente de operações propõe oferecer a opção de embalagem ecológica com uma taxa extra para o cliente. Qual abordagem é mais sustentável e viável?',
      options: [
        'Mudar totalmente para embalagens sustentáveis, reforçando o valor da marca.',
        'Oferecer a opção de embalagem ecológica por um valor adicional.',
        'Manter as embalagens atuais e compensar com outras ações de sustentabilidade.'
      ],
      correctAnswer: 1,
      explanation: 'Essa alternativa equilibra sustentabilidade com viabilidade financeira, permitindo que clientes mais conscientes escolham pagar pela embalagem verde. A opção certa permite testar a aceitação do cliente antes de uma transição completa.',
      wrongExplanations: [
        'Mudar 100% ignora o impacto financeiro, porque não leva em conta o aumento de custos em 20%, e a viabilidade prática da decisão ao comprometer a rentabilidade do restaurante.',
        'Ignora a causa direta das reclamações (as embalagens plásticas), além de compensar com outras ações pode parecer greenwashing, já que a principal fonte de impacto ambiental continuaria existindo.'
      ]
    },
    {
      id: 'rest-4',
      question: 'A matriz da empresa cobra redução de emissões de carbono. O setor de operações sugere frota elétrica para entregas urbanas, mas os custos e a infraestrutura ainda são limitados. O time de TI propõe usar análise de dados para prever picos de demanda e reduzir entregas ociosas. O marketing quer criar um plano de assinatura "entrega verde", com taxa extra para entregas feitas de bicicleta ou por veículos elétricos.Qual caminho você escolhe?',
      options: [
        'Implementar análise preditiva (inteligência de dados) para reduzir entregas desnecessárias.',
        'Investir em frota elétrica de forma gradual, começando por grandes centros.',
        'Lançar plano de entrega verde com adesão voluntária dos clientes.'
      ],
      correctAnswer: 0,
      explanation: 'Essa ação gera resultado imediato, com redução real de emissões e custos logísticos, sem depender de grandes investimentos ou infraestrutura.',
      wrongExplanations: [
        'A frota elétrica é desejável no longo prazo, mas é cara e exige estrutura externa (postos de recarga, manutenção especializada).',
        'O plano de entrega verde depende do engajamento dos clientes, o que pode gerar baixo impacto inicial.'
      ]
    },
    {
      id: 'rest-5',
      question: 'Seu restaurante pretende adotar práticas mais sustentáveis na gestão de resíduos. O setor de compras sugere substituir todo o material descartável por opções compostáveis, com um custo 15% maior. A equipe operacional teme aumento no tempo de separação de resíduos. Já o setor de qualidade propõe iniciar com coleta seletiva apenas em áreas de menor movimento, para testar a adaptação da equipe. Qual decisão é mais estratégica?',
      options: [
        'Substituir todos os descartáveis por compostáveis, mesmo com aumento de custo.',
        'Manter os atuais descartáveis, e investir em treinamento da equipe para separar resíduos corretamente.',
        'Iniciar com coleta seletiva parcial, testando em setores de menor impacto.'
      ],
      correctAnswer: 2,
      explanation: 'Essa abordagem permite adaptar a operação gradualmente, identificando obstáculos antes de escalar a prática. É uma forma de gerar aprendizado interno e engajamento, com menores riscos.',
      wrongExplanations: [
        'Trocar todos os descartáveis gera impacto ambiental positivo, mas pode ser financeiramente insustentável.',
        'Apenas treinar a equipe é importante, mas sem mudança estrutural nos resíduos gerados, tem efeito limitado.'
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
      question: 'O sindicato dos entregadores pressiona por aumento da taxa mínima. Se você atender, os preços sobem e parte dos clientes pode migrar para concorrentes. Um investidor sugere automatizar parte das entregas com drones, mas a regulação ainda é incerta e cara. O departamento de sustentabilidade propõe criar rotas otimizadas para reduzir combustível e aumentar ganho líquido por corrida. O que você faz?',
      options: [
        'Aceito a pressão dos entregadores, aumentando taxas e negociando comunicação com clientes.',
        'Invisto em drones em pequena escala para testar a diferenciação de mercado.',
        'Implemento otimização de rotas para reduzir custos e liberar margem para repassar aos entregadores.'
      ],
      correctAnswer: 2,
      explanation: 'A otimização de rotas reduz consumo de combustível (impacto ambiental), melhora ganhos por corrida (impacto social) e mantém preços competitivos. É a alternativa que gera sustentabilidade tripla: econômica, social e ambiental.',
      wrongExplanations: [
        'Atender a pressão dos entregadores é justo socialmente, mas sem resolver a base do problema: os custos estruturais.',
        'Investir em drones é inovador, mas ainda inviável e de alto risco regulatório.'
      ]
    },
    {
      id: 'delivery-2',
      question: 'Seus dados mostram que embalagens geram grande volume de lixo nos centros urbanos. O marketing sugere trocar por embalagens biodegradáveis, mesmo que com custo 15% maior. O financeiro propõe um sistema de "embalagem retornável" via parceiros locais, mas alerta para risco logístico. A equipe de ESG propõe lançar um programa educativo com os restaurantes, estimulando embalagens próprias e recompensas para consumidores conscientes. O que fazer?',
      options: [
        'Adotar embalagens biodegradáveis, mesmo com custo mais alto.',
        'Criar o sistema de embalagem retornável em parceria com estabelecimentos.',
        'Iniciar programa de educação com restaurantes e consumidores, promovendo mudança de comportamento.'
      ],
      correctAnswer: 2,
      explanation: 'Promove transformação cultural, engajamento e posiciona a empresa como agente de mudança, com menor risco inicial e potencial de impacto sistêmico.',
      wrongExplanations: [
        'A troca direta por embalagens biodegradáveis é positiva, mas não resolve o hábito de descarte nem engaja os atores.',
        'A logística reversa é complexa, cara e exige maturidade operacional.'
      ]
    },
    {
      id: 'delivery-3',
      question: 'Em auditoria interna, você descobre que 30% dos entregadores estão trabalhando mais de 12 horas por dia para bater metas. O jurídico alerta que isso pode gerar passivos trabalhistas. O RH propõe limitar metas diárias e criar um fundo de saúde ocupacional, mas o financeiro prevê queda de produtividade. O marketing sugere incluir um "selo de respeito ao trabalhador" nas comunicações da empresa. O que fazer?',
      options: [
        'Reduzir metas e criar fundo de saúde, mesmo com menor produtividade inicial.',
        'Adotar o selo de respeito ao trabalhador como forma de valorizar a imagem.',
        'Criar um modelo flexível de metas que se ajuste por região e perfil dos entregadores.'
      ],
      correctAnswer: 0,
      explanation: 'Ataca o problema diretamente, melhora o bem-estar dos entregadores e reduz risco jurídico, além de fortalecer a reputação a longo prazo.',
      wrongExplanations: [
        'O selo sem mudança real pode ser percebido como green/social washing.',
        'O modelo flexível é interessante, mas difícil de padronizar e monitorar.'
      ]
    },
    {
      id: 'delivery-4',
      question: 'A matriz da empresa cobra redução de emissões de carbono. O setor de operações sugere frota elétrica para entregas urbanas, mas os custos e a infraestrutura ainda são limitados. O time de TI propõe usar análise de dados para prever picos de demanda e reduzir entregas ociosas. O marketing quer criar um plano de assinatura "entrega verde", com taxa extra para entregas feitas de bicicleta ou por veículos elétricos. Qual caminho você escolhe?',
      options: [
        'Investir em frota elétrica de forma gradual, começando por grandes centros.',
        'Implementar análise preditiva (inteligência de dados) para reduzir entregas desnecessárias.',
        'Lançar plano de entrega verde com adesão voluntária dos clientes.'
      ],
      correctAnswer: 1,
      explanation: 'Reduz ociosidade, otimiza rotas, diminui emissões e custos — resultado concreto no curto prazo, com ganho ambiental e econômico.',
      wrongExplanations: [
        'A frota elétrica é o ideal de longo prazo, mas exige alto investimento e depende de infraestrutura.',
        'O plano verde depende do engajamento do cliente, e tem impacto limitado.'
      ]
    },
    {
      id: 'delivery-5',
      question: 'Uma crise de imagem ocorre após denúncia de entregadores adoecendo por exposição ao calor extremo. A opinião pública pressiona. O jurídico alerta para risco de ação coletiva. O RH propõe criar pontos de apoio com água, sombra e descanso. O financeiro alerta para custos altos e impacto em prazo de entregas. Já o setor de inovação sugere desenvolver mochilas térmicas inteligentes com sensores de temperatura para alertar sobre risco à saúde. Qual medida adotar?',
      options: [
        'Criar pontos de apoio com infraestrutura básica nas principais rotas.',
        'Investir em mochilas inteligentes com sensores de temperatura.',
        'Ampliar o seguro saúde e emitir nota pública de compromisso com segurança climática.'
      ],
      correctAnswer: 0,
      explanation: 'Prática, visível e atende diretamente à saúde dos entregadores. Gera impacto social claro e melhora a reputação da empresa junto à opinião pública e aos próprios entregadores.',
      wrongExplanations: [
        'As mochilas são inovadoras, mas caras e não resolvem o desconforto imediato.',
        'O seguro saúde é reativo e pode parecer insuficiente frente ao problema climático.'
      ]
    }
  ],

  'clothing-industry': [
    {
      id: 'clothing-1',
      question: 'Você descobre que sua linha de jeans está consumindo um enorme volume de água na produção. Uma consultoria sugere tecnologia de lavagem a seco que corta 60% do gasto, mas exige máquinas caras importadas. O time financeiro alerta que o investimento pode atrasar a expansão da marca. Já o marketing vê oportunidade de usar tecidos sintéticos reciclados, mais baratos, mas com risco de crítica por microplásticos. O que você decide?',
      options: [
        'Invisto na tecnologia de lavagem a seco, mesmo com impacto financeiro imediato.',
        'Troco parte da coleção para tecidos reciclados, apostando em narrativa de circularidade.',
        'Lanço uma campanha de compensação hídrica, financiando projetos ambientais externos.'
      ],
      correctAnswer: 2,
      explanation: 'A compensação hídrica não resolve 100% o problema, mas garante ação imediata, mensurável e comunicável, enquanto a empresa se prepara para tecnologias de longo prazo. É o caminho mais equilibrado entre viabilidade, reputação e impacto real.',
      wrongExplanations: [
        'A tecnologia de lavagem a seco é ótima, mas inviável no curto prazo para a empresa (financeiro trava).',
        'O tecido reciclado pode parecer sustentável, mas tem riscos de impacto ambiental (microplásticos) e pode gerar críticas de greenwashing.'
      ]
    },
    {
      id: 'clothing-2',
      question: 'A empresa descobre que os resíduos têxteis da produção são altos. O RH sugere criar oficinas locais de upcycling (processo de reaproveitar materiais descartados para criar algo novo de maior valor ou qualidade, sem passar pelo processo industrial de reciclagem tradicional). O financeiro sugere vender os resíduos como matéria-prima para terceiros. O marketing propõe lançar uma campanha mostrando que parte dos resíduos será incinerada para gerar energia. Qual decisão tomar?',
      options: [
        'Criar oficinas de upcycling com comunidades locais.',
        'Vender os resíduos como matéria-prima para terceiros.',
        'Campanha de incineração energética dos resíduos.'
      ],
      correctAnswer: 0,
      explanation: 'As oficinas de upcycling conectam sustentabilidade e impacto social, fortalecendo a reputação e criando valor a longo prazo, mesmo que mais trabalhoso na gestão.',
      wrongExplanations: [
        'A venda dos resíduos resolve rápido, mas não gera diferencial competitivo.',
        'A incineração pode ser vista como poluente e arranhar a imagem da marca.'
      ]
    },
    {
      id: 'clothing-3',
      question: 'Sua marca está crescendo e você considera expandir a produção para um país com legislação ambiental mais flexível e mão de obra mais barata. O time de operações vê nisso uma chance de aumentar a margem de lucro. O jurídico alerta para o risco de reputação e possíveis pressões futuras de ONGs. Já o setor de inovação sugere abrir um polo fabril menor em uma região brasileira com incentivos fiscais e mão de obra local qualificada, porém com custo inicial maior. O que fazer?',
      options: [
        'Expandir para o país com legislação mais flexível e reduzir custos.',
        'Abrir o polo no Brasil com foco em inovação e responsabilidade social.',
        'Manter a produção atual e terceirizar parte da demanda em fornecedores estrangeiros.'
      ],
      correctAnswer: 1,
      explanation: 'Representa um investimento mais alto no curto prazo, mas fortalece a marca como comprometida com o desenvolvimento local e boas práticas ESG, além de estar alinhada com políticas públicas e incentivos.',
      wrongExplanations: [
        'Pode trazer ganhos financeiros imediatos, mas expõe a empresa a riscos reputacionais sérios, principalmente em um setor historicamente cobrado por práticas trabalhistas e ambientais.',
        'Pode parecer um meio-termo, mas dilui o controle sobre a cadeia produtiva e aumenta o risco de más práticas.'
      ]
    },
    {
      id: 'clothing-4',
      question: 'Uma auditoria externa aponta que parte dos fornecedores de algodão da sua cadeia produtiva utiliza práticas que contribuem para o desmatamento e uso excessivo de pesticidas. O setor de compras alerta que mudar de fornecedor elevará os custos em 20%. Já a equipe de sustentabilidade sugere adotar certificações como o algodão orgânico ou regenerativo, mesmo que isso exija ajuste de preços no produto final. O marketing teme queda nas vendas por aumento de preço. O que fazer?',
      options: [
        'Negociar com os fornecedores atuais para reduzir impactos, sem trocar de fonte.',
        'Implementar um plano de transição para fornecedores certificados e comunicar ao consumidor.',
        'Ignorar o alerta da auditoria, mantendo o custo baixo e o preço competitivo.'
      ],
      correctAnswer: 1,
      explanation: 'Exige ajustes de preço, mas agrega valor à marca e atrai um público cada vez mais consciente, além de alinhar a cadeia produtiva com metas de sustentabilidade rastreáveis.',
      wrongExplanations: [
        'Apenas negociar sem mudança real pode gerar escândalos futuros e minar a confiança do consumidor.',
        'Assim como apenas negociar, ignorar o alerta sem mudança real também pode gerar escândalos futuros e minar a confiança do consumidor.'
      ]
    },
    {
      id: 'clothing-5',
      question: 'Seu e-commerce cresceu muito, mas o aumento das devoluções (logística reversa) elevou a emissão de carbono no transporte. O setor de TI propõe usar inteligência artificial para sugerir tamanhos com mais precisão, reduzindo devoluções. O financeiro sugere cobrar frete de devolução, para desestimular trocas. Já o marketing quer manter frete grátis e criar um selo de "frete neutro" com compensação de carbono. Qual caminho seguir?',
      options: [
        'Cobrar pelo frete de devolução para reduzir volume de trocas.',
        'Manter frete grátis e compensar carbono via selo "frete neutro".',
        'Investir em tecnologia de IA para reduzir erros de compra.'
      ],
      correctAnswer: 2,
      explanation: 'Atua na raiz do problema, reduzindo desperdício, custos logísticos e impacto ambiental, além de melhorar a experiência do consumidor de forma inteligente e sustentável.',
      wrongExplanations: [
        'Cobrar a devolução pode gerar insatisfação e queda na conversão de vendas.',
        'A compensação de carbono é válida, mas trata apenas o sintoma, não a causa.'
      ]
    }
  ]
};