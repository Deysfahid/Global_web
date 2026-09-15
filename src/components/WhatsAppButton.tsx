"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  const url = getWhatsAppUrl();
  if (url === "#") return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/15 text-yellow-300/60 rounded-full hover:bg-yellow-500/20 hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
