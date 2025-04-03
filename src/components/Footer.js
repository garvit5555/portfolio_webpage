import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-secondary to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Garvit Juneja</h3>
            <p className="text-gray-300 mb-4">
              Undergraduate student at IIT Roorkee with a passion for technology and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/garvit5555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/garvit-juneja-396840290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <p className="text-gray-300 mb-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:garvit@ph.iitr.ac.in" className="text-primary hover:underline">
                garvit@ph.iitr.ac.in
              </a>
            </p>
            <p className="text-gray-300 mb-4 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              IIT Roorkee, Uttarakhand, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Garvit Juneja. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Next.js, and Tailwind CSS. Powered by Groq LLM.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 