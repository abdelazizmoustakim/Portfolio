import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaMediumM } from 'react-icons/fa'; // Import necessary icons
import { SiBuymeacoffee } from 'react-icons/si'; // Import SiBuymeacoffee

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="text-gray-600 text-sm text-center md:text-left mb-2 md:mb-0">
        © 2024 Abdelaziz Moustakim
      </div>
      {/* Contact me */}
      <div className="flex flex-col items-center md:items-start mb-2 md:mb-0">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold tracking-widest h-full flex items-center transition duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
          email me at: 
          <span className="ml-1">abdelaziz@azizmoustakim.com</span>
        </p>
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a 
          href="https://github.com/abdelazizmoustakim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:abdelaziz@azizmoustakim.com" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaEnvelope />
        </a>
        <a 
          href="https://twitter.com/code_withabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://instagram.com/code_withabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://medium.com/@abdou16moustakim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <FaMediumM />
        </a>
        <a 
          href="https://buymeacoffee.com/code_withabdo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600"
        >
          <SiBuymeacoffee />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
