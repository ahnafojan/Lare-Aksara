"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { SanityImage } from "@/types";

type ProgramImageCarouselProps = {
  images: SanityImage[];
  title: string;
};

function EmptyProgramImage() {
  return (
    <div className="flex h-full min-h-72 items-center justify-center bg-[#E1F5EE]">
      <svg
        aria-hidden="true"
        viewBox="0 0 180 132"
        className="h-44 w-56"
        fill="none"
      >
        <path d="M25 30H78C90 30 96 38 96 50V106C87 97 78 95 64 95H25V30Z" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
        <path d="M96 50C96 38 103 30 115 30H155V95H120C110 95 103 98 96 106V50Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
        <path d="M96 50V106" stroke="#04342C" strokeWidth="1.5" />
        <path d="M42 52H71M42 67H74M116 52H142M116 67H144" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ProgramImageCarousel({
  images,
  title,
}: ProgramImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasMultipleImages = images.length > 1;

  function scrollToImage(index: number) {
    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    const container = scrollRef.current;

    if (!container) {
      setActiveIndex(nextIndex);
      return;
    }

    const slide = container.children.item(nextIndex) as HTMLElement | null;
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(nextIndex);
  }

  function handleScroll() {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, images.length - 1)));
  }

  return (
    <div className="soft-card mt-8 overflow-hidden bg-white p-2">
      <div className="relative overflow-hidden rounded-[6px] border-[1.5px] border-[#04342C]">
        {images.length > 0 ? (
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto scroll-smooth"
          >
            {images.map((image, index) => (
              <div
                key={`${image.asset?._id ?? image.asset?.url}-${index}`}
                className="relative h-full min-w-full snap-start"
              >
                <Image
                  src={image.asset?.url ?? ""}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="aspect-[4/3]">
            <EmptyProgramImage />
          </div>
        )}

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              aria-label="Gambar sebelumnya"
              onClick={() => scrollToImage(activeIndex - 1)}
              className="focus-soft absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border-[1.5px] border-[#04342C] bg-white/95 text-xl font-black text-[#04342C] shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-[55%] md:inline-flex"
            >
              &lt;
            </button>
            <button
              type="button"
              aria-label="Gambar berikutnya"
              onClick={() => scrollToImage(activeIndex + 1)}
              className="focus-soft absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border-[1.5px] border-[#04342C] bg-white/95 text-xl font-black text-[#04342C] shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-[55%] md:inline-flex"
            >
              &gt;
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="flex items-center justify-between gap-4 px-2 py-3">
          <p className="text-sm font-bold text-[#5F5E5A]">
            {activeIndex + 1} / {images.length}
          </p>
          <div className="flex flex-wrap justify-end gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.asset?._id ?? image.asset?.url}-dot-${index}`}
                type="button"
                aria-label={`Lihat gambar ${index + 1}`}
                onClick={() => scrollToImage(index)}
                className={`h-3 w-3 rounded-full border-[1.5px] border-[#04342C] ${
                  activeIndex === index ? "bg-[#1D9E75]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
