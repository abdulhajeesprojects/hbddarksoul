
import React, { useState, useEffect } from 'react';

const SPIDER_COUNT = 5;

const Spider = () => {
  const [position, setPosition] = useState({ top: Math.random() * 100, left: Math.random() * 100 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const moveSpider = () => {
      const nextPos = {
        top: Math.random() * 100,
        left: Math.random() * 100,
      };

      const deltaY = nextPos.top - position.top;
      const deltaX = nextPos.left - position.left;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      setRotation(angle + 90); // Adjust for spider's upward orientation
      setPosition(nextPos);
    };

    const interval = setInterval(moveSpider, Math.random() * 4000 + 5000); // Move every 5-9 seconds
    
    const initialMoveTimeout = setTimeout(moveSpider, Math.random() * 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialMoveTimeout);
    };
  }, [position]);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        top: `${position.top}vh`,
        left: `${position.left}vw`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: 'top 8s linear, left 8s linear',
      }}
    >
      <div className="relative animate-bounce" style={{ animationDuration: '4s' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }}>
            {/* Body */}
            <ellipse cx="16" cy="16" rx="4" ry="6" fill="#facc15"/>
            {/* Head */}
            <circle cx="16" cy="9" r="2.5" fill="#facc15"/>
            {/* Legs - left */}
            <path d="M14 11 C 8 9, 6 4, 2 2" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M14 13 C 8 12, 4 10, 0 8" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M14 18 C 8 19, 4 21, 0 24" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M14 20 C 8 22, 6 27, 2 30" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            {/* Legs - right */}
            <path d="M18 11 C 24 9, 26 4, 30 2" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M18 13 C 24 12, 28 10, 32 8" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M18 18 C 24 19, 28 21, 32 24" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M18 20 C 24 22, 26 27, 30 30" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

const RoamingSpiders = () => {
  return (
    <>
      {[...Array(SPIDER_COUNT)].map((_, i) => (
        <Spider key={i} />
      ))}
    </>
  );
};

export default RoamingSpiders;
