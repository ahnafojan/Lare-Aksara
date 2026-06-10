"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { EventActivity } from "@/types";

type EventActivityGalleryProps = {
  kegiatan?: EventActivity[];
};

function getPreviewText(text: string, maxLength = 82) {
  const normalizedText = text.replace(/\s+/g, " ").trim();

  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }

  return `${normalizedText.slice(0, maxLength).trimEnd()}...`;
}

function EmptyActivityImage() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center bg-[#E1F5EE]">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="h-24 w-32"
        fill="none"
      >
        <rect x="34" y="70" width="92" height="18" rx="6" fill="#5DCAA5" stroke="#04342C" strokeWidth="1.5" />
        <rect x="28" y="88" width="104" height="18" rx="6" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
        <path d="M44 30C57 20 70 21 82 34V82C70 72 57 71 44 80V30Z" fill="#E1F5EE" stroke="#04342C" strokeWidth="1.5" />
        <path d="M82 34C95 21 108 20 120 30V80C108 71 95 72 82 82V34Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
        <path d="M82 34V82" stroke="#04342C" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function EventActivityGallery({
  kegiatan = [],
}: EventActivityGalleryProps) {
  const [selectedActivity, setSelectedActivity] =
    useState<EventActivity | null>(null);

  useEffect(() => {
    if (!selectedActivity) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedActivity(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedActivity]);

  if (kegiatan.length === 0) {
    return (
      <div className="rounded-lg border-[1.5px] border-[#04342C] bg-[#E1F5EE] p-4 text-[14px] text-[#5F5E5A]">
        Rincian kegiatan untuk event ini akan segera tampil.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {kegiatan.map((item) => (
          <button
            key={item._key}
            type="button"
            onClick={() => setSelectedActivity(item)}
            className="focus-soft group flex h-[184px] min-h-11 w-full flex-col overflow-hidden rounded-lg border-[1.5px] border-[#04342C] bg-white text-left shadow-[1px_1px_0_#04342C] transition-transform hover:-translate-y-0.5 sm:h-[220px] lg:h-[246px]"
          >
            <div className="relative h-[88px] w-full shrink-0 border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] sm:h-[108px] lg:h-[118px]">
              {item.gambar?.asset?.url ? (
                <Image
                  src={item.gambar.asset.url}
                  alt={item.judulKegiatan}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <EmptyActivityImage />
              )}
            </div>
            <div className="min-h-0 flex-1 px-2.5 pb-2 pt-2 sm:px-3.5 sm:pt-3">
              <h3 className="font-heading line-clamp-2 break-words text-base font-bold leading-tight text-[#04342C] sm:text-lg">
                {item.judulKegiatan}
              </h3>
              <p className="activity-card-description mt-1.5 break-words text-[12px] leading-[1.45] text-[#5F5E5A] sm:mt-2 sm:text-sm sm:leading-[1.55]">
                {getPreviewText(item.deskripsiSingkat)}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedActivity ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="activity-modal-title"
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 backdrop-blur-md sm:p-6"
        >
          <button
            type="button"
            aria-label="Tutup detail kegiatan"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={() => setSelectedActivity(null)}
          />
          <div className="relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[640px] flex-col overflow-hidden rounded-lg border-[1.5px] border-[#04342C] bg-white shadow-[2px_2px_0_#04342C] sm:max-h-[calc(100dvh-3rem)] md:h-[calc(100dvh-3rem)] md:max-h-[760px] md:max-w-5xl md:grid-cols-[1fr_0.92fr] md:flex-row">
            <div className="relative h-[30dvh] min-h-36 max-h-60 shrink-0 border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] md:h-full md:max-h-none md:min-h-0 md:w-[52%] md:border-b-0 md:border-r-[1.5px]">
              {selectedActivity.gambar?.asset?.url ? (
                <Image
                  src={selectedActivity.gambar.asset.url}
                  alt={selectedActivity.judulKegiatan}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <EmptyActivityImage />
              )}
            </div>

            <div className="flex min-h-0 flex-1 flex-col md:w-[48%]">
              <div className="flex shrink-0 items-start justify-between gap-3 border-b-[1.5px] border-[#04342C] bg-white p-4 sm:p-5">
                <span className="inline-flex min-h-10 items-center rounded-full border-[1.5px] border-[#0F6E56] bg-[#F9FAFB] px-3 text-sm font-black text-[#0F6E56]">
                  Kegiatan Event
                </span>
                <button
                  type="button"
                  aria-label="Tutup"
                  onClick={() => setSelectedActivity(null)}
                  className="focus-soft inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-[1.5px] border-[#04342C] bg-white text-lg font-black text-[#04342C] shadow-[2px_2px_0_#0F6E56] transition-transform hover:-translate-y-0.5"
                >
                  X
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto bg-white px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                <h2
                  id="activity-modal-title"
                  className="font-heading break-words text-2xl leading-tight text-[#04342C] sm:text-3xl"
                >
                  {selectedActivity.judulKegiatan}
                </h2>
                <p className="mt-4 whitespace-pre-line break-words text-base leading-8 text-[#5F5E5A]">
                  {selectedActivity.deskripsiSingkat}
                </p>
              </div>

              {selectedActivity.linkKegiatan ? (
                <div className="shrink-0 border-t-[1.5px] border-[#E1F5EE] bg-white p-4 sm:p-5">
                  <a
                    href={selectedActivity.linkKegiatan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-soft inline-flex min-h-11 w-full items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-5 text-center font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5"
                  >
                    Buka dokumentasi -&gt;
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
