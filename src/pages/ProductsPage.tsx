import React, { useState, useMemo } from 'react';
import { PRODUCTS_LIST, ProductItem } from '../data/ecosystemData';
import { Search, Filter, Download, ArrowRight, X, CheckCircle, FileText, ChevronRight, Layers } from 'lucide-react';
import { ConsultationModal } from '../components/molecules/ConsultationModal';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedApplication, setSelectedApplication] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductDetail, setActiveProductDetail] = useState<ProductItem | null>(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  const categories = [
    'All',
    'Security',
    'Access & Intercom',
    'Lighting & Automation',
    'Audio',
    'Controllers & Gateways'
  ];

  const brands = ['All', 'Akubela', 'Akuvox', 'Audio Pro', 'Paradox', 'Proscalar'];
  const applications = ['All', 'Residential', 'Commercial'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter((product) => {
      const matchCat = selectedCategory === 'All' || product.category === selectedCategory;
      const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchApp =
        selectedApplication === 'All' ||
        product.application === selectedApplication ||
        product.application === 'Residential & Commercial';
      const matchQuery =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.connectivity.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCat && matchBrand && matchApp && matchQuery;
    });
  }, [selectedCategory, selectedBrand, selectedApplication, searchQuery]);

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. HERO */}
      <section className="py-20 sm:py-28 bg-[#080F14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0]">
              HARDWARE SPECIFICATION PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Equipment Catalog.
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              Curated hardware from specialist manufacturers. Engineered for certified integrators, electrical consultants, and property developers across Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search model, protocol (KNX, PoE, DALI)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#00D7F0] focus:ring-1 focus:ring-[#00D7F0]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Application Filters */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
              {applications.map((app) => (
                <button
                  key={app}
                  onClick={() => setSelectedApplication(app)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    selectedApplication === app
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {app}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Brand Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-slate-400 font-mono uppercase shrink-0">Brand:</span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap font-medium cursor-pointer ${
                  selectedBrand === b
                    ? 'text-[#00D7F0] bg-[#00D7F0]/10 font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRODUCT SPECIFICATION GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-center justify-between mb-8 text-xs text-slate-500">
          <span>Showing {filteredProducts.length} verified specifications</span>
          {(selectedCategory !== 'All' || selectedBrand !== 'All' || selectedApplication !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBrand('All');
                setSelectedApplication('All');
                setSearchQuery('');
              }}
              className="text-[#00D7F0] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-slate-500">
            <p className="text-base font-semibold">No products match your criteria</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting filters or adjusting search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group p-8 rounded-3xl border border-slate-200 hover:border-[#00D7F0] bg-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Brand & Category row */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-[#00D7F0] font-bold uppercase tracking-wider">
                      {product.brand}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{product.application}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00D7F0] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {product.oneLiner}
                  </p>

                  {/* Connectivity protocols */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {product.connectivity.slice(0, 4).map((c) => (
                      <span key={c} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProductDetail(product)}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#00D7F0] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setConsultModalOpen(true);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Inquire Pricing"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PRODUCT SPECIFICATION DRAWER / MODAL */}
      {activeProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div
            className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col text-[#080F14]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[11px] font-mono text-[#00D7F0] uppercase font-bold tracking-wider">
                  {activeProductDetail.brand} · {activeProductDetail.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                  {activeProductDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveProductDetail(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeProductDetail.description}
              </p>

              {/* Key Features */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                  Key Features
                </span>
                <ul className="space-y-1.5">
                  {activeProductDetail.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle size={14} className="text-[#00D7F0] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                  Technical Specifications
                </span>
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs">
                  {activeProductDetail.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-3 p-3 bg-white">
                      <span className="font-semibold text-slate-700 col-span-1">{spec.label}</span>
                      <span className="text-slate-600 col-span-2 font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatibility */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                  Ecosystem Compatibility
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProductDetail.compatibility.map((comp) => (
                    <span key={comp} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Direct stock available in KL & HCMC
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveProductDetail(null);
                  setConsultModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Project Quotation</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} defaultIntent="product-inquiry" />
    </div>
  );
};

export default ProductsPage;
