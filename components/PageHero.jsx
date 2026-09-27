export default function PageHero({ title, description }) {
  return (
    <section className="bg-ink px-6 py-20 text-text-inverse">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-text-inverse/75">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
