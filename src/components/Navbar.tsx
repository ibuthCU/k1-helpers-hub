
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            K1 Visa Guide
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/guide" className="hover:text-primary transition-colors">
              Guide
            </Link>
            <Link to="/checklist" className="hover:text-primary transition-colors">
              Checklist
            </Link>
            <Link to="/forms" className="hover:text-primary transition-colors">
              Forms
            </Link>
            <Link to="/chat" className="hover:text-primary transition-colors">
              Chat
            </Link>
            <Button>Get Started</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/guide"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guide
              </Link>
              <Link
                to="/checklist"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Checklist
              </Link>
              <Link
                to="/forms"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Forms
              </Link>
              <Link
                to="/chat"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chat
              </Link>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
