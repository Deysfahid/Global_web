"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.2em] text-white uppercase hover:opacity-70 transition-opacity"
        >
          GLOBAL<sup className="text-[8px] ml-0.5 align-super opacity-50">®</sup>
        </Link>

        {/* Desktop nav — centered pill */}
        <div className="hidden lg:flex items-center gap-1 px-1 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.08]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#050505]/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-3xl font-light tracking-wide transition-colors ${
              pathname === link.href || pathname.startsWith(link.href + "/") ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
