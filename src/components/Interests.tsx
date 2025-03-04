import React from 'react';
import { Music, Headphones } from 'lucide-react';

interface InterestsProps {
  darkMode: boolean;
}

const Interests: React.FC<InterestsProps> = ({ darkMode }) => {
  return (
    <section 
      id="interests" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Interests
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dance */}
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 9l3 3-3 3"></path>
                  <path d="M13 15l3-3-3-3"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Dance
              </h3>
            </div>
            
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                Dance is one of my greatest passions, allowing me to express creativity and emotion through movement. I've had the opportunity to participate in various cultural events and competitions.
              </p>
              
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Notable Performances:
              </h4>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Spring Fest at IIT Kharagpur - Participated in the cultural dance competition</li>
                <li>Inferno at Army Institute of Management, Kolkata - Performed contemporary dance</li>
                <li>Various stage events and cultural programs at university level</li>
              </ul>
              
              <p className="mt-4">
                Dance has not only been a creative outlet but has also helped me develop discipline, coordination, and the ability to perform under pressure.
              </p>
            </div>
          </div>
          
          {/* Music */}
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                <Music size={24} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Music
              </h3>
            </div>
            
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                Music has always been an integral part of my life, serving as both a source of inspiration and relaxation. I enjoy exploring various genres and artists, appreciating the diversity of musical expressions.
              </p>
              
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                My Musical Journey:
              </h4>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Enjoy listening to a wide range of music genres, from classical to contemporary</li>
                <li>Music serves as a creative inspiration for my dance performances</li>
                <li>Appreciate the cultural significance of different musical traditions</li>
                <li>Find music to be a powerful tool for stress relief and emotional expression</li>
              </ul>
              
              <p className="mt-4">
                Whether it's finding the perfect soundtrack for studying, unwinding after a long day, or getting energized for a workout, music plays a vital role in enhancing various aspects of my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;