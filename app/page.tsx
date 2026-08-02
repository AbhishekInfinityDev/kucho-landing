"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { MenuIcon } from "@/components/icons/menu";
import { XIcon } from "@/components/icons/x";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { ZapIcon } from "@/components/icons/zap";
import { PhoneIcon } from "@/components/icons/phone";
import { MailCheckIcon } from "@/components/icons/mail-check";
import { ClockIcon } from "@/components/icons/clock";
import { FacebookIcon } from "@/components/icons/facebook";
import { TwitterIcon } from "@/components/icons/twitter";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { InstagramIcon } from "@/components/icons/instagram";
import { ChevronLeftIcon } from "@/components/icons/chevron-left";
import { ChevronRightIcon } from "@/components/icons/chevron-right";

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

function useGroupHover(count: number) {
  const refs = useRef<(IconHandle | null)[]>(new Array(count).fill(null));
  const setRef = (i: number) => (el: IconHandle | null) => {
    refs.current[i] = el;
  };
  const onEnter = () => refs.current.forEach((r) => r?.startAnimation());
  const onLeave = () => refs.current.forEach((r) => r?.stopAnimation());
  return { setRef, onEnter, onLeave };
}

const testimonials = [
  {
    text: "Professional cleaning end result was more that expected really recommend it......",
    author: "deepshikha rana",
    title: "Google Review",
    initials: "DR",
    stars: 5,
  },
  {
    text: "Very responsive and quick service. Hope u will keep your services all the time to all clients. We will definitely use your service in future if we require any.",
    author: "Pushpa Shrestha",
    title: "Google Review",
    initials: "PS",
    stars: 4,
  },
  {
    text: "Kuch team performed a deep clean of my living room. Very satisfied with the team they sent and the cleaning work was very satisfactory. Specially recommended for sofa cleaning",
    author: "nikita motani",
    title: "Google Review",
    initials: "NM",
    stars: 4,
  },
  {
    text: "Good service. Thank you",
    author: "Kami Sherpa",
    title: "Google Review",
    initials: "KS",
    stars: 5,
  },
];

const services = [
  {
    title: "Rodent Control",
    desc: "Eliminate rats and mice before they damage your property or contaminate food supplies.",
    img: "/services/rodent_control.png",
  },
  {
    title: "Termite Treatment",
    desc: "Protect wooden structures, furniture and buildings from costly termite damage.",
    img: "/services/termite.png",
  },
  {
    title: "Bed Bugs Control",
    desc: "Effective treatments designed to eliminate bed bugs and prevent re-infestation.",
    img: "/services/bedbug.png",
  },
  {
    title: "Cockroach Control",
    desc: "Target infestations at the source and keep your property pest free.",
    img: "/services/cockroach.png",
  },
  {
    title: "Mosquito Control",
    desc: "Reduce mosquito populations around homes, gardens, and workplaces.",
    img: "/services/mosquito.png",
  },
  {
    title: "Ant Control",
    desc: "Remove active colonies and prevent recurring ant infestations.",
    img: "/services/ant.png",
  },
];

const heroSlides = [
  "/images/hero-image1.jpeg",
  "/images/hero-image2.jpeg",
  "/images/hero-image3.jpeg",
];

