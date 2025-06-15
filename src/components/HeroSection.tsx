
import { Gamepad2, Gift, Skull } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-8">
      {/* Main Hero Content */}
      <div className="relative group mb-8">
        <img
          src="https://i.postimg.cc/Kz6hMXwj/HBDDS.jpg"
          alt="Dark Soul - God of War"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary animate-float box-glow"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Norse Runes around the image */}
        <div className="absolute -top-4 -left-4 text-primary text-2xl animate-pulse-glow">ᚱ</div>
        <div className="absolute -top-4 -right-4 text-primary text-2xl animate-pulse-glow">ᚢ</div>
        <div className="absolute -bottom-4 -left-4 text-primary text-2xl animate-pulse-glow">ᚾ</div>
        <div className="absolute -bottom-4 -right-4 text-primary text-2xl animate-pulse-glow">ᛖ</div>
      </div>

      {/* Epic Title */}
      <div className="relative mb-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-glow mb-4">
          <span className="bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
            RAGNARÖK
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-primary animate-pulse-glow">
          BIRTHDAY SAGA
        </h2>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Skull className="h-8 w-8 text-destructive animate-bounce" />
        </div>
      </div>

      {/* Epic Subtitle */}
      <div className="relative mb-8">
        <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 text-glow">
          CHAMPION
          <span className="text-primary mx-4">DARK SOUL</span>
          RISES
        </h3>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground italic leading-relaxed">
          "In the halls of Valhalla, your legend is spoken. Today marks another year of your epic journey through the Nine Realms of gaming glory."
        </p>
      </div>

      {/* Gaming Elements */}
      <div className="flex items-center justify-center space-x-8 text-primary mb-8">
        <div className="flex flex-col items-center">
          <Gamepad2 className="h-10 w-10 animate-pulse-glow mb-2" />
          <span className="text-sm font-semibold">LEVEL UP</span>
        </div>
        <div className="text-4xl font-black">⚔️</div>
        <div className="flex flex-col items-center">
          <Gift className="h-10 w-10 animate-pulse-glow mb-2" />
          <span className="text-sm font-semibold">EPIC LOOT</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary text-sm font-semibold mb-2">VENTURE FORTH</div>
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
