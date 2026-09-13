import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-600">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6 text-sm text-white sm:px-8">
        <p className="text-left">
          Built by{" "}
          <a
            href="https://github.com/carleoj"
            className="font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-60"
          >
            Carl Paño
          </a>
        </p>

        <p className="text-right">Released under MIT License</p>
      </div>
    </footer>
  );
}