import Image from "next/image";
import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import MarqueeBand from "@/components/motion/MarqueeBand";
import TestimonialCarousel from "@/components/motion/TestimonialCarousel";
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
      <ImageHero src={assets.sobreNos[0]} alt="Clientes Descomplique Seguros" tone="deep">
        <BlurWords
          as="h1"
          text="Clientes"
          className="text-[32px] font-light text-white sm:text-[48px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
          {assets.clientes.map((src, i) => (
            <div key={src} className="relative aspect-[4/3] grayscale">
              <Image
                src={src}
                alt={`Cliente atendido ${i + 1}`}
                fill
                sizes="(min-width: 640px) 20vw, 45vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <MarqueeBand text="DEPOIMENTOS REAIS •" />

      <section className="bg-surface px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="mx-auto max-w-content">
          <BlurWords
            as="h2"
            text="O que dizem sobre a Descomplique Seguros"
            className="max-w-xl text-[28px] text-navy sm:text-[32px]"
          />
          <div className="mt-14">
            <TestimonialCarousel items={depoimentos} />
          </div>
        </div>
      </section>
    </>
  );
}
