import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DDoS Protection Services - 17 Tbps OVH Powered | HexoNode',
    description: 'Enterprise-grade DDoS protection with 17 Tbps mitigation powered by OVH network. Protect your Minecraft servers, websites, and applications with instant setup and 24/7 support.',
    keywords: ['DDoS protection', 'OVH protection', '17 Tbps', 'gaming server protection', 'website security', 'Minecraft DDoS protection'],
};

export default function DDoSProtectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}