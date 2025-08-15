import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'India VPS Hosting - High Performance Virtual Servers | HexoNode',
    description: 'Premium VPS hosting in India with Intel, AMD Ryzen processors. Starting from ₹450/month with full root access, SSD storage, and 99.9% uptime guarantee.',
    keywords: ['India VPS', 'VPS hosting India', 'virtual private server', 'Mumbai VPS', 'Noida VPS', 'Linux VPS', 'Windows VPS'],
};

export default function IndiaVPSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}