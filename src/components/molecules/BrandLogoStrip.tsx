import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDS_LIST } from '../../data/brandsData';
import { ArrowUpRight } from 'lucide-react';

export const BrandLogoStrip: React.FC = () => {
  return (
    <div className="w-full py-10 border-y border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Official Distribution Portfolio across Southeast Asia
          </span>
          <span className="text-xs text-[#6B7280]">
            Direct Manufacturer Partnerships · Certified Regional Stock
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS_LIST.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#00D7F0] hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#080F14] group-hover:text-[#00D7F0] transition-colors">
                  {brand.name}
                </span>
                <ArrowUpRight
                  size={12}
                  className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-[#00D7F0] transition-all"
                />
              </div>
              <span className="text-[11px] text-[#6B7280] text-center mt-1 font-medium">
                {brand.verticalTag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoStrip;
