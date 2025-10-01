import { CSSProperties } from 'react';

interface GradualBlurProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  divCount?: number;
  className?: string;
}

export default function GradualBlur({
  position = 'bottom',
  strength = 2,
  divCount = 5,
  className = '',
}: GradualBlurProps) {
  const isVertical = position === 'top' || position === 'bottom';
  
  const containerStyle: CSSProperties = {
    position: 'absolute',
    ...(position === 'top' && { top: 0, left: 0, right: 0, height: '6rem' }),
    ...(position === 'bottom' && { bottom: 0, left: 0, right: 0, height: '6rem' }),
    ...(position === 'left' && { left: 0, top: 0, bottom: 0, width: '6rem' }),
    ...(position === 'right' && { right: 0, top: 0, bottom: 0, width: '6rem' }),
    pointerEvents: 'none',
    zIndex: 10,
  };

  return (
    <div style={containerStyle} className={className}>
      {Array.from({ length: divCount }).map((_, i) => {
        const progress = (i + 1) / divCount;
        const blurAmount = progress * strength;
        const opacity = progress;

        const layerStyle: CSSProperties = {
          position: 'absolute',
          inset: 0,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          opacity,
          ...(isVertical && {
            [position]: `${(i / divCount) * 100}%`,
            height: `${100 / divCount}%`,
          }),
          ...(!isVertical && {
            [position]: `${(i / divCount) * 100}%`,
            width: `${100 / divCount}%`,
          }),
        };

        return <div key={i} style={layerStyle} />;
      })}
    </div>
  );
}
