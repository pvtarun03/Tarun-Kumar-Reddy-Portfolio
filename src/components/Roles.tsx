import React from 'react';
import { Users, Briefcase } from 'lucide-react';

interface RolesProps {
  darkMode: boolean;
}

const Roles: React.FC<RolesProps> = ({ darkMode }) => {
  const roles = [
    {
      title: "Placement Associate",
      organization: "Army Institute of Management, Kolkata",
      period: "Nov 2024 - Present",
      icon: <Briefcase size={24} />,
      responsibilities: [
        "Assisting in campus recruitment processes and coordinating with potential employers",
        "Building and maintaining a network of industry contacts for placement opportunities",
        "Supporting lead generation and follow-up activities for placement drives",
        "Helping organize pre-placement talks, interviews, and selection processes",
        "Providing guidance to fellow students on resume building and interview preparation"
      ]
    },
    {
      title: "National Service Scheme (NSS) Volunteer",
      organization: "Sam Higginbottom University of Agriculture, Technology and Sciences",
      period: "Aug 2020 – Jun 2024",
      icon: <Users size={24} />,
      responsibilities: [
        "Organized and participated in awareness campaigns on social and environmental issues",
        "Conducted poster-making competitions and educational activities in local communities",
        "Led clean-up drives to promote environmental consciousness and hygiene",
        "Participated in tree plantation initiatives to enhance green cover in the campus and surrounding areas",
        "Engaged in community service activities to address local needs and challenges"
      ]
    }
  ];

  return (
    <section 
      id="roles" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Roles & Responsibilities
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {role.title}
                    </h3>
                    <h4 className={`text-lg font-medium mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {role.organization}
                    </h4>
                  </div>
                </div>
                <div className={`mt-4 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {role.period}
                </div>
              </div>
              
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h5 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Key Responsibilities:
                </h5>
                
                <ul className="list-disc pl-5 space-y-2">
                  {role.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;