import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryLabel = "Call Now",
  primaryHref = "tel:+919594809030",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: Props) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0a1228]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,93,4,0.15),transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(244,185,66,0.1),transparent_70%)] rounded-full" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-[540px] text-center md:text-left">
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight mb-3 text-white">
                {title}
              </h2>
              <p className="text-[17px] text-white/70 leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center shrink-0">
              <a
                href={primaryHref}
                className="group relative inline-flex items-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-[16px] shadow-[0_12px_32px_rgba(232,93,4,0.35)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                <Phone size={16} className="relative z-10" />
                <span className="relative z-10">{primaryLabel}</span>
              </a>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-9 py-[18px] bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-[16px] hover:bg-white hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {secondaryLabel} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
