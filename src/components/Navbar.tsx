const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="navbar-card px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">B</span>
            </div>
            <span className="font-display text-xl text-foreground font-semibold tracking-tight">BORGY</span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <a href="#news" className="nav-link text-sm uppercase">
              News
            </a>
            <a href="#about" className="nav-link text-sm uppercase">
              About
            </a>
            <a href="#contact" className="nav-link text-sm uppercase">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;