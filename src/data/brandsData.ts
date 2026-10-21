export interface BrandInfo {
  id: string;
  name: string;
  oneLiner: string;
  vertical: 'Smart Home' | 'Commercial' | 'Smart Home & Commercial';
  verticalTag: string;
  websiteUrl: string;
  websiteDomain: string;
  description: string;
  editorialQuote?: string;
  whyDistribute?: string;
  awardBadges?: string[];
  productCategories: {
    title: string;
    shortTitle?: string;
    tagline?: string;
    description: string;
    image?: string;
    items: string[];
  }[];
  keyHighlights: string[];
  imageUrl: string;
  badge?: string;
  origin?: string;
}

export const BRANDS_DATA: Record<string, BrandInfo> = {
  akubela: {
    id: 'akubela',
    name: 'Akubela',
    oneLiner: 'Living Brilliance: Red Dot 2025-awarded in-wall HyPanels, native KNX integration, AI smart locks, and Bela Smart Living AI.',
    vertical: 'Smart Home',
    verticalTag: 'Smart Home',
    websiteUrl: 'https://www.akubela.com',
    websiteDomain: 'akubela.com',
    editorialQuote: 'Drawing inspiration from a cappella vocal harmony, Akubela crafts whole-home intelligence where wired KNX stability, tactile glass surfaces, and localized AI live in effortless synchrony.',
    description:
      'Akubela, an AIoT smart living pioneer under Star-net, crafts whole-home automation guided by the philosophy of "Living Brilliance — Smarter Home, Sweeter Life". Honored with the prestigious Red Dot Award 2025 for the HyPanel Ultra and certified as a KNX Association member, Akubela unites communication, security, sustainability, and industrial design. Its hybrid architecture seamlessly blends wired KNX-TP backbones, RS485, and wireless Zigbee 3.0, Wi-Fi 6, and Bluetooth 5.4 into flush-mount HyPanel touchscreens, modular Aura KNX switches with digital dynamic labels, multi-biometric smart locks (SL60/SL50), and the multi-LLM Bela Smart Living Assistant.',
    awardBadges: [
      'Red Dot Winner 2025 (HyPanel Ultra)',
      'Featured Finalist 2023 (HyPanel Lux Piano)',
      'Certified KNX Member',
    ],
    keyHighlights: [
      'Red Dot Winner 2025: HyPanel Ultra 10.36" 2K UHD multi-protocol command center with metal frame & 6-gang relays',
      'Native KNX Architecture: HyPanels with built-in KNX-TP eliminating external gateways, plus Dual-Channel DALI (DT6/DT8)',
      'Comprehensive HyPanel Portfolio: 12.35" Supreme (2.5K UHD), 10.36" Ultra, 8" Pro, 10"/7" Elite, Lux series (Piano, Ring, Vase), KeyPlus, and Plus',
      'Modular Aura Series Switches: KNX smart switches with dynamic digital labels, metal frames, and 30-100cm proximity detection',
      'System-Level Smart Locks: SL60 with 3D Face, Palm Vein, Fingerprint & 4MP camera, SL50 AI keyless entry, SL30, F2 (Zigbee 3.0 IP65), and C6',
      'Bela Smart Living AI: Multi-LLM proactive voice assistant with multi-turn natural language running both cloud and 100% offline at the edge',
      'Turnkey Project Archetypes: Multifamily Communities (intercom + access + elevator), KNX Whole-House Villas, and Hotel GRMS',
    ],
    productCategories: [
      {
        title: 'HyPanel Smart Control Panels',
        shortTitle: 'HyPanels',
        tagline: 'Red Dot 2025 Awarded In-Wall Centerpieces',
        description: 'Architectural multi-touch displays unifying whole-home lighting, climate, video intercom, security, and shading into flush-mounted metal and glass.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
        items: [
          'HyPanel Supreme (PHX1): 12.35" 2.5K UHD (2560x1600) flagship with metal frame, 6-gang relays, 8 digital inputs, RS485, 5MP privacy shutter camera & KNX-TP',
          'HyPanel Ultra (PH81 - Red Dot Winner 2025): 10.36" 2K UHD (2000x1200) metal command center with 6-gang relays, 8 DI, RS485 & 16M indicator light',
          'HyPanel Pro (PG71): 8" 1280x800 display with dual mics, 5MP privacy camera, IR remote blaster, RS485 & Android 10',
          'HyPanel Elite 10 (PH59) & Elite 7 (PG42): 10" and 7" PoE touchscreens with 1-gang relay, 8 digital inputs & bell-in port for residential and commercial spaces',
          'HyPanel Lux Family: Lux Piano (2.1" 480x480 + 4 AG glass buttons & 16M RGB rotary knob), Lux Ring (metal knob press control), and Lux Vase (desktop crystal centerpiece with battery)',
          'HyPanel KeyPlus (KS53) & Plus (PS52): 4" in-wall touch panels with tactile scene buttons, 2-gang relays, Zigbee gateway & Android 12/13',
        ],
      },
      {
        title: 'Aura Series & Architectural Switches',
        shortTitle: 'Aura Switches',
        tagline: 'Modular KNX Design & Dynamic Digital Labels',
        description: 'Minimalist tactile switches and concealed micro-relays engineered with dynamic OLED digital labeling, proximity wake-up, and zero-crossing protection.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Aura Series KNX Smart Switch (K32-B4/B6/B8): Modular metal & V0 fireproof design with dynamic digital labeling & integrated HVAC control',
          'Built-in 30~100cm proximity sensor on Aura switches for automatic display activation upon approach',
          'Smart Key Switch (EU standard) with fingerprint-resistant AG glass, soft-touch tactile action & Zigbee 3.0',
          '1, 2, 3 & 4-Gang Touch Switches (EU & US standards) with high-sensitivity touch sensing and repeater function',
          'Concealed 1/2 Gang In-Wall Switch Modules with zero-crossing protection for boilers, lighting & curtains',
          'Scratch-proof Smart Sockets with USB ports and Zigbee Smart Plugs (EU, UK, US variants)',
        ],
      },
      {
        title: 'System-Level Smart Locks',
        shortTitle: 'Smart Locks',
        tagline: '3D Face, Palm Vein & AI-Powered Keyless Entry',
        description: 'High-security electronic door locks with multi-biometric authentication, integrated wide-angle door cameras, and seamless BelaHome / Akuvox intercom linkage.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
        items: [
          'SL60 Flagship Smart Lock: 3D Face Recognition (50), Palm Vein (50), Fingerprint (50), PIN, IC Card/NFC & remote unlock with 4MP 111° camera',
          'SL60 Dual Power Architecture: 6000mAh + 3000mAh lithium batteries, 6068 lock case with door status detection & IP65 front rating',
          'SL50 Smart Lock: AI-powered keyless entry with 2MP camera, fingerprint, PIN, IC card, and 5000mAh lithium battery',
          'SL30 Smart Lock: Cost-effective apartment residential lock with 4585 lock case and doorbell-triggered remote unlock',
          'SL21 & SL20 Smart Locks: Deadbolt and LA/LSP lock configurations with long-lasting battery life',
          'F2 & C6 Smart Locks: Zigbee 3.0 encrypted high-security locks with ergonomic handles and IP65 weatherproof rating',
        ],
      },
      {
        title: 'KNX & RS485 Infrastructure',
        shortTitle: 'KNX & RS485',
        tagline: 'Dual-Channel DALI & High-Density Actuation',
        description: 'Certified KNX DIN-rail components and high-capacity RS485 multi-function gateways delivering rock-solid wired infrastructure for villas and commercial projects.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Dual-Channel DALI Gateway (KXAC-B1DD2): Controls up to 128 DALI devices across 2 channels, supporting DT6, DT8 Tunable White (Tc), DT8 XY & DT8 RGB',
          'KNX Power Module 960mA (KXPW-B1A960) with dual 30V DC outputs, bus reset, and automated short-circuit protection',
          'KNX Switch Modules: 8-Gang (16A), 28-Gang (10A high-density), and 8-Gang (10A) with manual toggle override & staircase logic',
          'KNX Dimming & Shading: 4-Gang 0-10V Dimmer Module, 4-Gang 300W SCR Thyristor Dimmer & 4-Gang Curtain Actuator',
          'KNX Control Panels: 2/4/6/8-Button Scene Panels and 4-Button Temperature Control Panel for AC, ventilation & underfloor heating',
          'IP-485 Multifunctional Gateway: 5 RS485 ports, 10 digital inputs, 10 relay dry contacts with PoE & 8-channel RS485 Switch Actuators',
        ],
      },
      {
        title: 'Climate, Shading & Zigbee Add-ons',
        shortTitle: 'Climate & Add-ons',
        tagline: 'VRV/VRF Gateways, mmWave & Environmental Safety',
        description: 'Intelligent climate bridges, ultra-quiet motorized shading, 24GHz mmWave presence radar, and autonomous safety shutoff detectors.',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Central AC Controllers (Indoor & Outdoor): VRV/VRF gateways compatible with Daikin, Hitachi, Midea, Toshiba, Panasonic, Mitsubishi Electric, and York',
          'Thermostats: Fan Coil Thermostats with capacitive touch and Heating Thermostats (16A electric underfloor heating)',
          'Motorized Shading: 1.2Nm low-noise DC Shade Motors with soft start/stop, manual pull trigger & dedicated Curtain Control Panels',
          'Smart Air Quality Detector: TFT display monitoring PM2.5, Formaldehyde, CO2, TVOC, temperature, and relative humidity',
          'Life Safety & Sensing: 24GHz ISM mmWave Human Presence Radars (4-5m range), Door/Window sensors, PIR Motion sensors & Scene Buttons',
          'Autonomous Protection: Natural Gas (8% LEL), CO, Smoke & IP66 Flood Sensors linked to 1.6MPa Smart Water Shutoff Valves',
        ],
      },
      {
        title: 'Platforms & Project Solutions',
        shortTitle: 'Bela AI & Cloud',
        tagline: 'Multi-LLM Voice AI, BelaHome & Multifamily Cloud',
        description: 'Local-edge AI voice assistants, property management cloud systems, and specialized deployment blueprints for communities, villas, and hotels.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Bela Smart Living Assistant: "Hi Bela, Hi Smart Life" powered by multi-LLMs with natural multi-turn dialogue, proactive suggestions & offline edge execution',
          'BelaHome App (iOS & Android): Localized data security, whole-home device management, scene customization & instant alarm alerts',
          'BelaHome Web: PC workstation for homeowners and facility managers with advanced scheduling, energy analytics & brand-agnostic controls',
          'akubela Cloud: Multi-residential property management portal with template-based bulk deployment, remote firmware upgrades & third-party API/SDK',
          'Multifamily Community Solution: Unified cloud linking Akuvox building intercoms, apartment smart locks, elevator dispatch & amenity booking',
          'Smart GRMS Solution: Wired (KNX/RS485) and wireless Guest Room Management System for boutique hotels and serviced residences',
        ],
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    origin: 'Global Architectural Design & KNX Member',
  },

  akuvox: {
    id: 'akuvox',
    name: 'Akuvox',
    oneLiner: 'Smart Intercom & Access Control: AI-powered residential & commercial intercoms, 2-wire retrofit systems, and SmartPlus cloud access.',
    vertical: 'Smart Home & Commercial',
    verticalTag: 'Smart Home & Commercial',
    websiteUrl: 'https://www.akuvox.com',
    websiteDomain: 'akuvox.com',
    editorialQuote: 'Transforming building thresholds into secure, intelligent touchpoints—from luxury multi-family residences to corporate enterprise towers.',
    description:
      'Akuvox is a global leading provider of smart intercom and access control products and solutions. Grounded in open SIP, Android, AI, and cloud technology, Akuvox solutions span residential communities, commercial office towers, 2-wire legacy retrofits, healthcare facilities, and public spaces. With anti-spoofing facial recognition, Bluetooth, NFC, QR code credentials, elevator destination control, and the unified Akuvox SmartPlus cloud platform, Akuvox delivers uncompromising security, convenience, and elevated property value.',
    awardBadges: [
      'Global Leader in Smart Intercom',
      'Open SIP 2.0 & ONVIF Certified',
      'SmartPlus Cloud Access',
    ],
    keyHighlights: [
      'Residential Solutions: Smart multi-family & villa video intercoms, AI facial recognition (<0.2s), elevator dispatch & smartphone video calling',
      '2-Wire Retrofit Solutions: Upgrade aging intercoms over existing 2-wire cabling up to 300m to HD video SIP systems without rewiring',
      'Commercial Access Control: Multi-tenant office stations, turnstile speed gates, sub-0.2s facial recognition (A05), and OSDPv2 door controllers (A092)',
      'Smart Security & Automation: Android indoor monitors (IT88 with Zigbee hub, C319) unifying 8-channel alarm inputs, RTSP CCTV & home automation',
      'Assisted Care & Healthcare: Telecare protocol support, emergency pull-cord stations, SOS buttons, and nurse call intercom consoles',
      'Public Space & Emergency: Vandal-resistant IK10 / IP65 emergency blue-light pillars and one-touch SOS priority communication',
      'Akuvox SmartPlus: Multi-site cloud portal, mobile virtual keys, remote door opening, and integration with Salto smart locks',
    ],
    productCategories: [
      {
        title: 'Smart Residential Intercom Solutions',
        shortTitle: 'Residential',
        tagline: 'Multi-Tenant & Luxury Villa Intercoms',
        description: 'AI-enhanced video door phones and entry stations delivering facial recognition, mobile unlocking, elevator dispatch, and smart home integration.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
        items: [
          'X915 Android Flagship Door Phone: 8" IPS touchscreen, dual Starlight HDR cameras, anti-spoof facial recognition & marine-grade 316 stainless steel',
          'S539 Multi-Tenant Flagship Intercom: 10" color screen, dual cameras & 15+ access methods for high-density luxury developments',
          'X912 Compact Vandal-Resistant Door Phone: Premium metal housing with face recognition, BLE, QR code, PIN & RFID access',
          'R29C & E16C Biometric Door Stations and single-tenant outdoor entry units for villas and residences',
          'Smart Elevator Integration: Automatic elevator summoning upon building entry and designated resident floor authorization',
          'Visitor Access Management: Instant temporary QR codes and time-limited PIN generation sent directly to guests and couriers',
        ],
      },
      {
        title: '2-Wire Video Intercom Retrofit',
        shortTitle: '2-Wire Retrofit',
        tagline: 'Zero-Rewiring Building Modernization',
        description: 'Cost-effective solutions that upgrade outdated audio or analog intercom systems to IP video and cloud access using existing 2-wire cables up to 300 meters.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
        items: [
          'R20A-2 Smart 2-Wire Door Phone: 2MP wide-angle camera, RFID reader, and IP65 weatherproof housing operating over legacy 2-wire cables',
          'C313W-2 7-Inch Indoor Touch Monitor: High-resolution display with crystal-clear two-way audio and third-party IP camera streaming',
          'NS-2 2-Wire IP Network Switch: Central expansion unit connecting multiple 2-wire door stations and monitors with network bridging',
          'Long Transmission Distance: Reliable data and video transmission up to 300 meters over existing building wires without conduit rework',
          'Full SmartPlus Cloud Access: Residents on retrofitted 2-wire systems receive smartphone video calls and remote door unlocking',
          'Huge Cost & Time Savings: Eliminates messy wall demolition and expensive cable pulling in heritage or occupied multi-tenant buildings',
        ],
      },
      {
        title: 'Smart Commercial & Access Control',
        shortTitle: 'Commercial Access',
        tagline: 'Turnstiles, Biometrics & Enterprise Management',
        description: 'Comprehensive physical security and access control for corporate offices, business parks, and co-working environments.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
        items: [
          'A05 & A05C Commercial Facial Recognition Terminals: 5" screen, sub-0.2s matching speed, liveness detection & optical turnstile bracket mount',
          'A01 & A02 IP RFID & Keypad Access Controllers with standalone door strike control, PoE, and tamper-resistant design',
          'A092 2-Door Network Controller: Enterprise-grade access controller supporting OSDPv2, RS-485, Wiegand & backup battery management',
          'Centralized Multi-Site Administration: Cloud ACMS and on-premise SDMC managing thousands of doors across multiple branch offices',
          'Meeting Calendar Visitor Sync: Synchronize Outlook/Google Calendar meetings to automatically generate visitor QR access badges',
          'Mobile & Wallet Credentials: Frictionless staff access via Bluetooth Low Energy (BLE), NFC, and Apple/Google Wallet badges',
        ],
      },
      {
        title: 'Indoor Monitors & Security Hubs',
        shortTitle: 'Indoor Monitors',
        tagline: 'SIP Video Intercom & Central Home Security',
        description: 'Architectural Android indoor monitors acting as the unified communications, security alarm, and smart home command center.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
        items: [
          'IT88 Luxury Android Indoor Monitor: 10" IPS display, integrated Zigbee 3.0 smart home gateway, Bluetooth, Wi-Fi & SIP 2.0',
          'C319 10-Inch Android Touchscreen: Built-in voice assistant, telecare protocol integration, and third-party Android app support',
          'C313 & C315 Compact Touch Monitors: 7" flush/surface wall-mount SIP intercom monitors for standard residential layouts',
          'Integrated 8-Channel Alarm Inputs: Direct connection to smoke, combustible gas, flood, and PIR sensors with push notifications',
          'Multi-Room Room-to-Room Intercom: HD video calling between indoor units and broadcast paging across villa or penthouse floors',
          'RTSP Video Surveillance: Live stream feeds from building perimeter and third-party ONVIF IP security cameras directly to the monitor',
        ],
      },
      {
        title: 'Assisted Care & Public Space Solutions',
        shortTitle: 'Care & Public Space',
        tagline: 'Healthcare Trust & Heavy-Duty Emergency SOS',
        description: 'Specialized communication solutions for senior living facilities, hospitals, parking structures, university campuses, and public parks.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Senior Living & Hospital Intercom: Prioritizing resident care with hands-free answering, telecare protocols, and emergency nurse station linkage',
          'Emergency Pull-Cord & Wireless SOS Buttons: Instant alarm triggering to on-duty staff and family members via the SmartPlus app',
          'Emergency Blue-Light Call Stations: High-visibility outdoor help points with strobe lights for university campuses and public parking lots',
          'Vandal-Resistant Emergency Pillars: Heavy-duty IK10 impact protection, IP65/IP66 weatherproofing, and marine-grade 316 stainless steel',
          'One-Touch Priority Dispatch: Instant duplex voice link to emergency security dispatch centers with location identification',
          'Public Audio Broadcasting: Mass notification and emergency evacuation announcements over high-volume integrated speakers',
        ],
      },
      {
        title: 'Akuvox SmartPlus Cloud Platform',
        shortTitle: 'SmartPlus Cloud',
        tagline: 'Unified Multi-Tenant Cloud Management',
        description: 'A powerful cloud-based smart access and intercom platform linking installers, property managers, residents, and visitors.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
        items: [
          'SmartPlus Mobile App: Answer video calls, preview visitor video, remotely unlock doors, and issue temporary visitor keys from anywhere',
          'Virtual Key Issuance: Generate customized QR codes, temporary PINs, and time-restricted Bluetooth keys for visitors and contractors',
          'Centralized Web Portal for Property Managers: Effortless resident onboarding, permission management, community notices & audit logs',
          'Remote Device Maintenance: Batch configuration, automatic firmware updates, and remote diagnostic checks without site visits',
          'Third-Party Smart Lock Integration: Seamlessly unlock Salto smart locks and integrated electronic deadbolts from the SmartPlus app',
          'Open API & SDK Ecosystem: Direct integration with leading property management systems (PMS), VMS (Milestone), and home automation',
        ],
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    origin: 'Global SIP & AI Access Pioneer',
  },

  'audio-pro': {
    id: 'audio-pro',
    name: 'Audio Pro',
    oneLiner: 'Track Wireless Sound: 1.9 GHz commercial lighting-track audio systems (Audio Pro Business) and Scandinavian residential multiroom hi-fi.',
    vertical: 'Smart Home & Commercial',
    verticalTag: 'Smart Home & Commercial',
    websiteUrl: 'https://www.audiopro.com/pages/about-audio-pro-business',
    websiteDomain: 'audiopro.com',
    editorialQuote: 'Acoustic fidelity crafted with Scandinavian restraint—bringing total wireless freedom to commercial venues and luxury homes without disruptive cabling.',
    description:
      'Founded in Sweden in 1978, Audio Pro has pioneered pure acoustic performance for over four decades. Through the groundbreaking Audio Pro Business platform, Audio Pro redefines commercial sound for retail stores, hotels, restaurants, gyms, and corporate offices. By clipping directly into existing 3-phase lighting tracks for power and mounting, Audio Pro Business systems install in as little as 2 hours (compared to 2 days for traditional wired setups) with zero cable trenching and no store closures. Operating on a dedicated, interference-free 1.9 GHz wireless frequency band with up to 2x the range of Wi-Fi, it delivers pristine uncompressed audio, up to 6 distinct volume zones, and the flexibility to reposition speakers instantly as store layouts evolve.',
    awardBadges: [
      'Swedish Acoustic Heritage (Est. 1978)',
      '1.9 GHz Interference-Free Wireless',
      'Track-Mounted Commercial Audio',
    ],
    keyHighlights: [
      'Track Wireless Sound: Speakers clip directly into standard 3-phase lighting tracks (Global, EUTRAC, Nordic Aluminium, Zumtobel, iGuzzini) for power & audio',
      'Lightning-Fast Setup: Complete commercial installation in as little as 2 hours vs. 2 days—no conduit drilling, cable pulling, or business downtime',
      'Dedicated 1.9 GHz Wireless Band: Completely avoids crowded 2.4/5 GHz Wi-Fi networks for zero dropouts, uncompressed audio, and at least 2x the range of Wi-Fi',
      'Multi-Zone Flexibility: Control up to 6 distinct volume zones via the VOL-1 master wireless controller, tailoring sound across shopping floors, dining, and checkouts',
      'Layout Agility: Move and re-aim speakers in seconds when retail merchandising, seating plans, or display fixtures are reorganized',
      'Universal Source Freedom: TX-1 transmitter connects seamlessly via balanced XLR, 3.5mm, or USB to Soundtrack Your Brand, Spotify, or any media player',
      'Global Commercial Pedigree: Trusted by Koenigsegg, Circle K (100+ stations), Adidas, JYSK, Synsam, boutique hotels, and premier culinary venues worldwide',
      'Scandinavian Residential Multiroom: Active stereo speakers (A28, A38, Drumfire II) with AirPlay 2, Google Cast, and HDMI ARC for audiophile home living',
    ],
    productCategories: [
      {
        title: 'Audio Pro Business: Wireless Track Loudspeakers',
        shortTitle: 'Track Speakers',
        tagline: 'Cable-Free Lighting Track Acoustics',
        description: 'Point-source commercial loudspeakers that click directly into standard 3-phase lighting tracks, eliminating disruptive trenching and unsightly ceiling cables.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
        items: [
          'SP-1 Wireless Track Loudspeaker: Ultra-compact point-source speaker with 2.75" full-range driver, 12W Class D amplifier, and lighting track adapter',
          'SP-3 Premium 2-Way Wireless Track Loudspeaker: 4.5" woofer + 0.75" soft dome tweeter with 2x25W Class D DSP-controlled amplification for high SPL commercial dynamics',
          'Universal Track Rail Compatibility: Snaps securely into Global Trac, Nordic Aluminium, EUTRAC, Zumtobel, iGuzzini, and Erco 3-phase lighting rails',
          'Effortless Store Reconfiguration: Unclip and reposition speakers within seconds whenever retail merchandising or display fixtures change',
          'Balanced Line-Out Connectivity: Daisy-chain secondary passive speakers or wired subwoofers directly from the track speaker housing',
          'Available in Matte Architectural Black and Clean White to seamlessly complement commercial interior design',
        ],
      },
      {
        title: 'Dedicated 1.9 GHz Transmitters & Volume Controllers',
        shortTitle: 'Transmitters & Control',
        tagline: 'Zero-Latency Dedicated RF Transmission',
        description: 'Interference-free wireless transmitters and master volume controllers delivering stable audio across expansive retail floors without touching local Wi-Fi.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
        items: [
          'TX-1 Master Wireless Transmitter: Broadcasts uncompressed 16-bit/48kHz audio over 1.9 GHz DECT band to up to 31 speakers per channel',
          'Immunity from Wi-Fi Traffic: Operates outside crowded 2.4 GHz and 5 GHz bands, ensuring zero drops from customer mobile devices and POS networks',
          'Double the Range of Wi-Fi: Long-range RF signal effortlessly covers open commercial spaces up to 7,500 m² from a single transmitter location',
          'VOL-1 Wireless Master Volume Controller: Wall-mount or desktop dial controlling up to 6 independent audio volume zones with tactile precision',
          'Universal Source Inputs: Balanced Phoenix terminal, dual RCA, 3.5mm stereo mini-jack, and USB digital audio for total playback versatility',
          'Broad Music Service Compatibility: Fully compatible with Soundtrack Your Brand, Spotify Business, Apple Music, and local media streamers',
        ],
      },
      {
        title: 'Commercial Subwoofers & Architectural Mounting Kits',
        shortTitle: 'Subwoofers & Mounts',
        tagline: 'Deep Commercial Lows & Versatile Placement',
        description: 'Architectural subwoofers and specialized bracket hardware extending Audio Pro Business audio to venues with or without lighting tracks.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
        items: [
          'SUB-1 Wireless Commercial Subwoofer: Down-firing 6.5" long-throw woofer with 80W Class D DSP amplifier and dual passive radiators',
          'Flexible Subwoofer Power: Can be track-mounted with optional power adapters or placed on floors, behind banquettes, or on structural columns',
          'WB-1 Articulating Wall Brackets: Direct wall-mounting solution for SP-1 and SP-3 speakers in spaces without overhead lighting rails',
          'Ceiling Pendant Suspension Kits: Elegantly suspend track speakers from high industrial open-plenum ceilings for optimal acoustic coverage',
          'DSP Bass Management: Engineered to enrich retail background soundscapes with warm, fatigue-free low frequencies that lengthen customer dwell time',
          'Wireless Pairing & Auto-Connect: Seamless wireless lock to the TX-1 transmitter upon power-up with zero manual pairing routines',
        ],
      },
      {
        title: 'Outdoor & Weatherproof Commercial Audio',
        shortTitle: 'Outdoor Audio',
        tagline: 'Hospitality Patios & Alfresco Dining',
        description: 'All-weather, IP-rated commercial speakers bringing Audio Pro Business wireless clarity to outdoor terraces, beer gardens, and poolside lounges.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Weatherproof Commercial Enclosures: UV-resistant, IP-rated composite cabinets built to withstand rain, humidity, temperature swings, and sunlight',
          'Outdoor Hospitality Sound: Seamlessly synchronized with indoor retail or restaurant zones for continuous musical flow onto patios and terraces',
          'Dedicated Outdoor Volume Zone: Regulated independently via the VOL-1 controller to comply with local outdoor sound ordinances',
          'Rust-Proof Aluminium Grilles and heavy-duty adjustable multi-angle mounting brackets for exterior walls and timber pergolas',
          'Consistent Audiophile Signature: Engineered with the same natural Swedish acoustic voicing as indoor SP-1 and SP-3 loudspeakers',
        ],
      },
      {
        title: 'Residential Multiroom Active Stereo Speakers',
        shortTitle: 'Residential Stereo',
        tagline: 'Warm Scandinavian Acoustic Living',
        description: 'Sculptural active stereo cabinets wrapped in acoustic textiles, delivering deep dynamic sound, HDMI ARC television audio, and whole-home streaming.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
        items: [
          'A28 Bookshelf & A38 Floorstanding Active Stereo Pairs: High-fidelity TV sound via HDMI ARC with AirPlay 2, Google Cast & Spotify Connect',
          'A26 & A36 Classic Active Stereo Speaker Pairs with optical digital, 3.5mm AUX, and dedicated subwoofer output',
          'C10 MkII & C5 MkII Wireless Multiroom Streaming Cabinets with tactile brass/aluminium controls and interchangeable textile grilles',
          'Drumfire II Flagship Powerhouse: 300W pure dynamic amplification with separate D-Sub for earth-shaking private listening sessions',
          'Lossless Multiroom Streaming: Group multiple rooms or play distinct songs in each zone via the intuitive Audio Pro app (iOS & Android)',
          'Subwoofer Integration: Dedicated RCA sub-out with smart high-pass crossover filters when linked with Audio Pro active subwoofers',
        ],
      },
      {
        title: 'Portable Hi-Fi, Subwoofers & Streaming Adapters',
        shortTitle: 'Portables & Subs',
        tagline: 'Nordic Portability & Modernizing Legacy Hi-Fi',
        description: 'High-excursion active subwoofers, battery-powered portable Scandinavian speakers, and wireless streaming adapters for existing audio systems.',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
        items: [
          'SW-10 & SW-5 Powered Architectural Subwoofers: Dual passive radiator topology delivering clean, deep bass for movies and music',
          'A10 MkII Multiroom Speaker: Cylindrical fabric-wrapped design with 4 presets, AirPlay 2, Google Cast, and optional wall/ceiling bracket mounts',
          'C3, BT5, and P5 Portable Loudspeakers: Extended lithium battery runtime, embossed genuine leather carry straps, and Bluetooth 5.0 streaming',
          'Link 2 Wireless Multiroom Streaming Adapter: Modernizes legacy vintage amplifiers and active monitors with Wi-Fi, AirPlay 2, and optical I/O',
          'Physical Preset Buttons: Instant one-touch playback of favorite Internet radio stations and Spotify playlists without unlocking your phone',
        ],
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1600&q=85',
    origin: 'Helsingborg, Sweden (Est. 1978)',
  },

  proscalar: {
    id: 'proscalar',
    name: 'Proscalar',
    oneLiner: 'Cloud-native access control platforms, PoE door controllers, and multi-site enterprise management.',
    vertical: 'Commercial',
    verticalTag: 'Commercial only',
    websiteUrl: 'https://www.proscalar.io',
    websiteDomain: 'proscalar.io',
    editorialQuote: 'Eliminating the complexity of legacy servers with nimble, cloud-native physical security.',
    description:
      'Developed by Sensorlink, Proscalar reimagines enterprise physical security through cloud-native architecture and low-voltage PoE hardware. Designed for facility directors, commercial developers, and regional enterprises, Proscalar integrates the Proscalar Go cloud platform, Proscalar Central on-premise system, and Co ID smartphone mobile credentials with modular PSR-1 and PSR-C2 door controllers for frictionless multi-site access management.',
    keyHighlights: [
      'Proscalar Go cloud platform with real-time oversight, remote diagnostics, and automated cloud updates',
      'Proscalar Central on-premise enterprise platform for visitor management and time attendance',
      'Co ID mobile credential app enabling smartphone access via Bluetooth Low Energy and NFC',
      'Modular PoE and networked door controllers (PSR-1, PSR-C2M, PSR-C2) with AES-128 hardware encryption',
    ],
    productCategories: [
      {
        title: 'Cloud & On-Premise Access Management Software',
        tagline: 'Unified Multi-Site Management',
        description: 'Scalable access control software delivering instant lockdown capabilities, audit trails, and automatic emergency egress sequences.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Proscalar Go: Cloud-based enterprise access control platform with multi-location real-time oversight',
          'Proscalar Central: On-premise enterprise platform for centralized privilege & time attendance management',
          'Co ID Mobile Credential App: Smartphone digital badging via Bluetooth Low Energy and NFC',
          'Automated cloud updates, remote diagnostics, and real-time live event logging',
        ],
      },
      {
        title: 'Networked Door Controllers',
        tagline: 'Low-Voltage Enterprise Simplicity',
        description: 'High-performance modular IP door controllers with dual-core processing and encrypted onboard memory that functions even during internet outages.',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
        items: [
          'PSR-1 Modular Door Controller: Dual-core processor supporting up to 16 doors via expansion & 200,000 records',
          'PSR-C2 & PSR-C2M Door Controllers: Compact 2-door controllers (PSR-C2M with metal housing & power supply)',
          'Built-in Bluetooth 5.0 for mobile credential management with Co ID',
          'AES-128 encrypted communication and local cryptographic buffer during network loss',
        ],
      },
      {
        title: 'Door & I/O Expansion Interfaces',
        tagline: 'High-Density Building Integration',
        description: 'Modular interface boards expanding door capacity, elevator destination control, and auxiliary alarm inputs.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        items: [
          'PSR-D2 & PSR-D2E Door Interfaces: 2-door expansion modules supporting Wiegand / OSDPv2 Secure Channel',
          'PSR-D2E enhanced module with Ethernet, RS-485, and hardware crypto engine',
          'PSR-R32E 32-Relay Lift / Elevator Destination Dispatch Control (DCS) Interface',
          'PSR-M16E 16-Channel Input Alarm & Environmental Sensor Monitoring Interface',
        ],
      },
      {
        title: 'Smart Readers & Biometric Terminals',
        tagline: 'Encrypted Multi-Tech & Biometrics',
        description: 'Architectural readers supporting smartphone digital credentials, capacitive smart cards, QR codes, and facial recognition.',
        image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Proscalar Secure Card Reader & MIFARE Smart Card Reader (OSDPv2 encrypted)',
          'QR Code Card Reader for scheduled visitor, contractor, and delivery passes',
          'Face Recognition Biometric Terminal with deep-learning visible-light authentication',
          'Seamless integration with Speed Gates, Turnstiles, HR/Payroll systems, and VMS video surveillance',
        ],
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    origin: 'Enterprise Cloud Security',
  },

  paradox: {
    id: 'paradox',
    name: 'Paradox',
    oneLiner: 'Centralized hybrid security, perimeter defence, smoke and environmental protection systems.',
    vertical: 'Smart Home & Commercial',
    verticalTag: 'Smart Home & Commercial',
    websiteUrl: 'https://www.paradox.com',
    websiteDomain: 'paradox.com',
    editorialQuote: 'Unyielding Canadian life safety engineered with architectural discretion and zero false alarms.',
    description:
      'Paradox is the global benchmark for centralized hybrid intrusion detection and environmental life safety. Scalable from private luxury estates to multi-floor commercial complexes, Paradox combines Digiplex EVO, Spectra SP, and Magellan MG central controllers with touchscreen keypads (TM70/TM50), dual-optic curtain sensors, and the BlueEye mobile app into an impenetrable physical defense layer.',
    keyHighlights: [
      'Scales from 32-zone residential hubs to 192-zone commercial high-security facilities',
      'EVO, Spectra, and Magellan central hybrid controllers with cellular/IP reporting',
      'Comprehensive environmental safety: wireless smoke, heat, gas, and water shutoff',
      'BlueEye mobile command app with multi-site arming, disarming, and zone bypass',
    ],
    productCategories: [
      {
        title: 'Central Control Hubs & Hybrid Panels',
        tagline: 'Grade-3 Physical Perimeter Core',
        description: 'Hardened hybrid bus processors providing battery backup resilience, cellular failover, and multi-partition isolation.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
        items: [
          'Digiplex EVO192 & EVOHD+ High Security Systems (up to 192 zones, 8 partitions & 32 doors)',
          'Spectra SP Series (SP4000, SP5500+, SP6000+, SP7000+) Expandable Hybrid Security Hubs',
          'Magellan MG Series (MG5050+, MG5075) All-in-One Wireless Security Consoles with StayD mode',
          'Modular bus architecture supporting wired, wireless, and encrypted IP modules',
        ],
      },
      {
        title: 'Interactive Touchscreens & Keypads',
        tagline: 'Architectural Command Consoles',
        description: 'High-resolution color touchscreens and tactile keypads designed for intuitive arming, chime management, and status checks.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        items: [
          'TM70 & TM50 7-inch and 5-inch High-Resolution Color Touchscreen Keypads',
          'Interactive graphic floor plans and indoor/outdoor temperature display',
          'K32LCD+ 32-Character Hardwired Blue LCD Keypads with chime and zone diagnostics',
          'K38 & K37 32-Zone Wireless Fixed LCD Keypads with quick-action buttons',
        ],
      },
      {
        title: 'Perimeter & Motion Detectors',
        tagline: 'Precision Optical Discrimination',
        description: 'Dual-optic digital sensors with false-alarm immunity against pets, temperature shifts, and outdoor foliage movement.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
        items: [
          'NV780MX / NV780MR Dual Side-View Outdoor/Indoor Curtain Motion Detectors (4 dual sensors)',
          'NV35MR / NV35MX Window and Sliding Door Detectors with Pet Immunity & Active Anti-Masking',
          'DG75+ High-Security Digital Dual-Optic Pet-Immune Motion Detectors',
          'Paradox 360-degree Ceiling-Mount PIR and quad-element interior sensors',
        ],
      },
      {
        title: 'Communication Modules & BlueEye Mobile',
        tagline: 'Autonomous Fire, Flood & Cloud Shield',
        description: 'Early warning photoelectric smoke detection and water leak sensors linked to automatic wireless shutoff valves and cloud reporting.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
        items: [
          'IP150+ Internet Reporting Module & PCS265V7 4G LTE Cellular Communicator Backup',
          'Paradox BlueEye Mobile App for real-time arming, disarming, PGM control & push alerts',
          'Wireless Photoelectric Smoke & Heat Detectors with localized siren chimes',
          'Water Flood Detection probes with automatic motorized wireless valve shutoff',
        ],
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=85',
    origin: 'Montreal, Canada (Global Standards)',
  },
};

export const BRANDS_LIST: BrandInfo[] = Object.values(BRANDS_DATA);
