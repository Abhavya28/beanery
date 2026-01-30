import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#services", label: "Services" },
  { href: "#testimonies", label: "Testimonies" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold text-primary tracking-tight hover:text-primary-foreground transition-colors"
        >
          Beanery
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full 
                text-primary hover:text-primary-foreground hover:bg-surface transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full transition-colors">
            <a href="#">Get Directions</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-primary hover:text-primary-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/80 transition-colors"
            >
              <a href="#">Get Directions</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
