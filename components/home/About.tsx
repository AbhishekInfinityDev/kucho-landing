"use client";

import Image from "next/image";
import { ABOUT } from "@/lib/data";
import { useGroupHover } from "@/lib/useGroupHover";

export function About() {
  const aboutIcons = useGroupHover(ABOUT.highlights.length);

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={ABOUT.image}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                {ABOUT.stats.map((item) => (
                  <div
                    key={item.title}
                    className="bg-kucho-800 rounded-xl flex flex-col justify-center items-center p-6"
                  >
                    <h2 className="text-4xl text-white font-extrabold text-kucho-300 leading-none">
                      {item.number}
                    </h2>
                    <p className="text-white font-semibold text-center mt-2 leading-tight">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="font-semibold text-xs uppercase tracking-widest mb-3">
            {ABOUT.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            {ABOUT.title}
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">{ABOUT.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {ABOUT.highlights.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
                onMouseEnter={aboutIcons.onEnter}
                onMouseLeave={aboutIcons.onLeave}
              >
                <div className="w-12 h-12 bg-kucho-50 rounded-lg flex items-center justify-center text-kucho-500 flex-shrink-0">
                  <item.icon size={24} ref={aboutIcons.setRef(i)} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-black">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={ABOUT.cta.href}
            className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
          >
            {ABOUT.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}