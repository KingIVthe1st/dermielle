import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dermielle | Stress-Free Luxury Car Buying Concierge",
  description: "Experience premium car buying with our expert concierge service. Personalized recommendations, nationwide vehicle sourcing, and stress-free delivery for luxury and lightly used cars.",
  keywords: ["car buying", "luxury cars", "car concierge", "auto broker", "car buying service", "used cars", "nationwide car dealer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
