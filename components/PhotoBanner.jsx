import Image from "next/image";
import BlurWords from "@/components/motion/BlurWords";

export default function PhotoBanner({ src, alt, title }) {
  return (
    <section className="mx-auto max-w-content px-6 pb-8 pt-24 text-center lg:px-10 lg:pt-28">
      <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-card sm:max-w-md">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 640px) 400px, 90vw"
          className="object-cover object-top"
        />
      </div>
      <BlurWords
        as="h1"
        text={title}
        className="mt-8 text-[32px] font-light text-navy sm:text-[40px]"
      />
    </section>
  );
}
