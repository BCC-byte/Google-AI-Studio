import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check, Zap, Shield, TrendingDown, Sparkles } from 'lucide-react';

interface BenefitItem {
  id: string;
  num: string;
  title: string;
  description: string;
  system: string;
  brand: string;
}

const BENEFITS: BenefitItem[] = [
  {
    id: '01',
    num: '01',
    title: 'PERSONALIZATION',
    description:
      'Create your own routines and schedules that synchronize to your specific needs, providing a customized blend of comfort and convenience in your ideal life.',
    system: 'Smart Scenes & Touchscreens',
    brand: 'Akubela HyPanel',
  },
  {
    id: '02',
    num: '02',
    title: 'CONVENIENCE',
    description:
      'Automate everyday tasks like controlling lights, curtains, or climate with simple voice commands, tactile scene controllers, or through a unified mobile app.',
    system: 'Ambient Automation',
    brand: 'Akubela & Akuvox',
  },
  {
    id: '03',
    num: '03',
    title: 'ENHANCED SECURITY',
    description:
      'Smart home security systems provide 24/7 monitoring with high-resolution biometric entry cameras, microwave motion sensors, and door sensors for enhanced protection.',
    system: 'Perimeter & Access Control',
    brand: 'Akuvox & Paradox',
  },
  {
    id: '04',
    num: '04',
    title: 'ENERGY EFFICIENCY',
    description:
      'By automatically adjusting settings based on your habits and presence, our smart systems ensure that no energy is wasted, significantly lowering your utility bills.',
    system: 'HVAC & Lighting Optimization',
    brand: 'Akubela Zigbee 3.0',
  },
  {
    id: '05',
    num: '05',
    title: 'SAFETY FEATURES',
    description:
      'In addition to security, smart systems deploy optical sensors that detect hazards like smoke, carbon monoxide, or water leaks to immediately alert you and prevent damage.',
    system: 'Life Safety & Alarm Partitions',
    brand: 'Paradox Security',
  },
  {
    id: '06',
    num: '06',
    title: 'ACCESSIBILITY',
    description:
      'Our features are particularly beneficial for all generations. Voice triggers, intuitive in-wall touchscreens, and automated pathway illumination provide effortless living.',
    system: 'Inclusive Touch & Audio',
    brand: 'Audio Pro & Akubela',
  },
  {
    id: '07',
    num: '07',
    title: 'COST SAVINGS',
    description:
      'By integrating advanced systems that control energy usage in real-time, these durable commercial-grade solutions ensure every subsystem operates with lasting efficiency.',
    system: 'Commercial Grade Reliability',
    brand: 'Proscalar & Paradox',
  },
  {
    id: '08',
    num: '08',
    title: 'FUTURE-READY',
    description:
      'With systems engineered on open protocols (SIP 2.0, Zigbee 3.0, ONVIF), your living space effortlessly adapts to new innovations without requiring major overhauls.',
    system: 'Open Protocol Architecture',
    brand: 'Ions Global Distribution',
  },
];

export const KeyBenefitsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string>('01');

  const activeBenefit = BENEFITS.find((b) => b.id === activeId) || BENEFITS[0];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAFAF9] border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Header matching the exact reference style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-20">
          {/* Left Header: Pill badge + Bold Headline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280] text-[11px] font-mono uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A6F]" />
              <span>01 · Features & Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#080F14] leading-[1.08] uppercase">
              THE KEY BENEFITS <br className="hidden sm:block" />
              OF SMART LIVING
            </h2>
          </div>

          {/* Right Header: Editorial Quote with warm copper italicized highlights */}
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#080F14] leading-[1.3] tracking-tight uppercase">
              IMAGINE{' '}
              <span className="font-serif italic font-normal text-[#C59A6F] lowercase tracking-normal">
                a space that
              </span>{' '}
              IS SO IN TUNE WITH YOU, IT{' '}
              <span className="font-serif italic font-normal text-[#C59A6F] lowercase tracking-normal">
                knows your needs
              </span>{' '}
              BEFORE YOU DO
            </p>
          </div>
        </div>

        {/* Interactive Benefits Grid: 8 Numbered Rows on Left, Tall Architectural Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered List 01 to 08 */}
          <div className="lg:col-span-7 space-y-2">
            {BENEFITS.map((benefit) => {
              const isSelected = activeId === benefit.id;
              return (
                <div
                  key={benefit.id}
                  onClick={() => setActiveId(benefit.id)}
                  onMouseEnter={() => setActiveId(benefit.id)}
                  className={`group relative p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-[#C59A6F]/60 shadow-md translate-x-1'
                      : 'bg-transparent border-transparent hover:bg-white/70 hover:border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number in warm copper accent */}
                    <span
                      className={`text-lg sm:text-xl font-mono font-bold tracking-tight transition-colors shrink-0 ${
                        isSelected ? 'text-[#C59A6F]' : 'text-[#C59A6F]/75 group-hover:text-[#C59A6F]'
                      }`}
                    >
                      {benefit.num}
                    </span>

                    {/* Title and Description */}
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-bold text-[#080F14] tracking-wide uppercase">
                          {benefit.title}
                        </h3>
                        {isSelected && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#FAF5EE] text-[#C59A6F] border border-[#C59A6F]/30">
                            <Sparkles size={10} />
                            {benefit.brand}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-xl font-normal">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle active indicator line */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#C59A6F]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Tall Vertical Architectural Card with Overlaid Frosted Glass Stats */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-[32px] overflow-hidden aspect-[9/14] sm:aspect-[9/13] shadow-2xl border border-[#E5E7EB] bg-[#0A0D14] group">
              {/* High-res Architectural sunset villa photo */}
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Modernist luxury architectural villa terrace with infinity pool and sunset lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Ambient lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
                  Architectural Showcase
                </span>
                <span className="text-[11px] font-mono text-amber-200/90 font-medium">
                  Active: {activeBenefit.num} / 08
                </span>
              </div>

              {/* Left Floating Dark Frosted Glass Stat Tiles (Exact match to reference) */}
              <div className="absolute left-5 sm:left-6 top-1/3 -translate-y-12 space-y-3 max-w-[170px] z-10">
                {/* Tile 1: Energy Savings */}
                <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:bg-black/70 transition-colors">
                  <div className="text-[9px] uppercase tracking-wider font-mono text-slate-300">
                    Energy Savings
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    20%
                  </div>
                </div>

                {/* Tile 2: Home Security */}
                <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:bg-black/70 transition-colors">
                  <div className="text-[9px] uppercase tracking-wider font-mono text-slate-300">
                    Home Security
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    24/7
                  </div>
                </div>

                {/* Tile 3: Costs Saved */}
                <div className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:bg-black/70 transition-colors">
                  <div className="text-[9px] uppercase tracking-wider font-mono text-slate-300">
                    Costs Saved
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    15%
                  </div>
                </div>
              </div>

              {/* Overlaid Bottom Card (Exact match to reference) */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/65 backdrop-blur-xl border border-white/20 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 block mb-1">
                    System Insights
                  </span>
                  <p className="text-xs sm:text-sm font-bold tracking-tight text-white uppercase leading-snug">
                    DO YOU WANT TO <br className="hidden sm:block" />
                    KNOW MORE PROS?
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/partner')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#080F14] text-xs font-bold hover:bg-[#C59A6F] hover:text-white transition-all cursor-pointer shadow-md group/btn shrink-0"
                >
                  <span>LEARN MORE</span>
                  <span className="w-5 h-5 rounded-full bg-[#080F14] text-white flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#080F14] transition-colors">
                    <ArrowUpRight size={12} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
