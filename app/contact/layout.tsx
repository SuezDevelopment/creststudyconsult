import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import "./globals.css";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Contact Us - Crest Study Consult: Get in Touch for Study Abroad",
  description:
    "Contact Crest Study Consult for inquiries about study abroad programs, educational counseling, university applications, visa assistance, and more. Reach out to our expert team today.",
  keywords:
    "contact us, study abroad contact, educational counseling contact, university application help, visa assistance contact, Crest Study Consult contact, international education inquiry",
  openGraph: {
    title: "Contact Us - Crest Study Consult: Get in Touch for Study Abroad",
    description:
      "Contact Crest Study Consult for inquiries about study abroad programs, educational counseling, university applications, visa assistance, and more. Reach out to our expert team today.",
    url: "https://creststudyconsult.com/contact",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Crest Study Consult: Get in Touch for Study Abroad",
    description:
      "Contact Crest Study Consult for inquiries about study abroad programs, educational counseling, university applications, visa assistance, and more. Reach out to our expert team today.",
    images: ["https://creststudyconsult.com/twitter-image-contact.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SEO
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords as string}
        ogImage={
          (metadata.openGraph?.images as { url: string }[])?.[0]?.url as string
        }
        url={metadata.openGraph?.url as string}
      />
      {children}
    </>
  );
}
