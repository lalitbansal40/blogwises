import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: "BlogWises",
  description: "Discover thoughtful articles and insights on BlogWises.",
  other: {
    'google-site-verification': 'EieLob6DcEfRLtpYU4ibHRE3VsyRQSEzvtEHa3TT9Sg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen mt-15 bg-white w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
