import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VALUE_PILLARS, OFFICES } from '../data/companyData';
import { BRANDS_LIST } from '../data/brandsData';
import { ArrowRight, CheckCircle2, Globe2, Building2, Layers, MapPin, Phone, Mail, Box, Shield, Compass, Headphones } from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const lifecycleSteps = [
    {
      step: '01',
      title: 'DISTRIBUTE',
      desc: 'Direct factory distribution agreements with manufacturer design labs, guaranteeing genuine inventory, zero broker inflation, and local warehousing in KL and HCMC.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      step: '02',
      title: 'DESIGN',
      desc: 'Engineering pre-sales support, architectural finish reviews, and subsystem schematic validation before tenders and bills of quantities are finalized.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      step: '03',
      title: 'INTEGRATE',
      desc: 'Hands-on wiring testing benches, protocol verification (KNX, DALI-2, OSDPv2, SIP), and firmware certification for certified integrators and contractors.',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    },
    {
      step: '04',
      title: 'SUPPORT',
      desc: 'In-market bilingual technical desks, 48-hour local buffer RMA replacement units, and long-term ecosystem lifecycle continuity.',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    }
  ];

  const newsInsights = [
    {
      date: 'March 2026',
      title: 'The Shift to Hybrid Smart Living: Uniting KNX Stability with Edge AI',
      desc: 'How Akubela HyPanel architectures eliminate the latency of cloud-dependent smart homes in Southeast Asia.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      date: 'February 2026',
      title: 'Commercial Audio Over 3-Phase Lighting Tracks',
      desc: 'Why Audio Pro Business 1.9GHz DECT systems install in 2 hours with zero ceiling trenching across retail malls.',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      date: 'January 2026',
      title: '2-Wire Intercom Modernization for Heritage & Occupied Buildings',
      desc: 'Upgrading multi-tenant analog cabling to SIP cloud video access without damaging interior walls.',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full py-24 sm:py-36 bg-[#080F14] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Modern architectural living and technology integration"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080F14] via-[#080F14]/85 to-[#080F14]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Connecting Technology.<br />
              Creating Smarter Spaces.
            </h1>
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              We bring together leading technologies in security, access, automation, audio, climate, and energy to build smarter, safer, and more connected environments across Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & OUR STORY */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                The Regional Orchestrator for Intelligent Architecture
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Headquartered in Kuala Lumpur with active operations in Ho Chi Minh City, Ions Global was founded on a simple principle: global hardware manufacturers rarely maintain local buffer inventory or in-market pre-sales engineering in Southeast Asia, while local integrators cannot afford six-week freight delays or untested subsystem incompatibilities.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate strictly as an authorized technology ecosystem partner. We don&apos;t compete with local installers or contractors for end-user jobs; instead, we empower them with competitive direct manufacturer pricing, hands-on testing benches, and certified technical support.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl relative aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Ions Global headquarters and collaboration space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#00D7F0] font-bold block">
                  REGIONAL FOOTPRINT
                </span>
                <h4 className="text-xl font-bold">Kuala Lumpur HQ & Ho Chi Minh City Hub</h4>
                <p className="text-xs text-slate-300">
                  Local stocking, warranty exchange desks, and certified training benches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL LIFECYCLE: DISTRIBUTE -> DESIGN -> INTEGRATE -> SUPPORT */}
      <section className="py-24 sm:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Value Throughout the Lifecycle
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
              From early conceptual schematics to decade-long operational continuity, Ions Global provides verified stability at each phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={step.title}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00D7F0] transition-all flex flex-col justify-between"
              >
                <div className="aspect-16/10 overflow-hidden relative bg-slate-800">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 text-2xl font-mono font-bold text-[#00D7F0]">
                    {step.step}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE PILLARS */}
      {/* 4. VALUE PILLARS */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Value Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PILLARS.map((p) => (
              <div key={p.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#00D7F0] transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-3">{p.headline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono font-bold text-[#080F14] block">{p.metric}</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{p.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & INSIGHTS WITH PHOTOGRAPHY */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              News & Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsInsights.map((news) => (
              <div
                key={news.title}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-16/10 overflow-hidden relative bg-slate-100">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                    {news.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#00D7F0] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{news.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
