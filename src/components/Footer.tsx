"use client";

import { useRef, useState } from "react";
import { Letter } from "@/components/Letter";

const EMAIL = "irenemycheung@gmail.com";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const addressRef = useRef<HTMLSpanElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable: select the address so Cmd/Ctrl+C works.
      const node = addressRef.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  };

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
      <div className="border-t border-black/10 pt-14">
        <h2 className="font-display text-[26px] font-medium text-accent sm:text-[30px]">
          irene cheung
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-7 text-ink">
          I enjoy building the tools other designers find boring.
        </p>

        <div className="group relative mt-3 inline-flex items-center">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email me"
            className="group/mail inline-block p-2"
          >
            <Letter className="w-[78px]" />
          </a>
          {/* Sits flush against the envelope (no gap to cross), to its right,
              and is clickable/selectable: it used to be pointer-events-none,
              dropped below the envelope with an 8px gap, and vanished the
              moment the cursor left the icon, which made the address
              nearly impossible to select or copy. invisible (not just
              opacity-0) keeps it from catching clicks while hidden. */}
          <div className="invisible absolute top-1/2 left-full z-10 -translate-y-1/2 pl-1 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <div className="flex w-max items-center gap-3 rounded-sm border border-ink/10 bg-surface px-3 py-2 text-sm text-ink shadow-md">
              <span ref={addressRef} className="select-all">{EMAIL}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 text-xs font-medium text-accent-deep underline-offset-2 hover:underline"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 font-nav text-sm tracking-wide text-muted uppercase">
          Social
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/irenemy"
              target="_blank"
              rel="noopener noreferrer"
              className="site-link text-base"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/irenecancode"
              target="_blank"
              rel="noopener noreferrer"
              className="site-link text-base"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dayday_tipsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-link text-base"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
