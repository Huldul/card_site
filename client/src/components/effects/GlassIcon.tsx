import { ReactNode } from 'react';
import './GlassIcons.css';

interface GlassIconProps {
  icon: ReactNode;
  color: string;
  label: string;
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  violet: 'linear-gradient(hsl(260, 80%, 65%), hsl(270, 70%, 60%))'
};

const GlassIcon = ({ icon, color, label, className }: GlassIconProps) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <button 
      className={`icon-btn ${className || ''}`.trim()} 
      aria-label={label} 
      type="button"
    >
      <span className="icon-btn__back" style={getBackgroundStyle(color)}></span>
      <span className="icon-btn__front">
        <span className="icon-btn__icon" aria-hidden="true">
          {icon}
        </span>
      </span>
      <span className="icon-btn__label">{label}</span>
    </button>
  );
};

export default GlassIcon;
