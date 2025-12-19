const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group">
          <span className="font-display text-2xl text-primary-foreground tracking-wide">BORGY</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <a href="#news" className="nav-link text-primary-foreground/90 text-xs uppercase">
            News
          </a>
          <a href="#about" className="nav-link text-primary-foreground/90 text-xs uppercase">
            About
          </a>
          <a href="#contact" className="nav-link text-primary-foreground/90 text-xs uppercase">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;