import React from 'react';
import { RegionalPresence } from '../components/organisms/RegionalPresence';
import { SectionEyebrow } from '../components/atoms/Typography';
import { RfqForm } from '../components/molecules/RfqForm';

export const RegionalPage: React.FC = () => {
  return (
    <div className="w-full py-16 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionEyebrow>Regional Network</SectionEyebrow>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#080F14] tracking-tight mb-4">
          Regional Presence & Showroom Booking
        </h1>
        <p className="text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg">
          Headquartered at Setiawalk Puchong, Selangor, Malaysia, with our dedicated Indochina hub in
          Ho Chi Minh City, Vietnam, providing comprehensive trade support across Southeast Asia.
        </p>
      </div>

      <RegionalPresence />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <RfqForm />
      </div>
    </div>
  );
};

export default RegionalPage;
