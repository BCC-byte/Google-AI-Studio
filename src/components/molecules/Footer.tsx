import React, { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { BRANDS_LIST } from '../../data/brandsData';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  ChevronDown,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Check,
} from 'lucide-react';

interface FooterProps {
  showCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showCta = true }) => {
  const navigate = useNavigate();
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('English (MY / VN)');

  const regions = [
    { label: 'English (MY / VN)', code: 'en-sea' },
    { label: 'Malaysia (Puchong HQ)', code: 'en-my' },
    { label: 'Vietnam (HCMC Hub)', code: 'vi-vn' },
  ];

  return (
    <footer className="w-full bg-[#E5E7EB]/30 pt-12 sm:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* 1. Top Floating Charcoal & Metro Cyan CTA Card */}
        {showCta && (
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#080F14] via-[#0E1A24] to-[#080F14] text-white p-8 sm:p-14 lg:p-16 text-center shadow-xl shadow-[#080F14]/15 border border-[#00D7F0]/25">
            {/* Subtle soft cyan ambient light glow in center */}
            <div className="absolute inset-0 bg-radial from-[#00D7F0]/15 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to upgrade your hardware spec?
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-lg mx-auto">
                Schedule a technical consultation or request distributor pricing, project BOQ reviews, and dealer onboarding.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => navigate('/partner')}
                  className="px-7 py-3 rounded-full bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-102 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Schedule a consultation</span>
                  <ArrowRight size={14} className="text-[#080F14]" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. White Rounded Footer Card (Matching reference card) */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#E5E7EB] shadow-xs p-6 sm:p-10 lg:p-12 text-[#080F14]">
          
          {/* Header Row: Logo on Left, Slogan/Tagline on Right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E5E7EB]">
            <Logo size="md" showTagline={false} />

            <p className="text-xs sm:text-sm text-[#6B7280] font-medium tracking-normal">
              The trade bridge for modern automation in Southeast Asia.
            </p>
          </div>

          {/* Middle Columns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 sm:pt-10">
            
            {/* Col 1: Solutions */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#080F14] block">
                Solutions
              </span>
              <ul className="space-y-2 text-xs text-[#6B7280]">
                <li>
                  <Link
                    to="/solutions/smart-home"
                    className="hover:text-[#00D7F0] transition-colors"
                  >
                    Smart Home Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/commercial"
                    className="hover:text-[#00D7F0] transition-colors"
                  >
                    Commercial Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partner"
                    className="hover:text-[#00D7F0] transition-colors"
                  >
                    Integrator Trade Desk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#00D7F0] transition-colors"
                  >
                    Why B2B Distribution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience-studio"
                    className="hover:text-[#00D7F0] transition-colors"
                  >
                    Experience Studio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Brands */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#080F14] block">
                Brands
              </span>
              <ul className="space-y-2 text-xs text-[#6B7280]">
                {BRANDS_LIST.map((brand) => (
                  <li key={brand.id}>
                    <Link
                      to={`/brands/${brand.id}`}
                      className="hover:text-[#00D7F0] transition-colors flex items-center justify-between group max-w-[200px]"
                    >
                      <span>{brand.name}</span>
                      <span className="text-[10px] text-slate-400 group-hover:text-[#00D7F0]">
                        {brand.verticalTag}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#080F14] block">
                Contact
              </span>
              <div className="space-y-2.5 text-xs text-[#6B7280]">
                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#00D7F0]/10 text-[#00D7F0] flex items-center justify-center shrink-0">
                    <Mail size={13} />
                  </div>
                  <a
                    href="mailto:info@ionsglobal.com"
                    className="hover:text-[#00D7F0] transition-colors font-medium"
                  >
                    info@ionsglobal.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#00D7F0]/10 text-[#00D7F0] flex items-center justify-center shrink-0">
                    <Phone size={13} />
                  </div>
                  <span className="font-mono">
                    +60 3 5882 1238 <span className="text-slate-400">·</span> +84 28 3862 8899
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#00D7F0]/10 text-[#00D7F0] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={13} />
                  </div>
                  <span className="leading-snug">
                    Puchong, Selangor (HQ) · Ho Chi Minh City (Hub)
                  </span>
                </div>
              </div>
            </div>

            {/* Col 4: Region Selector & Social Media Icons */}
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between space-y-4">
              
              {/* Region / Language Dropdown Button */}
              <div className="relative w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                  className="w-full lg:w-auto inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-xs font-medium text-[#080F14] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <Globe size={13} className="text-[#6B7280]" />
                    <span>{selectedRegion}</span>
                  </div>
                  <ChevronDown
                    size={13}
                    className={`text-[#6B7280] transition-transform duration-200 ${
                      regionMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {regionMenuOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-48 rounded-xl bg-white border border-[#E5E7EB] shadow-lg py-1 z-30 animate-in fade-in">
                    {regions.map((reg) => (
                      <button
                        key={reg.code}
                        type="button"
                        onClick={() => {
                          setSelectedRegion(reg.label);
                          setRegionMenuOpen(false);
                        }}
                        className="w-full px-3 py-1.5 text-left text-xs text-[#080F14] hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                      >
                        <span>{reg.label}</span>
                        {selectedRegion === reg.label && (
                          <Check size={13} className="text-[#00D7F0]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Channels Icons (Clean rounded squares matching reference) */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white hover:bg-slate-50 flex items-center justify-center text-[#6B7280] hover:text-[#00D7F0] hover:border-[#00D7F0] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white hover:bg-slate-50 flex items-center justify-center text-[#6B7280] hover:text-[#00D7F0] hover:border-[#00D7F0] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white hover:bg-slate-50 flex items-center justify-center text-[#6B7280] hover:text-[#00D7F0] hover:border-[#00D7F0] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white hover:bg-slate-50 flex items-center justify-center text-[#6B7280] hover:text-[#00D7F0] hover:border-[#00D7F0] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={14} />
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Legal Row */}
          <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-3">
            <div>
              © {new Date().getFullYear()} Ions Global Distribution Sdn Bhd. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link to="/about" className="hover:text-[#080F14] transition-colors">
                Terms & Conditions
              </Link>
              <span>·</span>
              <Link to="/about" className="hover:text-[#080F14] transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <span className="text-slate-400">Cookies</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
