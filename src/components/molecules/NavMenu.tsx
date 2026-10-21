import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Home, Building2, Layers, ArrowRight } from 'lucide-react';
import { BRANDS_LIST } from '../../data/brandsData';

interface NavMenuProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ mobile = false, onItemClick }) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node) &&
        brandsRef.current &&
        !brandsRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
        setBrandsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-1 px-2 py-4">
        <NavLink
          to="/"
          onClick={onItemClick}
          className={({ isActive }) =>
            `px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-slate-100 text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
            }`
          }
        >
          Home
        </NavLink>

        {/* Mobile Solutions Accordion */}
        <div className="py-1">
          <div className="px-3.5 py-2 text-xs font-semibold text-[#080F14] uppercase tracking-wider flex items-center justify-between">
            <span>Solutions</span>
          </div>
          <div className="pl-4 space-y-1">
            <NavLink
              to="/solutions/smart-home"
              onClick={onItemClick}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-xs font-medium ${
                  isActive ? 'bg-slate-100 text-[#00D7F0] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
                }`
              }
            >
              Smart Home Solutions
            </NavLink>
            <NavLink
              to="/solutions/commercial"
              onClick={onItemClick}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-xs font-medium ${
                  isActive ? 'bg-slate-100 text-[#00D7F0] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
                }`
              }
            >
              Commercial Solutions
            </NavLink>
          </div>
        </div>

        {/* Mobile Brands Accordion */}
        <div className="py-1">
          <div className="px-3.5 py-2 text-xs font-semibold text-[#080F14] uppercase tracking-wider flex items-center justify-between">
            <span>Brands</span>
            <Link
              to="/brands"
              onClick={onItemClick}
              className="text-[11px] font-normal text-[#00D7F0] lowercase hover:underline"
            >
              view all
            </Link>
          </div>
          <div className="pl-4 space-y-1">
            {BRANDS_LIST.map((b) => (
              <NavLink
                key={b.id}
                to={`/brands/${b.id}`}
                onClick={onItemClick}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium ${
                    isActive ? 'bg-slate-100 text-[#00D7F0] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
                  }`
                }
              >
                <span>{b.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">{b.verticalTag}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink
          to="/about"
          onClick={onItemClick}
          className={({ isActive }) =>
            `px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-slate-100 text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/partner"
          onClick={onItemClick}
          className={({ isActive }) =>
            `px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-slate-100 text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
            }`
          }
        >
          Partner With Us
        </NavLink>
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
            isActive ? 'text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
          }`
        }
      >
        Home
      </NavLink>

      {/* Solutions Dropdown */}
      <div
        ref={solutionsRef}
        className="relative"
        onMouseEnter={() => setSolutionsOpen(true)}
        onMouseLeave={() => setSolutionsOpen(false)}
      >
        <button
          type="button"
          onClick={() => setSolutionsOpen(!solutionsOpen)}
          className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer ${
            solutionsOpen ? 'text-[#080F14]' : 'text-[#6B7280] hover:text-[#080F14]'
          }`}
          aria-expanded={solutionsOpen}
        >
          <span>Solutions</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#00D7F0]' : ''}`}
          />
        </button>

        {solutionsOpen && (
          <div className="absolute left-0 top-full pt-1.5 w-80 z-50 animate-in fade-in zoom-in-95">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl p-3 space-y-1">
              <Link
                to="/solutions/smart-home"
                onClick={() => setSolutionsOpen(false)}
                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#00D7F0] group-hover:border-[#00D7F0]">
                  <Home size={16} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#080F14] block group-hover:text-[#00D7F0]">
                    Smart Home Solutions
                  </span>
                  <span className="text-[11px] text-[#6B7280] leading-snug block mt-0.5">
                    For luxury villas, condominiums, and smart apartments.
                  </span>
                </div>
              </Link>

              <Link
                to="/solutions/commercial"
                onClick={() => setSolutionsOpen(false)}
                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#00D7F0] group-hover:border-[#00D7F0]">
                  <Building2 size={16} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#080F14] block group-hover:text-[#00D7F0]">
                    Commercial Solutions
                  </span>
                  <span className="text-[11px] text-[#6B7280] leading-snug block mt-0.5">
                    For corporate offices, hospitality, retail, and multi-site enterprise.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Brands Dropdown */}
      <div
        ref={brandsRef}
        className="relative"
        onMouseEnter={() => setBrandsOpen(true)}
        onMouseLeave={() => setBrandsOpen(false)}
      >
        <button
          type="button"
          onClick={() => setBrandsOpen(!brandsOpen)}
          className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer ${
            brandsOpen ? 'text-[#080F14]' : 'text-[#6B7280] hover:text-[#080F14]'
          }`}
          aria-expanded={brandsOpen}
        >
          <span>Brands</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${brandsOpen ? 'rotate-180 text-[#00D7F0]' : ''}`}
          />
        </button>

        {brandsOpen && (
          <div className="absolute left-0 top-full pt-1.5 w-96 z-50 animate-in fade-in zoom-in-95">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl p-3">
              <div className="px-2 py-1.5 border-b border-[#E5E7EB] mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                  Distributed Brands
                </span>
                <Link
                  to="/brands"
                  onClick={() => setBrandsOpen(false)}
                  className="text-xs text-[#00D7F0] font-medium hover:underline flex items-center gap-1"
                >
                  <span>All Brands</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="space-y-1">
                {BRANDS_LIST.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/brands/${brand.id}`}
                    onClick={() => setBrandsOpen(false)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors group"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#080F14] group-hover:text-[#00D7F0]">
                        {brand.name}
                      </span>
                      <span className="text-[11px] text-[#6B7280] block truncate max-w-[240px]">
                        {brand.oneLiner}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-[#6B7280] shrink-0 font-medium">
                      {brand.verticalTag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* About */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
            isActive ? 'text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
          }`
        }
      >
        About
      </NavLink>

      {/* Partner With Us */}
      <NavLink
        to="/partner"
        className={({ isActive }) =>
          `px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
            isActive ? 'text-[#080F14] font-semibold' : 'text-[#6B7280] hover:text-[#080F14]'
          }`
        }
      >
        Partner With Us
      </NavLink>
    </nav>
  );
};

export default NavMenu;
