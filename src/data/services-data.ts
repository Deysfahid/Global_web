export interface ServiceData {
  number: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  relatedProjectSlugs: string[];
}

export const services: ServiceData[] = [
  {
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    slug: "website-development",
    description: "Business websites designed around your brand, goals and customers.",
    longDescription: "A professional website is the foundation of your digital presence. We design and build business websites that clearly communicate what you do, build trust with visitors, and turn them into customers. From corporate sites to local business pages, every website is tailored to your brand, your industry, and your audience.",
    features: [
      "Custom design tailored to your brand",
      "Mobile responsive across all devices",
      "SEO-optimized structure and content",
      "Contact forms and lead capture",
      "Fast loading and performance tuned",
      "Analytics and tracking integration",
    ],
    icon: "Globe",
    relatedProjectSlugs: ["medcare"],
  },
  {
    number: "02",
    title: "E-COMMERCE",
    slug: "ecommerce",
    description: "Online stores designed to showcase products and make purchasing simple.",
    longDescription: "We build online stores that turn visitors into buyers. From product catalogs and shopping carts to checkout flows and payment integration, every e-commerce site we create is designed to be intuitive, fast, and conversion-focused. Whether you sell ten products or ten thousand, your store will look professional and work flawlessly.",
    features: [
      "Product catalog with categories and filters",
      "Shopping cart and secure checkout",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking and notifications",
      "Mobile-optimized shopping experience",
    ],
    icon: "ShoppingBag",
    relatedProjectSlugs: ["freshmart"],
  },
  {
    number: "03",
    title: "DIGITAL MARKETING",
    slug: "digital-marketing",
    description: "Digital marketing strategies to help businesses reach and attract more customers.",
    longDescription: "Visibility is everything. We create and execute digital marketing strategies that put your business in front of the right people at the right time. From paid campaigns to content strategy and email marketing, we help businesses grow their online reach and convert attention into action.",
    features: [
      "Campaign strategy and planning",
      "Google Ads and paid advertising",
      "Content marketing and blogging",
      "Email marketing campaigns",
      "Analytics and performance reporting",
      "Conversion rate optimization",
    ],
    icon: "Megaphone",
    relatedProjectSlugs: ["skyline-realty"],
  },
  {
    number: "04",
    title: "SEO",
    slug: "seo",
    description: "Search optimization designed to improve visibility and organic growth.",
    longDescription: "When people search for businesses like yours, you need to show up. Our SEO services are designed to improve your search engine rankings, drive organic traffic, and build long-term visibility. We focus on what actually works — technical optimization, quality content, and a strategy that grows with your business.",
    features: [
      "Technical SEO audit and fixes",
      "Keyword research and strategy",
      "On-page and off-page optimization",
      "Local SEO for local businesses",
      "Performance tracking and reporting",
      "Content optimization",
    ],
    icon: "Search",
    relatedProjectSlugs: ["medcare", "skyline-realty"],
  },
  {
    number: "05",
    title: "SOCIAL MEDIA MARKETING",
    slug: "social-media-marketing",
    description: "Content and social strategies that help businesses build an audience and stay visible.",
    longDescription: "Social media is where your customers spend their time. We help businesses build a presence, create engaging content, and grow an audience on the platforms that matter. From strategy and content calendars to community management, we make social media work for your business.",
    features: [
      "Social media strategy and planning",
      "Content creation and scheduling",
      "Community management",
      "Paid social advertising",
      "Analytics and growth tracking",
      "Brand voice development",
    ],
    icon: "Share2",
    relatedProjectSlugs: ["skyline-realty"],
  },
  {
    number: "06",
    title: "TAX & GST",
    slug: "tax-gst",
    description: "Tax filing, GST and related compliance services for businesses.",
    longDescription: "Staying compliant shouldn't slow your business down. We handle tax filing, GST registration and returns, and related compliance so you can focus on what you do best. Our team ensures your filings are accurate, on time, and hassle-free.",
    features: [
      "GST registration and filing",
      "Income tax return filing",
      "Tax planning and advisory",
      "TDS compliance",
      "GST reconciliation",
      "Quarterly and annual filings",
    ],
    icon: "Receipt",
    relatedProjectSlugs: [],
  },
  {
    number: "07",
    title: "ACCOUNTING & BUSINESS SERVICES",
    slug: "accounting-business-services",
    description: "Practical accounting and business support to help businesses operate smoothly.",
    longDescription: "Good accounting is the backbone of a healthy business. We provide practical bookkeeping, financial reporting, and business advisory services that help you understand your numbers and make better decisions. From day-to-day bookkeeping to financial planning, we keep your business running smoothly.",
    features: [
      "Bookkeeping and accounting",
      "Financial statements and reporting",
      "Payroll management",
      "Business advisory",
      "Cash flow management",
      "Compliance and audit support",
    ],
    icon: "Calculator",
    relatedProjectSlugs: [],
  },
  {
    number: "08",
    title: "BUSINESS REGISTRATION",
    slug: "business-registration",
    description: "Support for businesses getting started and setting up the right foundations.",
    longDescription: "Starting a business means getting the foundations right. We help with company registration, licensing, and the paperwork that gets your business legally set up and ready to operate. From sole proprietorships to private limited companies, we guide you through the process.",
    features: [
      "Company registration",
      "Sole proprietorship and partnership setup",
      "MSME / Udyam registration",
      "Trade license and permits",
      "FSSAI and other industry licenses",
      "Trademark registration support",
    ],
    icon: "Building2",
    relatedProjectSlugs: [],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
