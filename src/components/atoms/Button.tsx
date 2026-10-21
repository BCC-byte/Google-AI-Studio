import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'cyan' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none whitespace-nowrap active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 rounded-lg gap-2.5',
  };

  const variantClasses = {
    // Primary: ions-ink background with crisp white text, hover transitions with accessible border
    primary:
      'bg-[#080F14] text-white hover:bg-[#080F14] border border-[#080F14] shadow-xs font-semibold',
    // Cyan: used on dark backgrounds or prominent brand action with dark text
    cyan:
      'bg-[#00D7F0] text-[#080F14] hover:bg-[#38e3f8] border border-[#00D7F0] shadow-xs font-semibold',
    // Accessible cyan on light: uses ions-cyan-deep
    secondary:
      'bg-[#F8FAFC] text-[#080F14] border border-[#E5E7EB] hover:border-[#6B7280] hover:bg-white shadow-xs font-medium',
    outline:
      'bg-transparent text-[#080F14] border border-[#E5E7EB] hover:border-[#00D7F0] hover:text-[#00D7F0] hover:bg-[#F8FAFC]',
    ghost:
      'bg-transparent text-[#6B7280] hover:text-[#080F14] hover:bg-[#F8FAFC]',
    glass:
      'bg-white/85 text-[#080F14] backdrop-blur-md border border-[#E5E7EB] hover:bg-white shadow-xs',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
};

export default Button;
