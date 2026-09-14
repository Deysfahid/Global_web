import {
  Globe,
  ShoppingCart,
  Stethoscope,
  UtensilsCrossed,
  Rocket,
  RefreshCw,
  Code2,
  Wrench,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Professional websites designed around your business and customers.",
    icon: Globe,
    slug: "business-websites",
  },
  {
    title: "E-commerce",
    description:
      "Online stores that make it easy for customers to browse and purchase.",
    icon: ShoppingCart,
    slug: "e-commerce",
  },
  {
    title: "Medical Websites",
    description:
      "Modern websites for clinics, doctors, dentists and healthcare businesses.",
    icon: Stethoscope,
    slug: "medical-websites",
  },
  {
    title: "Restaurant Websites",
    description:
      "Beautiful menus, contact information, location and online ordering integrations.",
    icon: UtensilsCrossed,
    slug: "restaurant-websites",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages for campaigns and businesses.",
    icon: Rocket,
    slug: "landing-pages",
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern digital experiences.",
    icon: RefreshCw,
    slug: "website-redesign",
  },
  {
    title: "Custom Web Applications",
    description:
      "Custom web solutions built around specific business requirements.",
    icon: Code2,
    slug: "custom-web-applications",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, improvements and technical support.",
    icon: Wrench,
    slug: "website-maintenance",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and search engine performance.",
    icon: Search,
    slug: "seo-optimization",
  },
];
