import React from 'react';

interface CyanArcProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  orientation?: 'top' | 'bottom';
  align?: 'left' | 'center' | 'right';
}

export const CyanArc: React.FC<CyanArcProps> = ({
  className = '',
  width = 140,
  height = 14,
  orientation = 'top',
  align = 'left',
}) => {
  const alignClass = {
    left: 'justify-start',
    center: 'justify-center mx-auto',
    right: 'justify-end ml-auto',
  }[align];

  const pathD =
    orientation === 'top'
      ? 'M2 12C35 3 105 3 138 12'
      : 'M2 2C35 11 105 11 138 2';

  return (
    <div className={`flex items-center pointer-events-none ${alignClass} ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={pathD}
          stroke="#00D7F0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={pathD}
          stroke="#00D7F0"
          strokeWidth="0.8"
          strokeOpacity="0.5"
          strokeDasharray="4 3"
        />
      </svg>
    </div>
  );
};

export default CyanArc;
