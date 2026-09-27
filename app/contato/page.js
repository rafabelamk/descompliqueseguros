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
          className="text-[30px] font-light text-white sm:text-[42px]"
        />
      </ImageHero>

      <section className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[16px] font-light leading-relaxed text-black/70">
          Em 2022, com 612,9 mil acidentes e 2.538 óbitos registrados para
          pessoas com carteira assinada, a mortalidade no mercado de
          trabalho formal voltou a apresentar a maior taxa dos últimos dez
          anos: 7 notificações a cada 100 mil vínculos empregatícios, em
          média.
        </p>
        <p className="mt-4 text-[16px] font-light text-black/70">
          Não se preocupe! Temos a solução pra você.
        </p>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-[160px]">
        <ContactForm />

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-orange">E-mail</p>
            <a href={`mailto:${contact.email}`} className="focus-ring mt-2 block text-lg text-navy hover:opacity-70">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-orange">Telefone</p>
            <a href={contact.phoneHref} className="focus-ring mt-2 block text-lg text-navy hover:opacity-70">
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="eyebrow text-orange">WhatsApp</p>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 block text-lg text-navy hover:opacity-70"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
