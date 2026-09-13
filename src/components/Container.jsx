export default function Container({ title, variants }) {
  return (
    <div className="space-y-4">
      {variants.map((variant) => (
        <article
          key={variant.name}
          className="overflow-hidden rounded-xl border border-zinc-300 bg-white"
        >
          <div className="bg-zinc-50 p-4 sm:p-6">
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
              <img
                src={variant.image}
                alt={`${title} — ${variant.name}`}
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="border-t border-zinc-300 px-4 py-3 sm:px-6">
            <span className="text-sm text-zinc-600">{variant.name}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
