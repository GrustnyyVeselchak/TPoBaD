import React from 'react';

interface HoodIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const HoodIcon: React.FC<HoodIconProps> = ({ 
  width = 256, 
  height = 256, 
  className = '' 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256" 
      width={width} 
      height={height}
      className={className}
      role="img" 
      aria-label="Hooded hacker icon"
    >
      {/* Черный фон */}
      <rect width="100%" height="100%" fill="black"/>
      
      <defs>
        <clipPath id="hoodClip">
          <path d="
            M40 80
            C40 40, 110 12, 128 40
            C146 12, 216 40, 216 80
            C216 120, 190 140, 166 152
            C160 158, 160 170, 160 192
            L96 192
            C96 170, 96 158, 90 152
            C66 140, 40 120, 40 80
            Z" fill="white"/>
        </clipPath>
        
        <mask id="faceMask">
          <rect width="100%" height="100%" fill="black"/>
          <circle cx="128" cy="108" r="28" fill="white"/>
        </mask>
      </defs>
      
      <g id="digitGrid" clipPath="url(#hoodClip)" transform="translate(12,12)"></g>
      <rect width="100%" height="100%" fill="black" fillOpacity="0.0" mask="url(#faceMask)"/>
    </svg>
  );
};

export default HoodIcon;