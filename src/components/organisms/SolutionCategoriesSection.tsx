import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, KeyRound, Lightbulb, Music, Thermometer, Zap } from 'lucide-react';
import { SOLUTIONS_CATEGORIES } from '../../data/ecosystemData';

const SOLUTION_CARD_IMAGES: Record<string, string> = {
  security: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
  'access-intercom': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
  'lighting-automation': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  audio: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  'climate-hvac': 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
  'energy-management': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
};

interface SolutionCategoriesSectionProps {
  onOpenConsultation?: () => void;
}

export const SolutionCategoriesSection: React.FC<SolutionCategoriesSectionProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  const getIcon = (id: string) => {
    switch (id) {
      case 'security':
        return <Shield size={20} />;
      case 'access-intercom':
        return <KeyRound size={20} />;
      case 'lighting-automation':
        return <Lightbulb size={20} />;
      case 'audio':
        return <Music size={20} />;
      case 'climate-hvac':
        return <Thermometer size={20} />;
      case 'energy-management':
        return <Zap size={20} />;
      default:
        return <Shield size={20} />;
    }
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-white text-[#080F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Direct & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Connected Systems for Every Space
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Six synchronized disciplines engineered to work in harmony—protecting, illuminating, and orchestrating modern architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/solutions')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#00D7F0] transition-colors cursor-pointer"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* 6 Clean Editorial Solution Cards in a 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS_CATEGORIES.map((solution) => {
            const cardImg = SOLUTION_CARD_IMAGES[solution.id] || SOLUTION_CARD_IMAGES.security;
            return (
              <div
                key={solution.id}
                onClick={() => navigate(`/solutions?category=${solution.id}`)}
                className="group relative p-7 sm:p-8 rounded-3xl overflow-hidden bg-[#091017] text-white border border-slate-200/20 hover:border-[#00D7F0] transition-all duration-300 flex flex-col justify-between min-h-[380px] cursor-pointer hover:shadow-xl"
              >
                {/* Photographic Background Layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cardImg}
                    alt={solution.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E14] via-[#080E14]/85 to-[#080E14]/40 pointer-events-none" />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Icon & Brand Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#00D7F0]">
                      {getIcon(solution.id)}
                    </div>
                    <span className="text-xs text-white/70 font-medium">
                      {solution.partnerBrands.join(' · ')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D7F0] transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-3">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 truncate max-w-[180px]">
                    {solution.subcategories.slice(0, 2).join(' · ')}
                  </span>
                  <div className="flex items-center gap-1 font-semibold text-[#00D7F0] group-hover:text-white transition-colors">
                    <span>View System</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
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

export default SolutionCategoriesSection;
