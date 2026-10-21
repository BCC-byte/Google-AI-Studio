import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface CategoryCard {
  id: string;
  categoryTag: string;
  brandTag: string;
  title: string;
  subtitle: string;
  specs: string[];
  image: string;
  link: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 'bundles',
    categoryTag: 'Ecosystem Core',
    brandTag: 'Akubela & Zigbee',
    title: 'Bundles & Intelligent Hubs',
    subtitle: 'Unified BelaOS gateways orchestrating whole-home lighting, climate, shading, and security with zero-latency edge intelligence.',
    specs: ['BelaOS Local Hub', 'Zigbee 3.0 & Wi-Fi 6', 'Zero-Latency Offline'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/smart-home',
  },
  {
    id: 'touchscreens',
    categoryTag: 'In-Wall Interfaces',
    brandTag: 'HyPanel Series',
    title: 'Smart Touchscreens & Switches',
    subtitle: 'Architectural flush-mount displays from 4" to 12.35", AG-glass tactile switches, and precision 16M-color rotary dials.',
    specs: ['2.5K UHD Touchscreens', 'Tactile AG Glass', 'Zero-Crossing Relays'],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    link: '/brands/akubela',
  },
  {
    id: 'starter-kits',
    categoryTag: 'Acoustic Architecture',
    brandTag: 'Audio Pro Sweden',
    title: 'Wireless Hi-Fi & Multiroom Sound',
    subtitle: 'Scandinavian active stereo speaker pairs and cable-free commercial track-mounted loudspeakers for retail and residences.',
    specs: ['1.9GHz Lighting Track RF', 'AirPlay 2 & Cast', 'HDMI ARC Stereo'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    link: '/brands/audio-pro',
  },
  {
    id: 'intercoms',
    categoryTag: 'Perimeter & Access',
    brandTag: 'Akuvox & Paradox',
    title: 'Smart Intercoms & Perimeter Security',
    subtitle: 'Dual-camera Starlight facial recognition entry stations, cloud mobile keys, and Canadian grade-3 hybrid intrusion sensors.',
    specs: ['Anti-Spoofing Biometrics', 'SIP 2.0 Door Video', 'Dual-Optic Detection'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    link: '/brands/akuvox',
  },
];

export const HardwareCategoriesRow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimalist, clear hierarchy */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] font-semibold">
                Featured Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#080F14] leading-[1.15]">
              Smart Solution and Home Security
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mt-3">
              Curated whole-home automation, in-wall tactile interfaces, Scandinavian acoustics, and grade-3 perimeter protection—engineered for seamless turnkey integration.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/brands')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#080F14] border border-[#E5E7EB] hover:border-[#080F14] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer shrink-0 self-start sm:self-auto group"
          >
            <span>See All Solutions</span>
            <ArrowRight
              size={14}
              className="text-[#6B7280] group-hover:text-[#080F14] group-hover:translate-x-0.5 transition-all"
            />
          </button>
        </div>

        {/* 4 Cards Grid: Clean Minimalist Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(cat.link)}
              className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#080F14] hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Clean Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#080F14] font-medium border border-slate-200/80 shadow-xs">
                    {cat.categoryTag}
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#080F14]/80 backdrop-blur-sm text-white shadow-xs">
                    {cat.brandTag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#080F14] group-hover:text-[#00D7F0] transition-colors leading-snug tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6B7280] leading-relaxed mt-2.5 line-clamp-3">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Specs list & Action link */}
                <div className="pt-4 mt-4 border-t border-[#F1F5F9] space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {cat.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-block text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs font-bold text-[#080F14] group-hover:text-[#00D7F0] transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowUpRight
                      size={14}
                      className="text-[#6B7280] group-hover:text-[#00D7F0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareCategoriesRow;
