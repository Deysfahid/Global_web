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
    default: "GLOBAL — We Build Websites For Business",
    template: "%s | GLOBAL",
  },
  description:
    "GLOBAL is a web development studio that builds modern, professional websites for businesses, clinics, shops and organizations.",
  keywords: [
    "website development",
    "business website development",
    "web design studio",
    "small business websites",
    "medical website development",
    "restaurant website development",
    "e-commerce website development",
    "website redesign",
    "web development studio India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GLOBAL",
    title: "GLOBAL — We Build Websites For Business",
    description:
      "GLOBAL is a web development studio that builds modern, professional websites for businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOBAL — We Build Websites For Business",
    description:
      "Modern website development for businesses of all sizes.",
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
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
