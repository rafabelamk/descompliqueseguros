# Descomplique Seguros — site novo

Site institucional da Descomplique Corretora de Seguros, reconstruído em
Next.js (App Router) a partir do conteúdo do site antigo em Wix
(`descompliqueseguros.wixsite.com`), com um layout novo inspirado no estilo
do site do Grupo Caburé (`grupocabure.com.br/solucoes/seguros`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Para gerar o build de produção:

```bash
npm run build
npm run start
```

## Subindo pro GitHub

**Atenção ao extrair o zip**: os arquivos deste zip (`package.json`,
`app/`, `lib/` etc.) já estão soltos, sem nenhuma pasta por cima. Ao
descompactar, confira se `package.json` ficou direto dentro da pasta
que você criou — e não uma pasta a mais dentro dela. Se aparecer uma
pasta extra por cima, entre nela antes de continuar. Isso evita o erro
"Couldn't find any 'pages' or 'app' directory" na Vercel, que acontece
quando o `package.json` fica um nível abaixo da raiz do repositório.

Depois, abra o terminal **dentro dessa pasta** (a que contém o
`package.json`) e rode:

```bash
git init
git add .
git commit -m "Site inicial Descomplique Seguros"
git branch -M main
git remote add origin <url-do-seu-repositorio>
git push -u origin main
```

## Deploy

O projeto é um Next.js padrão, então basta importar o repositório na
[Vercel](https://vercel.com/new) — não precisa de nenhuma configuração
extra além de conectar o repositório.

## Onde mexer no conteúdo

- `lib/site.js` — nome do site, dados de contato (WhatsApp, telefone,
  e-mail, redes sociais) e itens do menu.
- `lib/assets.js` — todas as imagens do site, num só lugar (veja a nota
  abaixo sobre imagens).
- `app/page.js` — página inicial.
- `app/sobre-nos/page.js`, `app/clientes/page.js`,
  `app/plano-de-saude/page.js`, `app/o-que-e-seguro-de-vida/page.js`,
  `app/contato/page.js` — as demais páginas, uma por pasta.
- `components/Header.jsx` e `components/Footer.jsx` — cabeçalho e rodapé,
  que aparecem em todas as páginas.

## Nota importante sobre as imagens

Todas as imagens (logo, fotos, ícones, logos de parceiros) ainda estão
apontando para o CDN do Wix (`static.wixstatic.com`), de onde vieram no
site original — o ambiente em que montei este projeto não tem acesso
geral à internet para baixar os arquivos automaticamente.

Os links são estáveis e o site funciona normalmente assim, mas o ideal a
médio prazo é:

1. Baixar os arquivos originais no painel do Wix (Configurações > Mídia,
   ou botão direito em cada imagem no editor).
2. Salvar em `public/images/`.
3. Trocar a URL correspondente em `lib/assets.js` pelo caminho local
   (ex.: `/images/logo.png`).

Como tudo está centralizado nesse arquivo, a troca é rápida.

## O que mudou em relação ao site antigo

- **Todo o texto de todas as abas foi migrado** (Home, Sobre Nós,
  Clientes, Plano de Saúde, O Que É Seguro de Vida, e o conteúdo que
  estava na aba "Contato" — os avisos sobre acidentes de trabalho —
  virou a página `/contato`).
- O rodapé (redes sociais + contatos + direitos autorais) aparecia
  repetido em toda página do site antigo; aqui ele virou um único
  componente compartilhado, sem duplicar o texto.
- O link "Read More" da Home, que no site antigo apontava para um
  arquivo do Canva (parecia um link esquecido do editor, não conteúdo
  de verdade), foi removido — o link "nossa história" para a página
  Sobre Nós continua.
- No site antigo, os textos de "Como funciona" e "Como contrato" (na
  página O Que É Seguro de Vida) já vinham idênticos — foi migrado
  fielmente assim, já revisado e confirmado com o cliente.
- O título "Contato" no menu antigo não tinha uma página própria (ficava
  na home do domínio, `/`); aqui virou uma página dedicada em `/contato`,
  e a página inicial (`/`) mostra o conteúdo que antes estava na aba
  "Home".

## Design system (v2 — estilo Grupo Caburé)

O layout foi refeito seguindo `docs/scan-grupo-cabure.md` (tokens de cor,
tipografia, componentes e motions medidos no site de referência). Resumo
do que mudou:

- **Cores**: `navy` `#26326C`, `orange` `#EE7D19`, `bg` `#F2F2ED`,
  `surface` `#FFFFFF`, `line` `#CECECA` — tudo em `tailwind.config.js`.
- **Fonte**: Inter (eixo óptico `opsz`, pesos 200/300/400/500), no lugar
  de Newsreader/Manrope.
- **Framer Motion** foi adicionado (`framer-motion`), com os componentes
  em `components/motion/`: `BlurWords` (títulos que entram palavra por
  palavra com blur), `CountUp` (números que contam), `AccordionCategoria`,
  `StickyMVV` (seção fixa com crossfade de foto — usada em Sobre Nós para
  Prêmios/Reconhecimento/Experiência), `StickyStack` (cards fixos —
  usada em O Que É Seguro de Vida), `TestimonialCarousel`,
  `MarqueeBand` e `ImageHero`.
- **Header**: fixo, some ao rolar pra baixo e volta ao rolar pra cima,
  com tema claro (texto branco) nas páginas de hero escuro e tema navy
  nas demais.

**Duas adaptações conscientes em relação ao site de referência:**
1. O site original usa **vídeo** de fundo nos heroes. A Descomplique não
   tem vídeo institucional, então usei as fotos reais do site com um
   zoom lento contínuo (Ken Burns) no lugar do vídeo.
2. O card "navy que abre ao clicar" (M4, usado no portfólio de marcas do
   site de referência) não tinha conteúdo real equivalente pra preencher
   — a Descomplique não tem marcas irmãs com descrição própria. Em vez
   de inventar textos, usei esse mesmo espaço (Áreas de Atuação, na Home)
   com o padrão de **accordion** (M5), que tinha conteúdo real pra
   sustentar.

Nenhum texto novo foi inventado: todo número, depoimento e parágrafo
usado é o mesmo migrado do site em Wix.

## Sobre a versão do Next.js

O projeto usa Next 14.2.35 (a mais recente da série 14). O `npm audit`
ainda acusa uma vulnerabilidade que só é corrigida na versão 16, uma
mudança de versão maior (breaking change) que eu não apliquei aqui sem
testar. A maior parte das falhas listadas depende de hospedagem própria
("self-hosted"), servidor customizado, ou hospedagem em Windows — não se
aplicam quando o deploy é feito na Vercel. Se quiser migrar pra Next 16
mais pra frente, é só avisar.
