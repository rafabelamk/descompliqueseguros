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
      "Seguro de vida é sinônimo de proteção financeira.",
      "Diante de alguns imprevistos – como morte, acidente ou uma doença grave – o planejamento financeiro de toda a família pode se desequilibrar. Imagine se você não tivesse nenhuma renda hoje, qual seria o impacto na sua vida? E na de seus familiares?",
      "O seguro existe justamente para auxiliar nos momentos difíceis em que você, ou seus dependentes, podem precisar de dinheiro para manter sua qualidade de vida e proteger seu patrimônio.",
    ],
  },
  {
    icon: assets.seguroDeVida.comoFunciona,
    title: "Como funciona",
    body: [
      "É simples. Caso o imprevisto coberto pelo seguro aconteça, você (ou seu beneficiário) deve entrar em contato com a seguradora para comunicar o ocorrido e enviar os documentos necessários.",
      "O valor contratado – também chamado de capital segurado – será pago assim que a análise da documentação for concluída e aprovada. Para facilitar a solicitação de benefício, é recomendado avisar à sua família ou aos seus beneficiários onde estão guardados os documentos do seguro, como a apólice.",
    ],
  },
  {
    icon: assets.seguroDeVida.comoContrato,
    title: "Como contrato",
    body: [
      "Caso o imprevisto coberto pelo seguro aconteça, você (ou seu beneficiário) deve entrar em contato com a seguradora para comunicar o ocorrido e enviar os documentos necessários.",
      "O valor contratado – também chamado de capital segurado – será pago assim que a análise da documentação for concluída e aprovada. Para facilitar a solicitação de benefício, é recomendado avisar à sua família ou aos seus beneficiários onde estão guardados os documentos do seguro, como a apólice.",
    ],
  },
  {
    icon: assets.seguroDeVida.precoDeUmCafe,
    title: "Preço de um café",
    body: [
      "O preço de um seguro de vida pode variar de acordo com as coberturas escolhidas, faixa etária do segurado, sexo, profissão, hábitos (como fumar), dentre outros fatores. Muitas pessoas pensam que uma solução desse tipo é cara.",
      "No entanto, algumas coberturas custam menos do que um cafezinho por dia. Você já pensou que pode gastar mais com o seu carro do que com o seu bem mais valioso: sua vida?",
    ],
  },
];

export default function OQueESeguroDeVidaPage() {
  return (
    <>
      <ImageHero src={assets.home.autoridadePhoto} alt="Seguro de vida" tone="navy">
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
