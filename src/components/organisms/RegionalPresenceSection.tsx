import React from 'react';
import { OFFICES } from '../../data/companyData';
import { ArchitecturalVisual } from '../atoms/ArchitecturalVisual';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const OFFICE_IMAGES: Record<string, string> = {
  'kuala-lumpur-hq': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'ho-chi-minh-hub': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
};

export const RegionalPresenceSection: React.FC = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#080F14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Regional Presence & Support
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
            With headquarters in Kuala Lumpur and active operations in Ho Chi Minh City, Ions Global delivers responsive engineering, live experience studios, and certified inventory across Southeast Asia.
          </p>
        </div>

        {/* Minimalist Animated Southeast Asia Map Visual */}
        <div className="mb-16">
          <ArchitecturalVisual type="southeast-asia-map" />
        </div>

        {/* Concrete Regional Hub Cards with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFICES.map((office) => {
            const officeImg = OFFICE_IMAGES[office.id] || OFFICE_IMAGES['kuala-lumpur-hq'];
            return (
              <div
                key={office.id}
                className="group rounded-3xl bg-white/5 border border-white/10 hover:border-[#00D7F0] backdrop-blur-md overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Photo Layer */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-900">
                  <img
                    src={officeImg}
                    alt={office.city}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-[#00D7F0]">
                      {office.badge} · {office.country}
                    </span>
                    <span className="text-slate-300">
                      {office.hours}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00D7F0] transition-colors">
                      {office.city}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      {office.role}
                    </p>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  {/* Contact Coordinates */}
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="text-[#00D7F0] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={15} className="text-[#00D7F0] shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-[#00D7F0] shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  </div>

                  {/* Supported Services Bullets */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      In-Market Infrastructure:
                    </span>
                    <ul className="space-y-1.5">
                      {office.services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle size={13} className="text-[#00D7F0] shrink-0" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegionalPresenceSection;
