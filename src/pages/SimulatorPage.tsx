import React from 'react';
import { ProductExplorer } from '../components/organisms/ProductExplorer';
import { SectionEyebrow } from '../components/atoms/Typography';
import { RfqForm } from '../components/molecules/RfqForm';

export const SimulatorPage: React.FC = () => {
  return (
    <div className="w-full py-16 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionEyebrow>Interactive Virtual Lab</SectionEyebrow>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E1318] tracking-tight mb-4">
          Experience Showcase & Space Simulator
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Interact with living room presets, perimeter defense nodes, and high-bandwidth mesh routers
          to witness how iONS hardware adapts in real time.
        </p>
      </div>

      <ProductExplorer />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <RfqForm />
      </div>
    </div>
  );
};

export default SimulatorPage;
