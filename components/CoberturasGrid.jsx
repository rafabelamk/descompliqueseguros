"use client";

import { motion } from "framer-motion";

export default function CoberturasGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: (i % 3) * 0.06, duration: 0.4 }}
          className="card p-8"
        >
          <span className="text-orange">{item.icon}</span>
          <h3 className="mt-4 text-[18px] text-navy">{item.title}</h3>
          <p className="mt-2 text-sm font-light leading-relaxed text-black/60">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
