
import { useState } from 'react';

const RuneSection = () => {
  const [activeRune, setActiveRune] = useState<number | null>(null);

  const runes = [
    { symbol: "ᚠ", name: "FEHU", meaning: "Wealth & Prosperity", blessing: "May your gaming achievements multiply like gold" },
    { symbol: "ᚢ", name: "URUZ", meaning: "Strength & Health", blessing: "May your reflexes stay sharp and your spirit strong" },
    { symbol: "ᚦ", name: "THURISAZ", meaning: "Protection", blessing: "May you be shielded from lag and trolls" },
    { symbol: "ᚨ", name: "ANSUZ", meaning: "Wisdom", blessing: "May your strategies be legendary and victories epic" },
    { symbol: "ᚱ", name: "RAIDHO", meaning: "Journey", blessing: "May your gaming journey be filled with adventure" },
    { symbol: "ᚲ", name: "KENAZ", meaning: "Knowledge", blessing: "May you master every game you play" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
          RUNIC PROPHECY
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          The ancient runes reveal your destiny, Dark Soul
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {runes.map((rune, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeRune === index ? 'scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setActiveRune(activeRune === index ? null : index)}
            >
              <div className="bg-card/50 border border-primary/30 rounded-lg p-6 text-center hover:border-primary hover:box-glow transition-all duration-300">
                <div className="text-5xl text-primary mb-2 animate-pulse-glow group-hover:animate-bounce">
                  {rune.symbol}
                </div>
                <p className="text-xs font-semibold text-muted-foreground">
                  {rune.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Active Rune Description */}
        {activeRune !== null && (
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="bg-card/70 border border-primary/50 rounded-lg p-8 box-glow">
              <div className="text-6xl text-primary mb-4 animate-pulse-glow">
                {runes[activeRune].symbol}
              </div>
              <h3 className="text-2xl font-black mb-2 text-glow">
                {runes[activeRune].name}
              </h3>
              <p className="text-primary font-semibold mb-4">
                {runes[activeRune].meaning}
              </p>
              <p className="text-muted-foreground italic">
                {runes[activeRune].blessing}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RuneSection;
