"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919594809030"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[998] w-[60px] h-[60px] grid place-items-center bg-gradient-to-br from-[#25d366] to-[#128C7E] text-white rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-110 hover:rotate-6 active:scale-95 animate-float max-sm:w-[54px] max-sm:h-[54px] max-sm:bottom-4 max-sm:right-4 before:absolute before:inset-[-4px] before:rounded-full before:border-2 before:border-[#25d366]/30 before:animate-[pulse_2s_infinite]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
