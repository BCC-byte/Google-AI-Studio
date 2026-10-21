import React, { useState } from 'react';
import { HeroSection } from '../components/organisms/HeroSection';
import { SpaceSelectorSection } from '../components/organisms/SpaceSelectorSection';
import { SolutionCategoriesSection } from '../components/organisms/SolutionCategoriesSection';
import { TechnologyEcosystemSection } from '../components/organisms/TechnologyEcosystemSection';
import { ProjectEnquirySection } from '../components/organisms/ProjectEnquirySection';
import { RegionalPresenceSection } from '../components/organisms/RegionalPresenceSection';
import { ConsultationModal } from '../components/molecules/ConsultationModal';

export const Home: React.FC = () => {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultIntent, setConsultIntent] = useState<'smart-home' | 'commercial' | 'product-inquiry'>('smart-home');

  const handleOpenConsultation = (intent: 'smart-home' | 'commercial' = 'smart-home') => {
    setConsultIntent(intent);
    setConsultModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-[#080F14]">
      {/* 01 HERO: Your Global Partner for Smarter Spaces */}
      <HeroSection onOpenConsultation={() => handleOpenConsultation('smart-home')} />

      {/* 02 SPACE SELECTOR: Smart Living & Commercial */}
      <SpaceSelectorSection onOpenConsultation={handleOpenConsultation} />

      {/* 03 CORE SYSTEMS: Six Synchronized Disciplines */}
      <SolutionCategoriesSection onOpenConsultation={() => handleOpenConsultation('smart-home')} />

      {/* 04 TECHNOLOGY PARTNERS: Akubela / Akuvox / Audio Pro / Paradox / Proscalar */}
      <TechnologyEcosystemSection onOpenConsultation={() => handleOpenConsultation('smart-home')} />

      {/* 05 DIRECT INTERACTIVE ENQUIRY: Attract and Convert Visitors */}
      <ProjectEnquirySection />

      {/* 06 REGIONAL PRESENCE: Kuala Lumpur & Ho Chi Minh City */}
      <RegionalPresenceSection />

      {/* Modal Consultation Form */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        defaultIntent={consultIntent}
      />
    </div>
  );
};

export default Home;
