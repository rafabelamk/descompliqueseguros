"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlurWords from "./BlurWords";

// M5 — cabeçalho com ícone + título + contagem + chevron; abre um grid
// de cards brancos com transição de altura de 0.3s.
export default function AccordionCategoria({
  icon,
  title,
  count,
  items,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring micro-transition flex w-full items-center justify-between gap-4 border-t border-line py-7 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="text-ink">{icon}</span>
          <span className="text-[24px] font-semibold tracking-[-0.02em] text-ink">{title}</span>
        </span>
        <span className="flex items-center gap-3 text-black/50">
          <span className="text-[13px]">
            {count} {count === 1 ? "produto" : "produtos"}
          </span>
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
          >
            <path d="M7 10l5 5 5-5z" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid items-start gap-6 pb-10 sm:grid-cols-2">
              {items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="micro-transition card block p-8 hover:-translate-y-0.5"
                >
                  <span className="text-accent">{item.icon}</span>
                  <h3 className="mt-4 text-[21px] leading-[1.2] tracking-[-0.02em] text-ink">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-base text-muted">{item.description}</p>
                  )}
                  <span className="micro-cta mt-4 inline-block">
                    {item.cta ?? "Saiba mais"}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
