import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MapPin, Building2, Home, Sparkles } from 'lucide-react';

export const ProjectEnquirySection: React.FC = () => {
  const [spaceType, setSpaceType] = useState<'residential' | 'commercial' | 'development'>('residential');
  const [selectedSystems, setSelectedSystems] = useState<string[]>(['access', 'security', 'lighting']);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('Malaysia');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleSystem = (id: string) => {
    setSelectedSystems((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
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

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setNotes('');
  };

  return (
    <section id="project-enquiry-section" className="w-full py-20 sm:py-28 bg-[#FAF9F6] text-[#080F14] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header: Direct and Minimalist */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Send an Enquiry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Tell us about your project. Our technology specialists in Kuala Lumpur and Ho Chi Minh City review architectural requirements and respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{fullName || 'Valued Partner'}</span>. One of our regional technology specialists will contact you shortly at <span className="font-semibold text-slate-900">{email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Space Type Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 tracking-wide mb-2.5">
                    1. What type of space are you planning?
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { id: 'residential', label: 'Residential', desc: 'Villas & Penthouses', icon: Home },
                      { id: 'commercial', label: 'Commercial', desc: 'Offices & Retail', icon: Building2 },
                      { id: 'development', label: 'Development', desc: 'Multi-Unit Towers', icon: Sparkles }
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = spaceType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSpaceType(item.id as any)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                            active
                              ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                              : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <Icon size={18} className={active ? 'text-[#00D7F0]' : 'text-slate-500'} />
                          <div className="mt-3">
                            <div className="text-xs font-bold leading-tight">{item.label}</div>
                            <div className={`text-[10px] mt-0.5 ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Systems Needed */}
                <div>
                  <label className="block text-xs font-bold text-slate-900 tracking-wide mb-2.5">
                    2. Select required systems (multiple selection)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'access', label: 'Access & Intercom' },
                      { id: 'security', label: 'Perimeter Security' },
                      { id: 'lighting', label: 'Lighting & Shading' },
                      { id: 'audio', label: 'Track & Multi-Room Audio' },
                      { id: 'climate', label: 'Climate & VRV Control' },
                      { id: 'energy', label: 'Energy Management' }
                    ].map((sys) => {
                      const active = selectedSystems.includes(sys.id);
                      return (
                        <button
                          key={sys.id}
                          type="button"
                          onClick={() => toggleSystem(sys.id)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                            active
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {sys.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Contact Details */}
                <div className="pt-2 border-t border-slate-100 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Tan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 text-sm text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 text-sm text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+60 12-345 6789"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 text-sm text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Project Location
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 text-sm text-slate-900 bg-white cursor-pointer"
                      >
                        <option value="Malaysia">Malaysia (Kuala Lumpur & Regional)</option>
                        <option value="Vietnam">Vietnam (Ho Chi Minh City & Regional)</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Other">Other Southeast Asia</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share estimated unit count, architectural stage, or brand preferences..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 text-sm text-slate-900 bg-white resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Enquiry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Trust & Contact Essentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Support Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Why Partner With Ions Global?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Authorized Distribution</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Direct factory warranty, genuine tier-one firmware, and protected integrator margins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Rapid Specification Turnaround</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Single-line schematics, equipment schedules, and bill of quantities provided within 24–48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Regional Experience Hubs</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Live testing studios and fully stocked warehousing in Kuala Lumpur and Ho Chi Minh City.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="text-xs text-slate-400 font-medium">Direct Trade Inquiries</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Email</span>
                  <a href="mailto:solutions@ionsglobal.com" className="font-semibold text-white hover:text-[#00D7F0] transition-colors">
                    solutions@ionsglobal.com
                  </a>
                </div>
                <div className="pt-2">
                  <span className="text-slate-400 block text-xs">Regional Desks</span>
                  <p className="font-medium text-slate-200 text-xs mt-0.5">
                    Malaysia (+60 3-7628 8900) · Vietnam (+84 28-3827 9100)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectEnquirySection;
