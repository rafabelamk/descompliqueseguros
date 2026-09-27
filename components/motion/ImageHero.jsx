"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// M10 (adaptado) — hero CONTIDO (não full-bleed), com bordas arredondadas,
// no lugar do vídeo do site de referência (não temos vídeo institucional).
// Ficou num container menor propositalmente: as fotos reais migradas do
// Wix não têm resolução pra cobrir a tela inteira sem pixelizar.
export default function ImageHero({ src, alt, tone = "navy", children }) {
  const overlay =
    tone === "navy"
      ? "bg-navy/75"
      : tone === "orange"
      ? "bg-orange/75"
      : "bg-navy-deep/70";

  return (
    <section className="mx-auto max-w-content px-6 pb-16 pt-28 lg:px-10 lg:pt-36">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card sm:aspect-[21/9]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
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
