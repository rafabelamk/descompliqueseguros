// Perguntas frequentes em lista simples, no estilo Apple: linhas finas,
// sinal de + que vira − ao abrir. Usa <details> nativo (acessível, sem JS).
export default function FaqList({ items }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="relative h-4 w-4 shrink-0 text-accent">
              <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>
          <div className="space-y-3 pb-6 pr-10 text-base leading-relaxed text-muted">
            {item.a.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
