import Navbar from "./Navbar";
import StatsBar from "./StatsBar";
import heroDog from "@/assets/hero-dog.jpg";

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
          <p className="text-primary font-medium text-lg mb-4 tracking-wider uppercase">
            Meet Borgy
          </p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight mb-6">
            The First Swiss
            <br />
            <span className="text-gradient">Dog Meme</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            From the Alps to the internet. Making the world smile, one bark at a time.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar />
    </section>
  );
};

export default HeroSection;
