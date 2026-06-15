import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "伴生乳酪 — 日日相伴的乳酪甜點",
  description:
    "伴生乳酪，以北海道乳酪為核心，手工製作一口乳酪球與冷藏生乳酪蛋糕。相伴而生的乳酪甜點，陪你度過每一個值得的日常。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
