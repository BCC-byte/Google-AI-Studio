import React, { useState } from 'react';
import { PROJECTS_LIST, ProjectCaseStudy } from '../../data/ecosystemData';
import { ArrowRight, MapPin, Building, Cpu, Layers } from 'lucide-react';
import { ConsultationModal } from '../molecules/ConsultationModal';

const PROJECT_IMAGES: Record<string, string> = {
  'damansara-heights-estate': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'the-exchange-trx-retail': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  'saigon-marina-tower': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'da-nang-boutique-resort': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Hospitality' | 'Retail'>('All');
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.type === filter);

  return (
    <>
      <section className="w-full py-24 sm:py-32 bg-slate-50 text-[#080F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-widest uppercase text-[#00D7F0] font-bold">
                VERIFIED ARCHITECTURAL DEPLOYMENTS
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
                Smart Spaces. Real Results.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                Case studies showcasing real-world performance, operational energy reduction, and seamless integrator execution across Malaysia and Vietnam.
              </p>
            </div>

            {/* Interactive Filter Control Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto scrollbar-none">
              {(['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilter(type)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    filter === type
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid with Rich Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const projectImg = PROJECT_IMAGES[project.id] || PROJECT_IMAGES['damansara-heights-estate'];
              return (
                <div
                  key={project.id}
                  onClick={() => setConsultModalOpen(true)}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-[#00D7F0] overflow-hidden transition-all duration-500 shadow-xs hover:shadow-2xl flex flex-col justify-between cursor-pointer"
                >
                  {/* Photo Header */}
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                    <img
                      src={projectImg}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#00D7F0] font-bold">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white/80">
                        {project.location}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-[#00D7F0] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-300 block mt-0.5">
                        {project.categoryTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Key Metrics / Scale */}
                      <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-slate-400 block font-mono text-[11px] uppercase">Scale & Scope</span>
                          <span className="font-semibold text-slate-800">{project.units}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-mono text-[11px] uppercase">Partner Brands</span>
                          <span className="font-semibold text-[#00D7F0]">{project.brandsUsed.join(' · ')}</span>
                        </div>
                      </div>

                      {/* Systems Integrated Bullets */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                          Systems Integrated:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.systemsIntegrated.map((sys) => (
                            <span key={sys} className="text-xs text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        {project.results[0]}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-[#00D7F0] transition-colors">
                        <span>Inquire Blueprint</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultModalOpen} onClose={() => setConsultModalOpen(false)} defaultIntent="commercial" />
    </>
  );
};

export default ProjectsSection;
