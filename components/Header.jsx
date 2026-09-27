"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site, contact } from "@/lib/site";
import { assets } from "@/lib/assets";

// Cabeçalho fixo, sempre visível (sem esconder ao rolar), navy sobre
// fundo claro semi-opaco com leve blur.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line/60 bg-bg/90 text-navy backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6 lg:px-10">
        <Link href="/" className="focus-ring flex items-center gap-2">
          <Image src={assets.logo} alt={site.name} width={120} height={68} className="h-9 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring micro-transition text-[12px] font-light uppercase tracking-[0.1em] hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="focus-ring micro-transition hidden h-[30px] w-[30px] items-center justify-center rounded-[6px] border border-navy/60 hover:opacity-70 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.85.505 3.66 1.463 5.24L2.058 22l4.897-1.384A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.198a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-2.905.822.81-2.899-.194-.305A8.196 8.196 0 1 1 20.196 12a8.207 8.207 0 0 1-8.195 8.198z" />
            </svg>
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex flex-col gap-1.5 lg:hidden"
          >
            <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/40 bg-bg px-6 py-8 text-navy lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring py-2 text-2xl font-extralight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
