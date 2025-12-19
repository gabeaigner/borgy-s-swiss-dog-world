import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-3xl tracking-wide mb-6 block">BORGY</span>
            <p className="text-background/60 max-w-sm mb-8 leading-relaxed">
              The original Swiss dog meme. A lifestyle icon spreading joy from the Alps to screens worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-500">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-500">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-500">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#news" className="text-background/80 hover:text-background transition-colors duration-500">News</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors duration-500">About</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-500">Shop</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-500">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-6">Contact</h4>
            <p className="text-background/60 mb-4 leading-relaxed">For collaborations and press inquiries</p>
            <a
              href="mailto:hello@borgy.ch"
              className="inline-flex items-center gap-2 text-background hover:text-primary transition-colors duration-500"
            >
              <Mail className="w-4 h-4" />
              hello@borgy.ch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © 2024 Borgy. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-background/40 hover:text-background transition-colors duration-500">Privacy</a>
            <a href="#" className="text-background/40 hover:text-background transition-colors duration-500">Terms</a>
            <a href="#" className="text-background/40 hover:text-background transition-colors duration-500">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;