"use client";

import { useState, useEffect } from "react";
import {
  FaBars, FaTimes, FaArrowRight, FaShieldAlt, FaBolt, FaThumbsUp, FaAward,
  FaChevronDown, FaPhoneAlt, FaEnvelope, FaClock, FaStar,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram
} from "react-icons/fa";

const teamMembers = [
  { name: "John Anderson", role: "CEO & Founder", img: "https://storage.googleapis.com/a1aa/image/016deda5-3daa-4ded-f491-27caad55848d.jpg" },
  { name: "Sarah Mitchell", role: "Head Technician", img: "https://storage.googleapis.com/a1aa/image/976071dc-856e-4bdd-cea9-0d42c98ec036.jpg" },
  { name: "David Chen", role: "Operations Manager", img: "https://storage.googleapis.com/a1aa/image/c85c660d-2881-479c-2fec-c8d30ac24f6b.jpg" },
  { name: "Emily Roberts", role: "Customer Relations", img: "https://storage.googleapis.com/a1aa/image/d5e16eef-f02e-42db-2f3c-3a2c6d868863.jpg" },
];

const testimonials = [
  { text: "Kucho transformed our home. We had a severe rodent problem and their team handled it professionally and discreetly. Highly recommend their services!", author: "James Davidson", title: "Homeowner", initials: "JD" },
  { text: "Professional, punctual, and effective. Our restaurant passed health inspection after Kucho's commercial pest management. Worth every penny!", author: "Maria Patel", title: "Restaurant Owner", initials: "MP" },
  { text: "The eco-friendly approach was exactly what we were looking for. They handled our termite issue without any harsh chemicals. Amazing results!", author: "Thomas Rivera", title: "Eco-Conscious Client", initials: "TR" },
];

const faqs = [
  { q: "What pest control methods do you use?", a: "We use a combination of eco-friendly chemical treatments, traps, exclusion techniques, and integrated pest management (IPM) strategies tailored to each specific infestation." },
  { q: "Are your treatments safe for pets and children?", a: "Yes. We prioritize eco-conscious products that are safe for your family and pets. Our technicians will provide specific instructions on any necessary precautions." },
  { q: "How often should pest control be done?", a: "For most homes, quarterly treatments suffice. However, commercial properties or severe infestations may require monthly or bi-monthly visits. We offer customized maintenance plans." },
  { q: "Do you offer emergency pest control services?", a: "Absolutely. We offer 24/7 emergency services for urgent infestations. Call our hotline and we'll dispatch a technician immediately." },
  { q: "What areas do you serve?", a: "We serve residential and commercial properties across the metropolitan area and surrounding suburbs. Contact us to check availability in your location." },
];

