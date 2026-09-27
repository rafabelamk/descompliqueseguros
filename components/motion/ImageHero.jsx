"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// M10 (adaptado) — hero full-bleed com uma foto real da Descomplique
// no lugar do vídeo do site de referência (não temos vídeo institucional).
// O leve zoom contínuo (~20s) substitui o "movimento" que o vídeo dava.
export default function ImageHero({ src, alt, tone = "navy", children }) {
  const overlay =
    tone === "navy"
      ? "bg-navy/70"
      : tone === "orange"
      ? "bg-orange/70"
      : "bg-navy-deep/60";

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 mx-auto w-full max-w-content px-6 pt-16 lg:px-10">
        {children}
      </div>
    </section>
  );
}
