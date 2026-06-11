import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, MessageCircle, Star, CheckCircle } from "lucide-react";

const services = [
  {
    icon: "brush",
    title: "Interior Painting",
    desc: "Transform your living spaces with premium emulsions, designer stencils, and flawless surface finishes.",
  },
  {
    icon: "home",
    title: "Exterior Detailing",
    desc: "Weather-shield coatings, anti-algae treatments, and texture coatings built for Mumbai's climate.",
  },
  {
    icon: "shield",
    title: "Waterproofing",
    desc: "Protect your property with industrial-grade waterproofing solutions that last for years.",
  },
];

const stats = [
  { number: "30+", label: "Years Excellence" },
  { number: "5000+", label: "Spaces Painted" },
  { number: "100%", label: "Quality Guarantee" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Worli, Mumbai",
    text: "Gurukrupa transformed our 3BHK with stunning textured finishes. Professional team, on-time delivery, and the quality is outstanding.",
  },
  {
    name: "Rahul Mehta",
    location: "Thane West",
    text: "Hired them for exterior painting. The weather-coat finish has survived two monsoons and still looks brand new. Highly recommend.",
  },
  {
    name: "Anita Desai",
    location: "Navi Mumbai",
    text: "From color consultation to final touches, every detail was handled with care. Our home feels like a luxury hotel now.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#181d3a]/5 to-[#c8cffe]/10">
        <div className="max-w-[1280px] mx-auto w-full px-[20px] md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#532900] animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#181d3a]">
                  Since 1992 | Mumbai &amp; Thane
                </span>
              </div>
              <h1 className="text-4xl md:text-[56px] md:leading-[1.1] font-bold text-[#181d3a] tracking-tight mb-6">
                Transforming Spaces Since 1992
              </h1>
              <p className="text-lg text-[#46464d] leading-relaxed mb-8 max-w-xl">
                Elevating luxury living and commercial excellence across Mumbai and Thane with premium painting solutions that stand the test of time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:scale-105 transition-transform duration-300 animate-gradient"
                  style={{
                    background: "linear-gradient(270deg, #181d3a, #555c84, #2d3250)",
                    backgroundSize: "600% 600%",
                  }}
                >
                  Get Free Quote <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919594809030"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 text-[#181d3a] font-semibold shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-300"
                >
                  <MessageCircle size={16} className="text-[#532900]" />
                  WhatsApp Us
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[40px] p-4 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                  <Image src="/images/hero-1.jpg" alt="Premium interior" fill className="object-cover" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                    <h3 className="text-xl font-semibold text-[#181d3a]">Bespoke Textures</h3>
                    <p className="text-sm text-[#46464d]">Hand-crafted finishes for signature walls.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[80px]">
          <div className="flex justify-center items-center gap-8 md:gap-16">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-[32px] md:text-[56px] font-bold text-[#181d3a] leading-none">{s.number}</div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#46464d] mt-1">{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px h-12 bg-[#c7c5ce]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute w-[500px] h-[500px] bg-[#181d3a]/5 rounded-full blur-[120px] -top-40 -left-40" />
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[80px] relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#ce8f5b] font-semibold mb-3">Our Expertise</p>
            <h2 className="text-[32px] font-semibold text-[#181d3a] mb-16">Precision in Every Stroke</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <div className="group bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-8 rounded-[32px] hover:bg-white/60 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#c8cffe]/30 flex items-center justify-center mb-5">
                    <span className="text-[#181d3a] text-3xl font-bold">
                      {svc.icon === "brush" ? "\uD83D\uDD8C\uFE0F" : svc.icon === "home" ? "\uD83C\uDFE0" : "\uD83D\uDEE1\uFE0F"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#181d3a] mb-3">{svc.title}</h3>
                  <p className="text-sm text-[#46464d] leading-relaxed flex-grow mb-4">{svc.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-[#181d3a] group-hover:gap-2 transition-all">
                    View More <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f3f3f3]">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[80px]">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#ce8f5b] font-semibold mb-3">Client Stories</p>
            <h2 className="text-[32px] font-semibold text-[#181d3a] mb-16">Trusted by Mumbai&apos;s Finest Homeowners</h2>
          </FadeIn>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-10 rounded-[32px]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#532900]" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm italic text-[#46464d] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#c8cffe] flex items-center justify-center text-[#181d3a] font-bold text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#181d3a]">{t.name}</p>
                      <p className="text-xs text-[#46464d]">{t.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-[#181d3a] text-white rounded-[48px] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,207,254,0.15),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-[32px] font-semibold mb-4">Ready to redefine your space?</h2>
                <p className="text-white/80 mb-8 max-w-md">Schedule a free consultation and let&apos;s discuss colors, finishes, and timing.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#181d3a] font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                >
                  Request Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-[48px] p-12 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-full bg-[#532900]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#532900]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <p className="text-lg font-semibold text-[#181d3a]">+91 9594809030</p>
              <p className="text-sm text-[#46464d]">Mon-Sat: 9 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
