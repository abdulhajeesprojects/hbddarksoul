
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Axe, Shield, Mountain, Flame } from 'lucide-react';

const GodOfWarSection = () => {
  const [rage, setRage] = useState(0);
  const [isRaging, setIsRaging] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState('leviathan');
  const [currentRealm, setCurrentRealm] = useState('midgard');

  const weapons = [
    { id: 'leviathan', name: 'Leviathan Axe', damage: 'Frost', emoji: '🪓' },
    { id: 'blades', name: 'Blades of Chaos', damage: 'Fire', emoji: '⚔️' },
    { id: 'guardian', name: 'Guardian Shield', damage: 'Defensive', emoji: '🛡️' }
  ];

  const realms = [
    { id: 'midgard', name: 'Midgard', description: 'Realm of Humans' },
    { id: 'asgard', name: 'Asgard', description: 'Realm of the Æsir' },
    { id: 'jotunheim', name: 'Jötunheim', description: 'Realm of Giants' },
    { id: 'alfheim', name: 'Alfheim', description: 'Realm of Light Elves' }
  ];

  const handleRageMode = () => {
    setRage(prev => Math.min(prev + 25, 100));
    if (rage >= 75) {
      setIsRaging(true);
      setTimeout(() => setIsRaging(false), 3000);
    }
  };

  const handleJourney = () => {
    const weapon = weapons.find(w => w.id === selectedWeapon);
    const realm = realms.find(r => r.id === currentRealm);
    alert(`⚡ Boy! We journey to ${realm?.name} with the ${weapon?.name}. Stay close and be ready for anything!`);
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-slate-900/80" />
      
      {/* Animated Norse Runes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl text-gow-ice animate-pulse">ᚱ</div>
        <div className="absolute top-40 right-20 text-6xl text-gow-ice animate-bounce">ᚦ</div>
        <div className="absolute bottom-40 left-40 text-6xl text-gow-ice animate-ping">ᚨ</div>
        <div className="absolute bottom-20 right-40 text-6xl text-gow-ice animate-pulse">ᚷ</div>
      </div>

      <div className="relative z-10 text-center text-white p-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 text-gow-ice font-orbitron animate-pulse">
            God of War
          </h2>
          <div className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
            ⚡ The Norse Saga ⚡
          </div>
          <div className="text-xl text-gray-300 italic">
            "The cycle ends here. We must be better than this."
          </div>
        </div>

        {/* Kratos & Atreus Story */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-950/40 border-gow-ice/50 backdrop-blur-sm hover:bg-blue-900/60 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gow-ice mb-4 flex items-center">
                <Axe className="mr-2" /> Kratos - The Ghost of Sparta
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Once the God of War in ancient Greece, Kratos now resides in the Norse realms with his son Atreus. 
                Haunted by his past but seeking redemption, he must teach his son to be better than the monster he once was.
                The Leviathan Axe replaced his Blades of Chaos, but the warrior's rage still burns within.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-950/40 border-orange-400/50 backdrop-blur-sm hover:bg-blue-900/60 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center">
                <Mountain className="mr-2" /> Atreus - Boy with Divine Blood
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Half-giant, half-god, Atreus is discovering his true heritage while learning to survive in a harsh world. 
                His archery skills and growing magical abilities make him a formidable companion. 
                Together with his father, they embark on a journey that will reshape the Nine Realms forever.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Rage Meter */}
        <div className="mb-12 bg-blue-950/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-red-400 flex items-center justify-center">
            <Flame className="mr-2" /> Spartan Rage
          </h3>
          <div className="mb-6">
            <div className="w-full bg-gray-700 rounded-full h-6 mb-4">
              <div 
                className={`h-6 rounded-full transition-all duration-500 ${
                  rage >= 75 ? 'bg-red-500 animate-pulse' : 'bg-orange-500'
                }`}
                style={{ width: `${rage}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">{rage}%</div>
                <div className="text-sm text-gray-300">Rage Level</div>
              </div>
              <Button 
                onClick={handleRageMode}
                className={`bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 ${isRaging ? 'animate-bounce bg-red-800' : ''}`}
              >
                ⚡ Channel Rage
              </Button>
            </div>
          </div>
          {isRaging && (
            <div className="text-center text-red-400 font-bold animate-pulse text-xl">
              🔥 SPARTAN RAGE ACTIVATED! DEVASTATING ATTACKS UNLOCKED! 🔥
            </div>
          )}
        </div>

        {/* Weapon Selection */}
        <div className="mb-12 bg-blue-950/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-gow-ice flex items-center justify-center">
            <Shield className="mr-2" /> Arsenal of War
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {weapons.map((weapon) => (
              <Card 
                key={weapon.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedWeapon === weapon.id 
                    ? 'bg-gow-ice/20 border-gow-ice ring-2 ring-gow-ice' 
                    : 'bg-blue-950/40 border-gray-600 hover:border-gow-ice'
                }`}
                onClick={() => setSelectedWeapon(weapon.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{weapon.emoji}</div>
                  <div className="font-bold text-sm text-white">{weapon.name}</div>
                  <div className="text-xs text-gray-400">{weapon.damage} Damage</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nine Realms Explorer */}
        <div className="mb-12 bg-blue-950/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">🌍 Explore the Nine Realms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {realms.map((realm, index) => (
              <Card 
                key={realm.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in ${
                  currentRealm === realm.id 
                    ? 'bg-yellow-600/20 border-yellow-400 ring-2 ring-yellow-400' 
                    : 'bg-blue-950/40 border-gray-600 hover:border-yellow-400'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setCurrentRealm(realm.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="font-bold text-sm text-white mb-1">{realm.name}</div>
                  <div className="text-xs text-gray-400">{realm.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center text-gray-300">
            Current Realm: <span className="text-yellow-400 font-bold">{realms.find(r => r.id === currentRealm)?.name}</span>
          </div>
        </div>

        {/* Enemies Section */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Draugr', type: 'Undead Warrior', emoji: '💀', threat: 'Medium' },
            { name: 'Baldur', type: 'Æsir God', emoji: '👑', threat: 'Extreme' },
            { name: 'World Serpent', type: 'Ancient Giant', emoji: '🐍', threat: 'Legendary' }
          ].map((enemy, index) => (
            <Card key={enemy.name} className="bg-blue-950/40 border-red-500/30 backdrop-blur-sm hover:bg-red-900/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{enemy.emoji}</div>
                <h4 className="text-xl font-bold text-red-400 mb-1">{enemy.name}</h4>
                <div className="text-sm text-gray-400 mb-2">{enemy.type}</div>
                <div className={`text-sm font-semibold ${
                  enemy.threat === 'Medium' ? 'text-yellow-400' :
                  enemy.threat === 'Extreme' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {enemy.threat} Threat
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Story */}
        <div className="text-center">
          <p className="max-w-4xl text-lg md:text-xl mb-8 text-slate-300 leading-relaxed">
            In the unforgiving Norse wilderness, father and son must overcome their greatest challenge yet - each other. 
            As Atreus discovers his divine heritage and Kratos confronts his violent past, their journey becomes one of 
            survival, growth, and the unbreakable bonds of family. The old gods are dying, and a new age is dawning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleJourney}
              variant="outline" 
              size="lg" 
              className="border-2 border-gow-ice text-gow-ice hover:bg-gow-ice hover:text-gow-blue font-bold text-xl px-12 py-6 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
            >
              ⚡ Begin the Journey
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl px-12 py-6 transition-all duration-300 hover:scale-110"
              onClick={() => alert('🏹 Boy! Remember your training. Aim true and stay focused!')}
            >
              🏹 Train with Atreus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GodOfWarSection;
