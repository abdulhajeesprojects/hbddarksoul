
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Target, Users } from 'lucide-react';

const SpiderManSection = () => {
  const [webShots, setWebShots] = useState(0);
  const [isSwinging, setIsSwinging] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState('classic');
  
  const suits = [
    { id: 'classic', name: 'Classic Suit', power: 'Web-Slinging' },
    { id: 'stealth', name: 'Stealth Suit', power: 'Invisibility' },
    { id: 'iron', name: 'Iron Spider', power: 'Mechanical Arms' },
    { id: 'symbiote', name: 'Symbiote Suit', power: 'Enhanced Strength' }
  ];

  const handleWebShoot = () => {
    setWebShots(prev => prev + 1);
    setIsSwinging(true);
    setTimeout(() => setIsSwinging(false), 1000);
  };

  const handleStartMission = () => {
    alert(`🕷️ Mission Started with ${suits.find(s => s.id === selectedSuit)?.name}! Your spider-sense is tingling...`);
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620207833984-754635c344d4?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Animated web overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-spidey-red rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-spidey-blue rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10 text-center text-white p-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 font-orbitron">
            <span className="text-spidey-red animate-pulse">Spider-</span>
            <span className="text-spidey-blue animate-bounce">Verse</span>
          </h2>
          <div className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
            🕷️ Your Friendly Neighborhood Hero 🕷️
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/40 border-spidey-red/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-spidey-red mb-4 flex items-center">
                <Zap className="mr-2" /> Origin Story
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Bitten by a radioactive spider, Peter Parker gained incredible powers. With great power comes great responsibility - a lesson learned through triumph and tragedy. Now he protects New York City from threats both street-level and cosmic.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-spidey-blue/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-spidey-blue mb-4 flex items-center">
                <Target className="mr-2" /> Spider Powers
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>🕸️ Web-slinging across skyscrapers</li>
                <li>🕷️ Spider-sense danger detection</li>
                <li>💪 Superhuman strength and agility</li>
                <li>🧗 Wall-crawling abilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Web Shooter */}
        <div className="mb-12 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-spidey-red">🕸️ Web Shooter Training</h3>
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">{webShots}</div>
              <div className="text-sm text-gray-300">Web Shots Fired</div>
            </div>
            <Button 
              onClick={handleWebShoot}
              className={`bg-spidey-red hover:bg-spidey-red/80 text-white font-bold text-lg px-8 py-4 ${isSwinging ? 'animate-bounce' : ''}`}
            >
              🕸️ Shoot Web!
            </Button>
          </div>
          {isSwinging && (
            <div className="text-center text-yellow-400 font-bold animate-pulse">
              *THWIP* Web attached! Swinging through the city! 🏙️
            </div>
          )}
        </div>

        {/* Suit Selection */}
        <div className="mb-12 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-spidey-blue flex items-center justify-center">
            <Shield className="mr-2" /> Choose Your Suit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {suits.map((suit) => (
              <Card 
                key={suit.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedSuit === suit.id 
                    ? 'bg-spidey-red/20 border-spidey-red ring-2 ring-spidey-red' 
                    : 'bg-black/40 border-gray-600 hover:border-spidey-blue'
                }`}
                onClick={() => setSelectedSuit(suit.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🕷️</div>
                  <div className="font-bold text-sm text-white">{suit.name}</div>
                  <div className="text-xs text-gray-400">{suit.power}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center text-gray-300">
            Selected: <span className="text-spidey-red font-bold">{suits.find(s => s.id === selectedSuit)?.name}</span>
          </div>
        </div>

        {/* Villains Section */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Green Goblin', threat: 'High', emoji: '🎭' },
            { name: 'Doctor Octopus', threat: 'Extreme', emoji: '🐙' },
            { name: 'Venom', threat: 'Maximum', emoji: '🖤' }
          ].map((villain, index) => (
            <Card key={villain.name} className="bg-black/40 border-red-500/30 backdrop-blur-sm hover:bg-red-900/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{villain.emoji}</div>
                <h4 className="text-xl font-bold text-red-400 mb-2">{villain.name}</h4>
                <div className={`text-sm font-semibold ${
                  villain.threat === 'High' ? 'text-yellow-400' :
                  villain.threat === 'Extreme' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  Threat Level: {villain.threat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Action */}
        <div className="text-center">
          <p className="max-w-3xl text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            The city never sleeps, and neither do its protectors. From petty crimes to cosmic threats, 
            Spider-Man swings into action. Join the web-slinger as he navigates the concrete jungle, 
            balancing his double life while keeping New York safe from the shadows that lurk within.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleStartMission}
              size="lg" 
              className="bg-spidey-red hover:bg-spidey-red/80 text-white font-bold text-xl px-12 py-6 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
            >
              🏙️ Swing Into Action
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-spidey-blue text-spidey-blue hover:bg-spidey-blue hover:text-white font-bold text-xl px-12 py-6 transition-all duration-300 hover:scale-110"
              onClick={() => alert('🕷️ Spider-sense activated! Danger detected nearby...')}
            >
              🕷️ Activate Spider-Sense
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiderManSection;
