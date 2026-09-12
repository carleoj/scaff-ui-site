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
      //   image: "/images/commons/header-cta.png",
      // },
      // {
      //   name: "Without CTA",
      //   image: "/images/commons/header.png",
      // },
      {
        name: "Navigation only",
        image: navOnly,
      },
    ],
  },
  // {
  //   title: "Hero Section",
  //   description: "Hero layouts for landing and product pages.",
  //   command: "scf add hero",
  //   variants: [
  //     {
  //       name: "Default",
  //       image: "/images/commons/hero.png",
  //     },
  //     {
  //       name: "Centered",
  //       image: "/images/commons/hero-centered.png",
  //     },
  //     {
  //       name: "Split",
  //       image: "/images/commons/hero-split.png",
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
  //       image: "/images/commons/footer.png",
  //     },
  //     {
  //       name: "Centered",
  //       image: "/images/commons/footer-centered.png",
  //     },
  //   ],
  // },
];

export default function Commons() {
  return (
    <main id="commons" className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
          Back to home
        </Link>

        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Commons
          </p>

          <h1 className="mt-2 text-3xl font-light tracking-tight text-zinc-950">
            Ready-made components.
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-zinc-500">
            Browse common interface patterns and add them to your project from
            the command line.
          </p>
        </div>

        <div className="space-y-8">
          {commons.map((item) => (
            <Container key={item.command} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}