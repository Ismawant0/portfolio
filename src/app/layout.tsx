import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

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

const defaultTitle = "Ismawanto";
const defaultDescription = "Front-End Developer building modern, fast, and production-ready web applications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ismawanto-portfolio.vercel.app"),
  title: {
    default: defaultTitle,
    template: "%s | Ismawanto",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Ismawanto",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <div className="max-w-2xl mx-auto px-6 py-16 md:py-32">
          {children}
        </div>
      </body>
    </html>
  );
}
