import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Service Agreement | HexoNode',
    description: 'Read HexoNode terms and conditions for hosting services. Understand your rights, responsibilities, refund policy, and service agreements.',
    keywords: ['terms and conditions', 'service agreement', 'hosting terms', 'refund policy'],
};

export default function TermsAndConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}