import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HexoNode - Premium Hosting Solutions",
  description: "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
  keywords: ["hexonode", "hosting", "VPS", "dedicated servers", "gaming servers", "web hosting", "cloud hosting", "DDoS protection"],
  authors: [{ name: "HexoNode" }],
  creator: "HexoNode",
  publisher: "HexoNode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hexonode.com',
    siteName: 'HexoNode',
    title: 'HexoNode - Premium Hosting Solutions',
    description: 'Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HexoNode - Premium Hosting Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hexonode',
    creator: '@hexonode',
    title: 'HexoNode - Premium Hosting Solutions',
    description: 'Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://hexonode.com',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HexoNode",
    "url": "https://hexonode.com",
    "logo": "https://hexonode.com/logo.png",
    "description": "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/akash_sardar_op",
      "https://www.linkedin.com/in/akashsardar/"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Web Hosting Services"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
