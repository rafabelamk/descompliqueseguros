import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconInfo, IconGears, IconShield } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguros Personalizados",
};

const coberturas = [
  {
    icon: <IconInfo />,
    title: "Coberturas sob medida",
    description: "Combine as coberturas que fazem sentido para o seu momento de vida.",
  },
  {
    icon: <IconGears />,
    title: "Assistências adicionais",
    description: "Inclua assistências extras conforme a sua necessidade.",
  },
  {
    icon: <IconShield />,
    title: "Reavaliação periódica",
    description: "Ajuste as coberturas conforme a sua vida e o seu patrimônio mudam.",
  },
];

export default function SegurosPersonalizadosPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Seguros Personalizados" tone="navy">
        <BlurWords
          as="h1"
          text="Seguros Personalizados"
          className="text-[30px] font-light text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <BlurWords
          as="h2"
          text="Seguros customizados para cada pessoa, variando coberturas e assistências de acordo com a sua necessidade."
          className="mx-auto max-w-2xl text-center text-[22px] text-navy sm:text-[26px]"
        />
        <div className="mt-12">
          <CoberturasGrid items={coberturas} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24 lg:px-10 lg:pb-[160px]">
        <QuoteWidget productLabel="Seguros Personalizados" />
      </section>
    </>
  );
}
