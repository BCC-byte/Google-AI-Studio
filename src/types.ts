export type SolutionCategory = 'smart-home' | 'commercial' | 'security' | 'connectivity';

export type SimulationEnvironment = 'living-room' | 'security' | 'connectivity';

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: SolutionCategory;
  iconName: string;
  features: string[];
  metrics: { label: string; value: string };
  badge?: string;
  imageUrl: string;
  protocol?: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: 'Protocol' | 'Automation' | 'Audio/Visual' | 'Security' | 'Energy';
  description: string;
  certifications: string[];
  compatibility: string;
  origin: string;
  featuredProducts: string[];
}

export interface RegionalHub {
  id: string;
  city: string;
  country: string;
  tag: string;
  address: string;
  phone: string;
  email: string;
  status: 'Flagship Experience Center' | 'Regional Engineering Office' | 'Partner Showroom';
  activeProjects: number;
  coordinates: { lat: number; lng: number };
}

export interface RfqFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType: 'Luxury Residential' | 'Commercial Office' | 'Hospitality / Hotel' | 'Multi-tenant Development' | 'System Integrator';
  region: 'Kuala Lumpur / Klang Valley' | 'Penang' | 'Johor Bahru' | 'Singapore' | 'Other ASEAN';
  estimatedSquareFeet: string;
  timeline: 'Immediate (< 1 month)' | '1 - 3 months' | '3 - 6 months' | 'Planning stage';
  solutionsNeeded: string[];
  notes: string;
}
