import type { Metadata } from "next";
import localFont from "next/font/local";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

const playfairDisplay = localFont({
  src: "../public/fonts/playfair-latin.woff2",
  display: "swap",
  variable: "--font-playfair-display",
  weight: "700 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Lare Aksara | Literasi & Kesenian Anak",
    template: "%s | Lare Aksara",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Lare Aksara",
    "literasi anak",
    "kesenian anak",
    "komunitas Banjarnegara",
    "buku anak",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Lare Aksara | Literasi & Kesenian Anak",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero.jpg",
        alt: "Kegiatan Lare Aksara bersama anak-anak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lare Aksara | Literasi & Kesenian Anak",
    description: siteConfig.description,
    images: ["/images/hero.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/images/logo.png"),
  description: siteConfig.description,
  areaServed: {
    "@type": "City",
    name: "Banjarnegara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
