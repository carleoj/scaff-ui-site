import Container from "./Container";
import navOnly from "../images/logo-navigation.png";
import { Link } from "react-router-dom";

const commons = [
  {
    title: "Header",
    description: "Navigation patterns for different layouts.",
    command: "scf add header",
    variants: [
      // {
      //   name: "With CTA",
      //   image: headerCta,
      // },
      // {
      //   name: "Without CTA",
      //   image: header,
      // },
      {
        name: "Navigation only",
        image: navOnly,
      },
    ],
  },

  // {
  //   title: "Hero",
  //   description: "Hero layouts for landing and product pages.",
  //   command: "scf add hero",
  //   variants: [
  //     {
  //       name: "Default",
  //       image: hero,
  //     },
  //   ],
  // },

  // {
  //   title: "Footer",
  //   description: "Simple footer layouts for your pages.",
  //   command: "scf add footer",
  //   variants: [
  //     {
  //       name: "Default",
  //       image: footer,
  //     },
  //   ],
  // },
];

export default function Commons() {
  return (
    <main id="commons" className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        {/* Back */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
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
          Commons
        </Link>

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-light tracking-tight text-zinc-950">
            Header
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Navigation patterns for different layouts.
          </p>
        </div>

        {/* Components */}
        <div className="space-y-8">
          {commons.map((item) => (
            <Container key={item.command} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}