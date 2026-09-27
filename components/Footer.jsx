import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/lib/site";
import { assets } from "@/lib/assets";
import { IconFacebook, IconInstagram, IconLinkedIn } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg px-6 pb-10 pt-10 text-navy lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image src={assets.logo} alt={site.name} width={200} height={114} className="h-20 w-auto" />

          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring micro-transition inline-flex items-center gap-2 rounded-[6px] border border-navy/60 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.1em] hover:opacity-70"
          >
            Fale conosco
          </a>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-[12px] font-light uppercase tracking-[0.1em] text-black/50">
              Navegação
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring micro-transition text-base font-medium tracking-[0.02em] hover:opacity-70">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-light uppercase tracking-[0.1em] text-black/50">
              Contatos
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${contact.email}`} className="focus-ring micro-transition text-base font-medium tracking-[0.02em] hover:opacity-70">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="focus-ring micro-transition text-base font-medium tracking-[0.02em] hover:opacity-70">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring micro-transition text-base font-medium tracking-[0.02em] hover:opacity-70"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-light uppercase tracking-[0.1em] text-black/50">
              Redes sociais
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-ring micro-transition text-navy hover:opacity-70"
              >
                <IconFacebook width={22} height={22} />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="focus-ring micro-transition text-navy hover:opacity-70"
              >
                <IconInstagram width={22} height={22} />
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring micro-transition text-navy hover:opacity-70"
              >
                <IconLinkedIn width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-black/50">
          © {year} {site.legalName} — todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
