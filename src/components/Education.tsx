import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationData = [
    {
      degree: 'MBA',
      institution: 'Army Institute of Management, Kolkata',
      period: '2024 - 2026',
      description: 'Currently pursuing Master of Business Administration with a focus on marketing and business strategy.',
    },
    {
      degree: 'B.Sc. (Hons) Agriculture',
      institution: 'Sam Higginbottom University of Agriculture, Technology and Sciences, Prayagraj',
      period: '2020 - 2024',
      percentage: '74.4%',
      description: 'Completed Bachelor of Science in Agriculture with honors, gaining comprehensive knowledge in agricultural sciences, crop production, and farm management.',
    },
    {
      degree: 'High School Education',
      institution: 'Sri Chaitanya Junior College, Vijayawada',
      period: '2018 - 2020',
      percentage: '88.6%',
      description: 'Completed higher secondary education with a focus on science subjects.',
    },
    {
      degree: 'Secondary School Education',
      institution: 'Alpha High School, Cumbum',
      period: '2017 - 2018',
      percentage: '92.15%',
      description: 'Completed secondary education with distinction.',
    },
  ];

  return (
    <section 
      id="education" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            
            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:text-left md:mr-auto md:ml-1/2'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} left-0 md:left-auto w-8 h-8 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} flex items-center justify-center z-10`}>
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-10 md:ml-0 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.degree}
                  </h3>
                  <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.institution}
                  </h4>
                  <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                    <Calendar size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.period}
                    </span>
                  </div>
                  {item.percentage && (
                    <p className={`mb-3 font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      Percentage: {item.percentage}
                    </p>
                  )}
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;