"use client";

import { useState } from "react";

type ShareEventButtonProps = {
  title: string;
};

export default function ShareEventButton({ title }: ShareEventButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url,
        });
        return;
      } catch {
        // User cancellation should fall back quietly.
      }
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="focus-soft inline-flex min-h-11 w-full items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-5 text-center text-base font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5"
    >
      {copied ? "URL TERSALIN" : "BAGIKAN EVENT ->"}
    </button>
  );
}
