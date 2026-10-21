export interface SolutionCategoryData {
  id: string;
  name: string;
  shortTitle: string;
  tagline: string;
  heroHeadline: string;
  description: string;
  architecturalRole: string;
  subcategories: string[];
  capabilities: string[];
  problemsSolved: string[];
  howItWorks: string;
  residentialApplications: string[];
  commercialApplications: string[];
  partnerBrands: string[];
  featuredProductIds: string[];
  relatedProjectIds: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  brand: 'Akubela' | 'Akuvox' | 'Audio Pro' | 'Paradox' | 'Proscalar';
  category: 'Security' | 'Access & Intercom' | 'Smart Home' | 'Lighting & Automation' | 'Audio' | 'Climate & HVAC' | 'Energy' | 'Controllers & Gateways';
  oneLiner: string;
  description: string;
  application: 'Residential' | 'Commercial' | 'Residential & Commercial';
  connectivity: string[];
  compatibility: string[];
  keyBenefits: string[];
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  datasheetAvailable: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  country: 'Malaysia' | 'Vietnam';
  type: 'Residential' | 'Commercial' | 'Hospitality' | 'Retail' | 'Education';
  categoryTag: string;
  overview: string;
  challenge: string;
  solution: string;
  units: string;
  scale: string;
  systemsIntegrated: string[];
  brandsUsed: string[];
  results: string[];
}

export interface SmartSceneScenario {
  id: string;
  name: string;
  timeframe: string;
  tagline: string;
  steps: {
    number: string;
    domain: 'ACCESS' | 'SECURITY' | 'LIGHTING' | 'CLIMATE' | 'AUDIO' | 'ENERGY';
    title: string;
    description: string;
  }[];
}

export interface EnvironmentType {
  id: string;
  name: string;
  headline: string;
  description: string;
  primarySystems: string[];
  keyOutcome: string;
  span: 'normal' | 'wide' | 'tall';
}

