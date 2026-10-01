import { Link } from "react-router-dom";

export default function BackLink({ label }) {
  return (
    <div className="sticky top-16 z-40 mb-10 border-b border-zinc-300 bg-white py-3">
      <Link
        to="/"
        className="inline-flex items-center gap-2 pl-3 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
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
        {label}
      </Link>
    </div>
  );
}
