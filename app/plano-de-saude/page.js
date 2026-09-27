import Image from "next/image";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Plano de saúde",
};

export default function PlanoDeSaudePage() {
  return (
    <>
      <PageHero title="Plano de saúde" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl text-ink">
          Algumas das nossas redes credenciadas
        </h2>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3">
          {assets.planoDeSaude.map((logo, i) => (
            <div key={i} className="relative aspect-[3/1]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 45vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <WhatsAppButton>Solicitar cotação</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
