"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Faixa de imagens em containers pequenos e padronizados: altura fixa,
// largura livre (object-contain preserva a proporção real de cada
// imagem, sem esticar nem cortar de forma estranha).
export default function ImageStrip({ images, height = 96, grayscale = false }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className={`card relative flex items-center justify-center p-4 ${grayscale ? "grayscale" : ""}`}
          style={{ height }}
        >
          <div className="relative h-full" style={{ width: height * 1.6 }}>
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