const services = [
  { title: "Rodent Control", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/ea1f462a-dc58-4919-8e06-05a8ae49a931.jpg" },
  { title: "Termite Treatment", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/72fc41dd-b3c2-4bd9-325b-9897b8052a28.jpg" },
  { title: "Bed Bugs Control", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/96b40a84-794f-4fbf-b984-6cec0af8f268.jpg" },
  { title: "Cockroach Control", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/ea1f462a-dc58-4919-8e06-05a8ae49a931.jpg" },
  { title: "Mosquito Control", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/72fc41dd-b3c2-4bd9-325b-9897b8052a28.jpg" },
  { title: "Ant Control", desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.", img: "https://storage.googleapis.com/a1aa/image/96b40a84-794f-4fbf-b984-6cec0af8f268.jpg" },
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <div className="bg-kucho-forest/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <nav className="flex items-center justify-between h-[80px] text-white text-sm font-semibold">
              <a href="#" className="flex items-center gap-2 select-none">
                <img src="/logo.png" alt="Kucho" className="h-10 w-auto" />
              </a>
              <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
                {["Home", "About", "Services", "Process", "Testimonials", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item === "Process" ? "How It Works" : item}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="hidden sm:inline-block bg-white text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
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
            {["Home", "About", "Services", "Process", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition-colors py-2"
              >
                {item === "Process" ? "How It Works" : item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-black font-semibold text-sm rounded-full px-5 py-2.5 text-center mt-2 hover:bg-amber-400 hover:text-white transition-all"
            >
              View Our Plans
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-[80px]">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIdx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover brightness-[0.35]" />
          </div>
        ))}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold text-green-400 mb-3 tracking-widest uppercase">
              Protect What Matters Most
            </p>
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight">
              All Pest Solutions<br />for Your Peace of Mind
            </h1>
            <p className="text-base md:text-lg max-w-lg mb-8 leading-relaxed text-gray-200">
              We safeguard your property from rodents, insects, and other pests using eco-friendly methods and experienced technicians. Trust Kucho to keep your space clean and pest-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-amber-400 font-semibold text-sm rounded-full px-8 py-3 hover:bg-amber-500 transition-colors duration-300"
              >
                Schedule Service
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

      {/* Stats */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-24 md:-mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Rodents\nRemoved", value: "450+" },
            { label: "Businesses\nServed", value: "450+" },
            { label: "Eco\nTreatments", value: "450+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-kucho-light rounded-xl p-8 flex flex-col justify-between min-h-[190px] hover:border-kucho-forest border border-transparent transition-all duration-300 group cursor-pointer"
            >
              <div>
                <p className="text-[15px] font-bold text-kucho-dark uppercase leading-tight mb-3 whitespace-pre-line">
                  {stat.label}
                </p>
                <h2 className="text-4xl font-extrabold text-kucho-dark mb-1">{stat.value}</h2>
              </div>
              <div className="text-gray-400 text-2xl self-end group-hover:text-amber-400 transition-colors">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
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
                  <h2 className="text-5xl font-extrabold text-kucho-forest leading-none">25+</h2>
                  <p className="text-white font-semibold text-center mt-2 leading-tight">
                    Years of<br />Experience
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
              Your Trusted Pest<br />Experts
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Malesuada arcu dictumst vitae integer. Quam pharetra ultrices tortor eu velit vel. Sem ipsum auctor orci pellentesque placerat. Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: FaShieldAlt, title: "Residential Pest Control", desc: "Neque id ac nisl imperdiet tellus placerat." },
                { icon: FaBolt, title: "Commercial Pest Mgmt", desc: "Neque id ac nisl imperdiet tellus placerat." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kucho-light rounded-lg flex items-center justify-center text-kucho-forest flex-shrink-0">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-black">{item.title}</h3>
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
                Malesuada arcu dictumst vitae integer. Quam pharetra ultrices tortor eu velit vel. Sem ipsum auctor orci pellentesque placerat. Neque id ac nisl imperdiet tellus placerat.
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
                  <h3 className="font-bold text-lg text-black mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
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
              Malesuada arcu dictumst vitae integer. Quam pharetra ultrices tortor eu velit vel. Sem ipsum auctor orci pellentesque placerat.
            </p>
            <ul className="space-y-8 max-w-xl">
              {[
                { icon: FaShieldAlt, title: "Comprehensive Protection", desc: "From inspection to elimination, we handle a wide range of pest problems with precision and care." },
                { icon: FaThumbsUp, title: "Eco-Conscious Methods", desc: "We use safe, environmentally responsible products that protect you, your family, and the planet." },
                { icon: FaAward, title: "Certified Experts", desc: "Our trained professionals follow industry-best practices and stay updated on the latest pest control technologies." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 bg-kucho-dark rounded-xl flex-shrink-0">
                    <item.icon className="text-kucho-forest text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process / Real Cases */}
      <section id="process" className="bg-kucho-light py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-2">
              Our Process
            </p>
            <h2 className="font-extrabold text-4xl md:text-5xl text-black mb-4">
              Real Cases — Real Results
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Malesuada arcu dictum vitae integer. Quam pharetra ultricies tortor eu velit vel. Sem ipsum auctor orci pellentesque placerat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-kucho-forest/10">
                <img src="https://storage.googleapis.com/a1aa/image/ad7999d0-32c7-4950-ca1b-6adabdd7c21a.jpg" alt="" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm uppercase font-semibold mb-1">Residential</p>
                <h3 className="font-bold text-xl text-black mb-2">Rat Control In Basement</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-kucho-forest/10">
                <img src="https://storage.googleapis.com/a1aa/image/efc83f1c-970b-438e-2925-ae784276df3b.jpg" alt="" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm uppercase font-semibold mb-1">Industrial</p>
                <h3 className="font-bold text-xl text-black mb-2">Termite Treatment For Factory</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm uppercase font-semibold mb-1">Commercial</p>
                <h3 className="font-bold text-xl text-black mb-2">Cockroach Removal In Café</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-kucho-forest/10">
                <img src="https://storage.googleapis.com/a1aa/image/9f2b6281-a214-4e40-064b-61417c94935c.jpg" alt="" className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm uppercase font-semibold mb-1">Residential</p>
                <h3 className="font-bold text-xl text-black mb-2">Mosquito Fogging In Yard</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-kucho-forest/10">
                <img src="https://storage.googleapis.com/a1aa/image/df6dfd81-5f7c-456d-2ac1-dc271b649380.jpg" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2">
            Our Team
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl text-black mb-4">Meet The Experts</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our certified professionals are dedicated to providing the highest quality pest control services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden border border-kucho-forest/10 hover:border-kucho-forest transition-all duration-300 group"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={member.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-black text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
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
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
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

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2">
            FAQ
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl text-black mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-black hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <FaChevronDown
                  className={`text-kucho-forest transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 pb-5 text-gray-500 text-sm leading-relaxed ${
                  openFaq === i ? "block" : "hidden"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
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
                Protect Your Space with Us
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don&apos;t let pests take over. Trust Kucho&apos;s professional pest control services to restore comfort, safety, and confidence to your property.
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

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. We&apos;ll assess your pest problem and provide a tailored solution.
            </p>
            <div className="space-y-6">
              {[
                { icon: FaPhoneAlt, title: "Phone", value: "+1 (333) 000-0000" },
                { icon: FaEnvelope, title: "Email", value: "info@kuchopest.com" },
                { icon: FaClock, title: "Working Hours", value: "Mon - Fri: 8:00 - 16:00" },
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
            <h3 className="text-xl font-bold text-black mb-6">Book Your Service</h3>
            <form>
              {["Name", "Email", "Phone Number"].map((field) => (
                <div key={field} className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">{field}</label>
                  <input
                    type={field === "Email" ? "email" : field === "Phone Number" ? "tel" : "text"}
                    placeholder={`Your ${field}`}
                    className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-forest border border-transparent focus:border-white bg-white"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
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

      {/* Footer */}
      <footer className="bg-kucho-forest pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="md:w-1/2">
              <a href="#" className="text-3xl font-extrabold text-white flex items-center gap-1 mb-6">
                <span className="text-emerald-500">KU</span>CHO
              </a>
              <p className="text-white text-sm leading-relaxed max-w-sm">
                Feel free to call us in working hours Mon - Fri (8:00 - 16:00). Our team will be happy to help answer your queries.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:items-end">
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm hover:bg-amber-400 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <p className="flex items-center gap-2 text-white text-sm">
                <FaPhoneAlt className="text-black" /> +1 (333) 000-0000
              </p>
            </div>
          </div>
          <div className="border-t border-white/30 mt-10 pt-6 flex flex-col sm:flex-row gap-2 justify-center text-center text-xs text-white">
            <p>&copy; 2025 Kucho. All rights reserved.</p>
            <p className="hidden sm:block">|</p>
            <p>Design by IDA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
