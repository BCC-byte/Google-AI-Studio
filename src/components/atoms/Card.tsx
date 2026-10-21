import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'interactive' | 'accent' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  glow = false,
  className = '',
  ...props
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 sm:p-10',
  };

  const variantClasses = {
    default: 'bg-white border border-[#E5E7EB] text-[#080F14] shadow-xs',
    elevated: 'bg-white border border-[#E5E7EB] shadow-md text-[#080F14]',
    glass: 'bg-white/90 backdrop-blur-md border border-[#E5E7EB] text-[#080F14] shadow-xs',
    interactive:
      'bg-white border border-[#E5E7EB] text-[#080F14] hover:border-[#00D7F0] hover:shadow-md transition-all duration-300 group',
    accent: 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#080F14]',
    dark: 'bg-[#080F14] border border-[#080F14] text-white',
  };

  return (
    <div
      className={`rounded-2xl relative overflow-hidden transition-all duration-300 ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
