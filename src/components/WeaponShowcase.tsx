
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WeaponShowcase = () => {
  const weapons = [
    {
      name: "MOONLIGHT GREATSWORD",
      description: "A legendary blade of pure magic, its otherworldly light guides the worthy.",
      power: "Magic Damage",
      emoji: "🗡️",
      color: "text-green-400"
    },
    {
      name: "ZWEIHANDER",
      description: "A colossal greatsword that can flatten even the mightiest of foes. What are rings you got bithc?",
      power: "Stagger Damage",
      emoji: "⚔️",
      color: "text-gray-400"
    },
    {
      name: "BLACK KNIGHT HALBERD",
      description: "Wielded by the charred knights of Lordran, a weapon of immense power.",
      power: "Bonus vs Demons",
      emoji: "🪓",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-card/20 border border-primary/10 rounded-2xl p-8 md:p-12">
          <div className="bg-card/50 rounded-xl p-2 inline-block mb-4">
            <h2 className="text-4xl md:text-6xl font-black text-center text-glow">
              ARMORY OF THE FORGOTTEN
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Legendary arms, waiting to be claimed by the Ashen One.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {weapons.map((weapon) => (
              <Card key={weapon.name} className="relative group bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:box-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-8xl mb-6 animate-float">
                    {weapon.emoji}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 text-glow">
                    {weapon.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {weapon.description}
                  </p>
                  
                  <div className={`inline-block px-4 py-2 rounded-full border-2 border-current ${weapon.color} font-bold text-sm animate-pulse-glow`}>
                    {weapon.power}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-primary font-semibold animate-pulse-glow">
              "Choose your weapon, Ashen One. The embers await their heir."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponShowcase;
