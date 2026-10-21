import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SOLUTIONS_CATEGORIES, PRODUCTS_LIST, PROJECTS_LIST, SolutionCategoryData } from '../data/ecosystemData';
import { Shield, KeyRound, Lightbulb, Music, Thermometer, Zap, ArrowRight, CheckCircle, AlertCircle, Cpu } from 'lucide-react';
import { ConsultationModal } from '../components/molecules/ConsultationModal';

const CATEGORY_IMAGES: Record<string, string> = {
  security: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=85',
  'access-intercom': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85',
  'lighting-automation': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  audio: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
  'climate-hvac': 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
  'energy-management': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
};

export const SolutionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categoryParam || 'security');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategoryId(categoryParam);
    }
  }, [categoryParam]);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setSearchParams({ category: id });
  };

  const currentCategory: SolutionCategoryData =
    SOLUTIONS_CATEGORIES.find((c) => c.id === selectedCategoryId) || SOLUTIONS_CATEGORIES[0];

  const featuredProducts = PRODUCTS_LIST.filter((p) =>
    currentCategory.featuredProductIds.includes(p.id)
  );

  const relatedProjects = PROJECTS_LIST.filter((pr) =>
    currentCategory.relatedProjectIds.includes(pr.id)
  );

  const getIcon = (id: string) => {
    switch (id) {
      case 'security':
        return <Shield size={18} />;
      case 'access-intercom':
        return <KeyRound size={18} />;
      case 'lighting-automation':
        return <Lightbulb size={18} />;
      case 'audio':
        return <Music size={18} />;
      case 'climate-hvac':
        return <Thermometer size={18} />;
      case 'energy-management':
        return <Zap size={18} />;
      default:
        return <Shield size={18} />;
    }
  };

  const activeCategoryImg =
    CATEGORY_IMAGES[selectedCategoryId] || CATEGORY_IMAGES.security;

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. CINEMATIC HERO WITH LIFESTYLE PHOTOGRAPHY */}
      <section className="relative w-full py-24 sm:py-36 bg-[#080F14] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activeCategoryImg}
            alt={currentCategory.name}
            className="w-full h-full object-cover transition-all duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080F14] via-[#080F14]/85 to-[#080F14]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              {currentCategory.heroHeadline}
            </h1>
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR TABS */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {SOLUTIONS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                >
                  <span className={isSelected ? 'text-[#00D7F0]' : 'text-slate-500'}>
                    {getIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. SOLUTION DETAIL TEMPLATE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* A. Category Photographic & Architectural Role Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {currentCategory.name} Deployment Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {currentCategory.architecturalRole}
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {currentCategory.subcategories.map((sub) => (
                <span key={sub} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-mono font-medium text-slate-700 border border-slate-200">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden aspect-4/3 relative bg-slate-900 border border-slate-200 shadow-xl">
            <img
              src={activeCategoryImg}
              alt={currentCategory.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono uppercase text-[#00D7F0] font-bold block">
                VERIFIED ECOSYSTEM
              </span>
              <span className="text-sm font-bold">
                {currentCategory.partnerBrands.join(' · ')} Hardware Layer
              </span>
            </div>
          </div>
        </div>

        {/* B. Two Column: Problems We Solve vs Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems We Solve */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 font-bold">
              <AlertCircle size={15} className="text-[#00D7F0]" />
              <span>Problems We Solve</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Overcoming Friction & Vulnerability</h3>
            <ul className="space-y-3 pt-2">
              {currentCategory.problemsSolved.map((prob) => (
                <li key={prob} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#00D7F0] font-bold">
              <CheckCircle size={15} className="text-[#00D7F0]" />
              <span>Core Capabilities</span>
            </div>
            <h3 className="text-xl font-bold text-white">Technological Specifications</h3>
            <ul className="space-y-3 pt-2">
              {currentCategory.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle size={15} className="text-[#00D7F0] mt-0.5 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* C. How It Works */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <span className="text-xs font-mono text-[#00D7F0] font-bold uppercase tracking-wider block">
            SYSTEM ARCHITECTURE & LOGIC
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How It Works
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            {currentCategory.howItWorks}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                Residential Applications
              </span>
              <ul className="space-y-1">
                {currentCategory.residentialApplications.map((app) => (
                  <li key={app} className="text-xs text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                Commercial Applications
              </span>
              <ul className="space-y-1">
                {currentCategory.commercialApplications.map((app) => (
                  <li key={app} className="text-xs text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D7F0]" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* D. Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#00D7F0] uppercase tracking-wider font-bold">
                  HARDWARE SELECTION
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Featured Equipment</h3>
              </div>
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="text-xs font-semibold text-slate-900 hover:text-[#00D7F0] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Full Catalog</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => navigate('/products')}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-[#00D7F0] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#00D7F0] font-semibold">{prod.brand}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{prod.application}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{prod.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-3">{prod.oneLiner}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Specification Sheet</span>
                    <span className="text-xs font-bold text-slate-900 hover:text-[#00D7F0] flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* E. Related Deployments */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-[#00D7F0] uppercase tracking-wider font-bold">
                REAL-WORLD EXECUTION
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Deployment Case Studies</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((prj) => (
                <div
                  key={prj.id}
                  onClick={() => setConsultModalOpen(true)}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00D7F0] transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <span className="text-xs font-mono text-slate-500 block mb-1">{prj.location}</span>
                    <h4 className="text-xl font-bold text-slate-900">{prj.title}</h4>
                    <p className="text-xs text-slate-600 mt-2">{prj.overview}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{prj.units}</span>
                    <span className="font-semibold text-slate-900 flex items-center gap-1">
                      <span>Inquire Blueprint</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* F. Bottom Conversion Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#00D7F0] uppercase font-bold">
              SYSTEM INTEGRATOR & DEVELOPER SUPPORT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Discuss Your {currentCategory.name} Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Our pre-sales engineering teams in Kuala Lumpur and Ho Chi Minh City provide schematic reviews, equipment bills of materials, and direct trade distribution pricing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setConsultModalOpen(true)}
            className="px-7 py-3.5 rounded-full bg-[#00D7F0] text-[#080F14] font-bold text-xs sm:text-sm hover:bg-[#38E3F8] transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Consult an Engineer</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </div>
  );
};

export default SolutionsPage;
