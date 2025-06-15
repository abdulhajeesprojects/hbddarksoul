import React from 'react';

const SpiderWebAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Spider Web SVG */}
      <svg 
        className="absolute top-4 left-4 w-32 h-32 opacity-30 animate-pulse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10 L50 90" stroke="white" strokeWidth="0.5" opacity="0.7"/>
        <path d="M10 50 L90 50" stroke="white" strokeWidth="0.5" opacity="0.7"/>
        <path d="M25 25 L75 75" stroke="white" strokeWidth="0.5" opacity="0.7"/>
        <path d="M75 25 L25 75" stroke="white" strokeWidth="0.5" opacity="0.7"/>
        
        {/* Concentric web circles */}
        <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="0.3" fill="none" opacity="0.6"/>
        <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5"/>
        <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4"/>
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.3" fill="none" opacity="0.3"/>
      </svg>

      {/* Additional web in top right */}
      <svg 
        className="absolute top-4 right-4 w-24 h-24 opacity-25 animate-pulse"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 20 L80 20 L80 80" stroke="white" strokeWidth="0.8" opacity="0.6"/>
        <path d="M20 20 L20 80 L80 80" stroke="white" strokeWidth="0.8" opacity="0.6"/>
        <path d="M30 20 L30 70 L80 70" stroke="white" strokeWidth="0.4" opacity="0.5"/>
        <path d="M20 30 L70 30 L70 80" stroke="white" strokeWidth="0.4" opacity="0.5"/>
      </svg>

      {/* Floating web strands */}
      <div className="absolute top-16 left-1/4 w-px h-32 bg-gradient-to-b from-white/30 to-transparent animate-sway"></div>
      <div className="absolute top-24 right-1/3 w-px h-40 bg-gradient-to-b from-white/25 to-transparent animate-sway" style={{ animationDelay: '2s' }}></div>

      {/* Subtle web particles */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
};

export default SpiderWebAnimation;
