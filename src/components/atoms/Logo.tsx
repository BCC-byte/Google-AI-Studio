import React from 'react';
import { Link } from 'react-router-dom';

export const IONS_GLOBAL_LOGO_URL =
  'https://res.cloudinary.com/zl6engwm/image/upload/v1791345207/Ions_Global_Logo_Light_BG.png';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
  variant = 'light',
}) => {
  const sizeClasses = {
    sm: 'h-16 sm:h-20',
    md: 'h-24 sm:h-28 md:h-36', // 5 times bigger than previous h-9 (36px -> ~144px)
    lg: 'h-32 sm:h-40 md:h-48',
  };

  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      id="brand-logo-link"
      className={`group relative inline-flex flex-col select-none transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Ions Global - Smarter Spaces, Connected Living"
    >
      <img
        src={IONS_GLOBAL_LOGO_URL}
        alt="Ions Global"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark ? 'brightness-0 invert' : ''
        }`}
      />

      {showTagline && (
        <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-1">
          Smarter Spaces. Connected Living.
        </span>
      )}
    </Link>
  );
};

export default Logo;
