import { siteConfig } from "@/data/config";

export function getWhatsAppUrl(customMessage?: string): string {
  const { number, message } = siteConfig.whatsapp;
  if (!number) return "#";
  const text = encodeURIComponent(customMessage ?? message);
  return `https://wa.me/${number}?text=${text}`;
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
