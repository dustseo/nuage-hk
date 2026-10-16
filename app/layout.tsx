import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif", display: "swap" });
const sans = Noto_Sans_HK({ weight: ["300", "400", "500"], variable: "--font-sans", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "NÜAGE 香港 | 瑞士植物幹細胞護膚 Swiss Skincare", template: "%s | NÜAGE 香港" },
  description: "NÜAGE 以科學創新重塑肌膚年輕活力，結合瑞士頂尖技術與天然植物精華，帶來瑞士植物幹細胞護膚體驗。",
  alternates: { canonical: "/" },
  openGraph: { siteName: "NÜAGE 香港", locale: "zh_HK", type: "website", images: [{ url: "/images/serum.jpg", width: 1200, height: 800, alt: "NÜAGE 瑞士植物精華護膚" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK" className={`${serif.variable} ${sans.variable}`}>
      <body><Header /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}
