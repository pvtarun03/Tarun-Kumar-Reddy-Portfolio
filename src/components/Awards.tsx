import React from 'react';
import { Trophy } from 'lucide-react';

interface AwardsProps {
  darkMode: boolean;
}

const Awards: React.FC<AwardsProps> = ({ darkMode }) => {
  return (
    <section 
      id="awards" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Awards & Achievements
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                <Trophy size={24} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sports Achievement
              </h3>
            </div>
            
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4 text-lg">
                Represented Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS) in the All India Inter-University Kho-Kho Championship (North Zone).
              </p>
              
              <div className="mt-6 p-4 rounded-lg bg-opacity-50 border border-dashed border-opacity-50 ${darkMode ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'}">
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Significance:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Demonstrated exceptional teamwork and coordination skills in a competitive environment</li>
                  <li>Balanced academic commitments with rigorous sports training</li>
                  <li>Developed discipline, perseverance, and strategic thinking through sports participation</li>
                  <li>Represented the university at a prestigious national-level competition</li>
                  <li>Enhanced leadership abilities and stress management skills through competitive sports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;