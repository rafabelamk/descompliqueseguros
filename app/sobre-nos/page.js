import Image from "next/image";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Sobre nós",
};

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
      <PageHero title="Sobre nós" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {assets.sobreNos.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden">
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

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="space-y-16">
          {highlights.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl text-ink">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ink/15 pt-10">
          <WhatsAppButton>Solicite uma cotação gratuita aqui</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
