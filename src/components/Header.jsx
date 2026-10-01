import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCatalogPath, publishedComponents } from "./catalog";

const navLinks = [
  { label: "Get Started", to: "/docs" },
  { label: "Commons", to: "/commons" },
  { label: "Components", to: "/components" },
  { label: "Cards", to: "/commons" },
];

function SearchIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20 20-4-4" /></svg>;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const results = query.trim()
    ? publishedComponents.filter((item) => `${item.title} ${item.category} ${item.variants.map((variant) => variant.name).join(" ")}`.toLowerCase().includes(query.toLowerCase()))
    : publishedComponents;

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    if (location.hash) window.requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [location]);

  const openResult = (item) => {
    setQuery("");
    setIsSearchOpen(false);
    navigate(`${getCatalogPath(item)}#${item.id}`);
  };

  const clearSearchOnBlur = () => {
    window.setTimeout(() => {
      setQuery("");
      setIsSearchOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-8">
            <Link to="/" className="flex shrink-0 items-center text-zinc-500 transition hover:text-zinc-600">
              <span className="sr-only">Home</span>
              <img className="h-8 w-auto" src="/scaff-ui-logo.png" alt="Scaff UI Logo" />
              <span className="px-4 text-sm font-semibold sm:text-lg">Scaff UI</span>
            </Link>
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-7 whitespace-nowrap text-sm font-medium">
                {navLinks.map((link) => <li key={link.label}><Link to={link.to} className="text-gray-600 transition-colors hover:text-gray-950">{link.label}</Link></li>)}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className={`flex items-center overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 ${isSearchOpen ? "w-64" : "w-9"} sm:w-64`}>
                <button type="button" onClick={() => setIsSearchOpen((open) => !open)} className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-gray-500 transition hover:bg-gray-100 hover:text-gray-950" aria-label={isSearchOpen ? "Close search" : "Search published components"} aria-expanded={isSearchOpen}><SearchIcon /></button>
                <input ref={searchInputRef} value={query} onChange={(event) => { setQuery(event.target.value); setIsSearchOpen(true); }} onBlur={clearSearchOnBlur} onKeyDown={(event) => { if (event.key === "Escape") setIsSearchOpen(false); }} type="search" placeholder="Search components..." className={`h-9 min-w-0 flex-1 bg-transparent pr-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 ${isSearchOpen ? "block" : "hidden sm:block"}`} aria-label="Search published components" />
              </div>
              {isSearchOpen && <div className="absolute right-0 top-11 z-50 max-h-80 w-72 overflow-y-auto rounded-md border border-zinc-200 bg-white p-1 shadow-lg" role="listbox">
                {results.length ? results.map((item) => <button key={item.id} type="button" onClick={() => openResult(item)} className="flex w-full items-start gap-3 rounded px-3 py-2 text-left transition hover:bg-zinc-50" role="option"><span className="mt-1 size-2 shrink-0 rounded-full bg-zinc-400" /><span><span className="block text-sm font-medium text-zinc-900">{item.title}</span><span className="block text-xs text-zinc-500">{item.category}</span></span></button>) : <p className="px-3 py-3 text-sm text-zinc-500">No published components found.</p>}
              </div>}
            </div>

            <a href="https://github.com/carleoj/scaff-ui" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-2 rounded-sm bg-zinc-500 px-3 text-sm font-medium text-white transition hover:bg-zinc-600" aria-label="Scaff UI on GitHub"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.411-.012 2.739 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" /></svg><span className="hidden sm:inline">GitHub</span></a>
            <button type="button" onClick={() => setIsMobileMenuOpen((open) => !open)} className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 lg:hidden" aria-expanded={isMobileMenuOpen} aria-label="Toggle navigation">{isMobileMenuOpen ? "×" : "☰"}</button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isMobileMenuOpen ? "max-h-96 border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav aria-label="Mobile navigation" className="py-4"><ul className="flex flex-col gap-1">{navLinks.map((link) => <li key={link.label}><Link to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-950">{link.label}</Link></li>)}</ul></nav>
        </div>
      </div>
    </header>
  );
}
