import React from 'react';

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
    return (
        <section id='portfolio' className='py-16 bg-gray-100'>
            <div className='container mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-8'>My Work</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project,index) => ( 
                        <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>
                            <div className='p-6'>
                                <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
                                <p className='text-gray-600 mb-4'>{project.description}</p>
                                <a   href={project.link} target='_blank' rel='noopener noreferrer' className='text-pink-500 hover:text-pink-600'>
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