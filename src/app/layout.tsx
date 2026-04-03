import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Elit Yapı | Premium İnşaat & Mimarlık",
  description:
    "Ankara'nın güvenilir inşaat firması. 15+ yıllık tecrübe ile konut, villa, ticari yapı, restorasyon ve anahtar teslim projeler.",
  keywords: [
    "Elit Yapı", "inşaat", "mimarlık", "Ankara", "konut", "villa",
    "ticari inşaat", "restorasyon", "anahtar teslim", "premium",
  ],
  openGraph: {
    title: "Elit Yapı | Premium İnşaat & Mimarlık",
    description: "Ankara'nın güvenilir inşaat firması.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#0b0f1a" }}
      >
        {children}
      </body>
    </html>
  );
}
