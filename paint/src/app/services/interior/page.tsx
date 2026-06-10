import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Paintbrush,
  Sparkles,
  Palette,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painting",
  description:
    "Transform your home's interior with Gurukrupa Paint's expert painters. Beautiful, durable, and safe results — guaranteed.",
};

const features = [
  { icon: Paintbrush, title: "Walls & Ceilings", desc: "Specializing in revitalizing ceilings with fresh, modern finishes — and applying a new textured or clean coat of paint to every wall." },
  { icon: Sparkles, title: "Wallpaper Removal", desc: "We remove old wallpaper, prepare your walls, and create a clean, flawless surface ready for a brand-new paint job." },
  { icon: Palette, title: "Color Consultation", desc: "Not sure about colors? We'll help you choose shades that complement your lighting, furniture, and personal style." },
  { icon: ShieldCheck, title: "Satisfaction Guarantee", desc: "Customer satisfaction is our top priority. We work tirelessly to ensure you're fully satisfied with the final result." },
];

const rooms = [
  { name: "Bedrooms", image: "/images/bedroom.jpg" },
  { name: "Living Rooms", image: "/images/living.jpg" },
  { name: "Kitchens", image: "/images/kitchen.jpg" },
  { name: "Bathrooms", image: "/images/bathroom.jpg" },
  { name: "Dining Areas", image: "/images/dining.jpg" },
  { name: "Home Offices", image: "/images/office.jpg" },
];

import { ComponentType } from "react";

function GlassCard({ icon: Icon, title, desc }: { icon: ComponentType<{ size?: number }>; title: string; desc: string }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.1)] hover:border-accent/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-gold transition-[height] duration-500 group-hover:h-full rounded-r" />
      <div className="w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-text-muted text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
}

function RoomCard({ room }: { room: typeof rooms[0] }) {
  return (
    <Link
      href="/gallery"
      className="group relative aspect-square rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(15,30,61,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,30,61,0.12)]"
    >
      <Image src={room.image} alt={`${room.name} painting`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent z-[1]" />
      <div className="absolute bottom-3 left-3 right-3 z-[2]">
        <h5 className="text-sm md:text-base font-semibold text-white mb-0.5">{room.name}</h5>
        <span className="text-[11px] text-gold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight size={10} /> View work
        </span>
      </div>
    </Link>
  );
}

export default function InteriorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Specialty"
        title="Interior Painting Services"
        subtitle="Transform your home's interior with our expert painters. Beautiful, durable, and safe results — guaranteed."
        bgImage="/images/hero-1.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Interior" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Overview"
              title="More Than Just Wall Painting"
              subtitle="Our interior painting services go beyond a fresh coat of paint. We revitalize ceilings, remove wallpaper, and prep every surface for a flawless, long-lasting finish."
            />
          </FadeIn>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard icon={f.icon} title={f.title} desc={f.desc} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Rooms We Paint"
              title="Our Interior Painting Services Include"
              subtitle="From the smallest powder room to your entire home — we have the expertise to deliver outstanding results in every space."
            />
          </FadeIn>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {rooms.map((room, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <RoomCard room={room} i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to refresh your interior?"
        subtitle="Schedule a free estimate and let's discuss colors, finishes, and timing."
        primaryLabel="Call +91 9594809030"
        secondaryLabel="Get Free Quote"
      />
    </>
  );
}
