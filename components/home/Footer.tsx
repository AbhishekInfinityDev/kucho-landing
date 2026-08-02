"use client";

import Image from "next/image";
import { FOOTER } from "@/lib/data";
import { useGroupHover } from "@/lib/useGroupHover";
import { PhoneIcon } from "@/components/icons/phone";

export function Footer() {
  const socialIcons = useGroupHover(FOOTER.socials.length);
  const phoneIcons = useGroupHover(1);

  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-1/2">
            <a
              href="#"
              className="text-3xl font-extrabold text-black flex items-center gap-1 mb-6"
            >
              <Image
                src="/logo.png"
                alt="Kucho"
                width={140}
                height={98}
                className="h-20 w-auto"
              />
            </a>
            <p className="text-black text-sm leading-relaxed max-w-sm">
              {FOOTER.description}
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 md:items-end">
            <div className="flex gap-3">
              {FOOTER.socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-kucho-500 flex items-center justify-center text-black text-sm hover:bg-kucho-400 transition-colors"
                  onMouseEnter={socialIcons.onEnter}
                  onMouseLeave={socialIcons.onLeave}
                >
                  <Icon size={16} ref={socialIcons.setRef(i)} />
                </a>
              ))}
            </div>
            <div
              className="flex items-center gap-2 text-black text-sm"
              onMouseEnter={phoneIcons.onEnter}
              onMouseLeave={phoneIcons.onLeave}
            >
              <PhoneIcon size={16} className="text-black" ref={phoneIcons.setRef(0)} />
              {FOOTER.phone}
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-10 pt-6 flex flex-col sm:flex-row gap-2 justify-center text-center text-xs text-black">
          <p>{FOOTER.copyright}</p>
          <p className="hidden sm:block">|</p>
          <p>{FOOTER.credit}</p>
        </div>
      </div>
    </footer>
  );
}