// -------------------------------------------------------------
// SOLUTIONS DATA
// -------------------------------------------------------------
export const SOLUTIONS_CATEGORIES: SolutionCategoryData[] = [
  {
    id: 'security',
    name: 'Security',
    shortTitle: 'Security',
    tagline: 'Intelligent physical and environmental perimeter defence',
    heroHeadline: 'Protect people, property, and spaces with intelligent security.',
    description: 'Centralized hybrid intrusion detection, dual-optic outdoor perimeter curtains, and proactive life-safety sensing engineered with zero false alarms and cellular failover.',
    architecturalRole: 'Concealed perimeter barriers and certified alarm backbones safeguard building envelopes without disrupting interior sightlines.',
    subcategories: [
      'Intrusion Detection',
      'Alarm Systems',
      'Sensors',
      'Monitoring',
      'Surveillance'
    ],
    capabilities: [
      'Dual-optic pet-immune curtain discrimination',
      'Sub-100ms multi-partition bus arming and reporting',
      'Autonomous flood, gas, and smoke emergency valve shutoff',
      'Continuous 4G LTE encrypted reporting with zero IP dependence'
    ],
    problemsSolved: [
      'Eliminates nuisance false alarms caused by tropical weather and pets',
      'Prevents blind spots along glass curtain walls and patio perimeters',
      'Mitigates catastrophic water leaks and electrical fire hazards automatically'
    ],
    howItWorks: 'High-density hardwired and encrypted wireless sensors link into centralized Paradox EVO bus processors. Upon perimeter deviation, local sirens sound, strobe deterrence triggers, and push notifications dispatch simultaneously over cellular and IP channels.',
    residentialApplications: ['Private luxury estates', 'Gated villas', 'Multi-level penthouses'],
    commercialApplications: ['Corporate headquarters', 'Data hubs', 'Banking branches', 'Luxury retail boutiques'],
    partnerBrands: ['Paradox', 'Akubela'],
    featuredProductIds: ['paradox-evo192', 'paradox-nv780mx', 'paradox-tm70'],
    relatedProjectIds: ['damansara-heights-estate', 'kl-financial-tower']
  },
  {
    id: 'access-intercom',
    name: 'Access & Intercom',
    shortTitle: 'Access',
    tagline: 'Smarter entry, intercom, and visitor experiences',
    heroHeadline: 'Smarter entry, intercom and visitor experiences.',
    description: 'AI-powered facial recognition stations, marine-grade outdoor door phones, 2-wire legacy building retrofits, and cloud-native mobile credentials that turn thresholds into seamless touchpoints.',
    architecturalRole: 'Refined architectural stations integrate cleanly into entry portals, stone pilasters, and speed gates for frictionless authorized transit.',
    subcategories: [
      'Video Intercom',
      'Door Access',
      'Smart Locks',
      'Visitor Management',
      'Mobile Credentials'
    ],
    capabilities: [
      'Sub-0.2s anti-spoofing visible-light biometric recognition',
      '2-Wire IP modernization over existing cabling up to 300 meters',
      'Dynamic QR codes and time-bounded visitor mobile passes',
      'Direct lift dispatch synchronization with floor-level restriction'
    ],
    problemsSolved: [
      'Removes expensive cable replacement when upgrading legacy intercoms',
      'Eliminates lost physical key cards and unauthorized credential sharing',
      'Delivers effortless visitor management for couriers and guests'
    ],
    howItWorks: 'Akuvox SIP terminals and Proscalar controllers communicate over IP to grant instant access via biometric face scans, Bluetooth Low Energy, or dynamic QR passes while synchronizing elevator cars directly to destination floors.',
    residentialApplications: ['Multi-family condominiums', 'Gated communities', 'Private residences'],
    commercialApplications: ['Commercial office towers', 'Co-working spaces', 'Hospitals and assisted care'],
    partnerBrands: ['Akuvox', 'Proscalar', 'Akubela'],
    featuredProductIds: ['akuvox-x915', 'akuvox-r20a-2', 'proscalar-psr-1'],
    relatedProjectIds: ['mont-kiara-residences', 'saigon-marina-tower']
  },
  {
    id: 'lighting-automation',
    name: 'Lighting & Automation',
    shortTitle: 'Lighting & Automation',
    tagline: 'Lighting and environments that respond automatically',
    heroHeadline: 'Lighting and environments that respond automatically.',
    description: 'Unified whole-home and building automation blending wired KNX-TP stability, DALI-2 tunable white illumination, whisper-quiet motorized shading, and architectural in-wall touch centers.',
    architecturalRole: 'Eliminates wall acne by replacing clusters of plastic toggle switches with single flush-mount glass and metal command surfaces.',
    subcategories: [
      'Smart Lighting',
      'Smart Switches',
      'Scene Control',
      'Curtain & Blind Control',
      'Building Automation'
    ],
    capabilities: [
      'Native KNX bus architecture with dual-channel DALI-2 tunable white',
      'Flush-mount Red Dot-awarded HyPanel multi-touch interfaces',
      'Architectural 24GHz mmWave micro-presence radar detection',
      'Ultra-quiet motorized curtain and louver motorization (<35dB)'
    ],
    problemsSolved: [
      'Stops wall clutter from disjointed light switches, AC remotes, and dimmers',
      'Automates natural daylight harvesting to eliminate afternoon glare',
      'Coordinates hundreds of lighting channels with absolute wired reliability'
    ],
    howItWorks: 'Sensors detect human presence and ambient lux levels, prompting the KNX/Zigbee bus to orchestrate architectural fixtures, DALI color temperatures, and motorized shades without manual interaction.',
    residentialApplications: ['Luxury penthouses', 'Architectural villas', 'Smart apartments'],
    commercialApplications: ['Executive boardrooms', 'Hotel guestrooms (GRMS)', 'Galleries and showrooms'],
    partnerBrands: ['Akubela', 'Proscalar'],
    featuredProductIds: ['akubela-hypanel-ultra', 'akubela-aura-knx', 'akubela-dali-gateway'],
    relatedProjectIds: ['damansara-heights-estate', 'da-nang-boutique-resort']
  },
  {
    id: 'audio',
    name: 'Audio',
    shortTitle: 'Audio',
    tagline: 'Connected sound throughout the spaces that matter',
    heroHeadline: 'Connected sound throughout the spaces that matter.',
    description: 'Scandinavian acoustic fidelity and commercial 1.9 GHz lighting-track audio that clips directly into standard 3-phase lighting rails with zero cable trenching, no store closures, and up to 6 distinct volume zones.',
    architecturalRole: 'Mounts invisibly onto existing overhead lighting tracks, delivering studio-grade acoustic dispersion without visible conduit or ceiling penetrations.',
    subcategories: [
      'Multi-Room Audio',
      'Residential Audio',
      'Commercial Audio'
    ],
    capabilities: [
      'Direct clip mounting onto 3-phase lighting tracks in under 2 hours',
      'Interference-free 1.9 GHz dedicated band with double the range of Wi-Fi',
      'Tactile 6-zone master volume regulation from a single master dial',
      'Audiophile Scandinavian residential multi-room with AirPlay 2 and HDMI ARC'
    ],
    problemsSolved: [
      'Eliminates destructive ceiling cutting and expensive audio wiring in retail fitouts',
      'Prevents audio dropouts caused by dense customer Wi-Fi traffic and POS networks',
      'Allows instantaneous speaker repositioning whenever retail layouts shift'
    ],
    howItWorks: 'The Audio Pro TX-1 transmitter broadcasts uncompressed lossless audio over a dedicated 1.9 GHz RF frequency to track-mounted SP-1/SP-3 speakers, drawing operating power straight from existing overhead lighting tracks.',
    residentialApplications: ['Open-concept living rooms', 'Private listening lounges', 'Terrace dining'],
    commercialApplications: ['Flagship retail boutiques', 'Culinary restaurants', 'Hotels and lounges', 'Corporate lobbies'],
    partnerBrands: ['Audio Pro'],
    featuredProductIds: ['audiopro-sp3', 'audiopro-tx1', 'audiopro-a38'],
    relatedProjectIds: ['the-exchange-trx-retail', 'da-nang-boutique-resort']
  },
  {
    id: 'climate-hvac',
    name: 'Climate & HVAC',
    shortTitle: 'Climate & HVAC',
    tagline: 'Intelligent comfort and environmental control',
    heroHeadline: 'Intelligent comfort and environmental control.',
    description: 'Multi-brand VRV/VRF central air conditioning gateways, capacitive fan-coil thermostats, and continuous indoor air quality telemetry that balance human comfort with strict energy conservation.',
    architecturalRole: 'Discreet temperature sensors and slim wall consoles seamlessly govern central ducted HVAC without conspicuous wall thermostats.',
    subcategories: [
      'Temperature Control',
      'HVAC Integration',
      'Environmental Monitoring'
    ],
    capabilities: [
      'Direct protocol integration with Daikin, Mitsubishi, York, Toshiba & Hitachi',
      'Multi-parameter air quality telemetry (PM2.5, CO2, TVOC, humidity)',
      'Automated setback scheduling coordinated with room occupancy',
      'Precision thermal staging for underfloor heating and central chilled water'
    ],
    problemsSolved: [
      'Stops AC units running in empty unoccupied rooms and guest suites',
      'Bridges proprietary commercial HVAC protocols into unified smart home interfaces',
      'Actively monitors indoor humidity to prevent tropical mold and stale air'
    ],
    howItWorks: 'Central AC gateways translate native manufacturer bus commands into KNX and IP signals, allowing HyPanels and occupancy sensors to regulate fan speeds, target temperatures, and fresh-air intake autonomously.',
    residentialApplications: ['Tropical estates', 'High-rise condominiums', 'Serviced apartments'],
    commercialApplications: ['Commercial office floors', 'Boutique hotels', 'Co-working environments'],
    partnerBrands: ['Akubela', 'Proscalar'],
    featuredProductIds: ['akubela-central-ac-gw', 'akubela-iaq-sensor'],
    relatedProjectIds: ['mont-kiara-residences', 'saigon-marina-tower']
  },
  {
    id: 'energy-management',
    name: 'Energy Management',
    shortTitle: 'Energy',
    tagline: 'Understand and optimize how your space consumes energy',
    heroHeadline: 'Understand and optimize how your space consumes energy.',
    description: 'Sub-metered circuit diagnostics, automated peak-demand load shedding, and real-time dashboard visibility that turn invisible energy consumption into actionable operational savings.',
    architecturalRole: 'DIN-rail modules mount inside central distribution boards to provide deep electrical intelligence without altering finished interior spaces.',
    subcategories: [
      'Energy Monitoring',
      'Smart Metering',
      'Energy Optimization'
    ],
    capabilities: [
      'Sub-second real-time branch circuit current and voltage telemetry',
      'Automated peak-shaving load prioritization during high-tariff windows',
      'ESG carbon reporting compliance data export for building certifications',
      'Integration with rooftop solar arrays and battery storage systems'
    ],
    problemsSolved: [
      'Reveals power-hungry phantom loads and failing mechanical equipment early',
      'Prevents commercial utility peak-demand tariff penalties',
      'Empowers property managers with verifiable energy reduction data'
    ],
    howItWorks: 'Current transducers and smart DIN-rail meters record electrical draws across lighting, HVAC, and power circuits, streaming telemetry to facility dashboards that trigger automatic shedding of non-critical loads during peak hours.',
    residentialApplications: ['Zero-energy homes', 'Solar-equipped villas', 'Private multi-story residences'],
    commercialApplications: ['Commercial office buildings', 'Logistics facilities', 'Retail chains'],
    partnerBrands: ['Akubela', 'Proscalar'],
    featuredProductIds: ['proscalar-psr-m16e', 'akubela-dali-gateway'],
    relatedProjectIds: ['kl-financial-tower', 'saigon-marina-tower']
  }
];

