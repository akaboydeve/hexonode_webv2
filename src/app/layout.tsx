import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // Helps build absolute URLs for OG, canonical, etc.
  metadataBase: new URL("https://hexonode.com"),
  title: {
    default: "HexoNode - Premium Hosting Solutions",
    template: "%s | HexoNode",
  },
  description:
    "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hexonode.com/",
    siteName: "HexoNode",
    title: "HexoNode - Premium Hosting Solutions",
    description:
      "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
    images: [
      {
        url: "/og-image.png", // <- matches your /public file
        width: 1200,
        height: 630,
        alt: "HexoNode - Premium Hosting Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hexonode",
    creator: "@hexonode",
    title: "HexoNode - Premium Hosting Solutions",
    description:
      "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting. Get high-performance hosting with 24/7 support, DDoS protection and instant deployment.",
    images: ["/og-image.png"],
  },
  // Replace these with real codes or remove
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: { canonical: "https://hexonode.com/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // --- JSON-LD: Organization (keep) ---
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HexoNode",
    url: "https://hexonode.com/",
    logo: "https://hexonode.com/logo.png",
    description:
      "Premium hosting solutions for gaming, VPS, dedicated servers and web hosting.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/akash_sardar_op",
      "https://www.linkedin.com/in/akashsardar/",
    ],
  };

  // --- JSON-LD: WebSite (NEW — this is what affects site name) ---
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HexoNode",                 // preferred site name
    alternateName: "HexoNode Hosting",
    url: "https://hexonode.com/",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
