import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Borgy's First Day in the Alps",
    thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Behind the Scenes: Meme Photoshoot",
    thumbnail: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Borgy Meets His Biggest Fans",
    thumbnail: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=400&fit=crop",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "A Day in Borgy's Life",
    thumbnail: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=400&fit=crop",
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVisibleVideos = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videos.length;
      result.push({ ...videos[index], originalIndex: index });
    }
    return result;
  };

  return (
    <section id="about" className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="animate-fade-up">
            <div className="swiss-divider mb-6" />
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">The Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10">
              Who is Borgy?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Born in the heart of the Swiss Alps, Borgy isn't just any dog – he's a phenomenon. 
                With his signature fluffy coat and impossibly photogenic expressions, he captured 
                the internet's heart one viral meme at a time.
              </p>
              <p>
                From humble beginnings as a puppy found in a small village near Zermatt, Borgy has 
                grown into Switzerland's most beloved four-legged ambassador. His journey from 
                mountain pup to global lifestyle icon proves that sometimes, the best things in 
                life come with a wagging tail.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="editorial-card p-10 animate-scale-in">
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card p-8 text-center">
                <p className="font-display text-5xl text-foreground mb-2">2021</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">First Viral Post</p>
              </div>
              <div className="bg-card p-8 text-center">
                <p className="font-display text-5xl text-foreground mb-2">47</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Countries Reached</p>
              </div>
              <div className="bg-card p-8 text-center">
                <p className="font-display text-5xl text-foreground mb-2">500K</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Merch Sold</p>
              </div>
              <div className="bg-card p-8 text-center">
                <p className="font-display text-5xl text-foreground mb-2">∞</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Good Boy Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Carousel */}
        <div>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="swiss-divider mb-6" />
              <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">Watch</p>
              <h3 className="font-display text-3xl md:text-4xl text-foreground">Borgy's Adventures</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleVideos().map((video, index) => (
              <div
                key={`${video.originalIndex}-${index}`}
                className="group relative aspect-video overflow-hidden cursor-pointer"
                onClick={() => setPlayingVideo(video.id)}
              >
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 border-2 border-primary-foreground flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-foreground transition-all duration-500">
                        <Play className="w-5 h-5 text-primary-foreground group-hover:text-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-display text-lg text-primary-foreground">{video.title}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;