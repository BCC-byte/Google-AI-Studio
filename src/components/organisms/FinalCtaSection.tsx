import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ConsultationModal } from '../molecules/ConsultationModal';

export const FinalCtaSection: React.FC = () => {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className="relative w-full py-28 sm:py-36 bg-[#091017] text-white overflow-hidden border-t border-white/10">
        {/* Subtle Architectural Backing Lines */}
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-[#152332] via-[#091017] to-[#05080D]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0]">
            PROJECT SPECIFICATION & CONSULTATION
          </span>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
            Let&apos;s Build Something Smarter.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re planning a home, development or commercial project, our team can help identify the right technology ecosystem.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-[#00D7F0] text-[#080F14] font-bold text-sm hover:bg-[#00c0d6] transition-all flex items-center gap-2 shadow-xl hover:shadow-[#00D7F0]/25 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="pt-8 text-xs font-mono text-slate-400">
            Kuala Lumpur · Ho Chi Minh City · Certified Integrator Network
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} />
    </>
  );
};

export default FinalCtaSection;
