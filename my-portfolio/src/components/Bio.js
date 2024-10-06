
import React from 'react';

const Bio = () => {
  return (
    <section id="bio" className="py-16 bg-gradient-to-b from-gray-300 to-pink-300">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <img 
          src="/path/to/your/photo.jpg" // Update with your image path
          alt="Your Name"
          className="rounded-full w-48 h-48 mb-4 shadow-red-glow"
        />
        <p className="text-center max-w-3xl text-gray-700 mb-6">
          Hi! I'm [Your Name], a UI/UX designer dedicated to crafting user-centered experiences. With a background in both design and development, I strive to merge aesthetics and functionality to create solutions that not only look good but also serve users effectively.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
        <p className="text-gray-600 mb-4">
          I started my career in [Your Field/Background], where I developed a strong foundation in [Skills/Knowledge]. Over time, I transitioned into UI/UX design, where I found my true passion. I believe in the power of design to influence behavior and improve lives.
        </p>

        <h3 className="text-2xl font-semibold mb-4">My Work</h3>
        <p className="text-gray-600 mb-4">
          Throughout my career, I've worked on a variety of projects, ranging from mobile applications to web platforms. I love collaborating with cross-functional teams to deliver exceptional user experiences.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Hobbies & Interests</h3>
        <p className="text-gray-600 mb-4">
          In my free time, I enjoy [Your Hobbies/Interests], which help me to stay inspired and creative. I'm always eager to learn new skills and explore new design trends.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-gray-600">
          Feel free to reach out via [Your Contact Methods], or connect with me on [Social Media Links].
        </p>
      </div>
    </section>
  );
};

export default Bio;
