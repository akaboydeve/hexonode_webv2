import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Get Support & Information | HexoNode',
    description: 'Contact HexoNode for hosting support, sales inquiries, and technical assistance. Reach us via phone, email, or visit our office in West Bengal, India.',
    keywords: ['contact HexoNode', 'hosting support', 'customer service', 'technical support'],
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}