import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons for links

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Description */}
        <div className="text-left">
          <p className="text-sm md:text-md mb-2">
            This website was built using React, Three.js, Tailwind CSS, and TypeScript. It showcases 3D models, animations, and responsive design.
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Github Link */}
          <a
            href="https://github.com/brendanpotter00" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/brendan-potter00/" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Email Link */}
          <a
            href="mailto:brendanpotter00@gmail.com" // Replace with your email
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
