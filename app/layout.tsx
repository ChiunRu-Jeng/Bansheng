import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "伴生乳酪",
  description: "伴生 Bansheng 官方網站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
