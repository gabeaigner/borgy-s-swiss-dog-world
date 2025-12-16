import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
