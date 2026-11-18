import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./portfolio.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelrohr.vercel.app"),
  title: {
    default: "Rafael Rohr — Engineering, Mathematics & People",
    template: "%s | Rafael Rohr",
  },
  description:
    "Brazilian engineer and Duke ECE & Mathematics student. Explore Rafael Rohr’s work in applied AI, software, hardware, product, and teaching.",
  openGraph: {
    type: "website",
    siteName: "Rafael Rohr",
    locale: "en_US",
    title: "Rafael Rohr — Engineering, Mathematics & People",
    description:
      "Building technology that helps people do more. Software, hardware, finance, and teaching at Duke.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
