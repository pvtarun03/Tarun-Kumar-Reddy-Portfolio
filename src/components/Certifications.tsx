import React from 'react';
import { Award } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: "Create Your E-commerce Store with Shopify",
      issuer: "Shopify",
      description: "Comprehensive training on setting up and managing e-commerce stores using the Shopify platform, including store design, product management, and marketing strategies."
    },
    {
      title: "Essentials of Digital Marketing and Lead Generation",
      issuer: "Google Digital Garage",
      description: "In-depth course covering digital marketing fundamentals, SEO, SEM, social media marketing, and effective lead generation techniques for business growth."
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Award size={24} />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
              </div>
              <p className={`mb-3 font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Issued by: {cert.issuer}
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;