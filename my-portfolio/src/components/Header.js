// src/components/Header.js
import React from 'react';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-pink-400 text-white text-center relative">
      <div className="max-w-xl mx-auto p-4">
        {/* Main Heading with subtle fade-in animation */}
        <h1 className="text-5xl font-bold mb-4 animate-slide-in-up">Zachary Gibbs</h1>

        {/* Dynamic text with smooth fade effect */}
        <p className="text-xl font-light mb-6 animate-fade-in-delay">
          <Typical
            steps={[
              'Creative UI/UX Designer', 2500, 
              'Web Developer', 2500, 
              'Problem Solver', 2500
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </p>

        {/* CTA Button with hover and subtle animation */}
        <a href="#portfolio" className="bg-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 focus:scale-105 animate-bounce-in">
          View My Work
        </a>
        
      </div>
      {/* Bio Section */}
      <div className="bio-section bg-gradient-to-b from-gray-700 to-pink-300 rounded-lg mb-4 md:mr-8 md:mb-0 h-screen shadow-red-glow h-screen">
          <img 
            src="/path/to/your/photo.jpg" // Add the path to your profile picture
            alt="Your Name"
            className="rounded-full w-24 h-24 mb-4 shadow-red-glow transition-transform duration-300 transform hover:scale-110"
          />
          <h2 className="text-2xl font-bold mb-2">Your Name</h2>
          <p className="text-gray-300">
            UI/UX Designer passionate about creating intuitive user experiences.
          </p>
          <h3 className="text-lg font-semibold mt-2">Skills:</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>UI/UX Design</li>
            <li>Prototyping</li>
            <li>Responsive Design</li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
