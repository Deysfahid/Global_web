import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-sm font-bold tracking-[0.2em] text-white">
              GLOBAL<sup className="text-[7px] ml-0.5 align-super text-yellow-400/50">®</sup>
            </Link>
            <p className="mt-4 text-xs text-white/50 leading-relaxed max-w-[200px]">
              BUILD. GROW. SCALE.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/60 uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 hover:text-yellow-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/60 uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {[
                { label: "Website Development", slug: "website-development" },
                { label: "E-commerce", slug: "ecommerce" },
                { label: "Digital Marketing", slug: "digital-marketing" },
                { label: "SEO", slug: "seo" },
                { label: "Tax & GST", slug: "tax-gst" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-xs text-white/60 hover:text-yellow-300 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/60 uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              {contact.phone.map((num) => (
                <li key={num} className="text-xs text-white/60">{num}</li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="text-xs text-white/60 hover:text-yellow-300 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="text-xs text-white/60">{contact.location}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/40">
            © {new Date().getFullYear()} GLOBAL. All rights reserved.
          </p>
          <p className="text-[10px] text-yellow-400/40">
            Build. Grow. Scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
