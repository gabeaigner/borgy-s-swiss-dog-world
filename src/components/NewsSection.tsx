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
    className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer animate-fade-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Background Image */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <p className="text-primary text-sm font-medium mb-2">{date}</p>
      <h3 className="font-display font-bold text-xl text-primary-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
        <span className="text-primary-foreground text-sm">Read more</span>
        <ArrowRight className="w-4 h-4 text-primary" />
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
    <section id="news" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Latest Updates</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              Borgy News
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View all news</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
