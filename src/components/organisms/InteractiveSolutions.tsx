import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../../data/mockData';
import { SolutionItem } from '../../types';
import { SectionEyebrow } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import {
  ShieldCheck,
  Wifi,
  SunMedium,
  Building,
  Check,
  ArrowRight,
  X,
  Info,
  Layers,
} from 'lucide-react';

export const InteractiveSolutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const categories = ['All', 'Security', 'Connectivity', 'Smart Living', 'Commercial BMS'];

  const filteredSolutions =
    activeCategory === 'All'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Security':
        return ShieldCheck;
      case 'Connectivity':
        return Wifi;
      case 'Smart Living':
        return SunMedium;
      case 'Commercial BMS':
        return Building;
      default:
        return Layers;
    }
  };

  // Curated Lifestyle Imagery Mapping
  const lifestyleImages: Record<string, string> = {
    'biometric-access':
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    'perimeter-radar':
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'wifi7-mesh':
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    'fiber-backbone':
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'circadian-lighting':
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    'smart-climate':
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    'acoustic-audio':
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    'central-bms':
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'tenant-access':
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    'esg-energy':
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  };

  return (
    <section id="solutions" className="py-24 bg-white border-t border-[#EAEAE8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionEyebrow>Core Pillars</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1318]">
              Curated Solutions & Minimalist Iconography
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Every system is purpose-built to operate autonomously in the background, governed by
              industrial reliability and human-scale ergonomics.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#F7F7F6] border border-[#EAEAE8]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0E1318] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0E1318]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((item) => {
            const Icon = getCategoryIcon(item.category);
            const imgSrc =
              lifestyleImages[item.id] ||
              'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedSolution(item)}
                className="group rounded-2xl border border-[#EAEAE8] bg-[#FBFBFA] hover:border-slate-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Visual Lifestyle Preview Strip */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={imgSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E1318] text-[11px] font-semibold shadow-2xs">
                      <Icon size={13} className="text-[#008EA0]" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#0E1318] group-hover:text-[#008EA0] transition-colors">
                        {item.title}
                      </h3>
                      <Info size={16} className="text-slate-400 group-hover:text-[#008EA0] shrink-0" />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="space-y-1.5">
                      {item.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check size={12} className="text-[#008EA0] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#EAEAE8] mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Protocol Standard:</span>
                  <span className="font-mono font-semibold text-[#0E1318]">{item.protocol || item.metrics.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Sheet for Solution Specs */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-[#0E1318] flex items-center justify-center"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#008EA0] font-bold">
                  {selectedSolution.category} Architecture
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0E1318] mb-3">
                {selectedSolution.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedSolution.description}
              </p>

              <div className="p-4 rounded-xl bg-[#F7F7F6] border border-slate-200 mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Integration Protocol:</span>
                  <span className="text-[#0E1318] font-mono font-semibold">{selectedSolution.protocol || selectedSolution.metrics.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Security Architecture:</span>
                  <span className="text-[#15803D] font-medium">Zero-Cloud / Local Silicon</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technical Specifications & Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedSolution.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
                    >
                      <Check size={14} className="text-[#008EA0] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" onClick={() => setSelectedSolution(null)}>
                  Close Spec
                </Button>
                <Button
                  variant="cyan"
                  size="sm"
                  onClick={() => {
                    setSelectedSolution(null);
                    const el = document.getElementById('rfq-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveSolutions;
