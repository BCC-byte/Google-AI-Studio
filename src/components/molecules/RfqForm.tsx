import React, { useState } from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { CyanArc } from '../atoms/CyanArc';
import {
  Send,
  CheckCircle2,
  Building,
  Home,
  Sparkles,
  Phone,
  Mail,
  User,
  MapPin,
  Briefcase,
  FileText,
} from 'lucide-react';

interface RfqFormProps {
  preselectedBrand?: string;
  defaultVertical?: 'residential' | 'commercial';
  title?: string;
  subtitle?: string;
}

export const RfqForm: React.FC<RfqFormProps> = ({
  preselectedBrand = '',
  defaultVertical = 'residential',
  title = 'Request a Commercial & Project Quote',
  subtitle = 'Submit your project specifications or equipment schedule. Our regional desks in Kuala Lumpur and Ho Chi Minh City provide verified distributor pricing within 24 hours.',
}) => {
  const [projectType, setProjectType] = useState<'residential' | 'commercial'>(defaultVertical);
  const [profession, setProfession] = useState('System Integrator / Installer');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    preselectedBrand ? [preselectedBrand] : ['Akubela', 'Akuvox']
  );
  const [projectStage, setProjectStage] = useState('Tender / BOQ Stage');

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locationCity, setLocationCity] = useState('Kuala Lumpur / Malaysia');
  const [boqNotes, setBoqNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const brandOptions = ['Akubela', 'Akuvox', 'Audio Pro', 'Proscalar', 'Paradox'];

  const professionOptions = [
    'System Integrator / Installer',
    'General / Electrical Contractor',
    'Architect / Interior Designer',
    'Property Developer / Builder',
    'Facility Manager / Corporate IT',
  ];

  const stageOptions = [
    'Budget Estimation',
    'Tender / BOQ Stage',
    'Active Specification',
    'Immediate Procurement',
  ];

  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName) ? prev.filter((b) => b !== brandName) : [...prev, brandName]
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

  return (
    <div id="rfq-form-container" className="w-full">
      <Card variant="default" padding="lg" className="border border-[#E5E7EB] bg-white shadow-xs">
        {/* Header */}
        <div className="pb-6 border-b border-[#E5E7EB] mb-8">
          <CyanArc width={100} height={10} align="left" className="mb-2" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] block mb-1">
                Direct Distributor Pricing
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#080F14]">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-[#00D7F0] text-xs font-semibold self-start sm:self-auto shrink-0">
              <Sparkles size={14} />
              <span>24-Hour Desk Turnaround</span>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-12 px-6 text-center animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#2BB673]/10 border border-[#2BB673]/30 text-[#2BB673] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-bold text-[#080F14] mb-2">
              Quote Request Logged
            </h4>
            <p className="text-sm text-[#6B7280] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#080F14]">{fullName}</span> from{' '}
              <strong className="text-[#080F14]">{companyName || 'your organization'}</strong>. Our regional pre-sales engineering desk has received your BOQ requirements and will return distributor pricing and stock availability within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] max-w-md mx-auto text-xs text-[#080F14] space-y-1.5 mb-8 text-left">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Target Vertical:</span>
                <span className="font-semibold text-[#080F14] capitalize">{projectType} Solutions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Requested Brands:</span>
                <span className="font-semibold text-[#080F14]">{selectedBrands.join(', ') || 'General Portfolio'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Project Stage:</span>
                <span className="font-semibold text-[#080F14]">{projectStage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Direct Reply:</span>
                <span className="font-semibold text-[#080F14]">{email} · {phone}</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsSubmitted(false);
                setFullName('');
                setEmail('');
                setPhone('');
                setCompanyName('');
                setBoqNotes('');
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Target Vertical */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2.5">
                1. Project Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectType('residential')}
                  className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    projectType === 'residential'
                      ? 'bg-[#F8FAFC] border-[#00D7F0] shadow-2xs'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-400 text-[#6B7280]'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      projectType === 'residential'
                        ? 'bg-[#080F14] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Home size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#080F14] block">
                      Smart Home & Residential
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Villas, luxury residences, condominiums, multi-dwelling units
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('commercial')}
                  className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    projectType === 'commercial'
                      ? 'bg-[#F8FAFC] border-[#00D7F0] shadow-2xs'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-400 text-[#6B7280]'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      projectType === 'commercial'
                        ? 'bg-[#080F14] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Building size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#080F14] block">
                      Commercial & Enterprise
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Office towers, retail boutiques, hotels, campuses, multi-site
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Brands Required */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2.5">
                2. Brands Required (Select all that apply)
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

            {/* Step 3: Organization & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Your Role / Organization Type
                </label>
                <div className="relative">
                  <Briefcase size={16} className="absolute left-3.5 top-3 text-slate-400" />
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors cursor-pointer"
                  >
                    {professionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Project Timeline / Stage
                </label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3.5 top-3 text-slate-400" />
                  <select
                    value={projectStage}
                    onChange={(e) => setProjectStage(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors cursor-pointer"
                  >
                    {stageOptions.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2.5">
                3. Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs text-[#080F14] font-medium mb-1">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kelvin Tan / Nguyen Van"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#080F14] font-medium mb-1">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Briefcase size={16} className="absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex AV Systems Sdn Bhd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#080F14] font-medium mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. kelvin@apexsystems.my"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#080F14] font-medium mb-1">
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

                <div className="sm:col-span-2">
                  <label className="block text-xs text-[#080F14] font-medium mb-1">
                    Project City / Country *
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={locationCity}
                      onChange={(e) => setLocationCity(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Equipment Schedule / BOQ Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                4. Equipment List, Quantities, or Tender Requirements <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Include estimated device counts (e.g., 24x touch panels, 12x door controllers, 80x track speakers), target handover date, or link to cloud tender specs..."
                value={boqNotes}
                onChange={(e) => setBoqNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#080F14] focus:outline-none focus:border-[#00D7F0] focus:bg-white transition-colors resize-none"
              />
            </div>

            {/* Submission CTA */}
            <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#6B7280] text-center sm:text-left">
                Direct B2B distribution · Certified warranty · Confidential tender pricing
              </span>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                iconRight={<Send size={16} />}
              >
                {isSubmitting ? 'Submitting Request...' : 'Request a Quote'}
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

export default RfqForm;
