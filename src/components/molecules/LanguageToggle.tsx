import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'VI'>('EN');

  return (
    <div className="inline-flex items-center rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-0.5 text-xs">
      <button
        type="button"
        onClick={() => setLang('EN')}
        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
          lang === 'EN'
            ? 'bg-white text-[#080F14] shadow-2xs'
            : 'text-[#6B7280] hover:text-[#080F14]'
        }`}
        title="English"
      >
        EN
      </button>
      <span className="text-slate-300 text-[10px] px-0.5">/</span>
      <button
        type="button"
        onClick={() => setLang('VI')}
        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
          lang === 'VI'
            ? 'bg-white text-[#080F14] shadow-2xs'
            : 'text-[#6B7280] hover:text-[#080F14]'
        }`}
        title="Tiếng Việt (Vietnam regional hub)"
      >
        VI
      </button>
    </div>
  );
};

export default LanguageToggle;
