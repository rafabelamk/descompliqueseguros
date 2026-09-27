"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// M7 — cada card é sticky, entra com opacity 0→1 e y 150→0 conforme o scroll.
export default function StickyStack({ items }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => (
        <div key={item.title} className="sticky" style={{ top: `${96 + i * 16}px` }}>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="card min-h-[220px] p-8 shadow-[0_2px_40px_rgba(38,50,108,0.08)] sm:p-10"
          >
            <div className="flex gap-6">
              <div className="relative h-12 w-12 shrink-0">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-[22px] font-medium text-orange">{item.title}</h3>
                <div className="mt-3 space-y-3">
                  {item.body.map((paragraph, pi) => (
                    <p key={pi} className="text-sm font-light leading-relaxed text-black/60">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
