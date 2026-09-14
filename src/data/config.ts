export const siteConfig = {
  name: "GLOBAL",
  tagline: "We Build Websites For Business.",
  supportingMessage: "Modern digital experiences designed around your business.",
  url: "https://globalweb.dev",

  contact: {
    phone: ["+91 9742693775", "+91 8217279114"],
    email: "globalweb937@gmail.com",
    location: "India",
    businessHours: "Mon – Sat, 10 AM – 7 PM IST",
  },

  whatsapp: {
    number: "919742693775",
    message: "Hi GLOBAL, I'm interested in getting a website for my business.",
  },

  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
