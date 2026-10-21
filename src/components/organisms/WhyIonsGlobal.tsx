import React from 'react';
import { VALUE_PILLARS } from '../../data/companyData';
import { CyanArc } from '../atoms/CyanArc';
import { DollarSign, Palette, Headphones } from 'lucide-react';

export const WhyIonsGlobal: React.FC = () => {
  const iconMap = [DollarSign, Palette, Headphones];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <CyanArc width={120} height={12} align="left" className="mb-3" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            The Distributor Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
            Why Partner With Ions Global
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            We operate as an extension of your technical and commercial teams, backing every project with direct factory pricing, architect-grade design, and responsive local support.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#00D7F0] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#00D7F0] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#00D7F0] block mb-1">
                    Pillar 0{index + 1}
                  </span>

                  <h3 className="text-xl font-bold text-[#080F14] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#080F14] mb-3 leading-snug">
                    {pillar.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xs font-mono font-bold text-[#080F14] block">
                    {pillar.metric}
                  </span>
                  <span className="text-[11px] text-[#6B7280] block mt-0.5">
                    {pillar.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIonsGlobal;
