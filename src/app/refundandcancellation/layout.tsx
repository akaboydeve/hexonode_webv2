import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund and Cancellation Policy - Service Terms | HexoNode',
    description: 'Learn about HexoNode refund and cancellation policy. Understand our 24-hour refund window, service cancellation terms, and customer protection policies.',
    keywords: ['refund policy', 'cancellation policy', 'money back guarantee', 'service refund'],
};

export default function RefundAndCancellationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}