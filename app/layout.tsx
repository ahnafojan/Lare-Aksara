import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Lare Aksara | Literasi & Kesenian Anak",
  description:
    "Komunitas literasi indie untuk anak-anak di Banjarnegara melalui buku, musik, dan seni rupa.",
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
        {children}
      </body>
    </html>
  );
}
