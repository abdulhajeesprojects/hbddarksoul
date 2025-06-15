
import { Button } from '@/components/ui/button';

const Gta5Section = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503437313881-503a91226c02?q=80&w=1974&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white p-4 animate-fade-in">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 text-gta-pink font-orbitron">
          Welcome to Los Santos
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8 font-semibold">
          It's a city of saints and sinners. Make a name for yourself in the sprawling sun-soaked metropolis. Anything is possible.
        </p>
        <Button size="lg" className="bg-gta-green hover:bg-gta-green/80 text-white font-bold text-lg">
          Start the Heist
        </Button>
      </div>
    </section>
  );
};

export default Gta5Section;
