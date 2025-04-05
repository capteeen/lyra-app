import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyra - AI-Powered Creation Tools",
  description: "Transform your ideas into reality with Lyra's AI-powered tools for image generation, video processing, and more.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
    apple: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
