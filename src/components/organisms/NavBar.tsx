import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Logo } from '../atoms/Logo';
import { Search, ChevronDown, ArrowRight, Menu, X, ArrowUpRight } from 'lucide-react';
import { SOLUTIONS_CATEGORIES } from '../../data/ecosystemData';
import { GlobalSearchModal } from '../molecules/GlobalSearchModal';
import { ConsultationModal } from '../molecules/ConsultationModal';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsMegaOpen, setSolutionsMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterMega = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setSolutionsMegaOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setSolutionsMegaOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
            : 'bg-white border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3 min-h-[96px] sm:min-h-[112px]">
            {/* Zone 1: Single Brand Element Wordmark */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" showTagline={false} />
            </div>

            {/* Zone 2: Navigation Links (Single-Line, 4-8 items) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-700">
              <NavLink
                to="/smart-living"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                Smart Living
              </NavLink>

              <NavLink
                to="/commercial"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                Commercial
              </NavLink>

              {/* Solutions Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterMega}
                onMouseLeave={handleMouseLeaveMega}
              >
                <button
                  type="button"
                  onClick={() => navigate('/solutions')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    solutionsMegaOpen ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`}
                  aria-expanded={solutionsMegaOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      solutionsMegaOpen ? 'rotate-180 text-[#00D7F0]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* MEGA MENU FLYOUT */}
                {solutionsMegaOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[840px] z-50 animate-in fade-in zoom-in-95 duration-150"
                    onMouseEnter={handleMouseEnterMega}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-[#080F14]">
                      <div className="grid grid-cols-3 gap-6">
                        {SOLUTIONS_CATEGORIES.map((cat) => (
                          <div key={cat.id} className="space-y-2">
                            <div className="border-b border-slate-100 pb-1.5 flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                {cat.name}
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {cat.subcategories.map((sub) => (
                                <li key={sub}>
                                  <Link
                                    to={`/solutions?category=${cat.id}`}
                                    onClick={() => setSolutionsMegaOpen(false)}
                                    className="text-xs text-slate-500 hover:text-[#00D7F0] transition-colors block py-0.5 truncate"
                                  >
                                    {sub}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mega Menu Footer Callout */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          One integrated intelligence across residential and commercial architecture.
                        </span>
                        <Link
                          to="/solutions"
                          onClick={() => setSolutionsMegaOpen(false)}
                          className="text-xs font-semibold text-slate-900 hover:text-[#00D7F0] flex items-center gap-1.5 transition-colors"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                Brands
              </NavLink>

              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                Partners
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                About
              </NavLink>
            </nav>

            {/* Zone 3: Actions (Search Icon + Talk to Us CTA) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Search Ecosystem"
              >
                <Search size={18} />
              </button>

              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Talk to Us</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Search Ecosystem"
              >
                <Search size={19} />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
              <NavLink
                to="/smart-living"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Smart Living
              </NavLink>
              <NavLink
                to="/commercial"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Commercial
              </NavLink>
              <NavLink
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Solutions
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Products
              </NavLink>
              <NavLink
                to="/brands"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Brands
              </NavLink>
              <NavLink
                to="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                Partners
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                About
              </NavLink>
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Talk to Us</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <GlobalSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </>
  );
};

export default NavBar;
