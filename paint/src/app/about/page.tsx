import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Check,
  ShieldCheck,
  MessageCircle,
  Medal,
  CalendarCheck,
  Building,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 1992, Gurukrupa Paint has been the go-to painting contractor for thousands of homeowners and businesses across Mumbai, Thane and Maharashtra.",
};

const stats = [
  { icon: CalendarCheck, value: "30+", label: "Years in Business" },
  { icon: Building, value: "2,500+", label: "Projects Completed" },
  { icon: Smile, value: "2,000+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction Rate" },
];

const aboutFeatures = [
  { icon: ShieldCheck, title: "Our Guarantee", desc: "The highest quality painting services at the lowest possible price. If there's an aspect you're not 100% satisfied with, you can discuss it directly with the company owner — and we will resolve it rapidly." },
  { icon: MessageCircle, title: "One-on-One Attention", desc: "We work with you to fully understand your vision. Our experts help you discover what design best complements your specific tastes." },
  { icon: Medal, title: "The Difference", desc: "Superior craftsmanship from skilled painting contractors, competitive pricing, and the best, longest-lasting paint for both commercial and residential services." },
];

const checks = [
  "Owner-supervised on every project",
  "Top-grade paints and materials only",
  "Transparent pricing with no hidden costs",
  "Clean, on-time delivery — guaranteed",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Three Decades of Trusted Craftsmanship"
        subtitle="Since 1992, Gurukrupa Paint has been the go-to painting contractor for thousands of homeowners and businesses across Mumbai, Thane and Maharashtra."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative group">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(15,30,61,0.12)]">
                  <Image src="/images/hero-3.jpg" alt="Painting project" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-[0_16px_48px_rgba(15,30,61,0.15)]">
                  <strong className="block font-extrabold text-[32px] text-transparent bg-clip-text bg-gradient-to-br from-accent to-gold leading-none">30+</strong>
                  <span className="text-[13px] text-text-muted">Years of Excellence</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-accent mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-gold rounded-full" />
                Our Story
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight mb-4">
                One Goal. Decades of Dedication.
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                To enhance the visual appeal and lifespan of our customers&apos; homes and commercial properties through hard work, superior craftsmanship, and attention to detail.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                What started in 1992 as a small family-run painting service in Mumbai has grown into one of the most trusted painting contractors in the region. Yet our philosophy remains the same: every project gets our personal attention.
              </p>
              <div className="flex flex-col gap-3">
                {checks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                    <div className="w-7 h-7 grid place-items-center bg-gradient-to-br from-accent to-gold rounded-lg text-white shrink-0 shadow-[0_4px_12px_rgba(232,93,4,0.2)]">
                      <Check size={15} />
                    </div>
                    <span className="text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader eyebrow="By the Numbers" title="Our Track Record Speaks" />
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-md border border-white/60 rounded-[28px] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,30,61,0.08)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl text-2xl mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
                      <s.icon size={28} />
                    </div>
                    <div className="font-extrabold text-[40px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-accent to-gold mb-2">{s.value}</div>
                    <div className="text-text-muted font-medium text-sm">{s.label}</div>
                  </div>
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
              eyebrow="Our Promise"
              title="What Sets Us Apart"
              subtitle="Three decades of experience have taught us that great results come from clear communication, premium materials, and an unwavering commitment to our craft."
            />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {aboutFeatures.map((f, i) => (
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

      <CTASection
        title="Experience the Gurukrupa difference"
        subtitle="Join thousands of satisfied customers. Get your free estimate today."
      />
    </>
  );
}
