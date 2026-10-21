import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRANDS_LIST } from '../../data/brandsData';

interface TechnologyEcosystemSectionProps {
  onOpenConsultation?: () => void;
}

export const TechnologyEcosystemSection: React.FC<TechnologyEcosystemSectionProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 sm:py-28 bg-white text-[#080F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Specialist technology partners.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Authorized tier-one distribution agreements with leading global hardware innovators. Certified local inventory, technical support, and warranty coverage across Southeast Asia.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation ? onOpenConsultation() : navigate('/partner')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#00D7F0] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Partner Trade Desk</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 5 Clean Partner Cards with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BRANDS_LIST.map((brand) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/brands/${brand.id}`)}
              className="group rounded-3xl border border-slate-200/90 hover:border-[#00D7F0] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer bg-white"
            >
              {/* Photo */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={brand.imageUrl}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xl font-bold tracking-tight group-hover:text-[#00D7F0] transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-xs text-[#00D7F0] font-semibold">
                    {brand.verticalTag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    {brand.origin || 'Certified International Partner'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {brand.oneLiner}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#00D7F0] transition-colors">
                  <span>Explore {brand.name}</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyEcosystemSection;
