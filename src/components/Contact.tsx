import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'pvtarun03@gmail.com',
      link: 'mailto:pvtarun03@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8179590059',
      link: 'tel:+918179590059'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Tarun Kumar Reddy',
      link: 'https://linkedin.com/in/tarun-kumar-reddy-6623b5235'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className={`p-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {item.label}
                        </h4>
                        <a 
                          href={item.link} 
                          className={`text-lg font-semibold hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Connect With Me
                  </h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Feel free to reach out for opportunities, collaborations, or just to say hello!
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-600 text-white border-gray-600 focus:ring-blue-500' 
                          : 'bg-gray-50 text-gray-900 border border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-600 text-white border-gray-600 focus:ring-blue-500' 
                          : 'bg-gray-50 text-gray-900 border border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-600 text-white border-gray-600 focus:ring-blue-500' 
                          : 'bg-gray-50 text-gray-900 border border-gray-300 focus:ring-blue-500'
                      }`}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`px-6 py-3 rounded-lg font-medium flex items-center transition-colors ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;