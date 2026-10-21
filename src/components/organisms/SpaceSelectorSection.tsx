import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface SpaceSelectorSectionProps {
  onOpenConsultation?: (intent: 'smart-home' | 'commercial') => void;
}

export const SpaceSelectorSection: React.FC<SpaceSelectorSectionProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  return (
    <section id="space-selector-section" className="w-full py-20 sm:py-28 bg-white text-[#080F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header: No noisy eyebrows */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Designed around how you live and work.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Tailored hardware ecosystems crafted for modern residential properties and enterprise commercial facilities.
          </p>
        </div>

        {/* Two Clean Photographic Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: Smart Living */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#0A1017] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[460px] sm:min-h-[520px] border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Background Lifestyle Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Luxury contemporary living room"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-[#080F14]/70 to-black/20 pointer-events-none" />
            </div>

            {/* Top Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/90">
                Residential
              </span>
            </div>

            {/* Bottom Content & CTAs */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Smart Living
                </h3>
                <p className="text-slate-200 text-sm sm:text-base max-w-md mt-2 leading-relaxed">
                  Circadian lighting tracking the sun, whisper-quiet shading, and Scandinavian acoustic warmth throughout your home.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => onOpenConsultation ? onOpenConsultation('smart-home') : navigate('/smart-living')}
                  className="px-6 py-2.5 rounded-full bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Enquire Residential</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/smart-living')}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Features</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Panel 2: Commercial */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#0A1017] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[460px] sm:min-h-[520px] border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Background Lifestyle Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
                alt="Modern corporate headquarters atrium"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-[#080F14]/70 to-black/20 pointer-events-none" />
            </div>

            {/* Top Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-medium text-white/80">
                Enterprise & Commercial
              </span>
            </div>

            {/* Bottom Content & CTAs */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Commercial
                </h3>
                <p className="text-slate-200 text-sm sm:text-base max-w-md mt-2 leading-relaxed">
                  Sub-0.2s turnstile biometrics, cloud-native PoE access, and occupancy-driven HVAC energy reduction.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => onOpenConsultation ? onOpenConsultation('commercial') : navigate('/commercial')}
                  className="px-6 py-2.5 rounded-full bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Enquire Commercial</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/commercial')}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Features</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSelectorSection;