// -------------------------------------------------------------
// PRODUCTS REPOSITORY
// -------------------------------------------------------------
export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'akubela-hypanel-ultra',
    name: 'Akubela HyPanel Ultra (PH81)',
    brand: 'Akubela',
    category: 'Controllers & Gateways',
    oneLiner: 'Red Dot 2025 Winner: 10.36" 2K UHD architectural in-wall command center with metal chassis and 6-gang relays.',
    description: 'The HyPanel Ultra PH81 redefines spatial orchestration. Encased in an anodized aluminium unibody, it houses a 2K ultra-high-definition touchscreen, native KNX-TP interface, 6-gang physical relays, 8 digital inputs, and dual microphone arrays powered by the Bela multi-LLM localized edge assistant.',
    application: 'Residential & Commercial',
    connectivity: ['KNX-TP', 'Zigbee 3.0', 'Wi-Fi 6', 'Ethernet PoE', 'Bluetooth 5.4', 'RS485'],
    compatibility: ['BelaHome', 'KNX Association', 'DALI-2', 'Akuvox SmartPlus', 'Apple HomeKit via Matter'],
    keyBenefits: [
      'Unifies lighting, intercom, climate, audio, and security into a single flush-mount surface',
      'Operates 100% locally at the edge even during broadband service dropouts',
      'Certified Red Dot 2025 winner for industrial design and materials'
    ],
    keyFeatures: [
      '10.36" 2K UHD IPS display (2000 x 1200) with anti-fingerprint AGC glass',
      'Built-in KNX-TP terminal eliminating separate IP gateway hardware',
      '6 onboard relays (10A) and 8 digital dry-contact alarm inputs',
      'Dual MEMS microphones with localized acoustic echo cancellation'
    ],
    specs: [
      { label: 'Display', value: '10.36-inch IPS LCD, 2000 × 1200 px' },
      { label: 'Chassis Material', value: 'Sandblasted Anodized Aviation Aluminium' },
      { label: 'Relay Channels', value: '6-Gang Built-in (Max 10A per channel)' },
      { label: 'Digital Inputs', value: '8 Dry Contact DI' },
      { label: 'Power Supply', value: '100–240V AC or IEEE 802.3af PoE' },
      { label: 'Operating System', value: 'Android 12 with Local Edge AI Engine' }
    ],
    datasheetAvailable: true
  },
  {
    id: 'akuvox-x915',
    name: 'Akuvox X915 Android Door Phone',
    brand: 'Akuvox',
    category: 'Access & Intercom',
    oneLiner: 'Marine-grade 316 stainless steel flagship intercom with 8" display and sub-0.2s anti-spoof facial recognition.',
    description: 'Designed for prestigious residential towers and corporate headquarters, the Akuvox X915 unites dual Starlight HDR cameras, anti-spoofing biometrics, and marine-grade 316 stainless steel to deliver an unyielding yet hospitable building threshold.',
    application: 'Residential & Commercial',
    connectivity: ['Ethernet PoE+', 'SIP 2.0', 'Wiegand', 'RS485', 'Bluetooth', 'NFC'],
    compatibility: ['Akuvox SmartPlus', 'Milestone VMS', 'ONVIF Profile S', 'Salto Smart Access'],
    keyBenefits: [
      'Sub-0.2 second facial recognition with liveness verification',
      'Resists harsh coastal climates with marine-grade 316 stainless steel',
      'Seamless multi-tenant directory with integrated elevator summoning'
    ],
    keyFeatures: [
      '8" full-color industrial touchscreen with high-brightness sunlight legibility',
      'Dual HDR cameras with infrared illumination and wide 120° field of view',
      'Supports 15+ credentials: Face, BLE, NFC, QR Code, PIN, RFID',
      'IP65 water resistance and IK10 vandal impact certification'
    ],
    specs: [
      { label: 'Front Panel', value: '316 Marine-Grade Stainless Steel' },
      { label: 'Camera', value: 'Dual 2MP with Starlight & WDR, 120° FOV' },
      { label: 'Screen', value: '8" IPS Touchscreen (1280 × 800)' },
      { label: 'Ingress / Impact', value: 'IP65 Weatherproof / IK10 Impact' },
      { label: 'Matching Speed', value: '<0.2 seconds per 99.9% accuracy' },
      { label: 'Power', value: 'PoE+ (IEEE 802.3at) or 12V DC' }
    ],
    datasheetAvailable: true
  },
  {
    id: 'audiopro-sp3',
    name: 'Audio Pro Business SP-3 Track Speaker',
    brand: 'Audio Pro',
    category: 'Audio',
    oneLiner: 'Wireless 2-way loudspeaker clicking directly into standard 3-phase commercial lighting rails.',
    description: 'The SP-3 delivers Scandinavian hi-fi clarity inside luxury retail boutiques and hospitality dining rooms. By snapping directly into standard lighting tracks for mounting and power, it eliminates ceiling reconstruction and operates across a dedicated 1.9 GHz interference-free wireless frequency.',
    application: 'Commercial',
    connectivity: ['1.9 GHz DECT Wireless', '3-Phase Track Adapter', 'Balanced Line-Out'],
    compatibility: ['Audio Pro TX-1', 'VOL-1 Controller', 'Global Trac', 'EUTRAC', 'Zumtobel', 'Erco'],
    keyBenefits: [
      'Installs in under 2 hours without drilling conduits or pulling ceiling cables',
      'Zero Wi-Fi interference on dedicated 1.9 GHz industrial wireless band',
      'Reposition and re-aim speakers in seconds as retail floor merchandising shifts'
    ],
    keyFeatures: [
      '4.5" long-throw woofer paired with 0.75" silk dome tweeter',
      '2 × 25W Class-D DSP-optimized active amplification',
      'Universal mechanical adapter compatible with all leading 3-phase track rails',
      'Balanced line-output for daisy-chaining secondary speakers or subwoofers'
    ],
    specs: [
      { label: 'Frequency Range', value: '60 Hz – 22,000 Hz' },
      { label: 'Amplifier', value: '2 × 25W Class-D Active with Custom DSP' },
      { label: 'Wireless Band', value: '1.9 GHz DECT (Zero Wi-Fi Co-Channel Traffic)' },
      { label: 'Track Standard', value: 'Universal 3-Phase Commercial Track Adapter' },
      { label: 'Range', value: 'Up to 100 meters unobstructed line-of-sight' },
      { label: 'Finishes', value: 'Matte Architectural Black & Silk White' }
    ],
    datasheetAvailable: true
  },
  {
    id: 'paradox-evo192',
    name: 'Paradox Digiplex EVO192 High Security Panel',
    brand: 'Paradox',
    category: 'Security',
    oneLiner: '192-zone hybrid intrusion and access core with multi-partition isolation and cellular reporting.',
    description: 'The gold standard for mission-critical security. The Paradox EVO192 supports up to 192 hardwired or wireless zones across 8 independent partitions and 32 door access modules, providing continuous property defense with battery backup resilience.',
    application: 'Residential & Commercial',
    connectivity: ['Multibus Encrypted 4-Wire', 'IP150+ Ethernet', 'PCS265 4G LTE', 'RS485'],
    compatibility: ['Paradox BlueEye App', 'Babyware Software', 'Central Station CMS (Sur-Gard)'],
    keyBenefits: [
      'Scales seamlessly from sprawling private villas to multi-tenant commercial centers',
      'True hardware partition isolation prevents cross-zone false arming',
      'Autonomous cellular 4G failover ensures zero communication downtime'
    ],
    keyFeatures: [
      'Supports up to 192 zones and 8 independent security partitions',
      'Integrated physical access control for up to 32 doors and 999 users',
      'Onboard 4-wire combus supporting dialers, internet modules, and keypads',
      'EN 50131 Grade 3 certified security architecture'
    ],
    specs: [
      { label: 'Zone Capacity', value: '192 Zones (16 Onboard, expandable via Bus)' },
      { label: 'Partitions', value: '8 Independent Logical Partitions' },
      { label: 'User Codes', value: '999 Authenticated PIN / Cardholders' },
      { label: 'Event Memory', value: '2,048 Event Rolling Micro-Buffer' },
      { label: 'Backup Power', value: 'Auxiliary 12V 7Ah Lead-Acid with Auto-Float' },
      { label: 'Certification', value: 'EN 50131 Grade 3, Class II' }
    ],
    datasheetAvailable: true
  },
  {
    id: 'proscalar-psr-1',
    name: 'Proscalar PSR-1 Modular Door Controller',
    brand: 'Proscalar',
    category: 'Access & Intercom',
    oneLiner: 'Cloud-native PoE access controller with dual-core crypto processor and 16-door expansion.',
    description: 'Developed for agile commercial facilities, the PSR-1 eliminates bulky on-premise servers. Operating over standard low-voltage PoE, it manages up to 16 doors via expansion modules while synchronizing with the Proscalar Go cloud dashboard and Co ID mobile credentials.',
    application: 'Commercial',
    connectivity: ['Ethernet PoE', 'OSDPv2 Secure Channel', 'Wiegand', 'RS-485', 'Bluetooth 5.0'],
    compatibility: ['Proscalar Go Cloud', 'Proscalar Central', 'Co ID App', 'Speed Gates & Turnstiles'],
    keyBenefits: [
      'Cloud-managed with zero on-premise server maintenance overhead',
      'AES-128 cryptographic buffer maintains door access during internet outages',
      'Direct mobile credential unlocks via Bluetooth Low Energy and NFC'
    ],
    keyFeatures: [
      'Dual-core processor with capacity for 200,000 local event records',
      'Native OSDPv2 Secure Channel encryption prevents reader tampering',
      'Modular DIN-rail footprint for clean server rack or electrical closet mounting',
      'Real-time elevator dispatch relay integration via PSR-R32E'
    ],
    specs: [
      { label: 'Processor', value: 'Dual-Core ARM Cortex with Hardware Crypto Engine' },
      { label: 'Door Capacity', value: '2 Doors native, expandable up to 16 doors' },
      { label: 'Cardholder Capacity', value: '50,000 Users / 200,000 Offline Records' },
      { label: 'Reader Protocols', value: 'OSDPv2 with Secure Channel & 26/34-bit Wiegand' },
      { label: 'Power Input', value: 'PoE+ (IEEE 802.3at) or 12V–24V DC' },
      { label: 'Mounting', value: 'Standard 35mm DIN-Rail' }
    ],
    datasheetAvailable: true
  },
  {
    id: 'akubela-aura-knx',
    name: 'Akubela Aura KNX Smart Switch',
    brand: 'Akubela',
    category: 'Lighting & Automation',
    oneLiner: 'Modular KNX smart switch with dynamic OLED digital labels and proximity wake-up.',
    description: 'Replacing ambiguous engraved switch plates, the Aura KNX features high-contrast dynamic digital labels that update automatically with active scenes. Its proximity sensor awakens subtle backlighting as your hand approaches.',
    application: 'Residential & Commercial',
    connectivity: ['KNX-TP Bus', 'RS485'],
    compatibility: ['KNX ETS Configured', 'Akubela HyPanels', 'DALI-2 Gateways'],
    keyBenefits: [
      'Customizable digital labels eliminate confusing blank pushbuttons',
      'Proximity sensor ensures discrete nighttime operation without glare',
      'Modular metal frames available in brushed champagne, graphite, and black'
    ],
    keyFeatures: [
      'Configurable 4, 6, or 8-key tactile switch layouts',
      'OLED digital displays showing temperature, lighting status, and scene names',
      'Integrated temperature sensor for distributed room HVAC regulation',
      'Zero-crossing switching protection engineered for LED driver inrush loads'
    ],
    specs: [
      { label: 'Bus System', value: 'KNX-TP (Twisted Pair) Bus Powered (21–30V DC)' },
      { label: 'Key Configuration', value: 'Modular 2, 4, 6, or 8 Button Layouts' },
      { label: 'Display Type', value: 'High-Contrast Micro-OLED with Dynamic Text' },
      { label: 'Proximity Sensing', value: '30–100 cm Microwave Presence Detection' },
      { label: 'Materials', value: 'Anodized Aluminium & Anti-Fingerprint AG Glass' },
      { label: 'Operating Temp', value: '-5°C to 45°C' }
    ],
    datasheetAvailable: true
  }
];

