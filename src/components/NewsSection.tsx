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
    className="group cursor-pointer animate-fade-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[3/4] mb-6">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    
    {/* Content */}
    <div>
      <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-3">{date}</p>
      <h3 className="font-display text-2xl text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
        {title}
      </h3>
      <div className="flex items-center gap-2 mt-4 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
        <span className="text-xs uppercase tracking-[0.15em]">Read article</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-500" />
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
    <section id="news" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="swiss-divider mb-6" />
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">Latest</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              News
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-500 group"
          >
            <span className="text-xs uppercase tracking-[0.15em]">View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((item, index) => (
            <NewsCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;