"use client";

import { motion } from "framer-motion";

/**
 * M1 — cada palavra entra com blur(4px→0) + opacity 0→1 + y 12→0,
 * em stagger de 0.04s, disparado uma vez ao entrar na viewport.
 * Passe `bold` com as palavras (sem pontuação) que devem sair em peso 500.
 */
export default function BlurWords({ text, bold = [], as = "span", className = "" }) {
  const words = text.split(" ");
  const Wrapper = motion[as] ?? motion.span;

  return (
    <Wrapper
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {words.map((word, i) => {
        const bare = word.replace(/[.,!?:;]/g, "");
        const isBold = bold.includes(bare);
        return (
          <motion.span
            key={i}
            className={`inline-block ${isBold ? "font-medium" : "font-light"}`}
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </Wrapper>
  );
}
