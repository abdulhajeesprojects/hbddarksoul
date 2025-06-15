
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CharacterSection = () => {
  const characters = [
    {
      name: "SOLAIRE OF ASTORA",
      title: "Warrior of Sunlight",
      description: "He offers you his sign of friendship for the trials ahead.",
      quote: "Praise the Sun! \\[T]/",
      symbol: "☀️"
    },
    {
      name: "SIEGMEYER OF CATARINA",
      title: "Knight of Catarina",
      description: "He wishes you a joyous birthday, and perhaps a celebratory nap.",
      quote: "Hmm... Mmm... Still closed, still closed...",
      symbol: "🛡️"
    },
    {
      name: "ARTORIAS",
      title: "The Abysswalker",
      description: "A legendary knight lends his unwavering resolve to your cause.",
      quote: "Surely thine kind are more than pure dark.",
      symbol: "🐺"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-card/20 border border-primary/10 rounded-2xl p-8 md:p-12">
          <div className="bg-card/50 rounded-xl p-2 inline-block mb-4">
            <h2 className="text-4xl md:text-6xl font-black text-center text-glow">
              GREETINGS FROM LORDRAN
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Hollows and heroes alike gather to honor your day
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((character) => (
              <Card key={character.name} className="relative group bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:box-glow">
                <CardContent className="p-6">
                  {/* Symbol */}
                  <div className="text-6xl text-primary text-center mb-4">
                    {character.symbol}
                  </div>
                  
                  {/* Character Info */}
                  <h3 className="text-2xl font-black text-center mb-2 text-glow">
                    {character.name}
                  </h3>
                  <p className="text-primary text-center font-semibold mb-4">
                    {character.title}
                  </p>
                  <p className="text-muted-foreground text-center mb-4 text-sm leading-relaxed">
                    {character.description}
                  </p>
                  
                  {/* Quote */}
                  <div className="border-t border-primary/20 pt-4">
                    <p className="text-primary text-center italic text-sm">
                      "{character.quote}"
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
