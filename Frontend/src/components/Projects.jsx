import React, { useEffect, useState } from 'react';
import api, { imgBaseURL } from '../utils/api';

import project1 from '../assets/project-1.svg';
import project2 from '../assets/project-2.svg';
import project3 from '../assets/project-3.svg';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const projectImages = [project1, project2, project3];

    // Helper function to get proper image source
    const getImageSrc = (project, index) => {
        if (!project) return projectImages[index % 3];
        if (project.image) {
            const img = project.image;
            if (img.startsWith('http') || img.startsWith('/') || img.includes('.svg') || img.includes('data:')) {
                return img;
            }
            // Local storage path from backend
            return `${imgBaseURL || ''}${img}`;
        }
        if (project.image === undefined && projectImages[index % 3]) {
            return projectImages[index % 3];
        }
        return projectImages[index % 3];
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await api.get('/projects');
                setProjects(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjects();
    }, []);

    // Base items (single set). We'll render them twice inside the track for seamless scrolling
    const items = projects.length > 0 ? projects : [
        { name: 'Commercial Complex', description: 'Modern commercial space design.', image: project1 },
        { name: 'Luxury Villa', description: 'Exquisite residential project.', image: project2 },
        { name: 'Urban Apartment', description: 'City living redefined.', image: project3 },
        { name: 'Co-working Hub', description: 'Flexible workspaces.', image: project1 },
        { name: 'Retail Outlet', description: 'High-street retail design.', image: project2 },
        { name: 'Boutique Hotel', description: 'Hospitality reimagined.', image: project3 },
    ];

    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-primary font-bold text-lg uppercase tracking-wide">Our Projects</h2>
                    <h3 className="text-3xl font-extrabold text-black">Our Latest Works</h3>
                </div>

                <div className="overflow-hidden">
                    <div className="scroll-left">
                        <div className="track flex gap-4">
                            {items.map((project, index) => (
                                <div key={`a-${index}`} className="card-vertical flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={project.image && typeof project.image === 'string' ? (project.image.startsWith('http') || project.image.startsWith('/') ? project.image : project.image) : projectImages[index % 3]} alt={project.name} className="w-full h-40 object-cover" />
                                    <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                                        <h4 className="text-lg font-bold mb-2 text-black">{project.name}</h4>
                                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                        <button className="mt-auto bg-primary text-white px-3 py-2 rounded text-sm">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="track flex gap-4" aria-hidden="true">
                            {items.map((project, index) => (
                                <div key={`b-${index}`} className="card-vertical flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={project.image && typeof project.image === 'string' ? (project.image.startsWith('http') || project.image.startsWith('/') ? project.image : project.image) : projectImages[index % 3]} alt={project.name} className="w-full h-40 object-cover" />
                                    <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                                        <h4 className="text-lg font-bold mb-2 text-black">{project.name}</h4>
                                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                        <button className="mt-auto bg-primary text-white px-3 py-2 rounded text-sm">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
