import { PhoneIcon } from "@/components/icons/phone";
import { MailCheckIcon } from "@/components/icons/mail-check";
import { ClockIcon } from "@/components/icons/clock";
import { ShieldCheckIcon } from "@/components/icons/shield-check";
import { ZapIcon } from "@/components/icons/zap";
import { FacebookIcon } from "@/components/icons/facebook";
import { TwitterIcon } from "@/components/icons/twitter";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { InstagramIcon } from "@/components/icons/instagram";

export const NAV_LINKS = [
  "Home",
  "About",
  "Services",
  "Testimonials",
  "Contact",
];

export const HERO_SLIDES = [
  "/images/hero-image1.jpeg",
  "/images/hero-image2.jpeg",
  "/images/hero-image3.jpeg",
];

export const HERO = {
  badge: "TRUSTED PEST CONTROL EXPERTS IN NEPAL",
  title: "Professional Pest Control Services in Kathmandu Valley",
  description:
    "Protect your home or business from termites, cockroaches, rodents, bed bugs, mosquitoes and more. Safe, effective pest control solutions trusted across Kathmandu, Lalitpur and Bhaktapur.",
  primaryCta: { label: "View Our Plans", href: "#contact" },
  secondaryCta: { label: "Explore Our Services", href: "#services" },
};

export const CONTACT = {
  label: "BOOK AN INSPECTION",
  title: "Schedule Your Free Pest Inspection",
  description:
    "Fill out the form and our pest control experts will contact you shortly to schedule a free, no obligation inspection for your home or business",
  details: [
    { icon: PhoneIcon, title: "Phone", value: "9802317551" },
    { icon: MailCheckIcon, title: "Email", value: "info@kucho.co" },
    {
      icon: ClockIcon,
      title: "Working Hours",
      value: "Sun \u2013 Fri: 8:00 AM \u2013 6:00 PM",
    },
  ],
  formHeading: "Book Your Inspection",
  fields: ["Name", "Email", "Phone Number"],
  messagePlaceholder: "Tell us about your pest problem",
  submitLabel: "Request Inspection",
};

export const ABOUT = {
  label: "ABOUT KUCHO",
  title: "Kathmandu Valley's Trusted Pest Control Experts",
  description:
    "Kucho is one of Kathmandu Valley's most trusted names in pest control, protecting homes and businesses from termites, rodents, cockroaches, bed bugs, mosquitoes and other common pests. Our trained technicians use safe and proven methods to deliver lasting results.",
  image: "/images/kucho-1.jpeg",
  stats: [
    { number: "500+", title: "Properties Protected" },
    { number: "100%", title: "Safe & Proven Methods" },
    { number: "Trusted", title: "Across Kathmandu Valley" },
  ],
  highlights: [
    {
      icon: ShieldCheckIcon,
      title: "Residential Pest Control",
      desc: "Protect your family and property from unwanted pests with treatments designed for Nepali homes.",
    },
    {
      icon: ZapIcon,
      title: "Commercial Pest Management",
      desc: "Reliable pest control for offices, restaurants, hotels and retail spaces across the valley.",
    },
  ],
  cta: { label: "Schedule a Free Inspection", href: "#contact" },
};

export const SERVICES = {
  label: "OUR SERVICES",
  title: "Solutions For Every Pest",
  description:
    "From homes and apartments to restaurants and commercial facilities, we deliver reliable pest control solutions tailored to properties across Kathmandu Valley.",
  cta: { label: "Explore All Services", href: "#contact" },
  items: [
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
  ],
};

export const VIDEO_TESTIMONIALS = {
  label: "Video Testimonials",
  title: "Watch Our Clients Share Their Experience",
  items: [
    { src: "/videos-testimonials/v1.webm", title: "Kucho Client", subtitle: "Google Review" },
    { src: "/videos-testimonials/v2.mp4", title: "Kucho Client", subtitle: "Google Review" },
    { src: "/videos-testimonials/v3.mp4", title: "Kucho Client", subtitle: "Google Review" },
    { src: "/videos-testimonials/v4.mp4", title: "Kucho Client", subtitle: "Google Review" },
  ],
};

export const CTA = {
  label: "GET STARTED TODAY",
  title: "Protect Your Property with Kucho",
  description:
    "Don't let pests damage your property or disrupt your business. Trust Kathmandu Valley's pest control specialists for effective, long lasting protection.",
  cta: { label: "View Our Plans", href: "#contact" },
};

export const FOOTER = {
  description:
    "Feel free to contact us during business hours. Our team is ready to help protect your home or business from pests.",
  phone: "9802317551",
  socials: [FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon],
  copyright: "\u00a92026 Kucho. All rights reserved.",
  credit: "Designed by Infinity Digital Agency",
};