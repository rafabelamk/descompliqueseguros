import BlurWords from "@/components/motion/BlurWords";
import ProductIntro from "@/components/ProductIntro";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconInfo, IconCross, IconGears, IconShield, IconDocument, IconCoins } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Ramos Elementares — Coberturas",
};

// Coberturas confirmadas com o cliente (Jose Geiger).
const coberturas = [
  {
    icon: <IconInfo />,
    title: "Personalize na cotação",
    description:
      "Adicione outras coberturas e assistências durante a cotação e pague pelo que faz sentido para o seu momento de vida.",
  },
  {
    icon: <IconCross />,
    title: "Incêndio, raio e explosão",
    description:
      "Proteção essencial para danos estruturais causados por fogo, raios ou explosões acidentais.",
  },
  {
    icon: <IconGears />,
    title: "Vendaval e granizo",
    description:
      "Cobertura para eventos climáticos extremos que danificam telhados, janelas e estruturas.",
  },
  {
    icon: <IconShield />,
    title: "Fumaça e danos elétricos",
    description: "Proteção contra curto-circuito e prejuízos causados por fumaça.",
  },
  {
    icon: <IconDocument />,
    title: "Perda ou pagamento de aluguel",
    description:
      "Garante indenização caso o imóvel fique inabitável ou precise ser desocupado após um sinistro.",
  },
  {
    icon: <IconCoins />,
    title: "Hospedagem e mudança",
    description: "Cobre despesas emergenciais com estadia ou transporte de bens em caso de sinistro.",
  },
];

export default function RamosElementaresPage() {
  return (
    <>
      <ProductIntro
        eyebrow="Ramos Elementares"
        title="Proteja o que você construiu, com segurança de verdade."
        subhead="Cobertura sob medida para residências, comércios e empresas, contra imprevistos que geram grandes prejuízos."
        photo={assets.home.heroPhoto}
      />

      <section id="cotacao" className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <BlurWords as="h2" text="Coberturas" className="text-center text-[28px] text-navy" />
        <div className="mt-12">
          <CoberturasGrid items={coberturas} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-20">
        <QuoteWidget productLabel="Ramos Elementares" />
      </section>
    </>
  );
}
