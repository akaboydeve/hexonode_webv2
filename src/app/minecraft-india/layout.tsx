import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Minecraft Server Hosting India - High Performance Gaming | HexoNode',
    description: 'Premium Minecraft server hosting in India with Intel, AMD EPYC, and Ryzen 9 processors. Unlimited player slots, DDoS protection, and instant setup from ₹35/month.',
    keywords: ['Minecraft hosting India', 'Minecraft server hosting', 'gaming server India', 'Minecraft VPS', 'unlimited players'],
};

export default function MinecraftIndiaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}