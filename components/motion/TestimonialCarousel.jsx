export default function TestimonialCarousel({ items }) {
  return (
    <div className="testimonials-mask overflow-x-auto">
      <div className="flex w-max gap-0 mx-auto">
        {items.map((item, i) => (
          <div
            key={item.name}
            className={`w-[340px] shrink-0 px-8 py-2 sm:w-[420px] ${
              i > 0 ? "border-l border-line" : ""
            }`}
          >
            <p className="text-sm font-light leading-relaxed text-black/70">
              “{item.quote}”
            </p>
            <p className="mt-6 text-[18px] font-medium uppercase tracking-[0.04em] text-navy">
              {item.name}
            </p>
            <p className="mt-1 text-xs font-light text-black/50">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
