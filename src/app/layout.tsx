import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  title: "Johina",
  description: "Johina website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
          <div className="container mx-auto flex flex-col items-center">
            {/* Photo placeholder */}
            <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
              {/* Replace with actual logo when available */}
              <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-400">
                Logo
              </div>
            </div>
            
            {/* Navigation links */}
            <ul className="flex space-x-6 mt-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/murales" className="hover:text-blue-500 transition-colors">
                  Murales
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
