import React from 'react';
import { FileText, Home } from 'lucide-react';
import Link from 'next/link';

const RefundAndCancellation: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Refund and Cancellation Policy</h1>
                    <p className="text-xl text-gray-400">Our policies regarding refunds and service cancellations</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-8">
                        <FileText className="h-12 w-12 text-purple-400" />
                    </div>

                    <div className="text-white space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Cancellation & Refund Policy</h2>
                            <p className="text-gray-300 mb-4">Last updated on 31-03-2025 21:15:02</p>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 mb-6">
                                AKASH SARDAR believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
                            </p>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>AKASH SARDAR does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within <strong>24 hours</strong> of receipt of the products.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>2 Days</strong> of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Refunds on select products are available only within <strong>24 hours</strong> of purchase. Refund requests must be submitted with a valid reason and are subject to review by our team.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Depending on the nature of the service and validity of the reason provided, customers may not receive a 100% refund. Partial refunds may be issued based on service usage and circumstances.</span>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>In case of any Refunds approved by the AKASH SARDAR, it'll take <strong>1-2 Days</strong> for the refund to be processed to the end customer.</span>
                                </li>
                            </ul>
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

export default RefundAndCancellation; 