import Image from "next/image";
import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import StickyMVV from "@/components/motion/StickyMVV";
import CountUp from "@/components/motion/CountUp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Sobre nós",
};

const mvvItems = [
  {
    label: "Prêmios",
    photo: assets.sobreNos[0],
    text: "Qualificada para o Troféu Top Empreendedor, em cerimônia no Tivoli São Paulo Moffarej.",
  },
  {
    label: "Reconhecimento",
    photo: assets.sobreNos[1],
    text: "Jose Geiger entre os 50 melhores corretores de seguros do Brasil.",
  },
  {
    label: "Experiência",
    photo: assets.sobreNos[2],
    text: "Mais de 20 anos atendendo empresas como Petrobrás e Usina Itaiquara.",
  },
];

const highlights = [
  {
    title: "Prêmios",
    body: [
      "A Descomplique Corretora de Seguros foi qualificada para receber o Troféu Top Empreendedor, uma das mais importantes homenagens empresariais, em cerimônia realizada no Tivoli São Paulo Moffarej.",
      "Com presença de autoridades brasileiras, personalidades, na ocasião, a Revista Top of Business publicou matéria de uma página sobre a Descomplique Corretora de Seguros na Revista Top Of Business em sua edição especial.",
      "Uma homenagem da Revista Top of Business às empresas brasileiras que contribuíram para o desenvolvimento do país. Este reconhecimento, merecido e até esperado pelas empresas e profissionais, deve-se à constante luta para permanecer no mercado tão competitivo, seja no segmento comercial, industrial, de prestação de serviços, profissionais liberais, inclusive jornalístico. Atenta ao que ocorre no mundo business, a Diretoria da Revista Top of Business selecionou os homenageados seguindo os seguintes critérios: participação em feiras nacionais e internacionais, congressos, desenvolvimento de produtos inovadores, tradição no mercado, prêmios recebidos, responsabilidade social e certificados de qualidades adquiridos no decorrer de sua existência.",
    ],
  },
  {
    title: "Reconhecimento",
    body: [
      "O Diretor-presidente da Descomplique Corretora de Seguros, Jose Geiger, ficou entre os 50 melhores corretores de seguros do Brasil. A premiação ocorreu no evento Campeões de Vendas SulAmérica no Club Med Rio.",
    ],
  },
  {
    title: "Experiência",
    body: [
      "Há mais de 20 anos no mercado de seguros atendendo empresas como Petrobrás, Jaraguá Equipamentos, Microservice, Usina Itaiquara entre outras.",
    ],
  },
];

export default function SobreNosPage() {
  return (
    <>
      <ImageHero src={assets.sobreNos[3]} alt="Descomplique Seguros" tone="deep">
        <BlurWords
          as="h1"
          text="Sobre nós"
          className="text-[32px] font-light text-white sm:text-[48px]"
        />
      </ImageHero>

      <StickyMVV items={mvvItems} />

      <section className="px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="mx-auto grid max-w-content grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <p className="text-[44px] text-navy sm:text-[50px]">
              <CountUp to={30} prefix="+" />
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-black/50">
              anos de experiência
            </p>
          </div>
          <div className="text-center">
            <p className="text-[44px] text-navy sm:text-[50px]">
              <CountUp to={20} prefix="+" />
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-black/50">
              anos no mercado
            </p>
          </div>
          <div className="text-center">
            <p className="text-[44px] text-navy sm:text-[50px]">
              Top <CountUp to={50} />
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-black/50">
              corretores do Brasil
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-10 lg:px-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-card sm:grid-cols-4">
          {assets.sobreNos.map((src, i) => (
            <div key={src} className="relative aspect-[3/4]">
              <Image
                src={src}
                alt={`Descomplique Seguros — registro ${i + 1}`}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-[160px]">
        <div className="space-y-20">
          {highlights.map((section) => (
            <div key={section.title}>
              <BlurWords as="h2" text={section.title} className="text-[30px] text-navy" />
              <div className="mt-5 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-[18px] font-light leading-relaxed text-black/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <WhatsAppButton>Solicite uma cotação gratuita aqui</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
