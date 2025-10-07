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
      question: 'Como {company} pode reduzir o desperdício de energia em escritórios?',
      options: [
        'Deixar todos os equipamentos ligados',
        'Usar lâmpadas incandescentes',
        'Implementar automação e LEDs',
        'Aumentar o ar condicionado'
      ],
      correctAnswer: 2,
      explanation: 'Automação inteligente e lâmpadas LED reduzem significativamente o consumo de energia.',
      wrongExplanations: [
        'Equipamentos ligados desperdiçam energia',
        'Lâmpadas incandescentes consomem mais energia',
        'Ar condicionado excessivo aumenta o consumo'
      ]
    },
    {
      id: 'tech-3',
      question: 'Qual estratégia de desenvolvimento sustentável {company} deve adotar?',
      options: [
        'Código otimizado e cloud computing verde',
        'Servidores próprios sem otimização',
        'Ignorar eficiência energética',
        'Usar apenas hardware antigo'
      ],
      correctAnswer: 0,
      explanation: 'Código otimizado reduz uso de recursos e cloud verde usa energia renovável.',
      wrongExplanations: [
        'Servidores próprios podem ser menos eficientes',
        'Eficiência energética é fundamental',
        'Hardware antigo consome mais energia'
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
      question: 'Como {company} pode tornar suas escolas mais sustentáveis?',
      options: [
        'Usar apenas papel sem reciclagem',
        'Implementar energia solar e coleta seletiva',
        'Aumentar o uso de recursos descartáveis',
        'Ignorar educação ambiental'
      ],
      correctAnswer: 1,
      explanation: 'Energia solar reduz custos e impacto ambiental, coleta seletiva ensina sustentabilidade.',
      wrongExplanations: [
        'Papel sem reciclagem desperdiça recursos naturais',
        'Descartáveis geram mais lixo',
        'Educação ambiental é fundamental para formar cidadãos conscientes'
      ]
    },
    {
      id: 'school-2',
      question: 'Qual programa educacional sustentável {company} deve implementar?',
      options: [
        'Ignorar temas ambientais',
        'Hortas escolares e reciclagem criativa',
        'Usar apenas livros impressos',
        'Descartar materiais sempre'
      ],
      correctAnswer: 1,
      explanation: 'Hortas ensinam sobre natureza e reciclagem desenvolve criatividade sustentável.',
      wrongExplanations: [
        'Temas ambientais são essenciais na educação moderna',
        'Materiais digitais podem complementar impressos',
        'Descarte desnecessário ensina maus hábitos'
      ]
    },
    {
      id: 'school-3',
      question: 'Como {company} pode reduzir o consumo de energia nas escolas?',
      options: [
        'Deixar luzes acesas sempre',
        'Sensores de movimento e iluminação natural',
        'Usar equipamentos antigos',
        'Aumentar o ar condicionado'
      ],
      correctAnswer: 1,
      explanation: 'Sensores economizam energia e iluminação natural reduz custos e melhora bem-estar.',
      wrongExplanations: [
        'Luzes acesas desnecessariamente desperdiçam energia',
        'Equipamentos antigos consomem mais energia',
        'Ar condicionado excessivo aumenta consumo energético'
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