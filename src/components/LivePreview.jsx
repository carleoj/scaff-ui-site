import { useState } from "react";
import { viewportOptions } from "./catalog";

export default function LivePreview({ title, variant }) {
  const [viewport, setViewport] = useState("desktop");
  const selectedViewport = viewportOptions.find(
    (option) => option.id === viewport,
  );
  const Preview = variant.render;
  return (
    <article
      id={variant.id}
      className="overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-medium text-zinc-900">{variant.name}</p>
          <p className="mt-0.5 text-xs text-zinc-500">
            {selectedViewport.label} · {selectedViewport.width}px
          </p>
        </div>
        <div
          className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1"
          role="group"
          aria-label={`${title} preview size`}
        >
          {viewportOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setViewport(option.id)}
              aria-pressed={viewport === option.id}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${viewport === option.id ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto bg-zinc-100 p-4 sm:p-8">
        <div
          className="mx-auto min-h-48 bg-white shadow-sm transition-[width] duration-300"
          style={{ width: `min(${selectedViewport.width}px, 100%)` }}
        >
          <div className="relative min-h-48 p-4 sm:p-6">
            <Preview viewport={selectedViewport} />
          </div>
        </div>
      </div>
    </article>
  );
}
