"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.2, 0.7, 0.2, 1];

// Hero contido, com bordas arredondadas, no lugar do vídeo do site de
// referência (não temos vídeo institucional). A foto "assenta" (zoom
// de 1.08 para 1) quando a página abre, em vez do zoom infinito de antes.
export default function ImageHero({ src, alt, tone = "navy", children }) {
  const overlay =
    tone === "navy"
      ? "bg-black/45"
      : tone === "orange"
      ? "bg-accent/55"
      : "bg-black/55";

  return (
    <section className="mx-auto max-w-content px-6 pb-8 pt-24 lg:px-10 lg:pt-28">
      <div className="relative h-[50vh] max-h-[460px] min-h-[280px] w-full overflow-hidden rounded-[28px]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className={`absolute inset-0 ${overlay}`} />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center sm:px-16">
          {children}
        </div>
      </div>
    </section>
  );
}
