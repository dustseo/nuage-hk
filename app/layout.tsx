import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NÜAGE 香港 | 瑞士植物幹細胞護膚",
  description: "以科學創新重塑肌膚年輕活力。NÜAGE結合瑞士頂尖技術與天然植物精華。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="zh-HK"><head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Noto+Sans+HK:wght@300;400;500&display=swap" />
  </head><body>{children}</body></html>);
}
