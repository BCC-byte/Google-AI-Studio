import React from 'react';
import { DataImpactSection } from '../components/organisms/DataImpactSection';
import { SectionEyebrow } from '../components/atoms/Typography';
import { RfqForm } from '../components/molecules/RfqForm';

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="w-full py-16 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionEyebrow>Environmental Telemetry</SectionEyebrow>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E1318] tracking-tight mb-4">
          Sustainable Tomorrow: Data & Impact
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Explore real-time energy telemetry across regional deployments and model your property's
          carbon offset and utility savings with our interactive ESG forecast engine.
        </p>
      </div>

      <DataImpactSection />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <RfqForm />
      </div>
    </div>
  );
};

export default SustainabilityPage;
