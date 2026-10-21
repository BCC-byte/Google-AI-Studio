import React from 'react';
import { Button } from '../atoms/Button';
import { CyanArc } from '../atoms/CyanArc';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, ArrowRight } from 'lucide-react';

export const DualTrack: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="dual-track-section" className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <CyanArc width={120} height={12} align="left" className="mb-3" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Two Dedicated Solution Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
            Engineered for Every Project Scale
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            From single luxury residences to multi-site commercial enterprises, our distributed brands provide proven hardware reliability with zero middleman inflation.
          </p>
        </div>

        {/* Dual Track Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Track 1: Smart Home Solutions */}
          <div className="group rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] overflow-hidden flex flex-col justify-between hover:border-[#00D7F0] transition-all duration-300">
            <div>
              {/* Lifestyle Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern luxury villa with architectural lighting and integrated control"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#080F14] text-xs font-semibold shadow-xs">
                  <Home size={14} className="text-[#00D7F0]" />
                  <span>Smart Home Track</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-mono">
                  Distributed Brands: Akubela · Akuvox · Audio Pro · Paradox
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#080F14] mb-2 group-hover:text-[#00D7F0] transition-colors">
                  Smart Home Solutions
                </h3>
                <p className="text-sm sm:text-base text-[#080F14] font-medium leading-snug mb-4">
                  Unify lighting, climate, security, and multiroom acoustics through architectural control interfaces and reliable wireless protocols.
                </p>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                  Engineered for system integrators, interior designers, architects, and luxury homeowners seeking cohesive aesthetics, local-first control, and reliable mobile access.
                </p>

                <div className="space-y-2 text-xs text-[#080F14] pt-2 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Touchscreen wall controllers & tactile Zigbee switches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Smart intercoms with mobile door unlocking & guest passes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Audiophile multiroom sound & centralized life-safety alarms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => navigate('/solutions/smart-home')}
                iconRight={<ArrowRight size={16} />}
              >
                Explore Smart Home Solutions
              </Button>
            </div>
          </div>

          {/* Track 2: Commercial Solutions */}
          <div className="group rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] overflow-hidden flex flex-col justify-between hover:border-[#00D7F0] transition-all duration-300">
            <div>
              {/* Lifestyle Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern commercial corporate headquarters with smart access and collaborative space"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#080F14] text-xs font-semibold shadow-xs">
                  <Building2 size={14} className="text-[#00D7F0]" />
                  <span>Commercial Track</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-mono">
                  Distributed Brands: Akuvox · Audio Pro Business · Proscalar · Paradox
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#080F14] mb-2 group-hover:text-[#00D7F0] transition-colors">
                  Commercial Solutions
                </h3>
                <p className="text-sm sm:text-base text-[#080F14] font-medium leading-snug mb-4">
                  Deploy cloud-managed access control, SIP video entry, and commercial multi-zone sound for corporate, hospitality, and retail properties.
                </p>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                  Engineered for MEP consultants, general contractors, developers, and facilities directors requiring scalable cloud management, zero-server footprints, and commercial warranties.
                </p>

                <div className="space-y-2 text-xs text-[#080F14] pt-2 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Cloud-native access control with digital mobile credentials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Vandal-resistant SIP intercoms with anti-spoof facial recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>Lighting track-mount commercial wireless sound & central alarms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => navigate('/solutions/commercial')}
                iconRight={<ArrowRight size={16} />}
              >
                Explore Commercial Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualTrack;
