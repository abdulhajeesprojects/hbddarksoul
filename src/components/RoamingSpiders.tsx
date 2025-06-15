
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
        {/* Spider body */}
        <div 
          className="w-3 h-4 bg-yellow-400 rounded-full relative"
          style={{ filter: 'drop-shadow(0 0 5px #facc15)'}}
        >
          {/* Spider legs */}
          <div className="absolute -left-2 top-1 w-3 h-px bg-yellow-700 transform -rotate-45"></div>
          <div className="absolute -right-2 top-1 w-3 h-px bg-yellow-700 transform rotate-45"></div>
          <div className="absolute -left-2 top-2 w-3 h-px bg-yellow-700 transform -rotate-12"></div>
          <div className="absolute -right-2 top-2 w-3 h-px bg-yellow-700 transform rotate-12"></div>
          <div className="absolute -left-2 bottom-1 w-3 h-px bg-yellow-700 transform rotate-45"></div>
          <div className="absolute -right-2 bottom-1 w-3 h-px bg-yellow-700 transform -rotate-45"></div>
          <div className="absolute -left-2 bottom-2 w-3 h-px bg-yellow-700 transform rotate-12"></div>
          <div className="absolute -right-2 bottom-2 w-3 h-px bg-yellow-700 transform -rotate-12"></div>
        </div>
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
