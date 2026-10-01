import Container from "./Container";
import { publishedComponents } from "./catalog";

const components = publishedComponents.filter((item) => item.category === "Components");

export default function Components() {
  return (
    <main id="components" className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Components */}
        <div className="space-y-12 pb-16 lg:px-15">
          {components.map((item) => (
            <section key={item.command} id={item.id}>
              {/* Component heading */}
              <div className="pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-zinc-300 pb-3">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">{item.title}</h1>
                    <code className="text-sm text-zinc-600">{item.command}</code>
                  </div>
                  <button type="button" className="shrink-0 rounded-sm bg-zinc-600 px-4 py-1 text-sm text-white transition-colors hover:cursor-pointer hover:bg-zinc-700">Copy</button>
                </div>
              </div>

              {/* Variants */}
              <div className="mt-6">
                <Container title={item.title} variants={item.variants} />
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
