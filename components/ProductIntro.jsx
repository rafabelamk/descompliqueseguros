"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlurWords from "@/components/motion/BlurWords";
import Reveal from "@/components/motion/Reveal";

const ease = [0.2, 0.7, 0.2, 1];

export default function ProductIntro({
  eyebrow,
  title,
  subhead,
  photo,
  ctaLabel = "Cotar agora",
  ctaHref = "#cotacao",
  ctaExternal = false,
}) {
  return (
    <section className="mx-auto max-w-content px-6 pb-8 pt-24 text-center sm:pt-28 lg:px-10 lg:pt-36">
      <Reveal as="p" y={12} className="eyebrow text-accent">
        {eyebrow}
      </Reveal>
      <BlurWords
        as="h1"
        text={title}
        delay={0.1}
        className="mx-auto mt-3 block max-w-4xl text-[clamp(40px,7vw,76px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink"
      />
      <Reveal
        as="p"
        delay={0.35}
        y={14}
        className="mx-auto mt-6 max-w-2xl text-[clamp(19px,2.2vw,24px)] leading-[1.35] tracking-[-0.016em] text-muted"
      >
        {subhead}
      </Reveal>
      <Reveal delay={0.5} y={14} className="mt-8 flex justify-center">
        <a
          href={ctaHref}
          {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="focus-ring micro-transition inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-7 text-[17px] text-white hover:brightness-110"
        >
          {ctaLabel}
        </a>
      </Reveal>

      {photo && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease }}
          className="relative mx-auto mt-14 aspect-[16/9] w-full max-w-[920px] overflow-hidden rounded-[28px] bg-surface"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8, ease }}
          >
            <Image
              src={photo}
              alt={title}
              fill
              priority
              sizes="(min-width: 960px) 920px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
