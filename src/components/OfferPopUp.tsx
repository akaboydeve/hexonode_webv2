// components/OfferModal.js
'use client'
import { useState, useEffect } from 'react';

const OfferModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 2000);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openDiscord = () => {
        window.open('https://discord.hexonode.com', '_blank');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed mt-20 inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border border-slate-700 transform animate-in fade-in zoom-in duration-300 relative">
                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 w-8 h-8 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-lg font-bold border border-slate-600"
                >
                    ×
                </button>

                {/* Celebration icon */}
                <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🎉</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Congratulations!
                </h2>

                <p className="text-slate-300 mb-4 text-lg">You&apos;ve unlocked a special offer!</p>

                <div className="bg-slate-800/50 p-6 rounded-xl mb-6 border border-slate-600">
                    <p className="text-xl font-semibold text-white mb-2">
                        Purchase ₹1999 & Get FREE
                    </p>
                    <p className="text-lg text-green-400 font-medium mb-2">
                        🎮 Minecraft Account
                    </p>
                    <p className="text-lg text-green-400 font-medium">
                        🎯 Xbox Game Pass (1 Month)
                    </p>
                </div>

                <p className="text-slate-300 mb-6">
                    Join our Discord community to claim this exclusive offer!
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={openDiscord}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        Join Discord & Claim Offer
                    </button>

                    <button
                        onClick={closeModal}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-medium py-2 px-4 rounded-xl transition-all duration-200"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferModal;