import React, { useState, useEffect } from 'react';
import { SectionEyebrow } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Zap, Leaf, TrendingDown, Award, ArrowUpRight, Calculator, CheckCircle2 } from 'lucide-react';

export const DataImpactSection: React.FC = () => {
  const [liveKwh, setLiveKwh] = useState(4892410);
  const [sqftInput, setSqftInput] = useState(6500);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');

  // Live ticking counter simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveKwh((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Energy Calculation
  const calculateSavings = () => {
    const baseSavingsPerSqft = propertyType === 'commercial' ? 14.8 : 9.2;
    const annualKwhSaved = Math.round(sqftInput * baseSavingsPerSqft);
    const tariffRate = propertyType === 'commercial' ? 0.509 : 0.57;
    const annualMyrSaved = Math.round(annualKwhSaved * tariffRate);
    const co2Tons = (annualKwhSaved * 0.00065).toFixed(1);

    return {
      annualKwhSaved: annualKwhSaved.toLocaleString(),
      annualMyrSaved: annualMyrSaved.toLocaleString(),
      co2Tons,
      percentReduction: propertyType === 'commercial' ? '36.4%' : '31.8%',
      esgRating: 'Green Building Index (GBI) & LEED Gold Compatible',
    };
  };

  const savings = calculateSavings();

  return (
    <section id="sustainability" className="py-24 bg-white border-t border-[#EAEAE8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionEyebrow>Sustainable Tomorrow</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1318]">
              Intelligence in Service of the Planet
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              True elegance leaves no wasteful footprint. Through predictive occupancy sensing,
              automated thermal zoning, and solar tracking facades, iONS properties systematically
              curtail unnecessary energy draw without human intervention.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#15803D]/10 border border-[#15803D]/20 text-[#15803D] text-xs font-semibold">
            <Award size={16} />
            <span>Certified Green Building Index (GBI) Partner</span>
          </div>
        </div>

        {/* Editorial Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Metric 1 */}
          <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#EAEAE8] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="editorial-caption text-slate-500 font-bold">
                Energy Abated
              </span>
              <span className="w-2 h-2 rounded-full bg-[#008EA0] animate-pulse" />
            </div>
            <div className="text-3xl font-black text-[#0E1318] font-mono tracking-tight">
              {liveKwh.toLocaleString()} <span className="text-xs font-sans text-slate-500">kWh</span>
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Active telemetry across 12,840+ regional zones
            </span>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#EAEAE8] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="editorial-caption text-slate-500 font-bold">
                Carbon Offset
              </span>
              <Leaf size={16} className="text-[#15803D]" />
            </div>
            <div className="text-3xl font-black text-[#15803D] font-mono tracking-tight">
              3,424 <span className="text-xs font-sans text-slate-500">Tonnes CO₂</span>
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Equivalent to planting 154,000 urban trees
            </span>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#EAEAE8] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="editorial-caption text-slate-500 font-bold">
                Utility Draw Drop
              </span>
              <TrendingDown size={16} className="text-[#008EA0]" />
            </div>
            <div className="text-3xl font-black text-[#0E1318] font-mono tracking-tight">
              -34.2% <span className="text-xs font-sans text-slate-500">Average</span>
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Empirical 24-month audit validation
            </span>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#EAEAE8] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="editorial-caption text-slate-500 font-bold">
                Peak Shaving
              </span>
              <Zap size={16} className="text-amber-600" />
            </div>
            <div className="text-3xl font-black text-[#0E1318] font-mono tracking-tight">
              Automated <span className="text-xs font-sans text-[#15803D]">Curtailed</span>
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Limits highest commercial tariff blocks
            </span>
          </div>
        </div>

        {/* Interactive Calculator Box with Architectural Photography */}
        <div className="rounded-3xl border border-[#EAEAE8] bg-[#FBFBFA] p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#EAEAE8]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#008EA0] font-bold uppercase tracking-wider mb-1">
                <Calculator size={14} />
                <span>Simulate Your Property Impact</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E1318]">
                Interactive Space Energy & ESG Forecast
              </h3>
            </div>

            {/* Property Selector */}
            <div className="flex p-1 rounded-xl bg-white border border-[#EAEAE8] text-xs font-semibold shadow-2xs">
              <button
                onClick={() => setPropertyType('residential')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  propertyType === 'residential'
                    ? 'bg-[#0E1318] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0E1318]'
                }`}
              >
                Luxury Residential
              </button>
              <button
                onClick={() => setPropertyType('commercial')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  propertyType === 'commercial'
                    ? 'bg-[#0E1318] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0E1318]'
                }`}
              >
                Commercial Enterprise
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            {/* Slider Control */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-700 font-semibold uppercase text-xs tracking-wider">
                  Configured Gross Floor Area
                </span>
                <span className="text-2xl font-mono font-bold text-[#0E1318]">
                  {sqftInput.toLocaleString()} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="50000"
                step="500"
                value={sqftInput}
                onChange={(e) => setSqftInput(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1318]"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>1,500 sq ft (Penthouse)</span>
                <span>25,000 sq ft</span>
                <span>50,000 sq ft (Tower Hub)</span>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                Empirical calculations based on actual smart meter telemetry in the Klang Valley
                and Singapore corridors, calibrated to local humidity, thermal envelope coefficients,
                and ASHRAE 90.1 baselines.
              </p>
            </div>

            {/* Calculated Output Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#EAEAE8] shadow-2xs">
                <span className="text-xs uppercase text-slate-500 font-semibold block">
                  Est. Annual Utility Savings
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-[#15803D] font-mono mt-1">
                  RM {savings.annualMyrSaved}
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  ~ {savings.percentReduction} reduction in peak HVAC & illumination draw
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#EAEAE8] shadow-2xs">
                <span className="text-xs uppercase text-slate-500 font-semibold block">
                  Annual Energy Conserved
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-[#0E1318] font-mono mt-1">
                  {savings.annualKwhSaved} <span className="text-sm text-slate-500 font-sans">kWh</span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Avoids ~{savings.co2Tons} MT of greenhouse emissions
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#EAEAE8] sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
                <div>
                  <span className="text-xs uppercase text-slate-500 font-semibold block">
                    ESG Standard Alignment
                  </span>
                  <div className="text-sm font-bold text-[#0E1318] mt-0.5">
                    {savings.esgRating}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Automated exportable telemetry for corporate sustainability audits
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const el = document.getElementById('rfq-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  iconRight={<ArrowUpRight size={14} />}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataImpactSection;
