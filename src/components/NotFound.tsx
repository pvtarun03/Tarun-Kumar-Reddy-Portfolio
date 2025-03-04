import React from 'react';
import { Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  darkMode: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ darkMode }) => {
  return (
    <section 
      className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`mb-8 flex justify-center`}>
            <div className={`p-6 rounded-full ${darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
              <AlertTriangle size={64} />
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            404
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Page Not Found
          </h2>
          
          <p className={`text-lg mb-8 max-w-lg mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Home size={18} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;