import React from 'react';
import { Globe } from 'lucide-react';

interface LanguagesProps {
  darkMode: boolean;
}

const Languages: React.FC<LanguagesProps> = ({ darkMode }) => {
  const languages = [
    { name: "English", proficiency: "Professional working proficiency", level: 90 },
    { name: "Hindi", proficiency: "Native or bilingual proficiency", level: 95 },
    { name: "Telugu", proficiency: "Native or bilingual proficiency", level: 100 },
  ];

  return (
    <section 
      id="languages" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Languages
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Globe size={24} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Language Proficiency
              </h3>
            </div>
            
            <div className="space-y-8">
              {languages.map((language, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-3 md:mb-0">
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {language.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {language.proficiency}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center">
                      <div className={`flex-1 h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full ${
                            language.name === "English" 
                              ? darkMode ? 'bg-blue-500' : 'bg-blue-600' 
                              : language.name === "Hindi" 
                                ? darkMode ? 'bg-green-500' : 'bg-green-600'
                                : darkMode ? 'bg-purple-500' : 'bg-purple-600'
                          }`} 
                          style={{ width: `${language.level}%` }}
                        ></div>
                      </div>
                      <span className={`ml-3 min-w-[40px] text-right ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {language.level}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;