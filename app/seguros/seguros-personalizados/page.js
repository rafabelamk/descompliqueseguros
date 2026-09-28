import BlurWords from "@/components/motion/BlurWords";
import ProductIntro from "@/components/ProductIntro";
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
      <ProductIntro
        eyebrow="Seguros Personalizados"
        ctaLabel="Quero minha proteção sob medida"
        title="Amplie sua proteção com garantias que fazem a diferença."
        subhead="Seguros personalizados de acordo com a sua necessidade, variando coberturas e assistências."
        photo={assets.home.heroPhoto}
      />

      <section id="cotacao" className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <BlurWords as="h2" text="Coberturas" className="text-center text-[28px] text-navy" />
        <div className="mt-12">
          <CoberturasGrid items={coberturas} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-20">
        <QuoteWidget productLabel="Seguros Personalizados" ctaLabel="Quero minha proteção sob medida" />
      </section>
    </>
  );
}
