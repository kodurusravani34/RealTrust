import React, { useState } from 'react';
import api from '../utils/api';

const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/contact', formData);
            setStatus('Quote requested successfully!');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (error) {
            setStatus('Error sending request.');
        }
    };

    return (
        <div className="relative overflow-hidden pt-24 pb-20 bg-white text-black">
            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Consultation, <span className="text-primary">Design</span> & Marketing
                    </h1>
                    <p className="text-black mb-6">We craft beautiful spaces and compelling strategies that convert visitors into clients.</p>
                    <div className="flex gap-4">
                        <a href="#projects" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-semibold hover:opacity-95">View Projects</a>
                        <a href="#contact" className="inline-flex items-center px-6 py-3 border border-gray-300 text-black rounded-md">Contact Us</a>
                    </div>
                </div>

                <div>
                    <div className="glass p-6 rounded-xl shadow-2xl w-full">
                        <h2 className="text-xl font-bold mb-4 text-black text-center">Get a Quick Quote</h2>
                        {status && <p className="mb-4 text-center text-sm font-semibold text-green-600">{status}</p>}
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none" />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none" />
                            <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none" />
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none" />
                            <div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded">Request Quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
