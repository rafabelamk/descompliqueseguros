import Image from "next/image";
import BlurWords from "@/components/motion/BlurWords";
import CountUp from "@/components/motion/CountUp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconTrophy, IconMedal, IconTrendUp } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Sobre nós",
};

const highlights = [
  {
    title: "Reconhecimento",
    icon: <IconMedal />,
    body: [
      "O Diretor-presidente da Descomplique Corretora de Seguros, Jose Geiger, ficou entre os 50 melhores corretores de seguros do Brasil. A premiação ocorreu no evento Campeões de Vendas SulAmérica no Club Med Rio.",
    ],
  },
  {
    title: "Prêmios",
    icon: <IconTrophy />,
    body: [
      "A Descomplique Corretora de Seguros foi qualificada para o Troféu Top Empreendedor, em cerimônia no Tivoli São Paulo Moffarej, e teve uma página dedicada a ela na Revista Top of Business, em edição especial com presença de autoridades e personalidades brasileiras.",
      "O prêmio reconhece empresas que se destacam por tradição no mercado, inovação e responsabilidade social.",
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
      <section className="mx-auto max-w-content px-6 pb-4 pt-24 text-center lg:px-10 lg:pt-28">
        <BlurWords
          as="h1"
          text="Sobre nós"
          className="text-[32px] font-light text-navy sm:text-[48px]"
        />
      </section>

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

      <section className="px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-content grid-cols-3 gap-4 sm:gap-6">
          <div className="card flex flex-col items-center justify-center p-6 text-center sm:p-8">
            <p className="text-[36px] text-navy sm:text-[50px]">
              <CountUp to={30} prefix="+" />
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-black/50 sm:text-[12px]">
              anos de experiência
            </p>
          </div>
          <div className="card flex flex-col items-center justify-center p-6 text-center sm:p-8">
            <p className="text-[36px] text-navy sm:text-[50px]">
              <CountUp to={20} prefix="+" />
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-black/50 sm:text-[12px]">
              anos no mercado
            </p>
          </div>
          <div className="card flex flex-col items-center justify-center p-6 text-center sm:p-8">
            <p className="text-[36px] text-navy sm:text-[50px]">
              Top <CountUp to={50} />
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-black/50 sm:text-[12px]">
              corretores do Brasil
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-8 lg:px-10 lg:py-10">
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

        <div className="mt-16 flex justify-center border-t border-line pt-10">
          <WhatsAppButton>Solicite uma cotação gratuita aqui</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
