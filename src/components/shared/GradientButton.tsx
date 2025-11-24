import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BUTTON_STYLES } from '../../constants/theme';

interface GradientButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onClick,
  children,
  icon: Icon,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseStyles = variant === 'primary' ? BUTTON_STYLES.primary : BUTTON_STYLES.secondary;
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed transform-none' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabledStyles} ${className}`}
    >
      <span className="flex items-center justify-center space-x-2">
        {Icon && <Icon className="h-5 w-5" />}
        <span>{children}</span>
      </span>
    </button>
  );
};

export default GradientButton;
