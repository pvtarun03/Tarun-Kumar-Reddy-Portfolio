import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Industrial Trainee
                </h3>
                <h4 className={`text-lg font-medium mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Vista Seeds
                </h4>
              </div>
              <div className={`flex items-center mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Calendar size={16} className="mr-2" />
                <span>August 2023 – September 2023</span>
              </div>
            </div>
            
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                During my industrial training at Vista Seeds, I gained valuable hands-on experience in various aspects of the seed industry, enhancing my understanding of agricultural inputs and sustainable farming practices.
              </p>
              
              <h5 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Key Responsibilities & Learnings:
              </h5>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Participated in seed production processes, learning about breeding techniques and quality control measures.</li>
                <li>Assisted in quality testing procedures, including germination tests, purity analysis, and moisture content determination.</li>
                <li>Gained knowledge about seed distribution networks and supply chain management in the agricultural sector.</li>
                <li>Supported R&D activities focused on enhancing seed varieties for improved yield and disease resistance.</li>
                <li>Learned about sustainable farming practices and their implementation in modern agriculture.</li>
                <li>Collaborated with agricultural experts to understand market demands and farmer requirements.</li>
              </ul>
              
              <p className="mt-4">
                This experience provided me with a comprehensive understanding of the seed industry's operations and the critical role it plays in agricultural productivity and food security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;