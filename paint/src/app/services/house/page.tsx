import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Check,
  PaintRoller,
  ShowerHead,
  Bed,
  ArrowUpDown,
  Sofa,
  Home,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "House Painting",
  description:
    "Complete home painting solutions — from foundation to rooftop. Inside and out, Gurukrupa Paint transforms houses into homes.",
};

const services = [
  { icon: PaintRoller, title: "Kitchen Painting", desc: "Save money on remodeling costs. Our house painters will give your kitchen a brand-new appearance with crisp, durable paint." },
  { icon: ShowerHead, title: "Bathroom Painting", desc: "Bathrooms endure dramatic temperature and humidity changes. We use the right moisture-resistant paints for lasting beauty." },
  { icon: Bed, title: "Bedroom Painting", desc: "Bedrooms should be comforting to the senses. The right color palette transforms your bedroom into a restful, personal retreat." },
  { icon: ArrowUpDown, title: "Lower Level Painting", desc: "Basement painting is a job for professionals. We handle moisture control, prep, and finish — leaving you with a dry, livable space." },
  { icon: Sofa, title: "Family Room Painting", desc: "Your family room is where precious memories are made. We help you choose colors that are pleasing for you and your guests." },
  { icon: Home, title: "Exterior House Painting", desc: "Painting and staining your home's exterior isn't just aesthetic — it's crucial for safeguarding against early weather damage." },
];

const process = [
  { num: "01", title: "Consultation", desc: "We visit your home, listen to your vision, and provide a detailed written estimate." },
  { num: "02", title: "Color & Material", desc: "Choose from thousands of shades. We help you pick what's right for your space." },
  { num: "03", title: "Prep & Protect", desc: "Furniture is moved, surfaces are cleaned, scraped and primed. Floors are protected." },
  { num: "04", title: "Paint & Inspect", desc: "We apply premium paint, do a final walkthrough with you, and leave your home spotless." },
];

export default function HousePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="House Painting"
        subtitle="Complete home painting solutions — from foundation to rooftop. Inside and out, we transform houses into homes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "House Painting" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative group">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(15,30,61,0.12)]">
                  <Image src="/images/exterior-1.jpg" alt="House painting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-[0_16px_48px_rgba(15,30,61,0.15)]">
                  <strong className="block font-extrabold text-[32px] text-transparent bg-clip-text bg-gradient-to-br from-accent to-gold leading-none">2,500+</strong>
                  <span className="text-[13px] text-text-muted">Homes Painted</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-accent mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-gold rounded-full" />
                Overview
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight mb-4">
                A Local Team You Can Trust
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                When you need a reliable local home painter — whether for a single-family home or a major residential complex — our professional house painters take care of it quickly, efficiently, and within the original budget.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Gurukrupa Paint Company is well-versed in the unique factors to consider when completing interior and exterior painting projects throughout Mumbai, Thane and Maharashtra.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Single homes & complexes — all sizes welcome",
                  "Minimal disruption to your family's daily life",
                  "Clean work environment — we treat your home like ours",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                    <div className="w-7 h-7 grid place-items-center bg-gradient-to-br from-accent to-gold rounded-lg text-white shrink-0 shadow-[0_4px_12px_rgba(232,93,4,0.2)]">
                      <Check size={15} />
                    </div>
                    <span className="text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+919969441237"
                className="group relative inline-flex items-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-base shadow-[0_12px_32px_rgba(232,93,4,0.35)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                <Phone size={16} className="relative z-10" />
                <span className="relative z-10">Get Free Estimate</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader eyebrow="Our House Painters Offer" title="A Complete Range of Services" subtitle="From kitchen cabinets to exterior facades — if it's part of your home, we can paint it." />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.1)] hover:border-accent/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-gold transition-[height] duration-500 group-hover:h-full rounded-r" />
                  <div className="w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <SectionHeader eyebrow="Our Approach" title="A Streamlined, Stress-Free Process" />
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-md border border-white/60 rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,30,61,0.08)] overflow-hidden">
                  <div className="absolute -top-8 -right-8 text-[80px] font-extrabold text-accent/5 select-none leading-none">{step.num}</div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-gold text-white font-extrabold text-xl rounded-[16px] mb-5 shadow-[0_8px_24px_rgba(232,93,4,0.3)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(232,93,4,0.4)] group-hover:scale-110">{step.num}</div>
                    <h3 className="text-lg font-bold mb-2.5">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to transform your home?"
        subtitle="Get a free, no-obligation estimate and see why thousands trust Gurukrupa Paint."
        primaryLabel="Call +91 9594809030"
        secondaryLabel="Get Free Quote"
      />
    </>
  );
}
