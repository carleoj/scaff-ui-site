import { useState } from "react";

function CloseIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /></svg>; }
function PreviewLink({ href, children, className, onClick }) { return <a href={href} onClick={(event) => { event.preventDefault(); onClick?.(); }} className={className}>{children}</a>; }

export function LiveTextArea() {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);
  return <div className="mx-auto max-w-sm"><label htmlFor="preview-notes" className="block text-sm font-medium text-gray-700">Notes</label><div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-gray-200"><textarea id="preview-notes" value={value} onChange={(event) => { setValue(event.target.value); setSaved(false); }} rows="4" className="w-full resize-none border-none px-3 py-2 text-sm outline-none focus:ring-0" /></div><div className="mt-2 flex items-center justify-end gap-6"><button type="button" onClick={() => { setValue(""); setSaved(false); }} className="text-sm font-medium text-gray-900 transition hover:text-gray-500">Clear</button><button type="button" onClick={() => setSaved(true)} className="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50">{saved ? "Saved" : "Save"}</button></div></div>;
}

export function LiveNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return <div className="mx-auto max-w-sm rounded-xl border border-gray-200 bg-gray-50 p-8 text-center"><h3 className="text-2xl font-bold tracking-tight text-gray-950">Stay in the loop</h3><p className="mt-3 text-sm leading-5 text-blue-900">Subscribe to our newsletter for updates, new releases, and useful resources.</p>{submitted ? <p className="mt-6 rounded bg-white px-3 py-3 text-sm text-gray-700">Thanks for subscribing.</p> : <form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubmitted(true); }} className="mt-7"><label htmlFor="preview-newsletter-email" className="sr-only">Email address</label><input id="preview-newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-500" /><button type="submit" className="mt-2 w-full rounded bg-gray-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">Subscribe</button></form>}<p className="mt-5 text-xs text-blue-900">No spam. Unsubscribe anytime.</p></div>;
}

export function LiveNavigation() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return <header className="border-b border-gray-200"><nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><PreviewLink href="#home" className="text-xl font-semibold text-gray-950">Logo</PreviewLink><button type="button" onClick={() => setOpen((current) => !current)} className="rounded border border-gray-200 p-2 text-gray-700 sm:hidden" aria-expanded={open} aria-label="Toggle navigation">{open ? <CloseIcon /> : <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>}</button><div className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-16 z-10 flex-col gap-1 rounded border border-gray-200 bg-white p-3 shadow sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:p-0 sm:shadow-none`}><PreviewLink href="#home" onClick={closeMenu} className="text-sm text-gray-700 hover:text-black">Home</PreviewLink><PreviewLink href="#about" onClick={closeMenu} className="text-sm text-gray-700 hover:text-black">About</PreviewLink><PreviewLink href="#projects" onClick={closeMenu} className="text-sm text-gray-700 hover:text-black">Projects</PreviewLink><PreviewLink href="#contact" onClick={closeMenu} className="text-sm text-gray-700 hover:text-black">Contact</PreviewLink><PreviewLink href="#get-started" onClick={closeMenu} className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">Get Started</PreviewLink></div></nav></header>;
}

export function LiveHero() {
  const [started, setStarted] = useState(false);
  return <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2"><div><h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Build something great.</h2><p className="mt-5 text-lg text-blue-900">A simple description for your project goes here.</p><button type="button" onClick={() => setStarted(true)} className="mt-10 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">{started ? "Let’s go" : "Get Started"}</button></div><div className="h-64 rounded-xl bg-gray-100 sm:h-80" aria-label="Hero image placeholder" /></section>;
}

export function LiveFooter() { return <footer className="border-t border-gray-200"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-blue-900 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm">© 2026 Your Company. All rights reserved.</p><nav className="flex gap-6 text-sm"><PreviewLink href="#about" className="hover:text-black">About</PreviewLink><PreviewLink href="#projects" className="hover:text-black">Projects</PreviewLink><PreviewLink href="#contact" className="hover:text-black">Contact</PreviewLink></nav></div></footer>; }
