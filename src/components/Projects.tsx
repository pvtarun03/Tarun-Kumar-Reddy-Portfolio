import React from 'react';
import { FileText, Users } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projects & CSR Activities
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-start">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <FileText size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  RAWE (Rural Agriculture Work Extension)
                </h3>
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="mb-4">
                    As part of my agricultural education, I participated in the Rural Agriculture Work Extension program, which aimed to bridge the gap between academic knowledge and practical implementation in rural communities.
                  </p>
                  
                  <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Project Highlights:
                  </h4>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Conducted comprehensive field surveys in rural communities to assess agricultural practices, challenges, and socio-economic conditions.</li>
                    <li>Engaged directly with local farmers to understand their specific needs, constraints, and traditional farming methods.</li>
                    <li>Analyzed soil samples and provided recommendations for appropriate crop selection and fertilizer application.</li>
                    <li>Organized awareness sessions on modern agricultural techniques, pest management, and water conservation.</li>
                    <li>Developed sustainable farming solutions tailored to local conditions and resource availability.</li>
                    <li>Collaborated with agricultural extension officers to implement best practices in the community.</li>
                  </ul>
                  
                  <h4 className={`text-lg font-semibold mt-6 mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Outcomes:
                  </h4>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Enhanced understanding of rural agricultural challenges and practical solutions.</li>
                    <li>Improved crop yields and resource efficiency for participating farmers.</li>
                    <li>Strengthened community engagement and knowledge transfer between academic institutions and rural areas.</li>
                    <li>Developed valuable skills in agricultural extension, community outreach, and practical problem-solving.</li>
                  </ul>
                  
                  <p className="mt-4">
                    This experience significantly enhanced my understanding of agricultural realities on the ground and reinforced my commitment to sustainable agricultural development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;