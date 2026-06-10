import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import {
  Award,
  Paintbrush,
  Handshake,
  Tags,
  Trophy,
  Palette,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Phone,
  Star,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "30+ Years Experience",
    desc: "First-rate home and commercial painting services delivered with the same care and attention since 1992.",
  },
  {
    icon: Paintbrush,
    title: "Premium Paints",
    desc: "We use only the best, longest-lasting paint and premium materials for a finish that stands the test of time.",
  },
  {
    icon: Handshake,
    title: "Owner-Supervised",
    desc: "Every project is personally supervised by the owner — your satisfaction is our reputation.",
  },
  {
    icon: Tags,
    title: "Fair, Honest Pricing",
    desc: "We check competitors' prices to ensure you get the best value for your money.",
  },
];

const rooms = [
  { name: "Bedrooms", image: "/images/bedroom.jpg" },
  { name: "Living Rooms", image: "/images/living.jpg" },
  { name: "Kitchens", image: "/images/kitchen.jpg" },
  { name: "Bathrooms", image: "/images/bathroom.jpg" },
  { name: "Dining Areas", image: "/images/dining.jpg" },
  { name: "Offices", image: "/images/office.jpg" },
];

const services = [
  {
    title: "Interior Painting",
    desc: "Our specialty. Bedrooms, kitchens, living rooms, ceilings — flawless finishes guaranteed.",
    image: "/images/hero-1.jpg",
    href: "/services/interior",
    featured: true,
  },
  {
    title: "Exterior Painting",
    desc: "Weather-resistant exterior painting built to protect and beautify your property for years.",
    image: "/images/exterior-1.jpg",
    href: "/services/exterior",
    featured: false,
  },
  {
    title: "House Painting",
    desc: "Complete home transformations from foundation to rooftop with premium materials.",
    image: "/images/exterior-2.jpg",
    href: "/services/house",
    featured: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We visit your space, understand your vision and provide a detailed, no-obligation estimate.",
  },
  {
    num: "02",
    title: "Color & Material Selection",
    desc: "We help you choose the perfect colors and finishes from premium paints built to last.",
  },
  {
    num: "03",
    title: "Meticulous Preparation",
    desc: "Furniture protected, surfaces cleaned, scraped and primed for a flawless finish.",
  },
  {
    num: "04",
    title: "Painting & Final Walkthrough",
    desc: "Our skilled painters deliver crisp, even coats. We walk through with you to ensure 100% satisfaction.",
  },
];

