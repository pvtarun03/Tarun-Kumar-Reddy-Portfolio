import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">P. V. Tarun Kumar Reddy</h3>
            <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              MBA Student | Agriculture Graduate
            </p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://linkedin.com/in/tarun-kumar-reddy-6623b5235" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300' 
                  : 'bg-white hover:bg-gray-200 text-blue-600 hover:text-blue-700 shadow'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pvtarun03@gmail.com" 
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-red-400 hover:text-red-300' 
                  : 'bg-white hover:bg-gray-200 text-red-600 hover:text-red-700 shadow'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-colors ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-opacity-20 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            &copy; {new Date().getFullYear()} P. V. Tarun Kumar Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;