import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Versus Game Center | Premium Oyun & E-Sports Deneyimi",
  description:
    "Yüksek performanslı gaming PC'ler, VR deneyimi, PlayStation 5, turnuvalar ve daha fazlası. Versus Game Center'da e-sports tutkusunu yaşa!",
  keywords: [
    "Versus Game Center",
    "oyun merkezi",
    "internet kafe",
    "gaming cafe",
    "e-sports",
    "turnuva",
    "VR oyun",
    "PC gaming",
  ],
  openGraph: {
    title: "Versus Game Center | Premium Oyun & E-Sports Deneyimi",
    description: "Yüksek performanslı gaming PC'ler, VR deneyimi ve e-sports turnuvaları.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
