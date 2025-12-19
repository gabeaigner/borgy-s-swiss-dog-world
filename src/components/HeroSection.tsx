import Navbar from "./Navbar";
import StatsBar from "./StatsBar";
import heroDog from "@/assets/hero-dog.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDog}
          alt="Borgy the Swiss dog meme"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pb-32">
        <div className="text-center animate-fade-up">
          <div className="swiss-divider mx-auto mb-10" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-10 tracking-tight">
            The First Swiss
            <br />
            <span className="text-gradient">Dog Meme</span>
          </h1>
          <div className="glass-card inline-block px-8 py-4 rounded-full">
            <p className="text-primary-foreground text-lg md:text-xl font-medium">
              From the Alps to the internet. Making the world smile, one bark at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar />
    </section>
  );
};

export default HeroSection;