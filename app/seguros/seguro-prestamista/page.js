import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconCross, IconShield, IconCoins, IconHeart } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguro Prestamista — Coberturas",
};

// Coberturas confirmadas com o cliente (Jose Geiger).
const coberturas = [
  {
    icon: <IconCross />,
    title: "Quitação em caso de morte",
    description: "Quita o saldo devedor do financiamento em caso de falecimento do titular.",
  },
  {
    icon: <IconShield />,
    title: "Invalidez permanente",
    description: "Quitação da dívida em caso de invalidez permanente total do titular.",
  },
  {
    icon: <IconCoins />,
    title: "Perda de renda",
    description: "Cobertura das parcelas em caso de desemprego involuntário ou perda de renda.",
  },
  {
    icon: <IconHeart />,
    title: "Doença grave",
    description: "Antecipação de cobertura em caso de diagnóstico de doença grave prevista.",
  },
];

export default function SeguroPrestamistaPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Seguro Prestamista" tone="navy">
        <BlurWords
          as="h1"
          text="Seguro Prestamista"
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
        <QuoteWidget productLabel="Seguro Prestamista" />
      </section>
    </>
  );
}
