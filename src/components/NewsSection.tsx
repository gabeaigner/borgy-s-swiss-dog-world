import { ArrowRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  index: number;
}

const NewsCard = ({ image, title, date, index }: NewsCardProps) => (
  <article
    className="group cursor-pointer animate-fade-up relative aspect-[3/4] overflow-hidden rounded-xl"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Background Image */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="glass-card p-5 rounded-xl">
        <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium mb-2">{date}</p>
        <h3 className="font-display text-xl text-foreground leading-tight group-hover:text-primary transition-colors duration-300 mb-3">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
          <span className="text-xs uppercase tracking-wider font-medium">Read article</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </article>
);

const newsItems = [
  {
    image: news1,
    title: "Borgy's Beach Day Breaks the Internet",
    date: "December 12, 2024",
  },
  {
    image: news2,
    title: "New Collaboration with Swiss Luxury Brands",
    date: "December 8, 2024",
  },
  {
    image: news3,
    title: "Alpine Adventure Series Reaches 10M Views",
    date: "November 28, 2024",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="swiss-divider mb-6" />
            <p className="text-muted-foreground text-xs uppercase tracking-wider font-medium mb-3">Latest</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              News
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm uppercase tracking-wider font-medium">View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;