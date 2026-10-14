import ImageHero from "@/components/motion/ImageHero";
import BlurWords from "@/components/motion/BlurWords";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/site";
import { assets } from "@/lib/assets";

export const metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return (
    <>
      <ImageHero src={assets.home.heroPhoto} alt="Descomplique Seguros" tone="navy">
        <BlurWords
          as="h1"
          text="Fique seguro hoje"
          className="text-[30px] text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[17px] leading-relaxed text-black/70">
          Em 2024, o INSS registrou cerca de 834 mil acidentes de trabalho no
          Brasil, 10,6% a mais que em 2023. Em 2025, foram 4,1 milhões de
          benefícios por incapacidade temporária, o maior número desde 2021.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-black/70">
          Um acidente ou um diagnóstico pode afastar você do trabalho. Seguro
          de vida é para ser usado em vida: com coberturas como invalidez por
          acidente, diárias por incapacidade temporária e doenças graves,
          conforme a apólice. Fale com a gente e faça uma simulação sem
          compromisso.
        </p>
        <p className="mt-4 text-[13px] text-muted">
          Fonte: Ministério da Previdência Social.
        </p>
      </section>

      <section className="px-6 py-12 lg:px-10 lg:py-12">
        <ContactForm />

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-line pt-10 sm:grid-cols-3">
          <div className="min-w-0">
            <p className="eyebrow text-accent">E-mail</p>
            <a href={`mailto:${contact.email}`} className="focus-ring mt-2 block break-words text-lg text-ink hover:opacity-70">
              {contact.email}
            </a>
          </div>
          <div className="min-w-0">
            <p className="eyebrow text-accent">Telefone</p>
            <a href={contact.phoneHref} className="focus-ring mt-2 block text-lg text-ink hover:opacity-70">
              {contact.phoneDisplay}
            </a>
          </div>
          <div className="min-w-0">
            <p className="eyebrow text-accent">WhatsApp</p>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 block text-lg text-ink hover:opacity-70"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
