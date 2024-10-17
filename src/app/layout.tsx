import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Turus - Jawa Tengah, Klaten, Kec. Polanharjo",
  description: "Website Desa Turus",
  authors: [{ name: "Desa Turus", url: "https://www.desaturus.com/" }],
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