// -------------------------------------------------------------
// REAL-WORLD PROJECTS
// -------------------------------------------------------------
export const PROJECTS_LIST: ProjectCaseStudy[] = [
  {
    id: 'damansara-heights-estate',
    title: 'The Ridge Villa Estate',
    location: 'Damansara Heights, Kuala Lumpur',
    country: 'Malaysia',
    type: 'Residential',
    categoryTag: 'Integrated Smart Residence',
    overview: 'A 14,000 sq ft private hillside residence requiring unified lighting control, discreet acoustic distribution, automated climate staging, and perimeter defense across three multi-tiered levels.',
    challenge: 'The architecture featured extensive double-height glass facades and outdoor entertaining terraces, making conventional wired audio and surface-mount sensors visually disruptive.',
    solution: 'Engineered a unified hybrid infrastructure utilizing Akubela HyPanel Ultra touchscreens, KNX DALI-2 tunable lighting, Audio Pro wireless track audio over exterior patio rails, and Paradox curtain motion barriers.',
    units: '1 Private Multi-Tier Villa (14,000 sq ft)',
    scale: '14,000 sq ft across 3 levels',
    systemsIntegrated: ['KNX Automation', 'Tunable White DALI-2', 'Track Audio', 'Hybrid Security', 'VRV AC Integration'],
    brandsUsed: ['Akubela', 'Audio Pro', 'Paradox'],
    results: [
      'Eliminated 34 individual wall switches into 4 flush HyPanel hubs',
      'Completely wireless patio audio installation completed in 90 minutes',
      '38% reduction in air conditioning consumption via occupancy setbacks'
    ]
  },
  {
    id: 'the-exchange-trx-retail',
    title: 'TRX Flagship Concept Store',
    location: 'The Exchange TRX, Kuala Lumpur',
    country: 'Malaysia',
    type: 'Retail',
    categoryTag: 'Commercial Audio & Access',
    overview: 'A premier 4,500 sq ft luxury lifestyle boutique seeking studio-quality acoustic distribution that could be swiftly reconfigured whenever retail merchandising displays changed.',
    challenge: 'Strict mall fitout timelines prohibited ceiling cutting or floor trenching. Crowded shopping center 2.4/5 GHz Wi-Fi traffic routinely degraded conventional wireless audio.',
    solution: 'Deployed Audio Pro Business track-mounted SP-3 loudspeakers clipping directly into standard 3-phase lighting rails, driven by a dedicated 1.9 GHz DECT transmitter and Proscalar PoE door controllers for rear inventory security.',
    units: '1 Flagship Retail Venue (4,500 sq ft)',
    scale: '12 SP-3 Track Speakers across 4 Zones',
    systemsIntegrated: ['Track Wireless Audio', '6-Zone Volume Regulation', 'PoE Cloud Access'],
    brandsUsed: ['Audio Pro', 'Proscalar'],
    results: [
      'Audio system fully commissioned in 2.5 hours with zero store closure downtime',
      'Zero audio dropouts despite high footfall mall Wi-Fi congestion',
      'Immediate ability to reposition speakers within 30 seconds during visual re-merchandising'
    ]
  },
  {
    id: 'saigon-marina-tower',
    title: 'Saigon Waterfront Executive Tower',
    location: 'District 1, Ho Chi Minh City',
    country: 'Vietnam',
    type: 'Commercial',
    categoryTag: 'Connected Commercial Building',
    overview: 'A 28-story Grade-A commercial office tower seeking to replace fragmented mechanical card locks with contactless biometrics, elevator destination dispatch, and centralized cloud oversight.',
    challenge: 'Over 2,400 daily occupants required rapid morning lobby transit without bottlenecks, while maintaining strict floor-by-floor access separation.',
    solution: 'Implemented Akuvox sub-0.2s facial recognition speed gates at ground lobbies, synchronized to Proscalar PSR-1 controllers and elevator relay boards to dispatch lifts instantly to authorized tenant floors.',
    units: '28 Floors, 14 Speed Gates, 6 Elevators',
    scale: '2,400+ Daily Verified Occupants',
    systemsIntegrated: ['Facial Recognition Speed Gates', 'Elevator Destination Dispatch', 'Cloud Access ACMS'],
    brandsUsed: ['Akuvox', 'Proscalar'],
    results: [
      'Lobby entry processing time dropped from 4.2 seconds to 0.18 seconds per occupant',
      'Elevator wait times reduced by 27% through coordinated destination dispatch',
      'Centralized multi-tenant privilege management accessible via secure web portal'
    ]
  },
  {
    id: 'da-nang-boutique-resort',
    title: 'Son Tra Ocean Villa & Spa',
    location: 'Son Tra Peninsula, Da Nang',
    country: 'Vietnam',
    type: 'Hospitality',
    categoryTag: 'Luxury Hospitality & GRMS',
    overview: 'A 42-key ultra-luxury boutique beachfront resort requiring intuitive guestroom automation, coastal-grade digital door locks, and outdoor terrace audio resistant to maritime salt spray.',
    challenge: 'Tropical coastal humidity and salt air demanded robust hardware, while international guests required simple controls without language barriers.',
    solution: 'Supplied Akubela HyPanel Lux consoles with tactile dials for intuitive lighting and AC adjustment, Akuvox marine-grade outdoor door stations, and weather-protected Audio Pro patio soundscapes.',
    units: '42 Luxury Villas + Spa Pavilion',
    scale: 'Oceanfront Boutique Resort Complex',
    systemsIntegrated: ['Guest Room Management (GRMS)', 'Marine Door Access', 'Alfresco Sound', 'Automated Shading'],
    brandsUsed: ['Akubela', 'Akuvox', 'Audio Pro'],
    results: [
      'Zero user learning curve through physical rotary dial and icon-based interfaces',
      'HVAC automatically steps back when seaside balcony doors are left ajar',
      '100% corrosion-resistant marine hardware throughout beachfront perimeters'
    ]
  }
];

