// IMPORTANTE — leia antes de mexer aqui:
//
// Todas as imagens abaixo ainda apontam para o CDN do Wix
// (static.wixstatic.com), de onde vieram no site original. Isso foi
// necessário porque este ambiente não tem acesso geral à internet para
// baixar os arquivos automaticamente — só o próprio dono do site Wix
// consegue baixar os originais em alta qualidade pelo painel
// (Configurações > Mídia, ou clicando com o botão direito em cada
// imagem no editor).
//
// O site funciona normalmente assim (os links são estáveis, hospedados
// pela Wix), mas o ideal a médio prazo é:
//   1. Baixar cada arquivo original do painel do Wix.
//   2. Salvar em /public/images/ com um nome descritivo.
//   3. Trocar a URL correspondente aqui por "/images/nome-do-arquivo.png".
// Como tudo está centralizado neste arquivo, a troca é rápida e não
// exige mexer em nenhuma página.

export const assets = {
  // Logo self-hosted em /public/logo.png (arquivo original em alta
  // qualidade, enviado pelo cliente — substitui o link pequeno do Wix).
  logo: "/logo.png",

  // Foto enviada pelo cliente pra ilustrar seguro de vida (self-hosted).
  seguroDeVidaHero: "/seguro-de-vida-hero.jpg",

  home: {
    heroPhoto:
      "https://static.wixstatic.com/media/c3ee54_1dd954e0d0cc46188a133ee90b747884f000.jpg",
    autoridadePhoto:
      "https://static.wixstatic.com/media/0367b9_4da68bf5f66646088fc63f865abdec46~mv2.png",
  },

  sobreNos: [
    "https://static.wixstatic.com/media/0367b9_9a381761fd654095adf03c257057d139~mv2.jpg",
    "https://static.wixstatic.com/media/0367b9_e403be9a4ad743db9931d98703bbc6a5~mv2.jpg",
    "https://static.wixstatic.com/media/0367b9_5a966473eaef4db2b4c44816a9f4791f~mv2.jpg",
    "https://static.wixstatic.com/media/0367b9_1c5de4ecf771400381daa5dfd896bd08~mv2.jpg",
  ],

  clientes: [
    "https://static.wixstatic.com/media/c3ee54_f394b4bd54864041a1afaeee8a3126ac~mv2.png",
    "https://static.wixstatic.com/media/c3ee54_50608bf7511341d5b8ebd108442d88ae~mv2.jpg",
    "https://static.wixstatic.com/media/c3ee54_b1911ebb015f43a68ed42f9f7d37c38a~mv2.png",
    "https://static.wixstatic.com/media/c3ee54_6908128181f04a869bd8cf36dea5b523~mv2.png",
  ],

  planoDeSaude: [
    { src: "https://static.wixstatic.com/media/0367b9_8dcd450fa6aa4d18a52e8c88fffecad6~mv2.png", alt: "Amil" },
    { src: "https://static.wixstatic.com/media/0367b9_01fc2c9d2f404c668d273b03fb9b29e7~mv2.png", alt: "Rede credenciada" },
    { src: "https://static.wixstatic.com/media/0367b9_43c69ba445b54935acc8e699b5dbb1b0~mv2.png", alt: "Rede credenciada" },
    // As outras 2 logos que tinham aqui não estavam carregando (link
    // quebrado ou não eram realmente logos de operadora). Removidas até
    // confirmar quais faltam — ver README.
  ],

  seguroDeVida: {
    oQueE: "https://static.wixstatic.com/media/c3ee54_276f9541a7ab4c4d871e2e1ddbf1b31a~mv2.png",
    comoFunciona: "https://static.wixstatic.com/media/c3ee54_8ca151fdfe084ccb80f0bf5420faf043~mv2.png",
    comoContrato: "https://static.wixstatic.com/media/c3ee54_24148b0aac4140dea439899d68c5bd47~mv2.png",
    precoDeUmCafe: "https://static.wixstatic.com/media/c3ee54_783b0157cd184042a3d0aa199181cb99~mv2.png",
  },
};
