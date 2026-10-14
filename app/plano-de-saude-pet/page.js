import ProductIntro from "@/components/ProductIntro";
import CoberturasGrid from "@/components/CoberturasGrid";
import Image from "next/image";
import FaqList from "@/components/FaqList";
import PetPlans from "@/components/PetPlans";
import PetLeadForm from "@/components/PetLeadForm";
import BlurWords from "@/components/motion/BlurWords";
import Reveal from "@/components/motion/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  IconHeart,
  IconShield,
  IconCoins,
  IconDocument,
  IconInfo,
  IconPaw,
} from "@/components/icons";
import { contact } from "@/lib/site";

export const metadata = {
  title: "Plano de saúde para Pet",
  description:
    "Plano de saúde para cães e gatos com mensalidade fixa, rede credenciada e atendimento sem burocracia. Fale com a Descomplique Seguros.",
};

const whatsappMessage = "Quero saber mais sobre o plano de saúde para pet!";

const vantagens = [
  {
    icon: <IconHeart />,
    title: "O mesmo preço para todo pet",
    description:
      "A mensalidade e a cobertura não mudam por raça, idade, porte ou condição de saúde do seu cão ou gato.",
  },
  {
    icon: <IconShield />,
    title: "Precisou, usou",
    description:
      "Para usar o plano, não é preciso pedir autorização nem passar por burocracia no atendimento.",
  },
  {
    icon: <IconCoins />,
    title: "Desconto para mais de um pet",
    description:
      "Quanto mais pets no plano, maior o desconto na mensalidade dos adicionais, conforme as regras vigentes na contratação.",
  },
  {
    icon: <IconDocument />,
    title: "Contratação 100% online",
    description:
      "Você contrata pelo site ou pelo app, recebe o contrato por e-mail e acompanha tudo no Espaço do Cliente.",
  },
  {
    icon: <IconInfo />,
    title: "Cancele quando quiser",
    description:
      "Se o plano deixar de fazer sentido para você, é possível cancelar quando quiser.",
  },
  {
    icon: <IconPaw />,
    title: "Clube de benefícios",
    description:
      "Quem adere ao clube ganha descontos em medicamentos e produtos, frete grátis e uma sessão mensal de teleorientação veterinária, conforme as regras promocionais.",
  },
];

const passos = [
  {
    icon: <span className="text-[32px] font-semibold leading-none tracking-[-0.03em]">1</span>,
    title: "Cadastro online",
    description:
      "Contrate pelo site ou pelo app. A contagem das carências começa a partir da contratação.",
  },
  {
    icon: <span className="text-[32px] font-semibold leading-none tracking-[-0.03em]">2</span>,
    title: "Acesso à conta",
    description:
      "Você recebe o contrato por e-mail e o acesso ao Espaço do Cliente para acompanhar o plano.",
  },
  {
    icon: <span className="text-[32px] font-semibold leading-none tracking-[-0.03em]">3</span>,
    title: "Microchipagem",
    description:
      "Agende a microchipagem gratuita. Depois dela, o pet já pode usar os serviços do plano.",
  },
  {
    icon: <span className="text-[32px] font-semibold leading-none tracking-[-0.03em]">4</span>,
    title: "Pronto para usar",
    description:
      "Sem burocracia: a clínica usa o número do microchip para consultar o histórico do seu pet.",
  },
];

const carencias = [
  {
    days: "45",
    text: "Vacinas, procedimentos clínicos e exames laboratoriais simples.",
  },
  {
    days: "60",
    text: "Exames complexos e consultas com especialistas.",
  },
  {
    days: "120",
    text: "Cirurgias, internação e anestesias.",
  },
];

const faq = [
  {
    q: "Como funciona o plano de saúde pet?",
    a: [
      "É um plano de saúde para cães e gatos: você paga uma mensalidade fixa e uma pequena coparticipação nos procedimentos que usar.",
      "O pet é atendido na rede credenciada, que reúne clínicas, hospitais veterinários, laboratórios e pet shops, para consultas, exames, vacinas e até cirurgias. Basta cadastrar o pet e escolher o plano que combina com as suas necessidades.",
    ],
  },
  {
    q: "Como funciona a coparticipação?",
    a: [
      "A coparticipação é uma taxa pequena, cobrada na utilização de alguns procedimentos. É ela que ajuda a manter a mensalidade mais baixa.",
      "A coparticipação de exames e de anestesias é cobrada automaticamente depois do procedimento, na forma de pagamento cadastrada. A dos demais procedimentos é paga direto à clínica ou ao veterinário, na hora do atendimento. Os valores ficam nas tabelas de cobertura, no site ou no Espaço do Cliente.",
    ],
  },
  {
    q: "Tenho desconto se incluir mais de um pet?",
    a: [
      "Sim. O desconto é progressivo e aplicado na mensalidade de cada pet adicional: o primeiro pet paga o valor cheio, o segundo tem 10% de desconto, o terceiro 20% e do quarto em diante 30%.",
      "Os descontos são calculados automaticamente na contratação.",
    ],
  },
  {
    q: "Como funciona a microchipagem?",
    a: [
      "O microchip tem o tamanho aproximado de um grão de arroz e é aplicado sob a pele, na região da nuca. Funciona como um RG eletrônico: se o pet se perder, pode ser identificado pela leitura do chip. Ele não é um localizador.",
      "A aplicação é como uma injeção comum, sem anestesia nem sedação. No dia, a clínica só pede o seu CPF para conferir o cadastro.",
    ],
  },
  {
    q: "E se o meu pet já tiver microchip?",
    a: [
      "Nesse caso, não é preciso aplicar de novo. Basta informar o número do chip no Espaço do Cliente ou falar com a equipe para registrar, e as carências começam a contar.",
    ],
  },
  {
    q: "Onde vejo o que já usei no plano?",
    a: [
      "No Espaço do Cliente, com e-mail e senha, você acessa o prontuário online do seu pet e vê quais procedimentos ainda pode realizar.",
    ],
  },
  {
    q: "Quais são as formas de pagamento?",
    a: [
      "A forma mais usual é o cartão de crédito Visa ou Mastercard, na modalidade mensal ou anual. Na mensal, o limite do cartão não é alterado: basta ter o valor disponível no dia da cobrança. Na anual, o valor total é cobrado na contratação.",
    ],
  },
];

