import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Our Services - Crest Study Consult: Comprehensive Study Abroad Solutions",
  description: "Explore Crest Study Consult's comprehensive services: Educational Counseling, University Application Support, Visa Assistance, Test Preparation, Financial Planning, and Pre-Departure Support. Your complete solution for studying abroad.",
  keywords: "educational counseling, university application, visa assistance, test preparation, IELTS, TOEFL, GRE, GMAT, SAT, financial planning, scholarships, pre-departure support, study abroad services, international education, student consulting",
  openGraph: {
    title: "Our Services - Crest Study Consult: Comprehensive Study Abroad Solutions",
    description: "Explore Crest Study Consult's comprehensive services: Educational Counseling, University Application Support, Visa Assistance, Test Preparation, Financial Planning, and Pre-Departure Support. Your complete solution for studying abroad.",
    url: "https://creststudyconsult.com/services",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Crest Study Consult: Comprehensive Study Abroad Solutions",
    description: "Explore Crest Study Consult's comprehensive services: Educational Counseling, University Application Support, Visa Assistance, Test Preparation, Financial Planning, and Pre-Departure Support. Your complete solution for studying abroad.",
    images: ["https://creststudyconsult.com/twitter-image-services.jpg"],
  },
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
        keywords={metadata.keywords as string}
        ogImage={(metadata.openGraph?.images as { url: string }[])?.[0]?.url as string}
        url={metadata.openGraph?.url as string}
      />
       <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
