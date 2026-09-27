# Scan de layout – Grupo Caburé → Descomplique Seguros

Páginas escaneadas: `/institucional/sobre-nos`, `/solucoes/seguros`, `/solucoes/saude`
Destino: site Next.js da Descomplique Seguros (descompliqueseguros.vercel.app, GitHub → Vercel). Trocar **só layout, estilo e motion**. O conteúdo continua sendo o da Descomplique.

> O site original é feito em **Framer**. Os valores abaixo foram medidos no navegador, no breakpoint **Tablet (810–1199px)**. A tabela de tipografia traz os tamanhos de Desktop e Mobile, tirados direto do CSS de breakpoints do Framer.
> Os prints estão em `prints-cabure.zip` e seguem a mesma numeração das seções deste documento.

---

## 1. Design tokens

### Cores (tokens reais do Framer)
| Token | Hex | Uso |
|---|---|---|
| `--navy` | `#26326C` | cor principal: títulos, links, fundo do hero de Seguros, cards de marca |
| `--navy-deep` | `#161B3A` (aprox.) | faixa superior do card de marca aberto |
| `--orange` | `#EE7D19` | destaque: eyebrows (MISSÃO, INDENIZAÇÕES PAGAS), ícones, hero de Saúde, contadores, estrelas |
| `--bg` | `#F2F2ED` | fundo off-white de TODAS as páginas |
| `--surface` | `#FFFFFF` | cards, formulário, bloco de depoimentos |
| `--text-80` | `rgba(0,0,0,.8)` / `#000c` | parágrafos |
| `--text-60` | `rgba(0,0,0,.6)` / `#0009` | subtítulos, labels de rodapé |
| `--text-50` | `rgba(0,0,0,.5)` / `#00000080` | descrições de card, contadores “6 PRODUTOS” |
| `--white-70` | `rgba(255,255,255,.7)` | texto sobre foto/vídeo |
| `--line` | `#CECECA` | divisores (linha do accordion, rodapé) |
| `--input-bg` | `rgba(187,187,187,.15)` | inputs do formulário |
| `--gold` (selo NR-1) | gradiente dourado `#E9D9A0 → #C9B06A` (aprox.) | só na página Saúde |

### Tipografia
- **Fonte única: Inter Display** (é o corte óptico “Display” da Inter). No Next.js dá pra usar a Inter do Google com o eixo `opsz`:
  ```ts
  // app/fonts.ts
  import { Inter } from 'next/font/google'
  export const inter = Inter({ subsets: ['latin'], axes: ['opsz'], variable: '--font-inter' })
  // CSS: font-family: var(--font-inter); font-optical-sizing: auto;  (títulos grandes já puxam o corte Display)
  ```
- Pesos usados: **200, 300 (principal), 400, 500**. Quase tudo é 300 (Light). O negrito da marca é 500.
- O wordmark serifado “CABURÉ” e o título “CONFIANÇA É O NOSSO MAIOR PATRIMÔNIO” são **SVG/imagem**, não fonte. Use o logo da Descomplique no lugar.
- Recurso de estilo: dentro de um título light, as palavras-chave vão em **500** (ex.: “O futuro é feito de **escolhas inteligentes.**”, “**Há 62 anos** honrando a confiança de **clientes e parceiros.**”).

### Escala tipográfica (Desktop 1200–1727 / Tablet 810–1199 / Mobile <810)
| Estilo | Desktop | Tablet | Mobile | Peso | Extras |
|---|---|---|---|---|---|
| Display número (R$ 2,3 BI) | 64px | 56px | 42px | 400 | lh 1.2 |
| Número stat (+2.100.000) | 50px | 44px | 34px | 400 | navy |
| H3 título de seção | 36px | 32px | 28px | 300 | lh 1.2, navy |
| H2 título médio | 30px | 27px | 22px | 200 | lh 1.2 (ex.: “O legado de nosso fundador…”) |
| H2 bloco (Principais seguros) | 24px | 24px | 18px | 400 | navy |
| Nome depoimento | 30px | 26px | 18px | 500 | UPPERCASE, ls 0.04em |
| Título de card | 24px | 20px | 18px | 400 | navy |
| Lead / hero texto | 22px | 18px | 14px | 300 | branco |
| Body | 18px | 14px | 12px | 300 | ls 0.02em, lh 1.2–1.4, `--text-80` |
| Eyebrow | 18px | 14px | 10px | 500 | UPPERCASE, ls 0.1em, laranja ou navy |
| Nav / label rodapé | 14px | 12px | 10px | 300 | UPPERCASE, ls 0.1em |
| Link rodapé | 18px | 16px | 14px | 500 | navy, ls 0.02em |
| Micro-CTA (SAIBA MAIS / VER COBERTURAS) | 9px | 7px | 7px | 500 | UPPERCASE, ls 0.1em + sublinhado de 1px |

