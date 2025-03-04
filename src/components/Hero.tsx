import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-16 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
            <img 
              src=".\Pv tarun kumar Reddy.jpg" 
              alt="P. V. Tarun Kumar Reddy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            P. V. Tarun Kumar Reddy
          </h1>
          <h2 className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            MBA Student | Agriculture Graduate
          </h2>
          <p className={`text-lg mb-8 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Aspiring FMCG professional with a strong background in agriculture and a passion for marketing, seeking to leverage analytical skills and creativity to drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Get in Touch
            </a>
            <a 
              href=".\PV TARUN KUMAR REDDY CV.pdf" 
              className={`px-6 py-3 rounded-full font-medium flex items-center transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 border border-gray-300'
              }`}
            >
              <Download size={18} className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;