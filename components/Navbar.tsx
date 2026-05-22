"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Program", href: "/#program" },
  { label: "Event", href: "/#event" },
  { label: "Donasi", href: "/#donasi" },
];

const joinMailHref =
  "mailto:aksaralare@gmail.com?subject=Gabung%20ikut%20komunitas";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const isOpenRef = useRef(false);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef<number | null>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (scrollFrame.current !== null) {
        return;
      }

      scrollFrame.current = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const isScrollingDown = currentScrollY > lastScrollY.current;
        const shouldHide =
          isScrollingDown && currentScrollY > 96 && !isOpenRef.current;

        setIsHidden((currentValue) =>
          currentValue === shouldHide ? currentValue : shouldHide,
        );
        lastScrollY.current = currentScrollY;
        scrollFrame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, []);

  const shouldHideNavbar = isHidden && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-[1.5px] border-[#04342C] bg-white/95 backdrop-blur transition-transform duration-300 ease-out motion-reduce:transition-none ${
        shouldHideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <Link
          href="/"
          className="focus-soft flex min-h-11 items-center gap-3 rounded-lg"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Logo Lare Aksara"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-contain"
            sizes="48px"
            priority
          />
          <span className="font-heading text-lg text-[#04342C] sm:text-xl md:text-2xl">
            LAREAKSARA
          </span>
        </Link>

        <button
          type="button"
          className="focus-soft inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-white text-2xl font-black text-[#04342C] shadow-[2px_2px_0_#9FE1CB] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "×" : "☰"}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-soft inline-flex min-h-11 items-center rounded-md px-2 text-base font-bold text-[#04342C] transition-colors hover:text-[#1D9E75]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={joinMailHref}
          className="focus-soft hidden min-h-11 items-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-5 text-base font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Bergabung
        </a>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b-[1.5px] border-[#04342C] bg-white px-4 py-4 shadow-[0_2px_0_#9FE1CB] md:hidden"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-soft flex min-h-11 items-center rounded-lg border-[1.5px] border-[#04342C] bg-white px-4 font-bold text-[#04342C]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={joinMailHref}
              className="focus-soft mt-2 flex min-h-11 items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-4 font-black text-white shadow-[2px_2px_0_#04342C]"
              onClick={() => setIsOpen(false)}
            >
              Bergabung
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
