"use client";

import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaThumbsUp,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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
    desc: "Eliminate rats and mice before they damage property or contaminate food supplies.",
    img: "/services/rodent_control.png",
  },
  {
    title: "Termite Treatment",
    desc: "Protect wooden structures, furniture, and buildings from costly termite damage.",
    img: "/services/termite.png",
  },
  {
    title: "Bed Bugs Control",
    desc: "Effective treatments designed to eliminate bed bugs and prevent re-infestation.",
    img: "/services/bedbug.png",
  },
  {
    title: "Cockroach Control",
    desc: "Target infestations at the source and keep your property pest-free.",
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
  "https://storage.googleapis.com/a1aa/image/501df5cf-53da-4ecc-5fc9-a30370046f67.jpg",
  "https://storage.googleapis.com/a1aa/image/ebe21c0f-7d18-440e-4b94-eb033e8661eb.jpg",
  "https://storage.googleapis.com/a1aa/image/016deda5-3daa-4ded-f491-27caad55848d.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
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

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Preloader removed — not needed in SPA */}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "border-b border-kucho-forest/10" : ""
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
                    className="hover:text-amber-400 transition-colors"
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
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`lg:hidden bg-kucho-forest border-t border-white/20 ${
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
                  className="hover:text-amber-400 transition-colors py-2"
                >
                  {item}
                </a>
              ),
            )}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-200 text-black font-semibold text-sm rounded-full px-5 py-2.5 text-center mt-2 hover:bg-amber-400 hover:text-white transition-all"
            >
              View Our Plans
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-[80px] py-20">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold text-green-400 mb-3 tracking-widest uppercase">
              Protect What Matters Most
            </p>
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight">
              {/* All Pest Solutions */}
              Professional Pest Control
              <br />
              for Your Peace of Mind
            </h1>
            <p className="text-base md:text-lg max-w-lg mb-8 leading-relaxed text-gray-200">
              Protect your home or business from termites, cockroaches, rodents,
              bed bugs, mosquitoes, and more. Safe, effective pest control
              solutions across Kathmandu, Lalitpur, and Bhaktapur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-amber-400 font-semibold text-sm rounded-full px-8 py-3 hover:bg-amber-500 transition-colors duration-300 text-black hover:text-white"
              >
                Schedule Inspection
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-white font-semibold text-sm rounded-full px-8 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Explore Services
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
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Fill out the form and our team will contact you shortly with a
              customized pest control solution.
              {/* Fill out the form and our team will get back to you within 24
              hours. We&apos;ll assess your pest problem and provide a tailored
              solution. */}
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: FaPhoneAlt,
                  title: "Phone",
                  value: "9802317551",
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  value: "info@kucho.co",
                },
                {
                  icon: FaClock,
                  title: "Working Hours",
                  value: "Sun – Fri: 8:00 AM – 6:00 PM",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kucho-light rounded-lg flex items-center justify-center text-kucho-forest flex-shrink-0">
                    <item.icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-kucho-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-black mb-6">
              Book Your Service
            </h3>
            <form>
              {["Name", "Email", "Phone Number"].map((field) => (
                <div key={field} className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
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
                    className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-forest border border-transparent focus:border-white bg-white"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your pest problem"
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-forest border border-transparent focus:border-white resize-none bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 text-white font-bold py-3 rounded-lg hover:bg-amber-500 transition-colors"
              >
                Send Message
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
            <div className="flex flex-row gap-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/016deda5-3daa-4ded-f491-27caad55848d.jpg"
                alt=""
                className="rounded-xl object-cover w-1/2 h-[400px] lg:h-[500px]"
              />
              <div className="flex flex-col w-1/2 gap-4">
                <div className="bg-kucho-dark rounded-xl flex flex-col justify-center items-center p-6 h-1/2">
                  <h2 className="text-5xl font-extrabold text-kucho-forest leading-none">
                    25+
                  </h2>
                  <p className="text-white font-semibold text-center mt-2 leading-tight">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>
                <img
                  src="https://storage.googleapis.com/a1aa/image/976071dc-856e-4bdd-cea9-0d42c98ec036.jpg"
                  alt=""
                  className="rounded-xl object-cover w-full h-1/2"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="font-semibold text-xs uppercase tracking-widest mb-3">
              About Kucho
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Kathmandu Valley's Trusted Pest Control Experts
              {/* <br /> */}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              For over 4 years, Kucho has protected homes and businesses across
              Kathmandu Valley from termites, rodents, cockroaches, mosquitoes,
              bed bugs, and other common pests using safe and effective
              treatment solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Residential Pest Control",
                  desc: "Protect your family and property from unwanted pests.",
                },
                {
                  icon: FaBolt,
                  title: "Commercial Pest Management",
                  desc: "Customized solutions for offices, hotels, restaurants, and warehouses..",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kucho-light rounded-lg flex items-center justify-center text-kucho-forest flex-shrink-0">
                    <item.icon className="text-xl" />
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
              className="inline-block bg-amber-400 font-bold text-white text-sm px-8 py-3 rounded-full hover:bg-amber-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-kucho-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Solutions For Every Pest
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-gray-500 mb-6">
                From homes and apartments to restaurants and commercial
                facilities, we deliver reliable pest control solutions tailored
                to your needs.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-400 text-white font-semibold text-sm rounded-full px-8 py-3 w-max hover:bg-amber-500 transition-colors"
              >
                Explore All Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl overflow-hidden border border-kucho-forest/10 hover:border-kucho-forest transition-all duration-300 group"
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
                    className="font-semibold inline-flex items-center gap-2 text-sm hover:text-amber-400 transition-colors"
                  >
                    {svc.title} Service <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/ebe21c0f-7d18-440e-4b94-eb033e8661eb.jpg"
              alt=""
              className="rounded-xl w-full h-[400px] md:h-[550px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Trusted Pest Control Professionals
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">
              Property owners across Kathmandu Valley trust Kucho for safe,
              reliable, and long-lasting pest management solutions.
            </p>
            <ul className="space-y-8 max-w-xl">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Comprehensive Protection",
                  desc: "Inspection, treatment, monitoring, and prevention for complete peace of mind.",
                },
                {
                  icon: FaThumbsUp,
                  title: "Eco-Conscious Methods",
                  desc: "Safe treatments designed for families, pets, customers, and employees.",
                },
                {
                  icon: FaAward,
                  title: "Certified Experts",
                  desc: "Experienced professionals trained in modern pest control practices.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 bg-kucho-dark rounded-xl flex-shrink-0">
                    <item.icon className="text-kucho-forest text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-kucho-forest py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-white uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-xl p-8 md:p-10 text-center"
              >
                <div className="text-amber-400 text-2xl mb-4 flex justify-center gap-1">
                  {[...Array(t.stars || 5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="w-16 h-16 rounded-full bg-kucho-light mx-auto mb-3 flex items-center justify-center text-kucho-forest text-2xl font-bold">
                  {t.initials}
                </div>
                <h4 className="font-bold text-black">{t.author}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kucho-dark py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-kucho-forest uppercase tracking-widest mb-3">
                Get Started Today
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Protect Your Property with Kucho
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don&apos;t let pests damage your property or disrupt your
                business. Trust Kathmandu Valley's pest control specialists for
                effective, long-lasting protection.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-400 text-white font-bold text-sm rounded-full px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Schedule a Free Inspection
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
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black text-sm hover:bg-amber-400 transition-colors"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
              <p className="flex items-center gap-2 text-black text-sm">
                <FaPhoneAlt className="text-black" /> 9802317551
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
