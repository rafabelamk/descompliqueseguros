"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PlanoDeSaudeGrid({ logos }) {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
      {logos.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="card relative flex aspect-[3/1] items-center justify-center p-6"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="(min-width: 640px) 25vw, 45vw"
            className="object-contain p-6"
          />
        </motion.div>
      ))}
    </div>
  );
}
