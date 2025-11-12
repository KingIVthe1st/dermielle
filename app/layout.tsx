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

  // OpenGraph Meta Tags for Social Sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dermielleautogroup.com",
    siteName: "Dermielle",
    title: "Dermielle | Stress-Free Luxury Car Buying Concierge",
    description: "Experience premium car buying with our expert concierge service. Personalized recommendations, nationwide vehicle sourcing, and stress-free delivery for luxury and lightly used cars.",
    images: [
      {
        url: "/socialshare.png",
        width: 1200,
        height: 630,
        alt: "Dermielle - Premium Car Buying Concierge Service",
      },
    ],
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Dermielle | Stress-Free Luxury Car Buying Concierge",
    description: "Experience premium car buying with our expert concierge service. Personalized recommendations, nationwide vehicle sourcing, and stress-free delivery for luxury and lightly used cars.",
    images: ["/socialshare.png"],
  },

  // Additional Meta Tags
  metadataBase: new URL("https://dermielleautogroup.com"),
  alternates: {
    canonical: "https://dermielleautogroup.com",
  },
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