const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Homeowner · Thane",
    text: "Gurukrupa painted our entire 3BHK apartment. The team was punctual, polite, and the finish is just beautiful. Highly recommended!",
  },
  {
    initials: "RM",
    name: "Rajesh Mehta",
    role: "Business Owner · Mumbai",
    text: "Owner-supervised work and very competitive pricing. They finished our office exterior a day ahead of schedule.",
  },
  {
    initials: "AD",
    name: "Anita Deshmukh",
    role: "Homeowner · Navi Mumbai",
    text: "Best painting experience we've had. The crew was respectful, prep work was meticulous, and the result looks premium.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,30,61,0.93),rgba(8,21,48,0.88)),url('/images/hero-1.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="absolute -top-[30%] -right-[15%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,93,4,0.15),transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,185,66,0.1),transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-[radial-gradient(circle,rgba(232,93,4,0.08),transparent_70%)] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-[1.3fr_1fr] gap-[60px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">
            <div>
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[13px] font-semibold tracking-wider uppercase text-gold mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  Mumbai&apos;s Trusted Interior Painters · Since 1992
                </span>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 text-white">
                  Beautiful{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">interiors</span>
                  <br />start with the right painters
                </h1>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="text-[clamp(16px,2vw,19px)] leading-relaxed text-white/80 max-w-[580px] mb-9">
                  We specialize in transforming homes and businesses across Mumbai, Thane and Maharashtra
                  with flawless interior painting, premium materials, and craftsmanship you can see in every stroke.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex gap-4 flex-wrap mb-14">
                  <a
                    href="tel:+919594809030"
                    className="group relative inline-flex items-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-[16px] shadow-[0_12px_32px_rgba(232,93,4,0.4)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                    <Phone size={16} className="relative z-10" />
                    <span className="relative z-10">Get Free Estimate</span>
                  </a>
                  <Link
                    href="/services/interior"
                    className="inline-flex items-center gap-2 px-9 py-[18px] bg-white/10 backdrop-blur-xl text-white border border-white/25 rounded-full font-semibold text-[16px] hover:bg-white hover:text-primary hover:border-white hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Interior Services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="flex gap-12 flex-wrap pt-9 border-t border-white/10">
                  {[
                    { num: "30+", label: "Years Experience" },
                    { num: "2,500+", label: "Projects Done" },
                    { num: "100%", label: "Satisfaction" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="font-extrabold text-[40px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-gold to-accent mb-1.5">
                        {s.num}
                      </span>
                      <span className="text-[14px] text-white/60 font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="hidden max-[900px]:!hidden relative">
              <FadeIn direction="right">
                <div className="relative">
                  <div className="relative z-10 grid grid-cols-2 gap-3.5 perspective-[1000px]">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] group hover:-translate-y-2 transition-transform duration-500">
                      <Image src="/images/hero-1.jpg" alt="Living room" width={400} height={220} className="w-full h-[220px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] mt-10 group hover:-translate-y-2 transition-transform duration-500">
                      <Image src="/images/hero-2.jpg" alt="Bedroom" width={400} height={220} className="w-full h-[220px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] -mt-5 group hover:-translate-y-2 transition-transform duration-500">
                      <Image src="/images/hero-3.jpg" alt="Kitchen" width={800} height={180} className="w-full h-[180px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/50 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Why Gurukrupa"
              title="The Painting Contractor You Can Trust"
              subtitle="Three decades of trusted craftsmanship, transparent pricing, and premium materials make us the preferred painting contractor across Mumbai, Thane and Maharashtra."
            />
          </FadeIn>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.1)] hover:border-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-gold transition-[height] duration-500 group-hover:h-full rounded-r" />
                  <div className="relative z-10">
                    <div className="w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl text-[26px] mb-5 transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)]">
                      <f.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                    <p className="text-text-muted text-[15px] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-cream),var(--color-bg))]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -top-[40%] -right-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,93,4,0.06),transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,185,66,0.06),transparent_70%)] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-[1.1fr_1fr] gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">
            <FadeIn>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,30,61,0.12)] group hover:shadow-[0_20px_60px_rgba(15,30,61,0.18)] transition-shadow duration-500">
                    <Image src="/images/hero-2.jpg" alt="Modern bedroom" width={400} height={500} className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,30,61,0.12)] group hover:shadow-[0_20px_60px_rgba(15,30,61,0.18)] transition-shadow duration-500">
                    <Image src="/images/interior-2.jpg" alt="Living room" width={400} height={240} className="w-full h-full min-h-[190px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,30,61,0.12)] group hover:shadow-[0_20px_60px_rgba(15,30,61,0.18)] transition-shadow duration-500">
                    <Image src="/images/interior-1.jpg" alt="Modern interior" width={400} height={240} className="w-full h-full min-h-[190px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-xl border border-white/50 p-5 md:p-6 rounded-2xl shadow-[0_16px_48px_rgba(15,30,61,0.15)] flex items-center gap-4 z-20 max-w-[280px]">
                  <div className="w-12 h-12 grid place-items-center bg-gradient-to-br from-accent to-gold rounded-xl text-white shadow-[0_4px_14px_rgba(232,93,4,0.4)] shrink-0">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <strong className="block text-lg font-bold leading-tight text-text">Interior Specialists</strong>
                    <span className="text-[12px] text-text-muted">Mumbai&apos;s most trusted</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-accent mb-4">
                <span className="w-6 h-[2px] bg-gradient-to-r from-accent to-gold rounded-full" />
                Our Specialty
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight mb-4">
                Interior Painting, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">Done Right</span>
              </h2>
              <p className="text-[17px] text-text-muted leading-relaxed mb-5">
                Interior painting is our bread and butter — and it shows. From a single accent wall to a
                complete home transformation, our painters bring years of experience, an eye for detail,
                and the kind of care that only comes from genuine craftsmanship.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: Palette, title: "Color Consultation", desc: "We'll help you pick the perfect palette for your space." },
                  { icon: Sparkles, title: "Meticulous Preparation", desc: "Furniture protected, walls cleaned, primed, and ready." },
                  { icon: Paintbrush, title: "Premium Application", desc: "Even coats, crisp lines, flawless finish — guaranteed." },
                  { icon: ShieldCheck, title: "Satisfaction Guaranteed", desc: "If anything isn't right, we make it right — period." },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-4 p-[18px] bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:bg-white hover:border-accent/20 hover:shadow-[0_4px_16px_rgba(15,30,61,0.06)]">
                    <div className="shrink-0 w-10 h-10 grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h5 className="text-[15px] font-semibold mb-0.5">{item.title}</h5>
                      <p className="text-[13px] text-text-muted leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/services/interior"
                className="group relative inline-flex items-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-[16px] shadow-[0_12px_32px_rgba(232,93,4,0.35)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                <span className="relative z-10">Explore Interior Services</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/20" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="What We Paint"
              title="Every Room, Transformed"
              subtitle="From kitchens to bedrooms, living rooms to bathrooms — we paint every space with the same dedication to excellence."
            />
          </FadeIn>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {rooms.map((room, i) => (
              <FadeIn key={i} delay={i * 0.07}>
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-alt/20 via-bg to-bg-alt/20 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Complete Solutions"
              title="Beyond Interior, We Do It All"
              subtitle="While interior painting is our specialty, we offer a complete range of services for homes, offices and commercial spaces."
            />
          </FadeIn>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {services.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
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
                      Explore Service <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[120px] bg-bg-alt relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Process"
              title="Simple, Stress-Free, Professional"
              subtitle="From the first call to the final walkthrough, we keep you informed and your home protected every step of the way."
            />
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative bg-white/80 backdrop-blur-md border border-white/60 rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,30,61,0.08)] overflow-hidden">
                  <div className="absolute -top-8 -right-8 text-[80px] font-extrabold text-accent/5 select-none leading-none">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-gold text-white font-extrabold text-xl rounded-[16px] mb-5 shadow-[0_8px_24px_rgba(232,93,4,0.3)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(232,93,4,0.4)] group-hover:scale-110">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold mb-2.5">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-alt/20 via-bg to-bg-alt/20 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Testimonials"
              title="Loved by Homeowners Across Mumbai"
              subtitle="Trusted by thousands of homeowners and businesses across Mumbai, Thane and Maharashtra."
            />
          </FadeIn>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-9 bg-white/80 backdrop-blur-md border border-white/60 rounded-[28px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(15,30,61,0.08)] overflow-hidden">
                  <div className="absolute -top-4 -right-2 text-[80px] leading-none text-accent/5 font-serif select-none">&ldquo;</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-gold" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[15px] leading-relaxed mb-6 relative z-[1] text-text/90">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-white/40">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold grid place-items-center text-white font-bold text-lg shadow-[0_4px_12px_rgba(232,93,4,0.2)]">
                      {t.initials}
                    </div>
                    <div>
                      <h5 className="text-[15px] font-bold mb-0.5">{t.name}</h5>
                      <span className="text-[13px] text-text-muted">{t.role}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to transform your space?"
        subtitle="Schedule your free, no-obligation estimate today. We'll visit, plan, and quote — at no cost."
        primaryLabel="Call +91 9594809030"
        secondaryLabel="Request Online"
        secondaryHref="/contact"
      />
    </>
  );
}
