import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { areasDeAtuacao } from "@/lib/site";
import { assets } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-text-inverse">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="font-serif text-2xl italic text-gold sm:text-3xl">
              +30 anos de
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl">
              Experiência
            </h1>
            <p className="mt-6 max-w-md text-lg text-text-inverse/75">
              Temos o que você precisa.
            </p>
            <div className="mt-9">
              <WhatsAppButton>Solicitar cotação</WhatsAppButton>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src={assets.home.heroPhoto}
              alt="Descomplique Seguros"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          Áreas de atuação
        </h2>
        <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
          {areasDeAtuacao.map((area) => (
            <li key={area} className="py-5 text-lg text-text sm:text-xl">
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <WhatsAppButton variant="outline" className="border-ink text-ink hover:bg-ink hover:text-text-inverse">
            Solicitar cotação
          </WhatsAppButton>
        </div>
      </section>

      {/* Autoridade em seguros */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full lg:mx-0">
            <Image
              src={assets.home.autoridadePhoto}
              alt="Jose Geiger, Diretor-presidente da Descomplique Corretora de Seguros"
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Autoridade em seguros
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-text-muted">
              Há mais de 20 anos no mercado de seguros atendendo empresas como
              Petrobrás, Jaraguá Equipamentos, Microservice, Usina Itaiquara
              entre outras.
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-text-muted">
              O Diretor-presidente da Descomplique Corretora de Seguros, Jose
              Geiger, ficou entre os 50 melhores corretores de seguros do
              Brasil.
            </p>
            <Link
              href="/sobre-nos"
              className="focus-ring mt-6 inline-block border-b border-gold pb-0.5 text-sm font-medium tracking-wide text-ink hover:text-gold"
            >
              Nossa história
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
