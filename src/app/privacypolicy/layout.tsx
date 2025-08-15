import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Data Protection & Security | HexoNode',
    description: 'Learn how HexoNode collects, uses, and protects your personal information. Our privacy policy covers data security, cookies, and your rights.',
    keywords: ['privacy policy', 'data protection', 'information security', 'GDPR compliance'],
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}