const videoTestimonials = [
  {
    src: "/videos-testimonials/v1.webm",
    title: "Deepshikha Rana",
    subtitle: "Google Review",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contactIcons = useGroupHover(3);
  const aboutIcons = useGroupHover(2);
  const serviceIcons = useGroupHover(services.length);
  const socialIcons = useGroupHover(4);
  const phoneIcons = useGroupHover(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToVideo = (i: number) => {
    setVideoIdx(
      (i + videoTestimonials.length) % videoTestimonials.length
    );
    setVideoPlaying(false);
    setVideoEnded(false);
  };

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setVideoPlaying(true);
      setVideoEnded(false);
    } else {
      v.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Preloader removed — not needed in SPA */}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "border-b border-kucho-500/10" : ""
        }`}
      >
        <div className="bg-white backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <nav className="flex items-center justify-between h-[80px] py-10 text-white text-sm font-semibold">
              <a href="#" className="flex items-center gap-2 select-none">
                <img src="/logo.png" alt="Kucho" className="h-20 w-auto" />
              </a>
              {/* <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-kucho-500 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div> */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="hidden sm:inline-block bg-amber-300  text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
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
            {["Home", "About", "Services", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-kucho-200 transition-colors py-2"
                >
                  {item}
                </a>
              ),
            )}
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

      {/* Hero */}
      <section className="relative  flex items-center py-20">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIdx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover brightness-[0.35]"
            />
          </div>
        ))}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold text-kucho-300 mb-3 tracking-widest uppercase">
TRUSTED PEST CONTROL EXPERTS IN NEPAL
            </p>
            <h1 className="font-extrabold text-5xl lg:text-6xl mb-5 leading-tight">
              {/* All Pest Solutions */}
Professional Pest Control Services in Kathmandu Valley
            </h1>
            <p className="text-base md:text-lg max-w-lg mb-8 leading-relaxed text-gray-200">
Protect your home or business from termites, cockroaches, rodents, bed bugs, mosquitoes and more. Safe, effective pest control solutions trusted across Kathmandu, Lalitpur and Bhaktapur.
            </p>
            <div className="flex items-center flex-wrap gap-4">
                <a
                  href="#contact"
                  className="hidden sm:inline-block bg-amber-300  text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
                >
                  View Our Plans
                </a>
              <a
                href="#services"
                className="inline-block border-2 border-white font-semibold text-sm rounded-full px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3">
BOOK AN INSPECTION
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
Schedule Your Free Pest Inspection
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
 Fill out the form and our pest control experts will contact you shortly to schedule a free, no obligation inspection for your home or business
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: PhoneIcon,
                  title: "Phone",
                  value: "9802317551",
                },
                {
                  icon: MailCheckIcon,
                  title: "Email",
                  value: "info@kucho.co",
                },
                {
                  icon: ClockIcon,
                  title: "Working Hours",
                  value: "Sun – Fri: 8:00 AM – 6:00 PM",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                  onMouseEnter={contactIcons.onEnter}
                  onMouseLeave={contactIcons.onLeave}
                >
                  <div className="w-12 h-12 bg-kucho-50 rounded-lg flex items-center justify-center text-kucho-500 flex-shrink-0">
                    <item.icon size={20} ref={contactIcons.setRef(i)} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-kucho-600 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">
Book Your Inspection
            </h3>
            <form>
              {["Name", "Email", "Phone Number"].map((field) => (
                <div key={field} className="mb-4 ">
                  <label className="text-sm font-medium text-white mb-1 block">
                    {field}
                  </label>
                  <input
                    type={
                      field === "Email"
                        ? "email"
                        : field === "Phone Number"
                          ? "tel"
                          : "text"
                    }
                    placeholder={`Your ${field}`}
                    className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-500 border border-transparent focus:border-white bg-white"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="text-sm font-medium text-white mb-1 block">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your pest problem"
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-500 border border-transparent focus:border-white resize-none bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
              >
                Request Inspection
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
                {/* src="https://storage.googleapis.com/a1aa/image/016deda5-3daa-4ded-f491-27caad55848d.jpg" */}
              <img
                src={"/images/kucho-1.jpeg"}
                alt=""
                className="rounded-xl object-cover "
              />
              <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
              {[
                {
                  number: "500+",
                  title: "Properties Protected",
                },
                {
                  number: "100%",
                  title: "Safe & Proven Methods",
                },
                {
                  number: "Trusted",
                  title: "Across Kathmandu Valley",
                },
              ].map((item) => (
                <div className="bg-kucho-800 rounded-xl flex flex-col justify-center items-center p-6">

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
ABOUT KUCHO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
Kathmandu Valley's Trusted Pest Control Experts
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
Kucho is one of Kathmandu Valley's most trusted names in pest control, protecting homes and businesses from termites, rodents, cockroaches, bed bugs, mosquitoes and other common pests. Our trained technicians use safe and proven methods to deliver lasting results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

              {[
                {
                  icon: ShieldCheckIcon,
                  title: "Residential Pest Control ",
                  desc: "Protect your family and property from unwanted pests with treatments designed for Nepali homes.",
                },
                {
                  icon: ZapIcon,
                  title: "Commercial Pest Management",
                  desc: "Reliable pest control for offices, restaurants, hotels and retail spaces across the valley.",
                },
              ].map((item, i) => (
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
                    <h3 className="font-bold text-base text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
                className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
              >
                Schedule a Free Inspection
              </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-kucho-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3">
OUR SERVICES
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
Solutions For Every Pest
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-gray-500 mb-6">
From homes and apartments to restaurants and commercial facilities, we deliver reliable pest control solutions tailored to properties across Kathmandu Valley.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 w-max hover:bg-amber-400 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl overflow-hidden border border-kucho-500/10 hover:border-kucho-500 transition-all duration-300 group"
                onMouseEnter={serviceIcons.onEnter}
                onMouseLeave={serviceIcons.onLeave}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={svc.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-black mb-2">
                    {svc.title}
                  </h3>
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

      {/* Testimonials */}
      {/* <section id="testimonials" className="bg-kucho-600 py-20 md:py-28"> */}
      {/*   <div className="max-w-5xl mx-auto px-6 sm:px-8"> */}
      {/*     <div className="text-center mb-14"> */}
      {/*       <p className="text-sm font-semibold text-white uppercase tracking-widest mb-2"> */}
      {/*         Testimonials */}
      {/*       </p> */}
      {/*       <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-4"> */}
      {/*         What Our Clients Say */}
      {/*       </h2> */}
      {/*     </div> */}
      {/*     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/*       {testimonials.map((t) => ( */}
      {/*         <div */}
      {/*           key={t.author} */}
      {/*           className="bg-white rounded-xl p-8 md:p-10 text-center" */}
      {/*         > */}
      {/*           <div className="text-amber-300 text-2xl mb-4 flex justify-center gap-1"> */}
      {/*             {[...Array(t.stars || 5)].map((_, i) => ( */}
      {/*               <FaStar key={i} /> */}
      {/*             ))} */}
      {/*           </div> */}
      {/*           <p className="text-gray-600 leading-relaxed mb-6 italic"> */}
      {/*             &ldquo;{t.text}&rdquo; */}
      {/*           </p> */}
      {/*           <div className="w-16 h-16 rounded-full bg-kucho-50 mx-auto mb-3 flex items-center justify-center text-kucho-500 text-2xl font-bold"> */}
      {/*             {t.initials} */}
      {/*           </div> */}
      {/*           <h4 className="font-bold text-black">{t.author}</h4> */}
      {/*           <p className="text-sm text-gray-500">{t.title}</p> */}
      {/*         </div> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Video Testimonials */}
      <section className="bg-kucho-700 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-kucho-200 uppercase tracking-widest mb-2">
              Video Testimonials
            </p>
            <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-4">
              Watch Our Clients Share Their Experience
            </h2>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-kucho-950/60 shadow-2xl">
              <video
                key={videoIdx}
                ref={videoRef}
                src={videoTestimonials[videoIdx].src}
                title={videoTestimonials[videoIdx].title}
                className="w-full aspect-video object-contain bg-black"
                playsInline
                preload="metadata"
                controls={videoPlaying}
                aria-label={`Video testimonial from ${videoTestimonials[videoIdx].title}`}
                onEnded={() => {
                  setVideoPlaying(false);
                  setVideoEnded(true);
                }}
                onClick={toggleVideo}
              />
              {!videoPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-amber-300 text-black flex items-center justify-center hover:bg-amber-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
                  aria-label={`Play video testimonial from ${videoTestimonials[videoIdx].title}`}
                >
                  {videoEnded ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m1 4 8 8-8 8" />
                      <path d="m11 4 8 8-8 8" />
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
            <button
              onClick={() => goToVideo(videoIdx - 1)}
              className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-kucho-800 flex items-center justify-center shadow-lg hover:bg-kucho-200 transition-colors"
              aria-label="Previous video testimonial"
            >
              <ChevronLeftIcon size={22} />
            </button>
            <button
              onClick={() => goToVideo(videoIdx + 1)}
              className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-kucho-800 flex items-center justify-center shadow-lg hover:bg-kucho-200 transition-colors"
              aria-label="Next video testimonial"
            >
              <ChevronRightIcon size={22} />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {videoTestimonials.map((v, i) => (
              <button
                key={v.src}
                onClick={() => goToVideo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === videoIdx ? "bg-amber-300" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to video testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <h4 className="font-bold text-white">
              {videoTestimonials[videoIdx].title}
            </h4>
            <p className="text-sm text-kucho-200">
              {videoTestimonials[videoIdx].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kucho-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-kucho-300 uppercase tracking-widest mb-3">
GET STARTED TODAY
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
Protect Your Property with Kucho
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-300 mb-6 leading-relaxed">
Don't let pests damage your property or disrupt your business. Trust Kathmandu Valley's pest control specialists for effective, long lasting protection.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
              >
                View Our Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="md:w-1/2">
              <a
                href="#"
                className="text-3xl font-extrabold text-black flex items-center gap-1 mb-6"
              >
                <img src="/logo.png" alt="Kucho" className="h-20 w-auto" />
              </a>
              <p className="text-black text-sm leading-relaxed max-w-sm">
                Feel free to contact us during business hours. Our team is ready
                to help protect your home or business from pests.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:items-end">
              <div className="flex gap-3">
                {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-kucho-500 flex items-center justify-center text-black text-sm hover:bg-kucho-400 transition-colors"
                      onMouseEnter={socialIcons.onEnter}
                      onMouseLeave={socialIcons.onLeave}
                    >
                      <Icon size={16} ref={socialIcons.setRef(i)} />
                    </a>
                  ),
                )}
              </div>
              <p
                className="flex items-center gap-2 text-black text-sm"
                onMouseEnter={phoneIcons.onEnter}
                onMouseLeave={phoneIcons.onLeave}
              >
                <PhoneIcon size={16} className="text-black" ref={phoneIcons.setRef(0)} /> 9802317551
              </p>
            </div>
          </div>
          <div className="border-t border-white/30 mt-10 pt-6 flex flex-col sm:flex-row gap-2 justify-center text-center text-xs text-black">
            <p>&copy;2026 Kucho. All rights reserved.</p>
            <p className="hidden sm:block">|</p>
            <p>Designed by Infinity Digital Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
