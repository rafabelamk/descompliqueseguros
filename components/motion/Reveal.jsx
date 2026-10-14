"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

// Entrada suave ao rolar: fade + subida curta, uma vez só. É o movimento
// padrão do site (no lugar do blur palavra por palavra).
export default function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  amount = 0.25,
  className = "",
  children,
  ...rest
}) {
  const Wrapper = motion[as] ?? motion.div;
  return (
    <Wrapper
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
