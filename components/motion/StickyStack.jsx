"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Cada card entra com fade + leve slide ao rolar até ele (sem "sticky":
// isso estava criando espaços vazios grandes no scroll).
export default function StickyStack({ items }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="card min-h-[220px] p-8 sm:p-10"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              {typeof item.icon === "string" ? (
                <div className="relative h-7 w-7">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
              ) : (
                item.icon
              )}
            </div>
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="space-y-3">
              {item.body.map((paragraph, pi) => (
                <p key={pi} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            {item.bullets && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-base leading-relaxed text-black/70">
                    <span className="shrink-0">{bullet.emoji}</span>
                    <span>{bullet.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
