import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const defaultTitle = "Ismawanto — Front-End Developer | React, Next.js & Modern Web Apps";
const defaultDescription = "Ismawanto is a Front-End Developer specializing in React, Next.js, Tailwind CSS, frontend architecture, performance optimization, and production-ready web applications.";
const siteUrl = "https://ismawanto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Ismawanto",
  },
  description: defaultDescription,
  keywords: [
    "Ismawanto",
    "Front-End Developer",
    "React Developer Indonesia",
    "Next.js Developer",
    "Tailwind CSS",
    "TypeScript",
    "UI Engineer",
    "Frontend Architecture",
    "Web Performance",
    "Ismawanto Developer",
  ],
  authors: [{ name: "Ismawanto", url: siteUrl }],
  creator: "Ismawanto",
  publisher: "Ismawanto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Ismawanto",
    images: [
      {
        url: "/og-image.png", // Recommended to add this file in public/
        width: 1200,
        height: 630,
        alt: "Ismawanto — Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@ismawanto", // Update if different
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-zinc-950 text-zinc-300 antialiased selection:bg-zinc-800 selection:text-zinc-100`}
      >
        <Spotlight />
        <StructuredData />
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-32">
          <main id="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
