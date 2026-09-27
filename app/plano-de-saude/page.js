import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import WhatsAppButton from "@/components/WhatsAppButton";
import PlanoDeSaudeGrid from "@/components/PlanoDeSaudeGrid";
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

      <section className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-[160px]">
        <BlurWords
          as="h2"
          text="Algumas das nossas redes credenciadas"
          className="text-[24px] text-navy sm:text-[30px]"
        />

        <PlanoDeSaudeGrid logos={assets.planoDeSaude} />

        <div className="mt-16">
          <WhatsAppButton>Solicitar cotação</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
