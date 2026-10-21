import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface FeaturedBrandItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  productName: string;
  productImage: string;
  oneLiner: string;
  link: string;
}

const FEATURED_BRANDS: FeaturedBrandItem[] = [
  {
    id: 'akubela',
    name: 'Akubela',
    category: 'Smart Living & Touchscreens',
    badge: 'Red Dot Winner 2025',
    productName: 'HyPanel Ultra (10.36" 2K UHD)',
    productImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    oneLiner: 'Red Dot 2025-awarded in-wall command center with KNX-TP, Zigbee 3.0, 6-gang relays, and Bela Smart Living AI.',
    link: '/brands/akubela',
  },
  {
    id: 'akuvox',
    name: 'Akuvox',
    category: 'Smart Intercom & Access Control',
    badge: 'AI Facial Recognition',
    productName: 'Smart Door Phone (X915)',
    productImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    oneLiner: 'Vandal-resistant outdoor SIP entrance station with dual Starlight HDR cameras and biometric access.',
    link: '/brands/akuvox',
  },
  {
    id: 'audio-pro',
    name: 'Audio Pro',
    category: 'Commercial & Residential Sound',
    badge: 'Track Wireless Sound',
    productName: 'Audio Pro Business (SP-3)',
    productImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
    oneLiner: '1.9 GHz lighting-track wireless commercial loudspeakers installing in hours with zero Wi-Fi traffic and up to 6 volume zones.',
    link: '/brands/audio-pro',
  },
  {
    id: 'paradox',
    name: 'Paradox',
    category: 'Intrusion & High Security',
    badge: 'Canadian Grade-3',
    productName: 'Touchscreen Keypad & Alarm',
    productImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    oneLiner: 'High-security intrusion detection consoles, motion sensors, and multi-partition commercial perimeter security.',
    link: '/brands/paradox',
  },
  {
    id: 'proscalar',
    name: 'Proscalar',
    category: 'Cloud Access & Commercial',
    badge: 'Cloud Native PoE',
    productName: 'Enterprise Cloud Controller',
    productImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    oneLiner: 'Zero-server cloud access control hardware and PoE controllers for enterprise facilities and multi-tenant sites.',
    link: '/brands/proscalar',
  },
];

export const InteractiveSpatialHero: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBrandId, setSelectedBrandId] = useState<string>('akubela');

  const selectedBrand =
    FEATURED_BRANDS.find((b) => b.id === selectedBrandId) || FEATURED_BRANDS[0];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Container with Architectural Living Room Penthouse Scene */}
      <div className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[700px] flex items-center">
        {/* Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2600&q=85"
            alt="Luxury modern interior with ambient architectural lighting"
            className="w-full h-full object-cover object-center lg:object-right"
          />

          {/* Clean Solid-to-Fade Architectural Mask (Ensures crisp contrast on text side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 lg:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-white/70 lg:hidden pointer-events-none" />

          {/* Subtle Ambient Brand Glow */}
          <div className="absolute right-1/4 top-1/3 w-80 h-80 rounded-full bg-[#00D7F0]/10 blur-3xl pointer-events-none" />
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Clear Hierarchy without visual clutter */}
            <div className="lg:col-span-6 space-y-6 max-w-xl">
              
              {/* Slogan / Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#080F14] tracking-tight leading-[1.14]">
                Your Global Partner for{' '}
                <span className="block text-[#080F14]">
                  Smart Solutions, Security & Audio Visual.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed max-w-lg">
                Seamlessly control, automate, and monitor your entire home with unparalleled elegance and intelligence.
              </p>

              {/* Primary Action Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/smart-home')}
                  className="px-7 py-3 rounded-full bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#00D7F0]/25 hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Uncluttered Featured Brand Segmented Bar */}
              <div className="pt-5 border-t border-[#E5E7EB] space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280] font-semibold">
                  Featured Hardware Brands
                </div>

                {/* Minimalist Pill Selector (Replaces heavy stacked cards) */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs w-fit">
                  {FEATURED_BRANDS.map((brand) => {
                    const isSelected = brand.id === selectedBrandId;
                    return (
                      <button
                        key={brand.id}
                        type="button"
                        onClick={() => setSelectedBrandId(brand.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#080F14] text-white shadow-xs'
                            : 'text-[#6B7280] hover:text-[#080F14] hover:bg-slate-50'
                        }`}
                      >
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                        )}
                        <span>{brand.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Single Contextual Highlight for Selected Brand */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="text-[#080F14]">
                    <span className="font-bold">{selectedBrand.productName}</span>
                    <span className="text-slate-400 mx-1.5">·</span>
                    <span className="text-[#6B7280]">{selectedBrand.category}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate(selectedBrand.link)}
                    className="inline-flex items-center gap-1 font-bold text-[#080F14] hover:text-[#00D7F0] transition-colors cursor-pointer shrink-0 ml-2"
                  >
                    <span>View Brand</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Solid Product Showcase Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                
                {/* Opaque, High-Status Solid Card (No furniture bleeding through) */}
                <div className="rounded-[28px] sm:rounded-[32px] bg-white border border-[#E5E7EB] shadow-xl shadow-slate-900/10 p-5 text-[#080F14] transition-all duration-300">
                  
                  {/* Card Header: Brand Name + Technology Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00D7F0]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#080F14]">
                        {selectedBrand.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#080F14] border border-[#E5E7EB]">
                      {selectedBrand.badge}
                    </span>
                  </div>

                  {/* Clean Product Image Frame */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-50 border border-[#E5E7EB] group">
                    <img
                      key={selectedBrand.productImage}
                      src={selectedBrand.productImage}
                      alt={`${selectedBrand.name} ${selectedBrand.productName}`}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                    
                    {/* Floating Product Name Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080F14]/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#00D7F0] font-bold">
                        {selectedBrand.category}
                      </div>
                      <div className="text-base sm:text-lg font-bold tracking-tight">
                        {selectedBrand.productName}
                      </div>
                    </div>
                  </div>

                  {/* Concise Summary and Direct Action */}
                  <div className="mt-3.5 flex items-center justify-between gap-3 text-xs">
                    <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">
                      {selectedBrand.oneLiner}
                    </p>

                    <button
                      type="button"
                      onClick={() => navigate(selectedBrand.link)}
                      className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#080F14] hover:bg-[#00D7F0] text-white hover:text-[#080F14] font-bold text-xs transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSpatialHero;
