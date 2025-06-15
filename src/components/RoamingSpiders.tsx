
import React, { useState, useEffect } from 'react';

const SPIDER_COUNT = 2;

const Spider = () => {
  const [spiderState, setSpiderState] = useState({ 
    top: Math.random() * 100, 
    left: Math.random() > 0.5 ? -10 : 110,
    rotation: 0
  });

  useEffect(() => {
    const moveSpider = () => {
      setSpiderState(currentState => {
        const nextPos = {
          top: Math.random() * 100,
          left: Math.random() * 100,
        };

        const deltaY = nextPos.top - currentState.top;
        const deltaX = nextPos.left - currentState.left;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        return {
          top: nextPos.top,
          left: nextPos.left,
          rotation: angle + 90,
        };
      });
    };

    const interval = setInterval(moveSpider, Math.random() * 4000 + 5000);
    const initialMoveTimeout = setTimeout(moveSpider, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(initialMoveTimeout);
    };
  }, []);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        top: `${spiderState.top}vh`,
        left: `${spiderState.left}vw`,
        transform: `translate(-50%, -50%) rotate(${spiderState.rotation}deg)`,
        transition: 'top 8s linear, left 8s linear',
      }}
    >
      <div className="relative animate-bounce" style={{ animationDuration: '4s' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 3px #fde047)' }}>
            <ellipse cx="16" cy="16" rx="4" ry="6" fill="#facc15"/>
            <circle cx="16" cy="9" r="2.5" fill="#facc15"/>
            
            <path d="M14 11 C 8 9, 6 4, 2 2" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M14 11 C 8 9, 6 4, 2 2; M14 11 C 9 10, 7 5, 3 3; M14 11 C 8 9, 6 4, 2 2" />
            </path>
            <path d="M14 13 C 8 12, 4 10, 0 8" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M14 13 C 8 12, 4 10, 0 8; M14 13 C 9 13, 5 11, 1 9; M14 13 C 8 12, 4 10, 0 8" />
            </path>
            <path d="M14 18 C 8 19, 4 21, 0 24" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M14 18 C 8 19, 4 21, 0 24; M14 18 C 9 20, 5 22, 1 25; M14 18 C 8 19, 4 21, 0 24" />
            </path>
            <path d="M14 20 C 8 22, 6 27, 2 30" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M14 20 C 8 22, 6 27, 2 30; M14 20 C 9 23, 7 28, 3 31; M14 20 C 8 22, 6 27, 2 30" />
            </path>
            
            <path d="M18 11 C 24 9, 26 4, 30 2" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M18 11 C 24 9, 26 4, 30 2; M18 11 C 23 10, 25 5, 29 3; M18 11 C 24 9, 26 4, 30 2" />
            </path>
            <path d="M18 13 C 24 12, 28 10, 32 8" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M18 13 C 24 12, 28 10, 32 8; M18 13 C 23 13, 27 11, 31 9; M18 13 C 24 12, 28 10, 32 8" />
            </path>
            <path d="M18 18 C 24 19, 28 21, 32 24" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" begin="0.2s" repeatCount="indefinite" values="M18 18 C 24 19, 28 21, 32 24; M18 18 C 23 20, 27 22, 31 25; M18 18 C 24 19, 28 21, 32 24" />
            </path>
            <path d="M18 20 C 24 22, 26 27, 30 30" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round">
                 <animate attributeName="d" dur="0.4s" repeatCount="indefinite" values="M18 20 C 24 22, 26 27, 30 30; M18 20 C 23 23, 25 28, 29 31; M18 20 C 24 22, 26 27, 30 30" />
            </path>
        </svg>
      </div>
    </div>
  );
};

const RoamingSpiders = () => {
  const [showSpiders, setShowSpiders] = useState(false);

  useEffect(() => {
    // Add a delay to ensure DOM is fully loaded
    const setupObserver = () => {
      const spiderManSection = document.getElementById('spiderman-section');
      const godOfWarSection = document.getElementById('godofwar-section');

      console.log('Setting up spider observer', { spiderManSection, godOfWarSection });

      if (!spiderManSection || !godOfWarSection) {
        console.log('Sections not found, retrying in 1 second');
        setTimeout(setupObserver, 1000);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log('Spider intersection:', entry.target.id, entry.isIntersecting);
            if (entry.target.id === 'spiderman-section' && entry.isIntersecting) {
              setShowSpiders(true);
            }
            if (entry.target.id === 'godofwar-section' && entry.isIntersecting) {
              setShowSpiders(false);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(spiderManSection);
      observer.observe(godOfWarSection);

      return () => {
        console.log('Cleaning up spider observer');
        observer.disconnect();
      };
    };

    const cleanup = setupObserver();
    return cleanup;
  }, []);

  return (
    <>
      {showSpiders && [...Array(SPIDER_COUNT)].map((_, i) => (
        <Spider key={i} />
      ))}
    </>
  );
};

export default RoamingSpiders;