// -------------------------------------------------------------
// SMART SCENES / STORYTELLING
// -------------------------------------------------------------
export const SMART_SCENES: SmartSceneScenario[] = [
  {
    id: 'arrive-home',
    name: 'Arrive Home',
    timeframe: 'Evening Arrival · 18:30',
    tagline: 'Your threshold recognizes you and readies your sanctuary before you step inside.',
    steps: [
      {
        number: '01',
        domain: 'ACCESS',
        title: 'Threshold Authenticates Entry',
        description: 'Outdoor camera recognizes authorized biometric facial credentials in sub-0.2s and quietly unlocks the door.'
      },
      {
        number: '02',
        domain: 'SECURITY',
        title: 'Perimeter Disarms Automatically',
        description: 'Central security system disarms the main entry zones while keeping exterior boundary monitoring active.'
      },
      {
        number: '03',
        domain: 'LIGHTING',
        title: 'Circadian Pathway Illuminates',
        description: 'Foyer and living room recessed lights illuminate softly to a welcoming warm 2700K amber glow.'
      },
      {
        number: '04',
        domain: 'CLIMATE',
        title: 'Thermal Staging Adjusts',
        description: 'Central air conditioning transitions from eco-standby to your curated 22.5°C comfort temperature.'
      },
      {
        number: '05',
        domain: 'AUDIO',
        title: 'Acoustic Ambiance Commences',
        description: 'Curated evening music begins softly through architectural track speakers in the living and kitchen areas.'
      }
    ]
  },
  {
    id: 'good-morning',
    name: 'Good Morning',
    timeframe: 'Sunrise Awakening · 06:45',
    tagline: 'A gentle dawn awakening tuned to natural circadian progression.',
    steps: [
      {
        number: '01',
        domain: 'LIGHTING',
        title: 'Motorized Drapery Parts Slowly',
        description: 'Whisper-quiet motorized sheer curtains open gradually over 5 minutes to introduce natural morning sunlight.'
      },
      {
        number: '02',
        domain: 'CLIMATE',
        title: 'Fresh Air Ventilation Initiates',
        description: 'Energy recovery ventilation introduces filtered outdoor air while bedroom cooling adjusts comfortably.'
      },
      {
        number: '03',
        domain: 'LIGHTING',
        title: 'High-CRI Morning Tone Activates',
        description: 'En-suite vanity and kitchen illumination transition to energizing 5000K crisp white.'
      },
      {
        number: '04',
        domain: 'AUDIO',
        title: 'Morning Briefing & Acoustic Flow',
        description: 'Soft news broadcast or gentle classical playlist begins in the bathroom and kitchen.'
      },
      {
        number: '05',
        domain: 'SECURITY',
        title: 'Daytime Boundary Mode Confirmed',
        description: 'Interior sleep sensors transition to standby while perimeter fence beams remain vigilant.'
      }
    ]
  },
  {
    id: 'leaving-home',
    name: 'Leaving Home',
    timeframe: 'Departure · 08:15',
    tagline: 'One tap at the threshold locks, shields, and conserves your entire space.',
    steps: [
      {
        number: '01',
        domain: 'ACCESS',
        title: 'Threshold Confirms Departure',
        description: 'Single press on the door station or HyPanel activates Departure Sequence.'
      },
      {
        number: '02',
        domain: 'LIGHTING',
        title: 'All Fixtures De-energize',
        description: 'Every internal lighting circuit powers down; non-essential electrical sockets isolate.'
      },
      {
        number: '03',
        domain: 'CLIMATE',
        title: 'HVAC Enters Eco Preservation',
        description: 'Air conditioning shifts to setback humidity control mode, conserving energy while guarding against dampness.'
      },
      {
        number: '04',
        domain: 'SECURITY',
        title: 'Full Perimeter Armed',
        description: 'Dual-optic window curtains, glass-break sensors, and motion zones arm instantaneously.'
      },
      {
        number: '05',
        domain: 'ENERGY',
        title: 'Sub-metered Monitoring Active',
        description: 'Real-time telemetry confirms zero phantom electrical leakage across the estate.'
      }
    ]
  },
  {
    id: 'movie-night',
    name: 'Movie Night',
    timeframe: 'Entertainment · 20:30',
    tagline: 'Cinema-grade immersion with a single whisper or touch.',
    steps: [
      {
        number: '01',
        domain: 'LIGHTING',
        title: 'Architectural Blackout Shading',
        description: 'Motorized blackout drapes lower smoothly to eliminate ambient window reflections.'
      },
      {
        number: '02',
        domain: 'LIGHTING',
        title: 'Warm Concealed Cove Glow',
        description: 'Ceiling coves dim to 10% deep warm 2000K amber; accent spots fade to black.'
      },
      {
        number: '03',
        domain: 'AUDIO',
        title: 'Acoustic Zone Isolates to Media Suite',
        description: 'Lossless multichannel audio pairs to primary display with subwoofers tuned for cinematic impact.'
      },
      {
        number: '04',
        domain: 'CLIMATE',
        title: 'Whisper-Quiet Low Fan Mode',
        description: 'Air conditioning shifts to ultra-silent lowest-dB fan speed to maintain pristine acoustic floor.'
      },
      {
        number: '05',
        domain: 'SECURITY',
        title: 'Discreet Intercom Do-Not-Disturb',
        description: 'Non-emergency doorbell chimes are routed directly to mobile notifications without audible interruptions.'
      }
    ]
  },
  {
    id: 'away-mode',
    name: 'Away Mode',
    timeframe: 'Extended Travel · Multi-Day',
    tagline: 'Active presence simulation and autonomous life safety while you travel.',
    steps: [
      {
        number: '01',
        domain: 'SECURITY',
        title: 'High-Alert Fortification',
        description: 'Perimeter beams, door contacts, and thermal radar arm with 4G LTE cellular backup reporting.'
      },
      {
        number: '02',
        domain: 'LIGHTING',
        title: 'Realistic Presence Simulation',
        description: 'Selected room lights illuminate at realistic random evening intervals to simulate normal occupancy.'
      },
      {
        number: '03',
        domain: 'SECURITY',
        title: 'Water & Gas Line Autonomous Isolation',
        description: 'Main motorized water valves shut off to prevent flood damage from unexpected pipe ruptures.'
      },
      {
        number: '04',
        domain: 'CLIMATE',
        title: 'Dehumidification Safeguard',
        description: 'HVAC runs periodic gentle dehumidification cycles to preserve fine art and wooden millwork.'
      },
      {
        number: '05',
        domain: 'ACCESS',
        title: 'Temporary Courier Passes Available',
        description: 'Temporary QR codes can be dispatched to plant caretakers or parcel dropboxes via the mobile app.'
      }
    ]
  }
];

