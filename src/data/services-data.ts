export interface ServiceData {
  number: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  relatedProjectSlugs: string[];
}

export const services: ServiceData[] = [
  {
    number: "01",
    title: "BUSINESS WEBSITES",
    slug: "business-websites",
    description: "Professional websites designed around your business and customers.",
    longDescription: "A professional website is the foundation of your online presence. We design and build business websites that clearly communicate what you do, build trust with visitors, and convert them into customers. From corporate sites to local business pages, every website is tailored to your brand, your industry, and your audience.",
    features: [
      "Custom design tailored to your brand",
      "Mobile responsive across all devices",
      "SEO-optimized structure and content",
      "Contact forms and lead capture",
      "Fast loading and performance tuned",
      "Analytics and tracking integration",
    ],
    relatedProjectSlugs: ["prime", "elite-studio", "citylife"],
  },
  {
    number: "02",
    title: "E-COMMERCE",
    slug: "ecommerce",
    description: "Online stores that make it easy for customers to browse and purchase.",
    longDescription: "We build online stores that turn visitors into buyers. From product catalogs and shopping carts to checkout flows and payment integration, every e-commerce site we create is designed to be intuitive, fast, and conversion-focused. Whether you sell ten products or ten thousand, your store will look professional and work flawlessly.",
    features: [
      "Product catalog with categories and filters",
      "Shopping cart and secure checkout",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking and notifications",
      "Mobile-optimized shopping experience",
    ],
    relatedProjectSlugs: ["freshmart"],
  },
  {
    number: "03",
    title: "MEDICAL WEBSITES",
    slug: "medical-websites",
    description: "Modern websites for clinics, doctors, dentists and healthcare businesses.",
    longDescription: "Healthcare websites need to build trust, inform patients, and simplify appointments. We create modern, accessible websites for clinics, doctors, dentists, and healthcare providers that feature appointment booking, doctor profiles, service pages, and patient resources. Clean, professional, and designed to put patients at ease.",
    features: [
      "Online appointment scheduling",
      "Doctor and specialist profiles",
      "Service and treatment pages",
      "Patient resources and FAQ",
      "HIPAA-conscious design practices",
      "Location maps and contact details",
    ],
    relatedProjectSlugs: ["medcare"],
  },
  {
    number: "04",
    title: "RESTAURANT WEBSITES",
    slug: "restaurant-websites",
    description: "Beautiful menus, contact information, location and online ordering.",
    longDescription: "A restaurant website should make people hungry and then make it easy to visit or order. We build restaurant and café websites with beautiful digital menus, online ordering, location details with maps, photo galleries, and reservation systems. Designed to capture the atmosphere of your venue and bring customers through the door.",
    features: [
      "Digital menu with categories and prices",
      "Online ordering and delivery integration",
      "Table reservation system",
      "Photo gallery of food and venue",
      "Location, hours, and contact info",
      "Social media integration",
    ],
    relatedProjectSlugs: ["urban-brew"],
  },
  {
    number: "05",
    title: "LANDING PAGES",
    slug: "landing-pages",
    description: "High-converting landing pages for campaigns and businesses.",
    longDescription: "Landing pages are built for one purpose: conversion. Whether you're launching a product, running an ad campaign, or capturing leads, we design focused, high-converting landing pages that guide visitors toward a single action. Clear messaging, compelling design, and proven conversion principles in every build.",
    features: [
      "Conversion-focused design and copy",
      "A/B testing ready",
      "Lead capture forms",
      "Analytics and conversion tracking",
      "Fast page load speed",
      "Mobile-first responsive design",
    ],
    relatedProjectSlugs: ["fitzone", "elite-studio"],
  },
  {
    number: "06",
    title: "CUSTOM WEB APPLICATIONS",
    slug: "custom-web-apps",
    description: "Custom web solutions built around specific business requirements.",
    longDescription: "When off-the-shelf tools don't fit, we build custom web applications tailored to your exact business needs. From internal dashboards and client portals to booking systems and inventory tools, we develop solutions that automate workflows, save time, and scale with your business.",
    features: [
      "Custom functionality and workflows",
      "User authentication and roles",
      "Database design and management",
      "API integrations",
      "Admin dashboards and reporting",
      "Scalable architecture",
    ],
    relatedProjectSlugs: ["prime", "freshmart"],
  },
  {
    number: "07",
    title: "WEBSITE REDESIGN",
    slug: "website-redesign",
    description: "Transform outdated websites into modern digital experiences.",
    longDescription: "An outdated website costs you credibility and customers. We redesign existing websites with modern aesthetics, improved user experience, faster performance, and mobile responsiveness — while preserving your brand identity and SEO equity. The result is a website that looks current, loads fast, and converts better.",
    features: [
      "Modern visual redesign",
      "Improved user experience and navigation",
      "Performance optimization",
      "Mobile responsive overhaul",
      "SEO preservation and improvement",
      "Content migration and restructuring",
    ],
    relatedProjectSlugs: ["medcare", "urban-brew", "citylife"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
