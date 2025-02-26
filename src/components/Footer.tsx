
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" id="footer-about">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Helping couples navigate the K1 visa process with confidence.
            </p>
          </div>
          
          <nav className="space-y-4" aria-labelledby="footer-quicklinks">
            <h4 className="text-sm font-semibold" id="footer-quicklinks">Quick Links</h4>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/guide" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/forms" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link 
                  to="/chat" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Chat
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="footer-resources">
            <h4 className="text-sm font-semibold" id="footer-resources">Resources</h4>
            <ul className="space-y-2" role="list">
              <li>
                <a 
                  href="https://www.uscis.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                  aria-label="Visit USCIS website (opens in new tab)"
                >
                  USCIS Website
                </a>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-4" aria-labelledby="footer-legal">
            <h4 className="text-sm font-semibold" id="footer-legal">Legal</h4>
            <p className="text-xs text-muted-foreground">
              Disclaimer: This website provides general information about the K1 visa process and should not be considered as legal advice. For specific legal guidance, please consult with an immigration attorney.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} K1 Visa Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

