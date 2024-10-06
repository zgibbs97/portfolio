import React from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [

    {
        title: 'Placeholder',
        description: 'Placeholder',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/placeholder',
    },
    {
        title: 'Placeholder',
        description: 'Placeholder',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/placeholder',
    },
    {
        title: 'Placeholder',
        description: 'Placeholder',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/placeholder',
    },
]


const Portfolio = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,       // Trigger when 20% of the component is visible
      });
    return (
        <section id="portfolio" ref={ref} className='bg-gradient-to-b from-pink-400 to-gray-300'>
            <div className={`container mx-auto py-16 bg-gradient-to-b from-pink-400 to-gray-300 ${inView ? 'animate-fade-in' : 'animate-fade-out'}`}>
                <h2 className='text-4xl font-bold text-center mb-8 pb-4'>Portfolio</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project,index) => ( 
                        <div key={index} className='bg-white rounded-lg overflow-hidden shadow-red-glow'>
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>
                            <div className='p-6'>
                                <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
                                <p className='text-gray-600 mb-4'>{project.description}</p>
                                <a   href={project.link} target='_blank' rel='noopener noreferrer' className='text-pink-500'>
                                    View Projects
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;