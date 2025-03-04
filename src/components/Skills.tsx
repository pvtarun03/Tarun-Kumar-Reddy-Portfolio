import React from 'react';
import { Cpu, MessageSquare } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const technicalSkills = [
    { name: "MS PowerPoint", proficiency: 85 },
    { name: "Basic SEO & SEM knowledge", proficiency: 70 },
    { name: "Basic data analysis", proficiency: 75 },
    { name: "MS Excel", proficiency: 80 },
    { name: "MS Word", proficiency: 90 },
  ];

  const softSkills = [
    { name: "Communication", proficiency: 90 },
    { name: "Team management", proficiency: 85 },
    { name: "Teamwork & collaboration", proficiency: 95 },
    { name: "Problem-solving", proficiency: 80 },
    { name: "Adaptability", proficiency: 85 },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Cpu size={24} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technical Skills
              </h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`} 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <MessageSquare size={24} />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Soft Skills
              </h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`} 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
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

export default Skills;