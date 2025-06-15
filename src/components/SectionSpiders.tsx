
import React, { useState, useEffect } from 'react';

const SPIDER_COUNT = 3;
const SECTION_PADDING = 5; // percentage

const Spider = () => {
  const [position, setPosition] = useState({ 
    top: Math.random() * (100 - 2 * SECTION_PADDING) + SECTION_PADDING, 
    left: Math.random() * (100 - 2 * SECTION_PADDING) + SECTION_PADDING,
  });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const moveSpider = () => {
      const nextPos = {
        top: Math.random() * (100 - 2 * SECTION_PADDING) + SECTION_PADDING,
        left: Math.random() * (100 - 2 * SECTION_PADDING) + SECTION_PADDING,
      };

      const deltaY = nextPos.top - position.top;
      const deltaX = nextPos.left - position.left;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      setRotation(angle + 90);
      setPosition(nextPos);
    };

    const interval = setInterval(moveSpider, Math.random() * 3000 + 4000); // Move every 4-7 seconds
    
    const initialMoveTimeout = setTimeout(moveSpider, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(initialMoveTimeout);
    };
  }, [position]);

  return (
    <div
      className="absolute z-5 pointer-events-none"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: 'top 5s linear, left 5s linear',
      }}
    >
      <div className="relative animate-bounce" style={{ animationDuration: '3s' }}>
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px #111)' }}>
            {/* Body & Head */}
            <ellipse cx="16" cy="17" rx="5" ry="7" fill="#404040"/>
            <circle cx="16" cy="9" r="3" fill="#525252"/>
            
            {/* Fangs */}
            <path d="M15 6 L 14 4" stroke="#737373" strokeWidth="0.8" />
            <path d="M17 6 L 18 4" stroke="#737373" strokeWidth="0.8" />
            
            {/* Animated Legs - left */}
            <path d="M13 11 C 7 9, 5 4, 1 2" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M13 11 C 7 9, 5 4, 1 2; M13 11 C 8 10, 6 5, 2 3; M13 11 C 7 9, 5 4, 1 2" />
            </path>
            <path d="M13 14 C 7 13, 3 11, -1 9" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M13 14 C 7 13, 3 11, -1 9; M13 14 C 8 14, 4 12, 0 10; M13 14 C 7 13, 3 11, -1 9" />
            </path>
            <path d="M13 19 C 7 20, 3 22, -1 25" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M13 19 C 7 20, 3 22, -1 25; M13 19 C 8 21, 4 23, 0 26; M13 19 C 7 20, 3 22, -1 25" />
            </path>
            <path d="M13 22 C 7 24, 5 29, 1 32" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M13 22 C 7 24, 5 29, 1 32; M13 22 C 8 25, 6 30, 2 33; M13 22 C 7 24, 5 29, 1 32" />
            </path>
            
            {/* Animated Legs - right */}
            <path d="M19 11 C 25 9, 27 4, 31 2" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M19 11 C 25 9, 27 4, 31 2; M19 11 C 24 10, 26 5, 30 3; M19 11 C 25 9, 27 4, 31 2" />
            </path>
            <path d="M19 14 C 25 13, 29 11, 33 9" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M19 14 C 25 13, 29 11, 33 9; M19 14 C 24 14, 28 12, 32 10; M19 14 C 25 13, 29 11, 33 9" />
            </path>
            <path d="M19 19 C 25 20, 29 22, 33 25" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M19 19 C 25 20, 29 22, 33 25; M19 19 C 24 21, 28 23, 32 26; M19 19 C 25 20, 29 22, 33 25" />
            </path>
            <path d="M19 22 C 25 24, 27 29, 31 32" stroke="#737373" strokeWidth="1.5" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M19 22 C 25 24, 27 29, 31 32; M19 22 C 24 25, 26 30, 30 33; M19 22 C 25 24, 27 29, 31 32" />
            </path>
        </svg>
      </div>
    </div>
  );
};

const SectionSpiders = () => {
  return (
    <>
      {[...Array(SPIDER_COUNT)].map((_, i) => (
        <Spider key={i} />
      ))}
    </>
  );
};

export default SectionSpiders;
