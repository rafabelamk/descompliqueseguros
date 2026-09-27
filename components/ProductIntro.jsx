import Image from "next/image";
import BlurWords from "@/components/motion/BlurWords";

export default function ProductIntro({ eyebrow, title, subhead, photo, ctaLabel = "Cotar agora" }) {
  return (
    <section className="mx-auto max-w-content px-6 pt-28 lg:px-10 lg:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-orange">{eyebrow}</p>
          <BlurWords
            as="h1"
            text={title}
            className="mt-3 text-[30px] leading-tight text-navy sm:text-[38px]"
          />
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-black/70">
            {subhead}
          </p>
          <a href="#cotacao" className="micro-cta mt-6 inline-block text-navy">
            {ctaLabel}
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
          <Image
            src={photo}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
