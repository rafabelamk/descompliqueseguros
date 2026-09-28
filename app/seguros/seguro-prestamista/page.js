import BlurWords from "@/components/motion/BlurWords";
import ProductIntro from "@/components/ProductIntro";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconInfo, IconCross, IconShield, IconCoins } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguro Prestamista — Coberturas",
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
    title: "Falecimento",
    description:
      "Pagamento da importância segurada ao(s) beneficiário(s) em decorrência de falecimento do segurado.",
  },
  {
    icon: <IconInfo />,
    title: "Incapacidade temporária por acidente (DIT)",
    description: "Pagamento de diárias ao segurado afastado por acidente por mais de 15 dias.",
  },
  {
    icon: <IconShield />,
    title: "Invalidez permanente total por acidente ou doença",
    description:
      "Pagamento da dívida contratada caso o segurado fique permanentemente inválido e incapaz de exercer sua atividade profissional.",
  },
  {
    icon: <IconCoins />,
    title: "Perda de renda",
    description:
      "Garante o pagamento das dívidas em situações de desemprego involuntário e incapacidade temporária para o trabalho.",
  },
];

export default function SeguroPrestamistaPage() {
  return (
    <>
      <ProductIntro
        eyebrow="Seguro Prestamista"
        ctaLabel="Quero proteger meu negócio hoje"
        title="Sua operação protegida, seu cliente amparado."
        subhead="Se o imprevisto acontecer com o segurado, a dívida é quitada — sem impacto na sua operação nem inadimplência."
        photo={assets.home.heroPhoto}
      />

      <section id="cotacao" className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <BlurWords as="h2" text="Coberturas" className="text-center text-[28px] text-navy" />
        <div className="mt-12">
          <CoberturasGrid items={coberturas} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-20">
        <QuoteWidget productLabel="Seguro Prestamista" ctaLabel="Quero proteger meu negócio hoje" />
      </section>
    </>
  );
}
