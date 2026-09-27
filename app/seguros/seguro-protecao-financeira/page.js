import BlurWords from "@/components/motion/BlurWords";
import ProductIntro from "@/components/ProductIntro";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconInfo, IconCross, IconShield, IconDocument, IconGears, IconCoins } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguro Proteção Financeira — Coberturas",
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
    icon: <IconShield />,
    title: "Invalidez permanente total por acidente ou doença",
    description:
      "Pagamento da dívida contratada caso o segurado fique permanentemente inválido e incapaz de exercer sua atividade profissional.",
  },
  {
    icon: <IconDocument />,
    title: "Desemprego involuntário (CLT)",
    description: "Cobertura válida para trabalhadores com carteira assinada que forem desligados sem justa causa.",
  },
  {
    icon: <IconGears />,
    title: "Incapacidade física temporária (autônomos)",
    description: "Garantia do pagamento das parcelas durante o afastamento por acidente ou doença.",
  },
  {
    icon: <IconCoins />,
    title: "Cartão protegido",
    description:
      "Reembolso de compras realizadas com o cartão até 72h antes do aviso de perda ou roubo, não reconhecidas pelo titular.",
  },
];

export default function SeguroProtecaoFinanceiraPage() {
  return (
    <>
      <ProductIntro
        eyebrow="Seguro Proteção Financeira"
        title="Tranquilidade para continuar pagando, mesmo nos imprevistos."
        subhead="Em caso de desemprego, incapacidade ou falecimento, a dívida ou fatura é quitada com segurança e agilidade."
        photo={assets.home.heroPhoto}
      />

      <section id="cotacao" className="mx-auto max-w-content px-6 py-16 lg:px-10">
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
