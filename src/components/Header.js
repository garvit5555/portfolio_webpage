import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Garvit Juneja
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#education" className="nav-link">
              Education
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/garvit5555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/garvit-juneja-396840290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
              <Link href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Education
              </Link>
              <Link href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://github.com/garvit5555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/garvit-juneja-396840290/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 