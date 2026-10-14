// Planos de saúde pet: preços e coberturas num só lugar, para atualizar
// sem mexer na página. Valores mensais de referência (podem variar por
// região e por promoção) — confira antes de publicar uma mudança.

export const petPlans = [
  { id: "leve", name: "Petlove Leve", tagline: "Cuidado básico", price: "14,90" },
  { id: "tranquilo", name: "Petlove Tranquilo", tagline: "Ambulatorial de rotina", price: "34,90" },
  { id: "ideal", name: "Petlove Ideal", tagline: "Hospitalar com internação", price: "89,90" },
  { id: "essencial", name: "Petlove Essencial", tagline: "Mais cobertura", price: "199,90" },
];

// `in` lista os planos que incluem o item.
export const petFeatures = [
  { label: "Consultas em horário normal", in: ["leve", "tranquilo", "ideal", "essencial"] },
  { label: "Consultas em horário de plantão", in: ["tranquilo", "ideal", "essencial"] },
  { label: "Vacinas obrigatórias", in: ["leve", "tranquilo", "ideal", "essencial"] },
  { label: "Procedimentos clínicos", in: ["tranquilo", "ideal", "essencial"] },
  { label: "Microchipagem gratuita", in: ["leve", "tranquilo", "ideal", "essencial"] },
  { label: "Clínico geral a domicílio", in: ["leve", "tranquilo", "ideal", "essencial"] },
  { label: "Exames laboratoriais simples", in: ["leve", "tranquilo", "ideal", "essencial"] },
  { label: "Exames laboratoriais complexos", in: ["tranquilo", "ideal", "essencial"] },
  { label: "Exames de imagem", in: ["tranquilo", "ideal", "essencial"] },
  { label: "Especialistas", in: ["ideal", "essencial"] },
  { label: "Exames cardiológicos", in: ["ideal", "essencial"] },
  { label: "Cirurgias e anestesia inalatória", in: ["ideal", "essencial"] },
  { label: "Internação", in: ["ideal", "essencial"] },
  { label: "Fisioterapia e acupuntura", in: ["essencial"] },
  { label: "Exames de alta complexidade", in: ["essencial"] },
  { label: "Limpeza de tártaro", in: ["essencial"] },
  { label: "2 consultas reembolsáveis na rede livre", in: ["essencial"] },
];

export const petPlanMessage = (planName) =>
  `Olá! Quero saber mais sobre o plano de saúde pet ${planName}. Pode me ajudar?`;
