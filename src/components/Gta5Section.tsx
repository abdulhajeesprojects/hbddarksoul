
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car, DollarSign, Target, Users } from 'lucide-react';

const Gta5Section = () => {
  const [money, setMoney] = useState(0);
  const [wantedLevel, setWantedLevel] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState('michael');
  const [currentHeist, setCurrentHeist] = useState('fleeca');
  
  const characters = [
    { id: 'michael', name: 'Michael De Santa', skill: 'Planning', emoji: '🏢' },
    { id: 'franklin', name: 'Franklin Clinton', skill: 'Driving', emoji: '🚗' },
    { id: 'trevor', name: 'Trevor Phillips', skill: 'Chaos', emoji: '💀' }
  ];

  const heists = [
    { id: 'fleeca', name: 'Fleeca Job', payout: '$115,000', difficulty: 'Easy' },
    { id: 'prison', name: 'Prison Break', payout: '$400,000', difficulty: 'Medium' },
    { id: 'humane', name: 'Humane Labs', payout: '$675,000', difficulty: 'Hard' },
    { id: 'pacific', name: 'Pacific Standard', payout: '$1,250,000', difficulty: 'Extreme' }
  ];

  const handleCrime = () => {
    const earnings = Math.floor(Math.random() * 50000) + 10000;
    setMoney(prev => prev + earnings);
    setWantedLevel(prev => Math.min(prev + 1, 5));
    
    setTimeout(() => {
      setWantedLevel(prev => Math.max(prev - 1, 0));
    }, 3000);
  };

  const handleHeist = () => {
    const heist = heists.find(h => h.id === currentHeist);
    const character = characters.find(c => c.id === selectedCharacter);
    alert(`🎯 ${character?.name} is leading the ${heist?.name}! Potential payout: ${heist?.payout}. Let's make this score count!`);
  };

  const getWantedStars = () => {
    return '⭐'.repeat(wantedLevel) + '☆'.repeat(5 - wantedLevel);
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503437313881-503a91226c02?q=80&w=1974&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-black/80" />
      
      {/* Animated city elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gta-pink rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gta-green rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 text-center text-white p-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 text-gta-pink font-orbitron animate-pulse">
            Los Santos
          </h2>
          <div className="text-3xl md:text-4xl font-bold mb-6 text-gta-green">
            🌴 Grand Theft Auto V 🌴
          </div>
          <div className="text-xl text-gray-300 italic">
            "Welcome to Los Santos - where dreams come true... for a price."
          </div>
        </div>

        {/* Character Profiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { 
              name: 'Michael De Santa', 
              role: 'The Mastermind', 
              bg: 'Retired bank robber living in witness protection',
              color: 'blue',
              emoji: '🏢'
            },
            { 
              name: 'Franklin Clinton', 
              role: 'The Driver', 
              bg: 'Young repo man from the hood seeking bigger opportunities',
              color: 'green',
              emoji: '🚗'
            },
            { 
              name: 'Trevor Phillips', 
              role: 'The Psychopath', 
              bg: 'Unhinged criminal living in the desert wastelands',
              color: 'orange',
              emoji: '💀'
            }
          ].map((char, index) => (
            <Card key={char.name} className="bg-black/40 border-gta-pink/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{char.emoji}</div>
                <h3 className={`text-xl font-bold mb-2 ${
                  char.color === 'blue' ? 'text-blue-400' :
                  char.color === 'green' ? 'text-gta-green' : 'text-orange-400'
                }`}>
                  {char.name}
                </h3>
                <div className="text-gta-pink font-semibold mb-2">{char.role}</div>
                <p className="text-gray-300 text-sm">{char.bg}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money & Wanted Level */}
        <div className="mb-12 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-gta-green flex items-center justify-center">
            <DollarSign className="mr-2" /> Criminal Enterprise
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-gta-green mb-2">${money.toLocaleString()}</div>
              <div className="text-gray-300 mb-4">Cash on Hand</div>
              <Button 
                onClick={handleCrime}
                className="bg-gta-green hover:bg-gta-green/80 text-white font-bold text-lg px-8 py-4"
              >
                💰 Commit Crime
              </Button>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">{getWantedStars()}</div>
              <div className="text-gray-300 mb-2">Wanted Level</div>
              <div className={`text-sm font-semibold ${
                wantedLevel === 0 ? 'text-green-400' :
                wantedLevel <= 2 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {wantedLevel === 0 ? 'Clean' : 
                 wantedLevel <= 2 ? 'Low Heat' : 'High Alert!'}
              </div>
            </div>
          </div>
        </div>

        {/* Character Selection */}
        <div className="mb-12 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-gta-pink flex items-center justify-center">
            <Users className="mr-2" /> Choose Your Protagonist
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {characters.map((character) => (
              <Card 
                key={character.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedCharacter === character.id 
                    ? 'bg-gta-pink/20 border-gta-pink ring-2 ring-gta-pink' 
                    : 'bg-black/40 border-gray-600 hover:border-gta-pink'
                }`}
                onClick={() => setSelectedCharacter(character.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{character.emoji}</div>
                  <div className="font-bold text-sm text-white">{character.name}</div>
                  <div className="text-xs text-gray-400">{character.skill}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Heist Planning */}
        <div className="mb-12 bg-black/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400 flex items-center justify-center">
            <Target className="mr-2" /> Plan Your Heist
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {heists.map((heist, index) => (
              <Card 
                key={heist.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in ${
                  currentHeist === heist.id 
                    ? 'bg-yellow-600/20 border-yellow-400 ring-2 ring-yellow-400' 
                    : 'bg-black/40 border-gray-600 hover:border-yellow-400'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setCurrentHeist(heist.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="font-bold text-sm text-white mb-1">{heist.name}</div>
                  <div className="text-xs text-gta-green mb-1">{heist.payout}</div>
                  <div className={`text-xs font-semibold ${
                    heist.difficulty === 'Easy' ? 'text-green-400' :
                    heist.difficulty === 'Medium' ? 'text-yellow-400' :
                    heist.difficulty === 'Hard' ? 'text-orange-400' : 'text-red-400'
                  }`}>
                    {heist.difficulty}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center text-gray-300">
            Selected Heist: <span className="text-yellow-400 font-bold">{heists.find(h => h.id === currentHeist)?.name}</span>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="mb-12 grid md:grid-cols-4 gap-4">
          {[
            { name: 'Street Racing', icon: '🏎️', description: 'Illegal street races' },
            { name: 'Stock Market', icon: '📈', description: 'Manipulate LCN & BAWSAQ' },
            { name: 'Properties', icon: '🏠', description: 'Buy businesses & real estate' },
            { name: 'Gun Running', icon: '🔫', description: 'Weapons trafficking empire' }
          ].map((activity, index) => (
            <Card key={activity.name} className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 animate-fade-in hover:scale-105" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{activity.icon}</div>
                <h4 className="text-lg font-bold text-purple-400 mb-1">{activity.name}</h4>
                <div className="text-xs text-gray-400">{activity.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Story */}
        <div className="text-center">
          <p className="max-w-4xl text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            Los Santos is a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities struggling to stay afloat. 
            Three unique criminals plot their own chances of survival and success in the most corrupt city in America. 
            When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with the worst and most deranged elements of the criminal underworld, they must pull off a series of dangerous heists to survive.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleHeist}
              size="lg" 
              className="bg-gta-green hover:bg-gta-green/80 text-white font-bold text-xl px-12 py-6 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
            >
              🎯 Execute Heist
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gta-pink text-gta-pink hover:bg-gta-pink hover:text-white font-bold text-xl px-12 py-6 transition-all duration-300 hover:scale-110"
              onClick={() => alert('🌴 Welcome to Los Santos! The land of opportunity awaits... if you can survive it!')}
            >
              🌴 Explore Los Santos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gta5Section;
