import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/lib/site";
import { assets } from "@/lib/assets";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-text-inverse">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={assets.logo}
              alt={site.name}
              width={140}
              height={80}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-inverse/70">
              {site.legalName} — mais de 20 anos protegendo pessoas e famílias
              em São Paulo.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-inverse/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg">Contatos</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-inverse/70">
              <li>
                <a href={`mailto:${contact.email}`} className="focus-ring hover:text-gold">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="focus-ring hover:text-gold">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg">Nos siga para novidades</h3>
            <div className="mt-4 flex gap-4">
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-ring"
              >
                <Image
                  src={assets.social.facebookIcon}
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="h-9 w-9 rounded-full"
                />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="focus-ring"
              >
                <Image
                  src={assets.social.instagramIcon}
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="h-9 w-9 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-text-inverse/50">
          © {year} Todos os direitos reservados — {site.name}
        </div>
      </div>
    </footer>
  );
}
