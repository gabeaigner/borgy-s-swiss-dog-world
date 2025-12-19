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
          <div className="swiss-divider mx-auto mb-8" />
          <p className="text-primary-foreground/80 font-body text-xs uppercase tracking-[0.3em] mb-6">
            Switzerland's Most Beloved Icon
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.9] mb-8 tracking-tight">
            The First Swiss
            <br />
            <span className="italic">Dog Meme</span>
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
            From the Alps to the world. A lifestyle icon making hearts smile, one moment at a time.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar />
    </section>
  );
};

export default HeroSection;