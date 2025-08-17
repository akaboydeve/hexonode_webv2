import React from 'react';
import { Server, Users, Shield, Home } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-purple-400">Hexonode Hosting</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I&apos;m Akash Sardar, co-founder of Hexonode Hosting, a company dedicated to providing reliable and high-performance hosting solutions for a wide variety of needs. Together with my co-founder, Rehan Haider, we built Hexonode Hosting with a vision to make powerful hosting accessible, secure, and easy to use.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Whether you&apos;re looking for Minecraft server hosting, VPS hosting, web hosting, or domain hosting, our goal is to deliver the best infrastructure and unmatched customer service. We pride ourselves on offering flexible and scalable solutions designed to help individuals, businesses, and gaming communities get the most out of their online presence.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With our cutting-edge technology, 24/7 support, and customer-first approach, Hexonode Hosting ensures that your hosting experience is smooth, fast, and secure. At Hexonode Hosting, we strive to empower our users with the right tools and services to build, manage, and grow their online projects with confidence.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Server className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Reliable Infrastructure</h3>
                        <p className="text-gray-400">High-performance servers with 99.9% uptime guarantee</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                        <p className="text-gray-400">Expert technical support available around the clock</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                        <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                        <p className="text-gray-400">Advanced security measures to protect your data</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                        <Home className="h-5 w-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
} 