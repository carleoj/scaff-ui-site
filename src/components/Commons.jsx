import Container from "./Container";
import nav from "../images/navigation.png";
import logoNav from "../images/logo-navigation.png";
import logoNavCta from "../images/logo-navigation-cta.png";
import headDescBtnImg from "../images/head-desc-btn-img.png";

import { Link } from "react-router-dom";

const commons = [
  {
    title: "Header",
    command: "scf add header",
    variants: [
      // {
      //   name: "Nav",
      //   image: nav,
      // },
      // {
      //   name: "Logo + Nav",
      //   image: logoNav,
      // },
      {
        name: "Logo + Nav + CTA",
        image: logoNavCta,
      },
    ],
  },
  {
    title: "Hero",
    command: "scf add hero",
    variants: [
      {
        name: "Heading + Description + CTA + Image",
        image: headDescBtnImg,
      },
    ],
  },
];

export default function Commons() {
  return (
    <main id="commons" className="bg-white">
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
            Commons
          </Link>
        </div>

        {/* Components */}
        <div className="space-y-12 pb-16 lg:px-15">
          {commons.map((item) => (
            <section key={item.command}>
              {/* Component heading */}
              <div className="pt-8">
                <h1 className="border-b border-zinc-500 pb-3 text-3xl font-light tracking-tight text-zinc-950">
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
                <Container
                  title={item.title}
                  variants={item.variants}
                />
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}