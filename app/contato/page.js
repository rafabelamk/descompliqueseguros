import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact } from "@/lib/site";

export const metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero title="Fique seguro hoje" />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-lg leading-relaxed text-text-muted">
          Em 2022, com 612,9 mil acidentes e 2.538 óbitos registrados para
          pessoas com carteira assinada, a mortalidade no mercado de trabalho
          formal voltou a apresentar a maior taxa dos últimos dez anos: 7
          notificações a cada 100 mil vínculos empregatícios, em média.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-muted">
          Não se preocupe! Temos a solução pra você. Saiba mais hoje.
        </p>

        <div className="mt-10">
          <WhatsAppButton>Fique seguro hoje</WhatsAppButton>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-3">
          <div>
            <h2 className="font-serif text-lg italic text-gold">E-mail</h2>
            <a
              href={`mailto:${contact.email}`}
              className="focus-ring mt-2 block text-lg text-ink hover:text-gold"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-lg italic text-gold">Telefone</h2>
            <a
              href={contact.phoneHref}
              className="focus-ring mt-2 block text-lg text-ink hover:text-gold"
            >
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-lg italic text-gold">WhatsApp</h2>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 block text-lg text-ink hover:text-gold"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
