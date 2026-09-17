import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-18">
        <div className="mx-auto grid max-w-5xl items-stretch gap-12 md:grid-cols-[3fr_2fr] lg:gap-16">
          {/* Content */}
          <div className="flex h-full flex-col justify-center">
            {/* Status */}
            <div className="mb-5 flex items-center gap-3 text-xs font-medium text-zinc-500">
              <span className="rounded-full border border-zinc-300 px-2.5 py-1">
                Beta
              </span>

              <span>v0.1.3</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Scaffold the user interface{" "}
              <span className="text-zinc-700">make it</span> your design
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              A free, open-source CLI for customizable, responsive, minimalistic Tailwind CSS components.
            </p>

            {/* Installation */}
            <div className="mt-7 w-full max-w-[28rem]">
              <div className="flex items-center justify-between gap-4 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3">
                <code className="min-w-0 truncate text-sm text-zinc-700">
                  npm i scaff-ui
                </code>

                <button
                  type="button"
                  className="hover:cursor-pointer shrink-0 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  Copy
                </button>
              </div>

              {/* Actions */}
              <div className="mt-4 flex w-full gap-3">
                <Link
                  to="/commons"
                  className="flex-1 rounded-sm border border-zinc-600 bg-zinc-600 px-4 py-2.5 text-center font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 sm:px-5"
                >
                  Browse Components
                </Link>

                <Link
                  to="/docs"
                  className="flex-1 rounded-sm border border-zinc-300 bg-white px-4 py-2.5 text-center font-medium text-zinc-800 shadow-sm transition-colors hover:border-zinc-700 hover:bg-zinc-700 hover:text-white sm:px-5"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>

          {/* Brand Visual */}
          <div className="flex min-h-[20rem] flex-col items-center justify-center md:min-h-0">
            <img
              src="/scaff-ui-logo.png"
              alt="Scaff UI"
              className="w-44 sm:w-52 lg:w-60"
            />

            <h2 className="mt-4 text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Scaff UI
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}