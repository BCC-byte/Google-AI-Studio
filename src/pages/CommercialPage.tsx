import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, KeyRound, Zap, BarChart3, Users, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { ENVIRONMENTS_LIST } from '../data/ecosystemData';
import { ConsultationModal } from '../components/molecules/ConsultationModal';

const INDUSTRY_IMAGES: Record<string, string> = {
  'smart-homes': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
  'corporate-offices': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
  hospitality: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
  'residential-developments': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85',
  education: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85',
  healthcare: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=85',
  industrial: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
};

export const CommercialPage: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('corporate-offices');
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const commercialOutcomes = [
    {
      title: 'Strengthen Security',
      icon: <Shield size={20} className="text-[#00D7F0]" />,
      headline: 'Grade-3 physical perimeter and multi-partition intrusion detection',
      desc: 'Centralized Paradox bus processors and tamper-resistant OSDPv2 door readers ensure unyielding hardware defense across server rooms, executive suites, and logistical loading docks.'
    },
    {
      title: 'Simplify Access',
      icon: <KeyRound size={20} className="text-[#00D7F0]" />,
      headline: 'Sub-0.2s visible light biometrics and mobile smartphone credentials',
      desc: 'Eliminate lost plastic keycards. Akuvox facial recognition speed gates and Proscalar cloud-native PoE controllers transit thousands of employees seamlessly during morning peak hours.'
    },
    {
      title: 'Reduce Energy Consumption',
      icon: <Zap size={20} className="text-[#00D7F0]" />,
      headline: 'Occupancy intelligence coordinates lighting and HVAC based on actual space utilization',
      desc: 'Occupancy intelligence coordinates lighting and HVAC based on how spaces are actually being used. Unoccupied meeting rooms automatically revert to eco setbacks, shaving 25–40% off utility expenditure.'
    },
    {
      title: 'Automate Operations',
      icon: <Building2 size={20} className="text-[#00D7F0]" />,
      headline: 'Elevator destination dispatch and scheduled facility routines',
      desc: 'Synchronize tenant access with building elevators to dispatch cars to authorized floors without button contact, while lighting tracks and background audio adjust to operational schedules.'
    },
    {
      title: 'Improve Visibility',
      icon: <BarChart3 size={20} className="text-[#00D7F0]" />,
      headline: 'Centralized cloud management across multiple regional properties',
      desc: 'Property directors oversee access logs, environmental air quality, and branch power draw across multiple branches from a single unified browser dashboard.'
    },
    {
      title: 'Enhance Occupant Experience',
      icon: <Users size={20} className="text-[#00D7F0]" />,
      headline: 'Frictionless visitor passes and acoustic wellbeing',
      desc: 'Calendar-synced temporary QR passes welcome guests effortlessly, while Audio Pro commercial 1.9GHz track speakers create fatigue-free acoustic warmth that lengthens customer dwell time.'
    }
  ];

  const currentEnv =
    ENVIRONMENTS_LIST.find((e) => e.id === selectedIndustryId) || ENVIRONMENTS_LIST[1];

  const currentIndustryImg =
    INDUSTRY_IMAGES[selectedIndustryId] || INDUSTRY_IMAGES['corporate-offices'];

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. CINEMATIC HERO WITH LIFESTYLE PHOTOGRAPHY */}
      <section className="relative w-full py-24 sm:py-36 bg-[#080F14] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Corporate modern atrium with biometric access control and smart lighting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080F14] via-[#080F14]/85 to-[#080F14]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Smarter Buildings.<br />
              Better Experiences.
            </h1>
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Integrated technologies that improve security, efficiency and experience across modern spaces. Designed for facility directors, commercial developers, and property operators.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#00D7F0] text-[#080F14] font-bold text-xs sm:text-sm hover:bg-[#38E3F8] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Commercial Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMERCIAL OUTCOMES */}
      <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Commercial Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              We focus on business results rather than isolated hardware. Every solution is specified to optimize operational flow, safeguard property, and decrease overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialOutcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#00D7F0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 text-[#00D7F0]">
                    {outcome.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{outcome.title}</h3>
                  <p className="text-xs font-semibold text-slate-700 mb-3 leading-snug">{outcome.headline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL INDUSTRY NAVIGATION WITH PHOTOGRAPHY */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Engineered by Industry
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select an industry to examine specialized deployment blueprints across Southeast Asia.
            </p>
          </div>

          {/* Industry Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {ENVIRONMENTS_LIST.map((env) => {
              const isSelected = selectedIndustryId === env.id;
              return (
                <button
                  key={env.id}
                  type="button"
                  onClick={() => setSelectedIndustryId(env.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {env.name}
                </button>
              );
            })}
          </div>

          {/* Industry Photographic Split Box */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#091017] text-white border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Photographic View of Sector */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-16/10 relative bg-slate-900 border border-white/10">
              <img
                src={currentIndustryImg}
                alt={currentEnv.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D7F0] font-bold block">
                    SECTOR BLUEPRINT
                  </span>
                  <span className="text-lg font-bold text-white">
                    {currentEnv.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Deliverables Column */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono text-[#00D7F0] uppercase tracking-wider font-bold block">
                SPECIALIZED ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentEnv.name}
              </h3>
              <p className="text-base text-slate-200 font-medium">{currentEnv.headline}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{currentEnv.description}</p>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Core Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentEnv.primarySystems.map((sys) => (
                    <span key={sys} className="px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-[#00D7F0] border border-white/10">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Operational Deliverable
                </span>
                <div className="text-lg font-bold text-white">
                  {currentEnv.keyOutcome}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Discuss {currentEnv.name} Tender</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} defaultIntent="commercial" />
    </div>
  );
};

export default CommercialPage;
