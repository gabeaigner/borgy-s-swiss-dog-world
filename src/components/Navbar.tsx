import { Dog } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Dog className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-primary-foreground">Borgy</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#news" className="nav-link text-primary-foreground/90 font-medium text-sm uppercase tracking-wider">
            News
          </a>
          <a href="#about" className="nav-link text-primary-foreground/90 font-medium text-sm uppercase tracking-wider">
            About
          </a>
          <a href="#contact" className="nav-link text-primary-foreground/90 font-medium text-sm uppercase tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
