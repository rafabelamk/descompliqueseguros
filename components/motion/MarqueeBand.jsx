"use client";

import { motion } from "framer-motion";

// M9 — 2 linhas gigantes em uppercase, opacidade baixa, deslizando devagar
// em sentidos opostos (efeito decorativo entre seções).
export default function MarqueeBand({ text = "DESCOMPLIQUE SEGUROS •" }) {
  const line = `${text} `.repeat(4);

  return (
    <div className="select-none overflow-hidden py-2">
      <motion.p
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="whitespace-nowrap text-[56px] font-medium uppercase leading-none text-black/10 sm:text-[72px]"
      >
        {line}
        {line}
      </motion.p>
      <motion.p
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        className="mt-1 whitespace-nowrap text-[56px] font-medium uppercase leading-none text-black/10 sm:text-[72px]"
      >
        {line}
        {line}
      </motion.p>
    </div>
  );
}
