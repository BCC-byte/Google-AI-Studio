import React from 'react';
import { BRANDS_LIST } from '../../data/brandsData';
import { CyanArc } from '../atoms/CyanArc';
import { Button } from '../atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

export const BrandGrid: React.FC<{ showAllHeader?: boolean }> = ({ showAllHeader = false }) => {
  const navigate = useNavigate();

  return (
    <section id="brands" className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <CyanArc width={120} height={12} align="left" className="mb-3" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Brand Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
              Five Leading Brands. Direct Regional Distribution.
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We focus on a tightly curated portfolio of world-class manufacturers rather than an endless catalog of unverified SKUs.
            </p>
          </div>

          <Link
            to="/brands"
            className="text-xs sm:text-sm font-semibold text-[#00D7F0] hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Compare all 5 brands</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 5 Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS_LIST.map((brand, index) => (
            <div
              key={brand.id}
              className={`rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#00D7F0] hover:shadow-sm transition-all duration-300 group ${
                index === 3 || index === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header with name and vertical pill */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#00D7F0] block mb-1">
                      {brand.origin}
                    </span>
                    <h3 className="text-2xl font-black text-[#080F14] group-hover:text-[#00D7F0] transition-colors">
                      {brand.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#080F14] shrink-0">
                    {brand.verticalTag}
                  </span>
                </div>

                <p className="text-sm text-[#080F14] font-medium leading-snug mb-3">
                  {brand.oneLiner}
                </p>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-6 line-clamp-3">
                  {brand.description}
                </p>

                {/* Key specs */}
                <div className="space-y-1.5 pt-4 border-t border-[#E5E7EB] mb-6">
                  {brand.keyHighlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#080F14]">
                      <Check size={14} className="text-[#00D7F0] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => navigate(`/brands/${brand.id}`)}
                  iconRight={<ArrowUpRight size={14} />}
                >
                  View {brand.name} Products
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
