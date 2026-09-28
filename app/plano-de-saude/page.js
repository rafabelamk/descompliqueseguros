import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageStrip from "@/components/ImageStrip";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Plano de saúde",
};

export default function PlanoDeSaudePage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Plano de saúde" tone="orange">
        <BlurWords
          as="h1"
          text="Plano de saúde"
          className="mx-auto max-w-xl text-center text-[30px] font-light text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-12">
        <BlurWords
          as="h2"
          text="Algumas das nossas redes credenciadas"
          className="text-center text-[24px] text-navy sm:text-[30px]"
        />

        <div className="mt-14">
          <ImageStrip images={assets.planoDeSaude.map((l) => ({ src: l.src, alt: l.alt }))} height={96} />
        </div>

        <div className="mt-16 flex justify-center">
          <WhatsAppButton>Quero cuidar da minha saúde hoje</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
