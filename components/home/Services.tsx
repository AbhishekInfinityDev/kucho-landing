"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { useGroupHover } from "@/lib/useGroupHover";
import { ArrowRightIcon } from "@/components/icons/arrow-right";

export function Services() {
  const serviceIcons = useGroupHover(SERVICES.items.length);

  return (
    <section id="services" className="bg-kucho-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3">
              {SERVICES.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {SERVICES.title}
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-gray-500 mb-6">{SERVICES.description}</p>
            <a
              href={SERVICES.cta.href}
              className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 w-max hover:bg-amber-400 hover:text-white transition-all duration-300"
            >
              {SERVICES.cta.label}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.items.map((svc, i) => (
            <div
              key={svc.title}
              className="bg-white rounded-xl overflow-hidden border border-kucho-500/10 hover:border-kucho-500 transition-all duration-300 group"
              onMouseEnter={serviceIcons.onEnter}
              onMouseLeave={serviceIcons.onLeave}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={svc.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-black mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {svc.desc}
                </p>
                <a
                  href="#contact"
                  className="font-semibold inline-flex items-center gap-2 text-sm hover:text-kucho-500 transition-colors"
                >
                  {svc.title} Service{" "}
                  <ArrowRightIcon size={16} ref={serviceIcons.setRef(i)} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}