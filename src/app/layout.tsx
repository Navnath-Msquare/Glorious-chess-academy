import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Glorious Chess Academy",
  description: "Learn chess from expert coaches with structured programs, tournaments, and certification. Join Glorious Chess Academy – leading in Marathwada and expanding across India.",
  icons: {
    icon: "/logo.png", // favicon
  },
};
import WhatsAppButton from "@/components/whatsapp-button";
import SplashScreen from "@/components/splash-screen";

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
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SplashScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
