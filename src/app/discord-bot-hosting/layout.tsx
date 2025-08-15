import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Discord Bot Hosting - 24/7 Uptime & Auto Restart | HexoNode',
    description: 'Reliable Discord bot hosting with 24/7 uptime, auto restart, and instant deployment. Starting from ₹50/month with DDR5 RAM and NVMe storage.',
    keywords: ['Discord bot hosting', 'bot hosting India', '24/7 uptime', 'auto restart', 'Discord hosting'],
};

export default function DiscordBotHostingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}