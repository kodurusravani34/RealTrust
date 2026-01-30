import React from 'react';

const About = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="/assets/about-us.svg" alt="About Us" className="rounded-lg shadow-2xl w-full h-auto object-cover" onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=About+Us'} />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wide">About Us</h2>
                    <h3 className="text-3xl font-extrabold mb-6 text-black">We are a designated team of architects & builders</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We design spaces that inspire and strategies that deliver measurable results. Our interdisciplinary team blends architecture, branding and digital marketing to help projects thrive.
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded font-semibold hover:opacity-95 transition">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
