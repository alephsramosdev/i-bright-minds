export const WHATSAPP_NUMBER = '5511978139316';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da BM Bright Minds Accelerator.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Contato', href: '/contato' },
] as const;

export const SERVICES = [
  {
    id: 'gestao-pessoas',
    title: 'Gestão de Pessoas e Estrutura Organizacional',
    description:
      'Organizamos equipes, papéis e rotinas para aumentar produtividade, reduzir riscos e melhorar a performance.',
    icon: 'UsersThree' as const,
  },
  {
    id: 'processos',
    title: 'Processos e Eficiência Operacional',
    description:
      'Mapeamento, padronização e otimização dos processos para ganho de escala, redução de erros e aumento de eficiência.',
    icon: 'GearSix' as const,
  },
  {
    id: 'marketing-vendas',
    title: 'Estratégia de Marketing e Vendas',
    description:
      'Estruturação do posicionamento, geração de demanda e organização do processo comercial para crescimento previsível.',
    icon: 'Megaphone' as const,
  },
  {
    id: 'metas-kpis',
    title: 'Definição de Metas e Indicadores (KPIs)',
    description:
      'Criação de métricas claras para acompanhamento e tomada de decisão.',
    icon: 'Target' as const,
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento Executivo Mensal',
    description:
      'Suporte contínuo para garantir execução, ajustes e evolução do negócio.',
    icon: 'CalendarCheck' as const,
  },
] as const;

export const PILLARS = [
  {
    id: 'estrutura',
    title: 'Estrutura',
    subtitle: 'Financeira',
    description:
      'A base que sustenta o crescimento. Sem estrutura financeira organizada, nenhuma expansão se sustenta no longo prazo.',
  },
  {
    id: 'eficiencia',
    title: 'Eficiência',
    subtitle: 'Tributária',
    description:
      'Cada real economizado em tributos é um real reinvestido no crescimento do seu negócio. Otimizamos com inteligência e dentro da lei.',
  },
  {
    id: 'governanca',
    title: 'Governança',
    subtitle: 'Corporativa',
    description:
      'Processos claros, controles eficientes e total transparência. A governança que atrai investidores e impulsiona a credibilidade.',
  },
] as const;

export const METRICS = [
  { value: 150, suffix: '+', label: 'Empresas Estruturadas' },
  { value: 98, suffix: '%', label: 'Satisfação dos Clientes' },
  { value: 12, suffix: '+', label: 'Anos de Experiência' },
  { value: 40, suffix: 'M+', label: 'Em Economia Tributária Gerada' },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rafael Menezes',
    role: 'CEO, Grupo Apex',
    text: 'A Bright Minds reorganizou toda nossa estrutura financeira em três meses. Hoje temos clareza total sobre nossos números e a confiança para tomar decisões de expansão.',
  },
  {
    id: 2,
    name: 'Camila Ferreira',
    role: 'Diretora Financeira, TechVida',
    text: 'O planejamento tributário que implementaram economizou mais de R$ 2 milhões no primeiro ano. A expertise da equipe é impressionante.',
  },
  {
    id: 3,
    name: 'André Oliveira',
    role: 'Fundador, StartUp Flow',
    text: 'Precisávamos de governança corporativa real para atrair investidores. A BM nos guiou nesse processo com método e clareza que nunca tínhamos visto.',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Qual a diferença entre a BM e uma contabilidade tradicional?',
    answer:
      'A BM vai além da contabilidade operacional. Atuamos na estratégia financeira, no planejamento tributário inteligente e na implementação de governança corporativa. Nosso foco é usar os números como instrumento de decisão, não apenas como obrigação fiscal.',
  },
  {
    question: 'Para quais empresas a BM é indicada?',
    answer:
      'Atendemos empresas em crescimento que precisam profissionalizar sua gestão financeira — desde startups que buscam rodadas de investimento até empresas consolidadas que querem otimizar sua estrutura tributária e implementar governança.',
  },
  {
    question: 'Como funciona o processo de consultoria?',
    answer:
      'Iniciamos com um diagnóstico completo da situação financeira, tributária e de governança da empresa. A partir desse mapeamento, desenhamos um plano de ação personalizado com metas claras e prazos definidos.',
  },
  {
    question: 'Em quanto tempo vejo resultados?',
    answer:
      'Os primeiros resultados em eficiência tributária costumam aparecer nos primeiros 60 a 90 dias. A estruturação financeira completa e a implementação de governança seguem um cronograma de 3 a 6 meses, dependendo da complexidade da operação.',
  },
] as const;