export default function PlanoDeSaudePetPage() {
  return (
    <>
      <ProductIntro
        eyebrow="Plano de saúde para Pet"
        title="Saúde de verdade para o seu cão ou gato."
        subhead="Consultas, exames, vacinas e cirurgias na rede credenciada, com mensalidade fixa e coparticipação em alguns procedimentos."
        ctaLabel="Quero proteger meu pet"
        ctaHref={contact.whatsappLink(whatsappMessage)}
        ctaExternal
      />

      <Reveal delay={0.1} className="mx-auto max-w-content px-6 pt-4 lg:px-10">
        <Image
          src="/plano-pet-hero.png"
          alt="Cão e gato felizes"
          width={657}
          height={400}
          priority
          sizes="(min-width: 640px) 520px, 90vw"
          className="mx-auto h-auto w-full max-w-[520px]"
        />
      </Reveal>

      <PetPlans />

      <section id="vantagens" className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
        <BlurWords
          as="h2"
          text="Por que ter um plano de saúde para o seu pet"
          className="mx-auto block max-w-3xl text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
        />
        <div className="mt-12">
          <CoberturasGrid items={vantagens} />
        </div>
      </section>

      <section id="como-funciona" className="bg-surface px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-content">
          <BlurWords
            as="h2"
            text="Como funciona"
            className="block text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
          />
          <div className="mt-12">
            <CoberturasGrid items={passos} columns={4} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
        <BlurWords
          as="h2"
          text="Carências"
          className="block text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
        />
        <Reveal
          as="p"
          className="mx-auto mt-4 max-w-2xl text-center text-[19px] leading-snug text-muted"
        >
          O prazo de carência varia conforme o tipo de procedimento e começa a
          contar a partir da contratação.
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {carencias.map((item, i) => (
            <Reveal key={item.days} delay={i * 0.08} className="card p-8 text-center sm:p-9">
              <p className="text-[64px] font-bold leading-none tracking-[-0.045em] text-ink">
                {item.days}
              </p>
              <p className="mt-1 text-[17px] font-semibold text-ink">dias</p>
              <p className="mt-4 text-base leading-normal text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal
          as="p"
          className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-muted"
        >
          Às vezes há promoções com carência zerada para consulta com clínico
          geral e vacinas. Depois da contratação, também é possível antecipar o
          uso de alguns procedimentos pelo Espaço do Cliente, conforme a
          disponibilidade. A antecipação vale só para aquele procedimento, e
          não para o grupo inteiro.
        </Reveal>
      </section>

      <section className="bg-surface px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-content text-center">
          <BlurWords
            as="h2"
            text="Rede credenciada perto de você"
            className="mx-auto block max-w-3xl text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
          />
          <Reveal
            as="p"
            className="mx-auto mt-5 max-w-2xl text-[19px] leading-snug text-muted"
          >
            Clínicas, hospitais veterinários, laboratórios e pet shops para
            consultas, exames, vacinas e cirurgias. A disponibilidade varia por
            região e por unidade, então vale conferir antes de contratar.
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex justify-center">
            <WhatsAppButton message="Quero saber se o plano de saúde pet tem rede na minha região!">
              Ver rede na minha região
            </WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
        <BlurWords
          as="h2"
          text="Dúvidas frequentes"
          className="block text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
        />
        <Reveal className="mt-12">
          <FaqList items={faq} />
        </Reveal>
      </section>

      <section id="contato" className="mx-auto max-w-content px-6 pb-16 lg:px-10 lg:pb-24">
        <Reveal className="grid gap-10 rounded-[28px] bg-surface p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink">
              Vamos encontrar o plano ideal para o seu pet?
            </h2>
            <p className="mt-5 max-w-md text-[19px] leading-snug text-muted">
              Preencha seus dados e continue a conversa pelo WhatsApp. A
              mensagem já leva o plano de interesse e o tipo de pet, para
              agilizar o atendimento.
            </p>
            <p className="mt-8 max-w-md text-[13px] leading-relaxed text-muted">
              Valores, carências e coberturas seguem o regulamento do plano
              vigente no momento da contratação.
            </p>
          </div>
          <PetLeadForm />
        </Reveal>
      </section>
    </>
  );
}
