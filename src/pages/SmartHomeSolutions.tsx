import React from 'react';
import { CyanArc } from '../components/atoms/CyanArc';
import { Button } from '../components/atoms/Button';
import { RfqForm } from '../components/molecules/RfqForm';
import { BRANDS_DATA } from '../data/brandsData';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  Sliders,
  BellRing,
  Volume2,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export const SmartHomeSolutions: React.FC = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      id: 'intercoms',
      brandKey: 'akuvox',
      title: 'Smart Intercoms & 2-Wire Retrofit',
      brandName: 'Akuvox',
      summary: 'AI facial recognition door stations, 2-wire legacy retrofit systems, and SmartPlus cloud access.',
      description:
        'Akuvox delivers AI-powered residential door stations, 2-wire retrofit systems upgrading legacy cables up to 300m without rewiring, and Android indoor monitors. Residents enjoy sub-0.2s facial recognition, elevator dispatch, and instant smartphone video calls.',
      icon: BellRing,
      highlights: [
        'AI-powered facial recognition door phones (X915, S539, X912) with sub-0.2s anti-spoofing',
        '2-Wire Retrofit solutions (R20A-2, C313W-2, NS-2) upgrading legacy cabling up to 300m with zero conduit rework',
        'Smart elevator dispatch: Summoning upon entry and automated resident floor authorization',
        'Akuvox SmartPlus cloud app for temporary visitor QR codes, remote unlock & mobile video calls',
      ],
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'lighting',
      brandKey: 'akubela',
      title: 'Smart Lighting & Control',
      brandName: 'Akubela',
      summary: 'HyPanel touch centers, Aura modular KNX switches, and whole-house ambient intelligence.',
      description:
        'Akubela replaces rows of mismatched wall switches with Red Dot 2025-awarded HyPanel smart touchscreens and modular Aura KNX switches. Unify circadian lighting, Dual-Channel DALI, VRV/VRF air conditioning, motorized curtains, and security into a single intuitive surface powered by Bela Smart Living AI.',
      icon: Sliders,
      highlights: [
        'HyPanel Family: 12.35" Supreme (2.5K UHD), 10.36" Ultra (Red Dot 2025), Pro, Elite, Lux & KeyPlus',
        'Native KNX-TP & Dual-Channel DALI (DT6/DT8) plus Zigbee 3.0 and Wi-Fi 6 hybrid connectivity',
        'Aura Series KNX modular switches featuring dynamic OLED digital labels and 30-100cm proximity detection',
        'Bela Smart Living AI voice assistant and system-level biometric smart locks (SL60/SL50)',
      ],
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'security',
      brandKey: 'paradox',
      title: 'Smart Security & Life Safety',
      brandName: 'Paradox',
      summary: 'Intrusion alarms, environmental sensors, and central monitoring integration.',
      description:
        'Paradox provides military-grade physical layer security. Central hybrid control panels coordinate perimeter outdoor detectors, indoor pet-immune motion sensors, wireless smoke alarms, and automated water shutoff valves.',
      icon: ShieldAlert,
      highlights: [
        'Hybrid wired bus + wireless expansion protecting up to 192 zones',
        'Multi-tier false-alarm rejection with dual-optic digital motion sensors',
        'Early environmental detection: wireless smoke, heat, and flood sensors',
        'BlueEye mobile app with instant push alerts and central station reporting',
      ],
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'audio',
      brandKey: 'audio-pro',
      title: 'Scandinavian Multiroom Audio',
      brandName: 'Audio Pro',
      summary: 'Wireless Hi-Fi multiroom audio, HDMI ARC stereo TV sound, and Scandinavian acoustic design.',
      description:
        'Audio Pro brings over four decades of Swedish acoustic heritage to luxury residential living. Enjoy lossless music in every room with native AirPlay 2, Google Cast, and Spotify Connect, plus active stereo pairs with HDMI ARC for television sound.',
      icon: Volume2,
      highlights: [
        'Lossless wireless multiroom synchronization across living rooms, dining spaces, and outdoor terraces',
        'Active stereo pairs (A28, A38) featuring HDMI ARC for audiophile television sound and music streaming',
        'Sculptural Scandinavian styling wrapped in tactile acoustic textiles, real wood, and machined aluminium dials',
        'Intuitive iOS & Android app control with physical one-touch preset buttons for instant music playback',
      ],
      image:
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const verticalBrandKeys = ['akubela', 'akuvox', 'audio-pro', 'paradox'];
  const verticalBrands = verticalBrandKeys.map((k) => BRANDS_DATA[k]);

  const scrollToQuote = () => {
    const el = document.getElementById('rfq-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white">
      {/* Page Hero */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E5E7EB] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CyanArc width={140} height={14} align="left" className="mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Residential Vertical
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#080F14] mt-2 mb-6">
              Smart Home Solutions
            </h1>
            <p className="text-lg sm:text-xl text-[#080F14] font-medium leading-relaxed mb-4">
              Integrated residential environments where lighting, security, audio, and door access operate as one calm, reliable ecosystem.
            </p>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              We supply certified smart home hardware to residential integrators, electrical contractors, and luxury developers across Southeast Asia. Every component is backed by manufacturer warranties, direct pricing, and local technical support in Kuala Lumpur and Ho Chi Minh City.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={scrollToQuote}
                iconRight={<ArrowRight size={16} />}
              >
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('solutions-breakdown');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Browse Subsystems
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Breakdown */}
      <section id="solutions-breakdown" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Subsystem Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
              Four Core Disciplines for Modern Residences
            </h2>
            <p className="text-base text-[#6B7280]">
              Architectural control, secure access, perimeter defense, and acoustic excellence — unified by proven protocols.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {solutions.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-slate-100 relative h-72 sm:h-96 shadow-xs ${
                      isEven ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-mono tracking-wider text-slate-200">
                        Brand Partner: {item.brandName}
                      </span>
                      <p className="text-sm font-semibold">{item.summary}</p>
                    </div>
                  </div>

                  {/* Content Frame */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-xs font-bold text-[#00D7F0]">
                      <IconComp size={14} />
                      <span>{item.brandName} Ecosystem</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#080F14]">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#080F14] font-medium leading-snug">
                      {item.summary}
                    </p>

                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {item.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#080F14]">
                          <CheckCircle2 size={16} className="text-[#00D7F0] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <Link
                        to={`/brands/${item.brandKey}`}
                        className="text-xs sm:text-sm font-semibold text-[#00D7F0] hover:underline flex items-center gap-1"
                      >
                        <span>View all {item.brandName} products</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Used In This Vertical */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Hardware Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#080F14] mt-1">
              Brands Deployed in Smart Home Blueprints
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verticalBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                className="p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#00D7F0] hover:shadow-xs transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D7F0] block mb-1">
                    {brand.verticalTag}
                  </span>
                  <h4 className="text-lg font-black text-[#080F14] group-hover:text-[#00D7F0] transition-colors mb-1.5 flex items-center justify-between">
                    <span>{brand.name}</span>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-[#00D7F0]" />
                  </h4>
                  <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                    {brand.oneLiner}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E7EB] text-[11px] font-semibold text-[#080F14]">
                  Explore specs →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Section */}
      <section id="rfq-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Project Procurement
            </span>
            <h2 className="text-3xl font-black text-[#080F14] mt-1 mb-2">
              Request a Smart Home Hardware Quote
            </h2>
            <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
              Submit your project bill of quantities (BOQ) or equipment requirements. Our regional engineering desk will return verified distributor pricing within 24 hours.
            </p>
          </div>

          <RfqForm />
        </div>
      </section>
    </div>
  );
};

export default SmartHomeSolutions;
