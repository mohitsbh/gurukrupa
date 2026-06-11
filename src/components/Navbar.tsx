"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Portfolio" },
  { href: "/about", label: "About Us" },
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

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center mt-6`}>
        <div className={`mx-auto w-fit max-w-[90%] px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            : "bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
        }`}>
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <span className="font-bold text-xl text-primary tracking-tight">
                Gurukrupa Paint
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-primary font-bold border-b-2 border-primary/50"
                        : "text-[#46464d] hover:text-primary hover:scale-105"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="tel:+919594809030"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#181d3a] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              <Phone size={14} />
              Get Free Quote
            </a>

            <button
              className={`md:hidden w-11 h-11 grid place-items-center z-[60] rounded-full transition-all duration-300 ${
                mobileOpen || scrolled
                  ? "bg-primary/5 text-primary"
                  : "bg-white/20 text-primary backdrop-blur-md"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 bottom-4 w-full max-w-[380px] bg-white/95 backdrop-blur-2xl z-[56] p-8 pt-24 rounded-3xl shadow-[-20px_0_60px_rgba(0,0,0,0.15)] border border-white/20 md:hidden overflow-y-auto"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-5 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                        isActive(link.href)
                          ? "bg-gradient-to-r from-[#c8cffe]/40 to-[#feb880]/20 text-primary pl-7 border-l-2 border-primary"
                          : "text-[#46464d] hover:bg-[#c8cffe]/20 hover:text-primary hover:pl-7"
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
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#181d3a] text-white rounded-full font-semibold text-base shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
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
