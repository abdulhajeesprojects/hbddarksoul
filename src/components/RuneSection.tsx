import { useState } from 'react';

const RuneSection = () => {
  const [activeCovenant, setActiveCovenant] = useState<number | null>(null);

  const covenants = [
    { symbol: "☀️", name: "SUNLIGHT", meaning: "Jolly Cooperation", blessing: "May you always find a friend to aid you in battle." },
    { symbol: "🕊️", name: "WAY OF WHITE", meaning: "Faith & Protection", blessing: "May your faith be a shield against the encroaching dark." },
    { symbol: "💀", name: "DARKWRAITH", meaning: "Power & Ambition", blessing: "May you claim the souls of your foes and grow ever stronger." },
    { symbol: "🌙", name: "DARKMOON", meaning: "Vengeance & Justice", blessing: "May you bring justice to the guilty." },
    { symbol: "🐲", name: "DRAGON", meaning: "Transcendence", blessing: "May you shed your mortal form and achieve everlasting power." },
    { symbol: "☠️", name: "GRAVELORD", meaning: "Misery & Calamity", blessing: "May your path be paved with the misfortune of others." }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="bg-card/20 border border-primary/10 rounded-2xl p-8 md:p-12">
          <div className="bg-card/50 rounded-xl p-2 inline-block mb-4">
            <h2 className="text-4xl md:text-6xl font-black text-center text-glow">
              COVENANT'S CALL
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Pledge your allegiance and receive a boon for your journey.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {covenants.map((covenant, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeCovenant === index ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setActiveCovenant(activeCovenant === index ? null : index)}
              >
                <div className="bg-card/50 border border-primary/30 rounded-lg p-6 text-center hover:border-primary hover:box-glow transition-all duration-300">
                  <div className="text-5xl text-primary mb-2 group-hover:animate-bounce">
                    {covenant.symbol}
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    {covenant.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Active Covenant Description */}
          {activeCovenant !== null && (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <div className="bg-card/70 border border-primary/50 rounded-lg p-8 box-glow">
                <div className="text-6xl text-primary mb-4">
                  {covenants[activeCovenant].symbol}
                </div>
                <h3 className="text-2xl font-black mb-2 text-glow">
                  {covenants[activeCovenant].name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {covenants[activeCovenant].meaning}
                </p>
                <p className="text-muted-foreground italic">
                  {covenants[activeCovenant].blessing}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RuneSection;
