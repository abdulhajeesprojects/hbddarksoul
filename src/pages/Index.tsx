
import { Swords, Shield, Flame, Crown, Skull } from 'lucide-react';
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
      
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Divider with themed icons */}
        <div className="flex justify-center items-center py-8">
          <div className="flex space-x-4 text-primary">
            <Swords className="h-8 w-8" />
            <Shield className="h-8 w-8" />
            <Flame className="h-8 w-8" />
          </div>
        </div>

        {/* Character Section */}
        <CharacterSection />
        
        {/* 3D Scene */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card/20 border border-primary/10 rounded-2xl p-4 md:p-8">
              <div className="bg-card/50 rounded-xl p-2 inline-block mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-glow">
                  REALM OF LEGENDS
                </h2>
              </div>
              <ThreeScene />
            </div>
          </div>
        </section>

        {/* Covenant Section */}
        <RuneSection />

        {/* Weapon Showcase */}
        <WeaponShowcase />

        {/* Final Epic Message */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="bg-card/20 border border-primary/10 rounded-2xl p-8 md:p-12">
              <div className="relative group">
                 <div className="bg-card/50 rounded-xl p-2 inline-block mb-4">
                  <h3 className="text-4xl md:text-6xl font-black uppercase text-primary animate-pulse-glow">
                    WARRIOR'S ASCENSION
                  </h3>
                </div>
                <p className="text-xl text-muted-foreground italic mb-8">
                  "The Age of Fire may fade, but your legend is eternal, Ashen One."
                </p>
                <div className="flex justify-center items-center space-x-6 text-primary">
                  <Crown className="h-12 w-12 animate-float" />
                  <Flame className="h-12 w-12" />
                  <Skull className="h-12 w-12 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-primary/20">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm mb-2">
            Forged in the First Flame, kindled by a true monarch
          </p>
          <p className="text-primary text-glow font-semibold">
            With steadfast honor and eternal friendship - by Jasmin
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
