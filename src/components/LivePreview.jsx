import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { viewportOptions } from "./catalog";

function PreviewHarness({ children, className = "" }) {
  const previewRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    const target = event.target.closest?.("a, button");
    if (!target) return;

    if (target.tagName === "A") event.preventDefault();

    const label = target.textContent.trim().toLowerCase();
    if (label === "clear") {
      const textarea = previewRef.current?.querySelector("textarea");
      if (textarea) {
        textarea.value = "";
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
      }
      setMessage("");
    }

    if (label === "save") setMessage("Saved in the live preview.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thanks — this form is interactive in the live preview.");
  };

  return <div ref={previewRef} className={className} onClick={handleClick} onSubmit={handleSubmit}>{children}{message && <p className="mt-4 rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-xs text-emerald-800">{message}</p>}</div>;
}

function ResponsiveFrame({ title, width, previewClassName, children }) {
  const frameRef = useRef(null);
  const shellRef = useRef(null);
  const [frameDocument, setFrameDocument] = useState(null);
  const [height, setHeight] = useState(96);
  const [scale, setScale] = useState(1);

  const prepareFrame = () => {
    const document = frameRef.current?.contentDocument;
    if (!document) return;
    document.body.style.margin = "0";
    document.body.style.padding = "1rem";
    document.body.style.background = "white";

    if (!document.head.querySelector('[data-preview-style="bundle"]')) {
      const style = document.createElement("style");
      style.dataset.previewStyle = "bundle";
      style.textContent = Array.from(window.document.styleSheets)
        .flatMap((sheet) => {
          try {
            return Array.from(sheet.cssRules, (rule) => rule.cssText);
          } catch {
            return [];
          }
        })
        .join("\n");
      document.head.appendChild(style);
    }

    setFrameDocument(document);
  };

  useEffect(() => {
    const frame = frameRef.current;
    frame?.addEventListener("load", prepareFrame);
    if (frame?.contentDocument?.readyState === "complete") prepareFrame();
    return () => frame?.removeEventListener("load", prepareFrame);
  }, []);

  useEffect(() => {
    if (!frameDocument) return undefined;
    if (previewClassName === "preview-hero") {
      frameDocument.querySelector(".text-5xl")?.style.setProperty("max-width", "24rem", "important");
    }
    const observer = new ResizeObserver(() => setHeight(Math.max(96, frameDocument.body.scrollHeight + 4)));
    observer.observe(frameDocument.body);
    return () => observer.disconnect();
  }, [frameDocument, previewClassName]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / width)));
    observer.observe(shell);
    return () => observer.disconnect();
  }, [width]);

  return <div ref={shellRef} style={{ width: "100%", height: `${height * scale}px`, overflow: "hidden" }}><div style={{ width: `${width}px`, transform: `scale(${scale})`, transformOrigin: "top left" }}>{frameDocument && createPortal(<PreviewHarness className={previewClassName}>{children}</PreviewHarness>, frameDocument.body)}<iframe ref={frameRef} title={`${title} live preview`} srcDoc="<!doctype html><html><head></head><body></body></html>" style={{ width: `${width}px`, height: `${height}px`, display: "block", border: 0 }} /></div></div>;
}

export default function LivePreview({ title, variant }) {
  const [viewport, setViewport] = useState("desktop");
  const selectedViewport = viewportOptions.find(
    (option) => option.id === viewport,
  );
  const Preview = variant.render;
  return (
    <article
      id={variant.id}
      className="overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-medium text-zinc-900">{variant.name}</p>
          <p className="mt-0.5 text-xs text-zinc-500">
            {selectedViewport.label} · {selectedViewport.width}px
          </p>
        </div>
        <div
          className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1"
          role="group"
          aria-label={`${title} preview size`}
        >
          {viewportOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setViewport(option.id)}
              aria-pressed={viewport === option.id}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${viewport === option.id ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden bg-zinc-100 p-4 sm:p-8">
        <div
          className="mx-auto bg-white shadow-sm"
          style={{ width: `min(${selectedViewport.width}px, 100%)` }}
        >
          <ResponsiveFrame title={title} width={selectedViewport.width} previewClassName={variant.previewClassName}><Preview /></ResponsiveFrame>
        </div>
      </div>
    </article>
  );
}
