import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF4EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://32smiles.in"),
  title: {
    default: "32 Smiles | Bangalore's Premier Multispeciality Dental Clinics",
    template: "%s | 32 Smiles Dental Clinics",
  },
  description:
    "Top-rated multispeciality dental clinics in Bangalore since 2005. 9 state-of-the-art branches in Indiranagar, Koramangala, Whitefield & more. Painless Root Canals, Invisalign, Dental Implants & Smile Makeovers.",
  keywords: [
    "dental clinic Bangalore",
    "best dentist Bangalore",
    "painless root canal",
    "Invisalign Bangalore",
    "dental implants",
    "32 Smiles dental",
  ],
  authors: [{ name: "32 Smiles Dental Clinics" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "32 Smiles | Bangalore's Premier Multispeciality Dental Clinics",
    description:
      "Painless Root Canals, Certified Invisalign Aligners, Keyhole Dental Implants & Cosmetic Dentistry across 9 Bangalore branches.",
    url: "https://32smiles.in",
    siteName: "32 Smiles Dental Clinics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF4EA] text-[#2B2420] font-sans antialiased selection:bg-[#D9A93B]/30 selection:text-[#573F00] flex flex-col">
        {children}
      </body>
    </html>
  );
}
