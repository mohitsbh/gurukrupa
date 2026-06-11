"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute -inset-4 bg-[#532900]/20 rounded-full animate-pulse" />
      <a
        href="https://wa.me/919594809030"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-[60px] h-[60px] bg-white/40 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_0_20px_rgba(83,41,0,0.3)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-[#532900]" fill="currentColor" />
      </a>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-xl border border-white/50 rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm text-[#181d3a] font-medium">
        Chat with us on WhatsApp
      </div>
    </div>
  );
}
