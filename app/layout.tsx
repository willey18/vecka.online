import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vecka Online - Aktuellt veckonummer",
  description: "Se vilken vecka det är just nu. Enkel och elegant visning av aktuellt veckonummer enligt svenska standarder.",
  keywords: ["vecka", "veckonummer", "kalender", "datum", "tid"],
  authors: [{ name: "Vecka Online" }],
  creator: "Vecka Online",
  publisher: "Vecka Online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vecka.online"),
  openGraph: {
    title: "Vecka Online - Aktuellt veckonummer",
    description: "Se vilken vecka det är just nu. Enkel och elegant visning av aktuellt veckonummer enligt svenska standarder.",
    url: "https://vecka.online",
    siteName: "Vecka Online",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecka Online - Aktuellt veckonummer",
    description: "Se vilken vecka det är just nu. Enkel och elegant visning av aktuellt veckonummer enligt svenska standarder.",
  },
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
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H8ZGC7F507"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H8ZGC7F507');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
