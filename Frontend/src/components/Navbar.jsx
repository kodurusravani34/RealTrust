import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-primary text-white fixed w-full z-50 top-0 left-0 py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/assets/logo.svg" alt="Logo" className="h-8 w-auto" />
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm">
                    <a href="#home" className="text-gray-200 hover:text-white transition">Home</a>
                    <a href="#services" className="text-gray-200 hover:text-white transition">Services</a>
                    <a href="#projects" className="text-gray-200 hover:text-white transition">Projects</a>
                    <a href="#testimonials" className="text-gray-200 hover:text-white transition">Testimonials</a>
                    <a href="#contact" className="text-gray-200 hover:text-white transition">Contact</a>
                </div>

                <div className="flex items-center gap-3">
                    <Link to="/admin" className="hidden md:inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:opacity-95 transition">
                        <FaUserShield /> Admin
                    </Link>

                    <button className="md:hidden text-white">Menu</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
