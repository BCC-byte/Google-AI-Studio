import React from 'react';
import { CyanArc } from '../components/atoms/CyanArc';
import { Button } from '../components/atoms/Button';
import { RfqForm } from '../components/molecules/RfqForm';
import { BRANDS_DATA } from '../data/brandsData';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  Volume2,
  Lock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

export const CommercialSolutions: React.FC = () => {
  const navigate = useNavigate();

  const commercialSolutions = [
    {
      id: 'access-control',
      brandKey: 'proscalar',
      title: 'Commercial Access Control',
      brandName: 'Proscalar',
      summary: 'Cloud-based, multi-site door controller infrastructure and digital credential management.',
      description:
        'Proscalar eliminates costly on-premise access servers. Manage doors across multiple office towers, logistics facilities, or retail chains through a unified browser dashboard with Apple & Google Wallet mobile badges.',
      icon: Lock,
      highlights: [
        'Zero-maintenance cloud platform with real-time remote firmware management',
        'Power over Ethernet (PoE+) controllers with encrypted OSDP v2 door readers',
        'Native Apple Wallet and Google Wallet mobile credentials for frictionless badge taps',
        'Instant multi-site emergency lockdown and automated time-scheduled visitor access',
      ],
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'commercial-intercoms',
      brandKey: 'akuvox',
      title: 'Commercial Intercoms & Access Control',
      brandName: 'Akuvox',
      summary: 'Multi-tenant commercial door phones, optical turnstile terminals, and centralized cloud ACMS.',
      description:
        'Akuvox commercial access solutions bring together voice, video, security, and access control for corporate offices, business parks, and co-working spaces. Featuring sub-0.2s anti-spoof facial recognition, calendar visitor QR sync, and multi-building cloud management.',
      icon: Building2,
      highlights: [
        'Vandal-resistant IK10/IP65 entrance stations (X915, S539, X912) with multi-tenant visual directory',
        'Direct speed-gate turnstile integration with A05/A05C facial recognition and BLE/NFC mobile wallet credentials',
        'Enterprise 2-Door Controller (A092) with OSDPv2, Wiegand, and elevator destination dispatch',
        'Centralized cloud ACMS managing doors, visitor passes, and meeting room access across multiple branch offices',
      ],
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'commercial-audio',
      brandKey: 'audio-pro',
      title: 'Track Wireless Sound (Audio Pro Business)',
      brandName: 'Audio Pro Business',
      summary: '1.9 GHz lighting-track wireless sound for retail, hospitality, hotels, and corporate workspaces.',
      description:
        'Audio Pro Business revolutionizes commercial acoustics by clicking directly into existing 3-phase lighting tracks for power and audio. Installs in as little as 2 hours instead of 2 days with zero conduit trenching, transmitting pristine audio over an interference-free 1.9 GHz band across up to 6 distinct volume zones.',
      icon: Volume2,
      highlights: [
        'Tool-free click-and-play installation into standard 3-phase lighting tracks in ~2 hours with zero business downtime',
        'Dedicated 1.9 GHz DECT wireless frequency immune to crowded public 2.4/5 GHz Wi-Fi traffic with 2x the range of Wi-Fi',
        'Multi-zone management governing up to 6 independent volume zones via the VOL-1 master wireless controller',
        'Trusted globally across retail & hospitality: Koenigsegg headquarters, 100+ Circle K stations, Adidas, and boutique hotels',
      ],
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'commercial-security',
      brandKey: 'paradox',
      title: 'Commercial Security & Life Safety',
      brandName: 'Paradox',
      summary: 'Multi-partition systems, central station reporting, and environmental hazard monitoring.',
      description:
        'Paradox commercial security controllers support up to 32 independent partitions and 192 supervised zones. Secure multi-tenant corporate suites, warehouses, server rooms, and retail stockrooms from one resilient backbone.',
      icon: ShieldCheck,
      highlights: [
        'EVO high-security central hubs with encrypted bus communication and anti-tamper supervision',
        'Multiple independent security partitions with role-based arming and disarming codes',
        'Cellular 4G LTE failover and IP reporting direct to commercial Central Monitoring Stations (CMS)',
        'Comprehensive environmental early warning: wireless heat, smoke, and water flood probes',
      ],
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const verticalBrandKeys = ['proscalar', 'akuvox', 'audio-pro', 'paradox'];
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
              Commercial Vertical
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#080F14] mt-2 mb-6">
              Commercial Solutions
            </h1>
            <p className="text-lg sm:text-xl text-[#080F14] font-medium leading-relaxed mb-4">
              Enterprise-grade access control, SIP entry panels, wireless commercial audio, and centralized security partitions for modern developments.
            </p>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              We supply certified commercial hardware to MEP consultants, security contractors, and developers across Southeast Asia. Every system is supported by manufacturer warranties, direct pricing, and pre-sales engineering in Kuala Lumpur and Ho Chi Minh City.
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
                  const el = document.getElementById('commercial-breakdown');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Commercial Disciplines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Breakdown */}
      <section id="commercial-breakdown" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Commercial Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
              Four Core Disciplines for Commercial Facilities
            </h2>
            <p className="text-base text-[#6B7280]">
              Engineered to meet the stringent uptime, scalability, and physical security standards of modern commercial real estate.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {commercialSolutions.map((item, index) => {
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
                      <span>{item.brandName} Infrastructure</span>
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
                        <span>View all {item.brandName} specifications</span>
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

      {/* Brands Used In Commercial Vertical */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Enterprise Hardware
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#080F14] mt-1">
              Brands Deployed in Commercial Specifications
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
              Commercial Procurement
            </span>
            <h2 className="text-3xl font-black text-[#080F14] mt-1 mb-2">
              Request a Commercial Hardware Quote
            </h2>
            <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
              Submit your project schedule of finishes, BOQ, or door counts. Our engineering desks in Kuala Lumpur and Ho Chi Minh City provide distributor pricing within 24 hours.
            </p>
          </div>

          <RfqForm />
        </div>
      </section>
    </div>
  );
};

export default CommercialSolutions;
