import React, { useState } from 'react';
import { CyanArc } from '../components/atoms/CyanArc';
import { Button } from '../components/atoms/Button';
import { Card } from '../components/atoms/Card';
import {
  Wrench,
  Building,
  Compass,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  Globe,
  Sparkles,
} from 'lucide-react';

export const PartnerWithUs: React.FC = () => {
  // Application Form State
  const [name, setName] = useState('');
  const [company, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Malaysia');
  const [partnerType, setPartnerType] = useState('System Integrator');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([
    'Akubela',
    'Akuvox',
  ]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const brandOptions = ['Akubela', 'Akuvox', 'Audio Pro', 'Proscalar', 'Paradox'];

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const partnerProfiles = [
    {
      role: 'System Integrators',
      icon: Wrench,
      imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      headline: 'Protected Trade Margins & Direct Factory Escalation',
      summary:
        'Deliver premium automation without the risk of manufacturer channel conflict. Access wholesale dealer pricing, dedicated pre-sales design support, and rapid local replacement stock.',
      benefits: [
        'Tiered trade discounts with project price protection for active tender bids',
        'Direct access to field application engineers for complex protocol bridging',
        'Subsidized demonstration kits and showroom display packages',
        'Qualified local lead referrals for residential villas and commercial developments',
      ],
    },
    {
      role: 'Contractors',
      icon: Building,
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      headline: 'Reliable Delivery Schedules & Simplified Installation',
      summary:
        'Electrical and low-voltage MEP contractors rely on Ions Global for straightforward, reliable equipment that passes site inspections without headaches.',
      benefits: [
        'Standardized DIN-rail modules, clear terminal schematics, and neutral/non-neutral options',
        'Local buffer warehousing in KL and HCMC ensuring zero job-site supply delays',
        'Bulk carton packaging and pre-addressed labeling for rapid staging',
        'On-site commissioning assistance and handover verification checklists',
      ],
    },
    {
      role: 'Architects & Interior Designers',
      icon: Compass,
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      headline: 'Refined Aesthetics That Complement Your Vision',
      summary:
        'Specify technology that honours your design language. We provide flush-mount architectural keypads, discreet track audio, and tactile surfaces that clients love to touch.',
      benefits: [
        'Curated sample finish cases with physical glass, aluminum, and brass keypad swatches',
        'CAD detail blocks, BIM / Revit models, and cut-sheet specification text',
        'Private client demonstration sessions at our KL and HCMC experience studios',
        'Aesthetic review sessions to eliminate unsightly rows of wall switch clutter',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Direct Factory Pricing',
      icon: DollarSign,
      desc: 'Authorized tier-one pricing directly from manufacturers. Transparent commercial structures ensure you remain highly competitive on tender submissions while preserving profit.',
    },
    {
      title: 'Training & Certification',
      icon: GraduationCap,
      desc: 'Structured technical bootcamps in Kuala Lumpur and Ho Chi Minh City. Hands-on wiring, Zigbee mesh commissioning, and SIP intercom setup to certify your engineers.',
    },
    {
      title: 'Project Support & Spec Assistance',
      icon: FileCheck,
      desc: 'Our pre-sales engineering desks review your bills of quantities (BOQ), schematic single-line diagrams, and network layouts to guarantee 100% interoperability before you order.',
    },
    {
      title: 'Warranty & Local RMA',
      icon: ShieldAlert,
      desc: 'Comprehensive local manufacturer warranties with rapid 48-hour bench evaluation and advance equipment replacement from our KL and HCMC stockrooms.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Inquire',
      desc: 'Submit your trade application below with your company profile, core services, and target project verticals.',
    },
    {
      number: '02',
      title: 'Qualify',
      desc: 'A regional partner manager connects for a brief discovery discussion to establish your trade tier, credit facilities, and demo requirements.',
    },
    {
      number: '03',
      title: 'Onboard',
      desc: 'Gain instant access to wholesale price lists, product collateral, engineer training dates, and local buffer stock.',
    },
  ];

  const scrollToForm = () => {
    const el = document.getElementById('application-form');
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
              Authorized Dealer Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#080F14] mt-2 mb-6">
              Partner With Ions Global
            </h1>
            <p className="text-lg sm:text-xl text-[#080F14] font-medium leading-relaxed mb-4">
              Join Southeast Asia's premier network of certified automation integrators, MEP contractors, and design specifiers.
            </p>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              We empower trade professionals with direct distributor pricing, in-region buffer inventory, manufacturer warranty swap programs, and rigorous technical training. Grow your business with hardware designed to perform.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={scrollToForm}
                iconRight={<ArrowRight size={16} />}
              >
                Apply for Trade Account
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const el = document.getElementById('who-should-partner');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Review Partner Profiles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Partner */}
      <section id="who-should-partner" className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Ecosystem Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#080F14] mt-1.5 mb-3">
              Tailored Value Propositions by Trade Discipline
            </h2>
            <p className="text-base text-[#6B7280]">
              We adapt our commercial agreements and technical collateral to match how your business bids, installs, and specifies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerProfiles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#00D7F0] transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl group"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={p.imageUrl}
                      alt={p.role}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider text-[#00D7F0] px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md">
                      Partner Track 0{idx + 1}
                    </span>
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white text-[#00D7F0] flex items-center justify-center shadow-md">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#080F14] mb-2">
                      {p.role}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#080F14] mb-4 leading-snug">
                      {p.headline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                      {p.summary}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#E5E7EB]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#080F14] block mb-2">
                        Key Trade Benefits:
                      </span>
                      {p.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#080F14]">
                          <CheckCircle2 size={15} className="text-[#00D7F0] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              The Distributor Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#080F14] mt-1.5 mb-3">
              Four Core Partner Benefits
            </h2>
            <p className="text-base text-[#6B7280]">
              Designed to give your firm an unfair competitive edge in regional tenders and luxury residential commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#00D7F0] flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#080F14] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboarding Process: 3-step */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Simple Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#080F14] mt-1.5 mb-3">
              Three Steps to Becoming an Authorized Partner
            </h2>
            <p className="text-base text-[#6B7280]">
              Streamlined commercial qualification designed for speed and clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] relative"
              >
                <span className="text-3xl font-black text-[#00D7F0] font-mono block mb-3">
                  {s.number}
                </span>
                <h3 className="text-xl font-bold text-[#080F14] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Conversion Point: Contact / Partner Inquiry Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" padding="lg" className="border border-[#E5E7EB] bg-white shadow-xs">
            <div className="pb-6 border-b border-[#E5E7EB] mb-8">
              <CyanArc width={100} height={10} align="left" className="mb-2" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] block mb-1">
                    Trade Application
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#080F14]">
                    Submit Partner Application
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 max-w-2xl leading-relaxed">
                    Complete the form below to apply for trade distribution terms, wholesale price sheets, and engineer certification workshops.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-[#00D7F0] text-xs font-semibold self-start sm:self-auto shrink-0">
                  <Sparkles size={14} />
                  <span>Authorized Dealer Desk</span>
                </div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 text-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#2BB673]/10 border border-[#2BB673]/30 text-[#2BB673] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold text-[#080F14] mb-2">
                  Partner Application Submitted
                </h4>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#080F14]">{name}</span> from{' '}
                  <strong className="text-[#080F14]">{company}</strong>. Our regional partner development team will review your application and contact you within one business day with trade catalogs and dealer onboarding terms.
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] max-w-md mx-auto text-xs text-[#080F14] space-y-1.5 mb-8 text-left">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Partner Classification:</span>
                    <span className="font-semibold text-[#080F14]">{partnerType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Operating Region:</span>
                    <span className="font-semibold text-[#080F14]">{country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Brands of Interest:</span>
                    <span className="font-semibold text-[#080F14]">{selectedBrands.join(', ') || 'All brands'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Contact Information:</span>
                    <span className="font-semibold text-[#080F14]">{email} · {phone}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setCompanyName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                >
                  Submit Another Partner Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adrian Tan / Nguyen Hoang"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Briefcase size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. SmartLiving Tech Sdn Bhd"
                        value={company}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="adrian@smartliving.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+60 12 345 6789 or +84 90 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Country & Partner Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Country / Market *
                    </label>
                    <div className="relative">
                      <Globe size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="Malaysia">Malaysia (MY)</option>
                        <option value="Vietnam">Vietnam (VN)</option>
                        <option value="Singapore">Singapore (SG)</option>
                        <option value="Thailand">Thailand (TH)</option>
                        <option value="Indonesia">Indonesia (ID)</option>
                        <option value="Philippines">Philippines (PH)</option>
                        <option value="Other">Other Southeast Asia</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Partner Type *
                    </label>
                    <div className="relative">
                      <Briefcase size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <select
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="System Integrator">System Integrator</option>
                        <option value="General / Electrical Contractor">Contractor</option>
                        <option value="Architect / Interior Designer">Architect / Designer</option>
                        <option value="Property Developer">Property Developer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Brands of Interest (checkboxes) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                    Brands of Interest (Check all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {brandOptions.map((brand) => {
                      const isChecked = selectedBrands.includes(brand);
                      return (
                        <button
                          type="button"
                          key={brand}
                          onClick={() => toggleBrand(brand)}
                          className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#080F14] text-white border-[#080F14] shadow-2xs'
                              : 'bg-white text-[#080F14] border-[#E5E7EB] hover:border-slate-400'
                          }`}
                        >
                          <span>{brand}</span>
                          <span
                            className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                              isChecked ? 'bg-[#00D7F0] text-[#080F14] font-bold' : 'border border-slate-300'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Message / Company Profile Overview <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your team, typical project types (residential luxury / commercial), or active tenders you're preparing to bid..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-[#6B7280] text-center sm:text-left">
                    Protected trade program · No direct consumer sales · Confidential evaluation
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    iconRight={<Send size={16} />}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Partner Application'}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