### Layout
- Container de conteúdo ≈ **80% da largura** (700px num viewport de 880px). No desktop, max-width ~1200px, com margens laterais generosas.
- Cards: `border-radius: 20px`, fundo branco, sem sombra, padding ~40px, conteúdo centralizado.
- Mídia (vídeo/fotos): `border-radius: 20px`. Seções de foto full-bleed ficam sem raio.
- Inputs: `border-radius: 10px`, fundo `--input-bg`, sem borda, label 11px acima.
- Espaçamento vertical entre seções: bem grande (160–240px). O site “respira” muito, e isso faz parte do visual.
- Grid de cards: 2 colunas (Seguros) e 3 colunas (Portfólio), gap ~30px.

---

## 2. Componentes globais

### Header (fixo)
- `position: fixed; height: 64px; backdrop-filter: blur(50px); background: transparent`.
- Esquerda: símbolo do logo. Centro: `SOBRE NÓS · NOSSAS SOLUÇÕES · VENDA CONOSCO` (12px, 300, ls 1.2px, uppercase). Direita: botão ícone headset (quadrado 30px, borda 1px, raio 6px) + ícone hambúrguer.
- **Dois temas:** “Cabeçalho branco” (texto branco, sobre hero escuro/colorido: Sobre, Seguros e Saúde) e “Cabeçalho azul” (texto navy, sobre fundo claro).
- **Motion:** ao rolar para baixo, some com `translateY(-150px)` + `opacity:0`. Ao rolar para cima, volta. Transição de 0.3s `cubic-bezier(0.4,0,0.2,1)`.
- Menu hambúrguer: painel com 3 colunas: INSTITUCIONAL (eyebrow laranja) · SOCIAL · NOSSAS FERRAMENTAS. Links em 32px, peso 200, navy.

### Footer
- Fundo `--bg`. À esquerda, o selo oval do logo (“GRUPO CABURÉ · DESDE 1963”, traço navy). À direita, o botão outline **FALE CONOSCO** (ícone headset + texto 12px 500 uppercase, borda 1px navy, raio 6px, padding 8×14).
- 3 colunas de links: label cinza uppercase (VENDA CONOSCO / SOLUÇÕES / INSTITUCIONAL) e links navy 16px 500 abaixo.
- Linha divisória 1px. Embaixo: selo GPTW, “Baixe o App” (badges) e “Nossas redes” (ícones).

### Micro-CTA sublinhado (“SAIBA MAIS”, “VER COBERTURAS”, “ACESSAR WIKIPEDIA”)
Texto 7–9px, 500, uppercase, ls 0.1em. Embaixo, uma linha de 1px da largura do texto + ~6px. Hover: opacidade 0.3s ease-in-out.

---

## 3. Motions (o que dá a “cara” do site)

| # | Motion | Onde | Parâmetros medidos |
|---|---|---|---|
| M1 | **Blur-reveal palavra por palavra** | todos os títulos H2/H3 e números grandes | cada palavra: `filter: blur(4px→0)`, `opacity 0→1`, `y 12px→0`, stagger ~0.04s, spring. Dispara ao entrar na viewport, uma vez só |
| M2 | Header hide/show on scroll | global | translateY(-150px), 0.3s |
| M3 | **Count-up** dos números | Saúde (+1.3 MI, +X MIL), Sobre (+2.100.000) | conta de 0 até o valor em ~1.5s ao entrar na tela |
| M4 | **Card de marca que “abre”** | Portfólio (Sobre / Nossas soluções) | card navy com o logo; ao clicar em SAIBA MAIS vira card branco com faixa escura no topo, título uppercase e descrição |
| M5 | **Accordion** de categorias | Seguros | cabeçalho com ícone, título, “6 PRODUTOS” e chevron. Abre um grid 2 col de cards. Transição de altura 0.3s |
| M6 | **Seção sticky com troca de imagem** (MVV) | Sobre | 3 fotos full-bleed empilhadas. Conforme o scroll, faz crossfade da foto e do texto, e o item ativo (MISSÃO/VISÃO/VALORES) acende em laranja 100% (inativos com ~50%) |
| M7 | **Cards empilhados sticky** | Saúde (Especialidades) | cada card `position: sticky; top: 50px`, entra com `opacity 0→1` e `y 150→0` conforme o scroll |
| M8 | Carrossel de depoimentos | Seguros / Saúde | faixa horizontal com `mask-image: linear-gradient(to right, transparent 0%, #000 12.5%, #000 87.5%, transparent 100%)` e divisória vertical 1px entre itens |
| M9 | Faixa tipográfica gigante | Seguros (“HISTÓRIAS REAIS •”) | 2 linhas, 56px+ uppercase, cor `rgba(0,0,0,.1)`, a 2ª linha deslocada. Dá pra fazer como marquee lento em sentidos opostos |
| M10 | Hero com vídeo de fundo | Sobre (arquivo P&B com overlay escuro), Saúde (ondas laranja), Seguros (navy) | `<video autoplay muted loop playsinline>` + overlay |
| M11 | Micro-transições | botões, links, ícones | `transform 0.18s cubic-bezier(0.2,0,0,1)`, `opacity 0.3s ease-in-out`, `fill 0.1s` |

