import Image from "next/image";
import PageHero from "@/components/PageHero";
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
      <PageHero title="Clientes" />

      <section className="mx-auto max-w-5xl px-6 py-16">
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

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="font-serif text-2xl text-ink">Depoimentos</h2>
        <div className="mt-8 space-y-12">
          {depoimentos.map((d) => (
            <blockquote key={d.name} className="border-l-2 border-gold pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-text">
                “{d.quote}”
              </p>
              <footer className="mt-4 text-sm text-text-muted">
                <span className="font-medium text-text">{d.name}</span>
                <span className="block">{d.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
