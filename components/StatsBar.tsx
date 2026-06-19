"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 13, suffix: "+", label: "Anggota relawan" },
  { value: 120, suffix: "+", label: "Buku dibaca" },
  { value: 2, suffix: "", label: "Kegiatan per bulan" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotionRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      reducedMotionRef.current = true;
      const animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(true);
        setCounts(stats.map((stat) => stat.value));
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || reducedMotionRef.current) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;
    const duration = 1100;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => Math.round(stat.value * easedProgress)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[8px] border-[1.5px] border-[#04342C] bg-[#E1F5EE] shadow-[2px_2px_0_#04342C] sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`border-b-[1.5px] border-[#04342C] px-5 py-5 text-center transition duration-500 ease-out last:border-b-0 hover:bg-white sm:border-b-0 sm:border-r-[1.5px] sm:px-4 sm:last:border-r-0 md:px-5 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 110}ms` }}
          >
            <p
              className="font-heading text-4xl leading-none text-[#04342C] md:text-5xl"
              aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
            >
              {counts[index]}
              {stat.suffix}
            </p>
            <p className="mt-1 text-base font-bold text-[#5F5E5A]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
