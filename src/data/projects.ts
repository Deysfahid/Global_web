export interface Project {
  number: string;
  name: string;
  slug: string;
  industry: string;
  description: string;
  longDescription: string;
  gradient: string;
  textColor: string;
  features: string[];
}

export const projects: Project[] = [
  {
    number: "01",
    name: "MEDCARE",
    slug: "medcare",
    industry: "Healthcare",
    description: "A modern clinic website with appointment scheduling, doctor profiles and patient resources.",
    longDescription: "MedCare is a comprehensive healthcare website designed for a multi-specialty clinic. The site features an intuitive appointment booking system, detailed doctor profiles with specializations, patient resources, and a clean interface that builds trust with visitors. Every element — from the calming blue palette to the accessible navigation — was designed with patients in mind.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    textColor: "text-blue-300",
    features: ["Appointment Scheduling", "Doctor Profiles", "Patient Resources", "Service Pages", "Contact Integration", "Mobile Responsive"],
  },
  {
    number: "02",
    name: "URBAN BREW",
    slug: "urban-brew",
    industry: "Restaurant",
    description: "A warm, inviting café website with menus, location details and online ordering.",
    longDescription: "Urban Brew brings the warmth and aroma of an artisan coffee house to the web. The dark, rich visual design mirrors the café experience with a digital menu showcasing single-origin brews, an online ordering flow, location details with hours, and a gallery that makes visitors want to visit in person. Built to convert browsers into customers.",
    gradient: "from-amber-500/10 to-orange-500/10",
    textColor: "text-amber-300",
    features: ["Digital Menu", "Online Ordering", "Location Finder", "Hours & Contact", "Photo Gallery", "Mobile First"],
  },
  {
    number: "03",
    name: "FRESHMART",
    slug: "freshmart",
    industry: "Retail",
    description: "A clean e-commerce storefront with product browsing, filtering and checkout.",
    longDescription: "FreshMart is a fresh grocery e-commerce platform designed for a farm-to-table delivery service. The clean, green-accented design puts products front and center with category browsing, smart filtering, product detail pages, a shopping cart, and a streamlined checkout. Optimized for repeat orders and daily fresh deals.",
    gradient: "from-emerald-500/10 to-green-500/10",
    textColor: "text-emerald-300",
    features: ["Product Catalog", "Category Browsing", "Shopping Cart", "Checkout Flow", "Daily Deals", "Delivery Tracking"],
  },
  {
    number: "04",
    name: "PRIME",
    slug: "prime",
    industry: "Real Estate",
    description: "A professional property platform with listings, analytics and client management.",
    longDescription: "Prime is a data-driven real estate platform built for a modern property business. The dark, professional interface features revenue analytics, client management dashboards, property listing pages, and growth tracking. Designed to help real estate businesses scale with data-driven insights and a premium digital presence.",
    gradient: "from-emerald-500/10 to-green-500/10",
    textColor: "text-emerald-300",
    features: ["Property Listings", "Analytics Dashboard", "Client Management", "Search & Filters", "Agent Profiles", "Lead Generation"],
  },
  {
    number: "05",
    name: "FITZONE",
    slug: "fitzone",
    industry: "Fitness",
    description: "A dynamic fitness website with class schedules, memberships and trainer bios.",
    longDescription: "FitZone is a high-energy fitness website built for a modern gym and training center. The bold, dark design with red accents conveys intensity and motivation. Features include class schedules with HIIT, strength, and yoga programs, trainer profiles, membership plans, and a training-focused layout that drives sign-ups.",
    gradient: "from-red-500/10 to-orange-500/10",
    textColor: "text-red-300",
    features: ["Class Schedules", "Membership Plans", "Trainer Profiles", "Program Details", "Online Sign-up", "Mobile App Ready"],
  },
  {
    number: "06",
    name: "ELITE STUDIO",
    slug: "elite-studio",
    industry: "Design",
    description: "A refined creative studio portfolio showcasing brand identity and digital work.",
    longDescription: "Elite Studio is a minimalist portfolio website for a creative design studio. The warm, refined aesthetic features a curated gallery of branding, web, and identity projects, along with an about section and contact flow. Every detail — from the serif typography to the subtle animations — reflects the studio's commitment to craft.",
    gradient: "from-rose-500/10 to-pink-500/10",
    textColor: "text-rose-300",
    features: ["Portfolio Gallery", "Project Case Studies", "About & Team", "Contact Form", "Smooth Animations", "Responsive Grid"],
  },
  {
    number: "07",
    name: "CITYLIFE",
    slug: "citylife",
    industry: "Lifestyle",
    description: "A vibrant city guide with curated dining, events and local experiences.",
    longDescription: "CityLife is a lifestyle and city guide platform that curates the best dining, events, and local experiences. The bright, editorial design features categorized listings, event calendars, neighborhood guides, and discovery tools that help users explore their city. Built to engage and retain a local audience.",
    gradient: "from-indigo-500/10 to-violet-500/10",
    textColor: "text-indigo-300",
    features: ["Curated Listings", "Event Calendar", "Neighborhood Guides", "Category Browsing", "User Reviews", "Mobile Optimized"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
