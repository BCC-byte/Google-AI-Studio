import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Sliders, Moon, Sun, Flame, ShieldCheck } from 'lucide-react';

interface ExperienceScene {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  stats: string;
}

export const AutomationExperiences: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'entertain' | 'wellness'>('wellness');

  return (
    <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching top-right of reference image) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
            Everyday Spatial Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#080F14] mt-2 mb-4 leading-tight">
            What you can do with intelligent automation
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            From simply setting the mood to creating immersive experiences when unwinding, entertaining guests, or returning home after a long journey—intelligent distributed automation brings more comfort and security than you thought possible.
          </p>
        </div>

        {/* Two High-Impact Visual Experience Cards (Matching reference screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Immerse Yourself (Kitchen & Living Room) */}
          <div className="lg:col-span-6 rounded-[32px] overflow-hidden bg-white border border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="p-8 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                <Sparkles size={13} className="text-[#00D7F0]" />
                <span>Culinary & Hospitality Ambience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#080F14] tracking-tight">
                Immerse yourself
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Smart architectural lighting solutions at competitive trade prices, helping everywhere shine brighter with synchronized color warmth and effortless voice or touch control.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/smart-home')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080F14] text-white text-xs font-bold hover:bg-[#00D7F0] transition-colors cursor-pointer"
                >
                  <span>Explore Mood Lighting</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Architectural Visual Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 mt-2">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
                alt="Modern luxury kitchen with warm under-cabinet task and mood lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-mono text-slate-200">
                  Akubela In-Wall Dimmers + Audio Pro
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                  Scene: Dinner Party
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Feel Better (Master Bedroom & Rest Suite) */}
          <div className="lg:col-span-6 rounded-[32px] overflow-hidden bg-white border border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="p-8 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                <Moon size={13} className="text-[#C59A6F]" />
                <span>Rest, Circadian & Wellness</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#080F14] tracking-tight">
                Feel better
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Feel better with the perfect ambiance. Intelligent automation lets you set the right light to relax, boost energy, or create a calming atmosphere anytime without lifting a finger.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/smart-home')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080F14] text-white text-xs font-bold hover:bg-[#C59A6F] transition-colors cursor-pointer"
                >
                  <span>Explore Circadian Wellness</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Architectural Visual Container matching the bedroom photo with arched alcove in screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 mt-2">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
                alt="Master bedroom with arched warm backlit headboard and cozy twilight scene"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-mono text-slate-200">
                  Circadian Zigbee 3.0 + Paradox Motion Guard
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                  Scene: Evening Sanctuary
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Pill button matching screenshot */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => navigate('/solutions/smart-home')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#080F14] text-white text-xs sm:text-sm font-bold hover:bg-[#00D7F0] transition-all shadow-md cursor-pointer"
          >
            <span>Explore all smart automation benefits</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationExperiences;
