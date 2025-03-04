import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Career Objective
            </h3>
            <p className={`text-lg mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "To secure a dynamic role in the FMCG sector, leveraging my analytical skills and creativity to develop innovative marketing strategies, drive customer engagement, and contribute to sustainable business growth."
            </p>
            
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Who I Am
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am an MBA student at the Army Institute of Management, Kolkata, with a strong foundation in agricultural sciences. My academic journey has equipped me with a unique blend of technical knowledge in agriculture and business acumen, which I aim to apply in the FMCG sector.
            </p>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With hands-on experience in seed production and quality testing during my industrial training at Vista Seeds, I have developed a deep understanding of agricultural inputs and sustainable farming practices. This experience, combined with my academic background, has fostered my analytical thinking and problem-solving abilities.
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond academics, I am passionate about dance and music, having participated in various cultural events. I believe in continuous learning and growth, both professionally and personally, and I am excited about the opportunities that lie ahead in the dynamic world of FMCG.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;