"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { X, Expand } from "lucide-react";

const galleryItems = [
  { src: "/images/hero-1.jpg", title: "Living Room Makeover" },
  { src: "/images/hero-2.jpg", title: "Modern Bedroom" },
  { src: "/images/hero-3.jpg", title: "Kitchen Refresh" },
  { src: "/images/interior-1.jpg", title: "Modern Interior" },
  { src: "/images/exterior-1.jpg", title: "Exterior Facade" },
  { src: "/images/interior-2.jpg", title: "Living Room Design" },
  { src: "/images/exterior-2.jpg", title: "House Exterior" },
  { src: "/images/feature.jpg", title: "Accent Wall" },
  { src: "/images/hallway.jpg", title: "Elegant Hallway" },
  { src: "/images/living.jpg", title: "Living Space" },
  { src: "/images/office.jpg", title: "Office Space" },
  { src: "/images/dining.jpg", title: "Dining Room" },
  { src: "/images/bedroom.jpg", title: "Master Bedroom" },
  { src: "/images/wall-texture.jpg", title: "Wall Texture" },
  { src: "/images/painter-1.jpg", title: "Painter at Work" },
  { src: "/images/color-palette.jpg", title: "Color Palette" },
  { src: "/images/bathroom.jpg", title: "Bathroom" },
  { src: "/images/kitchen.jpg", title: "Kitchen Cabinets" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Our Portfolio"
        title="A Glimpse of Our Work"
        subtitle="Browse through some of our recent painting projects across Mumbai, Thane and Maharashtra. Click any image to view in fullscreen."
        bgImage="/images/feature.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow="Projects"
              title="Recent Work"
              subtitle="Every project is a story. Here are some of the homes and businesses we've had the privilege to transform."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 md:gap-5">
            {galleryItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.02}>
                <div
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-white/80 backdrop-blur-sm border border-white/40 shadow-[0_4px_16px_rgba(15,30,61,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,30,61,0.12)] hover:border-accent/20"
                  onClick={() => setLightbox(item.src)}
                >
                  <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                        <span className="text-[13px] text-gold inline-flex items-center gap-1.5">
                          <Expand size={12} /> View Project
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-6 right-6 w-14 h-14 grid place-items-center bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full transition-all duration-300 hover:bg-accent hover:rotate-90 hover:scale-110"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={22} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Fullscreen view" fill className="object-contain rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        title="Love what you see?"
        subtitle="Let us create something equally stunning for your home or business. Get a free estimate today."
        primaryLabel="Call +91 9594809030"
        secondaryLabel="Request Quote"
      />
    </>
  );
}
