
import { Card, CardContent } from '@/components/ui/card';

const CharacterSection = () => {
  const characters = [
    {
      name: "KRATOS",
      title: "God of War",
      description: "The Ghost of Sparta blesses your journey with strength and wisdom.",
      quote: "We must be better than we were.",
      rune: "ᚲ"
    },
    {
      name: "ATREUS",
      title: "Son of Kratos",
      description: "The young archer wishes you adventures filled with discovery.",
      quote: "Can we really change who we are?",
      rune: "ᚨ"
    },
    {
      name: "MIMIR",
      title: "The Smartest Man Alive",
      description: "The wisest head in the Nine Realms shares his knowledge.",
      quote: "Happy birthday, brother! May your stories be legendary!",
      rune: "ᛗ"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
          PANTHEON BLESSINGS
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          The gods and heroes of Midgard send their birthday wishes
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card key={character.name} className="relative group bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:box-glow">
              <CardContent className="p-6">
                {/* Rune Symbol */}
                <div className="text-6xl text-primary text-center mb-4 animate-pulse-glow">
                  {character.rune}
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
    </section>
  );
};

export default CharacterSection;
