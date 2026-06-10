import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gurukrupa Paint - #1 Interior Painting Contractor in Mumbai & Thane",
    template: "%s | Gurukrupa Paint",
  },
  description:
    "Gurukrupa Paint - Mumbai's #1 interior painting contractor. Expert interior, exterior and house painting services across Mumbai, Thane and Maharashtra. Since 1992.",
  keywords: [
    "interior painting Mumbai",
    "exterior painting Thane",
    "house painting Maharashtra",
    "painting contractor Mumbai",
    "Gurukrupa Paint",
    "best painters Mumbai",
  ],
  openGraph: {
    title: "Gurukrupa Paint - #1 Interior Painting Contractor",
    description:
      "Expert interior, exterior and house painting services across Mumbai, Thane and Maharashtra. Since 1992.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
