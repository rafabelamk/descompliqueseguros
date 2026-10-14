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
            <p className="text-[15px] leading-relaxed text-black/70">
              “{item.quote}”
            </p>
            <p className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-ink">
              {item.name}
            </p>
            <p className="mt-1 text-[13px] text-muted">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
