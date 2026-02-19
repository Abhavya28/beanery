import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonies" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMap, setShowMap] = useState(false);

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
                text-primary hover:underline hover:bg-surface transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full transition-colors"
            onClick={() => setShowMap(true)}
          >
            Get Directions
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
              onClick={() => {
                setIsMobileMenuOpen(false);
                setShowMap(true);
              }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/80 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      )}

      {/* Google Maps Overlay */}
      {showMap && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative w-11/12 max-w-3xl h-3/4 bg-white rounded-xl shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={() => setShowMap(false)}
            >
              ✖
            </button>

            {/* Google Maps iframe */}
            <iframe
              title="Google Maps - Chandigarh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905897242!2d76.68831172108816!3d30.7324019835357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1771501754994!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
