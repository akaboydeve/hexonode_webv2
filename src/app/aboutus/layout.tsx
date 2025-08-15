import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | HexoNode - Premium Hosting Solutions',
    description: 'Learn about HexoNode, our mission, values, and our commitment to providing high-quality hosting solutions for gaming, VPS, and web hosting customers worldwide.',
    keywords: ['about HexoNode', 'hosting company', 'our mission', 'hosting services'],
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}