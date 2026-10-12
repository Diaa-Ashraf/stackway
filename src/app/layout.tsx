import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { BackgroundCanvas } from "@/components/layout/BackgroundCanvas";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stackway | Digital Products & Real Results",
  description: "Websites, mobile apps, e-commerce, custom software, and managed cloud hosting engineered for high-performance businesses.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${ibmArabic.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased min-h-screen selection:bg-[var(--accent)] selection:text-white transition-colors duration-200 relative">
        <BackgroundCanvas />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
