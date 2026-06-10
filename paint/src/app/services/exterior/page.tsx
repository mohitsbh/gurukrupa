"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Search,
  Wrench,
  Brush,
  Droplet,
  Plus,
  X,
  Phone,
} from "lucide-react";

const features = [
  { icon: Search, title: "Thorough Inspection", desc: "We inspect every aspect of your home's exterior — material age, position, environment — to determine the best approach." },
  { icon: Wrench, title: "Repairs First", desc: "Our carpenters handle wood decay and structural issues before a single drop of paint is applied." },
  { icon: Brush, title: "Scraping & Priming", desc: "We give special attention to scraping, priming, and caulking — the keys to any successful exterior painting project." },
  { icon: Droplet, title: "Premium Paints", desc: "We use only the highest quality paints available — durable, high-performance finishes that protect for years to come." },
];

const faqs = [
  { q: "What are the benefits of house painting?", a: "There are many benefits to home painting beyond simply improving the appearance of your home. Painting the exterior enhances curb appeal and creates a positive impression on everyone who passes by. High-quality paint also shields your home from moisture damage, dirt, and stains caused by seasonal elements." },
  { q: "What preparation is needed before painting?", a: "Before painting, surfaces should be cleaned, sanded, and primed if necessary. We recommend removing or covering furniture and protecting flooring from paint splashes. Our team handles all of this as part of our service." },
  { q: "How do I choose the right paint color?", a: "Consider the lighting, room size, and existing decor when choosing a color. Our color consultation helps you test different shades before making a final decision. We'll bring samples and help you visualize the finished result." },
  { q: "Is it okay to paint during the monsoon?", a: "For exterior work, we typically avoid the heaviest monsoon months. For interior projects, weather doesn't matter — we can paint year-round. We use paints suited to Mumbai's climate and ensure proper drying conditions." },
  { q: "Will I save money by painting my home myself?", a: "The Internet and bookstores are full of DIY guides promising big savings. The truth is, unless you already have painting experience, there's a high chance of damage, wasted material, and increased costs. Hiring a professional ensures efficient material use, correct application the first time, and a finish that lasts." },
  { q: "How long does an exterior paint job last?", a: "With proper preparation and premium paints, an exterior paint job typically lasts 7–10 years in Mumbai's climate. We use top-tier materials and thorough prep to maximize durability and value." },
];

export default function ExteriorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Exterior Painting"
        subtitle="Protect and beautify your property with weather-resistant exterior painting built to last in Mumbai's climate."
        bgImage="/images/exterior-1.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Exterior" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-accent mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-gold rounded-full" />
                Overview
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight mb-4">
                Built to Withstand the Elements
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Are you searching for professional exterior painting services in Mumbai, Thane and Maharashtra? Gurukrupa Paint Company is here to help. Our skilled team efficiently brings your vision to life — adding personality, style, and protection to your home or office.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Planning is essential for any exterior painting project, and that&apos;s where our experienced team shines. From start to finish, we make sure the entire process runs smoothly, meeting your expectations and delivering top-quality results.
              </p>
              <a
                href="tel:+919969441237"
                className="group relative inline-flex items-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-base shadow-[0_12px_32px_rgba(232,93,4,0.35)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                <Phone size={16} className="relative z-10" />
                <span className="relative z-10">Get Free Estimate</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative group">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(15,30,61,0.12)]">
                  <Image src="/images/exterior-2.jpg" alt="Exterior painting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-[0_16px_48px_rgba(15,30,61,0.15)]">
                  <strong className="block font-extrabold text-[32px] text-transparent bg-clip-text bg-gradient-to-br from-accent to-gold leading-none">10+</strong>
                  <span className="text-[13px] text-text-muted">Year Paint Warranty</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Process"
              title="Why Prep Work Matters Most"
              subtitle="The secret to a long-lasting exterior paint job isn't just the paint — it's what we do before we open the can."
            />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.1)] hover:border-accent/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-gold transition-[height] duration-500 group-hover:h-full rounded-r" />
                  <div className="w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
                    <f.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              subtitle="Answers to the most common questions about home painting in Mumbai, Thane and Maharashtra."
            />
          </FadeIn>

          <div className="max-w-[800px] mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div
                  className={`bg-white/80 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "border-accent/30 shadow-[0_8px_24px_rgba(232,93,4,0.08)]" : "border-white/60"
                  }`}
                >
                  <button
                    className="w-full px-7 py-[22px] flex items-center justify-between gap-4 text-left font-semibold text-base text-text hover:text-accent transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span
                      className={`shrink-0 w-8 h-8 grid place-items-center rounded-full transition-all duration-300 ${
                        openFaq === i
                          ? "bg-gradient-to-r from-accent to-accent-dark text-white rotate-45 shadow-[0_4px_12px_rgba(232,93,4,0.3)]"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {openFaq === i ? <X size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-[500px]" : "max-h-0"}`}>
                    <div className="px-7 pb-6 text-text-muted text-[15px] leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to give your exterior a new life?"
        subtitle="Free, no-obligation estimate. We'll inspect, plan, and quote — at no cost."
        primaryLabel="Call Now"
        secondaryLabel="Get Quote"
      />
    </>
  );
}
