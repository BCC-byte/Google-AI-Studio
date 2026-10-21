import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ENVIRONMENTS_LIST } from '../../data/ecosystemData';

const ENV_IMAGES: Record<string, string> = {
  'smart-homes': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
  'corporate-offices': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
  hospitality: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
  'residential-developments': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85',
  education: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85',
  healthcare: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=85',
  industrial: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
};

export const EnvironmentsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 sm:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
            SECTOR ADAPTABILITY
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
            Intelligence for Every Environment.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
            Whether engineering an ultra-luxury private residence or multi-tenant commercial towers across Southeast Asia, our portfolio scales to specific architectural topologies.
          </p>
        </div>

        {/* Asymmetric Editorial Photographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENVIRONMENTS_LIST.map((env) => {
            const envImg = ENV_IMAGES[env.id] || ENV_IMAGES['smart-homes'];
            return (
              <div
                key={env.id}
                onClick={() => navigate(env.id === 'smart-homes' ? '/smart-living' : '/commercial')}
                className={`group relative rounded-3xl overflow-hidden p-8 border border-white/10 hover:border-[#00D7F0] transition-all duration-500 flex flex-col justify-between min-h-[380px] cursor-pointer hover:shadow-2xl ${
                  env.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Photographic Background Layer with Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={envImg}
                    alt={env.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/35 pointer-events-none" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono tracking-wider uppercase text-[#00D7F0] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                      SECTOR PROFILE
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:text-[#00D7F0] group-hover:bg-white transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00D7F0] transition-colors">
                    {env.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    {env.headline}
                  </p>
                  <p className="text-sm text-slate-200 mt-3 leading-relaxed line-clamp-3">
                    {env.description}
                  </p>
                </div>

                {/* Bottom Outcome & Systems Strip */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/15 space-y-1.5">
                  <div className="text-xs text-slate-300">
                    <span className="text-slate-400 font-bold">Key Outcome:</span> {env.keyOutcome}
                  </div>
                  <div className="text-[11px] text-[#00D7F0] font-mono font-semibold">
                    {env.primarySystems.join(' · ')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
