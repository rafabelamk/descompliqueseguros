import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import CoberturasGrid from "@/components/CoberturasGrid";
import QuoteWidget from "@/components/QuoteWidget";
import { IconShield, IconInfo, IconHeart, IconCross } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Seguro de Vida — Coberturas",
};

// ATENÇÃO — REVISAR COM O CLIENTE ANTES DE PUBLICAR:
// A lista abaixo usa nomenclatura padrão do mercado de seguro de vida no
// Brasil (termos genéricos, comuns à maioria das seguradoras), pois não
// tenho acesso à apólice real da Descomplique. Confirme com o José quais
// dessas coberturas a Descomplique realmente oferece antes de publicar
// esta página — coberturas de seguro são compromisso contratual, não dá
// pra migrar "no estilo" sem checar o conteúdo.
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
      "Pagamento da importância segurada ao(s) beneficiário(s) em decorrência de falecimento do segurado, por causa natural ou acidental.",
  },
  {
    icon: <IconShield />,
    title: "Invalidez permanente por doença",
    description:
      "Antecipação da indenização caso uma doença impeça totalmente o exercício de atividade remunerada.",
  },
  {
    icon: <IconCross />,
    title: "Indenização especial por morte acidental",
    description:
      "Pagamento adicional ao beneficiário em caso de acidente, somado à cobertura de morte natural, quando contratada.",
  },
  {
    icon: <IconShield />,
    title: "Invalidez por acidente",
    description:
      "Indenização proporcional à perda, redução ou impotência funcional permanente causada por acidente.",
  },
  {
    icon: <IconInfo />,
    title: "Incapacidade temporária por acidente",
    description:
      "Pagamento de diárias ao segurado afastado por acidente que o impeça de trabalhar por mais de 15 dias.",
  },
  {
    icon: <IconShield />,
    title: "Incapacidade hospitalar",
    description:
      "Pagamento de diárias ao segurado no período em que estiver internado, em decorrência de acidente ou doenças cobertas pela apólice.",
  },
  {
    icon: <IconHeart />,
    title: "Doenças graves",
    description:
      "Indenização ao segurado em caso de diagnóstico de doenças graves previstas, com suporte financeiro para tratamento.",
  },
];

export default function SeguroDeVidaCoberturasPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Seguro de vida" tone="navy">
        <BlurWords
          as="h1"
          text="Seguro de vida"
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
        <QuoteWidget productLabel="Seguro de Vida" />
      </section>
    </>
  );
}
