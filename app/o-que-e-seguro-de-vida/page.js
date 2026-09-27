import Image from "next/image";
import PageHero from "@/components/PageHero";
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
      <PageHero title="O que é seguro de vida" />

      <section className="mx-auto max-w-3xl divide-y divide-ink/10 px-6 py-16">
        {sections.map((section) => (
          <div key={section.title} className="flex gap-6 py-10 first:pt-0 last:pb-0">
            <div className="relative h-14 w-14 shrink-0">
              <Image src={section.icon} alt="" fill className="object-contain" />
            </div>
            <div>
              <h2 className="font-serif text-2xl text-ink">{section.title}</h2>
              <div className="mt-3 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-10">
          <WhatsAppButton>Solicitar cotação</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
