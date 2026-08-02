"use client";

import { CTA } from "@/lib/data";

export function CTASection() {
  return (
    <section className="bg-kucho-800 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-kucho-300 uppercase tracking-widest mb-3">
              {CTA.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {CTA.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-300 mb-6 leading-relaxed">{CTA.description}</p>
            <a
              href={CTA.cta.href}
              className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
            >
              {CTA.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}