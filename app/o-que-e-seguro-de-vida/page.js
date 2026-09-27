import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import StickyStack from "@/components/motion/StickyStack";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconInfo, IconGears, IconDocument, IconCoffee } from "@/components/icons";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "O que é seguro de vida",
};

const sections = [
  {
    icon: <IconInfo />,
    title: "O que é",
    body: [
      "Seguro de vida é sinônimo de proteção financeira. Imagine se você não tivesse nenhuma renda hoje — qual seria o impacto na sua vida e na de seus familiares?",
    ],
    bullets: [
      { emoji: "🛡️", text: "Proteção financeira para você e sua família" },
      { emoji: "⚠️", text: "Cobre imprevistos como morte, acidente ou doença grave" },
      { emoji: "💰", text: "Garante renda caso você não possa mais trabalhar" },
      { emoji: "🏡", text: "Preserva seu patrimônio e a qualidade de vida dos seus dependentes" },
    ],
  },
  {
    icon: <IconGears />,
    title: "Como funciona",
    body: ["É simples. Veja o passo a passo caso o imprevisto coberto pelo seguro aconteça:"],
    bullets: [
      { emoji: "📞", text: "Você (ou seu beneficiário) aciona a seguradora" },
      { emoji: "📋", text: "Envia a documentação necessária sobre o ocorrido" },
      { emoji: "✅", text: "Após a análise e aprovação, o capital segurado é pago" },
      { emoji: "🗂️", text: "Vale avisar a família onde fica guardada a apólice" },
    ],
  },
  {
    icon: <IconDocument />,
    title: "Como contrato",
    body: ["Caso o imprevisto coberto pelo seguro aconteça, o processo de acionamento é:"],
    bullets: [
      { emoji: "📞", text: "Você (ou seu beneficiário) aciona a seguradora" },
      { emoji: "📋", text: "Envia a documentação necessária sobre o ocorrido" },
      { emoji: "✅", text: "Após a análise e aprovação, o capital segurado é pago" },
      { emoji: "🗂️", text: "Vale avisar a família onde fica guardada a apólice" },
    ],
  },
  {
    icon: <IconCoffee />,
    title: "Preço de um café",
    body: [
      "Muita gente pensa que um seguro de vida é caro — mas o custo varia bastante conforme o seu perfil.",
    ],
    bullets: [
      { emoji: "☕", text: "Algumas coberturas custam menos que um café por dia" },
      { emoji: "📊", text: "O valor varia por idade, sexo, profissão e hábitos (como fumar)" },
      { emoji: "🚗", text: "Você pode gastar mais com o carro do que protegendo a sua vida" },
    ],
  },
];

export default function OQueESeguroDeVidaPage() {
  return (
    <>
      <ImageHero src={assets.seguroDeVidaHero} alt="Seguro de vida" tone="navy">
        <BlurWords
          as="h1"
          text="O que é seguro de vida"
          className="mx-auto max-w-xl text-center text-[30px] font-light text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-2xl px-6 py-24 lg:py-[160px]">
        <StickyStack items={sections} />

        <div className="mt-16">
          <WhatsAppButton>Solicitar cotação</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
