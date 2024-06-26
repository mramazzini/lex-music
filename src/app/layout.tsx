import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nullart Music",
  description: "Custom music for your projects - By Nullart",
  keywords: "custom music, music projects, Nullart",
  openGraph: {
    title: "Nullart Music",
    description: "Custom music for your projects - By Nullart",
    type: "website",
    url: "https://nullartmusic.com",
    siteName: "Nullart Music",
    images: [
      {
        url: "https://nullartmusic.com/hero-bg.svg",
        width: 800,
        height: 600,
        alt: "Nullart Music",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nullart Music",
    description: "Custom music for your projects - By Nullart",
    images: [
      {
        url: "https://nullartmusic.com/hero-bg.svg",
        width: 800,
        height: 600,
        alt: "Nullart Music",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Freeman&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
