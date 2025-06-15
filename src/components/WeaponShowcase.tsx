import { Card, CardContent } from '@/components/ui/card';

const WeaponShowcase = () => {
  const weapons = [
    {
      name: "LEVIATHAN AXE",
      description: "Forged in the heart of winter, this axe channels the power of frost and fury.",
      power: "Frost Damage",
      emoji: "🪓",
      color: "text-blue-400"
    },
    {
      name: "BLADES OF CHAOS",
      description: "Chained weapons of destruction, forever bound to the Ghost of Sparta.",
      power: "Fire Damage",
      emoji: "⚔️",
      color: "text-red-400"
    },
    {
      name: "MJÖLNIR",
      description: "The legendary hammer of Thor, worthy only to the most powerful warriors.",
      power: "Lightning Damage",
      emoji: "🔨",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
          ARSENAL OF LEGENDS
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Weapons worthy of a legendary warrior's birthday
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {weapons.map((weapon, index) => (
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
                
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary to-destructive group-hover:opacity-10 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-primary font-semibold animate-pulse-glow">
            "Choose your weapon, Dark Soul. The realms await your conquest!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeaponShowcase;
