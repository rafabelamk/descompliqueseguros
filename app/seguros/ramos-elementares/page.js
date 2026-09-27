import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconShield, IconDocument, IconGears, IconCoins } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Ramos Elementares — Coberturas",
};

// Coberturas confirmadas com o cliente (Jose Geiger).
const coberturas = [
  {
    icon: <IconShield />,
    title: "Residencial",
    description: "Proteção para sua casa contra incêndio, roubo e danos elétricos.",
  },
  {
    icon: <IconDocument />,
    title: "Empresarial",
    description: "Cobertura para escritórios, comércios e o patrimônio do seu negócio.",
  },
  {
    icon: <IconGears />,
    title: "Condomínio",
    description: "Proteção para áreas comuns e responsabilidade civil do condomínio.",
  },
  {
    icon: <IconCoins />,
    title: "Equipamentos e outros bens",
    description: "Cobertura para máquinas, embarcações e outros bens importantes.",
  },
];

export default function RamosElementaresPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Ramos Elementares" tone="navy">
        <BlurWords
          as="h1"
          text="Ramos Elementares"
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
        <QuoteWidget productLabel="Ramos Elementares" />
      </section>
    </>
  );
}
