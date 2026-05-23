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
      className="focus-soft min-h-11 rounded-lg bg-[#04342C] px-3 py-2.5 text-center text-base font-black text-white transition-opacity hover:opacity-80"
    >
      {copied ? "URL TERSALIN" : "BAGIKAN EVENT ->"}
    </button>
  );
}
