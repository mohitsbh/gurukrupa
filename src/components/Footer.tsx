import Link from "next/link";
import {
  Paintbrush,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/services/interior", label: "Interior" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/interior", label: "Interior Painting" },
  { href: "/services/exterior", label: "Exterior Painting" },
  { href: "/services/house", label: "House Painting" },
  { href: "/services", label: "Commercial Painting" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-gold to-accent shadow-[0_0_20px_rgba(232,93,4,0.5)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,93,4,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,185,66,0.05),transparent_60%)]" />

      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <span className="w-10 h-10 grid place-items-center bg-gradient-to-br from-accent to-gold rounded-[10px] text-white shadow-[0_4px_14px_rgba(232,93,4,0.4)] transition-all duration-500 group-hover:shadow-[0_8px_25px_rgba(232,93,4,0.6)] group-hover:scale-110">
                <Paintbrush size={20} />
              </span>
              <span className="text-[22px] font-extrabold text-white tracking-tight">
                Gurukrupa
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-white/60 mb-6 max-w-[320px]">
              Mumbai&apos;s trusted interior painting contractor since 1992. Quality craftsmanship, premium paints, and competitive pricing — guaranteed.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/shankarbhosale1976", label: "Facebook" },
                { icon: MessageCircle, href: "https://wa.me/919594809030", label: "WhatsApp" },
                { icon: Instagram, href: "https://www.instagram.com/shankar_bhosale.76", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[42px] h-[42px] grid place-items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:bg-gradient-to-br hover:from-accent hover:to-gold hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(232,93,4,0.3)] transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-accent to-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-gold hover:translate-x-1.5 transition-all duration-300 text-[15px] group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-accent to-gold rounded-full" />
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-gold hover:translate-x-1.5 transition-all duration-300 text-[15px] group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-accent to-gold rounded-full" />
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed group hover:text-gold/80 transition-colors">
                <MapPin size={14} className="text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                Mumbai, Thane, Maharashtra, India
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed">
                <Phone size={14} className="text-gold mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919969441237" className="hover:text-gold transition-colors">+91 9969441237</a>
                  <a href="tel:+919594809030" className="hover:text-gold transition-colors">+91 9594809030</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed group">
                <MessageCircle size={14} className="text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://wa.me/919594809030" target="_blank" className="hover:text-gold transition-colors">WhatsApp Us</a>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed">
                <Clock size={14} className="text-gold mt-1 shrink-0" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 text-center text-[14px] text-white/40">
          © {new Date().getFullYear()} Gurukrupa Paint Company. All rights reserved. Serving Mumbai, Thane &amp; Maharashtra.
        </div>
      </div>
    </footer>
  );
}
