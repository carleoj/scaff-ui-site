import Container from "./Container";
import textAreaActsOut from "../images/text-area-actions-out.png"
import basicNewsLetter from "../images/newsletter.png"

import { Link } from "react-router-dom";

const components = [
  {
    title: "Text Area",
    command: "scf add text-area",
    variants: [
      {
        name: "Basic + Actions Outside",
        image: textAreaActsOut,
      },
    ],
  },
  {
    title: "Newsletter",
    command: "scf add newsletter",
    variants: [
      {
        name: "Basic Newsletter",
        image: basicNewsLetter,
      },
    ],
  },
];

export default function Components() {
  return (
    <main id="components" className="bg-white">
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Back navigation */}
        <div className="sticky top-16 z-40 bg-white py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <svg
              className="size-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Components
          </Link>
        </div>

        {/* Components */}
        <div className="space-y-12 pb-16 lg:px-15">
          {components.map((item) => (
            <section key={item.command}>
              {/* Component heading */}
              <div className="pt-8">
                <h1 className="border-b border-zinc-500 pb-3 text-3xl font-semibold tracking-tight text-zinc-950">
                  {item.title}
                </h1>

                {/* Command / Copy */}
                <div className="flex items-center justify-between gap-4 pt-3">
                  <code className="ml-2 text-sm text-zinc-600">
                    {item.command}
                  </code>

                  <button
                    type="button"
                    className="mr-2 shrink-0 rounded-sm bg-zinc-600 px-4 py-1 text-sm text-white transition-colors hover:cursor-pointer hover:bg-zinc-700"
                  >
                    Copy
                  </button>
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
