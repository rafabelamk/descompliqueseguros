"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// M6 — 3 fotos full-bleed empilhadas; conforme o scroll, crossfade de
// foto e texto, e o item ativo acende em laranja (inativos ~50%).
export default function StickyMVV({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const n = items.length;

  return (
    <section ref={ref} style={{ height: `${n * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((item, i) => {
          const start = i / n;
          const end = (i + 1) / n;
          const mid = (start + end) / 2;
          const opacity = useTransform(
            scrollYProgress,
            [start, start + (end - start) * 0.15, end - (end - start) * 0.15, end],
            [i === 0 ? 1 : 0, 1, 1, i === n - 1 ? 1 : 0]
          );

          return (
            <motion.div key={item.label} style={{ opacity }} className="absolute inset-0">
              <Image
                src={item.photo}
                alt={item.label}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-deep/55" />
            </motion.div>
          );
        })}

        <div className="relative z-10 mx-auto flex h-full max-w-content items-end px-6 pb-24 lg:px-10">
          <div className="max-w-lg">
            <p className="eyebrow text-white/70">Nossa trajetória</p>
            {items.map((item, i) => {
              const start = i / n;
              const end = (i + 1) / n;
              const textOpacity = useTransform(
                scrollYProgress,
                [start, start + (end - start) * 0.2, end - (end - start) * 0.2, end],
                [0, 1, 1, 0]
              );
              return (
                <motion.p
                  key={item.label}
                  style={{ opacity: textOpacity, position: i === 0 ? "relative" : "absolute" }}
                  className="mt-4 max-w-md text-2xl font-light text-white"
                >
                  {item.text}
                </motion.p>
              );
            })}
          </div>

          <div className="ml-auto hidden flex-col gap-3 sm:flex">
            {items.map((item, i) => {
              const start = i / n;
              const end = (i + 1) / n;
              const labelOpacity = useTransform(scrollYProgress, (v) =>
                v >= start && v < end ? 1 : 0.5
              );
              return (
                <motion.span
                  key={item.label}
                  className="eyebrow text-right text-orange"
                  style={{ opacity: labelOpacity }}
                >
                  {item.label}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
