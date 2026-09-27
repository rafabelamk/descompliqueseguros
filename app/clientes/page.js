import BlurWords from "@/components/motion/BlurWords";
import MarqueeBand from "@/components/motion/MarqueeBand";
import TestimonialCarousel from "@/components/motion/TestimonialCarousel";
import ImageStrip from "@/components/ImageStrip";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Clientes",
};

const depoimentos = [
  {
    quote:
      "When it comes to health care, no doubt the knowledge and advice provided by Jose Geiger are of excellent quality and reference in this market. The servive rendered by him and his team, makes the employees of our company, feel satisfied and weel assisted by a health plan.",
    name: "C. Guedes",
    role: "Owner at Matuciak Assessoria Empresarial Ltda.",
  },
  {
    quote:
      "Jose Geiger é um executivo sério focado, determinado e ético. Seu sucesso é fruto de muito trabalho e dedicação, sabe utilizar as dificuldades como motivação para não desistir e ter sucesso.",
    name: "L. Oliveira",
    role: "Digital, Data & Analytics — MBA, IT lead",
  },
];

export default function ClientesPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pb-2 pt-24 text-center lg:px-10 lg:pt-28">
        <BlurWords
          as="h1"
          text="Clientes"
          className="text-[32px] font-light text-navy sm:text-[48px]"
        />
      </section>

      <section className="mx-auto max-w-content px-6 pb-8 pt-6 lg:px-10">
        <p className="mb-6 text-center text-[12px] uppercase tracking-[0.1em] text-black/50">
          Empresas já atendidas
        </p>
        <ImageStrip
          images={assets.clientes.map((src, i) => ({
            src,
            alt: `Cliente atendido ${i + 1}`,
          }))}
          height={96}
          grayscale
        />
      </section>

      <MarqueeBand text="DEPOIMENTOS REAIS •" />

      <section className="bg-surface px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-content">
          <BlurWords
            as="h2"
            text="O que dizem sobre a Descomplique Seguros"
            className="mx-auto max-w-xl text-center text-[28px] text-navy sm:text-[32px]"
          />
          <div className="mt-14">
            <TestimonialCarousel items={depoimentos} />
          </div>
        </div>
      </section>
    </>
  );
}
