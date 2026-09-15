import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GLOBAL — Build. Grow. Scale.",
    template: "%s | GLOBAL",
  },
  description:
    "GLOBAL is a digital business agency — websites, e-commerce, marketing, SEO, tax & GST, accounting and business services.",
  keywords: [
    "website development",
    "digital marketing",
    "SEO services",
    "e-commerce development",
    "business registration India",
    "GST filing",
    "social media marketing",
    "web design agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GLOBAL",
    title: "GLOBAL — Build. Grow. Scale.",
    description:
      "Everything your business needs to build a stronger digital presence and grow with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOBAL — Build. Grow. Scale.",
    description:
      "Websites, marketing, tax and business services — all under one roof.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
