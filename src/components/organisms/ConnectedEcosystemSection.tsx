import React, { useState } from 'react';
import { Shield, KeyRound, Lightbulb, Music, Thermometer, Zap, ArrowRight } from 'lucide-react';
import { ArchitecturalVisual } from '../atoms/ArchitecturalVisual';
import { useNavigate } from 'react-router-dom';

interface CategoryPillar {
  id: string;
  name: string;
  icon: React.ReactNode;
  brand: string;
  highlightArea: string;
  imageUrl: string;
  description: string;
  hardware: string[];
}

const PILLARS: CategoryPillar[] = [
  {
    id: 'security',
    name: 'Security',
    icon: <Shield size={18} />,
    brand: 'Paradox',
    highlightArea: 'Building Envelope & Exterior Boundary',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    description: 'Dual-optic curtain sensors monitor sliding glass doors and patio perimeters without false alarms from pets or tropical weather. Autonomous cellular backup ensures reporting even during cable cuts.',
    hardware: ['Paradox EVO192 Controller', 'NV780MX Dual Curtain Detectors', 'Wireless Photoelectric Smoke Sensors']
  },
  {
    id: 'access',
    name: 'Access',
    icon: <KeyRound size={18} />,
    brand: 'Akuvox & Akubela',
    highlightArea: 'Entry Thresholds, Portals & Gates',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    description: 'Marine-grade outdoor door stations recognize authorized residents in sub-0.2 seconds. Issue temporary dynamic QR passes for guests or couriers directly from your mobile device.',
    hardware: ['Akuvox X915 Android Door Phone', 'Akubela SL60 Palm-Vein Smart Lock', 'Lift Destination Dispatch Integration']
  },
  {
    id: 'lighting',
    name: 'Lighting',
    icon: <Lightbulb size={18} />,
    brand: 'Akubela',
    highlightArea: 'Interior Coves, Pendants & Glazing',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Tunable white DALI-2 circuits track the sun’s circadian arc from energizing 5000K daylight to calming 2200K amber glow. Concealed mmWave radar senses micro-movements to keep lights active while reading.',
    hardware: ['Akubela Aura KNX Switches', 'Dual-Channel DALI-2 Gateway', 'Whisper-Quiet Motorized Drapery']
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: <Music size={18} />,
    brand: 'Audio Pro',
    highlightArea: 'Living Pavilions, Dining & Terraces',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Loudspeakers click effortlessly into standard 3-phase ceiling lighting tracks with zero conduit cutting. Operates over a dedicated 1.9 GHz wireless frequency immune to crowded Wi-Fi networks.',
    hardware: ['Audio Pro SP-3 Track Speakers', 'TX-1 Master 1.9GHz Transmitter', 'VOL-1 6-Zone Tactile Dial']
  },
  {
    id: 'climate',
    name: 'Climate',
    icon: <Thermometer size={18} />,
    brand: 'Akubela & Proscalar',
    highlightArea: 'Central Ducted Chilled Water & VRV/VRF',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    description: 'Direct protocol gateways link Daikin, Mitsubishi, and York VRV systems to in-wall HyPanels. Automatically steps back target cooling in unoccupied rooms to conserve energy.',
    hardware: ['Central AC Multi-Brand Gateway', 'Smart IAQ Multi-Gas Telemetry Sensor', 'Fan Coil Touch Thermostats']
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: <Zap size={18} />,
    brand: 'Proscalar & Akubela',
    highlightArea: 'Electrical Distribution Board',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Sub-metered branch circuits record real-time power consumption, pinpointing phantom draws and executing automated load-shedding during high-tariff grid intervals.',
    hardware: ['PSR-M16E DIN Telemetry Modules', 'Smart Branch Current Transducers', 'Solar Inverter Monitoring']
  }
];

export const ConnectedEcosystemSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('lighting');
  const navigate = useNavigate();

  const currentPillar = PILLARS.find((p) => p.id === activeCategory) || PILLARS[0];

  return (
    <section className="w-full py-24 sm:py-32 bg-[#080F14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
            INTERCONNECTED ARCHITECTURE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            One Space. Connected Intelligence.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
            Technology works better when everything works together. Select any domain below to see how each system synchronizes within the architectural envelope.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PILLARS.map((pillar) => {
            const isSelected = activeCategory === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveCategory(pillar.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#00D7F0] text-[#080F14] shadow-lg shadow-[#00D7F0]/20 font-bold'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <span>{pillar.icon}</span>
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Visualizer & Detail Split with Rich Lifestyle Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Architectural Model */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ArchitecturalVisual
              type="villa-elevation"
              activeCategory={activeCategory}
              onHotspotClick={(cat) => setActiveCategory(cat)}
            />

            {/* Live Lifestyle Snapshot of Selected Domain */}
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
              <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15">
                <img
                  src={currentPillar.imageUrl}
                  alt={currentPillar.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left text-xs">
                <span className="text-[10px] font-mono text-[#00D7F0] uppercase font-bold block">
                  LIFESTYLE DEPLOYMENT SNAPSHOT
                </span>
                <span className="font-semibold text-white text-sm block">
                  {currentPillar.highlightArea}
                </span>
                <span className="text-slate-400 text-xs">
                  Hardware: {currentPillar.brand}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Annotation Card */}
          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#00D7F0] font-bold">
                  ACTIVE DOMAIN · {currentPillar.brand.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentPillar.highlightArea}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentPillar.name} Integration
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Hardware Specification Bullets */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Synchronized Hardware Layer:
                </span>
                <ul className="space-y-2">
                  {currentPillar.hardware.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => navigate('/solutions')}
                className="w-full py-3 rounded-xl bg-[#00D7F0] hover:bg-[#00c0d6] text-[#080F14] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>View All {currentPillar.name} Solutions</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedEcosystemSection;
