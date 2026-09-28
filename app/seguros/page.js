import Link from "next/link";
import BlurWords from "@/components/motion/BlurWords";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconHeart, IconCoins, IconShield, IconGears, IconInfo } from "@/components/icons";

export const metadata = {
  title: "Seguros",
};

const produtos = [
  {
    slug: "seguro-de-vida",
    icon: <IconHeart />,
    title: "Seguro de Vida",
    subhead: "Cobertura contra morte natural, acidentes e invalidez, com assistência real nos momentos mais difíceis.",
    cta: "Quero me proteger hoje",
  },
  {
    slug: "seguro-prestamista",
    icon: <IconCoins />,
    title: "Seguro Prestamista",
    subhead: "Se o imprevisto acontecer com o segurado, a dívida é quitada — sem impacto na sua operação nem inadimplência.",
    cta: "Quero proteger meu negócio hoje",
  },
  {
    slug: "ramos-elementares",
    icon: <IconShield />,
    title: "Ramos Elementares",
    subhead: "Cobertura sob medida para residências, comércios e empresas, contra imprevistos que geram grandes prejuízos.",
    cta: "Quero proteger meu patrimônio hoje",
  },
  {
    slug: "seguro-protecao-financeira",
    icon: <IconGears />,
    title: "Seguro Proteção Financeira",
    subhead: "Em caso de desemprego, incapacidade ou falecimento, a dívida ou fatura é quitada com segurança e agilidade.",
    cta: "Quero proteger minha renda hoje",
  },
  {
    slug: "seguros-personalizados",
    icon: <IconInfo />,
    title: "Seguros Personalizados",
    subhead: "Seguros personalizados de acordo com a sua necessidade, variando coberturas e assistências.",
    cta: "Quero minha proteção sob medida",
  },
];

export default function SegurosPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pb-4 pt-24 text-center lg:px-10 lg:pt-28">
        <BlurWords as="h1" text="Seguros" className="text-[32px] font-light text-navy sm:text-[48px]" />
        <p className="mx-auto mt-4 max-w-xl text-base font-light text-black/70">
          Conheça as soluções da Descomplique Seguros e encontre a proteção certa pra você.
        </p>
      </section>

      <section className="mx-auto max-w-content px-6 py-10 lg:px-10">
        <div className="flex flex-col divide-y divide-line">
          {produtos.map((produto) => (
            <div key={produto.slug} id={produto.slug} className="scroll-mt-24 py-10">
              <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <span className="text-orange">{produto.icon}</span>
                <div>
                  <h2 className="text-[22px] text-navy">{produto.title}</h2>
                  <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-black/60">
                    {produto.subhead}
                  </p>
                  <Link
                    href={`/seguros/${produto.slug}`}
                    className="micro-cta mt-4 inline-block text-navy"
                  >
                    Ver coberturas completas
                  </Link>
                </div>
                <WhatsAppButton className="whitespace-nowrap">{produto.cta}</WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
