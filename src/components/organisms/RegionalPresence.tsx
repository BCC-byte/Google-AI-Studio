import React from 'react';
import { OFFICES } from '../../data/companyData';
import { CyanArc } from '../atoms/CyanArc';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Globe2 } from 'lucide-react';

export const RegionalPresence: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <CyanArc width={120} height={12} align="left" className="mb-3" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
            Regional Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#080F14] mt-1.5 mb-3">
            Grounded in Kuala Lumpur. Anchored in Ho Chi Minh City.
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            We are building Southeast Asia’s most responsive smart space distribution network. Equal dual hubs ensure rapid in-region warehousing, testing, and engineer dispatch.
          </p>
        </div>

        {/* Dual Equal Hubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#00D7F0] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D7F0]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00D7F0]">
                      {office.badge}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#F8FAFC] border border-[#E5E7EB] text-[#080F14]">
                    {office.country}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#080F14] mb-1">
                  {office.city}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] font-medium mb-6">
                  {office.role}
                </p>

                {/* Contact and address details */}
                <div className="space-y-3 text-xs text-[#080F14] mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-[#00D7F0] shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#00D7F0] shrink-0" />
                    <span className="font-mono">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-[#00D7F0] shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-[#00D7F0] shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>

                {/* Local Hub Services */}
                <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block mb-2">
                    Local Hub Capabilities:
                  </span>
                  {office.services.map((svc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#080F14]">
                      <CheckCircle2 size={13} className="text-[#00D7F0] shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Southeast Asia Expansion Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#00D7F0] flex items-center justify-center shrink-0">
              <Globe2 size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#080F14] block">
                Southeast Asia Regional Supply Network
              </span>
              <span className="text-xs text-[#6B7280]">
                Active distribution and project supply across Malaysia, Vietnam, Singapore, Thailand, Indonesia, and the Philippines.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#00D7F0] font-semibold shrink-0">
            <span>Direct Cross-Border Logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;
