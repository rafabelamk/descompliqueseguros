import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/lib/site";
import { assets } from "@/lib/assets";
import { IconFacebook, IconInstagram, IconLinkedIn } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface px-6 pb-10 pt-12 text-ink lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image src={assets.logo} alt={site.name} width={200} height={114} className="h-16 w-auto" />

          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring micro-transition inline-flex min-h-[40px] items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white hover:brightness-110"
          >
            Fale conosco
          </a>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold text-ink">
              Navegação
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring micro-transition text-[14px] text-black/70 hover:text-ink hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-ink">
              Contatos
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${contact.email}`} className="focus-ring micro-transition text-[14px] text-black/70 hover:text-ink hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="focus-ring micro-transition text-[14px] text-black/70 hover:text-ink hover:underline">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring micro-transition text-[14px] text-black/70 hover:text-ink hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-ink">
              Redes sociais
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-ring micro-transition text-black/60 hover:text-ink"
              >
                <IconFacebook width={22} height={22} />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="focus-ring micro-transition text-black/60 hover:text-ink"
              >
                <IconInstagram width={22} height={22} />
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring micro-transition text-black/60 hover:text-ink"
              >
                <IconLinkedIn width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-muted">
          © {year} {site.legalName} — todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
