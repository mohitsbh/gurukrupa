import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Paintbrush,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  HandCoins,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From a single accent wall to a full home transformation — Gurukrupa Paint offers end-to-end painting services tailored to your needs.",
};

const services = [
  {
    title: "Interior Painting",
    desc: "Transform your home with high-quality, elegant interior painting services. Bedrooms, kitchens, living rooms, ceilings — we do it all.",
    image: "/images/hero-1.jpg",
    href: "/services/interior",
    featured: true,
  },
  {
    title: "Exterior Painting",
    desc: "Durable and beautiful exterior painting for a long-lasting impression. Built to weather the elements and protect your property.",
    image: "/images/exterior-1.jpg",
    href: "/services/exterior",
    featured: false,
  },
  {
    title: "House Painting",
    desc: "Complete house painting services — inside and out. Single family homes and major residential complexes, all covered.",
    image: "/images/exterior-2.jpg",
    href: "/services/house",
    featured: false,
  },
];

const whyUs = [
  { icon: Shield, title: "Owner-Supervised", desc: "Every project is personally supervised by the company owner to ensure the highest quality standards." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your time. Our streamlined process means we finish on schedule with minimal disruption." },
  { icon: Sparkles, title: "Clean Worksite", desc: "We protect your furniture and flooring, and clean up thoroughly at the end of every day." },
  { icon: HandCoins, title: "Transparent Pricing", desc: "Detailed written estimates — no hidden costs, no surprises. Just honest work at fair prices." },
];

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  return (
    <Link
      href={svc.href}
      className={`group relative flex flex-col bg-white/80 backdrop-blur-sm rounded-[28px] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,30,61,0.15)] border ${
        svc.featured
          ? "border-accent/40 shadow-[0_12px_40px_rgba(232,93,4,0.15)]"
          : "border-white/60 shadow-[0_4px_16px_rgba(15,30,61,0.04)]"
      }`}
    >
      {svc.featured && (
        <span className="absolute top-5 right-5 z-10 px-4 py-1.5 bg-gradient-to-r from-accent to-gold text-white text-[11px] font-bold tracking-widest uppercase rounded-full shadow-[0_4px_16px_rgba(232,93,4,0.4)]">
          Most Popular
        </span>
      )}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
        <div className="absolute top-5 left-5 z-10 w-[52px] h-[52px] grid place-items-center bg-white/90 backdrop-blur-md border border-white/50 text-accent rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <Paintbrush size={22} />
        </div>
        <Image src={svc.image} alt={`${svc.title} service`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      </div>
      <div className="p-[30px] flex-1 flex flex-col">
        <h3 className="text-[22px] font-bold mb-3 tracking-tight">{svc.title}</h3>
        <p className="text-text-muted text-[15px] leading-relaxed mb-[22px] flex-1">{svc.desc}</p>
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-[15px] self-start group-hover:gap-3 transition-all duration-300">
          Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Complete Painting Solutions"
        subtitle="From a single accent wall to a full home transformation — we offer end-to-end painting services tailored to your needs and budget."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Offer"
              title="Choose Your Painting Service"
              subtitle="Click on any service below to learn more about our process, materials, and what makes our work stand out."
            />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {services.map((svc, i) => (
              <ServiceCard key={i} svc={svc} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader eyebrow="Why Us" title="Built on Trust, Quality & Craft" />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
            {whyUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.1)] hover:border-accent/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-gold transition-[height] duration-500 group-hover:h-full rounded-r" />
                  <div className="w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
                    <item.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Call us for a free, no-obligation consultation. We'll assess your space and recommend the right solution."
        primaryLabel="+91 9594809030"
        secondaryLabel="Request Quote"
      />
    </>
  );
}
