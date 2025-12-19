import { useState } from "react";
import { Play } from "lucide-react";

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
  {
    id: "dQw4w9WgXcQ",
    title: "Mountain Adventures",
    thumbnail: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=400&fit=crop",
  },
];

const AboutSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
          <div className="animate-fade-up">
            <div className="swiss-divider mb-6" />
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium mb-3">The Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Who is Borgy?
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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
          <div className="editorial-card p-8 md:p-10 animate-scale-in">
            <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
              <div className="bg-card p-6 md:p-8 text-center">
                <p className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-2">2021</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium">First Viral Post</p>
              </div>
              <div className="bg-card p-6 md:p-8 text-center">
                <p className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-2">47</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Countries Reached</p>
              </div>
              <div className="bg-card p-6 md:p-8 text-center">
                <p className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-2">500K</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Merch Sold</p>
              </div>
              <div className="bg-card p-6 md:p-8 text-center">
                <p className="font-display text-4xl md:text-5xl text-primary font-semibold mb-2">∞</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Good Boy Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Carousel */}
        <div>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="swiss-divider mb-6" />
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium mb-3">Watch</p>
              <h3 className="font-display text-3xl md:text-4xl text-foreground">Borgy's Adventures</h3>
            </div>
          </div>

          {/* Horizontal Scrollable Videos */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {videos.map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className="group relative w-80 md:w-96 aspect-video overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                  onClick={() => setPlayingVideo(playingVideo === `${video.id}-${index}` ? null : `${video.id}-${index}`)}
                >
                  {playingVideo === `${video.id}-${index}` ? (
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
                      <div className="absolute inset-0 bg-background/30 group-hover:bg-background/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="glass-card px-4 py-3 rounded-lg">
                          <p className="font-display text-base text-foreground font-medium">{video.title}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;