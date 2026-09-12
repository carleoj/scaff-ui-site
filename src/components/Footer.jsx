import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-600">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Built by{" "}
          <a
            href="https://github.com/carleoj"
            className="font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-60"
          >
            Carl Paño
          </a>
        </p>

        <p>Released under MIT License</p>
      </div>
    </footer>
  );
}