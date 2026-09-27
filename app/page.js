import Image from "next/image";
import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CountUp from "@/components/motion/CountUp";
import AccordionCategoria from "@/components/motion/AccordionCategoria";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageStrip from "@/components/ImageStrip";
import { IconShield, IconHeart, IconCross, IconCoins, IconHeadset } from "@/components/icons";
import { assets } from "@/lib/assets";

const areas = [
  {
    title: "Seguro de vida",
    icon: <IconHeart />,
    href: "/seguros/seguro-de-vida",
    cta: "Ver coberturas",
  },
  {
    title: "Plano de saúde | Plano de saúde para Pet",
    icon: <IconCross />,
    href: "/plano-de-saude",
    cta: "Ver plano de saúde",
  },
  {
    title: "Seguros em Geral",
    icon: <IconShield />,
    href: "/seguros/ramos-elementares",
    cta: "Ver coberturas",
  },
  {
    title: "Consórcio",
    icon: <IconCoins />,
    href: "/contato",
    cta: "Solicitar cotação",
  },
  {
    title: "Pós Venda e Suporte Integral",
    icon: <IconHeadset />,
    href: "/contato",
    cta: "Falar com a gente",
  },
];

export default function HomePage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Descomplique Seguros" tone="navy">
        <div className="mx-auto max-w-2xl text-center text-white">
          <BlurWords
            as="h1"
            text="+30 anos de experiência. Temos o que você precisa."
            bold={["+30", "anos", "de", "experiência"]}
            className="text-[28px] font-light leading-tight sm:text-[36px]"
          />
          <div className="mt-9 flex justify-center">
            <WhatsAppButton>Solicitar cotação</WhatsAppButton>
          </div>
        </div>
      </ImageHero>

      <section className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="mb-10 flex items-center justify-between">
          <BlurWords
            as="h2"
            text="Áreas de atuação"
            className="text-[30px] text-navy sm:text-[36px]"
          />
          <span className="hidden text-[8px] font-medium uppercase tracking-[0.1em] text-black/50 sm:block">
            5 produtos
          </span>
        </div>

        <AccordionCategoria
          icon={<IconShield />}
          title="Nossas soluções"
          count={5}
          defaultOpen
          items={areas}
        />
      </section>

      <section className="bg-surface px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src={assets.sobreNos[0]}
              alt="Jose Geiger — Descomplique Seguros"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-input bg-navy px-4 py-2 text-white">
              <span className="text-2xl leading-none">
                <CountUp to={20} prefix="+" />
              </span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.1em] text-white/70">
                anos no mercado
              </span>
            </div>
          </div>
          <div>
            <BlurWords
              as="h3"
              text="Autoridade em seguros"
              className="text-[30px] text-navy sm:text-[36px]"
            />
            <p className="mt-6 max-w-2xl text-[18px] font-light leading-relaxed text-black/80">
              Há mais de 20 anos no mercado de seguros atendendo empresas como
              Petrobrás, Jaraguá Equipamentos, Microservice, Usina Itaiquara
              entre outras.
            </p>
            <p className="mt-4 max-w-2xl text-[18px] font-light leading-relaxed text-black/80">
              O Diretor-presidente da Descomplique Corretora de Seguros, Jose
              Geiger, ficou entre os 50 melhores corretores de seguros do
              Brasil.
            </p>
            <a href="/sobre-nos" className="micro-cta mt-6 inline-block text-navy">
              Nossa história
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-content">
          <ImageStrip
            images={assets.clientes.map((src, i) => ({
              src,
              alt: `Cliente atendido ${i + 1}`,
            }))}
            height={72}
            grayscale
          />
        </div>
      </section>
    </>
  );
}