// -------------------------------------------------------------
// ENVIRONMENTS
// -------------------------------------------------------------
export const ENVIRONMENTS_LIST: EnvironmentType[] = [
  {
    id: 'smart-homes',
    name: 'Smart Homes & Luxury Villas',
    headline: 'Serene, unified intelligence that enhances private living.',
    description: 'Whole-house KNX automation, architectural flush panels, circadian lighting, and invisible perimeter security designed for high-net-worth private estates.',
    primarySystems: ['Akubela HyPanels', 'KNX DALI-2', 'Paradox Perimeter', 'Multi-Room Audio'],
    keyOutcome: '35+ disparate remote controls and switches unified into calm architectural touch surfaces.',
    span: 'wide'
  },
  {
    id: 'corporate-offices',
    name: 'Corporate & Offices',
    headline: 'Frictionless access and adaptive workplace efficiency.',
    description: 'Sub-0.2s biometric turnstiles, mobile smartphone badging, boardroom acoustics, and occupancy-driven HVAC setbacks that elevate workplace productivity.',
    primarySystems: ['Akuvox Facial Terminals', 'Proscalar Cloud Access', 'Lighting Automation', 'Energy Telemetry'],
    keyOutcome: 'Lobby wait times reduced by 70% with automatic visitor pass synchronization.',
    span: 'normal'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Luxury Resorts',
    headline: 'Unforgettable guest experiences with effortless operations.',
    description: 'Bespoke Guest Room Management Systems (GRMS), marine-grade outdoor intercoms, and wireless commercial track audio for poolside restaurants and boutique villas.',
    primarySystems: ['Akubela GRMS', 'Audio Pro Business Audio', 'Akuvox Intercom', 'Central AC Gateway'],
    keyOutcome: 'Zero guest learning curve combined with 30% reduction in vacant room chiller expenditure.',
    span: 'normal'
  },
  {
    id: 'residential-developments',
    name: 'Residential Developments',
    headline: 'Scalable smart infrastructure for modern multi-family towers.',
    description: 'Turnkey property platforms linking gatehouse intercoms, resident smart locks, elevator dispatch, and property management announcements into one cloud portal.',
    primarySystems: ['Akuvox SmartPlus', 'Akubela Smart Locks', 'Elevator Dispatch', '2-Wire Retrofit'],
    keyOutcome: 'Elevated real estate project value and seamless tenant onboarding for thousands of units.',
    span: 'wide'
  },
  {
    id: 'retail',
    name: 'Flagship Retail & Dining',
    headline: 'Agile acoustic storytelling and loss prevention.',
    description: 'Audio systems that mount onto lighting tracks in 2 hours with zero cabling, accompanied by discrete cloud-managed back-of-house access control.',
    primarySystems: ['Audio Pro Business 1.9GHz', 'Proscalar Access', 'Track Sound', 'Alarm Sensors'],
    keyOutcome: 'Zero store downtime during audio fitouts and instant speaker relocation when merchandising changes.',
    span: 'normal'
  },
  {
    id: 'education',
    name: 'Education & Campuses',
    headline: 'Safe, interconnected learning environments.',
    description: 'Heavy-duty vandal-resistant emergency call points, broadcast audio notification systems, and scheduled perimeter lockdowns across multi-building campuses.',
    primarySystems: ['Akuvox Blue-Light SOS', 'Paradox Multi-Partition', 'Campus Audio', 'PoE Controllers'],
    keyOutcome: 'Immediate one-touch priority dispatch to campus security during critical events.',
    span: 'normal'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Assisted Living',
    headline: 'Dignified safety and responsive communication.',
    description: 'Touchless access terminals, emergency nurse-call pull cords, telecare integration, and hands-free video stations engineered for hygiene and peace of mind.',
    primarySystems: ['Akuvox Assisted Care Intercoms', 'SOS Buttons', 'Indoor Monitors', 'Cleanroom Readers'],
    keyOutcome: 'Instant bidirectional voice contact during resident distress with zero physical buttons to grasp.',
    span: 'normal'
  },
  {
    id: 'industrial',
    name: 'Industrial & Logistics',
    headline: 'Hardened security and high-voltage energy visibility.',
    description: 'Grade-3 perimeter intrusion detection, heavy-duty vehicle gate intercoms, and sub-metered power monitoring across expansive warehousing facilities.',
    primarySystems: ['Paradox EVO High-Security', 'Akuvox Heavy-Duty Intercom', 'Energy Monitoring', 'Long-Range Beams'],
    keyOutcome: '24/7 unyielding physical defense with zero nuisance alarms across open logistical yards.',
    span: 'wide'
  }
];
