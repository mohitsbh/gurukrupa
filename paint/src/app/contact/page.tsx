"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+91 9594809030", href: "tel:+919594809030" },
  { icon: Phone, label: "Alternate Number", value: "+91 9969441237", href: "tel:+919969441237" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/919594809030", external: true },
  { icon: MapPin, label: "Service Area", value: "Mumbai, Thane, Maharashtra" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xrbgwlew", {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) { setSubmitted(true); form.reset(); }
    } catch {}
    setSubmitting(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Plan Your Project"
        subtitle="Tell us about your project and we'll get back to you within 24 hours with a free, no-obligation estimate."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-alt/30" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] items-start">
            <FadeIn>
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Reach Out to Us</h2>
                  <p className="text-text-muted mb-2">
                    Whether you need a quote, want to discuss a project, or just have a question — we&apos;re here to help.
                  </p>
                </div>

                {contactItems.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={i}
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-start gap-4 p-5 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl transition-all duration-300 hover:border-accent/20 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(15,30,61,0.06)] cursor-pointer"
                    >
                      <div className="shrink-0 w-11 h-11 grid place-items-center bg-gradient-to-br from-accent/10 to-gold/10 text-accent rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:from-accent group-hover:to-gold group-hover:text-white">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-0.5">{item.label}</h5>
                        <p className="text-base font-medium text-text">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-10 rounded-[28px] shadow-[0_16px_48px_rgba(15,30,61,0.08)]">
                <h3 className="text-[22px] font-bold mb-2">Request a Free Quote</h3>
                <p className="text-text-muted text-sm mb-6">
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="w-16 h-16 grid place-items-center bg-gradient-to-br from-success/20 to-success/10 text-success rounded-full mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-text-muted">We&apos;ve received your message. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input type="text" name="name" required placeholder="Your name"
                          className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-sm text-text text-[15px] border border-white/60 rounded-2xl transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,93,4,0.1)]" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                        <input type="tel" name="phone" required placeholder="+91"
                          className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-sm text-text text-[15px] border border-white/60 rounded-2xl transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,93,4,0.1)]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input type="email" name="email" required placeholder="your@email.com"
                        className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-sm text-text text-[15px] border border-white/60 rounded-2xl transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,93,4,0.1)]" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Service Required</label>
                      <select name="service" required
                        className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-sm text-text text-[15px] border border-white/60 rounded-2xl transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,93,4,0.1)] appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b6373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center", backgroundSize: "16px", paddingRight: "48px",
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="interior">Interior Painting</option>
                        <option value="exterior">Exterior Painting</option>
                        <option value="house">Complete House Painting</option>
                        <option value="commercial">Commercial Painting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Project Details</label>
                      <textarea name="message" rows={4} required placeholder="Tell us about your project — location, area size, timeline, etc."
                        className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-sm text-text text-[15px] border border-white/60 rounded-2xl transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,93,4,0.1)] resize-y min-h-[140px]" />
                    </div>

                    <button type="submit" disabled={submitting}
                      className="group relative w-full mt-2 inline-flex items-center justify-center gap-2 px-9 py-[18px] bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-semibold text-base shadow-[0_12px_32px_rgba(232,93,4,0.35)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden disabled:opacity-60"
                    >
                      <span className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                      <Send size={16} className="relative z-10" />
                      <span className="relative z-10">{submitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[28px] overflow-hidden shadow-[0_16px_48px_rgba(15,30,61,0.08)] border border-white/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695000000000"
              width="100%" height="400" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Gurukrupa Paint Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
