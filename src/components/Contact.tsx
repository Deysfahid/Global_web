"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { getWhatsAppUrl } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const businessTypeOptions = [
  "Retail",
  "Restaurant",
  "Medical",
  "Salon",
  "Fitness",
  "Real Estate",
  "Education",
  "Professional Services",
  "Other",
];

const serviceOptions = [
  "New Website",
  "Website Redesign",
  "E-commerce Website",
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Tax & GST Filing",
  "Accounting Services",
  "Business Registration",
  "Other",
];

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { contact } = siteConfig;
  const whatsappUrl = getWhatsAppUrl();

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.businessType) newErrors.businessType = "Select a business type.";
    if (!formData.service) newErrors.service = "Select what you need.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "fc168a9d-ffbe-4db1-8c10-9cac12af5037",
          subject: `New enquiry from ${formData.name} — GLOBAL`,
          from_name: "GLOBAL Website",
          name: formData.name,
          email: formData.email,
          business_name: formData.businessName,
          phone: formData.phone,
          business_type: formData.businessType,
          project_type: formData.service,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const inputClass = (hasError?: string) =>
    `w-full px-0 py-3 text-sm bg-transparent border-b transition-colors outline-none placeholder:text-white/30 text-white ${
      hasError
        ? "border-red-500/50 focus:border-red-400"
        : "border-white/15 focus:border-yellow-400/60"
    }`;

  const selectClass = (hasError?: string) =>
    `w-full px-0 py-3 text-sm bg-transparent border-b transition-colors outline-none text-white appearance-none cursor-pointer ${
      hasError
        ? "border-red-500/50 focus:border-red-400"
        : "border-white/15 focus:border-yellow-400/60"
    }`;

  return (
    <section className="py-32 bg-[#0a0a0a] relative" id="contact">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.04] blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">Contact</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              <span className="block">LET&apos;S BUILD</span>
              <span className="block text-white/30">SOMETHING.</span>
            </h2>
            <p className="mt-4 text-white/30 text-sm max-w-md">
              Have a business that needs a website? Let&apos;s talk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — Contact Info */}
          <ScrollReveal className="lg:col-span-4">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-6">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/70 uppercase mb-2">
                    Phone / WhatsApp
                  </p>
                  {contact.phone.map((num) => (
                    <p key={num} className="text-sm text-white/70">{num}</p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/70 uppercase mb-2">
                    Email
                  </p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-white/70 hover:text-yellow-300 transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-yellow-400/70 uppercase mb-2">
                    Location
                  </p>
                  <p className="text-sm text-white/70">{contact.location}</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-white/15 uppercase mb-3">
                  Social
                </p>
                <div className="flex gap-4">
                  {siteConfig.social.instagram && (
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-yellow-300 transition-colors">
                      Instagram
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-yellow-300 transition-colors">
                      LinkedIn
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-yellow-300 transition-colors">
                      Facebook
                    </a>
                  )}
                  {!siteConfig.social.instagram && !siteConfig.social.linkedin && !siteConfig.social.facebook && (
                    <span className="text-xs text-white/15">Coming soon</span>
                  )}
                </div>
              </div>

              {/* WhatsApp CTA */}
              {whatsappUrl !== "#" && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[13px] font-medium text-yellow-400/50 hover:text-yellow-300 transition-colors"
                >
                  CHAT ON WHATSAPP
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal className="lg:col-span-8">
            {status === "success" ? (
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-12 text-center">
                <CheckCircle2 className="h-8 w-8 text-yellow-400/50 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Thank You.
                </h3>
                <p className="text-sm text-white/30 mb-8">
                  Your enquiry has been received. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-medium text-yellow-400/50 hover:text-yellow-300 transition-colors tracking-wide"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-1">
                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Name <span className="text-yellow-400/50">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-red-400/70">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => handleChange("businessName", e.target.value)}
                      placeholder="Your business name"
                      className={inputClass()}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Email <span className="text-yellow-400/50">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@email.com"
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-red-400/70">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Your phone number"
                      className={inputClass()}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Business Type <span className="text-yellow-400/50">*</span>
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => handleChange("businessType", e.target.value)}
                      className={selectClass(errors.businessType)}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select business type</option>
                      {businessTypeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0a0a]">{opt}</option>
                      ))}
                    </select>
                    {errors.businessType && <p className="mt-1 text-[11px] text-red-400/70">{errors.businessType}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                      Project Type <span className="text-yellow-400/50">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className={selectClass(errors.service)}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select project type</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0a0a]">{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-[11px] text-red-400/70">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.15em] text-yellow-400/70 uppercase mt-6 mb-1">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`${inputClass()} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400/70 pt-2">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full hover:from-yellow-300 hover:to-amber-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "SENDING..." : "SEND ENQUIRY"}
                    {!submitting && <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
