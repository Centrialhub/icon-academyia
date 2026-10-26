// Uma fonte para condições, datas e destinos. Não inventar URLs de checkout.
export const comercial = {
  essential: { id: 'essencial', name: 'ÍCON Essencial', price: 'R$ 67,90', priceNumber: 67.90, prompts: 15, models: 4, checkoutUrl: import.meta.env.VITE_CHECKOUT_ESSENCIAL_URL || 'https://pay.cakto.com.br/358ks7b_1245354', cta: 'Quero o Essencial', label: 'PARA ESTUDAR NO SEU RITMO' },
  formation: { id: 'formacao', name: 'Formação ÍCON', price: 'R$ 197,90', priceNumber: 197.90, prompts: 60, models: 24, assistants: 5, recorded: 4, live: 4, hours: 12, checkoutUrl: import.meta.env.VITE_CHECKOUT_FORMACAO_URL || '', cta: 'Quero a formação completa', label: 'MATERIAIS + AULAS + PRÁTICA AO VIVO' },
  guaranteeDays: 7,
  recordedRelease: '03/11/2026',
  timezone: 'Horário de Brasília',
  liveTime: '20h às 21h30',
  supportUrl: import.meta.env.VITE_SUPORTE_URL || '',
  termsUrl: import.meta.env.VITE_TERMOS_URL || '',
  privacyUrl: import.meta.env.VITE_PRIVACIDADE_URL || '',
  advancedRelease: null,
  accessDuration: null,
  livePlatform: null,
  company: import.meta.env.VITE_EMPRESA || '',
};
export const meetings = [
  { date: '09/11', iso: '2026-11-09T20:00:00-03:00', title: 'Fundamentos e primeiros resultados', text: 'Primeiros comandos, produção de materiais e dúvidas de quem está começando.' },
  { date: '16/11', iso: '2026-11-16T20:00:00-03:00', title: 'IA para professores', text: 'Planejamento, atividades, avaliações, gabaritos e adaptações pedagógicas.' },
  { date: '23/11', iso: '2026-11-23T20:00:00-03:00', title: 'IA para coordenadores e diretores', text: 'Comunicados, relatórios, processos e organização da gestão escolar.' },
  { date: '30/11', iso: '2026-11-30T20:00:00-03:00', title: 'Assistentes de IA e projeto final', text: 'Configuração de assistentes, revisão de aplicações e tira-dúvidas final.' },
];
