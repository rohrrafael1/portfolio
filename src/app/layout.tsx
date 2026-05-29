import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Rohr | Duke ECE",
  description:
    "Brazilian rising junior at Duke studying Electrical & Computer Engineering (minors: Finance, Math). Builds reliable systems across secure software, hardware verification, and applied research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-zinc-200 dark:bg-black dark:text-zinc-50 dark:selection:bg-zinc-800">
        <Providers>
          <Navbar />
          <main className="flex-1 bg-white dark:bg-zinc-900">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
