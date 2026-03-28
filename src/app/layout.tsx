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
  title: "PropErgy Management | Specialist Building & Stakeholder Consultancy — Cape Town",
  description:
    "PropErgy Management is a specialist building and stakeholder support consultancy sitting at the intersection of property law, construction, governance, and operational reality.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PropErgy Management",
    description: "Bringing Proper Energy to Property Management",
    url: "https://propergymanagement.co.za",
    siteName: "PropErgy Management",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  metadataBase: new URL("https://propergymanagement.co.za"),
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
