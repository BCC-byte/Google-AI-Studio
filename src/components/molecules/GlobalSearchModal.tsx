import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Layers, Box, Shield, ChevronRight } from 'lucide-react';
import { SOLUTIONS_CATEGORIES, PRODUCTS_LIST } from '../../data/ecosystemData';
import { BRANDS_LIST } from '../../data/brandsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        solutions: SOLUTIONS_CATEGORIES.slice(0, 3),
        products: PRODUCTS_LIST.slice(0, 3),
        brands: BRANDS_LIST.slice(0, 4),
      };
    }

    const solutions = SOLUTIONS_CATEGORIES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.subcategories.some((sc) => sc.toLowerCase().includes(q))
    );

    const products = PRODUCTS_LIST.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.oneLiner.toLowerCase().includes(q)
    );

    const brands = BRANDS_LIST.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.oneLiner.toLowerCase().includes(q) ||
        b.verticalTag.toLowerCase().includes(q)
    );

    return { solutions, products, brands };
  }, [query]);

  const totalCount =
    filteredResults.solutions.length +
    filteredResults.products.length +
    filteredResults.brands.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-[#080F14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-slate-200">
          <Search size={20} className="text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search solutions, products, brands, ecosystems..."
            className="w-full bg-transparent text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={18} />
            </button>
          ) : (
            <span className="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">
              ESC to close
            </span>
          )}
          <button
            onClick={onClose}
            className="ml-2 sm:hidden p-1 text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {totalCount === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for &ldquo;intercom&rdquo;, &ldquo;KNX&rdquo;, &ldquo;audio track&rdquo;, or &ldquo;Akubela&rdquo;.
              </p>
            </div>
          )}

          {/* Solutions Category Group */}
          {filteredResults.solutions.length > 0 && (
            <div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-2 px-2 flex items-center gap-1.5">
                <Layers size={13} className="text-[#00D7F0]" />
                <span>SOLUTIONS</span>
              </div>
              <div className="space-y-1">
                {filteredResults.solutions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigate(`/solutions`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#00D7F0]">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{item.tagline}</div>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-800 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Group */}
          {filteredResults.products.length > 0 && (
            <div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-2 px-2 flex items-center gap-1.5">
                <Box size={13} className="text-[#00D7F0]" />
                <span>PRODUCTS</span>
              </div>
              <div className="space-y-1">
                {filteredResults.products.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      navigate(`/products`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-[#00D7F0]">
                          {prod.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">{prod.brand}</span>
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{prod.oneLiner}</div>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-800 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Brands Group */}
          {filteredResults.brands.length > 0 && (
            <div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-2 px-2 flex items-center gap-1.5">
                <Shield size={13} className="text-[#00D7F0]" />
                <span>TECHNOLOGY BRANDS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredResults.brands.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      navigate(`/brands/${b.id}`);
                      onClose();
                    }}
                    className="text-left p-2.5 rounded-xl border border-slate-200 hover:border-[#00D7F0] hover:bg-slate-50 transition-colors group cursor-pointer"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#00D7F0]">
                      {b.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">{b.oneLiner}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Quick Nav */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Search the entire Ions Global ecosystem</span>
          <button
            onClick={() => {
              navigate('/products');
              onClose();
            }}
            className="text-[#080F14] hover:text-[#00D7F0] font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Product Catalog</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
