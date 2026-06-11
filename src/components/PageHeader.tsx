import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  bgImage?: string;
  height?: "default" | "tall";
}

export function PageHeader({ eyebrow, title, subtitle, breadcrumb, bgImage, height = "default" }: Props) {
  return (
    <section
      className={`relative overflow-hidden flex items-center ${
        height === "tall" ? "min-h-[70vh] pt-[200px] pb-[140px]" : "pt-[180px] pb-[100px]"
      }`}
      style={{
        background: bgImage
          ? `linear-gradient(135deg, rgba(24,29,58,0.92), rgba(45,50,80,0.95)), url(${bgImage}) center/cover no-repeat fixed`
          : "linear-gradient(135deg, rgba(24,29,58,0.92), rgba(45,50,80,0.95))",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,207,254,0.1),transparent_60%)]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(206,143,91,0.08),transparent_70%)] rounded-full" />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[3px] uppercase text-[#ce8f5b] mb-4 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#532900] animate-pulse" />
          {eyebrow}
        </span>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-[600px] mx-auto leading-relaxed">{subtitle}</p>
        )}
        {breadcrumb && (
          <div className="inline-flex items-center gap-2.5 mt-8 text-[14px] text-white/50 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2.5">
                {i > 0 && <ChevronRight size={10} className="opacity-40" />}
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#ce8f5b] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{item.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
