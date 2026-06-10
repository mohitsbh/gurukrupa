"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Paintbrush, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/interior", label: "Interior" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1320px] rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(15,30,61,0.12)] border border-white/20 py-3 top-3"
            : "bg-white/10 backdrop-blur-md border border-white/20 py-4"
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 grid place-items-center bg-gradient-to-br from-accent to-gold rounded-[10px] text-white shadow-[0_4px_14px_rgba(232,93,4,0.4)] transition-all duration-500 group-hover:shadow-[0_8px_25px_rgba(232,93,4,0.6)] group-hover:scale-110">
              <Paintbrush size={20} />
            </span>
            <span
              className={`text-[22px] font-extrabold tracking-tight ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Gurukrupa
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-accent bg-accent/10"
                      : scrolled
                      ? "text-text/80 hover:text-accent hover:bg-accent/8"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:+919594809030"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[14px] transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-r from-accent to-accent-dark text-white shadow-[0_8px_24px_rgba(232,93,4,0.35)] hover:shadow-[0_12px_32px_rgba(232,93,4,0.5)] hover:-translate-y-0.5 active:scale-95"
                : "bg-white/15 text-white border border-white/30 backdrop-blur-md hover:bg-white hover:text-primary hover:scale-105 active:scale-95"
            }`}
          >
            <Phone size={14} />
            +91 9594809030
          </a>
        </div>
      </nav>

      <button
        className={`lg:hidden fixed top-[22px] right-[34px] w-11 h-11 grid place-items-center z-[60] rounded-full transition-all duration-300 ${
          mobileOpen || scrolled
            ? "bg-primary/5 text-primary hover:bg-primary/10"
            : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
        }`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/70 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 bottom-4 w-full max-w-[380px] bg-white/95 backdrop-blur-2xl z-[56] p-8 pt-24 rounded-3xl shadow-[-20px_0_60px_rgba(0,0,0,0.15)] border border-white/20 lg:hidden overflow-y-auto"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-5 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                        pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                          ? "bg-gradient-to-r from-accent/10 to-gold/10 text-accent pl-7 border-l-2 border-accent"
                          : "text-text hover:bg-accent/5 hover:text-accent hover:pl-7"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+919594809030"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-base shadow-[0_8px_24px_rgba(232,93,4,0.35)] hover:shadow-[0_12px_32px_rgba(232,93,4,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919594809030"
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-[#25d366] text-[#25d366] rounded-full font-semibold text-base hover:bg-[#25d366] hover:text-white active:scale-95 transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
