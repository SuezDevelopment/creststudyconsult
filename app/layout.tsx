import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Crest Study Consult - Study Abroad Dreams Made Reality",
  description: "Transform your future with world-class education. We guide ambitious students to top universities across the globe with personalized consulting and comprehensive support.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO 
        title={metadata.title as string}
        description={metadata.description as string}
        keywords="study abroad, international education, university consulting, student support, top universities, global education, study overseas, education consulting"
        ogImage="https://creststudyconsult.com/og-image.jpg" // Replace with your actual image URL
        url="https://creststudyconsult.com" // Replace with your actual site URL
      />
       <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
