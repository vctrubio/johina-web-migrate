import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <nav className="w-full p-4 bg-neutral-50 dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto flex flex-col items-center">
              {/* Top row with logo and theme toggle */}
              {/* <div className="w-full flex justify-end mb-2">
                <ThemeToggle />
              </div> */}
              
              {/* Photo placeholder */}
              <div className="w-32 h-32 bg-white dark:bg-gray-700 rounded-full mb-4 overflow-hidden shadow-md">
                {/* Replace with actual logo when available */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Logo
                </div>
              </div>
              
              {/* Navigation links */}
              <ul className="flex space-x-8 mt-2">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/murales" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium">
                    Murales
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mx-auto py-8 px-4 sm:px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
