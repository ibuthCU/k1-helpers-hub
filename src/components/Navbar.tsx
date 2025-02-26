
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleMenuKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold"
            aria-label="K1 Visa Guide Home"
          >
            K1 Visa Guide
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {[
              { to: '/', label: 'Home' },
              { to: '/guide', label: 'Guide' },
              { to: '/checklist', label: 'Checklist' },
              { to: '/forms', label: 'Forms' },
              { to: '/chat', label: 'Chat' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === item.to ? 'text-primary font-medium' : ''
                }`}
                role="menuitem"
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button
              aria-label="Get started with K1 visa application"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            onKeyPress={handleMenuKeyPress}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="py-4 space-y-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/guide', label: 'Guide' },
              { to: '/checklist', label: 'Checklist' },
              { to: '/forms', label: 'Forms' },
              { to: '/chat', label: 'Chat' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-2 text-base hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md ${
                  location.pathname === item.to ? 'text-primary font-medium' : ''
                }`}
                role="menuitem"
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4">
              <Button className="w-full focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
