import Link from "next/link";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#c7c5ce]">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[80px] pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#181d3a] tracking-tight mb-3">
              Gurukrupa Paint
            </h3>
            <p className="text-sm text-[#46464d] leading-relaxed">
              Premium painting contractor serving Mumbai, Thane &amp; Maharashtra since 1992.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#181d3a] mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {["Interior Painting", "Exterior Painting", "Waterproofing", "Texture Walls"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-[#46464d] hover:text-[#181d3a] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#181d3a] mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[#46464d]">
                <MapPin size={14} /> Mumbai, Thane
              </li>
              <li>
                <a href="tel:+919594809030" className="flex items-center gap-2 text-sm text-[#46464d] hover:text-[#181d3a] transition-colors">
                  <Phone size={14} /> +91 9594809030
                </a>
              </li>
              <li>
                <a href="https://wa.me/919594809030" target="_blank" className="flex items-center gap-2 text-sm text-[#46464d] hover:text-[#181d3a] transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@gurukrupa.in" className="flex items-center gap-2 text-sm text-[#46464d] hover:text-[#181d3a] transition-colors">
                  <Mail size={14} /> info@gurukrupa.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#181d3a] mb-4">
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "FAQ", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#46464d] hover:text-[#181d3a] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c7c5ce]/30 mt-20 pt-8 text-center text-xs text-[#77767e]">
          &copy; 1992-2024 Gurukrupa Painting Services. Excellence in Mumbai &amp; Thane.
        </div>
      </div>
    </footer>
  );
}
