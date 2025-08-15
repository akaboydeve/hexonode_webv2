'use client';
import React from 'react';
import { ArrowRight, Award, X } from 'lucide-react';

interface SpecialOfferSectionProps {
    onGetStarted: () => void;
    onViewServices: () => void;
    onDismiss?: () => void;
}

const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({ onGetStarted, onViewServices, onDismiss }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-violet-500/30 rounded-2xl p-6 overflow-hidden shadow-2xl">
                    {/* Background glow effects */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl"></div>

                    {/* Dismiss Button */}
                    {onDismiss && (
                        <button
                            onClick={onDismiss}
                            className="absolute top-4 right-4 w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                            aria-label="Dismiss special offer"
                        >
                            <X className="w-4 h-4 text-slate-300 hover:text-white" />
                        </button>
                    )}

                    <div className="relative z-10 text-center">
                        {/* Header */}
                        <div className="mb-4">
                            <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1.5 mb-3">
                                <span className="text-lg">🎉</span>
                                <span className="text-violet-300 text-xs font-semibold">Special for Content Creators</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-3">
                                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                    Perfect for YouTubers & Network Owners
                                </span>
                            </h3>
                        </div>

                        {/* Main content */}
                        <div className="space-y-4 mb-6">
                            <p className="text-base text-slate-300 leading-relaxed">
                                Our hosting welcomes <span className="text-violet-400 font-semibold">YouTubers</span> and <span className="text-violet-400 font-semibold">large network owners</span>.
                                We can provide dedicated servers or any CPU you require to host your own network with custom specifications.
                            </p>

                            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-center space-x-2">
                                    <Award className="w-5 h-5 text-emerald-400" />
                                    <span>Why Choose Us?</span>
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    We have <span className="text-emerald-400 font-semibold">strong partnerships with data centres</span> and can provide any CPU, VPS, VDS, or dedicated server.
                                    By choosing us, you will get our <span className="text-emerald-400 font-semibold">custom CPUs at very affordable prices</span>.
                                </p>
                            </div>
                        </div>

                        {/* Discord CTA */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="https://discord.hexonode.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-indigo-500/25"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    <span>Join Our Discord</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            <button
                                onClick={onViewServices}
                                className="group bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 text-emerald-300 font-semibold px-6 py-3 rounded-xl hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:border-transparent transition-all duration-300"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span>View Our Services</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOfferSection;