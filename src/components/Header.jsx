import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const searchInputRef = useRef(null);

  const navLinks = [
    { label: "Get Started", to: "/docs" },
    { label: "Commons", to: "/commons" },
    { label: "Components", to: "/commons" },
    { label: "Cards", to: "/commons" },
  ];

  useEffect(() => {
    if (isMobileSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isMobileSearchOpen]);

  const handleSearchKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMobileSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex shrink-0 items-center text-zinc-500 transition hover:text-zinc-600"
            >
              <span className="sr-only">Home</span>

              <img
              className="h-8 w-auto"
                fill="none"
                aria-hidden="true"
              src="/scaff-ui-logo.png" alt="Scaff UI Logo">
              </img>

              <span className="px-4 text-sm font-semibold sm:text-lg">
                Scaff UI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-7 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-gray-600 transition-colors hover:text-gray-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div
              className={`flex items-center overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 ${
                isMobileSearchOpen
                  ? "w-44"
                  : "w-9"
              } sm:w-56`}
            >
              <button
                type="button"
                onClick={() => setIsMobileSearchOpen((open) => !open)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
                aria-label={
                  isMobileSearchOpen ? "Close search" : "Open search"
                }
                aria-expanded={isMobileSearchOpen}
              >
                {isMobileSearchOpen ? (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path
                      strokeLinecap="round"
                      d="m20 20-4-4"
                    />
                  </svg>
                )}
              </button>

              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search..."
                onKeyDown={handleSearchKeyDown}
                className={`h-9 min-w-0 flex-1 bg-transparent pr-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 ${
                  isMobileSearchOpen ? "block" : "hidden sm:block"
                }`}
                aria-label="Search"
              />
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-sm bg-zinc-500 px-3 text-sm font-medium text-white transition hover:bg-zinc-600"
              aria-label="Scaff UI on GitHub"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.411-.012 2.739 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>

              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-96 border-t border-gray-100 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}