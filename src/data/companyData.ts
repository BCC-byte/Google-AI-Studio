export interface CompanyOverview {
  legalName: string;
  tradingName: string;
  registrationDate: string;
  directors: string[];
  decisionMaker: string;
  mission: string;
  vision: string;
  verticals: string[];
  distributedBrands: string[];
}

export const COMPANY_INFO: CompanyOverview = {
  legalName: 'IONS GLOBAL DISTRIBUTION SDN BHD',
  tradingName: 'Ions Global',
  registrationDate: '5th August 2026',
  directors: ['Lawrence', 'Steven'],
  decisionMaker: 'Lawrence',
  mission: 'Distribution of security and smart products around the world, expanding across the whole of Asia.',
  vision: 'Empowering system integrators, contractors, and architects with world-class security and smart living technologies backed by local support, superior design, and price competitiveness.',
  verticals: ['Smart Home Solutions', 'Commercial Solutions'],
  distributedBrands: ['Akubela', 'Akuvox', 'Audio Pro', 'Proscalar', 'Paradox'],
};

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  badge: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  services: string[];
}

export const OFFICES: OfficeLocation[] = [
  {
    id: 'kuala-lumpur-hq',
    city: 'Kuala Lumpur / Selangor',
    country: 'Malaysia',
    role: 'Corporate Headquarters & Central Logistics Hub',
    badge: 'Headquarters',
    address: 'J-7-5, Block J, Setiawalk, Persiaran Wawasan, Pusat Bandar Puchong, Selangor, Malaysia',
    phone: '+60 3 5882 1238',
    email: 'info@ionsglobal.com',
    hours: 'Monday – Friday: 09:00 – 18:00 (MYT)',
    services: [
      'ASEAN Central Warehousing & Stock Distribution',
      'System Architecture & Engineering Pre-Sales Support',
      'Certified Integrator Training & Testing Bench',
      'Warranty Replacement & Local RMA Center',
    ],
  },
  {
    id: 'ho-chi-minh-hub',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    role: 'Regional Hub & Indochina Commercial Office',
    badge: 'Regional Hub',
    address: '266/8, To Hien Thanh Street, Hoa Hung Ward, Ho Chi Minh City, Vietnam',
    phone: '+84 28 3862 8899',
    email: 'vietnam@ionsglobal.com',
    hours: 'Monday – Friday: 08:30 – 17:30 (ICT)',
    services: [
      'Indochina Project Consulting & Specification Review',
      'Local Inventory & Priority Dispatch for Vietnam & Indochina',
      'Integrator Technical Support & Product Demonstrations',
      'Bilingual Vietnamese & English Technical Support Desk',
    ],
  },
];

export const VALUE_PILLARS = [
  {
    id: 'price-competitive',
    title: 'Price-Competitive',
    headline: 'Direct factory distribution without multi-tier broker inflation.',
    description:
      'We work directly with manufacturer design labs and production lines. Integrators, contractors, and developers receive aggressive commercial pricing structures that protect project margins while delivering brand-name reliability.',
    metric: 'Zero Middleman Markup',
    detail: 'Direct manufacturer agreements ensure transparent pricing and volume tiers for every tender.',
  },
  {
    id: 'better-product-design',
    title: 'Better Product Design',
    headline: 'Architecturally refined hardware that elevates modern spaces.',
    description:
      'Too much automation hardware looks like industrial plastic. We deliberately distribute brands like Akubela and Audio Pro that prioritize clean lines, architectural flush-mount finishes, tactile dials, and noble materials like anodized aluminium and glass.',
    metric: 'Architect-Approved Aesthetics',
    detail: 'Hardware selected to satisfy demanding interior designers, luxury homeowners, and Grade-A developers.',
  },
  {
    id: 'real-support',
    title: 'Real Support',
    headline: 'In-market engineers, local spare parts, and fast turnaround.',
    description:
      'Distribution is only as valuable as the people backing it. Our teams in Kuala Lumpur and Ho Chi Minh City provide hands-on wiring diagrams, firmware verification, pre-sales tender reviews, and local RMA replacement stock without weeks of overseas delay.',
    metric: '48-Hour Local RMA',
    detail: 'Dedicated bench testing and regional buffer inventory guarantee real business continuity.',
  },
];
