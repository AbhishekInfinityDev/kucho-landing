"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XIcon } from "@/components/icons/x";
import { MenuIcon } from "@/components/icons/menu";
import { NAV_LINKS } from "@/lib/data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "border-b border-kucho-500/10" : ""
      }`}
    >
      <div className="bg-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between h-[80px] py-10 text-white text-sm font-semibold">
            <a href="#" className="flex items-center gap-2 select-none">
              <Image
                src="/logo.png"
                alt="Kucho"
                width={140}
                height={98}
                className="h-20 w-auto"
              />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
              >
                View Our Plans
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white text-2xl p-2"
                aria-label="Toggle menu"
              >
                {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`lg:hidden bg-kucho-500 border-t border-white/20 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-white text-sm font-medium">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-kucho-200 transition-colors py-2"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 text-center mt-2 hover:bg-amber-400 hover:text-white transition-all duration-300"
          >
            View Our Plans
          </a>
        </div>
      </div>
    </header>
  );
}