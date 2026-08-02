import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Contact } from "@/components/home/Contact";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Contact />
      <About />
      <Services />
      <VideoTestimonials />
      <CTASection />
      <Footer />
    </div>
  );
}