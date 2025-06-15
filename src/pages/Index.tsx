
import { Swords, Shield, Flame, Crown, Zap, Mountain } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThreeScene from '@/components/ThreeScene';
import HeroSection from '@/components/HeroSection';
import CharacterSection from '@/components/CharacterSection';
import RuneSection from '@/components/RuneSection';
import WeaponShowcase from '@/components/WeaponShowcase';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden font-orbitron">
      <ParticleBackground />
      
      {/* Background Norse Pattern */}
      <div className="fixed inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCAyIDQgNGMwIDItMiA0LTQgNHMtNC0yLTQtNHptMC0zMGMwLTIgMi00IDQtNHM0IDIgNCA0YzAgMi0yIDQtNCA0cy00LTItNC00em0tMjAgMGMwLTIgMi00IDQtNHM0IDIgNCA0YzAgMi0yIDQtNCA0cy00LTItNC00eiIvPgo8L2c+CjwvZz4KPHN2Zz4=')] pointer-events-none"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Divider with Norse Runes */}
        <div className="flex justify-center items-center py-8">
          <div className="flex space-x-4 text-primary">
            <Swords className="h-8 w-8 animate-pulse-glow" />
            <Shield className="h-8 w-8 animate-pulse-glow" />
            <Flame className="h-8 w-8 animate-pulse-glow" />
          </div>
        </div>

        {/* Character Section */}
        <CharacterSection />
        
        {/* 3D Scene */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-glow">
              REALM OF LEGENDS
            </h2>
            <ThreeScene />
          </div>
        </section>

        {/* Rune Blessing Section */}
        <RuneSection />

        {/* Weapon Showcase */}
        <WeaponShowcase />

        {/* Final Epic Message */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="relative group">
              <h3 className="text-4xl md:text-6xl font-black uppercase text-primary animate-pulse-glow mb-4">
                WARRIOR'S ASCENSION
              </h3>
              <p className="text-xl text-muted-foreground italic mb-8">
                "The gods themselves celebrate your legend, Dark Soul"
              </p>
              <div className="flex justify-center items-center space-x-6 text-primary">
                <Crown className="h-12 w-12 animate-float" />
                <Zap className="h-12 w-12 animate-pulse-glow" />
                <Mountain className="h-12 w-12 animate-float" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-primary/20">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm mb-2">
            Forged in the fires of Muspelheim, blessed by the Allfather
          </p>
          <p className="text-primary text-glow font-semibold">
            With divine honor and eternal friendship - by Jasmin
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
