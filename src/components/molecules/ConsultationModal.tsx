import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Building2, Home, Box, Wrench, Handshake, ShieldCheck } from 'lucide-react';
import { OFFICES } from '../../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
}

type ConsultationIntent =
  | 'smart-home'
  | 'commercial'
  | 'product-inquiry'
  | 'technical-support'
  | 'become-dealer'
  | 'tech-partner';

const INTENTS: { id: ConsultationIntent; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    id: 'smart-home',
    label: "I'm planning a smart home",
    icon: <Home size={18} />,
    desc: 'Private villas, condominiums, and luxury penthouses'
  },
  {
    id: 'commercial',
    label: "I'm planning a commercial project",
    icon: <Building2 size={18} />,
    desc: 'Offices, hotels, multi-tenant developments & retail'
  },
  {
    id: 'product-inquiry',
    label: "I'm looking for a product",
    icon: <Box size={18} />,
    desc: 'Specifications, availability, and pricing tiers'
  },
  {
    id: 'technical-support',
    label: 'I need technical support',
    icon: <Wrench size={18} />,
    desc: 'Firmware, wiring diagrams, and engineering assistance'
  },
  {
    id: 'become-dealer',
    label: 'I want to become a dealer',
    icon: <Handshake size={18} />,
    desc: 'Integrator & installer trade program benefits'
  },
  {
    id: 'tech-partner',
    label: 'I want to become a technology partner',
    icon: <ShieldCheck size={18} />,
    desc: 'Manufacturer distribution and ecosystem integration'
  }
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultIntent = 'smart-home',
}) => {
  const [selectedIntent, setSelectedIntent] = useState<ConsultationIntent>(defaultIntent as ConsultationIntent);
  const [region, setRegion] = useState<'Malaysia' | 'Vietnam' | 'Regional ASEAN'>('Malaysia');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-[#080F14] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/60">
          <div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#00D7F0]">
              CONSULTATION & DIRECT INQUIRY
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">Let&apos;s Create Something Smarter.</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle size={36} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Inquiry Received</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Our technical advisory team in{' '}
              <span className="font-semibold text-slate-900">{region}</span> will review your requirements and reach out within 24 business hours.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1">
              <div>
                <span className="font-semibold text-slate-800">Intent:</span> {INTENTS.find((i) => i.id === selectedIntent)?.label}
              </div>
              <div>
                <span className="font-semibold text-slate-800">Direct Office Contact:</span>{' '}
                {region === 'Vietnam' ? '+84 28 3862 8899 (Ho Chi Minh)' : '+60 3 5882 1238 (Kuala Lumpur)'}
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Intent Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                How can we help?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INTENTS.map((intent) => {
                  const isSelected = selectedIntent === intent.id;
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setSelectedIntent(intent.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'border-[#00D7F0] bg-[#00D7F0]/5 text-slate-900 ring-1 ring-[#00D7F0]'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                      }`}
                    >
                      <div className={`shrink-0 mt-0.5 ${isSelected ? 'text-[#00D7F0]' : 'text-slate-400'}`}>
                        {intent.icon}
                      </div>
                      <div>
                        <div className={`font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                          {intent.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{intent.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Region Routing Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Regional Routing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Malaysia', 'Vietnam', 'Regional ASEAN'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                      region === r
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Architectural firm, Integrator, or Private"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope or Inquiries
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your space, timeline, or product models of interest..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0] focus:outline-none resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Direct distribution · In-market engineering support
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Routing...' : 'Submit Inquiry'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
