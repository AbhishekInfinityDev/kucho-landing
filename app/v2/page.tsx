"use client";

import React, { useState } from "react";
import Image from "next/image";

// SVG Icons as custom inline elements to maintain performance and avoid missing dependency issues
const Icons = {
  Check: () => (
    <svg className="w-5 h-5 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Cross: () => (
    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Play: () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Leaf: () => (
    <svg className="w-6 h-6 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Star: ({ filled = true }) => (
    <svg className={`w-5 h-5 ${filled ? "text-amber-400 fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5 mr-2 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5 mr-2 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-5 h-5 mr-2 text-kucho-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Ban: () => (
    <svg className="w-12 h-12 text-rose-500 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
      <circle cx={12} cy={12} r={9} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.3 5.3l13.4 13.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function KuchoLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [activePest, setActivePest] = useState("cockroach");
  const [submittedBooking, setSubmittedBooking] = useState(false);

  // Booking Form State
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    pestType: "Cockroach",
    date: "",
    message: ""
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedBooking(true);
    setTimeout(() => {
      setSubmittedBooking(false);
      setBooking({ name: "", phone: "", pestType: "Cockroach", date: "", message: "" });
    }, 4000);
  };

  const pestsData = {
    cockroach: {
      name: "Cockroach",
      title: "Cockroach Infestations & Extermination",
      description: "Cockroaches carry harmful bacteria and multiply at an alarming rate. Our dual-action treatment targets the nesting grounds directly and sets up a protective barrier to stop re-entry.",
      icon: "🪳",
      dangerLevel: "High",
      treatmentTime: "1-2 Hours"
    },
    mosquito: {
      name: "Mosquito",
      title: "Mosquito Breeding Control",
      description: "Stop mosquitoes from turning your yard into a hazard zone. We locate breeding sources, treat standing water areas, and implement mist barriers that keep them away for weeks.",
      icon: "🦟",
      dangerLevel: "Extreme",
      treatmentTime: "45 Mins"
    },
    bedbug: {
      name: "Bed Bug",
      title: "Bed Bug Heat & Spray Treatment",
      description: "Don't let bed bugs ruin your sleep. We perform ultra-thorough thermal inspections and apply target treatment that eliminates adult bed bugs and their eggs instantly.",
      icon: "🪲",
      dangerLevel: "Medium",
      treatmentTime: "2-3 Hours"
    },
    termite: {
      name: "Termite",
      title: "Termite Defense & Structural Protection",
      description: "Termites cause billions in home damage yearly. We install baiting systems and liquid barriers around your home's foundation to guarantee total colony elimination.",
      icon: "🐜",
      dangerLevel: "Critical",
      treatmentTime: "3-5 Hours"
    }
  };

  return (
    <div className="bg-kucho-light text-zinc-900 font-sans min-h-screen selection:bg-kucho-forest selection:text-kucho-dark">
      {/* 1. HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-kucho-forest/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Kucho" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-black/80">
            <a href="#home" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">Home</a>
            <a href="#about" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">About Us</a>
            <a href="#services" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">Services</a>
            <a href="#pests" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">Pests</a>
            <a href="#pricing" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">Pricing</a>
            <a href="#testimonials" className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">Testimonials</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#book"
              className="px-6 h-12 flex items-center justify-center text-sm font-bold bg-kucho-forest text-white rounded-full transition-all duration-300 hover:bg-kucho-dark hover:scale-105 active:scale-95"
            >
              Get Free Estimate
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-kucho-forest hover:text-kucho-forest focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-white border-t border-kucho-forest/10 absolute top-20 left-0 w-full animate-fade-in-up">
            <nav className="flex flex-col gap-4 font-semibold text-black/80">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">About Us</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">Services</a>
              <a href="#pests" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">Pests</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">Pricing</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-kucho-forest transition-colors">Testimonials</a>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full h-12 flex items-center justify-center font-bold bg-kucho-forest text-white rounded-full transition-all hover:bg-kucho-dark"
              >
                Get Free Estimate
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-kucho-light to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-kucho-forest/5 border border-kucho-forest/10 rounded-full text-black text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-kucho-forest animate-ping"></span>
              #1 Pest Control Company
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-black mb-6">
              Protecting homes with expert pest control
            </h1>

            <p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
              We offer professional, eco-friendly, and highly effective pest control treatments. Our certified team guarantees peace of mind and pest-free living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a
                href="#book"
                className="px-8 h-14 flex items-center justify-center font-bold bg-kucho-forest text-kucho-dark rounded-full transition-all duration-300 hover:bg-kucho-forest hover:scale-105 active:scale-95"
              >
                Schedule Inspection
              </a>
              <a
                href="#services"
                className="px-8 h-14 flex items-center justify-center font-bold border-2 border-kucho-forest/10 text-kucho-forest hover:bg-kucho-forest/5 rounded-full transition-all duration-300 hover:scale-105"
              >
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-kucho-forest/10 w-full max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kucho-forest/20 flex items-center justify-center font-bold text-black">
                  10k+
                </div>
                <div>
                  <div className="text-sm font-extrabold text-black">Happy Clients</div>
                  <div className="text-xs text-zinc-500 font-medium">5-Star Verified Reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kucho-forest/20 flex items-center justify-center font-bold text-black">
                  100%
                </div>
                <div>
                  <div className="text-sm font-extrabold text-black">Satisfaction</div>
                  <div className="text-xs text-zinc-500 font-medium">Money-Back Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white">
            <Image
              src="/images/hero-bg.png"
              alt="Beautiful clean residential house illustration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              preload={true}
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 border border-kucho-forest/5">
              <div className="w-12 h-12 bg-kucho-forest rounded-xl flex items-center justify-center text-white shrink-0 font-bold text-lg">
                ★
              </div>
              <div>
                <p className="text-sm font-bold text-black">Award-Winning Service</p>
                <p className="text-xs text-zinc-500 font-medium">Voted Best Pest Exterminators 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARTNERS LOGOS BAR */}
      <section className="py-10 bg-white border-y border-kucho-forest/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
            As Featured & Trusted In Major Publications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="text-xl font-bold tracking-tight text-zinc-400 hover:text-kucho-forest transition-colors select-none">
              🛡️ BioShield
            </span>
            <span className="text-xl font-bold tracking-tight text-zinc-400 hover:text-kucho-forest transition-colors select-none">
              🌿 EcoGuard
            </span>
            <span className="text-xl font-bold tracking-tight text-zinc-400 hover:text-kucho-forest transition-colors select-none">
              🏠 SafeNest
            </span>
            <span className="text-xl font-bold tracking-tight text-zinc-400 hover:text-kucho-forest transition-colors select-none">
              🦠 BugBlocker
            </span>
            <span className="text-xl font-bold tracking-tight text-zinc-400 hover:text-kucho-forest transition-colors select-none">
              🌍 GreenHealth
            </span>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-kucho-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Overlapping premium images */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[400px] sm:h-[500px]">
            {/* Background larger image */}
            <div className="absolute w-[75%] aspect-square rounded-3xl overflow-hidden border-4 border-white left-0 top-0 transition-transform duration-500 hover:scale-105 hover:z-20">
              <Image
                src="/images/pest-technician-1.png"
                alt="Pest control technician spraying interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            {/* Front smaller image */}
            <div className="absolute w-[60%] aspect-square rounded-3xl overflow-hidden border-8 border-white right-0 bottom-0 z-10 transition-transform duration-500 hover:scale-105 hover:z-20">
              <Image
                src="/images/pest-bug.png"
                alt="Macro bug on leaf"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              ABOUT OUR EXPERT TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6">
              Dedicated to protecting your home from invasive pests.
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              For over 25 years, Kucho has provided home and business owners with premium extermination and prevention services. We combine cutting-edge green technology with seasoned expertise to deliver lasting pest-free results.
            </p>

            <div className="flex flex-col gap-4 mb-8 w-full">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-kucho-forest/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icons.Check />
                </div>
                <div>
                  <h4 className="font-extrabold text-black text-sm">Certified & Licensed Technicians</h4>
                  <p className="text-xs text-zinc-500 font-medium">All technicians undergo rigorous training and hold national certifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-kucho-forest/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icons.Check />
                </div>
                <div>
                  <h4 className="font-extrabold text-black text-sm">Eco-Friendly & Safe Spray Formulas</h4>
                  <p className="text-xs text-zinc-500 font-medium">Safe for kids and pets, targeting pests selectively with zero harsh residues.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-kucho-forest/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icons.Check />
                </div>
                <div>
                  <h4 className="font-extrabold text-black text-sm">24-Hour Emergency Dispatch</h4>
                  <p className="text-xs text-zinc-500 font-medium">Struggling with a late-night infestation? We offer prompt 24/7 priority support.</p>
                </div>
              </div>
            </div>

            <a
              href="#book"
              className="px-8 h-12 flex items-center justify-center font-bold bg-kucho-forest text-white rounded-full transition-all duration-300 hover:bg-kucho-dark hover:scale-105"
            >
              Get Protected Today
            </a>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              OUR SERVICE OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Safe & reliable pest control services and solutions
            </h2>
            <p className="text-sm text-zinc-500 font-medium mt-4">
              Select a specialized plan that matches your property size and unique pest control challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-kucho-forest rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:bg-kucho-forest group-hover:text-kucho-dark">
                🏠
              </div>
              <h3 className="text-xl font-extrabold text-black mb-4">Residential Protection</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Protect your home, family, and garden from common pests. We implement a durable barrier to keep critters outdoors.
              </p>
              <ul className="text-xs font-semibold text-black/90 space-y-3 mb-8 w-full">
                <li className="flex items-center gap-2">
                  <Icons.Check /> Full Exterior Perimeter Spray
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Nest Removal & Sweeping
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Indoor Safe Crack Treatments
                </li>
              </ul>
              <a href="#book" className="mt-auto inline-flex items-center font-bold text-black hover:text-black text-sm group">
                Request Service <Icons.ChevronRight />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-kucho-forest rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:bg-kucho-forest group-hover:text-kucho-dark">
                🏢
              </div>
              <h3 className="text-xl font-extrabold text-black mb-4">Commercial Solutions</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Keep your business code-compliant and sanitary. Tailored scheduling to prevent business hours disruption.
              </p>
              <ul className="text-xs font-semibold text-black/90 space-y-3 mb-8 w-full">
                <li className="flex items-center gap-2">
                  <Icons.Check /> Full Compliance Documentation
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Unobtrusive Disinfection
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Multi-Unit Custom Programs
                </li>
              </ul>
              <a href="#book" className="mt-auto inline-flex items-center font-bold text-black hover:text-black text-sm group">
                Request Service <Icons.ChevronRight />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-kucho-forest rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:bg-kucho-forest group-hover:text-kucho-dark">
                🚨
              </div>
              <h3 className="text-xl font-extrabold text-black mb-4">Emergency Extermination</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Urgent, heavy infestations. Rapid dispatch to evaluate, treat, and quarantine complex structural pest outbreaks.
              </p>
              <ul className="text-xs font-semibold text-black/90 space-y-3 mb-8 w-full">
                <li className="flex items-center gap-2">
                  <Icons.Check /> Under 2-Hour Technician Arrival
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Deep Thermal Infestation Scan
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check /> Guaranteed Instant Knockdown
                </li>
              </ul>
              <a href="#book" className="mt-auto inline-flex items-center font-bold text-black hover:text-black text-sm group">
                Request Service <Icons.ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-kucho-light">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              WHY CHOOSE KUCHO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6">
              Affordable, unbeatable, & certified pest control.
            </h2>
            <p className="text-zinc-600 mb-8 max-w-xl">
              We stand apart through our ironclad satisfaction guarantees and upfront pricing structures. You pay for real results, not hours on site.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 w-full mb-8">
              <div className="bg-white p-5 rounded-2xl border border-kucho-forest/5">
                <h4 className="font-extrabold text-black mb-2">✓ No Hidden Costs</h4>
                <p className="text-xs text-zinc-500 font-medium">Flat estimates with clear features itemized. What you see is what you pay.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-kucho-forest/5">
                <h4 className="font-extrabold text-black mb-2">✓ Prompt & Reliable</h4>
                <p className="text-xs text-zinc-500 font-medium">We stick strictly to scheduled hours. If we show up late, your service fee is discounted.</p>
              </div>
            </div>

            <div className="bg-kucho-forest text-white p-6 rounded-2xl flex items-center gap-4 w-full max-w-md">
              <div className="w-12 h-12 bg-kucho-forest text-kucho-dark rounded-xl flex items-center justify-center font-extrabold text-xl">
                25k
              </div>
              <div>
                <p className="text-sm font-bold text-white">Active Homes Protected</p>
                <p className="text-xs text-black font-medium">Eliminating local infestations every day.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white">
            <Image
              src="/images/pest-technicians-garden.png"
              alt="Pest control technicians spraying outdoor landscaping"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* 7. CORE FEATURES (DARK GREEN BACKGROUND) */}
      <section className="py-24 bg-kucho-forest text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-kucho-forest/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-kucho-forest/20 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              PREMIUM STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Core features that set our pest control service apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-kucho-forest/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-kucho-forest/10 flex items-center justify-center mb-6">
                <Icons.Leaf />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Eco-Friendly Pesticides</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We prioritize organic, non-toxic products that eradicate pests quickly while preserving the surrounding environment, pets, and children.
              </p>
            </div>

            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-kucho-forest/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-kucho-forest/10 flex items-center justify-center mb-6">
                <Icons.Users />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Certified Professionals</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Our technicians are fully bonded, licensed, and background-checked. We continuously train our staff on modern safety methodologies.
              </p>
            </div>

            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-kucho-forest/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-kucho-forest/10 flex items-center justify-center mb-6">
                <Icons.Shield />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">100% Satisfaction Shield</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                If the pests return between scheduled treatment services, we return to re-treat your residential space completely free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PESTS WE TREAT (INTERACTIVE) */}
      <section id="pests" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              PEST SPECTRUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
              Protecting your home from all key pest groups
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              We diagnose, extract, and establish durable physical/chemical blockades against standard local species.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Tabs selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {Object.keys(pestsData).map((key) => {
                const pest = pestsData[key as keyof typeof pestsData];
                const isActive = activePest === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActivePest(key)}
                    className={`flex items-center justify-between p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none ${ isActive ? "bg-kucho-forest border-kucho-forest text-white" : "bg-kucho-light border-kucho-forest/10 text-kucho-forest hover:bg-white hover:border-kucho-forest" }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl select-none">{pest.icon}</span>
                      <div>
                        <span className="font-extrabold text-base block">{pest.name}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? "text-kucho-forest" : "text-zinc-400"}`}>
                          Danger: {pest.dangerLevel}
                        </span>
                      </div>
                    </div>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-kucho-forest text-kucho-dark" : "bg-kucho-forest/5"}`}>
                      ➔
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Display area */}
            <div className="lg:col-span-7 bg-kucho-light rounded-3xl p-8 lg:p-12 border border-kucho-forest/5 animate-fade-in-up text-left">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl select-none">{pestsData[activePest as keyof typeof pestsData].icon}</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-black">
                    {pestsData[activePest as keyof typeof pestsData].title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-rose-500/10 text-rose-600 text-xs font-bold rounded-full mt-1">
                    Danger Level: {pestsData[activePest as keyof typeof pestsData].dangerLevel}
                  </span>
                </div>
              </div>

              <p className="text-zinc-600 mb-8 leading-relaxed">
                {pestsData[activePest as keyof typeof pestsData].description}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-kucho-forest/10 mb-8">
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                    Average Treatment Duration
                  </span>
                  <span className="font-extrabold text-black text-lg">
                    {pestsData[activePest as keyof typeof pestsData].treatmentTime}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                    Extermination Guarantee
                  </span>
                  <span className="font-extrabold text-black text-lg">
                    6 Months Full Warranty
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#book"
                  className="px-6 h-12 flex items-center justify-center font-bold bg-kucho-forest text-white rounded-full transition-all hover:bg-kucho-dark"
                >
                  Book {pestsData[activePest as keyof typeof pestsData].name} Treatment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROCESS SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-kucho-light text-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white lg:order-2">
            <Image
              src="/images/pest-bug.png"
              alt="Macro insect treatment details"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl max-w-[200px] border border-kucho-forest/5">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icons.Star key={s} />
                ))}
              </div>
              <p className="text-[10px] font-bold text-black">“Highly recommended pest company, quick response and professional.”</p>
              <p className="text-[9px] text-zinc-400 mt-1 font-semibold">- Sarah K., Residential Owner</p>
            </div>
          </div>

          <div className="lg:col-span-7 text-left lg:order-1">
            <span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              WORKFLOW STAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-8">
              Our Pest Control Process for Safe & Effective Results
            </h2>

            <div className="relative pl-8 border-l-2 border-kucho-forest/10 space-y-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-kucho-forest border-4 border-white flex items-center justify-center font-bold text-[10px] text-kucho-dark">
                  1
                </span>
                <h4 className="font-extrabold text-black text-base mb-1">Complete Home Evaluation</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  We perform a full inspection of the attic, foundation, siding, and sub-structure to map pest routes.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-kucho-forest border-4 border-white flex items-center justify-center font-bold text-[10px] text-kucho-dark">
                  2
                </span>
                <h4 className="font-extrabold text-black text-base mb-1">Custom Targeted Treatment</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Using organic liquid barrier sprays, gel baits, and dust treatment in crevices to neutralize colonies.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-kucho-forest border-4 border-white flex items-center justify-center font-bold text-[10px] text-kucho-dark">
                  3
                </span>
                <h4 className="font-extrabold text-black text-base mb-1">Barrier Protection & Warranty</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  We install perimeter defenses to block pest re-entry, backed by our 100% money-back satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              MEMBERSHIP PLANS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6">
              Customized pricing plans for your pest control needs
            </h2>

            {/* Toggle Switch */}
            <div className="inline-flex items-center bg-kucho-light p-1 rounded-full border border-kucho-forest/10">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none ${ billingPeriod === "monthly" ? "bg-kucho-forest text-white" : "text-kucho-forest" }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none ${ billingPeriod === "yearly" ? "bg-kucho-forest text-white" : "text-kucho-forest" }`}
              >
                Yearly Billing (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 */}
            <div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden">
              <div>
                <h3 className="text-lg font-extrabold text-black mb-2">Basic Protect</h3>
                <p className="text-xs text-zinc-500 font-medium mb-6">Ideal for standard single-family homes struggling with minor bugs.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-black">
                    ${billingPeriod === "monthly" ? "99" : "79"}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold ml-1">/ month</span>
                </div>
                <div className="h-[1px] bg-kucho-forest/10 mb-6"></div>
                <ul className="text-xs font-semibold text-black/90 space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Quarterly exterior barrier spray
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> General ants and beetle control
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Standard spider nest removal
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <Icons.Cross /> Termite chemical barriers
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <Icons.Cross /> 24/7 priority emergency dispatch
                  </li>
                </ul>
              </div>
              <a
                href="#book"
                className="w-full h-12 flex items-center justify-center text-sm font-bold bg-white border border-kucho-forest/15 text-kucho-forest hover:bg-kucho-forest hover:text-white rounded-full transition-all duration-300"
              >
                Choose Basic Plan
              </a>
            </div>

            {/* Plan 2 - Recommended */}
            <div className="bg-white rounded-3xl p-8 border-4 border-kucho-forest flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-kucho-forest text-kucho-dark text-[10px] font-bold tracking-widest uppercase px-6 py-2 rounded-bl-2xl">
                Most Popular
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-black mb-2">Standard Shield</h3>
                <p className="text-xs text-zinc-500 font-medium mb-6">Comprehensive protection for active properties with persistent pests.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-black">
                    ${billingPeriod === "monthly" ? "150" : "119"}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold ml-1">/ month</span>
                </div>
                <div className="h-[1px] bg-kucho-forest/10 mb-6"></div>
                <ul className="text-xs font-semibold text-black/90 space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Every-other-month treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Eradication of 25+ standard pests
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Full interior & exterior spraying
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Wasp & hornet nest neutralization
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <Icons.Cross /> Specialized wood-boring termite check
                  </li>
                </ul>
              </div>
              <a
                href="#book"
                className="w-full h-12 flex items-center justify-center text-sm font-bold bg-kucho-forest text-kucho-dark hover:bg-kucho-forest rounded-full transition-all duration-300"
              >
                Choose Standard Plan
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden">
              <div>
                <h3 className="text-lg font-extrabold text-black mb-2">Premium Defense</h3>
                <p className="text-xs text-zinc-500 font-medium mb-6">Unbeatable full-spectrum warranty and absolute structural security.</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-black">
                    ${billingPeriod === "monthly" ? "250" : "199"}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold ml-1">/ month</span>
                </div>
                <div className="h-[1px] bg-kucho-forest/10 mb-6"></div>
                <ul className="text-xs font-semibold text-black/90 space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Monthly treatment & checks
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Complete rodent & mosquito control
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Premium termite baiting systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> Free emergency return treatments
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.Check /> 24/7 Priority Emergency dispatch
                  </li>
                </ul>
              </div>
              <a
                href="#book"
                className="w-full h-12 flex items-center justify-center text-sm font-bold bg-white border border-kucho-forest/15 text-kucho-forest hover:bg-kucho-forest hover:text-white rounded-full transition-all duration-300"
              >
                Choose Premium Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS (DARK GREEN BACKGROUND) */}
      <section id="testimonials" className="py-24 bg-kucho-forest text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kucho-forest/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-kucho-forest/20 rounded-md text-black text-xs font-bold tracking-wider mb-4">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What our customers say about pest control
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icons.Star key={s} />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  “We struggled with ants for months. Kucho sent a technician the next morning. Their exterior spray works like magic, haven&apos;t seen a single bug since.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-kucho-forest text-kucho-dark flex items-center justify-center font-bold text-xs select-none">
                  JD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Johnathan Davis</h4>
                  <p className="text-[10px] text-zinc-400 font-semibold">Residential Property Owner</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icons.Star key={s} />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  “Best commercial pest service in town. They treat our kitchens during off-hours, ensuring zero impact on customers. Extremely professional and thorough.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-kucho-forest text-kucho-dark flex items-center justify-center font-bold text-xs select-none">
                  MR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Marcus Rivera</h4>
                  <p className="text-[10px] text-zinc-400 font-semibold">Bistro Owner & Manager</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-kucho-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Icons.Star key={s} />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  “I appreciate that their spray formulas are safe for my dogs. The technicians were friendly, explained everything, and clean up afterwards. Deserves 5 stars!”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-kucho-forest text-kucho-dark flex items-center justify-center font-bold text-xs select-none">
                  LH
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Lara Harrison</h4>
                  <p className="text-[10px] text-zinc-400 font-semibold">Homeowner & Pet Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FREE ESTIMATE BOOKING FORM */}
      <section id="book" className="py-24 bg-gradient-to-b from-white to-kucho-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
            EASY SCHEDULING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4">
            Book your free pest inspection & quote
          </h2>
          <p className="text-sm text-zinc-500 font-medium max-w-lg mx-auto mb-12">
            Submit your information below. A pest specialist will reach out within 15 minutes to confirm details.
          </p>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-kucho-forest/5 text-left relative">
            {submittedBooking ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-kucho-forest/20 flex items-center justify-center text-kucho-forest font-bold text-3xl mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Request Submitted Successfully!</h3>
                <p className="text-sm text-zinc-500 font-medium">We have received your estimate request and our team is routing a technician to call you back.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-kucho-forest/15 focus:outline-none focus:border-kucho-forest text-sm font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-kucho-forest/15 focus:outline-none focus:border-kucho-forest text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2" htmlFor="pest">
                      Pest Category
                    </label>
                    <select
                      id="pest"
                      value={booking.pestType}
                      onChange={(e) => setBooking({ ...booking, pestType: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-kucho-forest/15 focus:outline-none focus:border-kucho-forest text-sm font-semibold transition-all bg-white"
                    >
                      <option value="Cockroach">Cockroaches</option>
                      <option value="Mosquito">Mosquitoes</option>
                      <option value="Bedbug">Bed Bugs</option>
                      <option value="Termite">Termites</option>
                      <option value="Other">Other Pests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-kucho-forest/15 focus:outline-none focus:border-kucho-forest text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2" htmlFor="message">
                    Describe infestation (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Provide details about the issue..."
                    value={booking.message}
                    onChange={(e) => setBooking({ ...booking, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-kucho-forest/15 focus:outline-none focus:border-kucho-forest text-sm font-semibold transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 flex items-center justify-center font-bold bg-kucho-forest text-kucho-dark hover:bg-kucho-forest rounded-xl transition-all"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-kucho-dark text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-kucho-forest flex items-center justify-center text-kucho-dark font-bold text-base">
                k
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                kucho<span className="text-kucho-forest">.</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Premium pest elimination and long-term protective barriers. Keeping families and business spaces secure.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
              <span className="hover:text-kucho-forest cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-kucho-forest cursor-pointer transition-colors">Facebook</span>
              <span className="hover:text-kucho-forest cursor-pointer transition-colors">LinkedIn</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="text-xs text-zinc-400 space-y-4 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About History</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Extermination services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Plan Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Our Services</h4>
            <ul className="text-xs text-zinc-400 space-y-4 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Spray</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Program</a></li>
              <li><a href="#pests" className="hover:text-white transition-colors">Termite Barrier systems</a></li>
              <li><a href="#pests" className="hover:text-white transition-colors">Bed Bug Heat solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Us</h4>
            <ul className="text-xs text-zinc-400 space-y-4 font-medium">
              <li className="flex items-center"><Icons.Phone /> (555) 123-4567</li>
              <li className="flex items-center"><Icons.Mail /> support@kuchopest.com</li>
              <li className="flex items-center"><Icons.Clock /> Mon - Sat: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-400 font-semibold">
          <p>© 2026 Kucho Pest Control LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
