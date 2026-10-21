import { SolutionItem, BrandPartner, RegionalHub } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'smart-living',
    title: 'Adaptive Smart Living',
    tagline: 'Ambient environments tuned to human circadian rhythms',
    description:
      'Harmonize illumination, acoustic zoning, and microclimate automation. Every room gracefully recognizes occupant preferences through discreet presence sensing without intrusive cameras.',
    category: 'smart-home',
    iconName: 'home',
    features: [
      'Tunable White & Circadian Lighting (1800K - 6500K)',
      'Acoustic Multi-Room Lossless Audio Distribution',
      'Whisper-Quiet Motorized Architectural Shading',
      'Micro-climate Humidity & HEPA Air Exchange Integration',
    ],
    metrics: { label: 'Lighting Efficiency', value: '+42%' },
    badge: 'Flagship Living',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'security-perimeter',
    title: 'Zero-Trust Perimeter & Security',
    tagline: 'Military-grade encryption for physical and digital sanctuaries',
    description:
      'Next-generation biometric access control, localized neural video analytics, and tamper-proof multi-factor entry. Local processing ensures zero video feeds ever leave your private gateway.',
    category: 'security',
    iconName: 'shield',
    features: [
      '3D Facial & Palm Biometric Door Locks',
      'Local AI Edge Detection (Vehicle, Pet, Human, Package)',
      'Sub-100ms Intrusion Perimeter Warning & Strobe Deterrence',
      'Hardware-Isolated Vault for Secure Access Codes',
    ],
    metrics: { label: 'Threat Response', value: '<100ms' },
    badge: 'Certified Safe',
    imageUrl:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mesh-connectivity',
    title: 'Enterprise-Grade Wi-Fi 7 Mesh',
    tagline: 'Gigabit wireless backbones with self-healing latency buffers',
    description:
      'Purpose-built networks engineered for 200+ simultaneous smart devices. Features dedicated IoT VLAN isolation, enterprise roaming protocols, and automated 5G cellular failover.',
    category: 'connectivity',
    iconName: 'wifi',
    features: [
      'Wi-Fi 7 Multi-Link Operation (MLO) 320MHz Channels',
      'Dual-WAN Fiber with Instantaneous 5G Failover',
      'Isolated IoT Quarantine Virtual LAN (VLAN)',
      'Zero-Dead-Zone Beamforming for Multi-Story Estates',
    ],
    metrics: { label: 'Throughput Peak', value: '9.6 Gbps' },
    badge: 'Ultra-Low Latency',
    imageUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'commercial-automation',
    title: 'Smart Building & Commercial Hubs',
    tagline: 'Integrated BMS, energy shaving, and multi-tenant access',
    description:
      'Scalable management platforms designed for Grade-A towers, co-working facilities, and luxury hospitality. Centralize HVAC chiller optimization, elevator dispatch, and ESG carbon reporting.',
    category: 'commercial',
    iconName: 'building',
    features: [
      'BACnet & KNX Native Building Management System (BMS)',
      'Dynamic Peak-Load Energy Shaving Algorithms',
      'Mobile NFC & BLE Digital Employee Badges',
      'Real-Time Space Utilization & Desk Heatmapping',
    ],
    metrics: { label: 'Energy Cost Savings', value: '-31.8%' },
    badge: 'ESG Compliant',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: 'matter',
    name: 'Matter Protocol',
    category: 'Protocol',
    description:
      'The unified IP-based smart home standard backed by Apple, Google, Amazon, and CSA. Delivers local-first interoperability without cloud dependence.',
    certifications: ['Matter 1.3 Certified', 'Thread Mesh Compatible', 'End-to-End Encrypted'],
    compatibility: 'Universal across iOS, Android, and Linux Gateways',
    origin: 'Global Standards Alliance',
    featuredProducts: ['iONS Bridge M1', 'Matter Wall Switches', 'Matter Occupancy Sensor'],
  },
  {
    id: 'knx',
    name: 'KNX Association',
    category: 'Automation',
    description:
      'The worldwide standard for commercial and high-end residential bus automation with over 30 years of guaranteed backward compatibility.',
    certifications: ['ISO/IEC 14543-3', 'ANSI/ASHRAE 135', 'EN 50090'],
    compatibility: 'Direct DIN-rail hardware bus integration',
    origin: 'Brussels, Belgium',
    featuredProducts: ['KNX IP Router', 'DALI-2 Lighting Actuator', 'Universal Fan Coil Controller'],
  },
  {
    id: 'crestron',
    name: 'Crestron Electronics',
    category: 'Audio/Visual',
    description:
      'Prestigious enterprise automation and commercial boardroom control engineered for mission-critical reliability and ultra-luxury estates.',
    certifications: ['Crestron Connected Partner', 'DM NVX 4K60 4:4:4 AV-over-IP'],
    compatibility: 'Native iONS Crestron API Driver',
    origin: 'Rockleigh, New Jersey, USA',
    featuredProducts: ['Horizon Keypads', 'NVX Streaming Endpoints', 'TSS Touchscreens'],
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    category: 'Energy',
    description:
      'World leader in energy management and automation. Powers iONS intelligent circuit breakers and micro-grid energy storage balancing.',
    certifications: ['EcoStruxure Certified', 'IEC 61439', 'UL Listed'],
    compatibility: 'Modbus TCP & Smart Panel Direct Connect',
    origin: 'Rueil-Malmaison, France',
    featuredProducts: ['Resi9 Smart Breakers', 'SpaceLogic Automation Server', 'EVlink Charging Hub'],
  },
  {
    id: 'control4',
    name: 'Control4 / Snap One',
    category: 'Automation',
    description:
      'Sophisticated single-interface operating system for luxury homes, yachts, and boutique hospitality suites.',
    certifications: ['OS 3.4 Certified', 'Chime Video Intercom Integration'],
    compatibility: 'Bi-directional SDDP discovery protocol',
    origin: 'Salt Lake City, Utah, USA',
    featuredProducts: ['Core 5 Controller', 'Halo Touch Remote', 'Triad High-Res Multi-Zone Matrix'],
  },
  {
    id: 'somfy',
    name: 'Somfy Architectural',
    category: 'Automation',
    description:
      'Precision motorized treatments for architectural drapery, Venetian blinds, exterior pergolas, and solar tracking facades.',
    certifications: ['Zigbee 3.0 Certified', 'RTS Protocol', 'Ultra-Quiet <38dB'],
    compatibility: 'Dry contact & Zigbee Mesh Integration',
    origin: 'Cluses, France',
    featuredProducts: ['Glydea Ultra Drapery Motor', 'Sonesse Ultra 50', 'TaHoma Pro Gateway'],
  },
];

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'kl-flagship',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    tag: 'Southeast Asia Flagship Experience Center',
    address: 'Level 48, The Exchange 106, Tun Razak Exchange (TRX), 55188 Kuala Lumpur, Malaysia',
    phone: '+60 3 2188 9200',
    email: 'kl.experience@ionsglobal.com',
    status: 'Flagship Experience Center',
    activeProjects: 412,
    coordinates: { lat: 3.1428, lng: 101.7196 },
  },
  {
    id: 'sg-regional',
    city: 'Singapore',
    country: 'Singapore',
    tag: 'ASEAN Engineering & Maritime Solutions',
    address: 'Level 24, Marina One East Tower, 7 Straits View, Singapore 018936',
    phone: '+65 6820 4400',
    email: 'singapore@ionsglobal.com',
    status: 'Regional Engineering Office',
    activeProjects: 285,
    coordinates: { lat: 1.2789, lng: 103.8536 },
  },
  {
    id: 'bkk-center',
    city: 'Bangkok',
    country: 'Thailand',
    tag: 'Indochina Commercial & Hospitality Hub',
    address: 'Level 31, One Bangkok Tower 4, Wireless Road, Lumphini, Bangkok 10330',
    phone: '+66 2 088 1900',
    email: 'bangkok@ionsglobal.com',
    status: 'Partner Showroom',
    activeProjects: 198,
    coordinates: { lat: 13.7278, lng: 100.548 },
  },
  {
    id: 'jkt-hub',
    city: 'Jakarta',
    country: 'Indonesia',
    tag: 'Metropolitan Infrastructure & Smart City Center',
    address: 'Level 19, Pacific Century Place, SCBD Lot 10, Jakarta Selatan 12190',
    phone: '+62 21 5088 7700',
    email: 'jakarta@ionsglobal.com',
    status: 'Regional Engineering Office',
    activeProjects: 164,
    coordinates: { lat: -6.2256, lng: 106.8087 },
  },
];

export const SUSTAINABILITY_STATS = {
  kwhSavedLive: 4892410,
  carbonOffsetTons: 3424,
  activeManagedSpaces: 12840,
  averageEnergyReduction: 34.2,
  uptimeGuarantee: 99.994,
};
