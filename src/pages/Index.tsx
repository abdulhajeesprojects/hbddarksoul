
import { Gamepad2, Gift } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThreeScene from '@/components/ThreeScene';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden p-4 font-orbitron">
      <ParticleBackground />

      <main className="relative z-10 flex flex-col items-center text-center animate-fade-in space-y-8">
        <div className="relative group">
          <img
            src="https://i.postimg.cc/Kz6hMXwj/HBDDS.jpg"
            alt="Dark Soul"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary animate-float box-glow"
          />
           <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="relative">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-glow">
            Happy Birthday
          </h1>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-primary animate-pulse-glow">
            Dark Soul
          </h2>
        </div>

        <p className="max-w-md text-lg text-muted-foreground italic">
          "LEVEL UP! May your loot be legendary, your K/D ratio epic, and your lag non-existent."
        </p>

        <ThreeScene />

        <div className="flex items-center space-x-4 text-primary text-glow">
            <Gamepad2 className="h-8 w-8 animate-pulse-glow" />
            <p className="text-xl font-semibold">Another year, another epic win!</p>
            <Gift className="h-8 w-8 animate-pulse-glow" />
        </div>

      </main>

      <footer className="absolute bottom-4 text-center w-full z-10">
        <p className="text-muted-foreground text-sm">
          With love and best wishes, <span className="text-primary text-glow">by Jasmin</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
