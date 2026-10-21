import React from 'react';
import { BrandGrid } from '../components/organisms/BrandGrid';
import { CyanArc } from '../components/atoms/CyanArc';
import { Button } from '../components/atoms/Button';
import { BRANDS_LIST } from '../data/brandsData';
import { Link, useNavigate } from 'react-router-dom';
import {
  Radio,
  ShieldCheck,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Globe,
  ExternalLink,
} from 'lucide-react';

export const BrandsIndex: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      {/* Page Hero */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E5E7EB] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CyanArc width={140} height={14} align="left" className="mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Authorized Distribution Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#080F14] mt-2 mb-6">
              Our Distributed Brands
            </h1>
            <p className="text-lg sm:text-xl text-[#080F14] font-medium leading-relaxed mb-4">
              A curated portfolio of five international automation leaders, selected for architectural aesthetics, rock-solid engineering, and competitive commercial pricing.
            </p>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              Every brand we distribute is supported by official manufacturer warranties, local buffer stock in Kuala Lumpur and Ho Chi Minh City, and certified pre-sales engineering reviews.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/partner')}
                iconRight={<ArrowRight size={16} />}
              >
                Apply for Trade Account
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('brands-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Hardware Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Brand Grid */}
      <div id="brands-grid">
        <BrandGrid />
      </div>

      {/* In-Depth Brand Profiles */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Brand Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#080F14] mt-1.5 mb-3">
              Specialized Hardware For Every Project Scale
            </h2>
            <p className="text-base text-[#6B7280]">
              Explore detailed product categories and technical highlights for each manufacturer.
            </p>
          </div>

          <div className="space-y-8">
            {BRANDS_LIST.map((brand, idx) => (
              <div
                key={brand.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#00D7F0] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 rounded-xl overflow-hidden border border-[#E5E7EB] bg-white h-56 sm:h-64 relative">
                  <img
                    src={brand.imageUrl}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-200">
                      {brand.origin}
                    </span>
                    <h3 className="text-lg font-bold">{brand.name}</h3>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-white border border-[#E5E7EB] text-[#00D7F0]">
                      {brand.verticalTag}
                    </span>
                    <span className="text-xs text-[#6B7280]">· {brand.vertical}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#080F14]">
                    {brand.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#080F14]">
                    {brand.oneLiner}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/brands/${brand.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#080F14] hover:text-[#00D7F0] transition-colors"
                    >
                      <span>Explore full {brand.name} specifications & categories</span>
                      <ArrowUpRight size={15} className="text-[#00D7F0]" />
                    </Link>
                    {brand.websiteUrl && (
                      <a
                        href={brand.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#00D7F0] transition-colors font-medium ml-auto"
                        title={`Visit official ${brand.name} website (${brand.websiteDomain})`}
                      >
                        <Globe size={13} className="text-[#00D7F0]" />
                        <span>{brand.websiteDomain}</span>
                        <ExternalLink size={11} className="text-slate-400" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol & Verification Strip */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Interoperability
            </span>
            <h3 className="text-2xl font-bold text-[#080F14] mt-1">
              Tested Standards & Protocols
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
              <Radio className="text-[#00D7F0] mb-3" size={24} />
              <h4 className="text-base font-bold text-[#080F14] mb-1.5">Open SIP 2.0 & ONVIF</h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Intercom and access panels adhere to global telecommunication standards, integrating directly into enterprise PBX and NVR servers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
              <Cpu className="text-[#00D7F0] mb-3" size={24} />
              <h4 className="text-base font-bold text-[#080F14] mb-1.5">Zigbee 3.0 & IP Mesh</h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Ultra-low latency lighting and actuator networks with self-healing routing, offline responsiveness, and zero cloud dependency.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
              <ShieldCheck className="text-[#00D7F0] mb-3" size={24} />
              <h4 className="text-base font-bold text-[#080F14] mb-1.5">EN 50131 Grade 2/3</h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Security controllers and optical detectors independently verified to meet stringent European commercial anti-tamper and false-alarm criteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsIndex;