### Código de referência (Next.js + framer-motion)

```tsx
// components/motion/BlurWords.tsx  — M1
'use client'
import { motion } from 'framer-motion'
export function BlurWords({ text, bold = [], className = '' }: { text: string; bold?: string[]; className?: string }) {
  const words = text.split(' ')
  return (
    <motion.span className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.04 }}>
      {words.map((w, i) => (
        <motion.span key={i} className={`inline-block ${bold.includes(w) ? 'font-medium' : ''}`}
          variants={{ hidden: { opacity: 0, y: 12, filter: 'blur(4px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  )
}
```

```tsx
// components/Header.tsx  — M2
'use client'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion'
import { useState } from 'react'
export function Header({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const { scrollY } = useScroll(); const [hidden, setHidden] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => { const prev = scrollY.getPrevious() ?? 0; setHidden(y > prev && y > 120) })
  return (
    <motion.header animate={{ y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 h-16 backdrop-blur-[50px] ${theme === 'light' ? 'text-white' : 'text-navy'}`}>
      {/* logo | nav 12px uppercase tracking-[0.1em] font-light | headset + menu */}
    </motion.header>
  )
}
```

```tsx
// components/motion/CountUp.tsx  — M3
'use client'
import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
export function CountUp({ to, decimals = 0, prefix = '', suffix = '' }: { to: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true }); const [v, setV] = useState(0)
  useEffect(() => { if (inView) animate(0, to, { duration: 1.5, ease: 'easeOut', onUpdate: setV }) }, [inView, to])
  return <span ref={ref}>{prefix}{v.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
}
```

```tsx
// Sticky stacking cards — M7
{items.map((it, i) => (
  <div key={i} className="sticky top-[50px]">
    <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }} className="rounded-[20px] bg-white p-10 min-h-[266px]">
      {/* ícone laranja 24px, título 22px 500 laranja, texto 14px 300 text-black/60 */}
    </motion.div>
  </div>
))}
```

```css
/* tailwind.config / globals.css */
:root{--navy:#26326C;--orange:#EE7D19;--bg:#F2F2ED;--line:#CECECA}
body{background:var(--bg);font-family:var(--font-inter);font-weight:300;color:rgba(0,0,0,.8)}
.eyebrow{font-size:14px;font-weight:500;letter-spacing:.1em;text-transform:uppercase}
.micro-cta{font-size:7px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding-bottom:6px;border-bottom:1px solid currentColor;transition:opacity .3s ease-in-out}
.micro-cta:hover{opacity:.6}
.card{background:#fff;border-radius:20px;padding:40px}
.input{background:rgba(187,187,187,.15);border-radius:10px;border:0;padding:14px 16px;font-size:14px}
.testimonials{mask-image:linear-gradient(to right,transparent 0%,#000 12.5%,#000 87.5%,transparent 100%)}
```

---

## 4. Estrutura página a página

### 4.1 Sobre nós (`/institucional/sobre-nos`, altura ~8.460px)
| # | Seção | Layout | Texto de referência (Caburé) | Motion |
|---|---|---|---|---|
| 1 | Hero | 100vh, vídeo P&B full-bleed + overlay escuro + moldura de linhas curvas | H2 27px/200 branco: “**Há 62 anos** honrando a confiança de **clientes e parceiros.**” | M10, M1 |
| 2 | Assinatura | centralizado, muito espaço em volta | assinatura manuscrita (SVG) + eyebrow laranja espaçado “S R .  C A B U R É” (Inter 14px, ls 5px) + título serifado em SVG “CONFIANÇA É O NOSSO MAIOR PATRIMÔNIO.” | M1 |
| 3 | Vídeo do fundador | 700×352, raio 20px, play central | thumbnail do YouTube | — |
| 4 | Um homem que marcou… | 2 colunas: H3 32px/300 navy à esquerda; body 12px + micro-CTA “ACESSAR WIKIPEDIA” à direita | “Um homem que marcou a história dos seguros de vida no Brasil” | M1 |
| 5 | Como tudo começou | label cinza uppercase na coluna estreita + H2 27px/200 navy na coluna larga | “O legado de nosso fundador…” | M1 palavra a palavra |
| 6 | História (foto P&B) | full-bleed, foto de equipe em P&B; H2 24px/400 branco à esquerda; 3 parágrafos 14px branco/70% à direita | “Uma história que acompanha a evolução dos seguros de vida no Brasil” | fade |
| 7 | Números | título centralizado 27px/200 + subtítulo Inter 16px; 3 cards brancos (sem raio) com número 44px navy + label uppercase | +2.100.000 SEGURADOS ATIVOS · +25.000 VENDEDORES PARCEIROS · +R$ 28.6 BI CAPITAL SEGURADO | M3 / M1 |
| 8 | Portfólio | H3 centralizado + parágrafo; grid 3 col de cards navy quadrados (~215×180) com logo + “SAIBA MAIS” | Seguros, Saúde, Prestamista, Tech, Ventures | **M4** |
| 9 | Nossa identidade (MVV) | sticky full-bleed, foto de fundo muda; eyebrow branco/70% no topo; frase 32px/300 branca embaixo à esquerda; menu MISSÃO/VISÃO/VALORES laranja à direita | Missão: “Atender e orientar as pessoas para um futuro melhor e mais tranquilo.” / Visão: “Buscar sempre, através do respeito, valorizar e surpreender positivamente nossos segurados.” / Valores: “Firmamos, como principal compromisso, seguir a verdade, a transparência, a justiça e a agilidade…” | **M6** |
| 10 | Nossas sedes | H4 20px uppercase centralizado; grid bento 2 linhas (foto grande + foto estreita / estreita + grande), raio 20px, legenda branca com **barra laranja vertical de 3px** à esquerda | SEGUROS · INVESTIMENTOS · IMÓVEIS · SAÚDE | fade/slide |
| 11 | Footer | ver §2 | | |

### 4.2 Seguros (`/solucoes/seguros`, ~4.950px)
| # | Seção | Layout | Texto de referência | Motion |
|---|---|---|---|---|
| 1 | Hero | 100vh fundo **navy** (vídeo sutil), logo “CABURÉ \| SEGUROS” (wordmark + divisória vertical + sub-marca espaçada), parágrafo 18px/300 branco centralizado, max ~640px | “Segurança para os momentos mais importantes da vida…” | M10, fade |
| 2 | Principais seguros | accordion **aberto**: ícone escudo navy à esquerda + H2 24px navy; “6 PRODUTOS” 8px + chevron à direita; linha 1px; grid 2 col de cards brancos (raio 20px, ~336×220): ícone laranja outline 28px, título 20px navy, descrição 14px text-50, micro-CTA | Seguro de Vida · Prestamista · Ramos Elementares · Proteção Financeira · Personalizados | M5, M1 |
| 3 | Assistências e serviços | accordion fechado (abre igual ao 2) | Medicamentos · Funeral · Veicular 24h · Odontológica · Domiciliar 24h · Telemedicina | M5, M1 (blur visível no print 04) |
| 4 | Benefícios extras | accordion fechado, 1 card | Sorteios Mensais | M5 |
| 5 | Indenizações pagas | 2 col: eyebrow laranja com ícone + número 56px navy à esquerda; H3 32px/300 + body 12px à direita | “R$ 2,3 BI” / “Uma prova do nosso compromisso em proteger pessoas” | M1, M3 |
| 6 | Vídeo depoimento | 700×352, raio 20px, botão play laranja translúcido, overlay escuro | — | — |
| 7 | Bloco branco de depoimentos | container branco full-width com raio 20px só em cima; faixa “HISTÓRIAS REAIS •” em 2 linhas a 10% de opacidade; H3 32px/300 navy; carrossel de depoimentos | nome 26px/500 uppercase navy, texto 14px/300, rodapé “AVALIAÇÃO DO GOOGLE” + 5 estrelas laranja | M8, M9 |
| 8 | Formulário | card branco 700px, raio 20px, 2 col: H3 “Como podemos te ajudar?” + texto 12px à esquerda; campos Nome, E-mail, Telefone, Assunto (select), Mensagem (textarea), botão **Enviar** (navy, texto branco 16px, raio 10px) | | — |
| 9 | Footer | | | |

### 4.3 Saúde (`/solucoes/saude`, ~8.250px)
| # | Seção | Layout | Texto de referência | Motion |
|---|---|---|---|---|
| 1 | Hero | 100vh fundo **laranja #EE7D19** com vídeo de ondas de seda; logo “CABURÉ \| SAÚDE”; parágrafo 14–18px branco | “Unimos tecnologia, cuidado e praticidade…” | M10 |
| 2 | Telemedicina | H2 24px laranja + H3 18px/300 centralizados; 2 col: lista de 4 benefícios (ícone laranja em **quadrado 50px com fundo laranja 20% e raio 6px** + texto 18px/300) e mockup do app (276×600, raio 20px). Depois a ordem se inverte (mockup à esquerda) | Consultas sem custo · Dependentes · Até 65% em medicamentos · Atendimento pelo app | fade/slide |
| 3 | Vídeo full-bleed | 879×643 | — | — |
| 4 | Números | fundo de ondas brancas (imagem full-bleed 380px de altura cada), número 64px laranja + texto 14px text-60; ícone de lâmpada laranja; divisória | “+ 1.3 MI Pessoas acessam…”, “% dos casos resolvidos…” | **M3** |
| 5 | NR-1 | foto grande raio 20px + **selo circular dourado** (291px, inclinado ~-9°, texto em anel) sobreposto no canto superior esquerdo; card branco com logo do app + nome + selo verificado | “Dr. Anjo — Em conformidade com a NR-1” | fade |
| 6 | Cards NR-1 | card branco raio 20px: eyebrow com ícone de lótus, H2 24px, body 14px/300; card com contador “+ X MIL Profissionais…” | | M3 |
| 7 | Depoimentos | H3 32px/300 preto com parte em 500; carrossel: avatar redondo 66px + “VIA INSTAGRAM” + @handle 26px/500 laranja + texto | | M8 |
| 8 | Especialidades | H4 20px uppercase centralizado; 4 cards empilhados sticky (700×266): ícone laranja, título 22px/500 laranja, texto 14px text-60 | Clínicos Gerais · Nutricionistas · Especialistas · Psicólogos | **M7** |
| 9 | Formulário + Footer | igual Seguros | | |

---

## 5. Diferenças de identidade para adaptar à Descomplique
- Trocar navy/laranja pelas cores da Descomplique **se** a marca tiver paleta própria. Para ficar “igual à Caburé” (como foi pedido), dá pra manter `#26326C` + `#EE7D19` + `#F2F2ED`.
- O wordmark serifado da Caburé é proprietário: use o logo da Descomplique no mesmo formato “LOGO | SUB-MARCA” (divisória vertical 1px + sub-marca em caixa alta, ls ~0.3em).
- Fotos, vídeos, depoimentos e números são da Caburé e **não devem ser reaproveitados**. Use o conteúdo que já está no site da Descomplique (migrado do Wix).

---

## 6. Prompt pronto para o Claude Code (no repositório do site)

```
Refaça o layout de 3 páginas do site (Next.js App Router + Tailwind) seguindo o arquivo scan-grupo-cabure.md
(copie-o para /docs). Mantenha TODO o conteúdo atual da Descomplique; mude só estrutura, estilo e motion.

1. Instale framer-motion. Configure a Inter com axes:['opsz'] via next/font e os tokens de cor da §1 no Tailwind.
2. Crie os componentes: Header (M2, temas claro/escuro), Footer (§2), BlurWords (M1), CountUp (M3),
   AccordionCategoria (M5), CardProduto, StickyStack (M7), StickyMVV (M6), CarrosselDepoimentos (M8), FormContato.
3. Monte as páginas:
   - /sobre-nos  → estrutura da §4.1
   - /seguros    → estrutura da §4.2 (produtos da Descomplique nos accordions)
   - /saude      → estrutura da §4.3 (se não houver produto de saúde equivalente, adapte as seções 2, 4 e 8)
4. Aplique BlurWords em todos os H2/H3; respeite prefers-reduced-motion (desliga blur/stagger).
5. Espaçamento vertical entre seções: 160–240px no desktop, 96px no mobile. Container max-w-[1200px] w-[80%].
6. Teste nos 3 breakpoints (≥1200, 810–1199, <810) usando a escala da §1. Rode build e lint antes de commitar.
```
