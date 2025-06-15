
import React from 'react';
import { Button } from '@/components/ui/button';

const GodOfWarSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-blue-950/60" />
      <div className="relative z-10 text-center text-white p-4 animate-fade-in">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 text-gow-ice font-orbitron">
          The Norse Saga
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8 text-slate-300">
          Boy! Journey through the brutal Norse wilds, face gods and monsters, and uncover the truth of your past.
        </p>
        <Button variant="outline" size="lg" className="border-2 border-gow-ice text-gow-ice hover:bg-gow-ice hover:text-gow-blue font-bold text-lg">
          Unleash the Rage
        </Button>
      </div>
    </section>
  );
};

export default GodOfWarSection;
