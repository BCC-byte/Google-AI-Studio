import React from 'react';

interface ArchitecturalVisualProps {
  type: 'villa-elevation' | 'smart-living-interior' | 'commercial-atrium' | 'southeast-asia-map' | 'project-residence' | 'project-retail' | 'project-commercial' | 'project-hospitality';
  activeCategory?: string;
  activeHotspotId?: string;
  onHotspotClick?: (id: string) => void;
  className?: string;
}

export const ArchitecturalVisual: React.FC<ArchitecturalVisualProps> = ({
  type,
  activeCategory,
  activeHotspotId,
  onHotspotClick,
  className = '',
}) => {
  if (type === 'villa-elevation') {
    return (
      <div className={`relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-[#0A1017] border border-white/10 select-none shadow-2xl ${className}`}>
        {/* Ambient Sky Gradient & Architectural Twilight Background */}
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-[#162533] via-[#0B131D] to-[#060A0F]" />

        {/* Subtle Architectural Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D7F0" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>

        {/* Architectural Villa Structure */}
        <svg className="relative w-full h-full" viewBox="0 0 1000 625" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Lighting Glow Gradients */}
            <radialGradient id="livingGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE4A0" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#FFB347" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0B131D" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="patioGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D7F0" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0099B8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0B131D" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="upperGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E2F1FF" stopOpacity="0.5" />
              <stop offset="65%" stopColor="#7FB2E5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0B131D" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="concreteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#253241" />
              <stop offset="100%" stopColor="#121A24" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B3347" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0D1E2C" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="timberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A3423" />
              <stop offset="100%" stopColor="#2A1B10" />
            </linearGradient>
            <linearGradient id="waterReflect" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D7F0" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#007A99" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#081017" />
            </linearGradient>
          </defs>

          {/* Background Horizon Landscape */}
          <path d="M 0 450 Q 250 420 500 440 T 1000 435 L 1000 625 L 0 625 Z" fill="#0D1620" />
          <path d="M 0 470 Q 350 455 700 465 T 1000 460 L 1000 625 L 0 625 Z" fill="#0A111A" />

          {/* Reflective Infinity Pool in Foreground */}
          <polygon points="120,490 880,490 960,610 40,610" fill="url(#waterReflect)" />
          {/* Subtle water ripple lines */}
          <line x1="160" y1="520" x2="840" y2="520" stroke="#00D7F0" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="220" y1="550" x2="780" y2="550" stroke="#00D7F0" strokeWidth="0.8" strokeOpacity="0.3" />
          <line x1="100" y1="580" x2="900" y2="580" stroke="#00D7F0" strokeWidth="0.5" strokeOpacity="0.25" />

          {/* Ground Floor Concrete Plinth */}
          <polygon points="100,470 900,470 870,490 130,490" fill="url(#concreteGrad)" />

          {/* MAIN VILLA GROUND LEVEL STRUCTURE */}
          {/* Living Room & Dining Pavilion (Glass & Steel Frame) */}
          <rect x="180" y="270" width="420" height="200" fill="url(#glassGrad)" stroke="#374B5E" strokeWidth="1.5" />
          {/* Warm Interior Lighting Glow */}
          <ellipse cx="380" cy="370" rx="200" ry="90" fill="url(#livingGlow)" />

          {/* Minimalist Interior Silhouette Furniture */}
          <rect x="230" y="390" width="140" height="40" rx="6" fill="#18232F" />
          <rect x="250" y="375" width="100" height="15" rx="3" fill="#243445" />
          {/* Pendant architectural lighting above dining/island */}
          <line x1="480" y1="270" x2="480" y2="330" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="480" cy="335" r="5" fill="#FFEAA7" />
          <circle cx="480" cy="335" r="14" fill="#FFEAA7" fillOpacity="0.25" />

          {/* Structural Concrete Columns */}
          <rect x="180" y="270" width="12" height="200" fill="#2B3A49" />
          <rect x="360" y="270" width="8" height="200" fill="#2B3A49" />
          <rect x="490" y="270" width="8" height="200" fill="#2B3A49" />
          <rect x="600" y="270" width="14" height="200" fill="#2B3A49" />

          {/* Timber Accent Louver Wall / Ground Entrance Suite */}
          <rect x="614" y="270" width="226" height="200" fill="url(#timberGrad)" />
          {/* Vertical Louvers */}
          {[630, 650, 670, 690, 710, 730, 750, 770, 790, 810, 830].map((x) => (
            <line key={x} x1={x} y1="270" x2={x} y2="470" stroke="#1C120B" strokeWidth="2" />
          ))}
          {/* Architectural Entrance Portal */}
          <rect x="670" y="310" width="90" height="160" fill="#0B131C" stroke="#486581" strokeWidth="1.5" />
          {/* Door Handle with subtle LED illumination */}
          <line x1="745" y1="380" x2="745" y2="430" stroke="#00D7F0" strokeWidth="2.5" strokeLinecap="round" />

          {/* CANTILEVERED UPPER FLOOR MASTER SUITE */}
          {/* Concrete Floating Box */}
          <polygon points="140,130 760,130 760,270 140,270" fill="url(#concreteGrad)" stroke="#486581" strokeWidth="1.5" />
          {/* Upper Glass Ribbon Balcony */}
          <rect x="220" y="160" width="460" height="100" fill="url(#glassGrad)" stroke="#374B5E" strokeWidth="1" />
          {/* Upper Cool Interior Glow */}
          <ellipse cx="440" cy="200" rx="190" ry="50" fill="url(#upperGlow)" />
          {/* Architectural Mullions */}
          <line x1="330" y1="160" x2="330" y2="260" stroke="#486581" strokeWidth="1" />
          <line x1="450" y1="160" x2="450" y2="260" stroke="#486581" strokeWidth="1" />
          <line x1="570" y1="160" x2="570" y2="260" stroke="#486581" strokeWidth="1" />

          {/* Glass Railing */}
          <rect x="180" y="240" width="530" height="28" fill="#00D7F0" fillOpacity="0.08" stroke="#00D7F0" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Roof Overhang & Linear Concealed Cove */}
          <rect x="110" y="115" width="810" height="18" rx="2" fill="#1B2633" />
          {/* Concealed Under-Eave Linear Warm Accent */}
          <line x1="130" y1="133" x2="750" y2="133" stroke="#FFC078" strokeWidth="2.5" strokeOpacity="0.8" />
          <line x1="190" y1="270" x2="600" y2="270" stroke="#00D7F0" strokeWidth="2" strokeOpacity="0.7" />

          {/* Tropical Landscaping (Silhouettes of fronds & palms) */}
          <path d="M 60 480 Q 80 430 110 420 Q 95 445 90 480 Z" fill="#0E1923" />
          <path d="M 90 480 Q 120 410 160 400 Q 135 435 120 480 Z" fill="#13202E" />
          <path d="M 850 480 Q 890 390 940 380 Q 920 430 890 480 Z" fill="#0E1923" />
          <path d="M 820 480 Q 850 420 890 410 Q 870 450 850 480 Z" fill="#13202E" />

          {/* ACTIVE CATEGORY VISUAL PULSE OVERLAYS */}
          {activeCategory === 'security' && (
            <g className="animate-pulse">
              {/* Perimeter Curtain Boundary Lines */}
              <line x1="100" y1="465" x2="900" y2="465" stroke="#00D7F0" strokeWidth="2" strokeDasharray="6 4" />
              <rect x="175" y="265" width="430" height="210" fill="#00D7F0" fillOpacity="0.06" stroke="#00D7F0" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="670" cy="390" r="18" fill="#00D7F0" fillOpacity="0.2" stroke="#00D7F0" strokeWidth="2" />
            </g>
          )}

          {activeCategory === 'climate' && (
            <g className="animate-pulse">
              {/* HVAC Microclimate Airflows */}
              <path d="M 380 275 Q 400 320 420 370" stroke="#00D7F0" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="4 3" />
              <path d="M 460 165 Q 480 200 500 240" stroke="#00D7F0" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="4 3" />
              <rect x="420" y="280" width="80" height="15" rx="3" fill="#00D7F0" fillOpacity="0.2" stroke="#00D7F0" strokeWidth="1" />
            </g>
          )}

          {activeCategory === 'lighting' && (
            <g className="animate-pulse">
              {/* Highlight Tunable Coves */}
              <line x1="120" y1="133" x2="750" y2="133" stroke="#FFEAA7" strokeWidth="4" />
              <line x1="190" y1="270" x2="600" y2="270" stroke="#FFEAA7" strokeWidth="3" />
              <circle cx="480" cy="335" r="28" fill="#FFEAA7" fillOpacity="0.35" />
            </g>
          )}

          {activeCategory === 'audio' && (
            <g className="animate-pulse">
              {/* Sound Dispersion Waves */}
              <circle cx="340" cy="310" r="16" fill="none" stroke="#00D7F0" strokeWidth="1.2" strokeOpacity="0.8" />
              <circle cx="340" cy="310" r="32" fill="none" stroke="#00D7F0" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
              <circle cx="700" cy="460" r="16" fill="none" stroke="#00D7F0" strokeWidth="1.2" strokeOpacity="0.8" />
              <circle cx="700" cy="460" r="30" fill="none" stroke="#00D7F0" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
            </g>
          )}

          {activeCategory === 'access' && (
            <g className="animate-pulse">
              {/* Doorway Access Beam */}
              <circle cx="715" cy="405" r="22" fill="#00D7F0" fillOpacity="0.25" stroke="#00D7F0" strokeWidth="2" />
              <line x1="715" y1="310" x2="715" y2="470" stroke="#00D7F0" strokeWidth="1.5" strokeDasharray="4 2" />
            </g>
          )}

          {activeCategory === 'energy' && (
            <g className="animate-pulse">
              {/* Solar & Distribution Bus */}
              <line x1="150" y1="115" x2="750" y2="115" stroke="#10B981" strokeWidth="3" />
              <circle cx="830" cy="440" r="16" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" />
            </g>
          )}
        </svg>

        {/* INTERACTIVE ARCHITECTURAL HOTSPOTS */}
        <div className="absolute inset-0 pointer-events-auto">
          {/* Hotspot 1: Entrance / Access & Intercom */}
          <button
            type="button"
            onClick={() => onHotspotClick?.('access')}
            className={`group absolute top-[62%] left-[71.5%] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none transition-transform hover:scale-110 cursor-pointer ${
              activeHotspotId === 'access' || activeCategory === 'access' ? 'scale-115' : ''
            }`}
            aria-label="Access Hotspot - Biometric Entrance"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D7F0] opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00D7F0] border-2 border-white shadow-lg" />
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Access & Intercom
            </span>
          </button>

          {/* Hotspot 2: Living Room / Lighting & Automation */}
          <button
            type="button"
            onClick={() => onHotspotClick?.('lighting')}
            className={`group absolute top-[52%] left-[38%] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none transition-transform hover:scale-110 cursor-pointer ${
              activeHotspotId === 'lighting' || activeCategory === 'lighting' ? 'scale-115' : ''
            }`}
            aria-label="Lighting Hotspot - Living Room"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB347] opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFB347] border-2 border-white shadow-lg" />
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Lighting & Automation
            </span>
          </button>

          {/* Hotspot 3: Upper Suite / Climate & HVAC */}
          <button
            type="button"
            onClick={() => onHotspotClick?.('climate')}
            className={`group absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none transition-transform hover:scale-110 cursor-pointer ${
              activeHotspotId === 'climate' || activeCategory === 'climate' ? 'scale-115' : ''
            }`}
            aria-label="Climate Hotspot - Upper Floor"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D7F0] opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00D7F0] border-2 border-white shadow-lg" />
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Climate & HVAC
            </span>
          </button>

          {/* Hotspot 4: Terrace / Track Audio */}
          <button
            type="button"
            onClick={() => onHotspotClick?.('audio')}
            className={`group absolute top-[70%] left-[69%] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none transition-transform hover:scale-110 cursor-pointer ${
              activeHotspotId === 'audio' || activeCategory === 'audio' ? 'scale-115' : ''
            }`}
            aria-label="Audio Hotspot - Terrace Acoustics"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#A855F7] border-2 border-white shadow-lg" />
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Audio Pro Sound
            </span>
          </button>

          {/* Hotspot 5: Perimeter / Security */}
          <button
            type="button"
            onClick={() => onHotspotClick?.('security')}
            className={`group absolute top-[74%] left-[16%] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none transition-transform hover:scale-110 cursor-pointer ${
              activeHotspotId === 'security' || activeCategory === 'security' ? 'scale-115' : ''
            }`}
            aria-label="Security Hotspot - Boundary Perimeter"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EF4444] border-2 border-white shadow-lg" />
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded border border-white/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Paradox Perimeter
            </span>
          </button>
        </div>

        {/* Minimal Editorial Architectural Watermark Annotation */}
        <div className="absolute bottom-4 left-6 flex items-center gap-3 text-[11px] text-white/50 tracking-wider uppercase font-mono">
          <span>ARCHITECTURAL PROJECTION</span>
          <span className="text-white/20">|</span>
          <span className="text-[#00D7F0]">CONNECTED RESIDENCE 1000m²</span>
        </div>
      </div>
    );
  }

  if (type === 'smart-living-interior') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#0C1219] border border-white/10 select-none ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#080D13] via-[#121B24] to-[#1A2836]" />
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="windowView" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A3D52" />
              <stop offset="60%" stopColor="#1B2B3C" />
              <stop offset="100%" stopColor="#0B131C" />
            </linearGradient>
            <radialGradient id="interiorAmbient" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FFE099" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#FFC56E" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0C1219" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Floor to Ceiling Architectural Panoramic Window */}
          <polygon points="40,40 500,40 500,520 40,560" fill="url(#windowView)" stroke="#374B5E" strokeWidth="2" />
          {/* Subtle Skyline City Lights */}
          <line x1="80" y1="360" x2="480" y2="360" stroke="#FFEAA7" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 6" />
          <line x1="120" y1="380" x2="460" y2="380" stroke="#00D7F0" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="2 4" />

          {/* Minimalist Sheer Motorized Drapes at left */}
          <polygon points="40,40 140,40 120,550 40,560" fill="#E2E8F0" fillOpacity="0.12" />

          {/* Interior Warm Ambient Lighting Overlay */}
          <rect x="0" y="0" width="800" height="600" fill="url(#interiorAmbient)" />

          {/* Contemporary Floating Credenza / Wall Panel */}
          <rect x="520" y="180" width="250" height="340" fill="#18232F" stroke="#2D3E4F" strokeWidth="1" />
          {/* In-Wall Flush Touchscreen Panel (Akubela HyPanel) */}
          <rect x="580" y="270" width="60" height="90" rx="4" fill="#0A0E13" stroke="#00D7F0" strokeWidth="1.5" />
          <rect x="584" y="276" width="52" height="78" rx="2" fill="#00D7F0" fillOpacity="0.2" />
          <circle cx="610" cy="315" r="8" fill="#00D7F0" fillOpacity="0.8" />

          {/* Designer Low Lounge Sofa */}
          <polygon points="180,420 540,400 580,550 140,570" fill="#1E2B38" stroke="#374B5E" strokeWidth="1" />
          <polygon points="200,380 500,365 520,420 180,440" fill="#293A4C" />

          {/* Concealed Ceiling Cove Light Strip */}
          <line x1="60" y1="40" x2="760" y2="40" stroke="#FFEAA7" strokeWidth="3" strokeOpacity="0.8" />
          <line x1="520" y1="180" x2="770" y2="180" stroke="#00D7F0" strokeWidth="2" strokeOpacity="0.7" />
        </svg>

        <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-medium tracking-wide text-white uppercase border border-white/10">
          Smart Living · Interior Architecture
        </div>
      </div>
    );
  }

  if (type === 'commercial-atrium') {
    return (
      <div className={`relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#0A1017] border border-white/10 select-none ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111C28] via-[#0C141F] to-[#070C12]" />
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="atriumGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E3345" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B1521" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="turnstileGlass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D7F0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0099B8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Multi-story Atrium High-Glass Facade */}
          <rect x="80" y="40" width="640" height="320" fill="url(#atriumGlass)" stroke="#2C4052" strokeWidth="1.5" />
          {/* Vertical Glass Mullions */}
          {[160, 240, 320, 400, 480, 560, 640].map((x) => (
            <line key={x} x1={x} y1="40" x2={x} y2="360" stroke="#253747" strokeWidth="1.5" />
          ))}
          {/* Horizontal Transoms */}
          <line x1="80" y1="140" x2="720" y2="140" stroke="#253747" strokeWidth="1.5" />
          <line x1="80" y1="240" x2="720" y2="240" stroke="#253747" strokeWidth="1.5" />

          {/* Polished Marble Ground Floor */}
          <polygon points="20,460 780,460 800,600 0,600" fill="#0E1622" />
          <line x1="60" y1="520" x2="740" y2="520" stroke="#1D2A3A" strokeWidth="1" />

          {/* Modern Optical Speed Gates / Turnstiles */}
          <rect x="240" y="420" width="30" height="70" rx="3" fill="#1C2735" stroke="#3D5369" strokeWidth="1" />
          <rect x="340" y="420" width="30" height="70" rx="3" fill="#1C2735" stroke="#3D5369" strokeWidth="1" />
          <rect x="440" y="420" width="30" height="70" rx="3" fill="#1C2735" stroke="#3D5369" strokeWidth="1" />
          <rect x="540" y="420" width="30" height="70" rx="3" fill="#1C2735" stroke="#3D5369" strokeWidth="1" />

          {/* Clear Glass Turnstile Wings */}
          <polygon points="270,430 330,430 330,480 270,480" fill="url(#turnstileGlass)" stroke="#00D7F0" strokeWidth="1" />
          <polygon points="370,430 430,430 430,480 370,480" fill="url(#turnstileGlass)" stroke="#00D7F0" strokeWidth="1" />
          <polygon points="470,430 530,430 530,480 470,480" fill="url(#turnstileGlass)" stroke="#00D7F0" strokeWidth="1" />

          {/* Biometric Face Recognition Terminals mounted on pedestals */}
          <circle cx="255" cy="405" r="5" fill="#00D7F0" />
          <circle cx="355" cy="405" r="5" fill="#00D7F0" />
          <circle cx="455" cy="405" r="5" fill="#00D7F0" />
          <circle cx="555" cy="405" r="5" fill="#00D7F0" />

          {/* Overhead Architectural Lighting Tracks */}
          <line x1="120" y1="80" x2="680" y2="80" stroke="#3D5369" strokeWidth="3" />
          {/* Audio Pro Track Speakers clipped into rails */}
          <rect x="220" y="80" width="16" height="24" rx="2" fill="#E2E8F0" />
          <rect x="420" y="80" width="16" height="24" rx="2" fill="#E2E8F0" />
          <rect x="580" y="80" width="16" height="24" rx="2" fill="#E2E8F0" />
        </svg>

        <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-medium tracking-wide text-white uppercase border border-white/10">
          Commercial · Executive Headquarters
        </div>
      </div>
    );
  }

  if (type === 'southeast-asia-map') {
    return (
      <div className={`relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-[#070D14] border border-white/10 select-none ${className}`}>
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[#101D2D] via-[#09121D] to-[#04080D]" />

        <svg className="w-full h-full" viewBox="0 0 900 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Stylized Minimal Geographic Contours (Southeast Asia / Indochina / Peninsular Malaysia / Borneo / Vietnam) */}
          <g stroke="#1E2F40" strokeWidth="1.2" fill="#0E1824" strokeLinejoin="round">
            {/* Indochina & Vietnam S-Shape */}
            <path d="M 440 90 L 490 100 L 520 130 L 535 170 L 510 210 L 490 260 L 510 310 L 500 350 L 470 370 L 450 360 L 460 320 L 440 280 L 400 240 L 410 180 L 390 140 Z" />
            {/* Peninsular Malaysia */}
            <path d="M 370 310 L 390 330 L 405 370 L 415 420 L 405 440 L 385 430 L 375 380 L 360 340 Z" />
            {/* Borneo (Sabah & Sarawak) */}
            <path d="M 520 370 L 570 350 L 630 360 L 660 390 L 650 430 L 580 440 L 530 420 Z" />
            {/* Singapore marker area */}
            <circle cx="417" cy="442" r="3" fill="#1E2F40" />
            {/* Northern Neighbors / Thailand / regional context */}
            <path d="M 360 210 L 400 240 L 390 310 L 360 300 L 340 240 Z" />
          </g>

          {/* Connectivity Wave Lines linking KL and Ho Chi Minh City */}
          <path
            d="M 395 390 Q 450 350 495 345"
            stroke="#00D7F0"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="animate-pulse"
          />

          {/* Regional Office Pulse Point 1: Kuala Lumpur, Malaysia (HQ) */}
          <g transform="translate(395, 390)">
            <circle cx="0" cy="0" r="24" fill="#00D7F0" fillOpacity="0.12" className="animate-ping" />
            <circle cx="0" cy="0" r="14" fill="#00D7F0" fillOpacity="0.3" />
            <circle cx="0" cy="0" r="6" fill="#00D7F0" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          {/* Regional Office Pulse Point 2: Ho Chi Minh City, Vietnam */}
          <g transform="translate(495, 345)">
            <circle cx="0" cy="0" r="20" fill="#00D7F0" fillOpacity="0.12" className="animate-ping" />
            <circle cx="0" cy="0" r="12" fill="#00D7F0" fillOpacity="0.3" />
            <circle cx="0" cy="0" r="5" fill="#00D7F0" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          {/* Global Partner Links */}
          <path d="M 395 390 Q 280 280 150 180" stroke="#486581" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
          <path d="M 495 345 Q 600 220 750 140" stroke="#486581" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
        </svg>

        {/* Floating Architectural Cards for Offices */}
        <div className="absolute top-6 left-6 max-w-xs p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-xl text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D7F0]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#00D7F0]">HEADQUARTERS</span>
          </div>
          <h4 className="text-sm font-bold text-white">Kuala Lumpur / Selangor</h4>
          <p className="text-xs text-slate-300 mt-0.5">Central Logistics Hub & Engineering Support</p>
          <div className="mt-2 text-[11px] text-slate-400">
            Setiawalk, Puchong · ASEAN Central Warehousing
          </div>
        </div>

        <div className="absolute bottom-6 right-6 max-w-xs p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-xl text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D7F0]" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#00D7F0]">REGIONAL HUB</span>
          </div>
          <h4 className="text-sm font-bold text-white">Ho Chi Minh City</h4>
          <p className="text-xs text-slate-300 mt-0.5">Indochina Commercial Office & Local Inventory</p>
          <div className="mt-2 text-[11px] text-slate-400">
            To Hien Thanh St, District 10 · Local Buffer Inventory
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Project Visual Archetypes
  return (
    <div className={`relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-[#0A1017] border border-white/10 select-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#080E16] via-[#101B27] to-[#1C2C3E]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D7F0] mb-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
        <span className="text-xs font-mono tracking-widest text-[#00D7F0] uppercase">ARCHITECTURAL ENVIRONMENT</span>
        <span className="text-sm font-semibold text-white mt-1">Connected Technology Ecosystem</span>
      </div>
    </div>
  );
};
