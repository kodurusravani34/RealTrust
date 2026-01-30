import React, { useEffect, useState } from 'react';
import api, { imgBaseURL } from '../utils/api';

import face1 from '../assets/face1.svg';
import face2 from '../assets/face2.svg';
import face3 from '../assets/face3.svg';
import avatar4 from '../assets/avatar6@3x.png';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await api.get('/clients');
                setClients(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchClients();
    }, []);

    const clientImages = [face1, face2, face3, avatar4];

    // Helper function to get proper image source
    const getImageSrc = (client, index) => {
        if (!client) return clientImages[index % clientImages.length];
        if (client.image) {
            const img = client.image;
            if (img.startsWith('http') || img.startsWith('/') || img.includes('.svg') || img.includes('data:')) {
                return img;
            }
            return `${imgBaseURL || ''}${img}`;
        }
        return clientImages[index % clientImages.length];
    };

    // Base testimonial items
    const items = clients.length > 0 ? clients : [
        { name: 'Sarah Jenkins', designation: 'Homeowner', description: 'Made finding our dream home incredibly easy.', image: face1 },
        { name: 'Michael Chen', designation: 'Investor', description: 'The ROI analysis provided was spot on. Highly recommend.', image: face2 },
        { name: 'Emily Davids', designation: 'Architect', description: 'A fantastic partner in our recent developments.', image: face3 },
        { name: 'Olivia Park', designation: 'Designer', description: 'Truly collaborative and detail-oriented.', image: avatar4 },
        { name: 'Daniel Rossi', designation: 'Developer', description: 'Professional team, excellent communications.', image: face1 },
        { name: 'Priya Kumar', designation: 'Entrepreneur', description: 'Delivered on time and above expectations.', image: face2 },
        { name: 'Liam Brown', designation: 'Investor', description: 'Strong market insights and actionable plans.', image: face3 },
        { name: 'Ava Wilson', designation: 'Manager', description: 'Wonderful collaboration and delivery.', image: avatar4 },
    ];

    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-primary font-bold text-lg uppercase tracking-wide">Testimonials</h2>
                    <h3 className="text-3xl font-extrabold text-black">Happy Clients</h3>
                </div>

                <div className="overflow-hidden">
                    <div className="scroll-right">
                        <div className="track flex gap-4">
                            {items.map((client, index) => (
                                <div key={`a-${index}`} className="card-vertical flex-shrink-0 p-6 rounded-lg shadow-md bg-white flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <img src={getImageSrc(client, index)} alt={client.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary flex-shrink-0" onError={(e) => e.target.src = clientImages[index % clientImages.length]} />
                                        <div>
                                            <h4 className="font-bold text-lg text-black">{client.name}</h4>
                                            <p className="text-sm text-gray-600">{client.designation}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic flex-grow">"{client.description}"</p>
                                </div>
                            ))}
                        </div>
                        <div className="track flex gap-4" aria-hidden="true">
                            {items.map((client, index) => (
                                <div key={`b-${index}`} className="card-vertical flex-shrink-0 p-6 rounded-lg shadow-md bg-white flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <img src={getImageSrc(client, index)} alt={client.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary flex-shrink-0" onError={(e) => e.target.src = clientImages[index % clientImages.length]} />
                                        <div>
                                            <h4 className="font-bold text-lg text-black">{client.name}</h4>
                                            <p className="text-sm text-gray-600">{client.designation}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic flex-grow">"{client.description}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
