import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, KeyRound, Lightbulb, Music, Thermometer, Zap, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { SMART_SCENES } from '../data/ecosystemData';
import { ConsultationModal } from '../components/molecules/ConsultationModal';

interface RoomArea {
  id: string;
  name: string;
  headline: string;
  imageUrl: string;
  technologies: { category: string; description: string; brand: string }[];
}

const ROOM_AREAS: RoomArea[] = [
  {
    id: 'entrance',
    name: 'Entrance & Foyer',
    headline: 'Sub-0.2s Biometric Authentication & Welcome Staging',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85',
    technologies: [
      { category: 'Access', description: 'Akuvox anti-spoof facial recognition door phone with mobile credentials', brand: 'Akuvox' },
      { category: 'Locking', description: 'Akubela SL60 smart lock with 3D face, palm-vein, and remote unlock', brand: 'Akubela' },
      { category: 'Security', description: 'Paradox perimeter arming and entry delay chime sensors', brand: 'Paradox' }
    ]
  },
  {
    id: 'living-room',
    name: 'Living Pavilion',
    headline: 'Circadian Illumination & Scandinavian Acoustics',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    technologies: [
      { category: 'Lighting', description: 'KNX DALI-2 tunable white lighting tracking natural daylight', brand: 'Akubela' },
      { category: 'Audio', description: 'Audio Pro wireless track speakers clipping onto lighting rails', brand: 'Audio Pro' },
      { category: 'Climate', description: 'VRV gateway controlling central ducted air conditioning', brand: 'Akubela' },
      { category: 'Control', description: 'HyPanel Ultra flush-mount touch screen with metal chassis', brand: 'Akubela' }
    ]
  },
  {
    id: 'bedroom',
    name: 'Master Suite',
    headline: 'Acoustic Rest, Sleep Automation & Environmental Shield',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    technologies: [
      { category: 'Shading', description: 'Whisper-quiet motorized sheer and blackout drapery (<35dB)', brand: 'Akubela' },
      { category: 'Switches', description: 'Aura KNX switches with digital OLED dynamic labels', brand: 'Akubela' },
      { category: 'Safety', description: 'Autonomous air quality monitoring and nighttime occupancy radar', brand: 'Akubela' }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Dining',
    headline: 'Autonomous Life Safety & Scene Orchestration',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
    technologies: [
      { category: 'Life Safety', description: 'Wireless combustible gas, smoke, and water leak shutoff valves', brand: 'Akubela & Paradox' },
      { category: 'Audio', description: 'Multiroom lossless audio synchronized with living zones', brand: 'Audio Pro' },
      { category: 'Energy', description: 'Sub-metered circuit monitoring for refrigeration and induction loads', brand: 'Proscalar' }
    ]
  },
  {
    id: 'outdoor',
    name: 'Outdoor Terrace & Pool',
    headline: 'All-Weather Perimeter Curtains & Alfresco Acoustics',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    technologies: [
      { category: 'Security', description: 'Paradox dual-optic outdoor curtain motion barriers with pet immunity', brand: 'Paradox' },
      { category: 'Audio', description: 'IP-rated weatherproof terrace audio synchronized with indoor zones', brand: 'Audio Pro' },
      { category: 'Lighting', description: 'Landscape architectural lighting scenes linked to astronomical clock', brand: 'Akubela' }
    ]
  }
];

export const SmartLivingPage: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState<string>('entrance');
  const [activeSceneId, setActiveSceneId] = useState<string>('arrive-home');
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const activeRoom = ROOM_AREAS.find((r) => r.id === activeRoomId) || ROOM_AREAS[0];
  const activeScene = SMART_SCENES.find((s) => s.id === activeSceneId) || SMART_SCENES[0];

  const lifestylePillars = [
    {
      title: 'Feel Safer',
      desc: 'Perimeter radar and biometric authentication protect your boundary before thresholds are crossed.',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Live Easier',
      desc: 'Aura KNX switches and in-wall HyPanels eliminate wall acne and scattered plastic remotes.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Feel Comfortable',
      desc: 'VRV gateways and motorized shades regulate thermal comfort and glare automatically.',
      img: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Enjoy More',
      desc: 'Scandinavian acoustic fidelity with cable-free lighting-track audio in any living room.',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Use Less',
      desc: 'Automated occupancy setbacks and sub-metered power diagnostics curb phantom electricity waste.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 1. CINEMATIC HERO WITH LIFESTYLE PHOTOGRAPHY */}
      <section className="relative w-full py-24 sm:py-36 bg-[#080F14] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury contemporary living room with integrated smart home ambiance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080F14] via-[#080F14]/85 to-[#080F14]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080F14] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 inline-block">
              RESIDENTIAL TECHNOLOGY ECOSYSTEM
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Your Home.<br />
              More Intelligent.
            </h1>
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Technology that makes everyday living safer, simpler and more comfortable. From biometric entry gates to Scandinavian acoustic warmth and wired KNX stability.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#00D7F0] text-[#080F14] font-bold text-xs sm:text-sm hover:bg-[#38E3F8] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Plan Your Smart Residence</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE BY LIFESTYLE WITH RICH PHOTOGRAPHY */}
      <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
              HUMAN-CENTRIC OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Explore by Lifestyle
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Technology curated around human emotion, sensory comfort, and daily domestic ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {lifestylePillars.map((p, idx) => (
              <div
                key={p.title}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-[#00D7F0]">
                    0{idx + 1}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#00D7F0] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE YOUR HOME (INTERACTIVE PHOTOGRAPHIC ROOM VISUALIZATION) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
              SPATIAL BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
              Explore Your Home
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Select any zone in the residence to discover how specialist technologies from Akubela, Akuvox, Audio Pro, and Paradox integrate cleanly into finished spaces.
            </p>
          </div>

          {/* Room Selector Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {ROOM_AREAS.map((room) => {
              const isSelected = activeRoomId === room.id;
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActiveRoomId(room.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {room.name}
                </button>
              );
            })}
          </div>

          {/* Room Visual & Spec Split with High-Res Photography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#091017] rounded-3xl p-6 sm:p-10 text-white border border-white/10 shadow-2xl">
            {/* Left: Photographic View */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-16/10 relative bg-slate-900 border border-white/10">
              <img
                src={activeRoom.imageUrl}
                alt={activeRoom.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D7F0] font-bold block">
                    ACTIVE ARCHITECTURAL ZONE
                  </span>
                  <span className="text-lg font-bold text-white">
                    {activeRoom.name}
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  {activeRoom.technologies.length} Systems Active
                </span>
              </div>
            </div>

            {/* Right: Technical Spec Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00D7F0] uppercase tracking-wider font-bold block">
                  ZONE BREAKDOWN
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeRoom.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeRoom.headline}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Installed Technology Layer:
                </span>
                {activeRoom.technologies.map((tech) => (
                  <div key={tech.category} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#00D7F0] shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{tech.category}</span>
                        <span className="text-[10px] font-mono text-[#00D7F0] font-semibold">{tech.brand}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#00D7F0] hover:bg-[#38E3F8] text-[#080F14] font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request {activeRoom.name} Specification</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SMART SCENES */}
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
              CHOREOGRAPHED HARMONY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
              Smart Scenes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Every scene coordinates multiple systems—lighting, climate, audio, shading, and security—into an effortless single action.
            </p>
          </div>

          {/* Scene Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {SMART_SCENES.map((scene) => {
              const isSelected = activeSceneId === scene.id;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => setActiveSceneId(scene.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'bg-white hover:bg-slate-200/60 text-slate-700 border border-slate-200'
                  }`}
                >
                  {scene.name}
                </button>
              );
            })}
          </div>

          {/* Active Scene Steps */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono text-[#00D7F0] font-semibold uppercase">
                  {activeScene.timeframe}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeScene.name} Sequence</h3>
                <p className="text-sm text-slate-600 mt-1">{activeScene.tagline}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                5 Synchronized Steps
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
              {activeScene.steps.map((st) => (
                <div key={st.number} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00D7F0] block mb-1">
                      {st.number} · {st.domain}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">{st.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} defaultIntent="smart-home" />
    </div>
  );
};

export default SmartLivingPage;
