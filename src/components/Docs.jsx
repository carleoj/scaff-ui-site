import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Install the CLI",
    description:
      "Install Scaff UI globally so the scf command is available in every project.",
    command: "npm install -g scaff-ui",
  },
  {
    number: "02",
    title: "Initialize your project",
    description:
      "Run the initializer from the root of a Tailwind CSS project to create the Scaff UI configuration.",
    command: "scf init",
  },
  {
    number: "03",
    title: "Add a component",
    description:
      "Choose a component from the Commons collection and add it directly to your source folder.",
    command: "scf add header",
  },
  {
    number: "04",
    title: "Make it yours",
    description:
      "Open the generated JSX, adjust the styles, and compose it with the rest of your interface.",
    command: "npm run dev",
  },
];

function CommandBlock({ command }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable.
    }
  };

  return (
    <div className="mt-5 flex items-center justify-between gap-3 rounded-md bg-zinc-950 px-4 py-3 text-sm text-white">
      <code className="min-w-0 truncate text-zinc-200">{command}</code>
      <button
        type="button"
        onClick={copyCommand}
        className="shrink-0 rounded-sm border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Docs() {
  return (
    <section id="docs" className="border-t border-zinc-200 bg-white px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Documentation
            </p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl">
              From command line to interface.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-500">
              Install Scaff UI once, then add polished Tailwind CSS patterns to
              your project whenever you need them.
            </p>
            <Link
              to="/commons"
              className="mt-8 inline-flex rounded-sm border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-800 hover:bg-zinc-800 hover:text-white"
            >
              Browse Designs
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
              >
                <div className="flex gap-5 sm:gap-8">
                  <span className="text-sm font-medium text-teal-700">
                    {step.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-medium tracking-tight text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                      {step.description}
                    </p>
                    <CommandBlock command={step.command} />
                  </div>
                </div>
              </article>
            ))}

            <div className="border border-dashed border-zinc-300 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Typical workflow
              </p>
              <pre className="mt-4 overflow-x-auto text-sm leading-7 text-zinc-700">
                <code>{`scf init\nscf add hero\nscf add footer`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
