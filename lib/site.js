// Dados institucionais e de contato da Descomplique Seguros.
// Centralizados aqui para facilitar qualquer atualização futura.

export const site = {
  name: "Descomplique Seguros",
  legalName: "Descomplique Corretora de Seguros",
  tagline: "Seguro de Vida | Descomplique Seguros | São Paulo",
  description:
    "Proteja o seu futuro com a Descomplique Seguros. Descubra soluções personalizadas para seguro de vida, planos de saúde e muito mais. Acesse agora e garanta tranquilidade e segurança para você e sua família.",
  url: "https://descompliqueseguros.com.br",
};

export const contact = {
  whatsappNumber: "5511962691575",
  whatsappMessage: "Quero saber mais!",
  get whatsappUrl() {
    return `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(
      this.whatsappMessage
    )}`;
  },
  phoneDisplay: "(11) 96269-1575",
  phoneHref: "tel:11962691575",
  email: "descompliqueseguross@gmail.com",
  facebookUrl: "https://web.facebook.com/CorretoraDescompliqueSeguros",
  instagramUrl: "https://www.instagram.com/descompliqueseguross/",
  linkedinUrl: "https://www.linkedin.com/in/geiger1703/",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Seguros", href: "/seguros" },
  { label: "Clientes", href: "/clientes" },
  { label: "Plano de saúde", href: "/plano-de-saude" },
  { label: "O que é seguro de vida", href: "/o-que-e-seguro-de-vida" },
  { label: "Contato", href: "/contato" },
];

export const areasDeAtuacao = [
  "Seguro de vida",
  "Plano de saúde | Plano de saúde para Pet",
  "Seguros em Geral",
  "Consórcio",
  "Pós Venda e Suporte Integral",
];
