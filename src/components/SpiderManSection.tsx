
import { Button } from '@/components/ui/button';

const SpiderManSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620207833984-754635c344d4?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center text-white p-4 animate-fade-in">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 font-orbitron">
          <span className="text-spidey-red">Spider-</span><span className="text-spidey-blue">Verse</span>
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          With great power comes great responsibility. Swing through the skyscrapers of New York and take on the city's most dangerous villains.
        </p>
        <Button size="lg" className="bg-spidey-red hover:bg-spidey-red/80 text-white font-bold text-lg">
          Enter the City
        </Button>
      </div>
    </section>
  );
};

export default SpiderManSection;
