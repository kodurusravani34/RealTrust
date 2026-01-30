import React, { useState } from 'react';
import api from '../utils/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/subscribers', { email });
            setIsSubscribed(true);
            setMessage('Subscribed successfully!');
            setEmail('');
            setTimeout(() => {
                setIsSubscribed(false);
                setMessage('');
            }, 5000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error subscribing. (Check DB Connection)');
        }
    };

    return (
        <section className="py-12 bg-white text-black">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="p-6 rounded-xl text-center bg-white shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-black">Join our Newsletter</h2>
                    <p className="text-gray-700 mb-4">Get monthly case studies and project highlights.</p>

                    {isSubscribed ? (
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-green-600 mb-1">Thank you!</h3>
                            <p className="text-gray-700">You have been subscribed.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 p-3 rounded bg-white border border-gray-300 focus:outline-none" />
                            <button type="submit" className="px-6 py-2 bg-primary text-white rounded font-semibold">Subscribe</button>
                        </form>
                    )}
                    {message && <p className={`mt-3 ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
