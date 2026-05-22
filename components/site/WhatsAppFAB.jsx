"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-fab"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full p-4 md:px-5 md:py-4 shadow-[0_12px_40px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
    </a>
  );
}
