import React, { useState } from 'react';
import { Home, Building2, Box, Wrench, Handshake, ShieldCheck, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { OFFICES } from '../data/companyData';

type ContactIntent =
  | 'smart-home'
  | 'commercial'
  | 'product-inquiry'
  | 'technical-support'
  | 'become-dealer'
  | 'tech-partner';

const INTENTS = [
  {
    id: 'smart-home' as ContactIntent,
    label: "I'm planning a smart home",
    icon: <Home size={18} />,
    desc: 'Private villas, penthouses, and residential estates'
  },
  {
    id: 'commercial' as ContactIntent,
    label: "I'm planning a commercial project",
    icon: <Building2 size={18} />,
    desc: 'Offices, hotels, retail, and multi-tenant buildings'
  },
  {
    id: 'product-inquiry' as ContactIntent,
    label: "I'm looking for a product",
    icon: <Box size={18} />,
    desc: 'Specifications, pricing, and stock lead times'
  },
  {
    id: 'technical-support' as ContactIntent,
    label: 'I need technical support',
    icon: <Wrench size={18} />,
    desc: 'Wiring diagrams, firmware, and RMA assistance'
  },
  {
    id: 'become-dealer' as ContactIntent,
    label: 'I want to become a dealer',
    icon: <Handshake size={18} />,
    desc: 'System integrator and installer partner program'
  },
  {
    id: 'tech-partner' as ContactIntent,
    label: 'I want to become a technology partner',
    icon: <ShieldCheck size={18} />,
    desc: 'Brand distribution and regional market expansion'
  }
];

export const ContactPage: React.FC = () => {
  const [selectedIntent, setSelectedIntent] = useState<ContactIntent>('smart-home');
  const [region, setRegion] = useState<'Malaysia' | 'Vietnam' | 'Regional ASEAN'>('Malaysia');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [scope, setScope] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. HERO */}
      <section className="py-20 sm:py-28 bg-[#080F14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0]">
              DIRECT ENGAGEMENT
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Let&apos;s Create Something Smarter.
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              Connect directly with our regional engineering and distribution desks in Kuala Lumpur and Ho Chi Minh City.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC FORM & INTENT SELECTOR */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Dispatched</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our team in{' '}
                  <span className="font-semibold text-slate-900">{region}</span> will review your details and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Intent Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#00D7F0] font-bold tracking-wider mb-3">
                    STEP 1: HOW CAN WE HELP?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {INTENTS.map((intent) => {
                      const isSelected = selectedIntent === intent.id;
                      return (
                        <button
                          key={intent.id}
                          type="button"
                          onClick={() => setSelectedIntent(intent.id)}
                          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#00D7F0] bg-[#00D7F0]/5 ring-1 ring-[#00D7F0]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className={`mb-2 ${isSelected ? 'text-[#00D7F0]' : 'text-slate-400'}`}>
                            {intent.icon}
                          </div>
                          <div className="text-xs font-bold text-slate-900">{intent.label}</div>
                          <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{intent.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Regional Routing */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#00D7F0] font-bold tracking-wider mb-2">
                    STEP 2: REGIONAL OFFICE ROUTING
                  </label>
                  <div className="flex gap-2">
                    {(['Malaysia', 'Vietnam', 'Regional ASEAN'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRegion(r)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                          region === r
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <label className="block text-xs font-mono uppercase text-[#00D7F0] font-bold tracking-wider">
                    STEP 3: CONTACT SPECIFICATIONS
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jason Wong"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jason@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+60 12 345 6789"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Firm Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Architectural practice, SI, or Developer"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Scope & Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      placeholder="Share details on your square footage, timeline, or product lines of interest..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Direct warehouse distribution & local engineering support
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL REGIONAL HUBS */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase text-[#00D7F0] font-bold tracking-wider">
              REGIONAL CONTACT HUBS
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Visit or Call Our Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFICES.map((office) => (
              <div
                key={office.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-[#00D7F0]">
                    {office.badge} · {office.country}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{office.hours}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{office.city}</h3>
                <p className="text-xs text-slate-600 font-medium">{office.role}</p>

                <div className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-200">
                  <div className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#00D7F0] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-[#00D7F0] shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={15} className="text-[#00D7F0] shrink-0" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
