import React, { useState } from 'react';
import { SMART_SCENES } from '../../data/ecosystemData';
import { KeyRound, Shield, Lightbulb, Thermometer, Music, Zap, Clock, Sparkles } from 'lucide-react';

const SCENARIO_IMAGES: Record<string, string> = {
  'arrive-home': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  'good-morning': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
  'leaving-home': 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85',
  'movie-night': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  'away-mode': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
};

export const SmartExperienceSection: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('arrive-home');

  const currentScenario =
    SMART_SCENES.find((s) => s.id === selectedScenarioId) || SMART_SCENES[0];

  const currentImage = SCENARIO_IMAGES[selectedScenarioId] || SCENARIO_IMAGES['arrive-home'];

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'ACCESS':
        return <KeyRound size={16} />;
      case 'SECURITY':
        return <Shield size={16} />;
      case 'LIGHTING':
        return <Lightbulb size={16} />;
      case 'CLIMATE':
        return <Thermometer size={16} />;
      case 'AUDIO':
        return <Music size={16} />;
      case 'ENERGY':
        return <Zap size={16} />;
      default:
        return <Lightbulb size={16} />;
    }
  };

  return (
    <section className="w-full py-24 sm:py-32 bg-slate-50 text-[#080F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
            SEAMLESS STORYTELLING
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Your Space Responds to You.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            True automation operates without friction. See how synchronized actions flow naturally through the day as your environment adapts to your presence.
          </p>
        </div>

        {/* Horizontal Scenario Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SMART_SCENES.map((scenario) => {
            const isSelected = selectedScenarioId === scenario.id;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setSelectedScenarioId(scenario.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md font-bold'
                    : 'bg-white hover:bg-slate-200/60 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{scenario.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Scenario Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[340px] mb-8 border border-slate-200 shadow-md flex flex-col justify-end p-6 sm:p-10 text-white">
          <img
            src={currentImage}
            alt={currentScenario.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D7F0] font-bold uppercase mb-1">
                <Clock size={14} />
                <span>{currentScenario.timeframe}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {currentScenario.name} Sequence
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mt-1 max-w-xl">
                {currentScenario.tagline}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shrink-0 self-start md:self-auto">
              5 SYNCHRONIZED ARCHITECTURAL STAGES
            </div>
          </div>
        </div>

        {/* Horizontal Sequential Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {currentScenario.steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00D7F0] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-mono text-slate-300 group-hover:text-[#00D7F0] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-[#00D7F0]/10 flex items-center justify-center text-slate-600 group-hover:text-[#00D7F0] transition-colors">
                    {getDomainIcon(step.domain)}
                  </div>
                </div>

                <div className="text-[11px] font-mono tracking-wider uppercase text-[#00D7F0] font-bold mb-1">
                  {step.domain}
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#00D7F0]" />
                <span>Sequence Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartExperienceSection;
