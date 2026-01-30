import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-20 py-12 bg-primary text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div>
                    <img src="/assets/logo.svg" alt="Logo" className="h-8 w-auto mb-2" />
                    <p className="text-sm text-white/90">Design · Build · Market</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><a href="#" className="hover:opacity-90">Home</a></li>
                        <li><a href="#" className="hover:opacity-90">Projects</a></li>
                        <li><a href="#" className="hover:opacity-90">Testimonials</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                    <p className="text-sm text-white/90">info@company.com</p>
                    <div className="flex gap-3 mt-4 text-white">
                        <a href="#" className="hover:opacity-90"><FaFacebook /></a>
                        <a href="#" className="hover:opacity-90"><FaTwitter /></a>
                        <a href="#" className="hover:opacity-90"><FaInstagram /></a>
                        <a href="#" className="hover:opacity-90"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-white/80 mt-8">&copy; {new Date().getFullYear()}. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
