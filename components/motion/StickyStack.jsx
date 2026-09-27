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
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="card min-h-[220px] p-8 shadow-[0_2px_40px_rgba(38,50,108,0.08)] sm:p-10"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
              {typeof item.icon === "string" ? (
                <div className="relative h-7 w-7">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
              ) : (
                item.icon
              )}
            </div>
            <div>
              <h3 className="text-[22px] font-medium text-orange">{item.title}</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="space-y-3">
              {item.body.map((paragraph, pi) => (
                <p key={pi} className="text-sm font-light leading-relaxed text-black/60">
                  {paragraph}
                </p>
              ))}
            </div>
            {item.bullets && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-black/70">
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
