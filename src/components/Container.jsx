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
    <article className="overflow-hidden rounded-xl border border-zinc-300 bg-white">
      {/* Preview */}
      <div className="bg-zinc-50 p-4 sm:p-6 lg:p-8">
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <img
            src={variant.image}
            alt={`${title} — ${variant.name}`}
            className="block h-auto w-full"
          />
        </div>
      </div>

      {/* Command / Actions */}
      <div className="flex items-center justify-between gap-3 border-t border-zinc-300 px-4 py-3 sm:px-6">
        <code className="min-w-0 flex-1 truncate text-sm text-zinc-600">
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
                aria-label={`${title} variants`}
                className="appearance-none rounded-md border border-zinc-200 bg-white py-2 pl-3 pr-8 text-sm text-zinc-700 outline-none transition-colors hover:border-zinc-400 focus:border-zinc-500"
              >
                {variants.map((item, index) => (
                  <option key={item.name} value={index}>
                    {item.name}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          {/* Copy */}
          <button
            type="button"
            onClick={copyCommand}
            className="shrink-0 rounded-md bg-zinc-600 px-4 py-2 text-sm text-white transition-colors hover:cursor-pointer hover:bg-zinc-700"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </article>
  );
}