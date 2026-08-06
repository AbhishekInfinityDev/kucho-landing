"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO, HERO_SLIDES } from "@/lib/data";

export function Hero() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center py-20">
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === heroIdx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover brightness-[0.35]"
          />
        </div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="font-extrabold text-5xl lg:text-6xl mb-5 leading-tight">
            {HERO.title}
          </h1>
          <p className="text-base md:text-lg max-w-lg mb-8 leading-relaxed text-gray-200">
            {HERO.description}
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <a
              href={HERO.primaryCta.href}
              className="hidden sm:inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
            >
              {HERO.primaryCta.label}
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="inline-block border-2 border-white font-semibold text-sm rounded-full px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}