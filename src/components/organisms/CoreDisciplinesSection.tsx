import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, KeyRound, Lightbulb, Music, Thermometer, Zap, ArrowRight } from 'lucide-react';

interface CoreDisciplinesSectionProps {
  onOpenConsultation?: () => void;
}

const DISCIPLINES = [
  {
    id: 'access-intercom',
    name: 'Access & Intercom',
    icon: <KeyRound size={22} className="text-[#00D7F0]" />,
    brand: 'Akuvox · Akubela',
    desc: 'Marine-grade outdoor stations with <0.2s anti-spoof facial recognition, mobile credentials, and smart door locks.',
    category: 'access-intercom'
  },
  {
    id: 'security',
    name: 'Perimeter Security',
    icon: <Shield size={22} className="text-[#00D7F0]" />,
    brand: 'Paradox',
    desc: 'Grade-3 verified dual-optic curtain detection protecting boundaries and sliding glass without false alarms.',
    category: 'security'
  },
  {
    id: 'lighting-automation',
    name: 'Lighting & Shading',
    icon: <Lightbulb size={22} className="text-[#00D7F0]" />,
    brand: 'Akubela',
    desc: 'Tunable white DALI-2 circuits tracking natural circadian rhythms with whisper-quiet motorized drapery.',
    category: 'lighting-automation'
  },
  {
    id: 'audio',
    name: 'Acoustic Sound',
    icon: <Music size={22} className="text-[#00D7F0]" />,
    brand: 'Audio Pro',
    desc: 'Scandinavian track speakers snapping directly into lighting rails with zero conduit cutting over 1.9GHz DECT.',
    category: 'audio'
  },
  {
    id: 'climate-hvac',
    name: 'Climate & HVAC',
    icon: <Thermometer size={22} className="text-[#00D7F0]" />,
    brand: 'Akubela · Proscalar',
    desc: 'Direct VRV/VRF protocol integration with automated occupancy setbacks to conserve cooling expenditure.',
    category: 'climate-hvac'
  },
  {
    id: 'energy-management',
    name: 'Energy Management',
    icon: <Zap size={22} className="text-[#00D7F0]" />,
    brand: 'Proscalar',
    desc: 'Sub-metered DIN branch circuit telemetry pinpointing phantom power draws with automated peak-shaving.',
    category: 'energy-management'
  }
];

export const CoreDisciplinesSection: React.FC<CoreDisciplinesSectionProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAF9F6] text-[#080F14] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Six essential disciplines.<br />One unified ecosystem.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Specialized subsystems engineered to communicate flawlessly together across residential and commercial architecture.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation ? onOpenConsultation() : navigate('/solutions')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#00D7F0] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Request System Schedule</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Clean 6-Card Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DISCIPLINES.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/solutions?category=${item.category}`)}
              className="group p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#00D7F0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                    {item.brand}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00D7F0] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#00D7F0] transition-colors">
                <span>View Specifications</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDisciplinesSection;
