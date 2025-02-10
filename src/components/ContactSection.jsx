import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('frandeveloper21@gmail.com');
    toast.success('Email copied to clipboard!');
  };

  return (
    <footer className="bg-[#B3B4BD] py-20">
      <div className="container mx-auto text-center">
        
        <h2 className="text-7xl text-blue-700 font-punk text-center mb-12" style={{ fontFamily: 'Permanent Marker, cursive' }}>
        Projects
      </h2>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCopyEmail}
            className="bg-white rounded-lg p-4 hover:bg-gray-100 transition duration-300"
          >
            📧 frandeveloper21@gmail.com
          </button>
          <button
            onClick={() => window.open('https://github.com/fgz21', '_blank')}
            className="bg-white rounded-lg p-4 hover:bg-gray-100 transition duration-300"
          >
            <i className="fab fa-github mr-2"></i>GitHub
          </button>
        </div>
        <ToastContainer />
      </div>
    </footer>
  );
};

export default ContactSection;