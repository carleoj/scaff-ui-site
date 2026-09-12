import { useState } from "react";

export default function Container({
  title,
  description,
  command,
  variants,
}) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [copied, setCopied] = useState(false);

  const variant = variants[activeVariant];

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      // Clipboard unavailable.
    }
  };

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      {/* Details + Preview */}
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Details */}
        <div className="flex flex-col justify-between border-b border-zinc-200 p-6 lg:border-b-0 lg:border-r">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-zinc-950">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>

          <div className="mt-6">
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              {variants.length}{" "}
              {variants.length === 1 ? "variant" : "variants"}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="flex min-h-70 items-center justify-center bg-zinc-50 p-6 sm:min-h-90">
          <div className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
            <img
              src={variant.image}
              alt={`${title} — ${variant.name}`}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Command */}
      <div className="flex items-center justify-between gap-4 border-t border-zinc-200 bg-white px-6 py-4">
        <code className="min-w-0 truncate text-sm text-zinc-600">
          {command}
        </code>

        <div className="flex shrink-0 items-center gap-2">
          {/* Variants */}
          {variants.length > 1 && (
            <div className="relative">
              <select
                value={activeVariant}
                onChange={(event) =>
                  setActiveVariant(Number(event.target.value))
                }
                className="appearance-none rounded-md border border-zinc-200 bg-white py-2 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-colors hover:border-zinc-400 focus:border-zinc-500"
                aria-label={`${title} variants`}
              >
                {variants.map((item, index) => (
                  <option key={item.name} value={index}>
                    V {item.name}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500">
                V
              </span>
            </div>
          )}

          {/* Copy */}
          <button
            type="button"
            onClick={copyCommand}
            className="rounded-md bg-zinc-950 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </article>
  );
}