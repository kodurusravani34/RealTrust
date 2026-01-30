import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaProjectDiagram, FaUserTie, FaEnvelope, FaNewspaper, FaArrowLeft } from 'react-icons/fa';

const AdminSidebar = () => {
    return (
        <div className="w-64 bg-primary text-white min-h-screen p-6 relative">
            <NavLink to="/" className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary hover:opacity-95" title="Back to site">
                <FaArrowLeft className="text-lg" />
            </NavLink>
            <h2 className="text-2xl font-bold mb-10 text-center border-b border-white/20 pb-4">Admin Panel</h2>
            <nav className="space-y-4 mt-6">
                <NavLink to="/admin/projects" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                    <FaProjectDiagram />
                    <span>Projects</span>
                </NavLink>
                <NavLink to="/admin/clients" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                    <FaUserTie />
                    <span>Clients</span>
                </NavLink>
                <NavLink to="/admin/contacts" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                    <FaEnvelope />
                    <span>Contacts</span>
                </NavLink>
                <NavLink to="/admin/subscribers" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded transition ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                    <FaNewspaper />
                    <span>Subscribers</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default AdminSidebar;
