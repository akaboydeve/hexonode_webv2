import React from 'react';
import { FileText, Home } from 'lucide-react';
import Link from 'next/link';

const ContactUs: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-400">Get in touch with our team for any questions or support</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-8">
                        <FileText className="h-12 w-12 text-purple-400" />
                    </div>

                    <div className="bg-gray-700 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <span className="font-medium text-purple-400">Merchant Legal Entity:</span>
                                <p>AKASH SARDAR</p>
                            </div>

                            <div>
                                <span className="font-medium text-purple-400">Registered Address:</span>
                                <p>1 Tulshighata, Nimpith Ashram, South 24 Paragana, West Bengal, PIN: 743338</p>
                            </div>

                            <div>
                                <span className="font-medium text-purple-400">Operational Address:</span>
                                <p>1 Tulshighata, Nimpith Ashram, South 24 Paragana, West Bengal, PIN: 743338</p>
                            </div>

                            <div>
                                <span className="font-medium text-purple-400">Telephone:</span>
                                <p>9064890344</p>
                            </div>

                            <div>
                                <span className="font-medium text-purple-400">Email:</span>
                                <p>joynagarakash@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-500">Last updated on 31-03-2025 21:14:01</p>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            <Home className="h-5 w-5 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs; 