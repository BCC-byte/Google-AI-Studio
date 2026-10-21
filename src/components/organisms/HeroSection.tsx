import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ConsultationModal } from '../molecules/ConsultationModal';

interface FeaturedBrandSpec {
  id: string;
  name: string;
  badge: string;
  categoryTag: string;
  modelName: string;
  image: string;
  summary: string;
  brandPath: string;
}

const FEATURED_BRANDS: FeaturedBrandSpec[] = [
  {
    id: 'akubela',
    name: 'Akubela',
    badge: 'Red Dot Winner 2025',
    categoryTag: 'SMART LIVING & TOUCHSCREENS',
    modelName: 'HyPanel Ultra (10.36" 2K UHD)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Award-winning in-wall command center with KNX-TP, Zigbee 3.0, and 6-gang relays for unified home control.',
    brandPath: '/brands/akubela'
  },
  {
    id: 'akuvox',
    name: 'Akuvox',
    badge: 'Smart Intercom Leader',
    categoryTag: 'BIOMETRIC ACCESS & VIDEO INTERCOM',
    modelName: 'X915 Android Door Phone',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    summary: 'Marine-grade 316 stainless steel with <0.2s visible light facial recognition and mobile Bluetooth credentials.',
    brandPath: '/brands/akuvox'
  },
  {
    id: 'audio-pro',
    name: 'Audio Pro',
    badge: 'Scandinavian Design',
    categoryTag: '1.9GHz WIRELESS AUDIO',
    modelName: 'SP-3 Track Speaker & VOL-1',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-fidelity audio that snaps directly into standard lighting rails with zero cable cutting.',
    brandPath: '/brands/audio-pro'
  },
  {
    id: 'paradox',
    name: 'Paradox',
    badge: 'Grade-3 Security',
    categoryTag: 'PERIMETER DEFENSE',
    modelName: 'EVO192 & NV780MX Dual Curtain',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'Dual-optic perimeter barriers protecting sliding glass and outdoor zones without false alarms.',
    brandPath: '/brands/paradox'
  },
  {
    id: 'proscalar',
    name: 'Proscalar',
    badge: 'Cloud IoT Telemetry',
    categoryTag: 'ENERGY MANAGEMENT',
    modelName: 'PSR-M16E DIN Telemetry Meter',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    summary: 'Real-time branch circuit sub-metering and automated peak-shaving load prioritization.',
    brandPath: '/brands/proscalar'
  }
];

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('akubela');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const navigate = useNavigate();

  const activeBrand =
    FEATURED_BRANDS.find((b) => b.id === selectedBrandId) || FEATURED_BRANDS[0];

  const triggerEnquiry = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      setConsultModalOpen(true);
    }
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('project-enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      triggerEnquiry();
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-100px)] lg:min-h-[720px] flex items-center bg-[#FAF9F6] text-[#080F14] overflow-hidden select-none">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2600&q=90"
            alt="Warm sunlit luxury interior"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2600&q=90';
            }}
          />
          {/* High-readability gradient scrim: solid white protection behind text on left, smooth transition to reveal background architecture on center & right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-45% to-white/20 pointer-events-none" />
          {/* Subtle ambient darkening/tint for rich contrast */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[680px] bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Direct and Clean with crystal-clear readability */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 max-w-2xl bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-4 sm:p-0 rounded-3xl">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-[#080F14] leading-[1.08] text-balance drop-shadow-xs">
                  Your Global Partner for<br className="hidden sm:inline" />
                  {' '}Smarter Spaces
                </h1>

                <p className="text-base sm:text-lg text-slate-700 sm:text-slate-600 font-medium sm:font-normal leading-relaxed max-w-xl">
                  Unified security, access, lighting, audio, and energy management for modern residences and commercial projects.
                </p>
              </div>

              {/* Action Buttons: Clear & High-Converting */}
              <div className="flex items-center gap-3 flex-wrap pt-1">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="px-8 py-3.5 rounded-full bg-[#080F14] hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/solutions')}
                  className="px-7 py-3.5 rounded-full bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-sm tracking-wide shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Explore Solutions</span>
                  <ArrowUpRight size={17} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Clean Hardware Brands Tabs */}
              <div className="pt-3 space-y-2">
                <span className="text-xs font-medium text-slate-500 block">
                  Hardware Partners
                </span>

                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  {FEATURED_BRANDS.map((brand) => {
                    const isSelected = selectedBrandId === brand.id;
                    return (
                      <button
                        key={brand.id}
                        type="button"
                        onClick={() => setSelectedBrandId(brand.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-slate-900 text-white font-semibold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0] shrink-0" />
                        )}
                        <span>{brand.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Direct Model Note */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 max-w-xl">
                  <div className="truncate pr-4">
                    <span className="font-semibold text-slate-900">{activeBrand.modelName}</span>
                    <span className="text-slate-400 mx-1.5">·</span>
                    <span className="text-slate-500">{activeBrand.categoryTag}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate(activeBrand.brandPath)}
                    className="shrink-0 font-semibold text-slate-900 hover:text-[#00D7F0] flex items-center gap-1 transition-colors cursor-pointer group"
                  >
                    <span>View Brand</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Floating Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[430px] bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl space-y-4">
                
                {/* Top Row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D7F0]" />
                    <span className="font-bold text-slate-900">
                      {activeBrand.name}
                    </span>
                  </div>

                  <span className="text-slate-500 font-medium">
                    {activeBrand.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-900 shadow-xs">
                  <img
                    src={activeBrand.image}
                    alt={activeBrand.modelName}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#00D7F0] font-semibold block">
                      {activeBrand.categoryTag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">
                      {activeBrand.modelName}
                    </h3>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-end justify-between gap-4 pt-1">
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-grow">
                    {activeBrand.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() => triggerEnquiry()}
                    className="shrink-0 px-4 py-2 rounded-xl bg-[#080F14] hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight size={13} className="stroke-[2.5]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
