import Image from "next/image";
import PhotoBanner from "@/components/PhotoBanner";
import CountUp from "@/components/motion/CountUp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconTrophy, IconMedal, IconTrendUp } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Sobre nós",
};

const highlights = [
  {
    title: "Prêmios",
    icon: <IconTrophy />,
    body: [
      "A Descomplique Corretora de Seguros foi qualificada para receber o Troféu Top Empreendedor, uma das mais importantes homenagens empresariais, em cerimônia realizada no Tivoli São Paulo Moffarej.",
      "Com presença de autoridades brasileiras, personalidades, na ocasião, a Revista Top of Business publicou matéria de uma página sobre a Descomplique Corretora de Seguros na Revista Top Of Business em sua edição especial.",
      "Uma homenagem da Revista Top of Business às empresas brasileiras que contribuíram para o desenvolvimento do país. Este reconhecimento, merecido e até esperado pelas empresas e profissionais, deve-se à constante luta para permanecer no mercado tão competitivo, seja no segmento comercial, industrial, de prestação de serviços, profissionais liberais, inclusive jornalístico. Atenta ao que ocorre no mundo business, a Diretoria da Revista Top of Business selecionou os homenageados seguindo os seguintes critérios: participação em feiras nacionais e internacionais, congressos, desenvolvimento de produtos inovadores, tradição no mercado, prêmios recebidos, responsabilidade social e certificados de qualidades adquiridos no decorrer de sua existência.",
    ],
  },
  {
    title: "Reconhecimento",
    icon: <IconMedal />,
    body: [
      "O Diretor-presidente da Descomplique Corretora de Seguros, Jose Geiger, ficou entre os 50 melhores corretores de seguros do Brasil. A premiação ocorreu no evento Campeões de Vendas SulAmérica no Club Med Rio.",
    ],
  },
  {
    title: "Experiência",
    icon: <IconTrendUp />,
    body: [
      "Há mais de 20 anos no mercado de seguros atendendo empresas como Petrobrás, Jaraguá Equipamentos, Microservice, Usina Itaiquara entre outras.",
    ],
  },
];

export default function SobreNosPage() {
  return (
    <>
      <PhotoBanner src={assets.sobreNos[3]} alt="Descomplique Seguros" title="Sobre nós" />

      <section className="mx-auto max-w-content px-6 pb-10 pt-16 lg:px-10">
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

      <section className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-[160px]">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((section) => (
            <div key={section.title} className="card p-8">
              <h2 className="flex items-center gap-2.5 text-[22px] text-navy">
                <span className="text-orange">{section.icon}</span>
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm font-light leading-relaxed text-black/70">
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
