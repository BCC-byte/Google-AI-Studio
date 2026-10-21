import React, { useState } from 'react';
import { SectionEyebrow } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import {
  Sun,
  Shield,
  Wifi,
  Thermometer,
  Sliders,
  Volume2,
  Lock,
  Unlock,
  Radio,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Wind,
} from 'lucide-react';

type EnvironmentType = 'living' | 'security' | 'connectivity';

export const ProductExplorer: React.FC = () => {
  const [activeEnv, setActiveEnv] = useState<EnvironmentType>('living');

  // Living Room state
  const [sceneMode, setSceneMode] = useState<'morning' | 'focus' | 'cinema'>('morning');
  const [lightDimmer, setLightDimmer] = useState(85);
  const [temperature, setTemperature] = useState(23);
  const [shadesOpen, setShadesOpen] = useState(70);

  // Security state
  const [doorLocked, setDoorLocked] = useState(true);
  const [biometricScanning, setBiometricScanning] = useState(false);
  const [biometricResult, setBiometricResult] = useState<string | null>(null);

  // Connectivity state
  const [activeBand, setActiveBand] = useState<'6ghz' | '5ghz' | '2.4ghz'>('6ghz');
  const [iotIsolation, setIotIsolation] = useState(true);
  const [pingSpeed, setPingSpeed] = useState(3.8);

  const simulateBiometricScan = () => {
    setBiometricScanning(true);
    setBiometricResult(null);
    setTimeout(() => {
      setBiometricScanning(false);
      setDoorLocked(!doorLocked);
      setBiometricResult(doorLocked ? 'Authorized: Verified Palm Match' : 'Engaged: 3-Point Deadbolt');
    }, 1100);
  };

  const environments = [
    {
      id: 'living',
      title: 'Living Room Architecture',
      subtitle: 'Circadian Luminescence & Microclimate',
      icon: Sun,
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      caption: 'Klang Valley Residence — Tunable white lighting & automated solar tracking louvers',
    },
    {
      id: 'security',
      title: 'Perimeter & Access Sanctuary',
      subtitle: 'Local Zero-Cloud Silicon Encryption',
      icon: Shield,
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85',
      caption: 'Private Entryway — 3D structural light palm recognition & biometric airlock',
    },
    {
      id: 'connectivity',
      title: 'Whole-Home Wi-Fi 7 Mesh',
      subtitle: 'Tri-Band 320MHz MLO Backbone',
      icon: Wifi,
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      caption: 'Minimalist Open Studio — Invisible ceiling-recessed access nodes & IoT quarantine',
    },
  ];

  const currentEnv = environments.find((e) => e.id === activeEnv)!;

  return (
    <section id="simulator" className="py-24 bg-[#F7F7F6] border-t border-[#EAEAE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionEyebrow>Virtual Simulator</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1318]">
              Experience Showcase: Interactive Spaces
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Step into simulated living quarters. Adjust circadian luminescence, trigger zero-cloud
              biometric authentication, and examine high-throughput telemetry in real time.
            </p>
          </div>

          {/* Environment Selector Pills */}
          <div className="flex p-1.5 rounded-2xl bg-white border border-[#EAEAE8] shadow-2xs">
            {environments.map((env) => {
              const Icon = env.icon;
              const isSelected = activeEnv === env.id;
              return (
                <button
                  key={env.id}
                  onClick={() => setActiveEnv(env.id as EnvironmentType)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#0E1318] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0E1318]'
                  }`}
                >
                  <Icon size={14} className={isSelected ? 'text-[#008EA0]' : 'text-slate-400'} />
                  <span className="hidden sm:inline">{env.title.split(' ')[0]}</span>
                  <span className="sm:hidden">{env.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Simulation Container */}
        <div className="rounded-3xl border border-[#EAEAE8] bg-white overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Showcase (Lifestyle Image with Real-time HUD) */}
            <div className="lg:col-span-7 relative h-96 sm:h-[520px] bg-slate-900 overflow-hidden flex flex-col justify-between">
              <img
                src={currentEnv.image}
                alt={currentEnv.caption}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              {/* Top Telemetry Overlay */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0E1318] text-xs font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
                  <span>Telemetry: {currentEnv.title}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-mono">
                  Active Local Hub
                </div>
              </div>

              {/* Bottom Caption & Live Status */}
              <div className="relative z-10 p-6 text-white">
                <p className="text-xs sm:text-sm font-medium drop-shadow-sm">
                  {currentEnv.caption}
                </p>

                {activeEnv === 'living' && (
                  <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-white/90">
                    <span>Scene: {sceneMode.toUpperCase()}</span>
                    <span>•</span>
                    <span>Illumination: {lightDimmer}%</span>
                    <span>•</span>
                    <span>HVAC: {temperature}°C</span>
                    <span>•</span>
                    <span>Somfy Louvers: {shadesOpen}%</span>
                  </div>
                )}

                {activeEnv === 'security' && (
                  <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-white/90">
                    <span>Deadbolt: {doorLocked ? 'LOCKED' : 'UNLOCKED'}</span>
                    <span>•</span>
                    <span>Silicon: AES-256</span>
                    <span>•</span>
                    <span>Radar Sweep: 360° Normal</span>
                  </div>
                )}

                {activeEnv === 'connectivity' && (
                  <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-white/90">
                    <span>Band: {activeBand.toUpperCase()}</span>
                    <span>•</span>
                    <span>Latency: {pingSpeed} ms</span>
                    <span>•</span>
                    <span>IoT Isolation: {iotIsolation ? 'ENFORCED' : 'OFF'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Control Console (Light Editorial Design) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FBFBFA]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EAEAE8] mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0E1318]">
                      {currentEnv.title}
                    </h3>
                    <span className="text-xs text-slate-500">{currentEnv.subtitle}</span>
                  </div>
                  <currentEnv.icon size={20} className="text-[#008EA0]" />
                </div>

                {/* CONTROLS FOR LIVING ROOM */}
                {activeEnv === 'living' && (
                  <div className="space-y-6">
                    {/* Scene Preset Buttons */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Architectural Scene Preset
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'morning', label: 'Sunrise' },
                          { id: 'focus', label: 'Studio Day' },
                          { id: 'cinema', label: 'Acoustic' },
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => {
                              setSceneMode(m.id as any);
                              if (m.id === 'morning') {
                                setLightDimmer(85);
                                setTemperature(23);
                                setShadesOpen(80);
                              } else if (m.id === 'focus') {
                                setLightDimmer(100);
                                setTemperature(21.5);
                                setShadesOpen(45);
                              } else {
                                setLightDimmer(15);
                                setTemperature(22);
                                setShadesOpen(0);
                              }
                            }}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                              sceneMode === m.id
                                ? 'bg-[#0E1318] text-white border-[#0E1318] shadow-xs'
                                : 'bg-white text-slate-700 border-[#EAEAE8] hover:border-slate-300'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dimmer Slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-semibold">
                          DALI-2 Luminescence
                        </span>
                        <span className="font-mono font-bold text-[#0E1318]">{lightDimmer}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={lightDimmer}
                        onChange={(e) => setLightDimmer(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1318]"
                      />
                    </div>

                    {/* Climate Slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-semibold">
                          VRV Climate Micro-Zoning
                        </span>
                        <span className="font-mono font-bold text-[#0E1318]">{temperature}°C</span>
                      </div>
                      <input
                        type="range"
                        min="19"
                        max="26"
                        step="0.5"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#008EA0]"
                      />
                    </div>

                    {/* Motorized Shade Slider */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-700 font-semibold">
                          Somfy Whisper Louvers
                        </span>
                        <span className="font-mono font-bold text-[#0E1318]">{shadesOpen}% Open</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={shadesOpen}
                        onChange={(e) => setShadesOpen(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1318]"
                      />
                    </div>
                  </div>
                )}

                {/* CONTROLS FOR SECURITY */}
                {activeEnv === 'security' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-white border border-[#EAEAE8] text-center">
                      <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 mx-auto flex items-center justify-center mb-3">
                        {doorLocked ? (
                          <Lock size={24} className="text-[#0E1318]" />
                        ) : (
                          <Unlock size={24} className="text-[#15803D]" />
                        )}
                      </div>
                      <span className="text-xs uppercase font-bold text-slate-500 block mb-1">
                        Physical Deadbolt Status
                      </span>
                      <div className="text-xl font-bold text-[#0E1318]">
                        {doorLocked ? 'Securely Bolted' : 'Entryway Disengaged'}
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        3-point hardened alloy deadbolt with zero-cloud local logic
                      </span>
                    </div>

                    <Button
                      variant={doorLocked ? 'cyan' : 'outline'}
                      size="md"
                      fullWidth
                      onClick={simulateBiometricScan}
                      disabled={biometricScanning}
                    >
                      {biometricScanning
                        ? 'Authenticating Palm Print...'
                        : doorLocked
                        ? 'Simulate Biometric Palm Unlock'
                        : 'Re-Engage Physical Deadbolt'}
                    </Button>

                    {biometricResult && (
                      <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs font-mono text-[#0E1318]">
                        {biometricResult}
                      </div>
                    )}
                  </div>
                )}

                {/* CONTROLS FOR CONNECTIVITY */}
                {activeEnv === 'connectivity' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Frequency Spectrum (Wi-Fi 7 MLO)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: '6ghz', label: '6 GHz Clean' },
                          { id: '5ghz', label: '5 GHz Fast' },
                          { id: '2.4ghz', label: '2.4 GHz Range' },
                        ].map((b) => (
                          <button
                            key={b.id}
                            onClick={() => {
                              setActiveBand(b.id as any);
                              setPingSpeed(b.id === '6ghz' ? 3.2 : b.id === '5ghz' ? 6.5 : 14.8);
                            }}
                            className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${
                              activeBand === b.id
                                ? 'bg-[#0E1318] text-white border-[#0E1318]'
                                : 'bg-white text-slate-700 border-[#EAEAE8] hover:border-slate-300'
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#EAEAE8] space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-600">Deterministic Latency:</span>
                        <span className="font-mono font-bold text-[#0E1318]">{pingSpeed} ms</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-600">Simultaneous IoT Devices:</span>
                        <span className="font-mono font-bold text-[#0E1318]">48 Active Nodes</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-600">Dual-WAN Failover:</span>
                        <span className="font-mono font-semibold text-[#15803D]">Fiber + 5G Live</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EAEAE8] text-xs">
                      <span className="text-slate-700 font-semibold">Strict IoT VLAN Quarantine</span>
                      <button
                        onClick={() => setIotIsolation(!iotIsolation)}
                        className={`w-11 h-6 rounded-full transition-colors relative ${
                          iotIsolation ? 'bg-[#0E1318]' : 'bg-slate-300'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            iotIsolation ? 'left-6' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Spec Footnote */}
              <div className="pt-6 border-t border-[#EAEAE8] mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>Hardware: Matter 1.3 Certified</span>
                <span className="font-mono text-[#008EA0] font-semibold">
                  Zero Latency Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplorer;
