"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

const cols = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function CoberturasGrid({ items, columns = 3 }) {
  return (
    <div className={`grid gap-4 ${cols[columns] ?? cols[3]}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: (i % columns) * 0.08, duration: 0.9, ease }}
          className="card p-8 sm:p-9"
        >
          <span className="text-accent">{item.icon}</span>
          <h3 className="mt-5 text-[21px] leading-[1.2] tracking-[-0.02em] text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-base leading-normal text-muted">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
