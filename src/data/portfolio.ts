export type PortfolioCategory =
  | "All"
  | "Healthcare"
  | "Restaurants"
  | "Retail"
  | "Services"
  | "Real Estate";

export interface PortfolioProject {
  name: string;
  industry: string;
  category: PortfolioCategory;
  description: string;
  color: string; // Tailwind gradient classes for the preview card
  isDemo: true; // All current entries are demo projects
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Healthcare",
  "Restaurants",
  "Retail",
  "Services",
  "Real Estate",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "MedCare",
    industry: "Healthcare / Clinic",
    category: "Healthcare",
    description:
      "A modern clinic website with appointment scheduling, doctor profiles and patient resources.",
    color: "from-blue-500/20 to-cyan-500/20",
    isDemo: true,
  },
  {
    name: "Urban Brew",
    industry: "Restaurant / Café",
    category: "Restaurants",
    description:
      "A warm, inviting café website with menus, location details and online ordering.",
    color: "from-amber-500/20 to-orange-500/20",
    isDemo: true,
  },
  {
    name: "Style Studio",
    industry: "Salon / Beauty",
    category: "Services",
    description:
      "An elegant salon website with service menus, booking and a gallery of work.",
    color: "from-pink-500/20 to-rose-500/20",
    isDemo: true,
  },
  {
    name: "Prime Properties",
    industry: "Real Estate",
    category: "Real Estate",
    description:
      "A professional real estate website with property listings, search and agent profiles.",
    color: "from-emerald-500/20 to-green-500/20",
    isDemo: true,
  },
  {
    name: "FreshMart",
    industry: "Retail",
    category: "Retail",
    description:
      "A clean e-commerce storefront for a retail business with product browsing and checkout.",
    color: "from-violet-500/20 to-purple-500/20",
    isDemo: true,
  },
  {
    name: "FitZone",
    industry: "Fitness",
    category: "Services",
    description:
      "A dynamic fitness website with class schedules, memberships and trainer bios.",
    color: "from-red-500/20 to-orange-500/20",
    isDemo: true,
  },
];
