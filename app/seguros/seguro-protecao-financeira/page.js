import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconCoins, IconGears, IconHeart } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguro Proteção Financeira — Coberturas",
};

// Coberturas confirmadas com o cliente (Jose Geiger).
const coberturas = [
  {
    icon: <IconCoins />,
    title: "Quitação de dívidas",
    description: "Garante a quitação de suas dívidas em caso de morte ou invalidez.",
  },
  {
    icon: <IconGears />,
    title: "Renda temporária",
    description: "Cobertura das parcelas por um período determinado em caso de perda de renda.",
  },
  {
    icon: <IconHeart />,
    title: "Doenças graves",
    description: "Cobertura adicional em caso de diagnóstico de doença grave prevista.",
  },
];

export default function SeguroProtecaoFinanceiraPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Seguro Proteção Financeira" tone="navy">
        <BlurWords
          as="h1"
          text="Seguro Proteção Financeira"
          className="text-[30px] font-light text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <BlurWords as="h2" text="Coberturas" className="text-center text-[28px] text-navy" />
        <div className="mt-12">
          <CoberturasGrid items={coberturas} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24 lg:px-10 lg:pb-[160px]">
        <QuoteWidget productLabel="Seguro Proteção Financeira" />
      </section>
    </>
  );
}
