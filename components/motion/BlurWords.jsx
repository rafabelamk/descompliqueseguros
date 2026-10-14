"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

/**
 * Título que entra com fade + subida suave ao aparecer na tela (uma vez).
 * Mantém o nome e as props antigas para não mexer nas páginas: `bold` ainda
 * destaca as palavras listadas (sem pontuação), agora em peso 700 contra
 * 500 do restante.
 */
export default function BlurWords({ text, bold = [], as = "span", className = "", delay = 0 }) {
  const Wrapper = motion[as] ?? motion.span;
  const words = text.split(" ");
  const hasEmphasis = bold.length > 0;

  return (
    <Wrapper
      className={`${as === "span" ? "inline-block" : ""} ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease, delay }}
    >
      {hasEmphasis
        ? words.map((word, i) => {
            const bare = word.replace(/[.,!?:;]/g, "");
            return (
              <span key={i} className={bold.includes(bare) ? "font-bold" : "font-medium"}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            );
          })
        : text}
    </Wrapper>
  );
}
