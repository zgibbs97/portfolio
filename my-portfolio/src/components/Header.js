import React from 'react';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header className='h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-600 text-white text-center'>
      <div className='max-w-xl mx-auto p-4 animate-fade-in'>
        <h1 className='text-5xl font-bold mb-4 animate-slide-in-up'>Zachary Gibbs</h1>
        <p className='text-xl font-light mb-6 animate-fade-in-delay'>
            <Typical
            steps={['UI/UX Designer', 3000, 'Web Developer', 3000, 'Problem Solver', 3000]}
            loop={Infinity}
            wrapper='span'>

            </Typical>

        </p>
        <a href='#portfolio' className='bg-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-pink-600 hover:scale-110 focus:scale-105 animate-bounce-in'>
            View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;