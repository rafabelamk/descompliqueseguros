import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import StickyStack from "@/components/motion/StickyStack";
import WhatsAppButton from "@/components/WhatsAppButton";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "O que é seguro de vida",
};

// NOTA: no site original em Wix, os parágrafos de "Como funciona" e
// "Como contrato" já vinham com o mesmo texto (aparenta ser um erro de
// preenchimento do próprio site antigo). Foram migrados fielmente aqui,
// mas vale revisar o texto de "Como contrato" com o cliente.
const sections = [
  {
    icon: assets.seguroDeVida.oQueE,
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
    icon: assets.seguroDeVida.comoFunciona,
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
    icon: assets.seguroDeVida.comoContrato,
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
    icon: assets.seguroDeVida.precoDeUmCafe,
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
      <ImageHero src={assets.sobreNos[2]} alt="Seguro de vida" tone="navy">
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
