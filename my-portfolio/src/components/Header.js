import React from 'react';

const Header = () => {
  return (
    <header className='h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-600 text-white text-center'>
      <div className='max-w-xl mx-auto p-4'>
        <h1 className='text-5xl font-bold mb-4'>Zachary Gibbs</h1>
        <p className='text-xl font-light mb-6'>Creative UI/UX Designer</p>
        <a href='#portfolio' className='bg-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-pink-600'>
            View My work
        </a>
      </div>
    </header>
  );
};

export default Header;