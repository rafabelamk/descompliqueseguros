"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { assets } from "@/lib/assets";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="focus-ring flex items-center gap-3">
          <Image
            src={assets.logo}
            alt={site.name}
            width={140}
            height={80}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-text/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppButton />
        </nav>

        <button
          type="button"
          className="focus-ring flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-7 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-7 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-7 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 py-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-3 text-base font-medium text-text hover:bg-sand"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2">
            <WhatsAppButton className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
