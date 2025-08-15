import React from 'react';
import { FileText, Home } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-400">Learn how we collect, use, and protect your information</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-8">
                        <FileText className="h-12 w-12 text-purple-400" />
                    </div>

                    <div className="text-white space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Privacy Policy for Hexonode.com</h2>
                            <p className="text-gray-300 mb-6">Last Updated: 31-03-2025</p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                                    <p className="text-gray-300">
                                        Hexonode.com (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) respects your privacy. This policy explains how we handle your information when you use our Minecraft server hosting, VPS hosting, webserver hosting, and domain hosting services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
                                    <p className="text-gray-300">
                                        We collect your personal info (name, email, payment details) and usage data (IP address, browser type) to provide and improve our services.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">3. How We Use Your Information</h3>
                                    <p className="text-gray-300">
                                        We use your info to deliver services, process payments, communicate updates, and improve user experience.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">4. Sharing Your Information</h3>
                                    <p className="text-gray-300">
                                        We may share your data with trusted service providers or when required by law.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">5. Security</h3>
                                    <p className="text-gray-300">
                                        We take reasonable measures to protect your data but can't guarantee absolute security.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">6. Cookies</h3>
                                    <p className="text-gray-300">
                                        We use cookies to improve your experience. You can manage cookies through your browser settings.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">7. Your Rights</h3>
                                    <p className="text-gray-300">
                                        You can access, update, or delete your data, and opt-out of marketing emails anytime.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">8. International Data Transfers</h3>
                                    <p className="text-gray-300">
                                        Your data may be transferred and stored in the U.S. By using our services, you consent to this.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">9. Contact Us</h3>
                                    <div className="text-gray-300 space-y-2">
                                        <p><strong>Merchant Legal Entity:</strong> AKASH SARDAR</p>
                                        <p><strong>Address:</strong> 1 Tulshighata, Nimpith Ashram, South 24 Paragana, West Bengal, PIN: 743338</p>
                                        <p><strong>Phone:</strong> 9064890344</p>
                                        <p><strong>Email:</strong> joynagarakash@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default PrivacyPolicy; 