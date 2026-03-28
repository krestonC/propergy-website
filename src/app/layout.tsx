import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PropErgy Management | Independent Property Governance — Cape Town",
  description:
    "PropErgy is an independent managing agent redefining how Cape Town buildings are governed, maintained, and protected.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PropErgy Management",
    description: "Your building deserves better.",
    url: "https://propergy.co.za",
    siteName: "PropErgy Management",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  metadataBase: new URL("https://propergy.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
