import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TradeSavingsBanner: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Metro Cyan Accent Card */}
        <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-[#00D7F0] p-8 sm:p-12 lg:p-14 shadow-xl border border-[#00D7F0]">
          
          {/* Subtle architectural ambient highlights */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/20 blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -top-24 w-72 h-72 rounded-full bg-white/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Value Statement */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080F14] text-[#00D7F0] text-[11px] font-mono uppercase font-bold tracking-wider shadow-sm">
                <Sparkles size={12} className="text-[#00D7F0]" />
                <span>Trade Dealer Program · Southeast Asia</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#080F14] tracking-tight leading-[1.08]">
                And save up to 25% <br className="hidden sm:block" />
                with certified trade pricing
              </h2>

              <p className="text-sm sm:text-base text-[#080F14]/85 font-medium leading-relaxed max-w-xl">
                Gain instant access to B2B equipment schedules, dealer margin tiers, project protection, and local warranty stock in Kuala Lumpur & Ho Chi Minh City.
              </p>
            </div>

            {/* Right Interactive Input Form */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="p-6 rounded-2xl bg-white shadow-xl border border-white/80 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                    <CheckCircle2 size={18} />
                    <span>Application Initiated</span>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Thank you! Our regional trade desk will email your B2B onboarding packet and pricing schedules to <strong>{email}</strong> within 1 business hour.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/partner')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#080F14] underline hover:text-[#00D7F0] pt-1"
                  >
                    <span>Complete full project registration form</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-3.5 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/90 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="relative w-full">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your business email"
                        className="w-full pl-10 pr-4 py-3 rounded-full bg-slate-50 border border-[#E5E7EB] text-xs sm:text-sm text-[#080F14] placeholder-slate-400 focus:outline-hidden focus:border-[#00D7F0] focus:bg-white transition-all font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-full bg-[#080F14] text-white hover:text-[#00D7F0] text-xs sm:text-sm font-bold hover:bg-black transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 px-2 pt-1 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      <span>Zero Spam · Trade Only</span>
                    </span>
                    <span>Instant Price Schedules</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSavingsBanner;
