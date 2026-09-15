export interface Project {
  number: string;
  name: string;
  slug: string;
  industry: string;
  description: string;
  longDescription: string;
  gradient: string;
  textColor: string;
  accentColor: string;
  features: string[];
}

export const projects: Project[] = [
  {
    number: "01",
    name: "MEDCARE",
    slug: "medcare",
    industry: "Healthcare",
    description: "A modern clinic website with appointment scheduling, doctor profiles and patient resources.",
    longDescription: "MedCare is a comprehensive healthcare website designed for a multi-specialty clinic. The site features an intuitive appointment booking system, detailed doctor profiles with specializations, patient resources, and a clean interface that builds trust with visitors. Every element was designed with patients in mind.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    textColor: "text-blue-400",
    accentColor: "#3b82f6",
    features: ["Appointment Scheduling", "Doctor Profiles", "Patient Resources", "Service Pages", "Contact Integration", "Mobile Responsive"],
  },
  {
    number: "02",
    name: "SKYLINE REALTY",
    slug: "skyline-realty",
    industry: "Real Estate",
    description: "A sleek property listing website with search filters, virtual tours and agent profiles.",
    longDescription: "Skyline Realty is a modern real estate website designed for a property agency. The site features an intuitive property search with advanced filters, detailed listing pages with photo galleries, agent profiles, and a clean layout that helps visitors find their next home or investment. Built to generate quality leads.",
    gradient: "from-slate-500/20 to-indigo-500/10",
    textColor: "text-slate-400",
    accentColor: "#6366f1",
    features: ["Property Listings", "Advanced Search Filters", "Virtual Tour Integration", "Agent Profiles", "Contact Forms", "Mobile Responsive"],
  },
  {
    number: "03",
    name: "FRESHMART",
    slug: "freshmart",
    industry: "E-commerce",
    description: "A clean e-commerce storefront with product browsing, filtering and checkout.",
    longDescription: "FreshMart is a fresh grocery e-commerce platform designed for a farm-to-table delivery service. The clean design puts products front and center with category browsing, smart filtering, product detail pages, a shopping cart, and a streamlined checkout. Optimized for repeat orders and daily deals.",
    gradient: "from-emerald-500/20 to-green-500/10",
    textColor: "text-emerald-400",
    accentColor: "#10b981",
    features: ["Product Catalog", "Category Browsing", "Shopping Cart", "Checkout Flow", "Daily Deals", "Delivery Tracking"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
