import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BRANDS_DATA, BRANDS_LIST } from '../data/brandsData';
import { CyanArc } from '../components/atoms/CyanArc';
import { RfqForm } from '../components/molecules/RfqForm';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  ExternalLink,
} from 'lucide-react';

export const BrandPage: React.FC<{ explicitBrandId?: string }> = ({ explicitBrandId }) => {
  const { brandId } = useParams<{ brandId: string }>();
  const quoteRef = useRef<HTMLDivElement>(null);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const activeId = explicitBrandId || brandId || 'akubela';
  const brand = BRANDS_DATA[activeId] || BRANDS_DATA['akubela'];
  const currentCategory = brand.productCategories[activeCategoryIdx] || brand.productCategories[0];

  const scrollToQuote = () => {
    if (quoteRef.current) {
      quoteRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-[#080F14] selection:bg-[#00D7F0]/20 selection:text-[#080F14]">
      {/* 1. Subtle Breadcrumb Bar */}
      <div className="border-b border-[#E5E7EB] bg-white sticky top-0 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            to="/brands"
            className="text-xs text-[#6B7280] hover:text-[#080F14] flex items-center gap-1.5 font-semibold transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>All Brands</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
            <span className="font-bold text-[#080F14]">{brand.name}</span>
            <span className="text-slate-300">/</span>
            <span>{brand.verticalTag}</span>
          </div>
        </div>
      </div>

      {/* 2. Streamlined Hero */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#080F14] border border-[#E5E7EB]">
                  {brand.verticalTag}
                </span>
                {brand.websiteUrl && (
                  <a
                    href={brand.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#080F14] bg-white border border-[#E5E7EB] hover:border-[#00D7F0] hover:text-[#00D7F0] transition-colors"
                  >
                    <Globe size={12} className="text-[#00D7F0]" />
                    <span>{brand.websiteDomain || 'Official Site'}</span>
                    <ExternalLink size={11} className="text-slate-400" />
                  </a>
                )}
              </div>

              <div>
                <CyanArc width={100} height={10} align="left" className="mb-3" />
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#080F14] leading-tight">
                  {brand.name}
                </h1>
              </div>

              {brand.awardBadges && brand.awardBadges.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {brand.awardBadges.map((award, aIdx) => (
                    <span
                      key={aIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#E5E7EB] text-xs font-medium text-[#080F14]"
                    >
                      <Sparkles size={12} className="text-[#00D7F0]" />
                      <span>{award}</span>
                    </span>
                  ))}
                </div>
              )}

              <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed max-w-xl">
                {brand.oneLiner}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToQuote}
                  className="px-6 py-2.5 rounded-full bg-[#080F14] hover:bg-[#00D7F0] hover:text-[#080F14] text-white text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-[#E5E7EB] shadow-lg aspect-[4/3]">
                <img
                  src={brand.imageUrl}
                  alt={`${brand.name} installation`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F14]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#00D7F0] font-bold block">
                    {brand.origin}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {brand.name} Architectural Integration
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Streamlined Overview */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {brand.editorialQuote && (
            <blockquote className="text-xl sm:text-2xl font-bold text-[#080F14] tracking-tight leading-snug">
              “{brand.editorialQuote}”
            </blockquote>
          )}
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            {brand.description}
          </p>
        </div>
      </section>

      {/* 4. Interactive Solutions & Hardware Showcase (Clean Single View) */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D7F0] block">
              Solution Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#080F14] tracking-tight">
              Hardware & Systems by {brand.name}
            </h2>
          </div>

          {/* Clean Horizontal Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E5E7EB]">
            {brand.productCategories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategoryIdx === idx
                    ? 'bg-[#080F14] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#080F14] hover:bg-slate-100'
                }`}
              >
                {cat.shortTitle || cat.title}
              </button>
            ))}
          </div>

          {/* Active Category Display (Single Clean Surface) */}
          {currentCategory && (
            <div className="rounded-2xl sm:rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Category Image */}
              <div className="lg:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 border border-[#E5E7EB] relative">
                <img
                  src={currentCategory.image || brand.imageUrl}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover"
                />
                {currentCategory.tagline && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white">
                    {currentCategory.tagline}
                  </div>
                )}
              </div>

              {/* Category Details & Products */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D7F0] font-bold block mb-1">
                    Category 0{activeCategoryIdx + 1} of 0{brand.productCategories.length}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#080F14]">
                    {currentCategory.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Key Certified Hardware */}
                <div className="pt-3 border-t border-[#E5E7EB] space-y-2">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-[#080F14] font-bold block">
                    Signature Hardware & Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentCategory.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#080F14] p-2 rounded-lg bg-white border border-[#E5E7EB]"
                      >
                        <CheckCircle2 size={14} className="text-[#00D7F0] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={scrollToQuote}
                    className="px-5 py-2 rounded-xl bg-[#080F14] hover:bg-[#00D7F0] hover:text-[#080F14] text-white text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Request BOQ Schedule for {currentCategory.shortTitle || currentCategory.title}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 5. Request Quote / Trade Desk Section */}
      <section ref={quoteRef} className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RfqForm
            preselectedBrand={brand.name}
            defaultVertical={brand.vertical === 'Commercial' ? 'commercial' : 'residential'}
            title={`Consult on ${brand.name} Hardware`}
            subtitle={`Connect directly with our regional trade desk for ${brand.name} bill-of-quantities evaluation, dealer margin tiers, or sample unit inquiries.`}
          />
        </div>
      </section>

      {/* 6. Minimalist Other Brands Footer Strip */}
      <section className="py-10 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
              Other Distributed Brands
            </span>
            <Link
              to="/brands"
              className="text-xs font-bold text-[#080F14] hover:text-[#00D7F0] inline-flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BRANDS_LIST.filter((b) => b.id !== brand.id).map((other) => (
              <Link
                key={other.id}
                to={`/brands/${other.id}`}
                className="group p-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#00D7F0] transition-all flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={other.imageUrl}
                    alt={other.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#080F14] group-hover:text-[#00D7F0] block truncate">
                    {other.name}
                  </span>
                  <span className="text-[10px] text-[#6B7280] block truncate">
                    {other.verticalTag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandPage;

