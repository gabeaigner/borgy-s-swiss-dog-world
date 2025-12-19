import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card text-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">B</span>
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight">BORGY</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              The original Swiss dog meme. A lifestyle icon spreading joy from the Alps to screens worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#news" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">News</a></li>
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">About</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">Shop</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-6">Contact</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">For collaborations and press inquiries</p>
            <a
              href="mailto:hello@borgy.ch"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              hello@borgy.ch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Borgy. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;