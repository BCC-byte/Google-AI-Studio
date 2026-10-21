import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  accent?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  accent = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-bold tracking-tight text-[#0E1318]';
  const levelClasses = {
    1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-extrabold',
    2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight font-bold',
    3: 'text-xl sm:text-2xl md:text-3xl leading-snug font-bold',
    4: 'text-base sm:text-lg font-semibold',
  };

  const Component = `h${level}` as React.ElementType;

  return (
    <Component
      className={`${baseClasses} ${levelClasses[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SectionEyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold tracking-widest uppercase mb-4 shadow-2xs ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-[#008EA0]" />
    <span>{children}</span>
  </div>
);

export const Text: React.FC<{
  variant?: 'body' | 'lead' | 'muted' | 'caption';
  children: React.ReactNode;
  className?: string;
}> = ({ variant = 'body', children, className = '' }) => {
  const variantClasses = {
    lead: 'text-lg sm:text-xl text-slate-600 font-normal leading-relaxed',
    body: 'text-sm sm:text-base text-slate-600 font-normal leading-relaxed',
    muted: 'text-xs sm:text-sm text-slate-500 leading-normal',
    caption: 'text-xs text-slate-400 font-medium tracking-wide uppercase',
  };

  return <p className={`${variantClasses[variant]} ${className}`}>{children}</p>;
};

export default { Heading, SectionEyebrow, Text };
